import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PaymentsDocument = Payments & Document;

@Schema()
export class Payments {
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
export const PaymentsSchema = SchemaFactory.createForClass(Payments);

