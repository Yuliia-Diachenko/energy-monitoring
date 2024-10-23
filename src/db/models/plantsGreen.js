import mongoose from "mongoose";

const plantsGreenSchema = new mongoose.Schema(
  {
    dateStart: {
      type: Date,
      required: true,
    },
    dateEnd: {
      type: Date,
      required: true,
    },
    year: {
      type: Number, // змінив тип даних на Number, оскільки рік не є датою
      optional: true,
    },
    month: {
      type: Number, // змінив тип даних на Number, оскільки місяць не є датою
      default: false,
    },
    powerPlantType: {
      type: String,
      enum: ["Biomass", "Biogas", "Solar", "Wind", "Hydro"],
      required: true,
      default: "personal",
    },
    generatedElectricityAmount: {
      type: Number,
      default: false,
    },
  },
  { timestamps: true }
);

export const PlantsGreenCollection = mongoose.model("plantsGreen", plantsGreenSchema);
