import { Page } from '@/components/page'
import { RegisterForm, registerFormOpts, SendOtpForm } from '@/features/auth/register/form'
import { v1CoreSendOtpPostMutation } from '@/services/api/gen/@tanstack/react-query.gen'
import { Button } from '@/tamagui/kit/button'
import { useAppForm } from '@/tamagui/kit/form'
import { Typography } from '@/tamagui/kit/typography'
import { useMutation } from '@tanstack/react-query'
import { YStack } from 'tamagui'

export const RegisterPage = () => {
  const form = useAppForm({
    ...registerFormOpts,
    onSubmit: (values) => {
      // biome-ignore lint/suspicious/noConsoleLog: <explanation>
      console.log(values)
    },
  })

  const sendOtpMutation = useMutation({
    ...v1CoreSendOtpPostMutation(),
    onSuccess: (data) => {
      form.setFieldValue('otpSent', true)
    },
    onError: (error) => {
      form.setFieldValue('otpSent', false)
    },
  })

  const sendOtp = async () => {
    const verify = await form.validateField('email', 'change')
    if (!verify.length) {
      sendOtpMutation.mutate({
        body: {
          email: form.state.values.email,
        },
      })
    }
  }

  return (
    <Page>
      <YStack width={'100%'} maxWidth={300}>
        <Typography.Title textAlign="center">Login Here</Typography.Title>
        <Typography.Title level={5} textAlign="center">
          @best_app
        </Typography.Title>
        <form.AppForm gap={'$sm'}>
          <SendOtpForm form={form} />
          <form.Subscribe
            selector={(state) => state.values.otpSent}
            children={(otpSent) =>
              !otpSent ? (
                <Button loading={sendOtpMutation.isPending} onPress={sendOtp}>
                  <Button.Text>Send OTP</Button.Text>
                </Button>
              ) : (
                <>
                  <RegisterForm form={form} />
                  <form.Submit>
                    <Typography.Text>Register User</Typography.Text>
                  </form.Submit>
                </>
              )
            }
          />
        </form.AppForm>
      </YStack>
    </Page>
  )
}
