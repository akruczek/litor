import * as React from 'react'
import { NavigationProps } from '../navigation/navigation.types'
import { Template } from '../core/template/template'
import { Tx } from '../core/tx/tx'

export const Home = ({}: NavigationProps) => {
  return (
    <Template>
      <Tx local="title" />
    </Template>
  )
}
