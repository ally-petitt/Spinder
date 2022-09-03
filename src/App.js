import "./App.css";
import axios from "axios";

function App() {
  const handleLogin = () => {
    // axios.post();
    console.log("login");
  };

  return (
    <div className="App">
      login
      <br />
      {process.env.REACT_APP_CLIENT_ID}
      <button onClick={handleLogin}>Click to login</button>
    </div>
  );
}

export default App;
