import * as Colors from '@tamagui/colors'
import { createThemes } from '@tamagui/theme-builder'

const darkPalette = [
  'hsla(0, 0%, 7%, 1)',
  'hsla(0, 0%, 12%, 1)',
  'hsla(0, 0%, 17%, 1)',
  'hsla(0, 0%, 22%, 1)',
  'hsla(0, 0%, 26%, 1)',
  'hsla(0, 0%, 31%, 1)',
  'hsla(0, 0%, 36%, 1)',
  'hsla(0, 0%, 41%, 1)',
  'hsla(0, 0%, 45%, 1)',
  'hsla(0, 0%, 50%, 1)',
  'hsla(0, 15%, 93%, 1)',
  'hsla(0, 15%, 99%, 1)',
]
const lightPalette = [
  'hsla(0, 0%, 99%, 1)',
  'hsla(0, 0%, 94%, 1)',
  'hsla(0, 0%, 88%, 1)',
  'hsla(0, 0%, 83%, 1)',
  'hsla(0, 0%, 77%, 1)',
  'hsla(0, 0%, 72%, 1)',
  'hsla(0, 0%, 66%, 1)',
  'hsla(0, 0%, 61%, 1)',
  'hsla(0, 0%, 55%, 1)',
  'hsla(0, 0%, 50%, 1)',
  'hsla(0, 15%, 15%, 1)',
  'hsla(0, 15%, 1%, 1)',
]

const lightShadows = {
  shadow1: 'rgba(0,0,0,0.04)',
  shadow2: 'rgba(0,0,0,0.08)',
  shadow3: 'rgba(0,0,0,0.16)',
  shadow4: 'rgba(0,0,0,0.24)',
  shadow5: 'rgba(0,0,0,0.32)',
  shadow6: 'rgba(0,0,0,0.4)',
}

const darkShadows = {
  shadow1: 'rgba(0,0,0,0.2)',
  shadow2: 'rgba(0,0,0,0.3)',
  shadow3: 'rgba(0,0,0,0.4)',
  shadow4: 'rgba(0,0,0,0.5)',
  shadow5: 'rgba(0,0,0,0.6)',
  shadow6: 'rgba(0,0,0,0.7)',
}

const builtThemes = createThemes({
  base: {
    palette: {
      light: lightPalette,
      dark: darkPalette,
    },

    extra: {
      light: {
        ...Colors.green,
        ...Colors.red,
        ...Colors.yellow,
        ...lightShadows,
        shadowColor: lightShadows.shadow1,
      },
      dark: {
        ...Colors.greenDark,
        ...Colors.redDark,
        ...Colors.yellowDark,
        ...darkShadows,
        shadowColor: darkShadows.shadow1,
      },
    },
  },

  accent: {
    palette: {
      light: darkPalette,
      dark: lightPalette,
    },
  },

  childrenThemes: {
    warning: {
      palette: {
        dark: Object.values(Colors.yellowDark),
        light: Object.values(Colors.yellow),
      },
    },

    error: {
      palette: {
        dark: Object.values(Colors.redDark),
        light: Object.values(Colors.red),
      },
    },

    success: {
      palette: {
        dark: Object.values(Colors.greenDark),
        light: Object.values(Colors.green),
      },
    },
  },
})

export type Themes = typeof builtThemes

// this is optional, but saves client-side JS bundle size by leaving out themes on client.
// tamagui automatically hydrates themes from css back into JS for you and the tamagui
// bundler plugins automate setting TAMAGUI_ENVIRONMENT.

export const themes: Themes =
  process.env.TAMAGUI_ENVIRONMENT === 'client' && process.env.NODE_ENV === 'production'
    ? ({} as any)
    : (builtThemes as any)
