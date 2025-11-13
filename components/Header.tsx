import React from "react";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Header: React.FC = () => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between", padding: 16 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>HALODEK</Text>
      <View style={{ flexDirection: "row", gap: 12 }}>
        <Ionicons name="search-outline" size={22} />
        <Ionicons name="ellipsis-vertical" size={22} />
      </View>
    </View>
  );
};

export default Header;
