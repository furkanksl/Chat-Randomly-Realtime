import { useEffect, useRef, useState } from "react";
import styles from "./ChatList.module.css";
import MessagesContext from "../store/messages-context";
import { useContext } from "react";

import {
  getDatabase,
  ref,
  onValue,
  orderByChild,
  query,
} from "firebase/database";
import initializeFirebase from "../base/fb.config";
import { getUserNickname } from "../services/local.service";

export default function ChatList() {
  const [isLoading, setIsLoading] = useState(true);
  const [userNickname, setUserNickname] = useState("");

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    setTimeout(() => {
      if (messagesEndRef.current !== null)
        messagesEndRef.current?.scrollIntoView({
          behavior: "smooth",
        });
    }, 500);
  };

  let database = getDatabase(initializeFirebase());
  const messagesContext = useContext(MessagesContext);

  useEffect(() => {
    getAllMessages();
    setUserNickname(getUserNickname());
    // console.log(userNickname);
  }, []);

  async function getAllMessages() {
    const msgs = await getMessages();
    setIsLoading(false);
    scrollToBottom();
  }

  async function getMessages() {
    const starCountRef = query(
      ref(database, "messages/"),
      orderByChild("created_at")
    );

    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();

      messagesContext.addMessage(convertResponseToArray(data));

      scrollToBottom();
    });
  }

  function convertResponseToArray(data) {
    var messages = [];

    if (data !== null)
      Object.values(data).forEach((item) => {
        messages.push(JSON.parse(item));
      });
    // console.log(messages);
    return messages;
  }

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.chatList}>
      {messagesContext.messages === undefined
        ? ""
        : messagesContext.messages.map((message, index) => {
            return (
              <div
                key={index}
                className={
                  userNickname === message.sender
                    ? styles.senderBox
                    : styles.chatBox
                }
              >
                <p>{message.text}</p>
              </div>
            );
          })}
      <div ref={messagesEndRef} style={{ float: "left", clear: "both" }}></div>
    </div>
  );
}
