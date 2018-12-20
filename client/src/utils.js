'use strict';

import path from 'path';
import Axios from 'axios';

const API_ADDRESS = process.env.DEFAULT_AXIOS_ADDRESS || 'http://52.14.99.43:2991';

Axios.defaults.baseURL = API_ADDRESS;
export { Axios };