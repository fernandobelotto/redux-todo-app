import { Checkbox, IconButton, HStack, Text, VStack } from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store";
import { deleteTodo, toggleTodo } from "../todos.slice";
import { DeleteIcon } from "@chakra-ui/icons";

export default function TodosList() {
  let todos = useAppSelector((state) => state.todos);
  const visibility = useAppSelector((state) => state.visibility.visibility);

  const dispatch = useAppDispatch();

  const handleToggle = (id: string) => {
    dispatch(toggleTodo(id));
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTodo(id));
  };

  if (visibility === "done") {
    todos = todos.filter((todo) => todo.completed);
  }

  if (visibility === "todo") {
    todos = todos.filter((todo) => !todo.completed);
  }

  return (
    <VStack spacing={3} alignItems="flex-start" w="full">
      {todos.map((todo) => (
        <HStack padding={2} borderWidth={1} rounded="md">
          <Checkbox
            isChecked={todo.completed}
            onChange={() => handleToggle(todo.id)}
          />
          <Text
            onClick={() => handleToggle(todo.id)}
            key={todo.id}
            as={todo.completed ? "s" : "p"}
          >
            {todo.text}
          </Text>
          <IconButton
            aria-label="delete button"
            size="xs"
            icon={<DeleteIcon />}
            onClick={() => handleDelete(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}
