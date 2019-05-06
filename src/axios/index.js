import Jsonp from 'jsonp'
import axios from 'axios'
import { Modal } from 'antd';
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
    // get请求封装
    static ajax(options) {
        let baseApi = 'https://www.easy-mock.com/mock/5ccfa806eab89e35d7a45852/api';
        return new Promise((resolve, reject) => {
            axios({
                url: options.url,
                method: 'get',
                baseURL: baseApi,
                timeout: 5000,
                params: (options.data && options.data.params) || ''
            }).then(response => {
                if (+response.status === 200) {
                    if (+response.data.code === 0) {
                        resolve(response.data.data)
                    } else {
                        Modal.info({
                            title: '提示',
                            content: response.data.msg
                        })
                    }
                } else {
                    reject(response.data)
                }
            })
        })
    }

}