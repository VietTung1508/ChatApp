import { useState } from "react";
import axios from "axios";

function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObjecct = {
      "Project-ID": "72ff95ff-03aa-43a0-9bfc-95fe2ae81323",
      "User-Name": username,
      "User-Secret": password,
    };
    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObjecct,
      });
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      window.location.reload();
    } catch (error) {
      setError("Oops , incorect credentials");
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            className="input"
            placeholder="Username"
            required
            onChange={(e) => setUserName(e.target.value)}
          />
          <input
            type="password"
            value={password}
            className="input"
            placeholder="Password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <div align="center">
            <button type="submit" className="button">
              <span>Start Chatting</span>
            </button>
          </div>
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
