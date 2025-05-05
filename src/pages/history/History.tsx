import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar";
import Papa from "papaparse";
import ActivityCard from "../../components/ActivityCard";
import { Activity } from "../../../lib/utils";
import axios from "axios";

const History: React.FC = () => {

    // states
    const [activities, setActivities] = useState<Activity[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // imposto l'url del file CSV sorgente
    const csvUrl = "/3-data_storico_attivita.csv";

    // uso axios per fare una richiesta GET al file CSV
    const fetchData = async () => {
      try {
        const response = await axios.get(csvUrl, {
          responseType: "text",
        });

        // vado ad eseguire il parsing del file CSV specificando le righe di tipo Activity
        Papa.parse<Activity>(response.data, {
          header: true,
          worker: true,
          skipEmptyLines: true,
          complete: (results) => {
            // una volta terminato il parsing, vado a settare lo stato delle attività come array del risultato
            setActivities(results.data as Activity[]);
            setLoading(false);
          },
          error: (error) => {
            console.log(error);
            setLoading(false);
          },
        });
      } catch (error) {
        setLoading(false);
      }
    };

    // faccio eseguirela funzione al caricamento del componente
    fetchData();
  }, []);

  return (
    <div className="flex min-h-screen">
      {/* Componente di Sidebar */}
      <Sidebar />

      {/* Componente principale della pagina */}
      <main className="ml-24 sm:ml-48 flex-1 bg-gray-100 min-h-screen py-8 px-4 sm:px-6 lg:px-8 font-sans overflow-y-auto relative">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-left">
          Storico delle attività
        </h1>

        {loading ? (
          <p className="text-gray-500">Caricamento in corso...</p>
        ) : activities.length > 0 ? (
          activities.map((act, idx) => (
            <ActivityCard key={idx} activity={act} />
          ))
        ) : (
          <p className="text-gray-500">Nessuna attività trovata.</p>
        )}
      </main>
    </div>
  );
};

export default History;
