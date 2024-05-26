import { useState } from "react";
import { AddCategory, GifGrid } from "./components/";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([]);

    const handleAddCategory = (newCategory) => {
        if (!categories.includes(newCategory)) {
            setCategories([newCategory, ...categories]);
        }
    }

    return (
        <>
            <header>
                <h1>GifExpertApp</h1>
            </header>

            <AddCategory
                // setCategories={ setCategories }
                onNewCategory={handleAddCategory}
            />

            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
