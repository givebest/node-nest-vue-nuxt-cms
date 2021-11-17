import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFile,
  UseGuards,
  Request,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { uid } from 'uid';
import * as path from 'path';
import { baseHosts } from '../libs/config';
import { ApiConsumes, ApiBody } from '@nestjs/swagger';
import { JwtAuthGuardUser } from 'src/auth/guards/jwt-auth.guard';
import Jimp from 'jimp';
const jimp = require('jimp');
import { Log } from 'src/libs/utils';

const { NODE_ENV } = process.env;
const baseHost = baseHosts[NODE_ENV] || {
  uploadPath: 'public/',
  baseHost: 'http://localhost:3000/',
  domain: 'www.giibee.com',
};

@UseGuards(JwtAuthGuardUser)
@Controller('api/upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    // see https://www.techiediaries.com/nestjs-upload-serve-static-file/
    FileInterceptor('upload', {
      storage: diskStorage({
        destination: `./${baseHost.uploadPath}uploads/`,
        filename: (_req, file, cb) => {
          file = file.upload ? file.upload : file;
          // console.log('fiel', file, _req)
          return cb(
            null,
            uid(32) + Date.now() + path.extname(file.originalname),
          );
        },
      }),
    }),
  )
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    type: 'multipart/form-data',
    required: true,
    schema: {
      type: 'object',
      properties: {
        upload: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  async uploadFile(@UploadedFile() upload, @Request() req) {
    Log({ req });
    console.log('baseHost', baseHost);
    console.log('file-upload', upload);
    const { filename, path, mimetype } = upload;
    upload.uploaded = 1;
    // upload.url = path.replace('public/', 'http://localhost:3000/')
    upload.url = path.replace(baseHost.uploadPath, baseHost.baseHost);
    upload.fileName = filename;

    if (mimetype.includes('image')) {
      // 图片上传增加水印功能
      const text = baseHost.domain;
      jimp.read(path).then((image) => {
        const { width, height } = image.bitmap;
        console.log(width, height);
        jimp.loadFont(jimp.FONT_SANS_32_BLACK).then((font) => {
          image
            .print(font, width - text.length * 20, height - 50, text)
            .write(path);
        });
      });
    }

    return upload;
  }
}
