import { ToDoEntity } from './entities/to-do.entity';

export class ToDos {
  private _toDos: ToDoEntity[];

  constructor() {
    this._toDos = [];
  }

  get toDos(): ToDoEntity[] {
    return this._toDos;
  }

  set toDos(toDos: ToDoEntity[]) {
    this._toDos = toDos;
  }

  add(toDo: ToDoEntity): void {
    this._toDos.push(toDo);
  }
}