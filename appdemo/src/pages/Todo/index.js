import React, {useState, useEffect} from 'react';
import {Keyboard} from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';

import {
  Container,
  Form,
  Input,
  SubmitButton,
  TextButton,
  NavigateButton,
} from './styles';

export default function Todo(props) {
  const [todoList, setTodoList] = useState([]);
  const [todo, setTodo] = useState('');

  useEffect(() => {
    async function fetchTodos() {
      await AsyncStorage.removeItem('todos');
      const todoListStorage = await AsyncStorage.getItem('todos');
      if (todoListStorage) {
        setTodoList([...JSON.parse(todoListStorage)]);
      }
    }
    fetchTodos();
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('todos', JSON.stringify(todoList));
  }, [todoList]);

  function handleSubmit() {
    if (todo) {
      setTodoList([...todoList, todo]);
      setTodo('');
    }

    Keyboard.dismiss();
  }

  function handleNavigate(todos) {
    const {navigation} = props;

    navigation.navigate('TodoList', {todos});
  }

  return (
    <Container>
      <Form>
        <Input
          autoCorrect={false}
          autoCaptalize="none"
          placeholder="adicionar tarefa"
          value={todo}
          onChangeText={text => setTodo(text)}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
        />
        <SubmitButton onPress={handleSubmit}>
          <Icon name="add" size={20} color="#eee" />
        </SubmitButton>
      </Form>

      {todoList.length > 0 && (
        <NavigateButton onPress={() => handleNavigate(todoList)}>
          <TextButton>
            Listar {todoList.length === 1 ? 'tarefa' : 'tarefas'}
          </TextButton>
        </NavigateButton>
      )}
    </Container>
  );
}

Todo.navigationOptions = {
  title: 'Criar Tarefas',
};

Todo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
