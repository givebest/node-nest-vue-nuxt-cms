import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstants } from '../../libs/lib';

@Injectable()
export class JwtStrategyUser extends PassportStrategy(Strategy, 'userjwt') {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: any) {
    console.log('payload', payload);
    const {
      userId,
      username,
      status,
      roles,
      department,
      phone,
      avatar,
      departmentName,
      departmentId,
      areaId,
    } = payload;

    return {
      userId,
      username,
      status,
      roles,
      department,
      phone,
      avatar,
      departmentName,
      departmentId,
      areaId,
    };
  }
}
