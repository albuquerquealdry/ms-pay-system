import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentDocument = Payment & Document;

@Schema()
export class Payment {
  @Prop()
  email: string;

  @Prop()
  name: string;

  @Prop()
  cpf: string;

  @Prop()
  birthday:string;

  @Prop()
  pay: boolean;

  @Prop()
  delivery:boolean;
}
export const CatSchema = SchemaFactory.createForClass(Payment);

