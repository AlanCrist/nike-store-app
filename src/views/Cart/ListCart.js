import React from "react";
import {View, Text, StyleSheet, TouchableOpacity} from "react-native";

import MaxImage1 from "../../assets/max-blackwhite.png";
import MaxImage2 from "../../assets/max-bluepink.png";
import MaxImage3 from "../../assets/max-orange.png";
import MaxImage4 from "../../assets/max-purple.png";
import MaxImage5 from "../../assets/max-red.png";
import MaxImage6 from "../../assets/max-rose.png";
import MaxImage7 from "../../assets/rib63.png";

import CardGradientList from "../../components/CardsGradientList";

export default function Cart() {
  const products = [
    {name: "Nike Air Max St1", key: "0", price: 345, image: MaxImage1},
    {name: "Nike Air Max St2", key: "1", price: 565, image: MaxImage2},
    {name: "Nike Air Max St3", key: "2", price: 860, image: MaxImage3},
    {name: "Nike Air Max St4", key: "3", price: 370, image: MaxImage4},
    {name: "Nike Air Max St5", key: "4", price: 299, image: MaxImage5},
    {name: "Nike Air Max St6", key: "5", price: 907, image: MaxImage6},
    {name: "Nike Air Max St7", key: "6", price: 1000, image: MaxImage7},
  ];

  return (
    <View style={styles.container}>
      <View style={{marginTop: 25, flex: 0.68}}>
        <CardGradientList
          data={products}
          ItemOnRight={() => (
            <Text
              style={{
                color: "#FFF",
                fontSize: 15,
                textShadowColor: "rgba(0, 0, 0, 0.3)",
                textShadowOffset: {width: 0, height: 1},
                textShadowRadius: 10,
              }}>
              1x
            </Text>
          )}
        />
      </View>
      <View style={{flex: 0.32, marginHorizontal: 30}}>
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text style={{fontSize: 20, color: "#828282"}}>Shipping</Text>
          <Text style={{fontSize: 20, color: "#828282"}}>$58.20</Text>
        </View>
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text style={{fontSize: 20, color: "#828282"}}>Tax (15%)</Text>
          <Text style={{fontSize: 20, color: "#828282"}}>$160.01</Text>
        </View>
        <View
          style={{
            flex: 0.2,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Text style={{fontSize: 30, fontWeight: "bold"}}>Total</Text>
          <Text style={{fontSize: 30, fontWeight: "bold"}}>$2864.21</Text>
        </View>
        <View style={{flex: 0.4, justifyContent: "flex-end"}}>
          <TouchableOpacity onPress={() => {}}>
            <View
              style={{
                width: "100%",
                height: "80%",
                backgroundColor: "black",
                borderRadius: 26,
                justifyContent: "center",
                alignItems: "center",
              }}>
              <Text style={{color: "white", fontSize: 28, fontWeight: "bold"}}>
                Checkout
              </Text>
            </View>
          </TouchableOpacity>
        </View>
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
