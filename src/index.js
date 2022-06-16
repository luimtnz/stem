import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './views/Login';
import Main from './views/Main';
import Juegos from './views/Juegos';
import Industria4 from './views/Industria4.0';
import Datos from './views/Datos';
import Stem from './views/Stem';
import store from './redux/store';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Motivacion from './views/Motivacion';
import menustem from './views/menustem';
import ciencia from './views/ciencia';
import referencias from './views/referencias';
import menumoti from './views/menumoti';
import videosm from './views/videosm';
import menu4 from './views/menu4';
import juego2 from './views/juego2';
import menucarr from './views/menucarr';
import quecarrera2 from './views/quecarrera2';
import ciencia2 from './views/ciencia2';

const routing = (
  <Router>
    <Provider store={store}>
      <Route path="/" component={Login} />
      <Route path="/dashboard" component={Main} />
      <Route path="/views/Juegos" component={Juegos} />
      <Route path="/views/Industria4.0" component={Industria4} />
      <Route path="/views/Datos" component={Datos} />
      <Route path="/views/Stem" component={Stem} /> 
      <Route path="/views/Motivacion" component={Motivacion} />
      <Route path="/views/menustem" component={menustem} />
      <Route path="/views/ciencia" component={ciencia} />
      <Route path="/views/referencias" component={referencias} />
      <Route path="/views/menumoti" component={menumoti} />
      <Route path="/views/videosm" component={videosm} />
      <Route path="/views/menu4" component={menu4} />
      <Route path="/views/juego2" component={juego2} />
      <Route path="/views/menucarr" component={menucarr} />
      <Route path="/views/quecarrera2" component={quecarrera2} />
      <Route path="/views/ciencia2" component={ciencia2} />
   </Provider>
  </Router>
)


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
