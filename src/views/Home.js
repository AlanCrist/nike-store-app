import React from "react";
import {Text, View, StyleSheet, SafeAreaView} from "react-native";

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={{flex: 1, alignItems: "center", justifyContent: "center"}}>
          <Text style={StyleSheet.text}>Home</Text>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
  text: {
    color: "#161924",
    fontSize: 20,
    fontWeight: "500",
  },
});
