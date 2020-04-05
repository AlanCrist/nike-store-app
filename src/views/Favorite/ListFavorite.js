import React from "react";
import {View, StyleSheet, TouchableWithoutFeedback, Text} from "react-native";

import MaxImage1 from "../../assets/max-blackwhite.png";
import MaxImage2 from "../../assets/max-bluepink.png";
import MaxImage3 from "../../assets/max-orange.png";
import MaxImage4 from "../../assets/max-purple.png";
import MaxImage5 from "../../assets/max-red.png";
import MaxImage6 from "../../assets/max-rose.png";
import MaxImage7 from "../../assets/rib63.png";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";

import CardGradientList from "../../components/CardsGradientList";

export default function Favorite({navigation}) {
  const products = [
    {
      name: "Nike Air Max St1",
      key: "0",
      price: 345,
      image: MaxImage1,
      favorited: true,
    },
    {
      name: "Nike Air Max St2",
      key: "1",
      price: 565,
      image: MaxImage2,
      favorited: true,
    },
    {
      name: "Nike Air Max St3",
      key: "2",
      price: 860,
      image: MaxImage3,
      favorited: true,
    },
    {
      name: "Nike Air Max St4",
      key: "3",
      price: 370,
      image: MaxImage4,
      favorited: true,
    },
    {
      name: "Nike Air Max St5",
      key: "4",
      price: 299,
      image: MaxImage5,
      favorited: true,
    },
    {
      name: "Nike Air Max St6",
      key: "5",
      price: 907,
      image: MaxImage6,
      favorited: true,
    },
    {
      name: "Nike Air Max St7",
      key: "6",
      price: 1000,
      image: MaxImage7,
      favorited: true,
    },
  ];

  return (
    <View style={styles.container}>
      <View style={{alignItems: "center", top: 10, height: 0}}>
        <Text style={{fontSize: 30}}>Favorite</Text>
      </View>
      <View style={{marginTop: 25, flex: 1}}>
        <CardGradientList
          onPressDetail={() => navigation.navigate("Detail")}
          data={products}
          outherName="Men's Shoes"
          fractionScreenDimension={3}
          ItemOnRight={() => (
            <TouchableWithoutFeedback onPress={() => {}}>
              <Icon name="heart-outline" size={22} color="white" />
            </TouchableWithoutFeedback>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
  },
});
