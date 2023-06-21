import { ReturnUserDto } from "../../user/dto/returnUser.dto";

export interface ReturnSign {
  user: ReturnUserDto;
  accessToken: string;
}