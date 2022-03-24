import { HIGH_TO_LOW, LOW_TO_HIGH } from "../constants/filterConstant";

const sortedProducts = (products, sortBy) => {
    if (sortBy === LOW_TO_HIGH)
        return [...products].sort((item1, item2) => item1.price - item2.price);
    if (sortBy === HIGH_TO_LOW)
        return [...products].sort((item1, item2) => item2.price - item1.price);

    return products;
};

const categorisedProducts = (products, categories) => {
    let categoryList = Object.keys(categories)
    const dataList = categoryList.reduce((acc, curr) => categories[curr] ? acc.concat([...products].filter((item) => item.categoryName === curr)) : acc, [])
    return dataList.length ? dataList : products
}

const priceRangedProducts = (products, priceValue) => {
    return [...products].filter((item) => Number(item.price) <= Number(priceValue))
}
const ratedProducts = (products, rating) => {
    return [...products].filter((item) => Number(item.rating) >= Number(rating))
}

export { sortedProducts, categorisedProducts, priceRangedProducts, ratedProducts };


