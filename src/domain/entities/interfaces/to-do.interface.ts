import { UserEntity } from '../user.entity';

export interface ToDoInterface {
  id: string;
  title: string;
  description?: string;
  isCompleted: boolean;
  deletedAt?: Date;
  user: UserEntity;
}
