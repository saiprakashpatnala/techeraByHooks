import {Switch, Route} from 'react-router-dom'

import Home from './components/Home'

import NotFound from './components/NotFound'

import CourseItemDetails from './components/CourseItemDetails'

import './App.css'

// Replace your code here
const App = () => (
  <div>
    <Switch>
      <Route exact path="/courses/:id" component={CourseItemDetails} />
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  </div>
)

export default App
