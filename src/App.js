import React, {useState} from "react";
import './App.css';
import menus from "./data";
import Categories from "./Components/Categories/Categories";
import Menus from "./Components/Menus/Menus";

function App(){

    const allCategories = ["all" , ...new Set(menus.map(menu => menu.category))];

    const [allMenus, setAllMenus] = useState(menus);
    const [categories, setCategories] = useState(allCategories);

    const filterMenus = (category) => {
        if(category === "all"){
            setAllMenus(menus);
            return
        }

        let filtredMenus = menus.filter(menu => menu.category === category);
        setAllMenus(filtredMenus);
    }

    return(
        <>
            <main>
                <section className="menu section">
                    <div className="title">
                        <h2>our menu</h2>
                        <div className="underline"></div>
                    </div>
                    <Categories categories={categories} filterMenus={filterMenus}/>
                    <Menus menus={allMenus}/>
                </section>
            </main>
        </>
    );
}

export default App;