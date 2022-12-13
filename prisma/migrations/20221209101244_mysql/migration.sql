-- AlterTable
ALTER TABLE `user` ADD COLUMN `deletedDate` DATETIME(3) NULL,
    ADD COLUMN `email` VARCHAR(191) NULL;

-- CreateTable
CREATE TABLE `friend` (
    `id` INTEGER NOT NULL,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `friend_senderId_key`(`senderId`),
    UNIQUE INDEX `friend_receiverId_key`(`receiverId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conversation` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` INTEGER NULL,
    `updatedDate` DATETIME(3) NULL,
    `updatedBy` INTEGER NULL,
    `deletedDate` DATETIME(3) NULL,
    `creator` INTEGER NOT NULL,
    `recipient` INTEGER NOT NULL,
    `lastMessageSentAt` DATETIME(3) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` INTEGER NULL,
    `updatedDate` DATETIME(3) NULL,
    `updatedBy` INTEGER NULL,
    `deletedDate` DATETIME(3) NULL,
    `content` VARCHAR(191) NOT NULL,
    `authorId` INTEGER NOT NULL,
    `conversationId` INTEGER NOT NULL,
    `lastMessageId` INTEGER NULL,

    UNIQUE INDEX `message_lastMessageId_key`(`lastMessageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messageAttachment` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` INTEGER NULL,
    `updatedDate` DATETIME(3) NULL,
    `updatedBy` INTEGER NULL,
    `deletedDate` DATETIME(3) NULL,
    `messageId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `fileUpload` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` INTEGER NOT NULL,
    `updatedDate` DATETIME(3) NULL,
    `updatedBy` INTEGER NULL,
    `deletedDate` DATETIME(3) NULL,
    `fileName` VARCHAR(255) NOT NULL,
    `baseUrl` VARCHAR(255) NOT NULL,
    `messageAttachmentId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `groups` ADD CONSTRAINT `groups_creatorId_fkey` FOREIGN KEY (`creatorId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `groups` ADD CONSTRAINT `groups_ownerId_fkey` FOREIGN KEY (`ownerId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friend` ADD CONSTRAINT `friend_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friend` ADD CONSTRAINT `friend_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `conversation` ADD CONSTRAINT `conversation_creator_fkey` FOREIGN KEY (`creator`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `conversation` ADD CONSTRAINT `conversation_recipient_fkey` FOREIGN KEY (`recipient`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `conversation`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `message` ADD CONSTRAINT `message_lastMessageId_fkey` FOREIGN KEY (`lastMessageId`) REFERENCES `conversation`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `messageAttachment` ADD CONSTRAINT `messageAttachment_messageId_fkey` FOREIGN KEY (`messageId`) REFERENCES `message`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `fileUpload` ADD CONSTRAINT `fileUpload_messageAttachmentId_fkey` FOREIGN KEY (`messageAttachmentId`) REFERENCES `messageAttachment`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
