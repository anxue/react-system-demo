import Jsonp from 'jsonp'
export default class Axios {
    static jsonp(option) {
       return  new  Promise((resolve, reject)=> {
            Jsonp(option.url, {
                param: 'callback'
            }, function(err, res) {
                if (res.status === 'success') {
                    resolve(res);
                } else {
                    reject(res.message);
                }
            })
        })
    }
}