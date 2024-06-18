/*
  Warnings:

  - You are about to drop the column `agentId` on the `civilian` table. All the data in the column will be lost.
  - Added the required column `civilianId` to the `Agent` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `civilian` DROP FOREIGN KEY `Civilian_agentId_fkey`;

-- AlterTable
ALTER TABLE `agent` ADD COLUMN `civilianId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `civilian` DROP COLUMN `agentId`;

-- AddForeignKey
ALTER TABLE `Agent` ADD CONSTRAINT `Agent_civilianId_fkey` FOREIGN KEY (`civilianId`) REFERENCES `Civilian`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
