export interface ISuccessResponse {
  message: string;
}

export interface IError {
  response: {
    _data: {
      message: string;
    };
  };
}

export type TNewError = Record<string, string[]>[];

export type TPossibleError = IError | TNewError | unknown;
