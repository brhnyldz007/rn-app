import React from 'react';
import {ScrollView} from 'react-native';
import { Card } from 'react-native-elements';

class Contact extends React.Component {
    
    static navigationOptions = {
        title: 'Contact Us'
    }
    render(){
        return(
        <ScrollView>
            <Card title="Contact Information">
                <Text>
                1 Nucamp Way("n")Seattle, WA 98001("/n")U.S.A.
               </Text>
               <Text>Phone: 1-206-555-1234</Text>
               <Text>Email: campsites@nucamp.co</Text>
            </Card>

        </ScrollView>
        );
    }
}
export default Contact;