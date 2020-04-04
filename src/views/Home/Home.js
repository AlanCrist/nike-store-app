import React, {useState} from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
  Dimensions,
} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";

import MaxImage1 from "../../assets/max-blackwhite.png";
import MaxImage2 from "../../assets/max-bluepink.png";
import MaxImage3 from "../../assets/max-orange.png";
import MaxImage4 from "../../assets/max-purple.png";
import MaxImage5 from "../../assets/max-red.png";
import MaxImage6 from "../../assets/max-rose.png";
import MaxImage7 from "../../assets/rib63.png";

import Carousel from "../../components/Carousel";

const {width, height} = Dimensions.get("window");

export default function Home() {
  const [nameSelected, setNameSelected] = useState(0);
  const mark = [
    {
      title: "Nike",
      key: "0",
      products: [
        {name: "Nike Air Max St1", key: "0", price: 345, image: MaxImage1},
        {name: "Nike Air Max St2", key: "1", price: 565, image: MaxImage2},
        {name: "Nike Air Max St3", key: "2", price: 860, image: MaxImage3},
        {name: "Nike Air Max St4", key: "3", price: 370, image: MaxImage4},
        {name: "Nike Air Max St5", key: "4", price: 299, image: MaxImage5},
        {name: "Nike Air Max St6", key: "5", price: 907, image: MaxImage6},
        {name: "Nike Air Max St7", key: "6", price: 1000, image: MaxImage7},
      ],
    },
    {
      title: "Adidas",
      key: "1",
      products: [{name: "Nike", key: "0", price: 345, image: MaxImage1}],
    },
    {
      title: "Converse",
      key: "2",
      products: [{name: "Nike", key: "0", price: 345, image: MaxImage1}],
    },
    {
      title: "Vans",
      key: "3",
      products: [{name: "Nike", key: "0", price: 345, image: MaxImage1}],
    },
  ];

  const handleChangeMark = (index) => {
    setNameSelected(index);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1}}>
        <View style={styles.containerText}>
          <Text style={styles.text}>Explore</Text>
        </View>
        <View style={styles.listMark}>
          <FlatList
            data={mark}
            horizontal={true}
            keyExtractor={(item, index) => item.key}
            renderItem={({item, index, separators}) => (
              <View style={styles.itemListMask}>
                <TouchableOpacity
                  key={item.key}
                  onPress={() => handleChangeMark(index)}>
                  <View style={{backgroundColor: "white"}}>
                    <Text
                      style={
                        nameSelected === index
                          ? styles.markTextSelected
                          : styles.markText
                      }>
                      {item.title}
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
        <View style={styles.carouselContainer}>
          <Carousel data={mark[nameSelected].products} />
        </View>
        <View>
          <TouchableOpacity>
            <LinearGradient
              colors={["#eb4034", "#e8665d", "#ffbd8a"]}
              style={styles.linearGradient}>
              <View style={{marginTop: 50, marginLeft: 20}}>
                <Text
                  style={{
                    fontSize: 25,
                    fontWeight: "bold",
                    color: "#fff",
                    marginBottom: 10,
                  }}>
                  Nike Air Psgesuss
                </Text>
                <Text style={{fontSize: 25, fontWeight: "bold", color: "#fff"}}>
                  $370
                </Text>
              </View>
              <View style={{alignItems: "flex-end", bottom: 30}}>
                <Image
                  source={MaxImage4}
                  style={{resizeMode: "cover", width: 200, height: 135}}
                />
              </View>
            </LinearGradient>
          </TouchableOpacity>
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
  containerText: {
    marginTop: 70,
    marginLeft: 20,
  },
  text: {
    color: "#161924",
    fontSize: 30,
    fontWeight: "bold",
  },
  listMark: {
    marginTop: 30,
  },
  itemListMask: {
    marginLeft: 22,
  },
  markText: {
    fontSize: 20,
    color: "#c4c4c4",
    fontWeight: "bold",
  },
  markTextSelected: {
    fontSize: 22,
    color: "#000",
    fontWeight: "bold",
  },
  carouselContainer: {},
  linearGradient: {
    height: height / 6,
    margin: 15,
    justifyContent: "space-around",
    borderRadius: 25,
  },
  buttonText: {
    fontSize: 18,
    textAlign: "center",
    margin: 10,
    color: "#ffffff",
    backgroundColor: "transparent",
  },
});
