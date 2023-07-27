export interface TaskTypes {
  id: number;
  title: string;
  description: string;
  todo: boolean;
  img?: string;
}

export interface CardProps {
  data: TaskTypes;
}

export interface AddTask {
  title: string;
  description: string;
}

export interface FormTaskProps {
  addTask: (data: AddTask) => void;
}
