import { ACTION_DECREMENT, ACTION_INCREMENT } from './types';

export const actionIncrementCounter = () => ({ type: ACTION_INCREMENT });
export const actionDecrementCounter = () => ({ type: ACTION_DECREMENT });
