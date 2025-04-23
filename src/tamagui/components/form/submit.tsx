import { Button, type ButtonProps, composeEventHandlers, Form } from 'tamagui'
import { useFormContext } from './context'

/**
 * Submit button for the form. It will trigger the form submission when pressed.
 * @param props - The props for the button.
 * Note: Make sure that this is the first button child of form, otherwise pressing enter will not trigger the form submission.
 */
export const Submit = (props: ButtonProps) => {
  const form = useFormContext()
  const handleSubmit = composeEventHandlers(() => {
    form.handleSubmit()
  }, props.onPress)

  return (
    <Form.Trigger asChild>
      <Button {...props} onPress={handleSubmit} />
    </Form.Trigger>
  )
}
