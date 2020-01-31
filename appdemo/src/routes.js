import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TodoList from './pages/TodoList';
import Todo from './pages/Todo';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Todo,
      TodoList,
    },
    {
      headerLayoutPreset: 'center', // deixa o layout no centro
      headerBackTitleVisible: false, // não permite colocar o nome da tela no simbolo de voltar
      defaultNavigationOptions: {
        headerStyle: {
          backgroundColor: '#0277BD', // color backgroud
        },
        headerTintColor: '#fff', // color title
      },
    }
  )
);

export default Routes;
