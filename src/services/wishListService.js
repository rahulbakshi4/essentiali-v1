import axios from "axios"


export const getWishlistService = async (token) => {

    try {
        const response = await axios.get('/api/user/wishlist', {
            headers: {
                authorization: token
            }
        })

        if (response.status === 200 || response.status === 201) {
            return response.data.wishlist
        }

    } catch (error) {
        console.log("error", error)
    }
}

export const addToWishlistService = async (product, token) => {

    return await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: token } }
    );
};


export const removeFromWishlistService = async (productId, token) => {
    return await axios.delete(`/api/user/wishlist/${productId}`, {
        headers: { authorization: token },
    });
};
