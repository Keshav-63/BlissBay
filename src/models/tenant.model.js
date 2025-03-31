import mongoose from "mongoose";

const TenantSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    contactPerson: {
      type: String,
      default: null,
    },
    phone: {
      type: String,
      default: null,
    },
    email: {
      type: String,
      default: null,
    },
    leaseStart: {
      type: Date,
      default: null,
    },
    leaseEnd: {
      type: Date,
      default: null,
    },
    rentAmount: {
      type: Number,
      default: null,
      min: 0,
    },
    status: {
      type: String,
      required: true,
      enum: ["active", "inactive"],
      default: "active",
    },
  },
  { timestamps: true }
);

const Tenant = mongoose.model("Tenant", TenantSchema);
export default Tenant;
