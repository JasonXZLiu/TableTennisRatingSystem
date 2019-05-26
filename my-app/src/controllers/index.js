import { getPlayers, getRatings, getLeaders } from "./playerController";
import { ACTION_REQUEST_PLAYERS } from "../pages/ratings/RatingsAction";
import {
  ACTION_REQUEST_LEADERS,
  ACTION_RECEIVE_LEADERS
} from "../pages/leaderboard/LeaderboardAction";

export const basePath = "https://cefcf35d.ngrok.io";

export const fetch = (action, params) => {
  switch (action) {
    case ACTION_REQUEST_PLAYERS:
      return getRatings(params);
    case ACTION_REQUEST_LEADERS:
      return getPlayers();
    case ACTION_RECEIVE_LEADERS:
      return;
    default:
      return {};
  }
};
