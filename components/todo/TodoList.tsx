import 'react-native-get-random-values';
import { Link } from 'expo-router';
import { useCallback, useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import { EditIcon } from '../icons/EditIcon';

interface Todo {
  text: string;
  id: string;
}

export const TodoList: React.FC<{}> = () => {
  const [todoText, setTodoText] = useState<string | undefined>();
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTextChanged = useCallback((text: string | undefined) => {
    setTodoText(text);
  }, []);

  const handleSubmit = () => {
    if (!todoText) return;

    setTodos([...todos, { text: todoText, id: uuidv4() }]);
    setTodoText('');
  };

  return (
    <View>
      {/* Form */}
      <View style={style.form}>
        <TextInput placeholder="Add todo" style={style.textBox} value={todoText} onChangeText={handleTextChanged} />
        <TouchableOpacity style={style.submitButton} onPress={handleSubmit}>
          <Text style={style.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <View>
        <FlatList
          alwaysBounceVertical={true}
          data={todos}
          keyExtractor={(todo, index) => `todo-item-${index}`}
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
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  submitText: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 6,
  },
  submitButton: {
    flex: 1,
    maxWidth: 200,
  },
  pressedButton: {
    opacity: 0.5,
    flex: 1,
    maxWidth: 200,
  },
  textBox: {
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 8,
    flex: 2,
    marginRight: 6,
    paddingHorizontal: 4,
    maxWidth: 400,
  },
  todoItems: {
    maxWidth: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
