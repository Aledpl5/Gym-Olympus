// interface for the history CSV file
export interface historyDataType {
    calories: string,
    distance: string,
    end_time: Date,
    start_time: Date,
    steps: string,
    type: string
}

// interface for the normal CSV file
export interface csvDataType {
    time: Date
    steps: string,
    distance: string,
    calories: string
}

export interface rawDataType {
    time: string,
    steps: string,
    distance: string,
    calories: string
}

// interface for every exercise 
export interface exerciseType {
    title: string,        // exercise's title
    description: string,  // exercise's description
    level: string,        // beginner - intermediate - advanced
    series?: number,      // number of series
    reps?: number,        // number of reps
    recoveryTime: string, // recovery between reps
    group: string
}

export interface chooseCardType {
    title: string,
    icon: React.ReactNode
    description: string,
    iconStyle: string,
    onClick?: () => void
}

export interface exerciseCardType {
    ex: exerciseType
}

export interface monthlyStepsChartType {
    selectedDate: Date,
    stepsGoal: number,
}

export interface weekDataType {
    selectedDate: Date
}

export interface monthDataType {
    selectedDate: Date
}

export interface Activity {
    calories: number;
    distance: number;      // in metri
    start_time: number;    // Unix timestamp in secondi
    end_time: number;      // Unix timestamp in secondi
    steps: number;
    type: string;
  }
  
export interface ActivityCardProps {
    activity: Activity;
}