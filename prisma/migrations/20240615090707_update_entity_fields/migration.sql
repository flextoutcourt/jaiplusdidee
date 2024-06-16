/*
  Warnings:

  - You are about to alter the column `name` on the `entity` table. The data in that column could be lost. The data in that column will be cast from `Enum(EnumId(0))` to `VarChar(191)`.
  - You are about to alter the column `code` on the `entity` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `entity` MODIFY `name` VARCHAR(191) NOT NULL,
    MODIFY `code` ENUM('SASPS', 'SASPN', 'SPECIALUNIT', 'DOA', 'CRIME', 'PS', 'HP', 'K9', 'HRT') NOT NULL;
