import "./App.css";
import { useState } from "react";

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [uname, setUname] = useState("");
  const [password, setPassword] = useState("");
  const [err, SetErr] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (uname === "user" && password === "password") {
      setIsSubmitted(true);
      SetErr(false);
    } else {
      SetErr(true);
    }
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      {err ? <div>Invalid username or password</div> : null}
      {isSubmitted ? (
        <div>Welcome, {uname}!</div>
      ) : (
        <form onSubmit={(e) => handleSubmit(e)}>
          <div>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              required
              value={uname}
              placeholder="username"
              id="username"
              onChange={(e) => setUname(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              required
              value={password}
              placeholder="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
}

export default App;
