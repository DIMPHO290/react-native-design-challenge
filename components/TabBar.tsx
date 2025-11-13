import React from "react";
import { View, TouchableOpacity, Text } from "react-native";

const TabBar: React.FC = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-around", marginVertical: 10 }}>
      <TouchableOpacity><Text style={{ fontWeight: "bold", color: "#0A84FF" }}>Chat</Text></TouchableOpacity>
      <TouchableOpacity><Text>Status</Text></TouchableOpacity>
      <TouchableOpacity><Text>Calls</Text></TouchableOpacity>
    </View>
  );
};

export default TabBar;
