import {
  Button,
  Center,
  Heading,
  HStack,
  Input,
  VStack,
} from "@chakra-ui/react";
import { nanoid } from "nanoid";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import FilterMenu from "./components/FilterMenu";
import TodosList from "./components/TodosList";
import { addTodo } from "./todos.slice";

export default function App() {
  const dispatch = useDispatch();

  const inputRef = useRef<HTMLInputElement>(null);

  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue) {
      dispatch(
        addTodo({
          text: inputValue,
          id: nanoid(),
        })
      );
      setInputValue("");
      inputRef.current?.focus();
    }
  };

  return (
    <Center mt="32">
      <VStack spacing={5}>
        <Heading>Redux Todo</Heading>
        <HStack>
          <Input
            ref={inputRef}
            value={inputValue}
            placeholder="write todo here"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button isDisabled={!!!inputValue} onClick={handleAddTodo}>
            Add Todo
          </Button>
        </HStack>
        <FilterMenu />
        <TodosList />
      </VStack>
    </Center>
  );
}
