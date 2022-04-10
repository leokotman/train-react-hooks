import './App.css';
import UseReducer from './hooks/UseReducer';
import UseRef from './hooks/UseRef';
import UseState from './hooks/UseState';

function App() {
  return (
    <div className="App">
      <h2>Train React Hooks</h2>
      <UseState />
      <UseReducer />
      <UseRef />
    </div>
  );
}

export default App;
