import { X } from '@tamagui/lucide-icons'
import { type ReactNode, useMemo } from 'react'
import { View } from 'tamagui'
import { Input } from '../../input'
import { useFieldContext } from '../context'
import { getThemeNameForStatus } from '../utils'
type FormExtraInputProps = {
  allowClear?: boolean | { clearIcon: ReactNode }
  onClear?: () => void
}

export const FormInput = Input.styleable<FormExtraInputProps>((propsIn, forwardedRef) => {
  const { allowClear, suffix, onClear, ...props } = propsIn
  const allowClearNeeded = !!allowClear
  const allowClearIcon =
    typeof allowClear === 'object' && allowClear?.clearIcon ? (
      allowClear.clearIcon
    ) : (
      <X size={'$icon.14'} />
    )
  const field = useFieldContext<string>()

  const themeName = useMemo(() => {
    return getThemeNameForStatus(field.state.meta)
  }, [field.state.meta])

  return (
    <Input
      ref={forwardedRef}
      {...props}
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
              cursor={field.state.value ? 'pointer' : 'none'}
              p={'$xs'}
              backgroundColor={'$borderColor'}
              borderRadius={'$full'}
              justifyContent="center"
              alignItems="center"
              onPress={(e) => {
                field.setValue('')
                onClear?.()
              }}
              disabled={!field.state.value}
              opacity={field.state.value ? 1 : 0}
            >
              {allowClearIcon}
            </View>
          )}
        </>
      }
    />
  )
})
