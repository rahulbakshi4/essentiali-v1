import { v4 as uuid } from "uuid";

const homeOffers = [{
    id: uuid(),
    offer: "Upto 30% Off",
    item: "On bakery supplies",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Baking_Supplies.jpg"
},
{
    id: uuid(),
    offer: "Upto 35% off",
    item: "on pasta & noodles",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/PastsNoodles.jpg"
},
]
const categoryProducts = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Chocolates.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Nutella.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/PastsNoodles.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Grocery/CatPage/SBC/SBC-Coffe-REVISED-X4.jpg"

]
export { homeOffers, categoryProducts }
