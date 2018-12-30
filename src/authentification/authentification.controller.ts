import { Controller, Get } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';

@Controller('authentification')
export class AuthentificationController {
  constructor(private authentificationService: AuthentificationService) {}
  @Get('auth')
  signIn() {
    return this.authentificationService.signIn();
  }
}
