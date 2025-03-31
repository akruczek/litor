import * as React from 'react'
import { View } from 'react-native'
import { templateStyles } from './template.styles'

interface Props {
  children: React.ReactNode
}

export const Template = ({ children }: Props) => {
  return (
    <View style={templateStyles.mainContainer}>
      {children}
    </View>
  )
}
