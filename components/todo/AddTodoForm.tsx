import { useCallback, useState } from 'react';
import { TextInput, TouchableOpacity, View, StyleSheet, Text, Modal } from 'react-native';

interface IProps {
  handleSubmit: (todoText: string) => void;
  isDisplayingModal: boolean;
  toggleModal: () => void;
}

export const AddTodoForm: React.FC<IProps> = ({ handleSubmit, isDisplayingModal, toggleModal }) => {
  const [todoText, setTodoText] = useState<string | undefined>();
  const handleTextChanged = useCallback((text: string | undefined) => {
    setTodoText(text);
  }, []);

  if (!isDisplayingModal) {
    return;
  }

  const Close = () => {
    return (
      <TouchableOpacity onPress={toggleModal} style={style.closeButton}>
        <Text style={{ fontSize: 18 }}>X</Text>
      </TouchableOpacity>
    );
  };

  return (
    <Modal animationType="slide" transparent={true} onRequestClose={toggleModal}>
      <View style={style.modal}>
        <View style={style.innerModal}>
          <View style={style.form}>
            <Close />
            <TextInput placeholder="Add todo" style={style.textBox} value={todoText} onChangeText={handleTextChanged} />
            <TouchableOpacity
              style={style.submitButton}
              onPress={() => {
                if (todoText) {
                  handleSubmit(todoText);
                  setTodoText('');
                }
              }}
            >
              <Text style={style.submitText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const style = StyleSheet.create({
  closeButton: {
    top: 10,
    right: 10,
    position: 'absolute',
  },
  innerModal: {
    minWidth: 300,
    minHeight: 200,
    maxWidth: 700,
    maxHeight: 600,
    backgroundColor: 'white',
    flexDirection: 'column',
    borderRadius: 6,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  form: {
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100%',
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  modal: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submitText: {
    backgroundColor: 'green',
    color: 'white',
    textAlign: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    borderRadius: 6,
    paddingHorizontal: 30,
  },
  submitButton: {
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
    borderRadius: 6,
    padding: 4,
    width: '100%',
    maxWidth: 500,
    marginBottom: 8,
  },
  todoItems: {
    maxWidth: 400,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
