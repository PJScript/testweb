import { Arg, Query, Resolver } from 'type-graphql'
import FlowerInfo from '../entity/FlowerInfo'



@Resolver(FlowerInfo)
class FlowerInfoResolver {
  @Query(() => FlowerInfo)
  async getMbtiContent(@Arg('mbtiCode') mbtiCode:string): Promise<any> {
    let data = await FlowerInfo.find({
      mbtiCode:mbtiCode
    })

    // console.log(data, "데이터")
    return data[0]
  }
  @Query(() => String)
  async ping(){
      return'pong'
  }

}

export default FlowerInfoResolver



