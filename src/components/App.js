import React, { useState, useEffect } from 'react';

function App() {
    const [dogImage, setDogImage] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setDogImage(data.message);
                setIsLoaded(true);
            });
        // return () => {
        //     cleanup
        // }
    }, []);

    return(
        <div>
            <p>{isLoaded ? <img src={dogImage} alt='A Random Dog'></img> : "Loading..."}</p>
        </div>
    )
}

export default App;