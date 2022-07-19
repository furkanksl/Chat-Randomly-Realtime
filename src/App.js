import { useEffect } from "react";
import "./App.css";
import initializeFirebase from "./base/fb.config";
import ChatPage from "./pages/ChatPage";
import { getUserNickname } from "./services/local.service";
import { MessagesContextProvider } from "./store/messages-context";

function App() {
  useEffect(() => {
    // initializeFirebase();
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
