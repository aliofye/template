/**
 * This is an example service.
 * Services are used to encapsulate business logic and interact with repositories.
 */

import ExampleRepository from './example.repository';
import type { SelectType, InsertType } from './example.repository';

class ExampleService {
  constructor(private helloWorldRepository: typeof ExampleRepository) {
    this.helloWorldRepository = ExampleRepository;
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

export default new ExampleService(ExampleRepository);
