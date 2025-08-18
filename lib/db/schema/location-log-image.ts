import { integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { locationLog } from "./location-log";

export const locationLogImage = sqliteTable("locationLogImage", {
  id: integer().primaryKey({ autoIncrement: true }),
  key: text().notNull(),
  userId: integer().notNull().references(() => user.id, { onDelete: "cascade" }),
  createdAt: integer().notNull().$default(() => Date.now()),
  updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
  locationLogId: integer().notNull().references(() => locationLog.id, { onDelete: "cascade" }),
});
