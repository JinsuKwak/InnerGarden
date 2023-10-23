import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { RESPONSIVE_MEDIUM } from "@/constants";

const useIsMedium = () => {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(RESPONSIVE_MEDIUM));
};

export default useIsMedium;
