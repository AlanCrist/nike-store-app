import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const App = () => {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>Nike</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    alignSelf: 'center',
  },
});

export default App;
