import './App.css';
import Header from './Header'
import Counter from './Counter'

function App() {
  return (
    <div>
    <Header name="ProgBr" links = {["About", "Buy", "Contact"]}></Header>
    <Counter count={1}></Counter>
    </div>
  );
}

export default App;
