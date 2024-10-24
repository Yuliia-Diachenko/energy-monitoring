import mongoose from "mongoose";

const plantsThermalSchema = new mongoose.Schema(
  {
    DateStart: {
      type: Number,
      required: true,
    },
    DateEnd: {
      type: Number,
      required: true,
    },
    Year: {
      type: Number,
      required: true,
    },
    PowerPlantType: {
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
    HeatOutputAmount: {
      type: Number,
      required: true,
    }
  },
  { timestamps: true }
);

export const PlantsThermalCollection = mongoose.model("Thermal", plantsThermalSchema);
