import { StyleSheet, Pressable, View, Text, Platform } from "react-native";
function CategoryGridTitle({ title, color, onPress }) {
    return (
        <View style={styles.gridItem} >
            <Pressable  android_ripple={{ color: '#ccc' }}
                        style={({pressed})=> [styles.button, pressed?styles.buttonPressed:null]}
                        onPress={onPress}>
                <View style={[styles.innerComtainer, {backgroundColor:color}]}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );
}
export default CategoryGridTitle;
const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 16,
        width: 150,
        height: 150,
        borderRadius: 8,
        elevation: 4,
        backgroundColor: 'white',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible',

    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity:0.5
    },
    innerComtainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        borderRadius: 8,
    },
    text: {
        fontWeight: 'bold',
        fontSize: 18
    }

});