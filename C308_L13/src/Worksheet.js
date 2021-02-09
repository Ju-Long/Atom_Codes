import React from 'react';
import {
    Container,
    Header,
    Content,
    Card,
    CardItem,
    Body,
    Text
} from 'native-base';
import {
    Image
} from 'react-native';

const Worksheet: () => React$Node = () => {
    return (
        <Container>
            <Header/>
            <Content>
                <Card>
                    <CardItem header>
                        <Text>View Cart</Text>
                    </CardItem>
                    <CardItem cardBody> 
                        <Body>
                            <Image source={require('./image/CartTitan.jpg')} style={{width: '60%', height: 200}}/>
                            <Text>Total Item: 7</Text>
                            <Text>Total Amount: $4100</Text>
                        </Body>
                    </CardItem>
                    <CardItem footer> 
                        <Text>Make Payment</Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
    );
};

export default Worksheet;
