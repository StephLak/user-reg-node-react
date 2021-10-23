import { extendTheme } from "@chakra-ui/react";
import { Styles } from "@chakra-ui/theme-tools";

export const COLORS = {
  PRIMARY_COLOR: "#1EB2A6",
  BACKGROUND_COLOR: "#E5E5E5",
};

export const BoxShadow = "0 0 6px 4px lightgrey";
export const BorderRadius = "5px";

const STYLES: Styles = {
  global: {
    "*": {
      boxSizing: "border-box",
    },

    html: {
      minH: "100%",
      overflowX: "hidden",
    },

    body: {
      display: "flex",
      flexDir: "column",
      overflowX: "hidden",
      color: "black",

      "#root": {
        "* .roboto": {
          fontFamily: "'Nunito', sans-serif",
        },
      },
    },

    "#root": {
      minH: "100vh",
      display: "flex",
      flexDirection: "column",
      width: "100%",
      pos: "relative",

      "*": {
        fontFamily: "'Nunito'",
      },
    },
  },
};

export const customTheme = extendTheme({
  styles: STYLES,
  colors: COLORS,
});
