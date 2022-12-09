import { Location, ResponseLocation } from "../interfaces/interfaces";

export function getLocationsMapper(data: any): Location[] {
  return data.map((item: ResponseLocation) => {
    return {
      locationKey: item.Key,
      locationType: item.Type,
      localizedName: item.LocalizedName,
      countryID: item.Country.ID,
      countryName: item.Country.LocalizedName
    };
  });
};
