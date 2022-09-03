import "./App.css";
import querystring from "querystring";

function App() {
  const handleLogin = async () => {
    let res = await fetch(
      "https://accounts.spotify.com/authorize?" +
        querystring.stringify({
          response_type: "code",
          client_id: process.env.REACT_APP_CLIENT_ID,
          redirect_uri: "http://localhost:3000/success",
        })
    );

    console.log(res);
  };

  return (
    <div className="App">
      login
      <br />
      id: {process.env.REACT_APP_CLIENT_ID}
      <br />
      <button onClick={handleLogin}>Click to login</button>
    </div>
  );
}

export default App;
