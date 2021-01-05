import React from 'react';
import {StyleSheet, View, FlatList, Image, Text, SectionList} from 'react-native';

const datasource = [
  {
    data: [
      {
        name: 'iPhone XR',
        brand: 'Apple',
        image: require('./img/iphonexr.jpg')
      }, {
        name: 'Redmi Note 7 and 7 Pro',
        brand: 'Xiaomi',
        image: require('./img/redminote7.jpg')
      }, {
        name: 'P30 and P30 Pro',
        brand: 'Huawei',
        image: require('./img/p30.jpg')
      }
    ], title: "More Than 20 Million Sold"
  }, {
    data: [
      {
        name: 'iPhone 7 Plus',
        brand: 'Apple',
        image: require('./img/iphone7plus.jpg')
      }, {
        name: 'Mate 20 and Mate 20 Pro',
        brand: 'Huawei',
        image: require('./img/mate20.png')
      }, {
        name: 'Galaxy A10',
        brand: 'Samsung',
        image: require('./img/a10.jpg')
      }, {
        name: 'Galaxy A50',
        brand: 'Samsung',
        image: require('./img/a50.jpg')
      }, {
        name: 'iPhone 8',
        brand: 'Apple',
        image: require('./img/iphone8.jpg')
      }, {
        name: 'Redmi 6A',
        brand: 'Xiaomi',
        image: require('./img/redmi6a.jpg')
      }
    ], title: "More than 10 Million Sold"
  }, {
    data: [
      {
        name: 'A5',
        brand: 'Oppo',
        image: require('./img/a5.png')
      }, {
        name: 'iPhone Xs Max',
        brand: 'Apple',
        image: require('./img/iphonexsmax.jpg')
      }, {
        name: 'Galaxy A30',
        brand: 'Samsung',
        image: require('./img/a30.jpg')
      }, {
        name: 'Galaxy S10+',
        brand: 'Samsung',
        image: require('./img/s10plus.jpg')
      }, {
        name: 'Galaxy S10',
        brand: 'Samsung',
        image: require('./img/s10.jpg')
      }, {
        name: 'Galaxy S10e',
        brand: 'Samsung',
        image: require('./img/s10e.jpg')
      }, {
        name: 'Galaxy S10 5G',
        brand: 'Samsung',
        image: require('./img/s105g.jpg')
      }
    ], title: "Less than 10 Million Sold"
  }
];

const PhonesyApp: () => React$Node = () => {
  return (<View>
    <View style={styles.header}>
      <Text style={styles.headerMsg}>List of Best Selling Mobile Phones</Text>
    </View>
    <SectionList sections={datasource}
      renderItem={renderItem}
      renderSectionHeader={renderHeader}/>
  </View>);
};

const styles = StyleSheet.create({
  section: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'black'
  },
  image: {
    width: 100,
    maxHeight: 100,
    resizeMode: 'contain',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start'
  },
  descriptions: {
    width: '60%',
    alignSelf: 'center'
  },
  model: {
    textAlign: 'right',
    fontWeight: 'bold'
  },
  brand: {
    textAlign: 'right'
  },
  header: {
    backgroundColor: '#023e8a',
    padding: 15
  },
  headerMsg: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15
  }
});

const renderItem = ({item}) => {
  return <View style={styles.section}>
    <Image style={styles.image} source={item.image}/>
    <View style={styles.descriptions}>
      <Text style={styles.brand}>{item.brand}</Text>
      <Text style={styles.model}>{item.name}</Text>
    </View>
  </View>
};

const renderHeader = ({section: {title}}) => {
  return <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>{title}</Text>
}

export default PhonesyApp;
