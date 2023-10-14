import { Location } from "@/types/Location";

// export const ALLLOCATIONS = [
// {lat: 51.0486, lng: -114.0708 , primary: "ko", secondary: "en"  },
//   { latlng: { lat: 51.0486, lng: -114.0718 }, lang: { primary: "ko", secondary: "en" } },
//   { latlng: { lat: 51.05, lng: -114.071 }, lang: { primary: "ko", secondary: "en" } },
//   { latlng: { lat: 51.051, lng: -114.072 }, lang: { primary: "zh-CN", secondary: "en" } },
//   { latlng: { lat: 51.052, lng: -114.073 }, lang: { primary: "zh-CN", secondary: "en" } },
//   { latlng: { lat: 51.053, lng: -114.074 }, lang: { primary: "zh-CN", secondary: "en" } },
//   { latlng: { lat: 51.054, lng: -114.075 }, lang: { primary: "en", secondary: "ko" } },
//   { latlng: { lat: 51.055, lng: -114.076 }, lang: { primary: "en", secondary: "ko" } },
//   { latlng: { lat: 51.056, lng: -114.077 }, lang: { primary: "en", secondary: "ko" } },
//   { latlng: { lat: 51.057, lng: -114.078 }, lang: { primary: "en", secondary: "zh-CN" } },
//   { latlng: { lat: 51.058, lng: -114.079 }, lang: { primary: "en", secondary: "zh-CN" } },
//   { latlng: { lat: 51.059, lng: -114.08 }, lang: { primary: "en", secondary: "zh-CN" } },
//   { latlng: { lat: 51.06, lng: -114.081 }, lang: { primary: "random", secondary: "zh-CN" } },
//   { latlng: { lat: 51.061, lng: -114.082 }, lang: { primary: "random", secondary: "ko" } },
//   { latlng: { lat: 51.062, lng: -114.083 }, lang: { primary: "random", secondary: "en" } },
//   { latlng: { lat: 51.063, lng: -114.084 }, lang: { primary: "random", secondary: "ko" } },
//   { latlng: { lat: 51.064, lng: -114.085 }, lang: { primary: "random", secondary: "zh-CN" } },
//   { latlng: { lat: 51.065, lng: -114.086 }, lang: { primary: "random", secondary: "zh-CN" } },
//   { latlng: { lat: 51.066, lng: -114.087 }, lang: { primary: "random", secondary: "en" } },
//   { lat: 51.0486, lng: -114.0718, primary: "ko", secondary: "en" },
//   { lat: 51.05, lng: -114.071, primary: "ko", secondary: "en" },
//   { lat: 51.051, lng: -114.072, primary: "zh-CN", secondary: "en" },
//   { lat: 51.052, lng: -114.073, primary: "zh-CN", secondary: "en" },
//   { lat: 51.053, lng: -114.074, primary: "zh-CN", secondary: "en" },
//   { lat: 51.054, lng: -114.075, primary: "en", secondary: "ko" },
//   { lat: 51.055, lng: -114.076, primary: "en", secondary: "ko" },
//   { lat: 51.056, lng: -114.077, primary: "en", secondary: "ko" },
//   { lat: 51.057, lng: -114.078, primary: "en", secondary: "zh-CN" },
//   { lat: 51.058, lng: -114.079, primary: "en", secondary: "zh-CN" },
//   { lat: 51.059, lng: -114.08, primary: "en", secondary: "zh-CN" },
//   { lat: 51.06, lng: -114.081, primary: "random", secondary: "zh-CN" },
//   { lat: 51.061, lng: -114.082, primary: "random", secondary: "ko" },
//   { lat: 51.062, lng: -114.083, primary: "random", secondary: "en" },
//   { lat: 51.063, lng: -114.084, primary: "random", secondary: "ko" },
//   { lat: 51.064, lng: -114.085, primary: "random", secondary: "zh-CN" },
//   { lat: 51.065, lng: -114.086, primary: "random", secondary: "zh-CN" },
//   { lat: 51.066, lng: -114.087, primary: "random", secondary: "en" },
// ];

export const ALLLOCATIONS = [
  { lat: 51.0498, lng: -114.0689, primary: "ko", secondary: "en" },
  { lat: 51.0507, lng: -114.0721, primary: "ko", secondary: "en" },
  { lat: 51.0515, lng: -114.0753, primary: "zh-CN", secondary: "en" },
  { lat: 51.0523, lng: -114.0785, primary: "zh-CN", secondary: "en" },
  { lat: 51.0531, lng: -114.0817, primary: "zh-CN", secondary: "en" },
  { lat: 51.054, lng: -114.0849, primary: "en", secondary: "ko" },
  { lat: 51.0548, lng: -114.0881, primary: "en", secondary: "ko" },
  { lat: 51.0556, lng: -114.0913, primary: "en", secondary: "ko" },
  { lat: 51.0564, lng: -114.0945, primary: "en", secondary: "zh-CN" },
  { lat: 51.0572, lng: -114.0977, primary: "en", secondary: "zh-CN" },
  { lat: 51.058, lng: -114.1009, primary: "en", secondary: "zh-CN" },
  { lat: 51.0589, lng: -114.1041, primary: "random", secondary: "zh-CN" },
  { lat: 51.0597, lng: -114.1073, primary: "random", secondary: "ko" },
  { lat: 51.0605, lng: -114.1105, primary: "random", secondary: "en" },
  { lat: 51.0613, lng: -114.1137, primary: "random", secondary: "ko" },
  { lat: 51.0622, lng: -114.1169, primary: "random", secondary: "zh-CN" },
  { lat: 51.063, lng: -114.1201, primary: "random", secondary: "zh-CN" },
  { lat: 51.0638, lng: -114.1233, primary: "random", secondary: "en" },
  { lat: 51.0646, lng: -114.1265, primary: "random", secondary: "en" },
  { lat: 51.0654, lng: -114.1297, primary: "random", secondary: "ko" },
];
const transformToLocation = (data: any): Location => {
  return {
    latlng: {
      lat: data.lat || 0,
      lng: data.lng || 0,
    },
    lang: {
      primary: data.primary || "en",
      secondary: data.secondary || "en",
    },
  };
};

export const transformedLocation: Location[] = ALLLOCATIONS.map(transformToLocation);
