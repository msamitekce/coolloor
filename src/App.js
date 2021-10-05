import "./App.css";
import ColorsContainer from "./components/ColorsContainer";
import ColorContextProvider from "./context/ColorContext";
const App = () => {
  return (
    <div style={{ width: "100vw", height: "100vh" }} className="App">
      <ColorContextProvider>
        <ColorsContainer />
      </ColorContextProvider>
    </div>
  );
};

export default App;
