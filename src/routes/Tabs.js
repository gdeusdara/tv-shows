import React from 'react';
import SearchIcon from '@components/SearchIcon';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { useTheme } from 'styled-components';
import { Favorites, List, Search } from '@pages/index';

const Tab = createMaterialTopTabNavigator();

function Tabs() {
  const theme = useTheme();

  const listOptions = {
    tabBarLabel: 'TV Shows',
  };

  const tabBarIcon = ({ color }) => <SearchIcon color={color} />;

  const SearchOptions = {
    tabBarLabel: 'Search',
    tabBarShowLabel: false,
    tabBarIcon,
  };

  const screenOptions = {
    tabBarActiveTintColor: theme.colors.text,
    tabBarInactiveTintColor: theme.colors.inactive,
    tabBarStyle: { backgroundColor: theme.colors.background },
    tabBarIndicatorStyle: { backgroundColor: theme.colors.text },
    tabBarItemStyle: { width: 'auto' },
  };

  return (
    <Tab.Navigator screenOptions={screenOptions} initialRouteName="List">
      <Tab.Screen name="Search" options={SearchOptions} component={Search} />
      <Tab.Screen name="List" options={listOptions} component={List} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
}

export default Tabs;
