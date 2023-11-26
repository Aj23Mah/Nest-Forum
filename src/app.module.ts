import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { FaqModule } from './faq/faq.module';
import { FaqCategoryModule } from './faq-category/faq-category.module';
import { QuestionModule } from './question/question.module';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
import { BlogModule } from './blog/blog.module';
import { BlogCategoryModule } from './blog-category/blog-category.module';
import { AuthModule } from './auth/auth.module';



@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Aj_Mah:admin123@cluster0.q7fbsn8.mongodb.net/?retryWrites=true&w=majority',
      {
        dbName: 'forum',
        autoCreate: true,
      },
    ),
    UserModule,
    FaqModule,
    FaqCategoryModule,
    QuestionModule,
    CategoryModule,
    BlogModule,
    BlogCategoryModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
