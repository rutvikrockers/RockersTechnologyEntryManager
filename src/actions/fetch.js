import Config from 'react-native-config';

export function doFetch(method, path, data, token, cb){
  let payload = {
    method: method,
    headers: {
      'fscrwsf-token': 'WQazAUbwfRYu2//yY322bg==',
      'www-token': token,
    }
  }
  if(method != 'GET'){
    var form_data = new FormData();

    for ( var key in data ) {
      form_data.append(key, data[key]);
    }
    payload.body = form_data;
  }

  return fetch("http://rockerstech.com/thecrowd/api"+path, payload)
    .then(
      (response) => response.json()
    )
    .then((res) => {
      return cb(null, res)
    })
    .catch( (error) => {
      cb(error, null)
    })
}

const Fetch = {doFetch: doFetch}
export default Fetch 
