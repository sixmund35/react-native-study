import { useCallback, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export const Todo: React.FC<{}> = () => {
  const [todoText, setTodoText] = useState<string | undefined>();
  const [todos, setTodos] = useState<string[]>([]);

  const handleTextChanged = useCallback((text: string | undefined) => {
    setTodoText(text);
  }, []);

  const handleSubmit = () => {
    if (!todoText) return;

    setTodos([...todos, todoText]);
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
            <Text key={`todo-items-${index}`}>{todo}</Text>
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
});
