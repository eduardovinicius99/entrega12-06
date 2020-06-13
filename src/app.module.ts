import { Module, Controller } from '@nestjs/common';
import { clientService } from './client.service';
import { clientController } from './client.controller';



@Module({
  imports: [
  ],
  controllers: [
    clientController
  ],
  providers: [
    clientService
  ],
})
export class AppModule { }