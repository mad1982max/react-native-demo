import React, {useState} from 'react';
import {View, Text, StyleSheet, TextInput, Button, Alert} from 'react-native'

export const AddTodo = ({onSubmit}) => {
    const [value, setValue] = useState("");

    const pressHandler = () => {
        if(value.trim()) {
            onSubmit(value);
            setValue('');
        } else {
            Alert.alert('should be not empty')
        }
    }

    return (
        <View style = {styles.addtodo}>
            <TextInput 
                autoCapitalize = 'none'
                autoCorrect = {false}
                style = {styles.input} 
                onChangeText = {text => setValue(text)}
                value={value}
                placeholder="write some text..."/>
            <Button style = {styles.btn} title="ADD" onPress={pressHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
    addtodo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10
    },
    input: {
        width: '70%',
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab'

    },
    btn: {
    }
})