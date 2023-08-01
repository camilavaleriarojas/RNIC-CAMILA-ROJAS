export interface TaskTypes {
  id?: number;
  title: string;
  description: string;
  todo?: boolean;
  img?: string;
  taskDate?: string | undefined;
}

export interface CardProps {
  data: TaskTypes;
  navigation: any;
}

export interface AddTaskFormProps {
  id?: number;
  title: string;
  description: string;
  taskDate?: string | undefined;
}

export interface FormTaskProps {
  id?: number;
  data?: TaskTypes[];
  addTask?: (data: TaskTypes) => void;
  navigation?: any;
  isEditingTask?: boolean;
}
