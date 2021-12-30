//@ts-nocheck
import {
  Dispatch,
  useContext,
  useReducer,
  createContext,
  useEffect,
} from "react";
import { addGist, fetchGist } from "../utils/gist";
import { GistProps } from "../utils/interface";

type GistState = {
  gist: GistProps[] | [];
  isAuthenticated: boolean;
};
type GistAction =
  | {
      type: "GET_GISTS";
      payload: GistProps[] | [];
    }
  | {
      type: "SEARCH_GIST";
      payload: GistProps[];
    }
  | {
      type: "ADD_GIST";
      payload: GistProps;
    }
  | {
      type: "LOGIN";
      payload: boolean;
    }
  | {
      type: "LOGOUT";
      payload: boolean;
    };

export type GistContextType = {
  state: GistState;
  dispatch: Dispatch<GistAction>;
};

const initialContent = {
  gist: [],
  isAuthenticated: false,
};

export const GistContext = createContext<GistContextType>({
  state: {
    gist: [],
    isAuthenticated: false,
  },
  dispatch: () => undefined,
});
export const useGistContext = () => useContext(GistContext);
const reducer = (state: GistState, action: GistAction) => {
  switch (action.type) {
    case "ADD_GIST":
      return {
        ...state,
        gist: addGist(state.gist, action.payload),
      };
    case "GET_GISTS":
      console.log("Get gists is called", action.payload);

      return {
        ...state,
        gist: action.payload,
      };
    case "SEARCH_GIST":
      return {
        ...state,
        gist: action.payload,
      };
    case "LOGIN":
      return {
        ...state,
        isAuthenticated: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        isAuthenticated: false,
      };
    default:
      return state;
  }
};
interface IProps {
  children: JSX.Element | JSX.Element[];
}
export const GistContextProvider = ({ children }: IProps) => {
  const [state, dispatch] = useReducer(reducer, initialContent);
  useEffect(() => {
    let gist = fetchGist();
    dispatch({
      type: "GET_GISTS",
      payload: gist,
    });
  }, []);
  return (
    <GistContext.Provider value={{ state, dispatch }}>
      {children}
    </GistContext.Provider>
  );
};
