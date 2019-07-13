import mongoose from "mongoose";
import graphqlHTTP from "express-graphql";
import schedule from "node-schedule";
import { app } from "./src/middlewares/server";
import { setup } from "./src/setup/setup";
import { getRatingCalculation } from "./src/core/repositories/ratingCalculationRepository";
import { calculateRatings } from "./src/core/services/ratingCalculationService";

const uri = "mongodb://localhost/ratingSystem";
const options = { useNewUrlParser: true };
mongoose.connect(uri, options);

// mongoose
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function() {
  setup();
});

// REST API
const port = 4000;

app.listen(port, (req, res) => {
  console.log(`server listening on port: ${port}`);
});

// GraphQL API

// node schedule
const rule = new schedule.RecurrenceRule();

// run on the 1st of every month at 5:00 PM
rule.month = [new schedule.Range(0, 11)];
rule.date = 1;
rule.hour = 17;
rule.minute = 0;

const calculateRatingsJob = schedule.scheduleJob(rule, async function() {
  await calculateRatings();
});
