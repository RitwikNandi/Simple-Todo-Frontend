import {
  HANDLE_LIST,
  HANDLE_SUBMIT,
  MARK_COMPLETE,
  SET_LOADING,
} from "./actions";

const reducer = (state, action) => {
  switch (action.type) {
    case SET_LOADING:
      return { ...state, isLoading: true };

    case HANDLE_SUBMIT:
      return { ...state, isLoading: false, task: action.payload };

    case HANDLE_LIST:
      return {
        ...state,
        isLoading: false,
        tasks: action.payload.tasks,
      };

    case MARK_COMPLETE:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };

    default:
      throw new Error(`no matching ${action.type} action type`);
  }
};

export default reducer;
