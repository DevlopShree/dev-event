import mongoose, { Schema, Document, Model } from "mongoose";

/**
 * IEvent defines the TypeScript shape of an Event document.
 * This ensures full type safety across the app.
 */
export interface IEvent extends Document {
  title: string;
  slug: string;
  description: string;
  overview: string;
  image: string;
  venue: string;
  location: string;
  date: string;   // ISO date string (normalized in pre-save hook)
  time: string;   // HH:mm format (normalized)
  mode: "online" | "offline" | "hybrid";
  audience: string;
  agenda: string[];
  organizer: string;
  tags: string[];
  createdAt: Date;
  updatedAt: Date;
}

/**
 * Event schema definition with strict field types and validations.
 */
const EventSchema = new Schema<IEvent>(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    // Unique slug used in URLs
    slug: {
      type: String,
      unique: true,
      index: true,
    },

    description: {
      type: String,
      required: true,
      trim: true,
    },

    overview: {
      type: String,
      required: true,
      trim: true,
    },

    image: {
      type: String,
      required: true,
      trim: true,
    },

    venue: {
      type: String,
      required: true,
      trim: true,
    },

    location: {
      type: String,
      required: true,
      trim: true,
    },

    // Stored as ISO string after normalization
    date: {
      type: String,
      required: true,
    },

    // Stored as HH:mm after normalization
    time: {
      type: String,
      required: true,
    },

    // Restrict mode to allowed values
    mode: {
      type: String,
      enum: ["online", "offline", "hybrid"],
      required: true,
    },

    audience: {
      type: String,
      required: true,
      trim: true,
    },

    // List of agenda points for the event
    agenda: {
      type: [String],
      default: [],
    },

    organizer: {
      type: String,
      required: true,
      trim: true,
    },

    // Optional tags for filtering/searching
    tags: {
      type: [String],
      default: [],
    },
  },
  {
    // Automatically manages createdAt and updatedAt
    timestamps: true,
  }
);

/**
 * Converts a string into a URL-friendly slug.
 * Example: "My Event Title" -> "my-event-title"
 */
const slugify = (text: string): string =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

/**
 * Pre-save hook:
 * - Generates slug from title (only if title changes)
 * - Validates required string fields are non-empty
 * - Normalizes date to ISO format
 * - Normalizes time to HH:mm format
 */
EventSchema.pre<IEvent>("save", function (next) {
  // Regenerate slug only when title is modified
  if (this.isModified("title")) {
    this.slug = slugify(this.title);
  }

  // Validate required string fields
  const requiredFields: Array<keyof IEvent> = [
    "title",
    "description",
    "overview",
    "image",
    "venue",
    "location",
    "date",
    "time",
    "audience",
    "organizer",
  ];

  for (const field of requiredFields) {
    const value = this[field];
    if (typeof value !== "string" || value.trim().length === 0) {
      throw new Error(`Field '${field}' is required and cannot be empty.`);
    }
  }

   // Normalize date to ISO
  const parsedDate = new Date(this.date);
  if (isNaN(parsedDate.getTime())) {
    throw new Error("Invalid date format for 'data'.");
  }
  this.date = parsedDate.toISOString();

  // Normalize time to HH:mm
  const timeMatch = this.time.match(/^(\d{1,2}):(\d{2})$/);
  if (!timeMatch) {
    throw new Error("Time must be in HH:mm format.");
  }
  const hh = timeMatch[1].padStart(2, "0");
  const mm = timeMatch[2];
  this.time = `${hh}:${mm}`;
});

/**
 * Reuse model if already compiled (important for Next.js hot reload).
 */
export const Event: Model<IEvent> =
  mongoose.models.Event || mongoose.model<IEvent>("Event", EventSchema);
