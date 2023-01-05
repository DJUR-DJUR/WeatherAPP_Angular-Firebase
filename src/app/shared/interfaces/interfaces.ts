export interface Location {
  readonly locationKey: string,
  readonly locationType: string,
  readonly localizedName: string,
  readonly countryID: string,
  readonly countryName: string
}

export interface LocationQuerryParams {
  readonly apikey: string,
  readonly language: string,
  readonly q: string
}

export interface ResponseLocation {
  readonly Key: string,
  readonly Type: string,
  readonly LocalizedName: string,
  readonly Country: {
    readonly ID: string,
    readonly LocalizedName: string,
  }
}

export interface WeatherForDay {
  readonly date: string,
  readonly day : TimesOfDay,
  readonly night: TimesOfDay,
  readonly maxTemper: number,
  readonly minTemper: number,
  readonly unit: string,
}

export interface WeatherQuerryParams {
  readonly apikey: string,
  readonly language: string,
  readonly details: boolean,
  readonly metric: boolean,
}

export interface ResponseWeatherForDay {
  readonly Date: string,
  readonly Day: {
    readonly Icon: number,
    readonly IconPhrase: string
  },
  readonly Night: {
    readonly Icon: number,
    readonly IconPhrase: string
  },
  readonly Temperature: {
    readonly Maximum: {
      readonly Value: number,
      readonly Unit: string
    },
    readonly Minimum: {
      readonly Value: number
    }
  }
}

interface TimesOfDay {
  readonly icon: number,
  readonly iconPhrase: string
}
