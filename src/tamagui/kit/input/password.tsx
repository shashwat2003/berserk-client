import { Eye, EyeOff } from '@tamagui/lucide-icons'
import { useState } from 'react'
import { View, type TamaguiComponent } from 'tamagui'
import type { BaseInputProps } from './base-input'

type InputPasswordExtraProps = {}

export const withPassword = <T extends BaseInputProps = BaseInputProps>(
  Component: TamaguiComponent<T>
) => {
  return Component.styleable<InputPasswordExtraProps>((props, forwardedRef) => {
    const [secure, setSecure] = useState(true)

    return (
      // @ts-ignore
      <Component
        {...props}
        ref={forwardedRef}
        secureTextEntry={secure}
        addonAfter={
          <View padding={'$md'} cursor="pointer" onPress={() => setSecure(!secure)}>
            {!secure ? <Eye size={'$3xl'} /> : <EyeOff size={'$3xl'} />}
          </View>
        }
      />
    )
  })
}
