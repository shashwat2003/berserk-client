import { FormInput } from './components/input'
import { fieldContext, formContext } from './context'
import { createFormHook } from './create-form-hook'
import { Submit } from './submit'

export const { useAppForm, withForm } = createFormHook({
  fieldContext,
  formContext,
  fieldComponents: {
    Input: FormInput,
  },
  formComponents: {
    Submit,
  },
})
