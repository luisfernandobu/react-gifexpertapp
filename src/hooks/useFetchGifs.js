import { useEffect, useState } from "react";
import { getGifs } from "../helpers";

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        getGifs(category)
            .then(newGifs => {
                setGifs(newGifs);
                setIsLoading(false);
            });
    }, []);

    return {
        gifs,
        isLoading
    }
}
