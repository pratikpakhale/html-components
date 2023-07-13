import useComponents from './libs/useComponents'

import card from './components/card.html'
import team from './components/team.html'

import initiateCard from './scripts/card'

const components = [
  { name: 'card', template: card, initiator: initiateCard },
  { name: 'team', template: team, initiator: null },
]

useComponents(components)
