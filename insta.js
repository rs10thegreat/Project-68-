import React from 'react';
import {View} from  'react-native';

export default class Insta extends React.Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text style = {styles.text}>Instagram</Text>
            </View>
        );
    }
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text:{
        backgroundColor:'Pink',
        fontSize:50
    }
});