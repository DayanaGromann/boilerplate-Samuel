import React from "react";
import { TouchableOpacity, View, Text } from "react-native";

export default class Login extends React.Component {
  render() {
    return (
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <TouchableOpacity>
          <Text>Fazer login com Google</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
