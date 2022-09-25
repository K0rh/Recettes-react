import React, { useState, useEffect } from "react";

export default function Navbar(props) {
    const [isMenuClicked, setMenu] = useState("false");
    const [largeur, setLargeur] = useState(window.innerWidth);

    const menuClicked = () => {
        setMenu(!isMenuClicked);
    }

    const {accueilClicked, entreesClicked, platsClicked, dessertsClicked} = props.setstate;

    useEffect(() => {

        const changeWidth = () => {
            setLargeur(window.innerWidth);
        }

        if (window.innerWidth > 520) {
            setMenu(false);
        }

        window.addEventListener('resize', changeWidth)

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    })


    return (
        <nav>
            {(isMenuClicked || largeur > 520) && (
                <ul className="nav-list">
                    <li className="nav-items" onClick={() => accueilClicked()}>Accueil</li>
                    <li className="nav-items" onClick={() => entreesClicked()}>Entrées</li>
                    <li className="nav-items" onClick={() => platsClicked()}>Plats</li>
                    <li className="nav-items" onClick={() => dessertsClicked()}>Desserts</li>
                </ul>)
            }
            <button className="nav-button" onClick={menuClicked}>Menu</button>
        </nav>
    );
}