import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const FloatingButton: React.FC = () => {
  return (
    <TouchableOpacity
      style={{
        position: "absolute",
        bottom: 30,
        right: 20,
        backgroundColor: "#0A84FF",
        borderRadius: 30,
        padding: 16,
        elevation: 5,
      }}
    >
      <Ionicons name="add" size={24} color="#fff" />
    </TouchableOpacity>
  );
};

export default FloatingButton;
