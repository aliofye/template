import MessageRepository from './message.repository';
import type { Message, NewMessage } from './message.repository';

class MessageService {
  constructor(private messageRepository: typeof MessageRepository) {
    this.messageRepository = messageRepository;
  }

  async getMessage(): Promise<Message | undefined> {
    await this.messageRepository.insertMessage({ text: 'Hello, World!' });
    return this.messageRepository.getMessage();
  }

  createMessage(message: NewMessage): Promise<Message | undefined> {
    return this.messageRepository.insertMessage(message);
  }
}

export default new MessageService(MessageRepository);
