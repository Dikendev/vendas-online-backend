import { ReturnUserDto } from "src/user/dto/returnUser.dto";

export interface ReturnSign {
  user: ReturnUserDto;
  accessToken: string;
}