import { extendTheme } from "@chakra-ui/react";
import { newTheme } from "./NewTheme";

const theme = extendTheme({
  components: {
    Card: newTheme,
  },
});

export default theme;
