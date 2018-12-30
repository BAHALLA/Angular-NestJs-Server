import { Test, TestingModule } from '@nestjs/testing';
import { AuthentificationController } from './authentification.controller';

describe('Authentification Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [AuthentificationController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: AuthentificationController = module.get<AuthentificationController>(AuthentificationController);
    expect(controller).toBeDefined();
  });
});
