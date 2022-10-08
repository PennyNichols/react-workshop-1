import './App.css';
import Header from "./components/Header/Header";
import Albums from "./components/Albums/Albums";

function App() {
  return (
    <div className="App">
      <Header title="Photo Albums" bg="violet" />
      <Albums/>
    </div>
  );
}

export default App;
