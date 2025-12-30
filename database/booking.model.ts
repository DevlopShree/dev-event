import mongoose, { Schema, Document, Model, Types } from "mongoose";
import { Event } from "./event.model";

/**
 * IBooking defines the shape of a Booking document.
 */
export interface IBooking extends Document {
  eventId: Types.ObjectId;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Regex for basic email validation.
 */
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Booking schema for event reservations.
 */
const BookingSchema = new Schema<IBooking>(
  {
    eventId: {
      type: Schema.Types.ObjectId,
      ref: "Event",
      required: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      match: [emailRegex, "Invalid email format."],
    },
  },
  {
    timestamps: true,
  }
);

/* -------------------------------------------------------------------------- */
/*                                   Indexes                                  */
/* -------------------------------------------------------------------------- */

// Fast lookups for all bookings of a given event
BookingSchema.index({ eventId: 1 });

// Common pattern: get latest bookings for an event
BookingSchema.index({ eventId: 1, createdAt: -1 });

// Lookup bookings by user email
BookingSchema.index({ email: 1 });

/* -------------------------------------------------------------------------- */
/*                              Pre-save Hook                                 */
/* -------------------------------------------------------------------------- */

/**
 * Pre-save hook:
 * - Validates email format
 * - Ensures referenced Event exists before saving
 */
BookingSchema.pre<IBooking>("save", async function () {
  if (!emailRegex.test(this.email)) {
    throw new Error("Invalid email format.");
  }

  // Verify that the eventId refers to an existing Event document
  const exists = await Event.exists({ _id: this.eventId });
  if (!exists) {
    throw new Error("Referenced event does not exist.");
  }
});

/**
 * Reuse model in dev to avoid recompilation errors in Next.js.
 */
export const Booking: Model<IBooking> =
  mongoose.models.Booking ||
  mongoose.model<IBooking>("Booking", BookingSchema);
