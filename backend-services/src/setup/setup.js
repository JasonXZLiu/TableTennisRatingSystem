import { Player } from "../core/schemas/player";
import { Match } from "../core/schemas/match";
import { Tournament } from "../core/schemas/tournament";
import { RatingCalculation } from "../core/schemas/ratingCalculation";
import { CountryCode } from "../core/schemas/countryCode";
import { FilterSelector } from "../core/schemas/filterSelector";

import { playerData } from "./playerData";
import { matchData } from "./matchData";
import { filterData } from "./filterData";
import { countryCodeData } from "./countryCodeData";
import { tournamentData } from "./tournamentData";
import { ratingCalculationData } from "./ratingCalculationData";
import { toMatchObjects } from "../core/models/matchDTO";

const checkIfDatabaseSeeded = async () => {
  const countryCodeCount = await CountryCode.estimatedDocumentCount();
  const filterSelectorCount = await FilterSelector.estimatedDocumentCount();
  const ratingCalculationCount = await RatingCalculation.estimatedDocumentCount();
  const playerCount = await Player.estimatedDocumentCount();
  const tournamentCount = await Tournament.estimatedDocumentCount();
  const matchCount = await Match.estimatedDocumentCount();

  return (
    countryCodeCount === 0 &&
    filterSelectorCount === 0 &&
    playerCount === 0 &&
    tournamentCount === 0 &&
    matchCount === 0 &&
    ratingCalculationCount === 0
  );
};

export async function setup() {
  const checkIfSeeded = await checkIfDatabaseSeeded();

  if (checkIfSeeded) {
    await CountryCode.create(countryCodeData);
    await FilterSelector.create(filterData);
    await RatingCalculation.create(ratingCalculationData);
    await Player.create(playerData);
    await Tournament.create(tournamentData);
    const matches = await toMatchObjects(matchData);
    await Match.create(matches);
    console.log("seed data succeeded");
  } else console.log("database already seeded");
}
