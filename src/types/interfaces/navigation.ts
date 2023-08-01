import {Routes} from '../enums/routes';

export type StackTabParams = {
  [Routes.LIST]: undefined;
  [Routes.ADD_TASK]: undefined;
  [Routes.TAB_NAVIGATOR]: undefined;
  [Routes.EDIT_TASK]: undefined;
  [Routes.STACK]: undefined;
};

export enum Key {
  NAVIGATION_STATE = 'NAVIGATION_STATE',
}
