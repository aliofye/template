interface Message {
  message: string;
}

const MessageService = {
  getMessage: (): Message => {
    return { message: 'Hello, World!' };
  },

  getMessageById: (id: string): Message => {
    return { message: `You requested a message with id: ${id}` };
  },
};

export default MessageService;
