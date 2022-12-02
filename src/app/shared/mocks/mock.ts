export interface City {
  name: string,
  geo: Geo
}

export interface Geo {
  latitude: string,
  longitude: string,
  timezone: string
}

export const mockCities: City[] = [
  {
    name: 'Dnipro',
    geo: {
      latitude: '48.47',
      longitude: '35.04',
      timezone: 'Africa/Cairo'
    }
  },
  {
    name: 'Kyiv',
    geo: {
      latitude: '50,45',
      longitude: '30,52',
      timezone: 'Africa/Cairo'
    }
  },
]

export interface Day {
  time: string,
  code: number,
  unit: string,
  maxTemp: number,
  minTemp: number
}
