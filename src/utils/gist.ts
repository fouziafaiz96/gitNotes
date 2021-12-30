import { GistProps } from "./interface";

export const addGist = (
  gistsList: GistProps[],
  newgist: GistProps | GistProps[]
) => {
  return [...gistsList, newgist];
};

export const fetchGist = () => {
  let gistArray: GistProps[] = [];
  for (var key in sessionStorage) {
    if (key.toString().includes("obj")) {
      let item: string = sessionStorage.getItem(key) || "";
      gistArray.push(JSON.parse(item));
    }
  }
  return gistArray;
};

export const searchGist = (searchID: number) => {
  let searchedGist: GistProps[] = [];
  let allGists = fetchGist();
  if (allGists.length) {
    for (let item of allGists)
      if (item.id == searchID) {
        searchedGist.push(item);
        return searchedGist;
      }
  } else return searchedGist;
};

export const convertBase64 = (file: File) => {
  var reader: FileReader;
  return new Promise((resolve, reject) => {
    reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      if (reader) {
        resolve(reader.result);
      }
    };
    reader.onerror = function (error) {
      reject(error);
    };
  });
};
