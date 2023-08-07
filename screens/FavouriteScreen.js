import { StyleSheet, Text, View } from "react-native";
import MealsList from "../components/MealsList/MealsList";
import { useContext } from "react";
import { FavouritesContext } from "../store/context/favourite-context";
import { MEALS } from "../data/dummy-data";
import {useSelector} from 'react-redux'
function FavouriteScreen(){
    // const favoriteCtx =  useContext(FavouritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);

    const favouriteMeals = MEALS.filter((meal)=> favoriteMealIds.includes(meal.id));
    if(favouriteMeals.length === 0){
        return (
            <View style={styles.rootContainer}>
                <Text style={styles.text}>You don't have any favourite meal.</Text>
            </View>
        );
    }
    return <MealsList dataList={favouriteMeals}/>;
}
export default FavouriteScreen;
const styles = StyleSheet.create({
    rootContainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    text:{
        fontSize:18,
        fontWeight:'bold',
        color:'white'
    }
})