import { Field, ID, ObjectType } from "type-graphql";
import { Entity,PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity("FlowerInfo")
export default class FlowerInfo extends BaseEntity{

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field()
  @Column({unique:true,length:254})
  mbtiCode: string

  @Field()
  @Column()
  listDesc: string;

  @Field()
  @Column("longtext")
  desc: string

  @Field()
  @Column()
  imgUrl: string

  @Field()
  @Column()
  nickName: string

  @Field()
  @Column()
  flowerName: string

  @Field()
  @Column()
  engName: string
}

