SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `category`;
CREATE TABLE `category`(`category` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,`counter` int NULL DEFAULT NULL,`id` int NOT NULL AUTO_INCREMENT,PRIMARY KEY (`id`) USING BTREE)ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Compact;
INSERT INTO `category` VALUES ('77', 250, 1);
INSERT INTO `category` VALUES ('76', 160, 2);
INSERT INTO `category` VALUES ('75', 200, 3);
SET FOREIGN_KEY_CHECKS = 1;