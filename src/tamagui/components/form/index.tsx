import { Input } from '../input'
import { fieldContext, formContext } from './context'
import { createFormHook } from './create-form-hook'
import { Submit } from './submit'

export const { useAppForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    Input,
  },
  formComponents: {
    Submit,
  },
})
