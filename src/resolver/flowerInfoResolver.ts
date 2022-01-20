import { Arg, Query, Resolver } from 'type-graphql'
import FlowerInfo from '../entity/FlowerInfo'



@Resolver(FlowerInfo)
class FlowerInfoResolver {
  @Query(() => [FlowerInfo])
  async getMbtiContent(@Arg('mbtiCode',{nullable:true}) mbtiCode:string): Promise<any> {

    let data
    if(!mbtiCode){
      data = await FlowerInfo.find()
    }else{
      data = [await FlowerInfo.findOne({
        mbtiCode:mbtiCode
      })]
    }
    console.log(data,"데이터")

    // console.log(data, "데이터")
    return data
  }
  @Query(() => String)
  async ping(){
      return'pong'
  }

}

export default FlowerInfoResolver



