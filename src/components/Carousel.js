import React, {useState} from "react";
import LinearGradient from "react-native-linear-gradient";
import {
  Text,
  View,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Dimensions,
} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

const {width, height} = Dimensions.get("window");

export default function Carousel({data}) {
  function shadeColor(color, percent) {
    var R = parseInt(color.substring(1, 3), 16);
    var G = parseInt(color.substring(3, 5), 16);
    var B = parseInt(color.substring(5, 7), 16);

    R = parseInt((R * (100 + percent)) / 100);
    G = parseInt((G * (100 + percent)) / 100);
    B = parseInt((B * (100 + percent)) / 100);

    R = R < 255 ? R : 255;
    G = G < 255 ? G : 255;
    B = B < 255 ? B : 255;

    var RR = R.toString(16).length == 1 ? "0" + R.toString(16) : R.toString(16);
    var GG = G.toString(16).length == 1 ? "0" + G.toString(16) : G.toString(16);
    var BB = B.toString(16).length == 1 ? "0" + B.toString(16) : B.toString(16);

    return "#" + RR + GG + BB;
  }

  const generateColor = () => {
    let cor = "#" + Math.random().toString(16).substr(-6);
    return cor;
  };

  const renderItem = ({item}) => {
    const cor = generateColor();

    return (
      <View style={styles.item}>
        <TouchableOpacity>
          <LinearGradient
            colors={[
              shadeColor(cor, 80),
              shadeColor(cor, 60),
              shadeColor(cor, 20),
            ]}
            style={styles.linearGradient}>
            <Text style={styles.buttonText}>{item.name}</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        keyExtractor={(item, index) => item.key}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    marginTop: 20,
  },
  linearGradient: {
    height: height / 2.3,
    width: width / 1.9,
    marginHorizontal: 15,
    marginVertical: 10,
    justifyContent: "center",
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ddd",
    borderBottomWidth: 0,
    shadowColor: "#000",
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 6,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#000",
    backgroundColor: "transparent",
  },
  item: {},
});
