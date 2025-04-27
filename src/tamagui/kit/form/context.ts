import { createFormHookContexts } from '@tanstack/react-form'
import { createContext } from 'react'
import type { GetThemeValueForKey } from 'tamagui'

export const { fieldContext, formContext, useFieldContext, useFormContext } =
  createFormHookContexts()

export type FormConfigContext = {
  layout?: 'vertical' | 'horizontal'
  labelGap?: number | GetThemeValueForKey<'gap'> | undefined
}

export const FormConfigContext = createContext<FormConfigContext>({})
