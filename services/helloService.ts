import helloDTO from "../dtos/helloDTO";

interface helloService {
    // createUser(name: string, email: string): Promise<User>;
     getHello(): Promise<helloDTO | null>;
    // updateUser(id: number, name: string, email: string): Promise<boolean>;
    // deleteUser(id: number): Promise<boolean>;
  }

  export default helloService;