import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feed from "../screens/Feed";
import CreateTutorial from "../screens/CreateTutorial";

const Tab = createBottomTabNavigator();

export default class BottomTabNavigator extends React.Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="create tutorial" component={CreateTutorial} />
      </Tab.Navigator>
    );
  }
}
