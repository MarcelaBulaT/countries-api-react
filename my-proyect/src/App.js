import ListaPais from './listapais'
import './App.css';
import React from 'react'
import Header from './header'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import listaPais from './listapais'



const initialState={
  listaPais:[]
}

function reducer(state, action){
  return state
}
const store= createStore(reducer,initialState, )

function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Header/>
      <ListaPais />
    </div>
    </Provider>
  );
}

export default App;
