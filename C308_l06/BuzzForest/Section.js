import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';

const SECTION_DATA = [
{
title: 'ANIMALS',
description: 'See the animal exhibits, discover the secrets about the animals we love and how they are cared for daily. Seize the opportunity to interact with some of the animal.'
},
{
title: 'ACTIVITIES',
description: 'You, not only get to see animals, but all visitors can satisfy their curiosity, feed the animals and get up-close with the animals and have fun.'
},
{
title: 'FIND US',
description: 'Making your way to BuzzForest is easy. No matter where you are, there are many quick and convenient ways to find us.'
}
];

const stylesSect = StyleSheet.create({
  boxTitle: {
    color: '#bf4216',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 20
  },
  boxContent: {
    color: 'white',
    backgroundColor: '#557622',
    textAlign: 'center',
    fontSize: 15
  },
  box: {
    marginTop: 15
  }
});

class Section extends React.Component {
  render() {
    return (
      SECTION_DATA.map((data) =>
      <View style={[stylesSect.box]}>
        <Button color='#bf4216' style={[stylesSect.boxTitle]} title={data.title}
        onPress={() => {alert(data.title + " button pressed!");}}/>
        <Text style={[stylesSect.boxContent]}>{data.description}</Text>
      </View>
    )
    )
  }
}

export { Section };
