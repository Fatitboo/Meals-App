import { StyleSheet, View, Text } from "react-native";

function MealDetail({duration, complexity, affordability, style, textStyle}) {
    return (
        <View style={[styles.detailContainer, style]}>
            <Text style={[styles.detailItem, textStyle]}>{duration}m</Text>
            <Text style={[styles.detailItem, textStyle]}>{complexity.toUpperCase()}</Text>
            <Text style={[styles.detailItem, textStyle]}>{affordability.toUpperCase()}</Text>
        </View>
    );
}
export default MealDetail;
const styles = StyleSheet.create({
    detailContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    detailItem: {
        marginHorizontal: 4,
    }
})