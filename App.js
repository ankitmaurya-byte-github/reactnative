import { StatusBar } from "react-native";

import { SafeAreaView, Button, StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import List from "./src/List";
import Home from "./src/Home";
import { ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";
import { Alert } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: "blue",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <Feather size={24} color={focused ? "blue" : "grey"} />;
            },
          }}
          name="List"
          component={List}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ focused }) => {
              return <AntDesign size={44} color={focused ? "blue" : "grey"} />;
            },
          }}
          name="Home"
          component={Home}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    borderWidth: 4,
    borderColor: "blue",
    backgroundColor: "pink",
    justifyContent: "center",
    padding: 10,
  },
});
