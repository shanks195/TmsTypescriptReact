import { SvgIconProps } from "@mui/material/SvgIcon";
import { StaticContext } from "react-router";
import { RouteComponentProps } from "react-router-dom";

export type IconComponent = React.FC<SvgIconProps>;

export interface ILanguage {
  code: string;
  name: string;
  country_code: string;
}

export type IRouteComponent =
  | React.ComponentType<RouteComponentProps<any, StaticContext, unknown>>
  | React.ComponentType<any>;

export interface ITokenLocal {
  token: string;
  userid: string | number;
}

export interface IValidate{
  message: string;
  params: Record<string, any>;
}
