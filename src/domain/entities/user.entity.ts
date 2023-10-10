import { randomUUID } from "crypto";
import { ToDos } from "../to-dos.class";
import { UserInterface } from "./interfaces/user.interface";

export class UserEntity implements UserInterface {
  id: string;
  fullName: string;
  toDoList?: ToDos;

  constructor({
    id,
    fullName,
    toDoList,
  }: {
    id?: string;
    fullName: string;
    toDoList?: ToDos;
  }) {
    this.id = id ?? "";
    this.fullName = fullName;
    this.toDoList = toDoList;
  }

  create() {
    if (this.id === "") this.id = randomUUID();
  }

  update(fullName: string) {
    this.fullName = fullName;
  }
}
