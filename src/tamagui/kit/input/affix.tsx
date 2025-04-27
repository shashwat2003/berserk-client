import type { BaseInputExtraProps } from './types'

// ============== Prefix ==============

type PrefixProps = Pick<BaseInputExtraProps, 'prefix'>

export const Prefix: React.FC<PrefixProps> = ({ prefix }) => {
  return <>{prefix}</>
}

// ============== Suffix ==============

type SuffixProps = Pick<BaseInputExtraProps, 'suffix'> & {
  value?: string
  onClear?: () => void
}

export const Suffix: React.FC<SuffixProps> = ({ suffix }) => {
  return <>{suffix}</>
}
