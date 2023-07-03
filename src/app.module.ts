import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entity/users.entity';

@Module({
  imports: [UsersModule,
    TypeOrmModule.forRoot({
      type:"mysql",
      port:3306,
      database:"test",
      username:"root",
      password:"",
      host:"localhost",
      synchronize:true,
      entities:[Users]
    }),
   
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
