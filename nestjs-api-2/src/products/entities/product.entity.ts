import {Model, Column,Table, PrimaryKey,Default,DataType} from 'sequelize-typescript';


@Table({
    tableName:'products'
})
export class Product extends Model {
    @PrimaryKey
    @Column({autoIncrement:true})
    id: number;

    @Column({allowNull:false})
    name: string;

    @Default(0)
    @Column({ type: DataType.DECIMAL(10, 2),allowNull:false})
    price: number;
    
    @Column({allowNull:false})
    brand: string;
    
    @Column({allowNull:false})
    image: string;
}
