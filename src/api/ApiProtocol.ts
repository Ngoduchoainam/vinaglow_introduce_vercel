export default class ApiProtocol {
  static callAPI = (api: string, body: any, method: string) => {
    try {
      const requestContent =
        method == 'POST'
          ? {
            method: method,
            headers: {
              accept: 'text/plain',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          }
          : undefined;

      console.log(16, api)

      return fetch(api, requestContent)
        .then(response => {
          return response;
        })
        .catch(e => {
          console.log(22, e);
        });
    } catch (error) {
      console.log(25, error);
    }
  };

  static callAPIImage = (api: string, body: FormData, method: string) => {
    try {
      const requestContent =
        method == 'POST'
          ? {
            method: method,
            headers: {
              accept: 'text/plain'
            },
            body: body,
          }
          : undefined;

      return fetch(api, requestContent)
        .then(response => {
          return response;
        })
        .catch(e => {
          console.log(22, e);
        });
    } catch (error) {
      console.log(25, error);
    }
  };
}
