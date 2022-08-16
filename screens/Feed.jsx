import React from "react";
import { View, Text } from "react-native";

import "../dadosTemporarios.json";

export default class Feed extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Text>Feed</Text>
      </View>
    );
  }
}
