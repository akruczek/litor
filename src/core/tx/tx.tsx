import * as React from 'react'
import { Text } from 'react-native'
import en from './local/en.json'
import { txStyles } from './tx.styles'

interface Props {
  local: string
}

export const Tx = ({ local }: Props) => {
  const content: string = React.useMemo(() => (en as any)[local] ?? local, [local])

  return (
    <Text style={txStyles.text}>
      {content}
    </Text>
  )
}
