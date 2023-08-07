import { StyleSheet, Text, View , FlatList} from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealsList/MealItem";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";


function MealsOverviewScreen({route , navigation}){
    const categoryId= route.params.categoryId;
    const displayedMeals = MEALS.filter((item)=>{
        return item.categoryIds.indexOf(categoryId)>=0;
    });
    
    useLayoutEffect(()=>{
        const categoryTitle = CATEGORIES.find((category)=> category.id === categoryId).title;
        navigation.setOptions({
            title:categoryTitle
        }); 
    }, [categoryId, navigation]);


    
    return (
        <MealsList dataList={displayedMeals}/>
    );
}
export default MealsOverviewScreen;
