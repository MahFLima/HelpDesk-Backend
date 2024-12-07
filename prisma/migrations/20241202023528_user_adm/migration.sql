/*
  Warnings:

  - Added the required column `email` to the `UserAdm` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_UserAdm" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "id_user" INTEGER NOT NULL,
    "email" TEXT NOT NULL,
    CONSTRAINT "UserAdm_id_user_fkey" FOREIGN KEY ("id_user") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_UserAdm" ("id", "id_user") SELECT "id", "id_user" FROM "UserAdm";
DROP TABLE "UserAdm";
ALTER TABLE "new_UserAdm" RENAME TO "UserAdm";
CREATE UNIQUE INDEX "UserAdm_id_user_key" ON "UserAdm"("id_user");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
