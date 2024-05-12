import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Approutes from "./routes/App.routes";

function App() {
  return (
    <div className="App">
      <ToastContainer position="bottom-right" theme="dark" />
      <Approutes />
    </div>
  );
}

export default App;
