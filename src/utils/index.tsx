import Buffer from "buffer";
import { ITokenLocal, IValidate } from "types";
import { APP_LANG_DEFAULT } from "./constants";

export const contentType = (type: string): Record<"Content-Type", string> => {
  return { "Content-Type": type };
};

export const decodeToken = (base64: string): ITokenLocal => {
  const UT: ITokenLocal = { token: "", userid: "" };
  if (!base64) return UT;

  const parse = Buffer.Buffer.from(base64, "base64").toString().split(".");
  UT.userid = parse.pop() ?? "";
  UT.token = parse.join(".");

  return UT;
};

export const formatPath = (path: string, ...params: (string | number)[]): string => {
  if (!path) return path;

  let match = path.match(/:[a-z][a-z\d_]*/gi);
  if (!match) return path;

  match
  .filter((value, index, self) => self.indexOf(value) === index)
  .map((param, index) => path = path.replace(new RegExp(param, 'gi'), (params[index] ?? '').toString()));

  return path;
}

export const stringToBase64 = (str: string): string => {
  return Buffer.Buffer.from(str).toString("base64");
};

export const encodeToken = (UT: ITokenLocal): string => {
  return stringToBase64([UT.token, UT.userid].join("."));
};

export const getLang = () => {
  return (
    window.localStorage.i18nextLng ??
    document.querySelector("html")?.lang ??
    APP_LANG_DEFAULT.code
  );
};

export const getLocalItem = (name: string) => {
  let data = localStorage.getItem(name);

  try {
    data = JSON.parse(data as string);
  } catch (e) {
    return null;
  }

  return data;
};

export const getValidate = (message = '', params = {}): IValidate => {
  return { message, params };
}

export const removeLocalItem = (name: string) => {
  localStorage.removeItem(name);
};

export const setLocalItem = (name: string, data: unknown) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const updateDocumentTitle = (title: string) => {
  const current = document.title.split('|').pop()?.trim();
  const newTitle = [ title ];
  current && newTitle.push(current);
  document.title = newTitle.join(' | ');
}
