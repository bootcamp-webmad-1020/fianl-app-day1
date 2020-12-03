import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import { Switch, Route } from 'react-router-dom'

import CoasterList from './pages/Coasters-list/Coasters-list'
import CoasterDetails from './pages/Coaster-details/Coaster-details'
import CoasterForm from './pages/Coaster-form/Coaster-form'

function App() {
  return (
    <Switch>
      <Route path="/montañas" exact render={() => <CoasterList />} />
      <Route path="/montañas/:coaster_id" render={props => <CoasterDetails {...props} />} />
      <Route path="/crear" render={() => <CoasterForm />} />
    </Switch>
  )
}

export default App