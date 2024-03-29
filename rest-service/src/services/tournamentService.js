import { getPlayerIdToVerifyByName } from "../repositories/playerRepository";
import { toMatchObjects, toMatchObjectsByPlayerId } from "../models/matchDTO";
import { getTournamentById } from "../repositories/tournamentRepository";
import { insertData, CREATE_MATCH } from "../repository";

async function verifyMatchForTournament(tournament, match) {
  if (tournament.name !== match.tournament) {
    throw Error("some matches were submitted for the wrong tournament");
  }
  const winnerId = await getPlayerIdToVerifyByName({ name: match.winner });
  const loserId = await getPlayerIdToVerifyByName({ name: match.loser });
  const matchObject = {
    tournament: match.tournament,
    date: match.date,
    winner: winnerId,
    loser: loserId,
    score: match.score.split(";"),
    isValid: !(winnerId instanceof Array || loserId instanceof Array)
  };
  return matchObject;
}

async function verifyMatchesForTournament(tournamentId, data) {
  const tournament = await getTournamentById({ id: tournamentId });
  const matches = await Promise.all(
    data.map(match => verifyMatchForTournament(tournament, match))
  );
  var count = 0;
  matches.map(match => {
    if (
      (match.winner instanceof Array && match.winner.length > 1) ||
      (match.loser instanceof Array && match.loser.length > 1)
    )
      count++;
  });
  return { count, matches };
}

export const verifyTournamentMatches = async params => {
  var { id, matches } = params;
  var verifiedMatches = await verifyMatchesForTournament(id, matches);
  return verifiedMatches;
};

const getMatchFromVerifiedMatches = match => {
  match.winner = match.winner[0].replace(" ", "").split("-")[0];
  match.loser = match.loser[0].replace(" ", "").split("-")[0];
  return match;
};

export const submitTournamentMatches = async params => {
  var verifiedMatches = params;
  const matchesToSubmit = await Promise.all(
    verifiedMatches.map(match => getMatchFromVerifiedMatches(match))
  );
  const matches = await toMatchObjectsByPlayerId(matchesToSubmit);
  insertData(CREATE_MATCH, matches);
  return matchesToSubmit;
};
