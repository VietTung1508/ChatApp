import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed.jsx";
import LoginForm from "./components/LoginForm";

const App = () => {
  if (!localStorage.getItem("username")) return <LoginForm />;

  const user = localStorage.getItem("username");
  const pass = localStorage.getItem("password");

  console.log(user);

  return (
    <ChatEngine
      height="100vh"
      projectID="72ff95ff-03aa-43a0-9bfc-95fe2ae81323"
      userName={user}
      userSecret={pass}
      renderChatFeed={(chatAppProps) => {
        return <ChatFeed {...chatAppProps} />;
      }}
    />
  );
};

export default App;
