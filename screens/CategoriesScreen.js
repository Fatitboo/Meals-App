import { FlatList } from "react-native";
import CategoryGridTitle from "../components/CategoryGridTitle";
import {CATEGORIES} from '../data/dummy-data'
function CategoriesScreen({navigation}){
    function renderItemHandler(itemData){
        function pressHandler(){
            navigation.navigate('MealsOverview', {categoryId: itemData.item.id})
        }
        return <CategoryGridTitle   title={itemData.item.title} 
                                    color={itemData.item.color}
                                    onPress={pressHandler}/>
    }
    return <FlatList    data={CATEGORIES} 
                        keyExtractor={(item)=> item.id}
                        renderItem={renderItemHandler}
                        numColumns={'2'}/>
}
export default CategoriesScreen;