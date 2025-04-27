import { styled } from 'tamagui'
import { Text } from './text'

export const Title = styled(Text, {
  name: 'Typography.Title',
  variants: {
    level: {
      1: {
        tag: 'h1',
        size: '$4xl',
      },
      2: {
        tag: 'h2',
        size: '$2xl',
      },
      3: {
        tag: 'h3',
        size: '$lg',
      },
      4: {
        tag: 'h4',
        size: '$base',
      },
      5: {
        tag: 'h5',
        size: '$sm',
      },
    },
  } as const,
  defaultVariants: {
    level: 1,
  },
})
