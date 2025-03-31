import * as React from 'react'
import { View } from 'react-native'
import { SCREEN } from './navigation.types'
import { Home } from '../home/home'

export const Navigation  = () => {
  const DEFAULT_NAVIGATION_SCREEN = React.useMemo(() => SCREEN.HOME, [])

  const NAVIGATION_SCREEN_TO_COMPONENT_MAP = React.useMemo(() => ({
    [SCREEN.HOME]: Home,
  }), [])

  const [currentScreen, setCurrentScreen] = React.useState<SCREEN>(DEFAULT_NAVIGATION_SCREEN)

  const stackRef = React.useRef<SCREEN[]>([])

  const Screen = React.useMemo(() => NAVIGATION_SCREEN_TO_COMPONENT_MAP[currentScreen], [currentScreen])

  const navigate = React.useCallback((navTo: SCREEN) => {
    setCurrentScreen(navTo)
    stackRef.current = [...stackRef.current, navTo]
  }, [])

  const goBack = React.useCallback(() => {
    if (stackRef.current.length > 0) {
      const navTo = stackRef.current.pop()

      if (navTo) {
        navigate(navTo)
      }
    }
  }, [])

  return (
    <View>
      <Screen {...{ navigate, goBack }} />
    </View>
  )
}
