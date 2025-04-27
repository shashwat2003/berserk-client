import { X } from '@tamagui/lucide-icons'
import { type ReactNode, useContext, useMemo } from 'react'
import { View } from 'tamagui'
import { DisabledContext } from '../../config-provider/disabled-context'
import { Input } from '../../input'
import { FormConfigContext, useFieldContext } from '../context'
import { getThemeNameForStatus } from '../utils'

type FormExtraInputProps = {
  allowClear?: boolean | { clearIcon: ReactNode }
  onClear?: () => void
}

export const FormInput = Input.styleable<FormExtraInputProps>((propsIn, forwardedRef) => {
  const {
    allowClear,
    suffix,
    onClear,
    layout: layoutProp,
    disabled: disabledProp,
    labelGap: labelGapProps,
    ...props
  } = propsIn

  const field = useFieldContext<string>()
  const fieldConfigContext = useContext(FormConfigContext)

  const disabledContext = useContext(DisabledContext)

  const disabled = disabledProp ?? disabledContext

  const themeName = useMemo(() => {
    return getThemeNameForStatus(field.state.meta)
  }, [field.state.meta])

  const allowClearNeeded = !!allowClear
  const allowClearIcon =
    typeof allowClear === 'object' && allowClear?.clearIcon ? (
      allowClear.clearIcon
    ) : (
      <X size={'$icon.14'} />
    )

  const layout = layoutProp ?? fieldConfigContext.layout
  const labelGap = labelGapProps ?? fieldConfigContext.labelGap

  return (
    <Input
      ref={forwardedRef}
      {...props}
      disabled={disabled}
      labelGap={labelGap}
      layout={layout}
      errors={field.state.meta.errors.map((each) => each.message)}
      theme={themeName}
      value={field.state.value}
      onChangeText={(text) => field.handleChange(text)}
      onBlur={field.handleBlur}
      suffix={
        <>
          {suffix}
          {allowClearNeeded && (
            <View
              animation={'100ms'}
              cursor={field.state.value && !disabled ? 'pointer' : 'none'}
              p={'$xs'}
              backgroundColor={'$borderColor'}
              borderRadius={'$full'}
              justifyContent="center"
              alignItems="center"
              onPress={(e) => {
                field.setValue('')
                onClear?.()
              }}
              disabled={!field.state.value || disabled}
              opacity={field.state.value && !disabled ? 1 : 0}
            >
              {allowClearIcon}
            </View>
          )}
        </>
      }
    />
  )
})
