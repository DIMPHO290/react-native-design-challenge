import Header from '@/components/Header'
import TabBar from '@/components/TabBar'
import React from 'react'
import ChatItem from '@/components/ChatDetails'
import {  FlatList } from "react-native"
interface ChatInfo {
  id: string;
  name: string;
  message: string;
  image: any;
}

const chatData: ChatInfo[] = [
  { id: "1", name: "Faza Dzikrulloh", message: "Typing...", image: require("../../assets/user_icon.png") },
  { id: "2", name: "Hatypo Studio", message: "Faza Can you help me to do with new project", image: require("../../assets/icon.png") },
  { id: "3", name: "Zhofran A", message: "I think we sould upgrade the social media", image: require("../../assets/profile_icon.png") },
  { id: "4", name: "Vito Arvy", message: "Okay adhit. I'II tell faza about it", image: require("../../assets/man_mature_icon .png") },
  { id: "5", name: "Rual", message: "Thanks Raul!", image: require("../../assets/avatar_blond_female.png") },
  { id: "6", name: "Farhan Bages", message: "Great work farhant , I will tell about logo", image: require("../../assets/avatar_male.png") },
  { id: "7", name: "Abduli", message: "Perfect . I will check it later", image: require("../../assets/man.png") },
  { id: "8", name: "Ibe hatypo", message: "nicely done bro", image: require("../../assets/man_old_icon.png") },
];
export default function index() {
  return (
   <>
   <Header/>
   <TabBar/>
   <FlatList
        data={chatData}
        renderItem={({ item }) => <ChatItem {...item} />}
        keyExtractor={(item) => item.id}
      />
   </>
  )
}