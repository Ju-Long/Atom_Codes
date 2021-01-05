import React from 'react';
import {StyleSheet, View, Text, SectionList} from 'react-native';

const datasource = [
  {
    data: [
      {
        key: 'a'
      }, {
        key: 'e'
      }, {
        key: 'i'
      }, {
        key: 'o'
      }, {
        key: 'u'
      }
    ],
    title: 'Vowels'
  }, {
    data: [
      {
        key: 'b'
      }, {
        key: 'c'
      }, {
        key: 'd'
      }, {
        key: 'f'
      }, {
        key: 'g'
      }, {
        key: 'h'
      }, {
        key: 'j'
      }, {
        key: 'k'
      }, {
        key: 'l'
      }, {
        key: 'm'
      }, {
        key: 'n'
      }, {
        key: 'p'
      }
    ],
    title: 'Consonants'
  }
];

const Challenge: () => React$Node = () => {
  return (<View>
    <SectionList sections={datasource}
      renderItem={renderItem}
      renderSectionHeader={renderHeader}/>
  </View>);
};

const renderItem = ({item}) => {
  return <Text>{item.key}</Text>
};

const renderHeader = ({section: {title}}) => {
  return <Text style={{fontSize: 20, fontWeight: 'bold', alignSelf: 'center'}}>{title}</Text>
}
const styles = StyleSheet.create({});

export default Challenge;
