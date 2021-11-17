import { Logger } from '@nestjs/common';
import jwt_decode from 'jwt-decode';

export const Log = (params = {}) => {
  const req = params['req'];
  const user = params['user'];

  const logger = new Logger();

  const decoded = user ? user : jwt_decode(req.headers.authorization);
  const usernameStr = user ? 'name' : 'username';
  const userIdStr = user ? 'id' : 'userId';

  const username = decoded[usernameStr];
  const userId = decoded[userIdStr];

  const name = `${req.method}:${req.url}`;

  logger.warn(`${username}/${userId}`, name);
  logger.warn(req.headers['user-agent'], name);
  logger.warn(
    req.headers['x-forwarded-for'] ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress,
    name,
  );
};
