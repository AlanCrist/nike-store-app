import React, {useState} from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import LinearGradient from "react-native-linear-gradient";

import MaxImage1 from "../../assets/max-blackwhite.png";

import {getColorRandomList} from "../../utils";

import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import {FlatList} from "react-native-gesture-handler";

const colors = getColorRandomList(0, 1);

export default function Detail() {
  const [favorited, setFavorited] = useState(false);
  const [sizeSelected, setSizeSelected] = useState(0);
  const [colorSelected, setColorSelected] = useState(0);

  const sizes = [
    {id: 0, number: "7"},
    {id: 1, number: "8"},
    {id: 2, number: "9"},
    {id: 3, number: "10"},
    {id: 4, number: "11"},
    {id: 5, number: "11.5"},
  ];

  const colorsShoes = [
    {id: 0, color: "#000"},
    {id: 1, color: "#919191"},
    {id: 2, color: "#dbd9b4"},
    {id: 3, color: "#8c7474"},
  ];

  return (
    <View style={styles.container}>
      <View
        style={{
          width: "80%",
          flex: 1,
          alignSelf: "flex-end",
        }}>
        <LinearGradient colors={colors} style={styles.linearGradient}>
          <View style={{marginTop: 80, marginLeft: 50}}>
            <Text
              style={{
                fontSize: 35,
                fontWeight: "bold",
                color: "#fff",
              }}>
              01
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-start",
              right: "20%",
              top: "20%",
            }}>
            <Image
              source={MaxImage1}
              style={{resizeMode: "cover", width: 300, height: 200}}
            />
          </View>
        </LinearGradient>
      </View>
      <View style={{flex: 1, marginHorizontal: 20}}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 15,
          }}>
          <Text style={{fontSize: 40, fontWeight: "bold"}}>Nike Air Vapor</Text>
          <TouchableWithoutFeedback onPress={() => setFavorited(!favorited)}>
            <Icon
              name={favorited ? "heart" : "heart-outline"}
              size={30}
              color={favorited ? "red" : "black"}
              style={[
                {
                  alignSelf: "center",
                },
                favorited
                  ? {
                      textShadowColor: "rgba(0, 0, 0, 1)",
                      textShadowOffset: {width: 1, height: 1},
                      textShadowRadius: 10,
                    }
                  : {},
              ]}
            />
          </TouchableWithoutFeedback>
        </View>
        <Text style={{fontSize: 16, color: "#757575", fontWeight: "bold"}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Text>
        <Text
          style={{
            fontSize: 22,
            color: "#616060",
            fontWeight: "bold",
            marginTop: 10,
          }}>
          Size
        </Text>
        <View style={{marginTop: 10}}>
          <FlatList
            data={sizes}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item, index, separators}) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setSizeSelected(index)}>
                  <View
                    style={[
                      styles.containerSize,
                      index === sizeSelected
                        ? {backgroundColor: colors[0], borderRadius: 10}
                        : {borderRadius: 10},
                    ]}>
                    <Text
                      style={[
                        styles.textSize,
                        index === sizeSelected ? {color: "#FFF"} : {},
                      ]}>
                      {item.number}
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
        <Text
          style={{
            fontSize: 22,
            color: "#616060",
            fontWeight: "bold",
            marginTop: 10,
          }}>
          Select Color
        </Text>
        <View>
          <FlatList
            data={colorsShoes}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            keyExtractor={(item) => String(item.id)}
            renderItem={({item, index, separators}) => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => setColorSelected(index)}>
                  <View
                    style={[
                      {
                        backgroundColor: item.color,
                        marginHorizontal: 25,
                        marginVertical: 10,
                        justifyContent: "center",
                        alignItems: "center",
                      },
                      index === colorSelected
                        ? {width: 34, height: 34, borderRadius: 17, bottom: 2}
                        : {
                            width: 30,
                            height: 30,
                            borderRadius: 15,
                            borderWidth: 1,
                            borderColor: "#ddd",
                            borderBottomWidth: 0,
                            shadowColor: "#000",
                            shadowOffset: {width: 0, height: 2},
                            shadowOpacity: 0.8,
                            shadowRadius: 2,
                            elevation: 6,
                          },
                    ]}>
                    {index === colorSelected && (
                      <View
                        style={{
                          width: 32,
                          height: 32,
                          borderRadius: 16,
                          borderWidth: 3,
                          borderColor: "#FFF",
                        }}
                      />
                    )}
                  </View>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 0.2,
          flexDirection: "row",
          justifyContent: "space-between",
        }}>
        <Text style={{fontSize: 50, fontWeight: "bold", left: 20}}>$399</Text>
        <View style={{width: "50%", height: "100%"}}>
          <TouchableOpacity>
            <LinearGradient
              colors={colors}
              style={{
                width: "100%",
                height: "100%",
                justifyContent: "center",
                borderTopLeftRadius: 40,
                alignItems: "center",
              }}>
              <Text style={{color: "#FFF"}}>ADD TO CART</Text>
            </LinearGradient>
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
  linearGradient: {
    width: 320,
    height: 330,
    borderRadius: 320 / 2,
    left: 50,
    bottom: 50,
  },
  containerSize: {
    marginHorizontal: 25,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  textSizeSelected: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
