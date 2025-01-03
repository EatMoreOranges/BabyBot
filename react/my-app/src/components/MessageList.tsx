import { Message } from "../types";
import Messages from "./Messages";
import { List } from "@chakra-ui/react";

interface MessageListProps {
  messages: Array<Message>;
}

export default function MessageList(messages: MessageListProps) {
  return (
    <>
      <List>
        {messages.messages.map((message) => (
          <Messages
            key={message.id}
            userMessage={message.text}
            userName={message.userName}
          />
        ))}
      </List>
    </>
  );
}
