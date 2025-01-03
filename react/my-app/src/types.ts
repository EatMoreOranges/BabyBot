export interface Messages {
  messages: Array<Message>;
}

export interface Message {
  id: number;
  text: string;
  userName: string;
}
