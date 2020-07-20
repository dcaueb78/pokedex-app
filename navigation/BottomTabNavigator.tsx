import { Ionicons, MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import { ItemsScreen, PokemonScreen, MovesScreen } from '../screens/index';
import { BottomTabParamList, PokemonTabParamList, MovesTabParamList, ItemsTabParamList } from '../types';
import { PokemonIcon } from '../components/Icons/PokemonIcon';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Pokémon"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Moves"
        component={MovesNavigator}
        options={{
          tabBarIcon: ({ color }) => <Entypo name="grid" size={24} color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Pokémon"
        component={PokemonNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="pokeball" color={color} size={60} style={{position: "absolute", top: "-75%", backgroundColor: '#ffffff'}} />,
        }}
      />
      <BottomTab.Screen
        name="Items"
        component={ItemsNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialCommunityIcons name="bag-personal" color={color} size={24} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: string; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const PokemonTabStack = createStackNavigator<PokemonTabParamList>();

function PokemonNavigator() {
  return (
    <PokemonTabStack.Navigator>
      <PokemonTabStack.Screen
        name="PokemonScreen"
        component={PokemonScreen}
        options={{ headerTitle: 'Pokémon' }}
      />
    </PokemonTabStack.Navigator>
  );
}

const MovesTabStack = createStackNavigator<MovesTabParamList>();

function MovesNavigator() {
  return (
    <MovesTabStack.Navigator>
      <MovesTabStack.Screen
        name="MovesScreen"
        component={MovesScreen}
        options={{ headerTitle: 'Moves' }}
      />
    </MovesTabStack.Navigator>
  );
}

const ItemsTabStack = createStackNavigator<ItemsTabParamList>();

function ItemsNavigator() {
  return (
    <ItemsTabStack.Navigator>
      <ItemsTabStack.Screen
        name="ItemsScreen"
        component={ItemsScreen}
        options={{ headerTitle: 'Moves' }}
      />
    </ItemsTabStack.Navigator>
  );
}