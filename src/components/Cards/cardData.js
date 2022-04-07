import { v4 as uuid } from "uuid";

const homeOffers = [{
    id: uuid(),
    offer: "Upto 30% Off",
    name: "COFFEE",
    item: "On coffee supplies",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Grocery/CatPage/SBC/SBC-Coffe-REVISED-X4.jpg"
},
{
    id: uuid(),
    offer: "Upto 35% off",
    item: "on pasta & noodles",
    name: "PASTA_AND_NOODLES",
    img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/PastsNoodles.jpg"
},
]
const categoryProducts = [

    {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Chocolates.jpg",
        name: "CHOCOLATES",
    },
    {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/Nutella.jpg",
        name: "SPREADS_AND_JAM",
    },
    {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Grocery/GroceryNewLook/PastsNoodles.jpg",
        name: "PASTA_AND_NOODLES",
    },
    {
        img: "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Grocery/CatPage/SBC/SBC-Coffe-REVISED-X4.jpg",
        name: "COFFEE",
    }


]
export { homeOffers, categoryProducts }
