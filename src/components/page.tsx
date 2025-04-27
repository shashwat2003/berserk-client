import { YStack, type YStackProps } from 'tamagui'

export const Page = ({ children, ...props }: React.PropsWithChildren<YStackProps>) => {
  return (
    <YStack flex={1} alignItems="center" justifyContent="center" {...props}>
      {children}
    </YStack>
  )
}
