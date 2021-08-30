import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core';
import { Provider } from 'react-redux';
import { store } from './store';
import { Gists } from './components/gists/gists'
import Chats from './components/chat-list/Chats';
import Home from './components/home/home';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import { HomeContainer } from './components';

const theme = createTheme({
  dark: {
    color: '#000',
  },
  light: {
    color: '#282c34',
  },
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/Home'>
              {/* <HomeContainer /> */}
              <Home />
            </Route>
            <Route exact path='/Chats'>
              <Chats />
            </Route>
            <Route exact path='/Chats/:roomId'>
              <Chats />
            </Route>
            <Route path='/Gists'>
              <Gists />
            </Route>
            <Route path='*'>
              <h1>404 page</h1>
            </Route>
          </Switch>
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  </React.StrictMode >,
  document.getElementById('root')
);
reportWebVitals();
