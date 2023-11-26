import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/user/entities/user.entity';
import { UserModule } from 'src/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { JwtStrategy } from './Strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { TokenStorageProvider } from './providers/token-storage.provider';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [AuthController],
  providers: [
    JwtService,
    UserService,
    TokenStorageProvider,
    LocalStrategy,
    JwtStrategy,
    AuthService,
  ],
})
export class AuthModule {}
