/*
  Warnings:

  - You are about to drop the column `civilianId` on the `agent` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `agent` DROP FOREIGN KEY `Agent_civilianId_fkey`;

-- DropForeignKey
ALTER TABLE `service` DROP FOREIGN KEY `Service_agentId_fkey`;

-- DropForeignKey
ALTER TABLE `service` DROP FOREIGN KEY `Service_entityId_fkey`;

-- AlterTable
ALTER TABLE `agent` DROP COLUMN `civilianId`;

-- AlterTable
ALTER TABLE `civilian` ADD COLUMN `agentId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Civilian` ADD CONSTRAINT `Civilian_agentId_fkey` FOREIGN KEY (`agentId`) REFERENCES `Agent`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_agentId_fkey` FOREIGN KEY (`agentId`) REFERENCES `Agent`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Service` ADD CONSTRAINT `Service_entityId_fkey` FOREIGN KEY (`entityId`) REFERENCES `Entity`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
