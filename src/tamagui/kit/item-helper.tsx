import type { SizableTextProps } from 'tamagui'
import { Typography } from './typography'

type ItemHelperProps = SizableTextProps & {
  help: string
}

const ItemHelper = ({ help, ...props }: ItemHelperProps) => {
  return (
    <Typography.Text
      animation={'100ms'}
      enterStyle={{
        y: -10,
        opacity: 0,
      }}
      exitStyle={{
        y: 10,
        opacity: 0,
      }}
      color={'$placeholderColor'}
      size={'$sm'}
      {...props}
    >
      {help}
    </Typography.Text>
  )
}

export default ItemHelper
