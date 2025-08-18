import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { user } from "./auth";
import { location } from "./location";

export const locationLog = sqliteTable("locationLog", {
  id: integer().primaryKey({ autoIncrement: true }),
  name: text().notNull(),
  description: text(),
  startedAt: integer().notNull().$default(() => Date.now()),
  lat: real().notNull(),
  long: real().notNull(),
  userId: integer().notNull().references(() => user.id, { onDelete: "cascade" }),
  createdAt: integer().notNull().$default(() => Date.now()),
  updatedAt: integer().notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
  locationId: integer().notNull().references(() => location.id, { onDelete: "cascade" }),
});
