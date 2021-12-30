export interface GistProps {
  id: number;
  desc: string;
  filename: string;
  content: string;
  gistImg: string | null | ArrayBuffer | "";
}
export interface Gists {
  gists: GistProps[];
}

export type ActionProps =
  | {
      type: "GET_GISTS" | "SEARCH_GIST";
      payload: GistProps[];
    }
  | {
      type: "ADD_GIST";
      payload: GistProps;
    }
  | {
      type: "LOGIN" | "LOGOUT";
      payload: boolean;
    };
