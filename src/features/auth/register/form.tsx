import { zRegisterPost } from '@/services/api/gen/zod.gen'
import { withForm } from '@/tamagui/kit/form'
import { formOptions, useStore } from '@tanstack/react-form'
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
    onChange: zRegisterPost.extend({ otpSent: z.boolean() }),
  },
})

export const RegisterForm = withForm({
  ...registerFormOpts,
  render: ({ form }) => {
    const otpSent = useStore(form.store, (store) => store.values.otpSent)

    return (
      <>
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
        {otpSent && (
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
                <field.Input.Password
                  label="Password"
                  secureTextEntry
                  help="your-secure-password"
                />
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
                <field.Input.Password label="Confirm Password" help="your-secure-password-again" />
              )}
            />
          </>
        )}
      </>
    )
  },
})
