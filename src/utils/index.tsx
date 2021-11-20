import Buffer from "buffer";
import { ITokenLocal, IValidate, TAuthHeader } from "types";
import { APP_LANG_DEFAULT, APP_TOKEN_NAME } from "./constants";
import moment from 'moment';
import { APP_DATE_FORMAT } from './constants';
import { IFileBlob } from "types/models/Upload";

export const contentType = (type: string): Record<"Content-Type", string> => {
  return { "Content-Type": type };
};
export const removeStorage = (name: string) => {
  removeLocalItem(name);
  removeSessionItem(name);
}
export const decodeToken = (): ITokenLocal => {
  const UT: ITokenLocal = { token: "", userid: "" };
  let localToken = getStorage(APP_TOKEN_NAME);
  if(!localToken)return UT;

  const parse = Buffer.Buffer.from(localToken, "base64").toString().split(".");
  UT.userid = parse.pop() ?? "";
  UT.token = parse.join(".");

  return UT;
};

export const fixNullToString = <T,>(data: T): T => {
  const rs: Record<string, any> = {};

  for (let v in data){
    rs[v] = data[v] === null ? '' : data[v];
  }

  return rs as T;
}

export const formatPath = (path: string, ...params: (string | number)[]): string => {
  if (!path) return path;

  let match = path.match(/:[a-z][a-z\d_]*\??/gi);
  if (!match) return path;

  match
  .map(param => param.replace(/\?$/, ''))
  .filter((value, index, self) => self.indexOf(value) === index)
  .map((param, index) => path = path.replace(
    new RegExp(param + '\\??', 'gi'), 
    (params[index] ?? '').toString()
  ));

  return path;
}

export const stringToBase64 = (str: string): string => {
  return Buffer.Buffer.from(str).toString("base64");
};

export const encodeToken = (UT: ITokenLocal): string => {
  return stringToBase64([UT.token, UT.userid].join("."));
};

export const getSearchPage = (search: string, name: string): number => {
  const params = new URLSearchParams(search);
  const page = Number(params.get(name)) || 1;
  return page < 1 ? 1 : page;
}

export const getSearchPageString = (search: string, name: string): string  => {
  const params = new URLSearchParams(search);
  const page = params.get(name) || '' ;
  return page ;
}

export const getQueryString = (init: Record<string, string | number | null | undefined>) => {
  const qs: Record<string, string> = {};
  Object.keys(init).map((k) => {
    const t = typeof init[k];
    switch (t) {
      case 'object':
        qs[k] = '';
        break;
      case 'string':
      case 'number':
        qs[k] = (init[k] as string | number).toString();
        break;
    }
    return k;
  })
  return new URLSearchParams(qs).toString();
}

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

export const getStorage = (name: string) => {
  return getLocalItem(name) || getSessionItem(name);
}

export const getAuthHeader = (token: string, type: TAuthHeader = 'Bearer'): Record<'Authorization', string> => {
  return { Authorization: `${ type } ${ token }` };
}

export const getValidate = (message = '', params = {}): IValidate => {
  return { message, params };
}

export const removeLocalItem = (name: string) => {
  localStorage.removeItem(name);
};

export const setLocalItem = (name: string, data: unknown) => {
  localStorage.setItem(name, JSON.stringify(data));
};

export const getSessionItem = (name: string) => {
  let data = sessionStorage.getItem(name);

  try {
    data = JSON.parse(data as string);
  } catch (e) {
    return null;
  }

  return data;
};

export const setSessionItem = (name: string, data: unknown) => {
  sessionStorage.setItem(name, JSON.stringify(data));
};
export const removeSessionItem = (name: string) => {
  sessionStorage.removeItem(name);
};
export const updateDocumentTitle = (title: string) => {
  const current = document.title.split('|').pop()?.trim();
  const newTitle = [ title ];
  current && newTitle.push(current);
  document.title = newTitle.join(' | ');
}

export const intToRoman = (original: number): string => {
  if (original < 1 || original > 3999) {
    throw new Error('Error: Input integer limited to 1 through 3,999');
  }

  const numerals = [
    ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'], // 1-9
    ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'], // 10-90
    ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'], // 100-900
    ['M', 'MM', 'MMM'], // 1000-3000
  ];

  const digits = Math.round(original).toString().split('');
  let position = (digits.length - 1);

  return digits.reduce((roman, digit) => {
    if (digit !== '0') {
      roman += numerals[position][parseInt(digit) - 1];
    }

    position -= 1;

    return roman;
  }, '');
}




export const timestampToDate = (time: number, format = APP_DATE_FORMAT, mili = false): string => {
  if (time <= 0) return '';
  mili || (time = time * 1000);
  return moment(time).format(format)
}

export const dateToTimestamp = (date: string, mili = false) => {
  if (!date) return 0;
  const d = moment(date).format();
  const t = +moment(d).format("X");
  return mili ? t * 1000 : t;
}
export const converStringDate = (data:string):string =>{
  // convert YYYY-MM-DD to DD-MM-YYYY
  return moment(new Date(data)).format('DD/MM/YYYY');
}

export const getOrdinalNumber = (page: number, limit: number, index: number): number => {
  return limit * (page - 1) + index + 1;
}


export const fileToBlob = (file: File): IFileBlob => ({
  blob: URL.createObjectURL(file),
  type: file.type,
  name: file.name
});

export const blobToFile = (blobFile: IFileBlob): File => {
  const { blob, name, type } = blobFile;
  return new File([blob], name, { type });
};
export const converStringDateTime = (data: string): string => {
  // convert YYYY-MM-DD hh:mm:ss to hh:mm DD/MM/YYYY
  return moment(new Date(data)).format('HH:MM DD/MM/YYYY');
}
