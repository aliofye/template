/**
 * This is an example service.
 * Services are used to encapsulate business logic and interact with repositories.
 */

import HelloWorldRepository from './helloworld.repository';
import type { SelectType, InsertType } from './helloworld.repository';

class HelloWorldService {
  constructor(private helloWorldRepository: typeof HelloWorldRepository) {
    this.helloWorldRepository = HelloWorldRepository;
  }

  async getOne(): Promise<SelectType | undefined> {
    return this.helloWorldRepository.getOne();
  }

  async getOneById(id: string): Promise<SelectType | undefined> {
    return this.helloWorldRepository.getOneById(id);
  }

  create(message: InsertType): Promise<SelectType | undefined> {
    return this.helloWorldRepository.insert(message);
  }
}

export default new HelloWorldService(HelloWorldRepository);
