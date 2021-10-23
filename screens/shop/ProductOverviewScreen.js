import React from "react";
import { FlatList,StyleSheet,Text } from "react-native";
import { useSelector } from "react-redux";
const ProductOverviewScreen = () =>{
    const products = useSelector(state =>state.products.allProducts);
    return <FlatList data = {products} keyExtractor = {(item)=> item.id} renderItem = {item => <Text>{item.title}</Text>} />
}



const styles = StyleSheet.create({

});

export default ProductOverviewScreenOptions = (navdata) =>{
return{
    headerTitle: "Products",
}
} 
export default ProductOverviewScreen