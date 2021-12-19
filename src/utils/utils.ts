type Params = {
  [key: string]: string | string[] | number | number[] | boolean;
};
export function objectToStringParameters(params: Params): string {
  let formattedParams = '';
  Object.keys(params).map(param => {
    formattedParams = formattedParams + `&${param}=${params[param]}`;
  });
  return formattedParams;
}
