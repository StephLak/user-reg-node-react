import { makeRequest, RequestOptions } from "react-query-pro";

export type ErrorType = {
  status?: number;
  message: string;
} | null;

export let BASE_URL = "http://localhost:5000";

export type HandleRequestOptions = { token?: string } & RequestOptions;

export type HeaderOptions = { token?: string } & any;

export const getHeaders = (headerOptions?: HeaderOptions) => {
  const { token, ...otherOptions } = headerOptions || {};

  return {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
      ...(token && { "X-Auth-Token": `${token}` }),
      ...otherOptions,
    },
  };
};

export const handleRequest = async (options: HandleRequestOptions) => {
  try {
    const { token, data, url } = options;

    const axiosConfig = {
      url: `${url}`,
      headers: getHeaders({ token }),
      ...(data && { data }),
      ...options,
    };

    const response = await makeRequest(axiosConfig);

    return response;
  } catch (error) {
    throw error;
  }
};

export const IS_ONLINE = navigator.onLine;

export const formatFormSubmissionErrors = (responseErrors: any) => {
  if (!responseErrors) return;

  const errorsKeys = Object.keys(responseErrors);

  const errors = errorsKeys
    ?.map((key) => responseErrors[key])
    ?.filter((error) => error)
    ?.flat(Infinity);

  return errors;
};

export const handleNetworkErrors = ({
  networkErrorMessage,
  error,
  validationErrors,
  errorMessage = "Sorry we encountered an unexpected error while processing this request, please try again",
  isFetch = false,
}: {
  networkErrorMessage?: string;
  error: any;
  validationErrors?: any;
  errorMessage?: any;
  isFetch?: boolean;
}) => {
  if (!error) return;

  console.log({ error, validationErrors, networkErrorMessage });

  if (validationErrors && typeof validationErrors === "object")
    return formatFormSubmissionErrors(validationErrors);

  const { response, request } = error || {};

  if (networkErrorMessage) return [networkErrorMessage];
  else if (!IS_ONLINE)
    return [
      "You are currently offline. Please, confirm your internet connection and try again",
    ];
  else if (request && !response)
    return [
      `Sorry, an unexpected error while ${
        isFetch ? "fetching the data you requested" : "processing your request "
      }, please try again`,
    ];
  else if (!IS_ONLINE && (!request || !response))
    return [
      "An unexpected error occurred, confirm your internet connection and please try agian",
    ];
  else return [errorMessage];
};

export const saveToStorage = (
  itemKey: number,
  storage: any,
  itemToSave: object
) => storage.setItem(itemKey, itemToSave);

export const getFromStorage = (itemKey: number, storage: any) =>
  storage.getItem(itemKey) || "";

export const deleteFromStorage = (itemKey: number, storage: any) =>
  storage.removeItem(itemKey);
