import {View, FlatList, StyleSheet} from 'react-native';
import MealItem from './MealItem';
function MealsList({dataList}){
    function renderMealItem(dataItem){
        const mealItem = dataItem.item;
        const mealItemProps = {
            id:mealItem.id,
            title: mealItem.title,
            imageUrl: mealItem.imageUrl,
            duration: mealItem.duration,
            affordability: mealItem.affordability,
            complexity:mealItem.complexity
        }
        
        return <MealItem {...mealItemProps} />
    }
    return (
        <View style={styles.container}>
            <FlatList data={dataList} 
                      keyExtractor={(item)=>item.id}
                      renderItem={renderMealItem}/>
        </View>
    );
}
export default MealsList;
const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:16
    }
});