import mongoose from 'mongoose';

/**
 * Global type augmentation to include mongoose cache on the global object.
 * This is necessary for caching the connection across hot reloads in development.
 */
declare global {
   var mongoose: {
      conn: mongoose.Connection | null;
      promise: Promise<mongoose.Connection> | null;
   };
}

/**
 * MongoDB connection URI from environment variables.
 * Throws an error if not defined to ensure proper configuration.
 */
const MONGODB_URI: string = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
   throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

/**
 * Cached connection object to prevent multiple connections in development/serverless environments.
 */
let cached = global.mongoose;

if (!cached) {
   cached = global.mongoose = { conn: null, promise: null };
}

/**
 * Establishes and caches a Mongoose database connection.
 * Returns the existing connection if already established, otherwise creates a new one.
 *
 * @returns Promise resolving to the Mongoose connection object.
 */
async function connectToDatabase(): Promise<mongoose.Connection> {
   // Return cached connection if available
   if (cached.conn) {
      return cached.conn;
   }

   // Create a new connection promise if none exists
   if (!cached.promise) {
      const opts: mongoose.ConnectOptions = {
         bufferCommands: false, // Disable mongoose buffering
      };

      cached.promise = mongoose.connect(MONGODB_URI, opts).then((mongooseInstance) => {
         return mongooseInstance.connection;
      });
   }

   try {
      // Await the connection promise and cache the result
      cached.conn = await cached.promise;
   } catch (error) {
      // Reset promise on error to allow retry
      cached.promise = null;
      throw error;
   }

   return cached.conn;
}

export default connectToDatabase;
