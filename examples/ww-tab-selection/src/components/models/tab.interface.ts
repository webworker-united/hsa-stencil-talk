import { IAction } from "./action.interface";

export interface ITab {
  title: string;
  key: string;
  action: IAction;
}
