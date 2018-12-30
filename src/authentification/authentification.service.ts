import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthentificationService {
  signIn() {
    return true;
  }
  SignOut() {
    return false;
  }
}
