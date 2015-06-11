-- MySQL dump 10.13  Distrib 5.6.23, for Win64 (x86_64)
--
-- Host: localhost    Database: adportal
-- ------------------------------------------------------
-- Server version	5.6.24-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `adinfo`
--

DROP TABLE IF EXISTS `adinfo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `adinfo` (
  `ad_id` int(11) NOT NULL AUTO_INCREMENT,
  `AdTitle` varchar(500) DEFAULT NULL,
  `Description` text,
  `PhotosLinkCSV` text,
  `AdType` varchar(50) DEFAULT NULL,
  `Category` varchar(50) DEFAULT NULL,
  `SubCategory` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`ad_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `adinfo`
--

LOCK TABLES `adinfo` WRITE;
/*!40000 ALTER TABLE `adinfo` DISABLE KEYS */;
INSERT INTO `adinfo` VALUES (4,'Need one roomate near balewadi','{\"description\":\"Room has all basic amenities room rent Rs 600 p/m\",\"email\":\"aqwr@msa.com\"}',NULL,'Sell','Realestate',NULL),(5,'Vacancy for one room near baner','{\"description\":\"Room is availlable from 1st of july. Flat has all facilities including cook, maid, wifi, freeze, washing machine. 24 hours water supply. Room rent Rs. 6300 p/m.\",\"email\":\"hskn@sowl.com\"}',NULL,'Sell','Realestate',NULL),(6,'sdg','{\"description\":\"dsfgfdg\",\"email\":\"dgf@asd.com\"}',NULL,'Sell','CarBike',NULL),(7,'Honda CBR 2013 model for sell','{\"description\":\"BIke is in good condition. Price is 60,000/- (negotiable). Contact me through my mentioned email id.\",\"email\":\"afj@dc.com\"}',NULL,'Sell','CarBike',NULL),(8,'Yahama Fazer 2.0 for sell','{\"description\":\"Only 1K distance travelled and bike is in very good condition. Price is 62,000/-. Reason to sell : going abroad. Contact me through my mentioned email id.\",\"email\":\"ajf@dkc.com\"}',NULL,'Sell','CarBike',NULL),(9,'Yahama FZ for sell','{\"description\":\"New bike only 2k traveled. Bike is 2014 model and have all documents. Price is 56,000/- (Not negotiable). Contact me through my below mentioned email id.\",\"email\":\"akf@scx.com\"}',NULL,'Sell','CarBike',NULL);
/*!40000 ALTER TABLE `adinfo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-06-11 10:22:51
