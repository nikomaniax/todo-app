import { ToDos } from "../../to-dos.class";

export interface UserInterface {
  id: string;
  fullName: string;
  toDoList?: ToDos;
}
