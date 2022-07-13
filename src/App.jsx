import "./App.css";
import Descricao from "./components/descricao/Descricao";
import Filmes from "./components/filmes/Filmes";
import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
     <Header/>
     <Descricao/>
     <Filmes/>
    </div>
  );
}

export default App;
