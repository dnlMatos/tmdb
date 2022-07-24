import GlobalContext from "./context/globalContext";
import Router from "./routes/Router";

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
