import { Module } from '@nestjs/common';
import { UploadController } from './upload.controller';
import { UploadService } from './upload.service';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports: [
    MulterModule.register({
      // storage: diskStorage({
      //   // 配置文件上传后的文件夹路径
      //   destination: `./public/uploads/`,
      //   filename: (req, file, cb) => {
      //     // 在此处自定义保存后的文件名称
      //     //   console.log(req, file, cb)
      //     /* const filename = file.fieldname + "-" + Date.now();
      //     cb(null, filename); */
      //     return cb(null, file.originalname);
      //   },
      // }),
    }),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
