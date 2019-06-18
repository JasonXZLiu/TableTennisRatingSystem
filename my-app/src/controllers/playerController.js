import { basePath } from "./index";
import { format } from "date-fns";

export async function getPlayers() {
  return await fetch(basePath + "/ratings").then(res =>
    res.json().then(data => data)
  );
}

export async function getLeaders() {
  return await fetch(basePath + "/players").then(res =>
    res.json().then(data => data)
  );
}

export async function getPlayerById(playerId) {
  return await fetch(basePath + "/player/" + playerId).then(res =>
    res.json().then(data => data)
  );
}

export async function getPlayerMatchHistory(params) {
  console.log(params);
  if (!params.searchValue && !params.resultValue) {
    return await fetch(
      basePath + "/player/" + params.playerId + "/matchHistory"
    ).then(res =>
      res.json().then(data =>
        data.map(match => {
          const date = format(new Date(match.date), "MM/DD/YYYY");
          return {
            ...match,
            date
          };
        })
      )
    );
  }
  const searchValue = params.searchValue || "undefined";
  const resultValue = params.resultValue || "undefined";
  const path =
    basePath +
    "/player/" +
    params.playerId +
    "/matchHistory/search=" +
    searchValue +
    "&result=" +
    resultValue;
  console.log(path);
  return await fetch(path).then(res =>
    res.json().then(data =>
      data.map(match => {
        const date = format(new Date(match.date), "MM/DD/YYYY");
        return {
          ...match,
          date
        };
      })
    )
  );
}

export async function getRatings(params) {
  if (params) {
    const searchValue = params.searchValue || "undefined";
    const sexValue = params.sexValue || "undefined";
    const provinceValue = params.provinceValue || "undefined";
    const categoryValue = params.categoryValue || "undefined";
    return await fetch(
      basePath +
        "/ratings/search=" +
        searchValue +
        "&sex=" +
        sexValue +
        "&province=" +
        provinceValue +
        "&category=" +
        categoryValue
    ).then(res => res.json().then(data => data));
  }
  return await fetch(basePath + "/ratings").then(res =>
    res.json().then(data => data)
  );
}
