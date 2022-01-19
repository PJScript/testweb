import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from 'type-graphql'
// import * as bcrypt from 'bcryptjs' 
import data from '../data'
import User from '../entity/User'
import FlowerInfo from '../entity/FlowerInfo'
// import listDesc from '../schema/schema'


@Resolver(User)
class UserResolver {
  
  @Query(()=> User)
  async getUserInfo():Promise<User | string | any>{
    let info = await User.find({
      email:"test@test.com"
    })
    console.log(info,"인포")
    return info[0]
  }

  @FieldResolver()
  async name(@Root() parent: User ):Promise<string>{
    return `${parent.firstName} ${parent.lastName}`
  }

  @Mutation(() => User)
  async register( 
    @Arg("firstName") firstName: string ,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string,
    @Arg("passWord") passWord: string 
    ): Promise<User | string> {
    
      // const hashedPassword = await bcrypt.hash(passWord,12)
      const hashedPassword = passWord
        
      const user = User.create({
          firstName,
          lastName,
          email,
          password: hashedPassword
        }).save()
        return user
  }
}

export default UserResolver
