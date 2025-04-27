import { composeEventHandlers, Form, withStaticProperties } from 'tamagui'
import { Button } from '../button'
import { useFormContext } from './context'

/**
 * Submit button for the form. It will trigger the form submission when pressed.
 * @param props - The props for the button.
 * Note: Make sure that this is the first button child of form, otherwise pressing enter will not trigger the form submission.
 */
const SubmitFrame = Button.styleable((props, forwardRef) => {
  const form = useFormContext()
  const handleSubmit = composeEventHandlers(() => {
    form.handleSubmit()
  }, props.onPress)

  return (
    <form.Subscribe
      selector={(state) => [state.canSubmit, state.isSubmitting]}
      children={([canSubmit, isSubmitting]) => {
        return (
          <Form.Trigger asChild>
            <Button
              {...props}
              loading={props.loading ?? isSubmitting}
              disabled={props.disabled ?? !canSubmit}
              ref={forwardRef}
              onPress={handleSubmit}
            />
          </Form.Trigger>
        )
      }}
    />
  )
})

export const Submit = withStaticProperties(SubmitFrame, {
  Text: Button.Text,
  Icon: Button.Icon,
})
