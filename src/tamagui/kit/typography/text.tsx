import { SizableText, styled } from 'tamagui'

export const Text = styled(SizableText, {
  name: 'Typography.Text',
  variants: {
    strong: {
      true: {
        fontWeight: 'bold',
      },
    },
  } as const,
})
