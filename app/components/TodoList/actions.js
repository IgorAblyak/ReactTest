import { ADD_TASK, DELETE_TASK, CHANGE_INPUT_VALUE } from './constants';

export function addTask() {
    return {
        type: ADD_TASK,
    }
}

export function deleteTask(task) {
    return {
        type: DELETE_TASK,
        payload: task,
    }
}

export function changeInput(value) {
    return {
        type: CHANGE_INPUT_VALUE,
        payload: value,
    }
}