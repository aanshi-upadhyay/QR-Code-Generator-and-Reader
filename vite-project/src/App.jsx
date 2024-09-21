import "./App.css";
import CreateQR from "./components/CreateQR";
import ReadQR from "./components/ReadQR";

const App =()=>{
  return(
  <div className="container-fluid">
    <h1 className="my-5 text-center display-2">QR Code Generator & Reader</h1>

    <div className="row">
      <CreateQR />
      <ReadQR />

    </div>
  </div>
  );
};
export default App;
