import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="container">
      <Navbar title="Arbaz" bgcolor="yellow" />
      <br />
      <Navbar title="Arbaz Ansari" bgcolor="#808080" />
      <Navbar />
    </div>
  );
}

export default App;
