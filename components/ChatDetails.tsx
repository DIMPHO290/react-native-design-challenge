import React from "react";
import { View, Text, Image, TouchableOpacity, ImageSourcePropType } from "react-native";

interface ChatItemProps {
  name: string;
  message: string;
  image: ImageSourcePropType;
}

const ChatItem: React.FC<ChatItemProps> = ({ name, message, image }) => {
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", padding: 12 }}>
      <Image source={image} style={{ width: 50, height: 50, borderRadius: 25, marginRight: 12 }} />
      <View>
        <Text style={{ fontWeight: "600" }}>{name}</Text>
        <Text style={{ color: "gray" }}>{message}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ChatItem;
