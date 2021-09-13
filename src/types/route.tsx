import { IRouteComponent } from "./base";

export interface IBadge {
  color: string;
  value: string;
}

export interface IRoute {
  path?: string;
  icon?: React.ReactNode;
  iconText?: string;
  name?: string;
  label?: string;
  component?: IRouteComponent;
  badge?: IBadge;
  auth?: string[];
  children?: IRoute[];
  type?: string;
  exact?: boolean;
}
