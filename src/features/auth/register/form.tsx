import { zRegisterPost } from '@/services/api/gen/zod.gen'
import { withForm } from '@/tamagui/kit/form'
import { formOptions } from '@tanstack/react-form'
import { z } from 'zod'

export const registerFormOpts = formOptions({
  defaultValues: {
    email: '',
    name: '',
    confirm_password: '',
    password: '',
    otp: '',
    otpSent: false,
  },
  validators: {
    onChange: zRegisterPost.and(z.object({ otpSent: z.boolean() })),
  },
})

export const SendOtpForm = withForm({
  ...registerFormOpts,
  render: ({ form }) => {
    return (
      <>
        <form.Subscribe
          selector={(state) => state.values.otpSent}
          children={(otpSent) => {
            return (
              <form.AppField
                name="email"
                children={(field) => (
                  <field.Input
                    label="Email"
                    keyboardType="email-address"
                    help="best@username.com"
                    placeholder="Enter your email.."
                    disabled={otpSent}
                    allowClear
                  />
                )}
              />
            )
          }}
        />
      </>
    )
  },
})

export const RegisterForm = withForm({
  ...registerFormOpts,
  render: ({ form }) => {
    return (
      <>
        <form.AppField
          name="otp"
          children={(field) => (
            <field.Input label="OTP" keyboardType="numeric" help="one-two-threuw" />
          )}
        />
        <form.AppField
          name="name"
          children={(field) => <field.Input label="Name" help="your-name" />}
        />
        <form.AppField
          name="password"
          children={(field) => (
            <field.Input label="Password" secureTextEntry help="your-secure-password" />
          )}
        />
        <form.AppField
          name="confirm_password"
          validators={{
            onChangeListenTo: ['password'],
            onChange: ({ value, fieldApi }) => {
              if (value !== fieldApi.form.getFieldValue('password')) {
                return { message: 'Passwords do not match' }
              }
              return undefined
            },
          }}
          children={(field) => (
            <field.Input
              label="Confirm Password"
              secureTextEntry
              help="your-secure-password-again"
            />
          )}
        />
      </>
    )
  },
})
