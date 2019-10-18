/**
 * city接口列表
 */

import base from './base'; //导入接口域名列表
import axios from '../http' //导入http中创建的axios实例
import qs from 'qs'

const city = {
    cityList() {
        return axios.get(`${base.dev}/city`);
    }
}

export default city;