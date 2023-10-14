import { Location } from "@/types/Location";
//SHOULD FIX
const transformToLocation = (data: unknown): Location[] => {
  const dataArray = data as any[] | undefined;
  if (!dataArray) {
    // If data is undefined, return an empty array
    return [];
  }

  return dataArray.map((item) => {
    return {
      latlng: {
        lat: item.lat || 0,
        lng: item.lng || 0,
      },
      lang: {
        primary: item.primary || "en",
        secondary: item.secondary || "en",
      },
    };
  });
};

export default transformToLocation;
