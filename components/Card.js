import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{props.title}</Text>
      <View style={{flex: 1, justifyContent: "flex-start"}}>
          <Text style={styles.text} numberOfLines={3} >{props.displayText}</Text>
      </View>
      <View>
        <Text style={{color: 'blue'}}>Les mer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 100,
    minWidth: 150,
    borderRadius: 5,
    margin: 10,
    padding: 5,
    backgroundColor: "#d4d4d4f5",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  text: {
    fontSize: 15,
  }
});

export default Card;