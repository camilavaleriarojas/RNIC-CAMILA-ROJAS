import {TaskTypes} from '../types';

export const tasks: TaskTypes[] = [
  {
    id: 1,
    title: 'Lavar la ropa',
    description: 'Poner el cesto de ropa a lavar',
    todo: false,
    img: require('../assets/images/ducks.jpeg'),
  },
  {
    id: 2,
    title: 'Cambiar piedras de gatos',
    description: 'Cambiar las piedritas de los gatos',
    todo: true,
    img: require('../assets/images/meadow.jpeg'),
  },
  {
    id: 3,
    title: 'Cocinar almuerzo semanal',
    description: 'Cocinar el almuerzo para toda la semana y refrigerar',
    todo: false,
    img: require('../assets/images/moon.jpeg'),
  },
  {
    id: 4,
    title: 'Limpiar el cuarto',
    description: 'Barrer, limpiar y ordenar el cuarto',
    todo: false,
  },
  {
    id: 5,
    title: 'Sacar a pasear al perro',
    description: 'Llevar el perro a la plaza',
    todo: false,
  },
];
