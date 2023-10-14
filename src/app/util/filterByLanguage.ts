import { Location } from "@/types/Location";

const filterByLanguage = (locations: Location[], languageFilter: string): Location[] => {
  switch (languageFilter) {
    case "en":
      return locations.filter((location) => location.lang.primary === "en" || location.lang.secondary === "en");

    case "ko":
      return locations.filter((location) => location.lang.primary === "ko" || location.lang.secondary === "ko");

    case "zh-CN":
      return locations.filter((location) => location.lang.primary === "zh-CN" || location.lang.secondary === "zh-CN");

    case "others":
      return locations.filter(
        (location) =>
          !["en", "ko", "zh-CN"].includes(location.lang.primary) ||
          !["en", "ko", "zh-CN"].includes(location.lang.secondary)
      );

    default:
      return locations;
  }
};

export default filterByLanguage;
