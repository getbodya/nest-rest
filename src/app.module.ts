import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './resource/users/user.module';
@Module({
  imports: [
    UserModule,
    MongooseModule.forRoot(
      'mongodb+srv://admin:admin@rss-nodejs-cluster-vv5tj.mongodb.net/nest?retryWrites=true&w=majority',
      { useNewUrlParser: true, useUnifiedTopology: true },
    ),
  ],
})
export class AppModule {}
