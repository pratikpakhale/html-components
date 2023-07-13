import useComponents from './libs/useComponents'

import card from './components/card.html'
import team from './components/team.html'

// name is the tag name, template is the html template
// and the name must have a dash (-) in it

const components = [
  { name: 'app-card', template: card },
  { name: 'app-team', template: team },
]

useComponents(components)
