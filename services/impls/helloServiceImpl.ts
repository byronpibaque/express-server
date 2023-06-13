import helloDTO from "../../dtos/helloDTO";
import helloService from "../helloService";



class helloServiceImpl implements helloService {
 public async getHello(): Promise<helloDTO|null> {
    const hello = new helloDTO();
    hello.messaje = "hola mi nombre es Byron";
    return hello;
  }
}

export default  helloServiceImpl;