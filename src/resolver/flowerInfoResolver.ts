import { Arg, Query, Resolver } from 'type-graphql'
import FlowerInfo from '../entity/FlowerInfo'



@Resolver(FlowerInfo)
class FlowerInfoResolver {
  @Query(() => FlowerInfo)
  async getMbtiContent(@Arg('mbtiCode') mbtiCode:string): Promise<any> {
    // console.log(data[0],"데이터")
    let data = await FlowerInfo.find({
      mbtiCode:mbtiCode
    })

    // console.log(data, "데이터")
    return data[0]
  }
}

export default FlowerInfoResolver



