import mongoose from "mongoose";

const plantsThermalSchema = new mongoose.Schema(
  {
    dateStart: {
      type: Number,
      required: true,
    },
    dateEnd: {
      type: Number,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    powerPlantType: {
      type: String,
      enum: [
        "heat power plants",
        "combined heat and power plants",
        "nuclear power plants",
        "heat plants",
        "utilization units",
        "other units"
      ],
      required: true,
    },
    heatOutputAmount: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

export const PlantsThermalCollection = mongoose.model("ThermalCollection", plantsThermalSchema);
