import {
  Menu,
  MenuButton,
  Button,
  MenuList,
  MenuOptionGroup,
  MenuItemOption,
  MenuDivider,
} from "@chakra-ui/react";
import { useAppDispatch, useAppSelector } from "../store";
import { setVisibility, Visibility } from "../visibility.slice";

export default function FilterMenu() {
  const dispatch = useAppDispatch();

  const visibility = useAppSelector((state) => state.visibility.visibility);

  const handleChangeVisibility = (e: string) => {
    dispatch(setVisibility(e as Visibility));
  };

  return (
    <>
      <Menu closeOnSelect={true} size="sm">
        <MenuButton as={Button} size="xs">
          filters
        </MenuButton>
        <MenuList minWidth="10px" p={1}>
          <MenuOptionGroup
            onChange={(e) => handleChangeVisibility(e as Visibility)}
            defaultValue="all"
            value={visibility}
            title="Status"
            type="radio"
          >
            <MenuItemOption value="all">All</MenuItemOption>
            <MenuItemOption value="todo">Todo</MenuItemOption>
            <MenuItemOption value="done">Completed</MenuItemOption>
          </MenuOptionGroup>
          <MenuDivider />
        </MenuList>
      </Menu>
    </>
  );
}
