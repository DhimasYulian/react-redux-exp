import React from 'react';
import Home from './components/Home'
// import { useSelector, useDispatch } from 'react-redux';
// import { increment, decrement, login } from './actions';

const App = () => {
  // const counter = useSelector(state => state.counter);
  // const isLogged = useSelector(state => state.isLogged);
  // const dispatch = useDispatch();
  return (

    <div className="App">
      <Home />
      {/* {isLogged && <h1>Hello, Admin</h1>}
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button disabled={counter === 0} onClick={() => dispatch(decrement())}>-</button>
      <button onClick={() => dispatch(login())}>{!isLogged ? 'Login' : 'Logout'}</button> */}
    </div>
  );
}

export default App;
