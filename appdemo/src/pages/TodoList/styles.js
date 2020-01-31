import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 30px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
})`
  margin-top: 10px;
`;

export const ItemTodo = styled.View`
  align-items: center;
  margin: 0 20px 10px;
  margin-top: 5px;
  text-align: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  color: #333;
  text-transform: capitalize;
`;
