import styles from "./MessageField.module.css";
import sendLogo from "../assets/icons/send.png";
import { useRef } from "react";

import { getDatabase, ref, push } from "firebase/database";
import { getUserNickname } from "../services/local.service";
import initializeFirebase from "../base/fb.config";

export default function MessageField() {
  let database = getDatabase(initializeFirebase());

  const textInputRef = useRef();

  var isSending = false;

  async function sendMessageHandler() {
    if (isSending) {
      return null;
    }

    const enteredText = textInputRef.current.value;
    // console.log(enteredText);

    isSending = true;
    await sendMessage(enteredText);

    if (textInputRef.current !== undefined) {
      textInputRef.current.value = "";
    }

    isSending = false;
  }

  async function sendMessage(text) {
    var sender = await getUserNickname();

    try {
      await push(
        ref(database, "messages/"),

        JSON.stringify({
          text: text,
          sender: sender,
          created_at: new Date().getTime(),
        })
      );
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className={styles.messageField}>
      <input type="text" placeholder="Write someting..." ref={textInputRef} />
      <button onClick={sendMessageHandler}>
        <img src={sendLogo} alt="send-logo" />
      </button>
    </div>
  );
}
