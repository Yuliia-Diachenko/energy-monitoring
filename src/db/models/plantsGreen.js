import mongoose from "mongoose";

const plantsGreenSchema = new mongoose.Schema(
  {
    DateStart: {
      type: Date,
      required: true,
    },
    DateEnd: {
      type: Date,
      required: true,
    },
    Year: {
      type: Number,
      optional: true,
    },
    Month: {
      type: Number,
      default: false,
    },
    PowerPlantType: {
      type: String,
      enum: ["Biomass", "Biogas", "Solar", "Wind", "Hydro"],
      required: true,
      default: "personal",
    },
    GeneratedElectricityAmount: {
      type: Number,
      default: false,
    },
  },
  { timestamps: true }
);

export const PlantsGreenCollection = mongoose.model("Green", plantsGreenSchema);
