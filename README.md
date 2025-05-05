# Gym Olympus

## 1. Obiettivi
Questa applicazione si pone come obiettivo quello di monitorare il numero di passi giornalieri registrati da un utente e mostrarli sotto forma di grafici per ricavarne dei report giornalieri, settimanali e mensili.

## 2. Struttura 
- `Landing.tsx`: componente principale della nostra applicazione. Mostra un form in cui viene chiesto il numero di passi da impostare come obiettivo e la sorgente dei dati.
- `Dashboard.tsx`: pagina in cui vengono mostrati i dati giornalieri, settimanali e mensili dei passi registrati.
- `Exercises.tsx`: pagina in cui è possibile generare automaticamente una scheda di allenamento.
- `Settings.tsx`: pagina in cui è possibile modificare il numero di passi giornalieri impostati come obiettivo.
- `History.tsx`: pagina in cui è possibile visualizzare lo storico delle attività registrate (camminate, corse, sessioni di ciclismo).
- `MonthlyStepsChart.tsx` `WeeklyStepsChart.tsx` `StepChart.tsx`: componenti che mostrano dei grafici.
- `MonthData.tsx` `WeekData.tsx`: componenti che mostrano dei box con i dati mensili e settimanali registrati.
- `ActivityCard.tsx` `Card.tsx` `ChooseCard.tsx` `ExerciseCard.tsx` `Sidebar.tsx`: componenti secondari utilizzati per migliorare la UI. 

## 3. Limiti attuali
- L'applicazione si basa si dati statici caricati dall'utente nella prima pagina dell'applicazione.
- Il file dello storico delle attività è caricato automaticamente e in modo statico da un file `.csv`. Sarebbe opportuno usare un datase costantemente aggiornato.

## 4. Componenti
- Alessandro De Carli: VR500321
- Petrov Toni Emilov: VR500646

## 5. Tecnologie utilizzate
- `Tailwind CSS`: per una stilizzazione più veloce
- `lucid-react`: per l'utilizzo di icone
- `date-fns`: per l'utilizzo di funzioni ottimizzate per le date
- `React` con `TypeScript`: per la struttura dell'interfaccia utente
- `Vite`:  come bundler e ambiente di sviluppo
- `Papaparse`: per eseguire il `parsing` del file `.csv` caricato
- `recharts`: per la costruzione di grafici
- `router-dom`: per la navigazione
- `eslint` con `globals`: aiuta con errori sintattici nel codice assieme ad alcune variabili globali predefinite
- `autoprefixer`: serve per la compatibilità delle pagine su browser diversi
- `axios`: serve per chiamate API. Nel nostro caso, serve per eseguire una GET per reperire il file di storico delle attività.

## 6. Installazione per l'utilizzo
Per poter eseguire l'applicazione bisogna assicurarsi che innanzitutto si ha `NodeJS` installato sul proprio computer.

Per scaricare `NodeJS` si può seguire questo [link](https://nodejs.org/en/download) oppure seguire i seguenti passaggi da terminale:

```bash
sudo apt update
sudo apt install -y nodejs npm
```

Una volta installato per verificare che tutto è andato a buon fine,
è consigliato eseguire questi comandi da terminale:
```bash
node -v
npm -v
```

> E' consigliato l'installazione di `NVM` per una più semplice gestione dei pacchetti.

### Come avviare ed utilizzare l'applicazione
Infine per eseguire l'applicazione basta spostarsi tramite terminale nella directory del progetto e eseguire il comando
```bash
npm run dev
```
A questo punto, comparirà il link `http://localhost:5173` che ci porterà nella prima pagina dell'applicazione.

#### Cosa fare nella Landing Page
In questa pagina, la prima ad essere mostrata all'utente, occorre inserire il file sorgente dei dati e il numero di passi da impostare come obiettivo giornaliero.

