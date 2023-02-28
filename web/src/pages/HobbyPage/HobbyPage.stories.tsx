import type { ComponentMeta } from '@storybook/react'

import HobbyPage from './HobbyPage'

export const generated = () => {
  return <HobbyPage />
}

export default {
  title: 'Pages/HobbyPage',
  component: HobbyPage,
} as ComponentMeta<typeof HobbyPage>
