import axios from 'axios';

const AxiosInstance = (contentType = 'application/json') => {

    const ipv4Phone = '172.20.10.2';
    const ipv4Home = '192.168.1.111';

    const axiosInstance = axios.create({
        baseURL: `http://172.16.69.25:3001/`
    });

    axiosInstance.interceptors.request.use(
        async (config) => {
            const token = '';
            config.headers = {
                'Authorization': `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': contentType
            }
            return config;
        },
        err => Promise.reject(err)
    );

    axiosInstance.interceptors.response.use(
        res => res.data,
        err => Promise.reject(err)
    );
    return axiosInstance;
};

export default AxiosInstance;