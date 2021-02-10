import React, {useState, useEffect} from 'react';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Text, 
    Icon
} from 'native-base';
import {
    Image, 
    View, 
    StyleSheet,
    Button
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import MapView , { Marker }from 'react-native-maps';

const MainScreen: () => React$Node = () => {
    const [countries, setCountries] = useState([]);
    const [countriesData, setCountriesData] = useState([{lat:0}]);
    const [selectedCountry, setSelectedCountry] = useState("Afghanistan");
    const [selectedCountryNumber, setSelectedCountryNumber] = useState(0);
    useEffect(() => {
        fetch('https://covid-api.mmediagroup.fr/v1/cases')
        .then(response => response.json())
        .then(responseJson => {
            var country = [];
            var countryData = [];
            for (var i in responseJson){
                country.push(i)
                countryData.push(responseJson[i].All)
            }
            setCountries(country);
            setCountriesData(countryData);
        })
    }, []);

    var picker = [];
    for (var i = 0; i < countries.length; i ++) {
        picker.push( <Picker.Item label={countries[i]} value={countries[i]}/> )
    }
    return (
        <View>
            <Picker selectedValue={selectedCountry} onValueChange={(itemValue, itemIndex) => {
                setSelectedCountry(itemValue)
                setSelectedCountryNumber(itemIndex)
                }}>
                 {picker}
            </Picker>

            <Card>
                <CardItem cardHeader style={styles.cardheader}>
                    <Text style={{fontSize: 20, fontWeight: 'bold'}}>{selectedCountry}</Text>
                </CardItem>
                <CardItem cardBody>
                    <MapView style={{width: '40%', height: 200}} 
                    region={{
                        latitude: (countriesData[selectedCountryNumber].lat),
                        longitude: (countriesData[selectedCountryNumber].long),
                        latitudeDelta: 20,
                        longitudeDelta: 20
                    }}>
                        <Marker coordinate={{
                            latitude: (countriesData[selectedCountryNumber].lat),
                            longitude: (countriesData[selectedCountryNumber].long)
                        }}
                        title={selectedCountry}/>
                    </MapView>
                    
                    <View>
                        <View style={styles.textViews}>
                            <Text style={{fontWeight: 'bold'}}>Overall Population:</Text><Text>{countriesData[selectedCountryNumber].population}</Text>
                        </View>
                        <View style={styles.textViews}>
                            <Text style={{fontWeight: 'bold'}}>Confirmed Cases: </Text><Text>{countriesData[selectedCountryNumber].confirmed}</Text>
                        </View>
                        <View style={styles.textViews}>
                            <Text style={{fontWeight: 'bold'}}>Recovered Patients: </Text><Text>{countriesData[selectedCountryNumber].recovered}</Text>
                        </View>
                        <View style={styles.textViews}>
                            <Text style={{fontWeight: 'bold'}}>Deaths: </Text><Text>{countriesData[selectedCountryNumber].deaths}</Text>
                        </View>
                    </View>
                </CardItem>
            </Card>
        </View>
    );
  };
  
const styles = StyleSheet.create({
    cardheader: {
        alignItems: 'center',
        justifyContent: 'center',
        borderBottomWidth: 1,
        borderBottomColor: 'red'
    }, textViews: {
        padding: 15,
        alignItems: 'flex-start',
        flexDirection: 'row'
    }
})

  export default MainScreen; 