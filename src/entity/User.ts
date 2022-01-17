import { Field, ID, ObjectType } from "type-graphql";
import { Entity,PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";

@ObjectType()
@Entity("User")
export default class User extends BaseEntity{

  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;
  
  @Field()
  @Column()
  firstName: string;
  
  @Field()
  @Column()
  lastName: string;
  
  @Field()
  @Column({unique:true, length:254})
  email: string;
  
  @Field()
  name: string;

  @Field()
  @Column()
  password: string;
}

