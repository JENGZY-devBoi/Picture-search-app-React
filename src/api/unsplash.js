import axios from "axios";

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID sYf8r3Y_Tg_r4Q0XFOdx9uG1DVON4ALtagTuDhljqYI'
    }
});