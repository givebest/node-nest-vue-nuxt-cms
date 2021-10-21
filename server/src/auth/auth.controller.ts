import { Controller, Post, Request, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuardUser } from './guards/local-auth.guard';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { LoginUserDto } from './dto/login-user.dto';
import { WxLoginUserDto } from './dto/wxlogin-user.dto';

@ApiTags('user auth')
@Controller('api/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuardUser)
  @Post('login')
  @ApiOperation({ summary: '用户登录' })
  async login(@Request() req) {
    console.log('user auth ctrl', req.user);
    return this.authService.login(req.user);
  }
  // async login(@Body() loginUserDto: LoginUserDto) {
  //   return this.authService.login(loginUserDto);
  // }

  @Post('logout')
  @ApiOperation({ summary: '用户登出' })
  async logout() {
    return this.authService.logout();
  }
}
