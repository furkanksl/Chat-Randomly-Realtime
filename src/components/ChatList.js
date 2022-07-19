import styles from "./ChatList.module.css";

const DUMMY_CHATS = [
  {
    id: 1,
    text: "test",
    sender: "acac123",
  },
  {
    id: 2,
    text: "test2",
    sender: "acac123",
  },
  {
    id: 3,
    text: "test3",
    sender: "acac123",
  },
  {
    id: 4,
    text: "test4",
    sender: "acac123",
  },
  {
    id: 5,
    text: "test5",
    sender: "acac123",
  },
];

export default function ChatList() {
  return (
    <div className={styles.chatList}>
      {DUMMY_CHATS.map((message, index) => {
        return (
          <div key={index} className={styles.chatBox}>
            <p>{message.text}</p>
          </div>
        );
      })}
    </div>
  );
}
