import axios from 'axios';

export const getStocks = ()=> dispatch =>{
    axios.get('/api/items')
        .then(res => {
           console.log('res', res);
        })
        .then(err=>{
            console.log('then', err);
        });
};