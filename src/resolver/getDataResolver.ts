import { Arg, Query, Resolver } from 'type-graphql'
import data from '../data'
import User from '../entity/User'
// import listDesc from '../schema/schema'


@Resolver()
class getDataResolver {
  @Query(()=> User ,{name:'getUser'})
  async getUser(@Arg('id') id: number){
    try{
      return await User.findOne({where:{id}})
    }catch(err){
      return err;
    }
  }
}

export default getDataResolver
