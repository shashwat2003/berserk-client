import {
  Button as OgButton,
  type ButtonProps as OgButtonProps,
  Spinner,
  type SpinnerProps,
  withStaticProperties,
} from 'tamagui'

type ButtonExtraProps = {
  loading?: boolean
  loadingProps?: SpinnerProps
}

const ButtonFrame = OgButton.styleable<ButtonExtraProps>((propsIn, forwardedRef) => {
  const { loading, loadingProps, ...props } = propsIn

  if (loading) {
    props.children = <Spinner {...loadingProps} />
  }

  return <OgButton {...props} ref={forwardedRef} />
})

export const Button = withStaticProperties(ButtonFrame, {
  Text: OgButton.Text,
  Icon: OgButton.Icon,
})

export type ButtonProps = OgButtonProps & ButtonExtraProps
