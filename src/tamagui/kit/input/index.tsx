import { withStaticProperties } from 'tamagui'
import { BaseInput } from './base-input'
import { withPassword } from './password'

export const Input = withStaticProperties(BaseInput, {
  Password: withPassword(BaseInput),
})

export type { BaseInputProps as InputProps } from './base-input'
