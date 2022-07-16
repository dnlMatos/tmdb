import Router from "./components/routes/Router";
import GlobalContext from "./context/globalContext";

function App() {
  return (
    <div className="App">
      <GlobalContext>
        <Router />
      </GlobalContext>
    </div>
  );
}

export default App;
