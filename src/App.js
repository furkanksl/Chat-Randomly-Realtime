import { useEffect } from "react";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import { getUserNickname } from "./services/local.service";
import { MessagesContextProvider } from "./store/messages-context";

function App() {
  useEffect(() => {
    getUserNickname();
  }, []);
  return (
    <div className="App">
      <MessagesContextProvider>
        <ChatPage />
      </MessagesContextProvider>
    </div>
  );
}

export default App;
