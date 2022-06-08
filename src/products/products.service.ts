import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './entities/product.entity';


@Injectable()
export class ProductsService {

  constructor(
      @InjectModel(Product) 
      private productModel: typeof Product,
    ){}

  create(createProductDto: CreateProductDto) {
    return this.productModel.create(createProductDto as any)
  }

  findAll() {
    return this.productModel.findAll();
  }

  findOne(productId: number) {
    return this.productModel.findByPk(productId);
  }

  async update(productId: number, updateProductDto: UpdateProductDto) {
    const product = await this.productModel.findByPk(productId);
    return product.update(updateProductDto);
  }

  async remove(productId: number) {
    const order = await this.productModel.findByPk(productId, { rejectOnEmpty: true });
    order.destroy();
  }
}
