import { exerciseType } from '../lib/utils'

export const exercises: exerciseType[] = [
    {
        title: "Military Press",
        description: "Incentrato su spalle ma comprende anche altri muscoli, Ha una forma abbastanza complicata, non per chi inizia la palestra",
        level: "advanced",
        series: 4,
        reps: 8,
        recoveryTime: "2\' 00\'\'",
        group: 'shoulder'
    },

    {
        title: "Affondi bulgari",
        description: "Gambe, richiede un buon bilanciamento",
        level: "advanced",
        series: 3,
        reps: 10,
        recoveryTime: "1\' 30\'\'",
        group: 'leg'
    },

    {
        title: "Rematore manubrio",
        description: "Schiena, richiede un po' di esperienza prima di capire come farlo bene",
        level: "advanced",
        series: 4,
        reps: 10,
        recoveryTime: "1\' 15\'\'",
        group: 'back'
    },

    {
        title: "Pressa 45° con carico dischi libero",
        description: "Gambe, esercizio molto base, semplice da eseguire",
        level: "beginner",
        series: 4,
        reps: 10,
        recoveryTime: "1\' 30\'\'",
        group: 'leg'
    },

    {
        title: "Leg extension",
        description: "Gambe, semplice come esercizio",
        level: "beginner",
        series: 4,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'leg'
    },

    {
        title: "Leg Curl",
        description: "Gambe, molto semplice anche questo",
        level: "beginner",
        series: 4,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'leg'
    },

    {
        title: "Shoulder Press",
        description: "Spalle, semplice esercizio sul macchinario",
        level: "intermediate",  // anche beginner, molto soggettivo
        series: 4,
        reps: 10,
        recoveryTime: "1\' 30\'\'",
        group: 'shoulder'
    },

    {
        title: "Spinte panca 45°",
        description: "Petto, spinte in alto coi manubri sulla panca alzata di 45°",
        level: "intermediate",  // richiede la corretta forma, non difficile pero'
        series: 4,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'chest'
    },

    {
        title: "Low Row",
        description: "Schiena, esercizio su macchinario molto semplice",
        level: "beginner",
        series: 4,
        reps: 10,
        recoveryTime: "1\' 30\'\'",
        group: 'back'
    },

    {
        title: "French press manubri",
        description: "Tricipiti, svolto su panca con manubri",
        level: "intermediate",  // facile da capire ma non tanto da eseguire
        series: 3,
        reps: 10,
        recoveryTime: "1\' 00\'\'",
        group: 'arm'
    },

    {
        title: "Panca piana",
        description: "Petto ma non solo, comprende piu gruppi muscolari",
        level: "intermediate",  // richiede esperienza, non e' difficile da capire
        series: 4,
        reps: 8,
        recoveryTime: "1\' 30\'\'",
        group: 'chest'
    },

    {
        title: "Croci cavi alti",
        description: "Petto, richiede una postura corretta e fissa",
        level: "intermediate",
        series: 4,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'chest'
    },

    {
        title: "Pulldown machine",
        description: "Schiena, macchinario molto easy",
        level: "beginner",
        series: 4,
        reps: 10,
        recoveryTime: "1\' 30\'\'",
        group: 'back'
    },

    {
        title: "Croci inverse ai cavi",
        description: "Spalle posteriori",
        level: "intermediate",  // non e' difficile ma devi farlo un po' per capirlo
        series: 3,
        reps: 10,
        recoveryTime: "1\' 15\'\'",
        group: 'shoulder'
    },

    {
        title: "Curl bicipiti",
        description: "Bicipiti, e' l'esercizio piu semplice del monto",
        level: "beginner",
        series: 4,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'arm'
    },

    {
        title: "Curl bicipiti panca 45°",
        description: "Bicipiti ma sulla panca inclinata",
        level: "beginner",
        series: 3,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'arm'
    },

    {
        title: "Plank",
        description: "Addominali, e' il plank per terra",
        level: "beginner",
        series: 0,
        reps: 0,
        recoveryTime: "45\'\'",
        group: 'chest'
    },

    {
        title: "Lat Machine avanti",
        description: "Lats, sul macchinario tiri dall'alto",
        level: "intermediate",  // non beginner solo perche' ci sono un sacco di stupidi che lo sbagliano
        series: 3,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'arm'
    },

    {
        title: "Pulley",
        description: "Schiena, tiri un cavo da davanti mentre stai fisso fermo seduto",
        level: "intermediate",  // non beginner per lo stesso motivo della lat machine
        series: 4,
        reps: 8,
        recoveryTime: "1\' 30\'\'",
        group: 'back'
    },

    {
        title: "Chest Press",
        description: "Petto, spingi peso su macchinario",
        level: "beginner",
        series: 4,
        reps: 10,
        recoveryTime: "1\' 30\'\'",
        group: 'chest'
    },

    {
        title: "Alzate laterali",
        description: "Spalle, esercizio classico spalle, alzate con manubri",
        level: "beginner",
        series: 4,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'shoulder'
    },

    {
        title: "Pushdown cavo alto",
        description: "Tricipiti, tiri in basso col cavo",
        level: "beginner",
        series: 4,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'arm'
    },

    {
        title: "Pressa 125° singola",
        description: "Gambe, macchinario pressa per gambe",
        level: "beginner",
        series: 4,
        reps: 10,
        recoveryTime: "1\' 00\'\'",
        group: 'leg'
    },

    {
        title: "Crunch su panca",
        description: "Addominali fatti sulla panca con le gambe tenute ferme",
        level: "beginner",
        series: 3,
        reps: 15,
        recoveryTime: "45\'\'",
        group: 'chest'
    },

    {
        title: "Trazioni",
        description: "Schiena, sono delle trazioni semplici",
        level: "intermediate",
        series: 3,
        reps: 8,
        recoveryTime: "2\' 00\'\'",
        group: 'back'
    },

    {
        title: "Pulldown cavo alto",
        description: "Lats, tiri il cavo dall'alto con braccia fisse",
        level: "beginner",
        series: 3,
        reps: 12,
        recoveryTime: "1\' 00\'\'",
        group: 'arm'
    },

    {
        title: "Frenchpress bilanciere",
        description: "Tricipiti col bilanciere sulla panca",
        level: "beginner",
        series: 3,
        reps: 8,
        recoveryTime: "1\' 45\'\'",
        group: 'arm'
    },

    {
        title: "Dips tra 2 panche",
        description: "Tricipiti, ti metti tra 2 panche e ti alzi con le braccia",
        level: "intermediate",
        series: 3,
        reps: 10,
        recoveryTime: "1\' 30\'\'",
        group: 'arm'
    },

    {
        title: "Tirate cavo basso",
        description: "Tricipiti ma tiri dal basso verso l'alto",
        level: "beginner",
        series: 3,
        reps: 12,
        recoveryTime: "1\' 15\'\'",
        group: 'arm'
    },

    {
        title: "Crunch a terra",
        description: "Addominali fatti per terra",
        level: "beginner",
        series: 1,
        reps: 50,
        recoveryTime: "0\'\'",
        group: 'chest'
    },

    {
        title: "Leg curl sdraiato",
        description: "Gambe, sdraiato sulla panca",
        level: "beginner",
        series: 3,
        reps: 12,
        recoveryTime: "1\' 15\'\'",
        group: 'leg'
    },

    {
        title: "Calf in piedi",
        description: "Gambe, esercizio per polpacci",
        level: "beginner",
        series: 3,
        reps: 15,
        recoveryTime: "1\' 00\'\'",
        group: 'leg'
    },

    {
        title: "Upper back",
        description: "Schiena, macchinario per schiena alta",
        level: "intermediate",
        series: 3,
        reps: 12,
        recoveryTime: "1\' 15\'\'",
        group: 'back'
    },

    {
        title: "Croci manubri 30°",
        description: "Petto, spinte in su coi manubri sulla panca inclinata",
        level: "beginner",
        series: 3,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'chest'
    },

    {
        title: "Curl panca scott",
        description: "Bicipiti sulla panca apposta",
        level: "intermediate",
        series: 3,
        reps: 8,
        recoveryTime: "1\' 45\'\'",
        group: 'arm'
    },

    {
        title: "Curl cavi alti",
        description: "Bicipiti, tiri i cavi dall'alto verso di te lateralmente",
        level: "beginner",
        series: 3,
        reps: 12,
        recoveryTime: "1\' 15\'\'",
        group: 'arm'
    },

    {
        title: "Affondi sul posto",
        description: "Gambe",
        level: "beginner",
        series: 4,
        reps: 20,
        recoveryTime: "1\' 30\'\'",
        group: 'leg'
    },

    {
        title: "Alzate frontali",
        description: "Spalle, alzate in avanti coi manubri",
        level: "beginner",
        series: 4,
        reps: 12,
        recoveryTime: "1\' 30\'\'",
        group: 'shoulder'
    },

    {
        title: "Crunch al castello",
        description: "Addominali sul castello",
        level: "advanced",
        series: 3,
        reps: 10,
        recoveryTime: "1\' 00\'\'",
        group: 'chest'
    }
]