import React from 'react';
import { View, StyleSheet, ScrollView, Image } from 'react-native';
import Card from './components/Card'
import Header from './components/Header'

const App = () => {
  const image = {
    logo: require('./images/logo.png'),
    tyholttårn: require('./images/tyholttårn.jpg'),
    gruppemåltid: require('./images/gruppemåltid.jpg'),
  }

  const header_items = ['Meny', 'Takeaway', 'Om oss']
  

  return (
    <ScrollView>
      <Header logo={image.logo} items={header_items} />
      <View style={styles.container}>
        <View style={styles.section}>
          <Image source={image.gruppemåltid} style={{width: 400, height: 400}} />
          <Card title='Spesialkampanje' displayText='Vi har en spesialkampanje på burgere igjennom hele september...' />
        </View>
        <View style={styles.section}>
          <Card title='Bli medlem' displayText='Registrer deg som medlem for å motta poeng og premier!' />
        </View>
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    alignContent: "center",
    flexDirection: "column",
    flexWrap: "wrap",
  },
  section: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: "#eeeeeef5",
  }
});

export default App;