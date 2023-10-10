import { randomUUID } from "crypto";
import { ToDoInterface } from "./interfaces/to-do.interface";
import { UserEntity } from "./user.entity";

export class ToDoEntity implements ToDoInterface {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  deletedAt?: Date;
  user: UserEntity;

  constructor({
    id,
    title,
    description,
    isCompleted,
    deletedAt,
    user,
  }: {
    id?: string;
    title: string;
    description?: string;
    isCompleted?: boolean;
    deletedAt?: Date;
    user: UserEntity;
  }) {
    this.id = id ?? "";
    this.title = title;
    this.description = description;
    this.isCompleted = isCompleted ?? false;
    this.deletedAt = deletedAt;
    this.user = user;
  }

  create() {
    if (this.id === "") this.id = randomUUID();
  }

  update({ title, description }: { title?: string; description?: string }) {
    if (title) this.title = title;
    if (description) this.description = description;
  }

  complete() {
    this.isCompleted = true;
  }

  unComplete() {
    this.isCompleted = false;
  }

  delete() {
    this.deletedAt = new Date();
  }
}
