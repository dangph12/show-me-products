import axios from 'axios';
import {useEffect} from 'react';
function App(){
    useEffect(() => {
        axios.get('http://localhost:9999/recipes')
        .then(response => {
            console.log(response.data);
        })
    }, [])
    return (
        <div>Hello World</div>
    )
}

export default App;