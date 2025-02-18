import React, {useState} from "react";
import './Categories.css';

function Categories({ categories , filterMenus }){

    const [mainCategory, setMainCategory] = useState("all");

    return(
        <>
            <div className="btn-container">
                {
                    categories.map((category , index) => {
                        return(
                            <button
                                key={index}
                                type="button"
                                className={category === mainCategory ? "filter-btn highlight" : "filter-btn"}
                                onClick={() => {
                                    setMainCategory(category);
                                    filterMenus(category);
                                }}
                            >
                                {category}

                            </button>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Categories;