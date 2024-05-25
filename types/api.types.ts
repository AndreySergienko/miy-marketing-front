export interface ISuccessResponse {
    message: string;
}

export interface IError {
  response: {
    _data: {
      message: string;
    }
  }
}

export type TPossibleError = IError | unknown
