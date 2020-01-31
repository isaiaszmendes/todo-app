import React from 'react';
import PropTypes from 'prop-types';

import {Container, List, ItemTodo, Text} from './styles';

export default function TodoList({navigation}) {
  const todos = navigation.getParam('todos');
  return (
    <Container>
      <List
        data={todos}
        keyExtractor={(tiem, i) => i}
        renderItem={({item}) => (
          <ItemTodo>
            <Text>{item}</Text>
          </ItemTodo>
        )}
      />
    </Container>
  );
}

TodoList.navigationOptions = {
  title: 'Lista de Tarefas',
};

TodoList.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    getParam: PropTypes.func.isRequired,
  }).isRequired,
};

//  {/* <List
//       data={todoList}
//       keyExtractor={(tiem, i) => i}
//       renderItem={({item}) => (
//         <ItemTodo>
//           <Text>{todoList.length}</Text>
//         </ItemTodo>
//       )}
//     /> */}
//   // </Container>
