import "react-native-get-random-values";
import { Link } from "expo-router";
import { useCallback, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Button,
} from "react-native";
import { v4 as uuidv4 } from "uuid";

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
    setTodoText("");
  };

  return (
    <View>
      {/* Form */}
      <View style={style.form}>
        <TextInput
          placeholder="Add todo"
          style={style.textBox}
          value={todoText}
          onChangeText={handleTextChanged}
        />
        <TouchableOpacity style={style.submitButton} onPress={handleSubmit}>
          <Text style={style.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>

      {/* List */}
      <View>
        <ScrollView>
          {todos.map((todo, index) => (
            <View style={style.todoItems} key={`todo-${index}`}>
              <Text key={`todo-items-${index}`}>{todo.text}</Text>
              <Link
                href={{
                  pathname: "/todo/[id]",
                  params: {
                    id: todo.id,
                  },
                }}
              >
                See details
              </Link>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  form: {
    flexDirection: "row",
    marginBottom: 16,
  },
  submitText: {
    backgroundColor: "green",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    paddingVertical: 8,
    borderRadius: 6,
  },
  submitButton: {
    flex: 1,
  },
  textBox: {
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 8,
    flex: 2,
    justifyContent: "center",
    marginRight: 6,
    paddingHorizontal: 4,
  },
  todoItems: {
    flexDirection: "row",
    alignItems: "center",
  },
});
