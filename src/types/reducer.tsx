import { IAppState } from "./app";
import { IAccountState } from "./models/Account";

export interface RootState {
  app: IAppState;
  auth: IAccountState;
}
