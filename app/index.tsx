import { useAppForm } from '@/tamagui/components/form'
import { Typography } from '@/tamagui/components/typography'
import { YStack } from 'tamagui'

export function HomePage() {
  const form = useAppForm({
    defaultValues: {
      firstName: 'John',
      lastName: 'Doe',
    },
    onSubmit: (values) => {
      // biome-ignore lint/suspicious/noConsoleLog: testing
      console.log('Form submitted:', values.value)
    },
  })

  return (
    <YStack>
      <Typography.Title>Hello</Typography.Title>
      <form.AppForm>
        <form.AppField
          name="firstName"
          validators={{
            onChange: ({ value }) =>
              value.length < 3 ? 'First Name must be at least 3 characters' : undefined,
          }}
          children={(field) => <field.Input label="First Name" help="Enter your first name" />}
        />
        <form.AppField
          name="lastName"
          validators={{
            onChange: ({ value }) =>
              value.length < 3 ? 'Last Name must be at least 3 characters' : undefined,
          }}
          children={(field) => <field.Input label="Last Name" />}
        />

        <form.Submit>
          <Typography.Text>Submit</Typography.Text>
        </form.Submit>
      </form.AppForm>
    </YStack>
  )
}
