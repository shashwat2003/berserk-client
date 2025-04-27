import { Page } from '@/components/page'
import { useAppForm } from '@/tamagui/kit/form'
import { Typography } from '@/tamagui/kit/typography'
import { YStack } from 'tamagui'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(3, 'Please enter a username'),
  password: z.string().min(3, 'Please enter a password'),
})

export function HomePage() {
  const form = useAppForm({
    defaultValues: {
      username: '',
      password: '',
    },
    onSubmit: (values) => {
      // biome-ignore lint/suspicious/noConsoleLog: testing
      console.log('Form submitted:', values.value)
    },
    validators: {
      onChange: formSchema,
    },
  })

  return (
    <Page>
      <YStack width={'100%'} maxWidth={300}>
        <Typography.Title textAlign="center">Login Here</Typography.Title>
        <Typography.Title level={5} textAlign="center">
          @best_app
        </Typography.Title>
        <form.AppForm gap={'$xl'}>
          <form.AppField
            name="username"
            children={(field) => <field.Input label="Username" help="i love usernames" />}
          />
          <form.AppField
            name="password"
            children={(field) => (
              <field.Input label="Password" help="my-secure-password" secureTextEntry />
            )}
          />
          <form.Submit>
            <Typography.Text>Submit</Typography.Text>
          </form.Submit>
        </form.AppForm>
      </YStack>
    </Page>
  )
}
