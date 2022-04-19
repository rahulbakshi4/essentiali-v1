import axios from "axios"
export const getCartService = async (token) => {

    try {
        const response = await axios.get('/api/user/cart', {
            headers: {
                authorization: token
            }
        })

        if (response.status === 200 || response.status === 201) {
            return response.data.cart
        }

    } catch (error) {
        console.log("error", error)
    }
}

export const addToCartService = async (product, token) => {

    return await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: token } }
    );
};


export const removeFromCartService = async (productId, token) => {
    return await axios.delete(`/api/user/cart/${productId}`, {
        headers: { authorization: token },
    });
};

export const cartQuantityService = async (productId, token, type) => {
    return await axios.post(
        `/api/user/cart/${productId}`,
        { action: { type } },
        { headers: { authorization: token } }
    );
};
