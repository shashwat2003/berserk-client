import clsx from 'clsx'
import { useContext, useState, type ReactNode } from 'react'
import {
  AnimatePresence,
  Group,
  Label,
  Input as OgInput,
  YStack,
  type GetThemeValueForKey,
  type InputProps as OgInputProps,
  type ThemeName,
} from 'tamagui'
import { DisabledContext } from '../config-provider/disabled-context'
import {
  resetStyles,
  VariantAddonFrame,
  VariantContext,
  VariantFrame,
  type Variant,
} from '../config-provider/variants'
import ItemHelper from '../item-helper'
import { Prefix, Suffix } from './affix'

type InputExtraProps = {
  label?: string
  noHelper?: boolean
  help?: string
  errors?: string[]
  theme?: ThemeName
  name?: string
  prefixCls?: string | undefined
  addonBefore?: ReactNode
  addonAfter?: ReactNode
  prefix?: ReactNode
  suffix?: ReactNode
  variant?: Variant
  layout?: 'vertical' | 'horizontal'
  labelGap?: number | GetThemeValueForKey<'gap'> | undefined
}

export const BaseInput = OgInput.styleable<InputExtraProps>((propsIn, forwardedRef) => {
  const {
    label,
    noHelper,
    help,
    errors,
    theme,
    name,
    prefixCls,
    addonBefore,
    addonAfter,
    prefix,
    suffix,
    disabled: disabledProp,
    onBlur,
    onFocus,
    variant: variantProp,
    layout,
    labelGap,
    ...rest
  } = propsIn
  const [focused, setFocused] = useState(false)

  const disabledContext = useContext(DisabledContext)
  const variantContext = useContext(VariantContext)

  const disabled = disabledProp ?? disabledContext
  const variant = variantProp ?? variantContext

  return (
    <YStack
      theme={theme}
      alignItems="flex-start"
      gap={labelGap}
      flexDirection={layout === 'horizontal' ? 'row' : 'column'}
    >
      <Label id={name}>{label}</Label>
      <YStack>
        <Group
          orientation="horizontal"
          borderRadius={variant === 'underlined' ? '$none' : '$true'}
          className={clsx(`${prefixCls}-group`)}
        >
          {addonBefore && (
            <VariantAddonFrame
              variant={variant}
              focused={focused}
              className={clsx(`${prefixCls}-addon-before`)}
            >
              {addonBefore}
            </VariantAddonFrame>
          )}

          <VariantFrame
            variant={variant}
            focused={focused}
            gap={'$xs'}
            paddingHorizontal={'$md'}
            className={clsx(`${prefixCls}-variant-frame`)}
            flex={1}
            justifyContent="center"
            alignItems="center"
          >
            <Prefix prefix={prefix} />
            <OgInput
              flex={1}
              disabled={disabled}
              {...resetStyles}
              {...rest}
              onFocus={(e) => {
                setFocused(true)
                onFocus?.(e)
              }}
              onBlur={(e) => {
                setFocused(false)
                onBlur?.(e)
              }}
              htmlFor={name}
              ref={forwardedRef}
              className={clsx(
                rest.className,
                `${prefixCls}-box`,
                disabled && `${prefixCls}-disabled`,
                focused && `${prefixCls}-focused`
              )}
            />

            <Suffix suffix={suffix} />
          </VariantFrame>

          {addonAfter && (
            <VariantAddonFrame
              variant={variant}
              focused={focused}
              className={clsx(`${prefixCls}-addon-after`)}
            >
              {addonAfter}
            </VariantAddonFrame>
          )}
        </Group>
        {noHelper !== true && (
          <AnimatePresence exitBeforeEnter>
            {(errors && errors.length ? errors : [help ?? '']).map((error) => (
              <ItemHelper help={error} key={error} />
            ))}
          </AnimatePresence>
        )}
      </YStack>
    </YStack>
  )
})

export type BaseInputProps = OgInputProps & InputExtraProps
