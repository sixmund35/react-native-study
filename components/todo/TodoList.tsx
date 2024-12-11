import 'react-native-get-random-values';
import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { EditIcon } from '../icons/EditIcon';
import { AddTodoForm } from './AddTodoForm';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Todo {
  text: string;
  id: string;
}

export const TodoList: React.FC<unknown> = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [isDisplayingModal, setIsDisplayingModal] = useState<boolean>(false);

  const handleSubmit = (todoText: string) => {
    if (!todoText) return;

    setTodos([...todos, { text: todoText, id: uuidv4() }]);
    toggleModal();
  };

  const toggleModal = useCallback(() => {
    setIsDisplayingModal(!isDisplayingModal);
  }, [isDisplayingModal]);

  return (
    <SafeAreaView>
      <AddTodoForm toggleModal={toggleModal} handleSubmit={handleSubmit} isDisplayingModal={isDisplayingModal} />

      <TouchableOpacity style={style.submitButton} onPress={() => setIsDisplayingModal(!isDisplayingModal)}>
        <Text style={style.buttonText}>Add Todo</Text>
      </TouchableOpacity>

      {/* List */}
      <View>
        <FlatList
          showsVerticalScrollIndicator={false}
          alwaysBounceVertical={true}
          data={todos}
          keyExtractor={(todo, index) => `todo-item-${index}`}
          scrollEnabled={false}
          renderItem={(todo) => {
            return (
              <View style={style.todoItems}>
                <Text>{todo.item.text}</Text>
                <Link
                  style={{ width: 20, height: 20 }}
                  href={{
                    pathname: '/todo/[id]',
                    params: {
                      id: todo.item.id,
                    },
                  }}
                >
                  <EditIcon />
                </Link>
              </View>
            );
          }}
        ></FlatList>
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  centeredView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  todoItems: {
    maxWidth: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  submitButton: {
    maxWidth: 200,
    backgroundColor: 'green',
    borderRadius: 6,
    padding: 8,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
