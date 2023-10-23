import { ALLLOCATIONS } from "../../stubData/locationData";
import { Location } from "@/types/Location";
import { LOCATIONS_KEY } from "../../constants";

export default async function fetchLocations() {
  return new Promise((resolve) => {
    const storedLocations = localStorage.getItem(LOCATIONS_KEY);

    if (storedLocations) {
      const parsedLocations = JSON.parse(storedLocations);
      resolve(parsedLocations);
    } else {
      setTimeout(() => {
        let locations = ALLLOCATIONS;
        localStorage.setItem(LOCATIONS_KEY, JSON.stringify(locations));
        resolve(locations);
      }, 800);
    }
  });
}
