-- CreateTable
CREATE TABLE `FinancialData` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `date` DATETIME(3) NOT NULL,
    `money` DECIMAL(65, 30) NOT NULL,

    UNIQUE INDEX `FinancialData_date_key`(`date`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
