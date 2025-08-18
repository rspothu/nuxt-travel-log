import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

import { location } from "./location";

export const locationLog = sqliteTable("locationLog", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  description: text("description"),
  startedAt: integer("startedAt").notNull().$default(() => Date.now()),
  lat: real("lat").notNull(),
  long: real("long").notNull(),
  createdAt: integer("createdAt").notNull().$default(() => Date.now()),
  updatedAt: integer("updatedAt").notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
  locationId: integer("locationId").notNull().references(() => location.id, { onDelete: "cascade" }),
});
