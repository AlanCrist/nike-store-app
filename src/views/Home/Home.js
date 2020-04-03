import React, {useState} from "react";
import {Text, View, StyleSheet, SafeAreaView, FlatList} from "react-native";
import {TouchableOpacity} from "react-native-gesture-handler";

export default function Home() {
  const [nameSelected, setNameSelected] = useState(0);
  const mark = [
    {
      title: "Nike",
      key: "0",
      products: [{title: "Nike", key: "0", price: 0}],
    },
    {
      title: "Adidas",
      key: "1",
      products: [{title: "Nike", key: "0", price: 0}],
    },
    {
      title: "Converse",
      key: "2",
      products: [{title: "Nike", key: "0", price: 0}],
    },
    {
      title: "Vans",
      key: "3",
      products: [{title: "Nike", key: "0", price: 0}],
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
});
