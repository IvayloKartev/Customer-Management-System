/*
  Warnings:

  - You are about to drop the column `ownerId` on the `Company` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `Company` DROP FOREIGN KEY `Company_ownerId_fkey`;

-- AlterTable
ALTER TABLE `Company` DROP COLUMN `ownerId`;

-- CreateTable
CREATE TABLE `CompanyOnUsers` (
    `userId` INTEGER NOT NULL,
    `companyId` INTEGER NOT NULL,

    PRIMARY KEY (`userId`, `companyId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CompanyOnUsers` ADD CONSTRAINT `CompanyOnUsers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CompanyOnUsers` ADD CONSTRAINT `CompanyOnUsers_companyId_fkey` FOREIGN KEY (`companyId`) REFERENCES `Company`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
