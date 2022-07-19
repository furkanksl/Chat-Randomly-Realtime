import styles from "./MessageField.module.css";
import sendLogo from "../assets/icons/send.png";

export default function MessageField() {
  return (
    <div className={styles.messageField}>
      <input type="text" placeholder="Write someting..." />
      <button>
        <img src={sendLogo} alt="send-logo" />
      </button>
    </div>
  );
}
