import { createContext, useEffect, useReducer } from "react";
import {
  API_ENDPOINT,
  HANDLE_LIST,
  HANDLE_SUBMIT,
  MARK_COMPLETE,
  SET_LOADING,
  SET_TASKS,
} from "./actions";
import reducer from "./reducer";

const initialState = {
  isLoading: true,
  task: "",
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchTasks = async (url) => {
    dispatch({ type: SET_LOADING });
    try {
      const response = await fetch(url);
      const result = await response.json();
      console.log(url);
      console.log(result);
      dispatch({
        type: SET_TASKS,
        payload: { task: result.taskName },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const markComplete = (id) => {
    dispatch({ type: MARK_COMPLETE, payload: id });
  };

  const handleForm = (task) => {
    dispatch({ type: HANDLE_SUBMIT, payload: task });
  };

  const handleList = (value) => {
    dispatch({ type: HANDLE_LIST, payload: value });
  };

  useEffect(() => {
    fetchTasks(`${API_ENDPOINT}9cc0722a-2531-41aa-9eaa-08dc4846405e`);
  }, []);

  return (
    <AppContext.Provider
      value={{ ...state, markComplete, handleList, handleForm }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
