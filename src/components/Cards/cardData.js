import { v4 as uuid } from "uuid";
const homeProducts = [
    {
        id: uuid(),
        title: "Harvest Atta Bread",
        price: 40,
        imageURL: 'https://res.cloudinary.com/rahulb4/image/upload/v1634764518/bread_lue7ny.webp'
    },
    {
        id: uuid(),
        title: "Kissan Fruit Jam",
        price: 80,
        imageURL: 'https://res.cloudinary.com/rahulb4/image/upload/v1634764719/111643a_oddiix.jpg'
    },
    {
        id: uuid(),
        title: "Nestle Maggie",
        price: 60,
        imageURL: 'https://res.cloudinary.com/rahulb4/image/upload/v1634765779/169812a_ns9v0s.jpg'
    },
]

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
export { homeProducts, homeOffers, categoryProducts }
