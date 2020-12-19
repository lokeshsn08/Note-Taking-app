import './App.css';
import NoteTaking from './components/NoteTaking';
import ViewNote from './components/ViewNote';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/content.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
function App() {
  return (
   <div>
  <BrowserRouter>
    <Switch>
        <Route exact path='/' render={NoteTaking} />
        <Route exact path='/ViewNote/:id' render={ViewNote} />
    </Switch>
  </BrowserRouter>
    </div>
  );
}

export default App;
