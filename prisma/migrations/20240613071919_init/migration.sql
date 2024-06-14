/*
  Warnings:

  - You are about to alter the column `name` on the `entity` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `entity` MODIFY `name` ENUM('SASPS', 'SASPN', 'SPECIALUNIT', 'DOA', 'CRIME', 'PS', 'HP', 'K9', 'HRT') NOT NULL;
