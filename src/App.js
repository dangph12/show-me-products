import axios from 'axios';
import {useEffect} from 'react';
function App(){
    const url = process.env.API_BASE_URL;
    useEffect(() => {
        axios.get(`${url}/recipes`)
        .then(response => {
            console.log(response.data);
        })
    }, [url])
    return (
        <div>Hello World</div>
    )
}

export default App;