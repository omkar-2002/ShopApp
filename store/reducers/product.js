import PRODUCTS from "../../dummy_data/product";

const initialstate = {
    allProducts = PRODUCTS,
    userProducts = PRODUCTS.filter(item => item.ownerId = "u1")
}

export default (state = initialstate, action)=> {
return state;
}