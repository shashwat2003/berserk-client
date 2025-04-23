import { useMemo } from 'react'
import {
  AnimatePresence,
  Label,
  Input as OgInput,
  Theme,
  type InputProps as OgInputProps,
} from 'tamagui'
import { useFieldContext } from './form/context'
import ItemHelper from './form/item-helper'
import { getThemePropsForStatus } from './form/utils'

type InputExtraProps = {
  label?: string
  noHelper?: boolean
  help?: string
}

export const Input = OgInput.styleable<InputExtraProps>((propsIn, forwardedRef) => {
  const { label, noHelper, help, ...rest } = propsIn

  const field = useFieldContext<string>()

  const mergedHelperText = useMemo(() => {
    return field.state.meta.errors.length ? field.state.meta.errors : [help ?? ' ']
  }, [field.state.meta.errors, help])

  const themeProps = useMemo(() => {
    return getThemePropsForStatus(field.state.meta)
  }, [field.state.meta])

  return (
    <Theme {...themeProps}>
      <Label id={field.name}>{label}</Label>
      <OgInput
        {...rest}
        htmlFor={field.name}
        ref={forwardedRef}
        value={field.state.value}
        onChangeText={(text) => field.handleChange(text)}
        onBlur={field.handleBlur}
      />
      {noHelper !== true && (
        <AnimatePresence exitBeforeEnter>
          {mergedHelperText.map((error) => (
            <ItemHelper help={error} key={error} />
          ))}
        </AnimatePresence>
      )}
    </Theme>
  )
})

export type InputProps = OgInputProps & InputExtraProps
