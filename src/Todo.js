import React from 'react';
import {View, Text, StyleSheet, TextInput, TouchableOpacity} from 'react-native'

export const Todo = ({todo, ondel}) => {
    return (
        <TouchableOpacity 
            onLongPress = {() => {ondel(todo.id); console.log('long pressed', todo.id)}}
            onPress = {() => {console.log('pressed', todo.id)}}>
            <View style = {styles.todo}>
                <Text>
                    {todo.title}
                </Text>
            </View>
        </TouchableOpacity>        
    )
}


const styles = StyleSheet.create({
    todo: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 15,
        borderWidth: 1,
        borderColor: '#eee',
        borderRadius: 5,
        marginBottom: 10

    },
    input: {
    },
    btn: {
    }
})