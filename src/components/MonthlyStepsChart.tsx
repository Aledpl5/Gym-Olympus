import { useMemo, useState } from "react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceLine,
} from "recharts";
import { monthlyStepsChartType } from "../../lib/utils";

type DailySteps = {
  date: string; // solo il numero del giorno, es. "1", "2", ...
  steps: number; // passi accumulati in quel giorno
};

const MonthlyStepsChart = ({ selectedDate, stepsGoal }: monthlyStepsChartType) => {
  const year = selectedDate.getFullYear();
  const month = selectedDate.getMonth(); // 0 = gennaio, …, 11 = dicembre

  // Calcola il numero di giorni totali nel mese
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Carica i dati da localStorage (una sola volta)
  const [rawData] = useState<{ csvData?: any[] }>(() => {
    const stored = localStorage.getItem("formData");
    return stored ? JSON.parse(stored) : {};
  });

  // Prepara i dati del grafico quando cambia selectedDate o rawData
  const chartData: DailySteps[] = useMemo(() => {
    const stepsPerDay: Record<number, number> = {};

    // Inizializzo tutti i giorni del mese a 0 passi
    for (let d = 1; d <= daysInMonth; d++) {
      stepsPerDay[d] = 0;
    }

    // Somma i passi per ogni entry valida fino al giorno selezionato
    if (Array.isArray(rawData.csvData)) {
      rawData.csvData.forEach((entry) => {
        const entryDate = new Date(entry.time);
        const entryDay = entryDate.getDate();
        const entryMonth = entryDate.getMonth();
        const entryYear = entryDate.getFullYear();

        // Considera solo le entry del mese/anno corretti e fino al giorno selezionato
        if (
          entryYear === year &&
          entryMonth === month
        ) {
          stepsPerDay[entryDay] += Number(entry.steps) || 0;
        }
      });
    }

    // Trasforma in array ordinato per giorno
    return Object.entries(stepsPerDay)
      .map(([dayStr, steps]) => ({ date: dayStr, steps }))
      .sort((a, b) => Number(a.date) - Number(b.date));
  }, [selectedDate, rawData, daysInMonth]);

  return (
    <div style={{ width: "100%", height: 350 }}>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={chartData} margin={{ top: 20, right: 30, left: 10, bottom: 20 }}>
          <XAxis
            dataKey="date"
            label={{ value: "Giorno", position: "insideBottom", offset: -10 }}
          />
          <YAxis label={{ value: "Passi", angle: -90, position: "insideLeft" }} />
          <Tooltip />
          <ReferenceLine y={stepsGoal} stroke="red" strokeWidth={2} strokeDasharray="5 5" />
          <Bar dataKey="steps" fill="#4f46e5" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlyStepsChart;
