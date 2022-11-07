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

// define the dark theme using the de-constructed function
export const darkTheme = createTheme({ 
  colors: { 
    text: "white",
    background: "black"
  } 
});