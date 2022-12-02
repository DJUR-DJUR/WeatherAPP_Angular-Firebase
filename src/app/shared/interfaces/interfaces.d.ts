export interface WeatherForDay {
  date: string,
  day : TimesOfDay,
  night: TimesOfDay,
  maxTemper: number,
  minTemper: number,
  unit: string,
}

export interface TimesOfDay {
  icon: number,
  iconPhrase: string
}

export interface QuerryParams {
  apikey: string,
  language: string,
  details: boolean,
  metric: boolean,
}

export interface ResponseWeatherForDay {
  Date: string,
  Day: {
    Icon: number,
    IconPhrase: string
  },
  Night: {
    Icon: number,
    IconPhrase: string
  },
  Temperature: {
    Maximum: {
      Value: number,
      Unit: string
    },
    Minimum: {
      Value: number
    }
  }
}
