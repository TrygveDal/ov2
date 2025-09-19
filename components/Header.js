import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const Header = (props) => {
  const header_items = props.items;
  return (
    <View style={styles.header}>
      <Image 
        style={{
          height: 50,
          width: 100,
        }}
        source={props.logo}
      />
      {header_items.map((item, i) => {
        return <Text style={styles.text}>{item}</Text>
      })}
      <Image 
        style={{
          height: 30,
          width: 30,
        }}
        source={require('../images/burgermeny.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    height: 100,
    width: '100%',
    backgroundColor: '#ffffff98',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
  }
});

export default Header;