import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    ReferenceLine,
  } from 'recharts';
  import { startOfWeek, addDays, isSameDay, format } from 'date-fns';
  import { csvDataType } from '../../lib/utils';
  import { it } from 'date-fns/locale';
  
  type Props = {
    csvData: csvDataType[];
    stepsGoal: number;
    selectedDate: Date;
  };
  
  const WeeklyStepsChart = ({ csvData, stepsGoal, selectedDate }: Props) => {
    // Calcola l'inizio della settimana (lunedì) in base a selectedDate
    const weekStart = startOfWeek(selectedDate, { weekStartsOn: 1 });
  
    // Array dei 7 giorni (lun → dom)
    const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));
  
    // Prepara i dati fino al giorno selezionato
    const chartData = weekDays
      .map((day) => {
        const entry = csvData.find((e) => isSameDay(new Date(e.time), day));
        return {
          day: format(day, 'EEEE', { locale: it }), // usa default locale (Mon, Tue…)
          steps: entry ? Number(entry.steps) : 0,
          goal: stepsGoal,
        };
      });
  
    if (chartData.length === 0) {
      return <p className="text-gray-500 text-center">Nessun dato per questa settimana.</p>;
    }
  
    return (
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={chartData}>
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip />
          <ReferenceLine y={stepsGoal} stroke="red" strokeDasharray="5 5" strokeWidth={2}/>
          <Bar dataKey="steps" fill="#3b82f6" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    );
  };
  
  export default WeeklyStepsChart;
  