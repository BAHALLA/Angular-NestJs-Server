import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { AuthentificationController } from './authentification/authentification.controller';
import { AuthentificationService } from './authentification/authentification.service';
import { AuthentificationModule } from './authentification/authentification.module';

@Module({
  imports: [UsersModule, PostsModule, AuthentificationModule],
  controllers: [AuthentificationController],
  providers: [AuthentificationService],
})
export class AppModule {}
