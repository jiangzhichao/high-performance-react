import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'del'];

const formatUrl = path => 'http://smartpark.wenweikeji.com' + (path[0] !== '/' ? '/' + path : path);

export default class ApiClient {
    constructor() {
        methods.forEach(method =>
            this[method] = (path, { params, data } = {}, custom) => new Promise((resolve, reject) => {
                let request = superagent[method](formatUrl(path));

                if (custom) {
                    request = superagent[method](path);
                }

                if (params) {
                    request.query(params);
                }

                if (data) {
                    request.send(data);
                }

                request.end((err, { body } = {}) => (err || body.code !== 200) ? reject(body || err) : resolve(body));
            }));
    }

    empty() {
    }
}
