export default function getResponseFromAPI() {
  const res = new Promise((resolve, reject) => {
    resolve('Got a response from the API');
    reject(Error);
  });
  return res;
}
