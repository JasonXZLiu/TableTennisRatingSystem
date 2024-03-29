"use strict";Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;const { RESTDataSource } = require("apollo-datasource-rest");

class TournamentAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:5000/";
  }

  tournamentReducer(tournament) {
    return tournament;
  }

  async getAllTournaments() {
    const response = await this.get("tournaments");
    return Array.isArray(response) ?
    response.map(tournament => this.tournamentReducer(tournament)) :
    [];
  }

  async getTournamentById({ tournamentId }) {
    const response = await this.get(`tournament/${tournamentId}`);
    return this.tournamentReducer(response);
  }}var _default =


TournamentAPI;exports.default = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kYXRhc291cmNlcy90b3VybmFtZW50LmpzIl0sIm5hbWVzIjpbIlJFU1REYXRhU291cmNlIiwicmVxdWlyZSIsIlRvdXJuYW1lbnRBUEkiLCJjb25zdHJ1Y3RvciIsImJhc2VVUkwiLCJ0b3VybmFtZW50UmVkdWNlciIsInRvdXJuYW1lbnQiLCJnZXRBbGxUb3VybmFtZW50cyIsInJlc3BvbnNlIiwiZ2V0IiwiQXJyYXkiLCJpc0FycmF5IiwibWFwIiwiZ2V0VG91cm5hbWVudEJ5SWQiLCJ0b3VybmFtZW50SWQiXSwibWFwcGluZ3MiOiJvR0FBQSxNQUFNLEVBQUVBLGNBQUYsS0FBcUJDLE9BQU8sQ0FBQyx3QkFBRCxDQUFsQzs7QUFFQSxNQUFNQyxhQUFOLFNBQTRCRixjQUE1QixDQUEyQztBQUN6Q0csRUFBQUEsV0FBVyxHQUFHO0FBQ1o7QUFDQSxTQUFLQyxPQUFMLEdBQWUsd0JBQWY7QUFDRDs7QUFFREMsRUFBQUEsaUJBQWlCLENBQUNDLFVBQUQsRUFBYTtBQUM1QixXQUFPQSxVQUFQO0FBQ0Q7O0FBRUQsUUFBTUMsaUJBQU4sR0FBMEI7QUFDeEIsVUFBTUMsUUFBUSxHQUFHLE1BQU0sS0FBS0MsR0FBTCxDQUFTLGFBQVQsQ0FBdkI7QUFDQSxXQUFPQyxLQUFLLENBQUNDLE9BQU4sQ0FBY0gsUUFBZDtBQUNIQSxJQUFBQSxRQUFRLENBQUNJLEdBQVQsQ0FBYU4sVUFBVSxJQUFJLEtBQUtELGlCQUFMLENBQXVCQyxVQUF2QixDQUEzQixDQURHO0FBRUgsTUFGSjtBQUdEOztBQUVELFFBQU1PLGlCQUFOLENBQXdCLEVBQUVDLFlBQUYsRUFBeEIsRUFBMEM7QUFDeEMsVUFBTU4sUUFBUSxHQUFHLE1BQU0sS0FBS0MsR0FBTCxDQUFVLGNBQWFLLFlBQWEsRUFBcEMsQ0FBdkI7QUFDQSxXQUFPLEtBQUtULGlCQUFMLENBQXVCRyxRQUF2QixDQUFQO0FBQ0QsR0FwQndDLEM7OztBQXVCNUJOLGEiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IFJFU1REYXRhU291cmNlIH0gPSByZXF1aXJlKFwiYXBvbGxvLWRhdGFzb3VyY2UtcmVzdFwiKTtcclxuXHJcbmNsYXNzIFRvdXJuYW1lbnRBUEkgZXh0ZW5kcyBSRVNURGF0YVNvdXJjZSB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBzdXBlcigpO1xyXG4gICAgdGhpcy5iYXNlVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjUwMDAvXCI7XHJcbiAgfVxyXG5cclxuICB0b3VybmFtZW50UmVkdWNlcih0b3VybmFtZW50KSB7XHJcbiAgICByZXR1cm4gdG91cm5hbWVudDtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldEFsbFRvdXJuYW1lbnRzKCkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdldChcInRvdXJuYW1lbnRzXCIpO1xyXG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmVzcG9uc2UpXHJcbiAgICAgID8gcmVzcG9uc2UubWFwKHRvdXJuYW1lbnQgPT4gdGhpcy50b3VybmFtZW50UmVkdWNlcih0b3VybmFtZW50KSlcclxuICAgICAgOiBbXTtcclxuICB9XHJcblxyXG4gIGFzeW5jIGdldFRvdXJuYW1lbnRCeUlkKHsgdG91cm5hbWVudElkIH0pIHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5nZXQoYHRvdXJuYW1lbnQvJHt0b3VybmFtZW50SWR9YCk7XHJcbiAgICByZXR1cm4gdGhpcy50b3VybmFtZW50UmVkdWNlcihyZXNwb25zZSk7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3VybmFtZW50QVBJO1xyXG4iXX0=