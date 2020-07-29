import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList } from 'react-native';
import {Navbar} from './src/Navbar';
import {AddTodo} from './src/AddTodo';
import {Todo} from './src/Todo';

export default function App() {
  const [todos, setTodos] = useState([  ]);

  const removeTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.id !== id))
  }

  const addTodo = (title) => {
    const newTodo = {
      id: Date.now().toString(),
      title
    }
    //setTodos(todos.concat([newTodo]))
    setTodos((prevTodos) => [...prevTodos, newTodo])
  }

  return (
    <View>
      <Navbar title = 'Todo App'/>
      <View style={styles.container}>
        <AddTodo onSubmit = {addTodo} />

        <FlatList 
          keyExtractor = {item => item.id.toString()}
          data = {todos}
          renderItem = {({item}) => <Todo ondel = {removeTodo} todo= {item}/>} 
        />

        {/* <ScrollView>
          {todos.map(todo => (<Todo key = {todo.id} todo= {todo}/>))}
        </ScrollView> */}
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
  header: {
  }
});
