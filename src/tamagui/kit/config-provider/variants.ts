import { createContext } from 'react'
import { styled, XStack, type XStackProps } from 'tamagui'

export const Variants = ['outlined', 'borderless', 'filled', 'underlined'] as const

export type Variant = (typeof Variants)[number]

export type VariantStyles = {
  [key in Variant]: XStackProps
}

const forceProps = (props: XStackProps): XStackProps => {
  props.hoverStyle = { ...props, ...props.hoverStyle }
  return props
}

const BORDER_WIDTH = 1.5

export const resetStyles = {
  borderColor: 'transparent',
  backgroundColor: 'transparent',
  focusVisibleStyle: {
    outlineStyle: 'none',
    borderColor: 'transparent',
  },
  hoverStyle: {
    borderColor: 'transparent',
  },
  borderWidth: 0,
  borderRadius: '$true',
} as const

// ================ Variant Frame ================

export const defaultVariantStyles: VariantStyles = {
  outlined: {
    backgroundColor: '$color1',
    borderWidth: BORDER_WIDTH,
    borderColor: '$borderColor',
    hoverStyle: {
      borderColor: '$borderColorHover',
    },
  },
  filled: {
    backgroundColor: '$color3',
    borderWidth: BORDER_WIDTH,
    borderColor: '$color3',
    hoverStyle: {
      backgroundColor: '$color4',
      borderColor: '$color4',
    },
  },
  borderless: {
    backgroundColor: '$color1',
    borderWidth: BORDER_WIDTH,
    borderColor: 'transparent',
    hoverStyle: {
      backgroundColor: '$color1',
      borderColor: 'transparent',
    },
  },
  underlined: {
    borderWidth: 0,
    backgroundColor: '$color1',
    borderBottomWidth: BORDER_WIDTH,
    borderBottomColor: '$borderColor',
    borderRadius: '$none',
    hoverStyle: {
      borderBottomColor: '$borderColorHover',
    },
  },
}

export const focusedVariantStyles: VariantStyles = {
  outlined: forceProps({
    borderColor: '$accentColor',
  }),
  filled: forceProps({
    backgroundColor: '$color1',
    borderColor: '$accentColor',
  }),
  borderless: forceProps({
    backgroundColor: '$color1',
    borderColor: 'transparent',
  }),
  underlined: forceProps({
    borderBottomColor: '$accentColor',
    hoverStyle: {
      borderBottomColor: '$accentColor',
    },
  }),
}

export const VariantFrame = styled(XStack, {
  // reset tamagui border styles
  ...resetStyles,

  animation: '100ms',

  variants: {
    variant: (value: Variant, { props }) => {
      return defaultVariantStyles[value]
    },

    focused: {
      ':boolean': (value, { props }) => {
        const variant = (props as XStackProps & { variant?: Variant }).variant
        return variant && value ? focusedVariantStyles[variant] : {}
      },
    },
  } as const,

  defaultVariants: {
    variant: 'outlined',
  },
})

// ================ Variant Addon Frame ================

export const defaultVariantAddonStyles: VariantStyles = {
  outlined: {
    backgroundColor: '$color1',
    borderWidth: BORDER_WIDTH,
    borderColor: '$borderColor',
  },
  filled: {
    borderWidth: 0,
    backgroundColor: '$color3',
    borderColor: '$borderColor',
  },
  borderless: {
    backgroundColor: '$color1',
    borderWidth: BORDER_WIDTH,
    borderColor: 'transparent',
  },
  underlined: {
    borderWidth: 0,
    backgroundColor: '$color1',
    borderRadius: '$none',
  },
}

export const focusedVariantAddonStyles: VariantStyles = {
  outlined: {},
  filled: {
    borderColor: 'transparent',
  },
  borderless: {},
  underlined: {},
}

export const VariantAddonFrame = styled(XStack, {
  // reset tamagui border styles
  ...resetStyles,

  animation: '100ms',
  justifyContent: 'center',
  alignItems: 'center',
  paddingHorizontal: '$sm',

  variants: {
    variant: (value: Variant, { props }) => {
      let styles = defaultVariantAddonStyles[value]
      const isLeftMost = props.borderTopRightRadius === 0

      if (value === 'filled') {
        if (isLeftMost) {
          styles = {
            ...styles,
            borderRightWidth: BORDER_WIDTH,
          }
        } else {
          styles = {
            ...styles,
            borderLeftWidth: BORDER_WIDTH,
          }
        }
      } else if (value === 'outlined') {
        if (isLeftMost) {
          styles = {
            ...styles,
            borderRightWidth: 0,
          }
        } else {
          styles = {
            ...styles,
            borderLeftWidth: 0,
          }
        }
      }
      return styles
    },

    focused: {
      ':boolean': (value, { props }) => {
        const variant = (props as XStackProps & { variant?: Variant }).variant
        return variant && value ? focusedVariantAddonStyles[variant] : {}
      },
    },
  } as const,

  defaultVariants: {
    variant: 'outlined',
  },
})

export const VariantContext = createContext<Variant>('outlined')
