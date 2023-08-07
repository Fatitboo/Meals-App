import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailScreen from './screens/MealDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavouriteScreen from './screens/FavouriteScreen';
import { Ionicons } from '@expo/vector-icons'
// import FavouriteContextProvider from './store/context/favourite-context';
import {Provider} from 'react-redux'
import { store } from './store/redux/store';
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();
function DrawerNavigator() {
  return <Drawer.Navigator screenOptions={{
    headerTintColor: 'white',
    headerStyle: { backgroundColor: '#24180f' },
    sceneContainerStyle: { backgroundColor: '#4e3522' },
    drawerContentStyle: { backgroundColor: '#24180f' },
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#24180f',
    drawerActiveBackgroundColor: '#a59081'
  }}>
    <Drawer.Screen name='Categories'
      component={CategoriesScreen}
      options={{
        title: 'All Categories',
        drawerIcon: ({ color, size }) => {
          return <Ionicons name='list' color={color} size={size}></Ionicons>
        }
      }} />
    <Drawer.Screen name='Favourites' component={FavouriteScreen}
      options={{
        drawerIcon: ({ color, size }) => {
          return <Ionicons name='star' color={color} size={size}></Ionicons>
        }
      }} />
  </Drawer.Navigator>
}
export default function App() {

  return (
    <>
      <StatusBar style='light' />
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{
            headerTintColor: 'white',
            headerStyle: { backgroundColor: '#24180f' },
            contentStyle: { backgroundColor: '#4e3522' },
          }}>
            <Stack.Screen name='Drawer'
              component={DrawerNavigator}
              options={{
                headerShown: false
              }} />
            <Stack.Screen name='MealsOverview' component={MealsOverviewScreen} />
            <Stack.Screen name='MealDetail' component={MealDetailScreen} options={{ title: 'About the meal' }} />
          </Stack.Navigator>

        </NavigationContainer>
        </Provider>
    </>

  );
}

const styles = StyleSheet.create({
  container: {

  },
});
