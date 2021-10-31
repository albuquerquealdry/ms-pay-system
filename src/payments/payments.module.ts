import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service';
import { PaymentsController } from './payments.controller';
import { Payments, PaymentsSchema } from './entities/payment.entity';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forFeature([{ name:Payments.name, schema: PaymentsSchema}])],
  controllers: [PaymentsController],
  providers: [PaymentsService]
})
export class PaymentsModule {}
