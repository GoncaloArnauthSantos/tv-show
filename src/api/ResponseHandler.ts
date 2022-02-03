import { IError } from './entities/IError';

export const ResponseHandler = async (response: any) => {
  const { ok: isResponseOk = false, status: responseStatus = 200 } = response;
  if (isResponseOk) {
    if (responseStatus === 204) {
      return response;
    }

    try {
      return await response.json();
    } catch (e) {
      return response;
    }
  }

  throw response;
};

export const ErrorHandler = async (error: any): Promise<IError> => {
  const { status = '' } = error;

  return { status } as IError;
};
