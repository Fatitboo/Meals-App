import { View, Text, Image, StyleSheet, ScrollView , Button} from "react-native";
import { useLayoutEffect } from "react";
import { MEALS } from "../data/dummy-data";
import MealDetail from "../components/MealDetail";
import SubTitle from "../components/MealDetail/SubTitle";
import List from "../components/MealDetail/List";
import IconButton from "../components/IconButton";
import { useContext } from "react";
// import { FavouritesContext } from "../store/context/favourite-context";
import {useSelector, useDispatch} from 'react-redux'
import {addFavorite, removeFavorite} from '../store/redux/favorites'


function MealDetailScreen({ route, navigation }) {
    // const favouriteMealsCtx = useContext(FavouritesContext);

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids);
    const dispatch = useDispatch();

    const mealId = route.params.mealId;
    const selectedMeal = MEALS.find((mealItem) => mealItem.id === mealId);
    
    const mealIsFavourite = favoriteMealIds.includes(mealId);

    function changeFavouriteStatusHandler(){
        if(mealIsFavourite){
            dispatch(removeFavorite({id: mealId}));
            // favouriteMealsCtx.removeFavourite(mealId);
        }
        else{     
            
            dispatch(addFavorite({id:mealId}));
            // favouriteMealsCtx.addFavourite(mealId); 
        }
    }
    useLayoutEffect(()=>{
        navigation.setOptions({
            headerRight:()=>{
                return <IconButton onPress={changeFavouriteStatusHandler} 
                                    icon={mealIsFavourite?'star':'star-outline'} 
                                    color="white"/>
            }
        });
    }, [navigation, changeFavouriteStatusHandler]);
    return (
        <ScrollView style={styles.rootContainer}>
            <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetail textStyle={styles.detailText} complexity={selectedMeal.complexity} duration={selectedMeal.duration} affordability={selectedMeal.affordability} />
            <View style={styles.listOutlineContainer}>
                <View style={styles.listContainer}>
                    <SubTitle>Ingredients</SubTitle>
                    <List data={selectedMeal.ingredients} />
                    <SubTitle>Steps</SubTitle>
                    <List data={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView>
    );
}
export default MealDetailScreen;
const styles = StyleSheet.create({
    rootContainer:{
        marginBottom:32
    },
    image: {
        width: '100%',
        height: 350,
    },
    title: {
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        fontWeight: 'bold',
        color: 'white',
    },
    detailText: {
        color: 'white'
    },
    listContainer:{
        width:'80%'
    },
    listOutlineContainer:{
        alignItems:'center'
    }

});