import * as request from 'request';

export const get = (endpoint:string, apiKey:string) => {
  const options = {
    method: 'GET',
    uri: endpoint,
    headers: {
      Authorization: `Bearer ${apiKey}`,
    }
  };

  return new Promise((resolve:any, reject:any) => {
    return request(options, (err, resp, body) => {
      if (err) {
        reject(err);
      }
      resolve(JSON.parse(body));
    });
  });
};
