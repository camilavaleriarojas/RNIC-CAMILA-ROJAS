export interface TaskTypes {
    id: number;
    title: string;
    description: string;
    todo: boolean;
}

export interface CardProps {
    data: TaskTypes;
}

export interface FormTaskProps {
    data: TaskTypes[];
    addTask: (data: TaskTypes) => void;
}
