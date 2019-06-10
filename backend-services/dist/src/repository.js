"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getData = exports.MATCHES_BY_PLAYER = exports.MATCHES_BY_TOURNAMENT = exports.MATCH_BY_ID = exports.MATCHES = exports.COUNTRY_CODE = exports.TOURNAMENT_BY_ID = exports.TOURNAMENTS = exports.CATEGORY_FILTER = exports.PROVINCE_FILTER = exports.SEX_FILTER = exports.RATINGS = exports.PLAYER_BY_ID = exports.PLAYERS = undefined;

var _playerRepository = require("./core/playerRepository/playerRepository");

var _playerRepository2 = require("./mongoRepository/repositories/playerRepository");

var _filterSelectorRepository = require("./mongoRepository/repositories/filterSelectorRepository");

var _tournamentRepository = require("./mongoRepository/repositories/tournamentRepository");

var _countryCodeRepository = require("./mongoRepository/repositories/countryCodeRepository");

var _matchRepository = require("./mongoRepository/repositories/matchRepository");

var PLAYERS = exports.PLAYERS = "PLAYERS";
var PLAYER_BY_ID = exports.PLAYER_BY_ID = "PLAYER_BY_ID";
var RATINGS = exports.RATINGS = "RATINGS";
var SEX_FILTER = exports.SEX_FILTER = "SEX_FILTER";
var PROVINCE_FILTER = exports.PROVINCE_FILTER = "PROVINCE_FILTER";
var CATEGORY_FILTER = exports.CATEGORY_FILTER = "CATEGORY_FILTER";
var TOURNAMENTS = exports.TOURNAMENTS = "TOURNAMENTS";
var TOURNAMENT_BY_ID = exports.TOURNAMENT_BY_ID = "TOURNAMENT_BY_ID";
var COUNTRY_CODE = exports.COUNTRY_CODE = "COUNTRY_CODE";
var MATCHES = exports.MATCHES = "MATCHES";
var MATCH_BY_ID = exports.MATCH_BY_ID = "MATCH_BY_ID";
var MATCHES_BY_TOURNAMENT = exports.MATCHES_BY_TOURNAMENT = "MATCHES_BY_TOURNAMENT";
var MATCHES_BY_PLAYER = exports.MATCHES_BY_PLAYER = "MATCHES_BY_PLAYER";

var getData = exports.getData = function getData(request, params) {
  switch (request) {
    case PLAYERS:
      return (0, _playerRepository2.getPlayers)();
    case PLAYER_BY_ID:
      return (0, _playerRepository2.getPlayerById)(params);
    case RATINGS:
      return (0, _playerRepository2.getRatings)(params);
    case SEX_FILTER:
      return (0, _filterSelectorRepository.getSex)();
    case PROVINCE_FILTER:
      return (0, _filterSelectorRepository.getProvince)();
    case CATEGORY_FILTER:
      return (0, _filterSelectorRepository.getCategory)();
    case TOURNAMENTS:
      return (0, _tournamentRepository.getTournaments)(params);
    case TOURNAMENT_BY_ID:
      return (0, _tournamentRepository.getTournamentById)(params);
    case COUNTRY_CODE:
      return (0, _countryCodeRepository.getCountryCode)(params);
    case MATCHES:
      return (0, _matchRepository.getMatches)();
    case MATCH_BY_ID:
      return (0, _matchRepository.getMatchById)(params);
    case MATCHES_BY_TOURNAMENT:
      return (0, _matchRepository.getMatchesByTournamentId)(params);
    case MATCHES_BY_PLAYER:
      return (0, _matchRepository.getMatchesByPlayerId)(params);
    default:
      return "NOTHING HERE";
  }
};