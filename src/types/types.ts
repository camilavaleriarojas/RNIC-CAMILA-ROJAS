export interface TaskTypes {
    id: number;
    title: string;
    description: string;
    toDo: boolean;
}

export interface CardProps {
    data: TaskTypes;
  }