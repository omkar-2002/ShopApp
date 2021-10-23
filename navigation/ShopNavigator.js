import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ProductOverviewScreen from "../screens/shop/ProductOverviewScreen";
import ProductOverviewScreenOptions from '../screens/shop/ProductOverviewScreen'

const ShopNavigator = () =>{
    const Stack = createNativeStackNavigator();


    return <Stack.Navigator>
        <Stack.Screen name = "ProductOverviewScreen" component = {ProductOverviewScreen} options = {ProductOverviewScreenOptions}/>
    </Stack.Navigator>
}