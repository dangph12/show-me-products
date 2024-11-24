import axios from 'axios';
import {useEffect} from 'react';
function App(){
    const url = process.env.REACT_APP_API_PATH;
    useEffect(() => {
        axios.get(`${url}/products`)
        .then(response => {
            console.log(response.data);
        })
    }, [url])
    return (
        <div>Hello World</div>
    )
}

export default App;