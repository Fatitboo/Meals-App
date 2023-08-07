import { StyleSheet, Text, View } from "react-native";

function SubTitle({children}){
    return (
        <View style={styles.subtitleContainer}>
            <Text style={styles.subtitle}>{children}</Text>
        </View>
    );
}
export default SubTitle;
const styles = StyleSheet.create({
    subtitle:{
        fontSize:18,
        fontWeight:'bold',
        textAlign:'center',
        color:'#e2b497'
    },
    subtitleContainer:{
        borderBottomColor:'#e2b497',
        borderBottomWidth:2,
        marginVertical:5,
        padding:6,
        marginHorizontal:12
    }
});