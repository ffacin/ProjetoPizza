/*
  Warnings:

  - Changed the type of `preco` on the `produto` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "produto" DROP COLUMN "preco",
ADD COLUMN     "preco" DOUBLE PRECISION NOT NULL;