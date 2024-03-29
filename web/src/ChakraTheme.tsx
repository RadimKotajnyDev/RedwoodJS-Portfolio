import "@fontsource/open-sans";
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

import { mode } from '@chakra-ui/theme-tools'
// @ts-ignore
import type { StyleFunctionProps } from '@chakra-ui/styled-system'

const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false
};

const colors: any = {
  "bgDark": "#315659",
  "black": "#0c1015",
  "gray": {
    "50": "#f9fafa",
    "100": "#f1f1f2",
    "200": "#e6e7e9",
    "300": "#d2d4d7",
    "400": "#a9adb2",
    "500": "#797f88",
    "600": "#4d5560",
    "700": "#2e3744",
    "800": "#19202b",
    "900": "#141a23"
  },
  "teal": {
    "50": "#f4fbfb",
    "100": "#ceeeee",
    "200": "#a3e0e0",
    "300": "#6ccdcd",
    "400": "#4ab0b0",
    "500": "#3f9696",
    "600": "#337979",
    "700": "#275e5e",
    "800": "#214f4f",
    "900": "#1b4141"
  },
  "cyan": {
    "50": "#f6fbfc",
    "100": "#d7edf1",
    "200": "#c5e5eb",
    "300": "#b1dce4",
    "400": "#73c0cf",
    "500": "#55b2c5",
    "600": "#4ba1b2",
    "700": "#3e8593",
    "800": "#336d79",
    "900": "#27555e"
  },
  "blue": {
    "50": "#f2f6fb",
    "100": "#d0dfef",
    "200": "#aec9e3",
    "300": "#88afd7",
    "400": "#6598ca",
    "500": "#4d82b8",
    "600": "#406d9a",
    "700": "#315375",
    "800": "#284460",
    "900": "#21374e"
  },
  "purple": {
    "50": "#f8f6fc",
    "100": "#e3dbf3",
    "200": "#cec1ea",
    "300": "#b19add",
    "400": "#9c80d4",
    "500": "#815dc8",
    "600": "#6d4ab1",
    "700": "#593d91",
    "800": "#493277",
    "900": "#362558"
  },
  "pink": {
    "50": "#fcf6f9",
    "100": "#f3dbe7",
    "200": "#e9bdd3",
    "300": "#db95b8",
    "400": "#d179a5",
    "500": "#c4528b",
    "600": "#a84677",
    "700": "#883961",
    "800": "#6a2c4b",
    "900": "#4e2137"
  },
  "red": {
    "50": "#fcf6f6",
    "100": "#f3dbdb",
    "200": "#e8bbbb",
    "300": "#da9393",
    "400": "#d27c7c",
    "500": "#c75b5b",
    "600": "#ae4949",
    "700": "#8c3b3b",
    "800": "#763232",
    "900": "#562424"
  },
  "orange": {
    "50": "#fcfaf8",
    "100": "#f5ece2",
    "200": "#ead5c1",
    "300": "#dab591",
    "400": "#cb9866",
    "500": "#b5814c",
    "600": "#996c40",
    "700": "#7a5633",
    "800": "#604428",
    "900": "#4f3821"
  },
  "yellow": {
    "50": "#fefefd",
    "100": "#faf9f1",
    "200": "#f2edd8",
    "300": "#e7e0ba",
    "400": "#d9cc8f",
    "500": "#baa84e",
    "600": "#95863e",
    "700": "#746930",
    "800": "#574e24",
    "900": "#48411e"
  },
  "green": {
    "50": "#f7fcfa",
    "100": "#d6f1e3",
    "200": "#a9e2c5",
    "300": "#75d0a3",
    "400": "#4eba84",
    "500": "#43a071",
    "600": "#37845e",
    "700": "#2b6749",
    "800": "#23543c",
    "900": "#1d4531"
  },
  "primary": {
    "50": "#eff9f9",
    "100": "#bde8e8",
    "200": "#80d4d4",
    "300": "#4cb5b5",
    "400": "#44a2a2",
    "500": "#398989",
    "600": "#307373",
    "700": "#275d5d",
    "800": "#214e4e",
    "900": "#183838"
  }
};

const theme = extendTheme({ config }, { colors }, {
  fonts: {
    body: `'Open sans', sans-serif`
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('white', 'gray.800')(props),
      },
    }),
  },
});

export default theme;
