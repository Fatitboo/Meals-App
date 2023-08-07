import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import MealDetail from "../MealDetail";

function MealItem({id,title, imageUrl, duration, affordability,complexity}){
    const navigation = useNavigation();
    function selectMealItemHandler(){
        navigation.navigate('MealDetail',{mealId:id})
    }
    return (
        <View style={styles.mealItem}>
            <Pressable android_ripple={{color:'#ccc'}}
                        style={({pressed})=> [styles.button, pressed?styles.buttonPressed : null,]}
                        onPress={selectMealItemHandler}>
                <View style={styles.innerContainer}>
                    <Image source={{uri: imageUrl}} style={styles.image} />
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetail complexity={complexity} duration={duration} affordability={affordability}/>
            </Pressable>
        </View>
    );
}
export default MealItem;
const styles=StyleSheet.create({
    mealItem:{
        margin:16,
        borderRadius:8,
        overflow:Platform.OS==='android'?'hidden':'visible',
        backgroundColor:'white',
        elevation:4,
        shadowColor:'black',
        shadowOffset:{width:0, height:2},
        shadowOpacity:0.25,
        shadowRadius:8,
    },
    innerContainer:{
        borderRadius:8,
        overflow:'hidden'
    },
    button: {
        flex: 1
    },
    buttonPressed:{
        opacity:0.5 
    },
    image:{
        width:'100%',
        height:200,
    },
    title:{
        fontWeight:'bold',
        fontSize:18,
        textAlign:'center',
        margin:8
    },
    
});