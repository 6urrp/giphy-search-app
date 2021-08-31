import { useEffect, useState } from "react";

import "./Search.css";

import SingleGif from "./SingleGif";
import { getGifs } from "../services/getGifs";


const Search = () => {
    const [gifs, setGifs] = useState([]);
    const [typing, setTyping] = useState("");
    const [filteredGifs, setFilteredGifs] = useState([])

    useEffect(() => {
        getGifs().then(data => {
            setGifs(data);
            setFilteredGifs(data);
        })
    }, []);

    const onTypingHandler = (event) => {
        event.preventDefault();
        setTyping(event.target.value);
    }

    const onEnterHandler = (event) => {
        if (event.keyCode === 13) {
            getGifs(typing)
                .then(data =>
                    setFilteredGifs(data)
                );
            const filtered = gifs.filter(gif => gif.slug.includes(typing));
            setFilteredGifs(filtered);
            setTyping("")
        }
    }


    return (
        <main>
            <h1>Search Giphy</h1>
            <input type="text" value={typing} onChange={onTypingHandler} onKeyUp={onEnterHandler} className="input-field" />
            <div className="gifs-container">
                {
                filteredGifs.map((current, index) => (
                    <SingleGif gif={current} key={index}/>
                ))
                }
            </div>
        </main>
    )
}

export default Search;