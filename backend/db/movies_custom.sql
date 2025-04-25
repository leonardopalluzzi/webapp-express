-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: movie_db
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `messages` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `thread_id` int unsigned NOT NULL,
  `username` varchar(45) NOT NULL,
  `content` text NOT NULL,
  `creation_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `thread_id_idx` (`thread_id`),
  CONSTRAINT `thread_id` FOREIGN KEY (`thread_id`) REFERENCES `threads` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,1,'davide','asdgasdfg','2025-04-22 00:00:00'),(2,1,'pippo','asdfgasd','2025-04-22 00:00:00'),(3,1,'leonardo','sdfghdfgasdfa','2025-04-22 00:00:00'),(4,1,'leonardo','molto carino','2025-04-24 01:43:04'),(5,3,'leonardo','i think that too ','2025-04-24 01:51:19'),(6,3,'leonardo','absolute cinema','2025-04-24 01:51:49'),(7,3,'leonardo','ottima la performance del protagonista secondo me, ma anche la regia e spettacolare','2025-04-24 01:52:32'),(8,3,'leonardo','grande giuseppe, best regista','2025-04-24 01:53:15'),(9,2,'leonardo','molto figo','2025-04-24 01:54:07'),(10,2,'leonardo','bha dai poteva esse meglio','2025-04-24 02:00:00'),(11,2,'leonardo','wow','2025-04-24 02:01:33'),(12,2,'leonardo','tanta roba','2025-04-24 02:02:06'),(13,2,'leonardo','','2025-04-24 02:03:24'),(14,2,'leonardo','xfsghdfg\n','2025-04-24 02:06:28'),(15,3,'leonardo','asdga','2025-04-24 02:07:49'),(16,6,'asdf','like the best gate in the world','2025-04-24 23:52:15'),(17,2,'leonardo','','2025-04-25 02:05:17'),(18,2,'leonardo','adfgasdfh','2025-04-25 02:08:45'),(19,7,'leonardo','meh...','2025-04-25 02:11:38');
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `movies`
--

DROP TABLE IF EXISTS `movies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `movies` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `director` varchar(255) NOT NULL,
  `genre` varchar(255) DEFAULT NULL,
  `release_year` year DEFAULT NULL,
  `abstract` text,
  `image` varchar(255) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `movies`
--

LOCK TABLES `movies` WRITE;
/*!40000 ALTER TABLE `movies` DISABLE KEYS */;
INSERT INTO `movies` VALUES (1,'Inception','Christopher Nolan','Science Fiction',2010,'A skilled thief is given a chance at redemption if he can successfully perform inception.','inception.jpg','2024-11-29 10:40:13','2025-04-22 20:54:02'),(4,'The Matrix','The Wachowskis','Action',1999,'A hacker discovers the truth about his reality and his role in the war against its controllers.','matrix.jpg','2024-11-29 10:40:13','2025-04-15 13:35:54'),(8,'caldaia 2 reborn','fiamma','idraulica',NULL,'caldaia turbo diesel','1745412267213-IMG_7678.jpg','2025-04-23 09:38:35','2025-04-23 12:52:31'),(9,'citofono','dario fo','fantasy',NULL,'il citofono supremo galattico','1745412422919-IMG_7670.jpg','2025-04-23 12:47:02','2025-04-23 12:52:04'),(10,'Tubo 2 la vendetta','pippo franco','sci-fi',NULL,'il tubo malefico','1745413091121-IMG_7676.jpg','2025-04-23 12:53:28','2025-04-23 12:58:11'),(11,'il cancelletto matto','mike buongiorno','commedia',NULL,'il cancelletto piu matto de roma','1745413356612-IMG_7674.jpg','2025-04-23 13:02:36','2025-04-23 13:02:36'),(14,'il vialetto 2','cicciogamer','commedia',NULL,'vialetto fenomenale','1745415158500-IMG_7673.jpg','2025-04-23 13:32:38','2025-04-23 13:32:38'),(15,'Davide vs Roma','Giuseppe Colucci','documentario',2025,'davide, il prode guerriero, che affronta una legione di romani omosessuali','1745421473043-davidevsroma.jpg','2025-04-23 14:40:53','2025-04-23 15:17:53');
/*!40000 ALTER TABLE `movies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reviews`
--

DROP TABLE IF EXISTS `reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `reviews` (
  `id` int NOT NULL AUTO_INCREMENT,
  `movie_id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `vote` tinyint NOT NULL,
  `text` text,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_movie` (`movie_id`),
  CONSTRAINT `fk_movie` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`) ON DELETE CASCADE,
  CONSTRAINT `reviews_chk_1` CHECK ((`vote` between 1 and 5))
) ENGINE=InnoDB AUTO_INCREMENT=91 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reviews`
--

LOCK TABLES `reviews` WRITE;
/*!40000 ALTER TABLE `reviews` DISABLE KEYS */;
INSERT INTO `reviews` VALUES (1,1,'Alice',5,'A mind-bending masterpiece.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(2,1,'Bob',4,'Great visuals and a compelling story.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(3,1,'Charlie',3,'Confusing at times, but worth watching.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(10,4,'Jack',5,'A revolutionary film in every sense.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(11,4,'Karen',4,'Great action and a thought-provoking plot.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(12,4,'Liam',4,'A unique take on reality and perception.','2024-11-29 10:40:13','2024-11-29 10:40:13'),(16,1,'pippo',4,'newComment','2025-04-16 15:27:34','2025-04-16 15:27:34'),(17,1,'pippo',4,'newComment','2025-04-16 15:34:35','2025-04-16 15:34:35'),(18,1,'pippo',4,'newComment','2025-04-16 15:35:43','2025-04-16 15:35:43'),(32,4,'pippo',4,'sdfg','2025-04-16 17:16:20','2025-04-16 17:16:20'),(39,4,'pippo',4,'asdf','2025-04-16 20:25:08','2025-04-16 20:25:08'),(40,4,'asdf',4,'asdggadgf','2025-04-16 20:26:25','2025-04-16 20:26:25'),(41,4,'leonardo',4,'bello zi te lascio sto commento matto','2025-04-16 20:26:51','2025-04-16 20:26:51'),(44,1,'asdf',4,'asdfg','2025-04-17 08:09:35','2025-04-17 08:09:35'),(45,1,'asdf',4,'ciao chicco','2025-04-17 08:09:42','2025-04-17 08:09:42'),(58,1,'asdf',4,'commento loggato dopo refresh','2025-04-17 08:27:34','2025-04-17 08:27:34'),(59,1,'asdf',4,'asdfgsdfgh','2025-04-17 13:27:13','2025-04-17 13:27:13'),(60,1,'asdf',4,'asdfasdf','2025-04-17 13:59:46','2025-04-17 13:59:46'),(62,1,'asdf',3,'asdfgsdfghsdfgsd','2025-04-17 14:54:44','2025-04-17 14:54:44'),(63,1,'asdf',3,'adfgsdfhasdfa','2025-04-17 14:54:58','2025-04-17 14:54:58'),(64,1,'asdf',2,'sfdghasdfgadfg','2025-04-17 14:55:01','2025-04-17 14:55:01'),(65,1,'asdf',4,'dsfghsdfgsdfg','2025-04-17 14:55:16','2025-04-17 14:55:16'),(66,4,'asdf',5,'adsfgadfh','2025-04-17 15:01:39','2025-04-17 15:01:39'),(67,4,'asdf',2,'sdfghhsdfh','2025-04-17 15:01:47','2025-04-17 15:01:47'),(71,1,'asdf',1,'ciao chicco','2025-04-17 23:14:10','2025-04-17 23:14:10'),(72,1,'asdf',1,'sdfhfghdfgh','2025-04-17 23:17:21','2025-04-17 23:17:21'),(73,1,'asdf',2,'sdfhsdfgh','2025-04-17 23:17:37','2025-04-17 23:17:37'),(74,1,'asdf',4,'sfdghsdfgh','2025-04-17 23:18:01','2025-04-17 23:18:01'),(75,1,'asdf',4,'adsfgsdfg','2025-04-17 23:26:46','2025-04-17 23:26:46'),(76,1,'asdf',2,'commento con ui migliorata','2025-04-17 23:26:59','2025-04-17 23:26:59'),(77,1,'leonardo',3,'adfgadf','2025-04-19 12:29:13','2025-04-19 12:29:13'),(80,1,'giacomo',3,'ciao sono giacomo','2025-04-19 18:36:30','2025-04-19 18:36:30'),(82,1,'asdf',3,'fghsdffgsdfg','2025-04-22 21:35:55','2025-04-22 21:35:55'),(84,8,'leonardo',3,'primo commento','2025-04-23 12:51:20','2025-04-23 12:51:20'),(85,8,'leonardo',5,'secondo commento','2025-04-23 12:51:35','2025-04-23 12:51:35'),(86,10,'leonardo',4,'ottimo film','2025-04-23 13:01:59','2025-04-23 13:01:59'),(87,15,'leonardo',3,'opera omerica direi, complimenti al regista','2025-04-23 14:41:17','2025-04-23 14:41:17'),(88,15,'leonardo',5,'errata corrige rating','2025-04-23 14:41:27','2025-04-23 14:41:27'),(89,9,'leonardo',5,'figata','2025-04-24 00:22:38','2025-04-24 00:22:38'),(90,11,'leonardo',4,'che cancello assurdo','2025-04-25 00:15:50','2025-04-25 00:15:50');
/*!40000 ALTER TABLE `reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `threads`
--

DROP TABLE IF EXISTS `threads`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `threads` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `movie_id` int NOT NULL,
  `title` varchar(150) NOT NULL,
  `username` varchar(45) NOT NULL,
  `creation_date` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  KEY `movie_id_idx` (`movie_id`),
  CONSTRAINT `movie_id` FOREIGN KEY (`movie_id`) REFERENCES `movies` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `threads`
--

LOCK TABLES `threads` WRITE;
/*!40000 ALTER TABLE `threads` DISABLE KEYS */;
INSERT INTO `threads` VALUES (1,1,'i like this movie and you?','leonardo','2025-04-23 18:28:51'),(2,1,'i did\'t like the photography, what do you think?','leonardo','2025-04-23 18:31:28'),(3,15,'best film in the db in my opinion','leonardo','2025-04-24 01:21:18'),(4,15,'what about the ending?','leonardo','2025-04-24 02:21:04'),(5,9,'miglior film secondo me','leonardo','2025-04-24 02:22:47'),(6,11,'what a gate dude','asdf','2025-04-24 23:51:59'),(7,10,'do you think it is a good film?','leonardo','2025-04-25 02:11:20');
/*!40000 ALTER TABLE `threads` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(60) NOT NULL,
  `is_admin` tinyint unsigned NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`),
  UNIQUE KEY `username_UNIQUE` (`username`),
  UNIQUE KEY `password_UNIQUE` (`password`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (2,'sdf','$2b$10$UXMW8PH/i8MdhN1eNAFuve3tqtuLwCticVR2Yxi.iXdmQl3MZV/Cu',0),(3,'asdf','$2b$10$GMkKl6/1eoVsoYTXvP5kZe5Yw9JIbwcutxUMx0TB6lk5cy94n.CAe',0),(8,'ciao','$2b$10$oVsjsCP0QnC9.MsQrYJ6guFx9pGDPkRTPwmMwBS3p.9EStq301Twu',0),(13,'dfghdfgh','$2b$10$ABYpUpfn3rSHb3gnQM8up.SKiMky3eGuFoaV4V01ro5ax4EY9wAWy',0),(14,'qwerqwe','$2b$10$FN7m9sVA12ha4fza.xmB4ev38V2DoiViwYEDOqbe9S5DFfWI5I4v2',0),(15,'qwer','$2b$10$bhinmTWnQJtv2nETfGBpi.hcP01x5HoFjzUnWAc5eQexyswK.7wdG',0),(16,'dfg','$2b$10$OTbvklFjFv4QtKto.HtdQOhGv7/lqsrkgmfcBhMGfTvZtxtSYRlOC',0),(17,'zxcv','$2b$10$iElrj3GFsvXZrqsNzivoSeF937AJSOb/QnzI0ojrg0XPIcEIrbcES',0),(18,'cvbnm','$2b$10$FMrtghP.9D6tIB.nchEsgOgGfhOiwDfXv.AZ9zireFIF5I/x.ZE4q',0),(26,'dorotea','$2b$10$Y4W8JHVrRQ4HRMuQlkrz8eFUrY./PWxQv6M2mG7gQBWtfYLak0z2O',0),(27,'giuseppe','$2b$10$BjC9I7EcWC7ehK62XYXiFuJ45nQwMralUotuwPCiYW5rKD9dMPWAe',0),(30,'leonardo','$2b$10$QCK/B761yIrsc44oqMFMoO5A0X2dCOmTTFbjhR7QJKQFECYl72QH6',1),(31,'federico','$2b$10$8VqFLMdt4ZahhsorXU7luuztEx8AiOtU5oZUxyN/A16hK/xW3lafS',0),(33,'giacomo','$2b$10$vmuAbQm1Au0xC2MmnUaHfOrKJcKhTJFv0jTTWO.yAPV.ujyg8lXgC',0),(34,'ciaocoso','$2b$10$PhJh48e4T/He2.v6oEIjeO8UmbGDR2Tm5a0B.Vcz6YmhlvitB3Jje',0),(35,'chjicco matto','$2b$10$L/mrPQQOR0wwhBD3BnKs.O.ueRToCuiMba/96Z004tVQg5YDQnVhO',0),(36,'amicomio','$2b$10$AIcm25C7zH3FHq8FHvenge.1Y/DXtOmEotyNQl756YSbGiw0bMHne',0),(37,'davide','$2b$10$y.KaObD75IMHnLyEP.I25uQsUS01K/4dHyW2CZhjAuf40/ZMqhODK',0);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-25  2:20:41
