import mongoose from "mongoose";

const plantsGreenSchema = new mongoose.Schema({
    DateStart: {
      type: String,
      required: true,
    },
    DateEnd: {
      type: String,
      required: true,
    },
    Year: {
      type: Number,
      required: true,
    },
    Month: {
      type: Number,
      default: false,
    },
    PowerPlantType: {
      type: String,
      enum: ["Biomass", "Biogas", "Solar", "Wind", "Hydro"],
      required: true,
    },
    GeneratedElectricityAmount: {
      type: Number,
      required: true,
    },
    Unit: {
      type: String,
      required: true,
      default: "MillionKWh",
    }
}, { timestamps: true });

export const PlantsGreenCollection = mongoose.model("Green", plantsGreenSchema);
