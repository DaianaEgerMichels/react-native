import logo from "../../assets/logo.png";

import tomato from "../../assets/frutas/Tomate.png";
import pumpkin from "../../assets/frutas/Abóbora.png";
import broccoli from "../../assets/frutas/Brócolis.png";
import potato from "../../assets/frutas/Batata.png";
import cucumber from "../../assets/frutas/Pepino.png";

const basket = {
    top: {
        title: "Basket Detail"
    },
    details: {
        name: "Basket of Vegetables",
        imageFarm: logo,
        nameFarm: "Little Farm",
        description: "A basket with products carefully selected from the farm straight to your kitchen",
        price: "R$ 40,00",
        button: "Buy"
    },
    items: {
        title: 'Basket Items',
        list: [
            {
                name: "Tomato",
                image: tomato
            },
            {
                name: "Pumpkin",
                image: pumpkin
            },
            {
                name: "Broccoli",
                image: broccoli
            },
            {
                name: "Potato",
                image: potato
            },
            {
                name: "Cucumber",
                image: cucumber
            }
        ]
    }
}

export default basket;