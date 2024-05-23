/*
  Warnings:

  - You are about to drop the `_CompanyToUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_CompanyToUser` DROP FOREIGN KEY `_CompanyToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_CompanyToUser` DROP FOREIGN KEY `_CompanyToUser_B_fkey`;

-- DropTable
DROP TABLE `_CompanyToUser`;

-- AddForeignKey
ALTER TABLE `Company` ADD CONSTRAINT `Company_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
