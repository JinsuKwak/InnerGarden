import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RESPONSIVE_SMALL } from "@/constants";

const useIsSmall = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(RESPONSIVE_SMALL));
};

export default useIsSmall;
