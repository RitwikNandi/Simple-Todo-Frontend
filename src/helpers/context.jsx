import { createContext, useEffect, useReducer, useContext } from "react";
import {
  API_ENDPOINT,
  HANDLE_LIST,
  HANDLE_SUBMIT,
  MARK_COMPLETE,
  SET_LOADING,
} from "./actions";
import reducer from "./reducer";

const initialState = {
  isLoading: true,
  tasks: "",
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
      console.log(result[0].taskName);
      dispatch({
        type: HANDLE_LIST,
        payload: { tasks: result },
      });
    } catch (error) {
      console.log(error);
    }
  };

  const markComplete = (id) => {
    dispatch({ type: MARK_COMPLETE, payload: id });
  };

  const handleForm = async (task) => {
    console.log(task);
    const data = { taskName: task };

    try {
      const postResponse = await fetch(API_ENDPOINT, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await postResponse.json();
      console.log(result);
    } catch (error) {
      console.error("Error : ", error);
    }

    dispatch({ type: HANDLE_SUBMIT, payload: postResponse.data });
  };

  const handleList = (tasks) => {
    dispatch({ type: HANDLE_LIST, payload: tasks });
  };
  //9cc0722a-2531-41aa-9eaa-08dc4846405e
  useEffect(() => {
    fetchTasks(`${API_ENDPOINT}`);
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
