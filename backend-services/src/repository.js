import {
  getPlayers,
  getPlayerById,
  getRatings,
  getPlayerMatchHistory
} from "./core/repositories/playerRepository";
import {
  getSex,
  getCategory,
  getProvince,
  getResult
} from "./core/repositories/filterSelectorRepository";
import {
  getTournaments,
  getTournamentById
} from "./core/repositories/tournamentRepository";
import {
  verifyTournamentMatches,
  submitTournamentMatches
} from "./core/services/tournamentService";
import { getCountryCode } from "./core/repositories/countryCodeRepository";
import {
  getMatches,
  getMatchById,
  getMatchesByTournamentId,
  getMatchesByPlayerId
} from "./core/repositories/matchRepository";

export const PLAYERS = "PLAYERS";
export const PLAYER_BY_ID = "PLAYER_BY_ID";
export const RATINGS = "RATINGS";
export const SEX_FILTER = "SEX_FILTER";
export const PROVINCE_FILTER = "PROVINCE_FILTER";
export const CATEGORY_FILTER = "CATEGORY_FILTER";
export const RESULT_FILTER = "RESULT_FILTER";
export const TOURNAMENTS = "TOURNAMENTS";
export const TOURNAMENT_BY_ID = "TOURNAMENT_BY_ID";
export const COUNTRY_CODE = "COUNTRY_CODE";
export const MATCHES = "MATCHES";
export const MATCH_BY_ID = "MATCH_BY_ID";
export const MATCHES_BY_TOURNAMENT = "MATCHES_BY_TOURNAMENT";
export const MATCHES_BY_PLAYER = "MATCHES_BY_PLAYER";
export const PLAYER_MATCH_HISTORY = "PLAYER_MATCH_HISTORY";
export const SUBMIT_TOURNAMENT_MATCHES = "SUBMIT_TOURNAMENT_MATCHES";
export const VERIFY_TOURNAMENT_MATCHES = "VERIFY_TOURNAMENT_MATCHES";

export const getData = (request, params) => {
  switch (request) {
    case PLAYERS:
      return getPlayers();
    case PLAYER_BY_ID:
      return getPlayerById(params);
    case RATINGS:
      return getRatings(params);
    case SEX_FILTER:
      return getSex();
    case PROVINCE_FILTER:
      return getProvince();
    case CATEGORY_FILTER:
      return getCategory();
    case RESULT_FILTER:
      return getResult();
    case TOURNAMENTS:
      return getTournaments(params);
    case TOURNAMENT_BY_ID:
      return getTournamentById(params);
    case COUNTRY_CODE:
      return getCountryCode(params);
    case MATCHES:
      return getMatches();
    case MATCH_BY_ID:
      return getMatchById(params);
    case MATCHES_BY_TOURNAMENT:
      return getMatchesByTournamentId(params);
    case MATCHES_BY_PLAYER:
      return getMatchesByPlayerId(params);
    case PLAYER_MATCH_HISTORY:
      return getPlayerMatchHistory(params);
    default:
      return "NOTHING HERE";
  }
};

export const postData = (request, params) => {
  switch (request) {
    case VERIFY_TOURNAMENT_MATCHES:
      return verifyTournamentMatches(params);
    case SUBMIT_TOURNAMENT_MATCHES:
      return submitTournamentMatches(params);
    default:
      break;
  }
};
