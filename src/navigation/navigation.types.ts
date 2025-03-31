export enum SCREEN {
  HOME = 'home',
}

export interface NavigationProps {
  navigate: (screen: SCREEN) => void
  goBack: () => void
}
