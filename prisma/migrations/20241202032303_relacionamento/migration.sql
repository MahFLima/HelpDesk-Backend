-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Solicitacao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "numero_patrimonio" TEXT NOT NULL,
    "descricao_problema" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "adm_id" INTEGER NOT NULL,
    "user_id" INTEGER NOT NULL,
    CONSTRAINT "Solicitacao_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Solicitacao_adm_id_fkey" FOREIGN KEY ("adm_id") REFERENCES "UserAdm" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Solicitacao" ("adm_id", "created_at", "descricao_problema", "id", "numero_patrimonio", "user_id") SELECT "adm_id", "created_at", "descricao_problema", "id", "numero_patrimonio", "user_id" FROM "Solicitacao";
DROP TABLE "Solicitacao";
ALTER TABLE "new_Solicitacao" RENAME TO "Solicitacao";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
