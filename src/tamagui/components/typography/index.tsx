import { styled, ThemeableStack, withStaticProperties } from 'tamagui'
import { Paragraph } from './paragraph'
import { Text } from './text'
import { Title } from './title'

const TypographyFrame = styled(ThemeableStack)

export const Typography = withStaticProperties(TypographyFrame, {
  Text,
  Title,
  Paragraph,
})
