import { extendTheme } from "@chakra-ui/react";

export const sx = {
  _active: {
    backgroundColor: "#d3f13a",
    borderColor: "#1b1b1b",
  },
  _focus: {
    backgroundColor: "#d3f13a",
    borderColor: "#1b1b1b",
  },
  _checked: {
    backgroundColor: "#d3f13a",
    borderColor: "#1b1b1b",
  },
};

export const theme = extendTheme({
  fonts: {
    heading: "Messina Sans Black",
    body: "Messina Sans",
  },
  colors: {
    brand: {
      base: "#f2f2f2",
      dark: "#1b1b1b",
      details: "#d3f13a",
    },
  },
});
