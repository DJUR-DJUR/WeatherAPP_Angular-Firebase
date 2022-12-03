import { ResponseWeatherForDay, WeatherForDay } from "../interfaces/interfaces"

  export function getWeatherDaysMapper(data: any): WeatherForDay[] {
    return data.map((day: ResponseWeatherForDay) => {
      return {
        date: day.Date,
        day : {
          icon: day.Day.Icon,
          iconPhrase: day.Day.IconPhrase
          },
        night: {
          icon: day.Night.Icon,
          iconPhrase: day.Night.IconPhrase
          },
        maxTemper: day.Temperature.Maximum.Value,
        minTemper: day.Temperature.Minimum.Value,
        unit: day.Temperature.Maximum.Unit,
      };
    });
  };
