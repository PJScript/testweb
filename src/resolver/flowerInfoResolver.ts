import { Arg, Query, Resolver } from 'type-graphql'
import FlowerInfo from '../entity/FlowerInfo'



@Resolver(FlowerInfo)
class FlowerInfoResolver {
  @Query(() => FlowerInfo)
  async ping(): Promise<any> {
    // console.log(data[0],"데이터")
    let data = await FlowerInfo.find({
      id: 1
    })

    // console.log(data, "데이터")
    return data[0]
  }
}

export default FlowerInfoResolver



