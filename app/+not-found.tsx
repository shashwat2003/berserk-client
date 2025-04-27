import { Typography } from '@/tamagui/kit/typography'
import { YStack } from 'tamagui'

export function NotFound() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Typography.Title>404 - Not Found</Typography.Title>
      <Typography.Paragraph>The page you are looking for does not exist.</Typography.Paragraph>
    </YStack>
  )
}
