import mongoose from "mongoose";

const plantsThermalSchema = new mongoose.Schema({
    DateStart: {
      type: String, // зміна типу на String для нового формату дати
      required: true,
    },
    DateEnd: {
      type: String, // зміна типу на String для нового формату дати
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
    },
    Unit: {
      type: String,
      required: true,
      default: "MillionKWh",
    }
}, { timestamps: true });

export const PlantsThermalCollection = mongoose.model("Thermal", plantsThermalSchema);
