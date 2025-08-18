import { integer, real, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const location = sqliteTable("location", {
  id: integer("id").primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(),
  description: text("description"),
  lat: real("lat").notNull(),
  long: real("long").notNull(),
  createdAt: integer("createdAT").notNull().$default(() => Date.now()),
  updatedAt: integer("updatedAt").notNull().$default(() => Date.now()).$onUpdate(() => Date.now()),
});
