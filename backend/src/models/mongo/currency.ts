import mongoose from "mongoose"

interface ICurrency {
  code: string;
  value: number;
  createdAt: Date;
  updatedAt: Date;
}

const currencySchema = new mongoose.Schema<ICurrency>(
  {
    code: {
      type: String,
      required: true,
    },
    value: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: true,
  }
)

export default mongoose.model("currency", currencySchema)
