import React from 'react';
import {View , Text, StyleSheet} from  'react-native';

export default class Fb extends React.Component{
    render(){
        return(
            <View style= {styles.container}>
                <Text style = {styles.text}>FaceBook</Text>
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
        backgroundColor:'Blue',
        fontSize:50
    }
});