import { createStitches } from "@stitches/react";

export const {
  styled,
  getCssText,
  createTheme,
  globalCss
} = createStitches({
  theme: {
    /* ... other tokens */
    colors: {
      text: "black",
      background: "yellow",
    }
  }
});

// mondelez
const mondelezTheme = createTheme({
  colors: {
    text: "#FFD152",
    background: "#4F2170"
  }
});

// mikes
const mikesTheme = createTheme({
  colors: {
    text: "black",
    background: 'linear-gradient(179.96deg, #F5B220 12.42%, #FDD300 24.68%, #FFE100 29.78%, #F9F7CC 48.9%, #FEFDE0 55.75%)'
  }
});

export const themes = {
  mikes: mikesTheme,
  mondelez : mondelezTheme
}