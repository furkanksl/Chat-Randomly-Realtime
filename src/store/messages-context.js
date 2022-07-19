import { createContext, useState } from "react";

const MessagesContext = createContext({
  messages: [],
  addMessage: () => {},
});

export function MessagesContextProvider(props) {
  const [userMessages, setUserMessages] = useState([]);
  // const [totalMessages, setTotalMessages] = useState(0);

  function addMessageHandler(messages) {
    setUserMessages(messages);
  }

  const context = {
    messages: userMessages,
    addMessage: addMessageHandler,
  };

  return (
    <MessagesContext.Provider value={context}>
      {props.children}
    </MessagesContext.Provider>
  );
}

export default MessagesContext;
