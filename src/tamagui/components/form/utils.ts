import type { AnyFieldMeta } from '@tanstack/react-form'
import type { ThemeProps } from 'tamagui'

export const getThemePropsForStatus = (meta: AnyFieldMeta): ThemeProps => {
  const props: ThemeProps = {
    name: undefined, // keep it undefined, cause issues otherwise, tamagui documented the same for animation prop, maybe same thing happens here too
  }
  if (!meta.isTouched) return props

  if (meta.isValidating) {
    props.name = 'warning'
  } else if (meta.errors.length) {
    props.name = 'error'
  }

  return props
}
