/*
  Warnings:

  - You are about to alter the column `action` on the `Log` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(0))`.

*/
-- AlterTable
ALTER TABLE `Log` MODIFY `action` ENUM('AddUser', 'DeleteUser', 'EditUser', 'AddCompany', 'DeleteCompany', 'EditCompany') NOT NULL;
