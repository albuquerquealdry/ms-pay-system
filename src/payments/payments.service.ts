import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Models } from 'mongoose';
import { CreatePaymentDto } from './dto/create-payment.dto';
import { UpdatePaymentDto } from './dto/update-payment.dto';
import { PaymentsDocument, Payments } from './entities/payment.entity';

@Injectable()
export class PaymentsService {
  constructor(@InjectModel(Payments.name) private PaymentsModel: Model<PaymentsDocument>) {}
  create(createPaymentDto: CreatePaymentDto) {
    const Payment =  new this.PaymentsModel(createPaymentDto)
    console.log(createPaymentDto)
    return Payment.save()
  }

  findAll() {
    return `This action returns all payments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} payment`;
  }

  update(id: number, updatePaymentDto: UpdatePaymentDto) {
    return `This action updates a #${id} payment`;
  }

  remove(id: number) {
    return `This action removes a #${id} payment`;
  }
}
