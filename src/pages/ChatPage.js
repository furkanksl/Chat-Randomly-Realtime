import ChatList from "../components/ChatList";
import MessageField from "../components/MessageField";
import styles from "./ChatPage.module.css";

export default function ChatPage() {
  return (
    <section className={styles.container}>
      <p className={styles.title}>Welcome!</p>
      <p className={styles.desc}>Let's chat randomly!</p>
      <ChatList />
      <MessageField />
      <p className={styles.madeBy}>
        Made by{" "}
        <a href="https://github.com/furkanksl" target="_blank">
          furkan
        </a>
      </p>
    </section>
  );
}
