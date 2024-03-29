import mongoose, { Schema } from "mongoose";
import { getSyncCountryCode } from "../repositories/countryCodeRepository";

const locationSchema = new mongoose.Schema({
  address: String,
  city: String,
  postalCode: String,
  province: String,
  country: String
});

const tournamentSchema = new mongoose.Schema({
  id: Number,
  name: String,
  startDate: Date,
  endDate: Date,
  location: locationSchema,
  events: [String]
});

locationSchema.virtual("countryCode").get(function() {
  return getSyncCountryCode({
    countryName: this.country
  })[0].code;
});

locationSchema.set("toJSON", { getters: true, virtuals: true });

export const Tournament = mongoose.model("Tournament", tournamentSchema);
