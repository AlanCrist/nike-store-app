import * as React from "react";
import {Text, View} from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import HomeScreen from "../views/Home/Home";

function IconWithBadge({name, badgeCount, color, size}) {
  return (
    <View style={{width: 24, height: 24, margin: 5}}>
      <Icon
        name={name}
        size={size}
        color={color}
        style={{
          textShadowColor: "rgba(0, 0, 0, 0.3)",
          textShadowOffset: {width: 0, height: 1},
          textShadowRadius: 10,
        }}
      />
      {badgeCount > 0 && (
        <View
          style={{
            // On React Native < 0.57 overflow outside of parent will not work on Android, see https://git.io/fhLJ8
            position: "absolute",
            right: -6,
            top: -3,
            backgroundColor: "red",
            borderRadius: 6,
            width: 12,
            height: 12,
            justifyContent: "center",
            alignItems: "center",
          }}>
          <Text style={{color: "white", fontSize: 10, fontWeight: "bold"}}>
            {badgeCount}
          </Text>
        </View>
      )}
    </View>
  );
}

function HomeIconWithBadge(props) {
  return <IconWithBadge {...props} badgeCount={null} />;
}

const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          if (route.name === "Home") {
            return (
              <HomeIconWithBadge
                name={focused ? "heart" : "heart-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Settings") {
            return (
              <Icon
                name={focused ? "home-variant" : "home-variant-outline"}
                size={size}
                color={color}
              />
            );
          } else if (route.name === "Stea") {
            return (
              <Icon
                name={focused ? "account" : "account-outline"}
                size={size}
                color={color}
              />
            );
          }
        },
      })}
      tabBarOptions={{
        activeTintColor: "black",
        inactiveTintColor: "gray",
      }}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Settings" component={HomeScreen} />
      <Tab.Screen name="Stea" component={HomeScreen} />
    </Tab.Navigator>
  );
}
