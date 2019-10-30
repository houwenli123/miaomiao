/**
 * city接口列表
 */

import base from './base'; //导入接口域名列表
import axios from '../http' //导入http中创建的axios实例
import qs from 'qs'

const city = {
    cityList() {
        return axios.get(`${base.dev}/city`);
    },
    cityChange(id) {
        var cityId = id;
        var promise = new Promise((resolve, reject) => {
            axios.put(`${base.dev}/city?dw=` + "1", { dw: "0" }).then((response) => {
                console.log(response);
                resolve(response);
            }).catch((err) => {
                reject(err);
            })
        }).then((res) => {
            axios.put(`${base.dev}/city/${cityId}`, { dw: "1" }).then((response) => {
                console.log(response);
                resolve(response);
            }).catch((err) => {
                reject(err);
            })
        }).catch(err => {
            console.log(err) // 这里catch到错误timeout
        });
        return promise;
    }
}

export default city;