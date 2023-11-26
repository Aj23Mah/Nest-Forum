import {
  Controller,
  Get,
  Post,
  Body,
  Request,
  Inject,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { SignUpDTO } from './dto/auth.dto';
import { UserService } from 'src/user/user.service';
import { TokenStorage } from './storage/token.storage';
import { ApiBody, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { TokenGuard } from './guards/token.guard';
import { ResponseMessage } from './decorators/response.decorator';

@ApiTags('Authentication')
@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    @Inject('TokenStorage')
    private readonly tokenStorage: TokenStorage,
    private readonly userService: UserService,
  ) {}

  @Post('/sign-in')
  @ApiBody({
    schema: {
      type: 'object',
      properties: {
        username: {
          type: 'string',
        },
        password: {
          type: 'string',
        },
      },
    },
  })
  @ApiOkResponse({ description: 'API to sign in users' })
  @UseGuards(AuthGuard('local'))
  async login(@Request() req: any, res: Response) {
    console.log(req.user);
    const token = await this.tokenStorage.generateToken({
      email: req.user.email,
      _id: req.user._id,
      // firstName: req.user.firstName,
      // lastName: req.user.lastName,
    });
    console.log(token)
    // console.log('inside method');
    return {
      user: req.user,
      token: token,
    };
  }
  @Get('/me')
  @ResponseMessage('User Details extracted successfully')
  @UseGuards(TokenGuard)
  async getMuDetails(@Request() req: any) {
    return this.userService.findOne(req.user._id);
  }
  @Post('/sign-up')
  async signup(@Body() body: SignUpDTO) {
    return this.authService.createUser(body);
  }
}
