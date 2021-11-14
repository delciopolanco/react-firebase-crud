import './App.css';
import { Filter } from './pages/filter';
import { CreateProducts } from './pages/createProducts';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="block mx-auto max-w-6xl" style={{ paddingLeft: '.938em', paddingRight: '.938em' }}>
      <div className="relative text-left" style={{ margin: '60px 0 0' }}>
        <BrowserRouter>
          <Switch>
            <Route component={Filter} path='/filters' />
            <Route component={CreateProducts} path='/create' />
            <Route exact path="/">
              <Redirect to="/filters" />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  )
}

export default App;
