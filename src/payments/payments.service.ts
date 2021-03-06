import { Body, Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { create } from 'domain'
import { Model, Models } from 'mongoose'
import { CreatePaymentDto } from './dto/create-payment.dto'
import { UpdatePaymentDto } from './dto/update-payment.dto'
import { PaymentsDocument, Payments } from './entities/payment.entity'
import { PaymentsModule } from './payments.module';
const IdSearch = require('./scripts/ms-cadastro-getway')

@Injectable()
export class PaymentsService {
constructor(@InjectModel(Payments.name) private PaymentsModel: Model<PaymentsDocument>) {}
  create(createPaymentDto: CreatePaymentDto) {
    console.log(createPaymentDto)
  }

  findAll(){
    return this.PaymentsModel.find()
  }

  findOne(id:string){    
    var find = this.PaymentsModel.findById(id)
    var idResponse = String(find['_conditions']['_id'])
    const parseUser =(name, email, cpf, birthday,)=>{
      const Payment =  new this.PaymentsModel({
        name:name,
        email:email,
        cpf:cpf,
        birthday:birthday,
        pay:true,
        delivery:false})   
      return Payment.save()
    }

    async function IdResult(ids){
      const getResponse = await IdSearch(ids)
      const respResponse = await(getResponse)
      const name = respResponse['name']
      const email = respResponse['email']
      const cpf = respResponse ['cpf']
      const birthday = respResponse ['birthday']
      parseUser(name,email,cpf,birthday)
    }

    IdResult(id)
  }

  update(id: string, updatePaymentDto: UpdatePaymentDto){
    return `This action updates a #${id} payment`
  }

  remove(id: string){
    return `This action removes a #${id} payment`
  }
}
