export interface Location {
  locationKey: string,
  locationType: string,
  localizedName: string,
  countryID: string,
  countryName: string
}

export interface LocationQuerryParams {
  apikey: string,
  language: string,
  q: string
}

export interface ResponseLocation {
  Key: string,
  Type: string,
  LocalizedName: string,
  Country: {
    ID: string,
    LocalizedName: string,
  }
}

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

export interface WeatherQuerryParams {
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
