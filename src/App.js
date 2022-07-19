import { useEffect } from "react";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import initializeFirebase from "./services/firabse.service";

function App() {
  useEffect(() => {
    initializeFirebase();
  }, []);
  return (
    <div className="App">
      <ChatPage />
    </div>
  );
}

export default App;
