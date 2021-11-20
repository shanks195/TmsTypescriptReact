import { AlertColor } from "@mui/material";
import { RecordString } from "types";

export interface ISidebar{
  show: boolean;
}

export interface IBackdrop{
  message: string;
  static: boolean;
  show: boolean;
}

export interface INotification {
  message: string;
  params: RecordString;
  variant?: AlertColor;
}
export interface ITopbar{
  title: string;
}
export interface IAppState{
  backdrop: IBackdrop;
  sidebar: ISidebar;
  notification: INotification;
  topbar: ITopbar;
}