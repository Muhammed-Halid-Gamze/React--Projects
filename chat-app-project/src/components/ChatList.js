
import styles from "./styles.module.css"
import {useChat} from '../context/ChatContext'

const ChatList = () => {
  const {messages} = useChat();

  return (
    <div className={styles.chatlist}>

      ChatList
    </div>
  )
}

export default ChatList