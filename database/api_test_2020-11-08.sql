# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.5.5-10.5.5-MariaDB)
# Database: api_test
# Generation Time: 2020-11-07 16:45:20 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table categories
# ------------------------------------------------------------

DROP TABLE IF EXISTS `categories`;

CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(256) NOT NULL,
  `description` text NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;

INSERT INTO `categories` (`id`, `name`, `description`, `created`, `modified`)
VALUES
	(1,'Fashion','Category for anything related to fashion.','2014-06-01 00:35:07','2014-05-31 05:34:33'),
	(2,'Electronics','Gadgets, drones and more.','2014-06-01 00:35:07','2014-05-31 05:34:33'),
	(3,'Motors','Motor sports and more','2014-06-01 00:35:07','2014-05-31 05:34:54'),
	(5,'Movies','Movie products.','0000-00-00 00:00:00','2016-01-09 02:27:26'),
	(6,'Books','Kindle books, audio books and more.','0000-00-00 00:00:00','2016-01-09 02:27:47'),
	(13,'Sports','Drop into new winter gear.','2016-01-09 02:24:24','2016-01-09 14:24:24');

/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table products
# ------------------------------------------------------------

DROP TABLE IF EXISTS `products`;

CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(32) NOT NULL,
  `description` text NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `category_id` int(11) NOT NULL,
  `created` datetime NOT NULL,
  `modified` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;

INSERT INTO `products` (`id`, `name`, `description`, `price`, `category_id`, `created`, `modified`)
VALUES
	(1,'LG P880 4X HD','My first awesome phone!',336,3,'2014-06-01 01:12:26','2014-06-01 05:12:26'),
	(2,'Google Nexus 4','The most awesome phone of 2013!',299,2,'2014-06-01 01:12:26','2014-06-01 05:12:26'),
	(3,'Samsung Galaxy S4','How about no?',600,3,'2014-06-01 01:12:26','2014-06-01 05:12:26'),
	(6,'Bench Shirt','The best shirt!',29,1,'2014-06-01 01:12:26','2014-05-31 14:12:21'),
	(7,'Lenovo Laptop','My business partner.',399,2,'2014-06-01 01:13:45','2014-05-31 14:13:39'),
	(8,'Samsung Galaxy Tab 10.1','Good tablet.',259,2,'2014-06-01 01:14:13','2014-05-31 14:14:08'),
	(9,'Spalding Watch','My sports watch.',199,1,'2014-06-01 01:18:36','2014-05-31 14:18:31'),
	(10,'Sony Smart Watch','The coolest smart watch!',300,2,'2014-06-06 17:10:01','2014-06-06 06:09:51'),
	(11,'Huawei Y300','For testing purposes.',100,2,'2014-06-06 17:11:04','2014-06-06 06:10:54'),
	(12,'Abercrombie Lake Arnold Shirt','Perfect as gift!',60,1,'2014-06-06 17:12:21','2014-06-06 06:12:11'),
	(13,'Abercrombie Allen Brook Shirt','Cool red shirt!',70,1,'2014-06-06 17:12:59','2014-06-06 06:12:49'),
	(26,'Another product','Awesome product!',555,2,'2014-11-22 19:07:34','2014-11-22 09:07:34'),
	(28,'Wallet','You can absolutely use this one!',799,6,'2014-12-04 21:12:03','2014-12-04 11:12:03'),
	(31,'Amanda Waller Shirt','New awesome shirt!',333,1,'2014-12-13 00:52:54','2014-12-12 14:52:54'),
	(42,'Nike Shoes for Men','Nike Shoes',12999,3,'2015-12-12 06:47:08','2015-12-12 18:47:08'),
	(48,'Bristol Shoes','Awesome shoes.',999,5,'2016-01-08 06:36:37','2016-01-08 18:36:37'),
	(60,'Rolex Watch','Luxury watch.',25000,1,'2016-01-11 15:46:02','2016-01-12 03:46:02');

/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;


# Dump of table short_urls
# ------------------------------------------------------------

DROP TABLE IF EXISTS `short_urls`;

CREATE TABLE `short_urls` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `long_url` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `short_code` varchar(25) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `hits` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

LOCK TABLES `short_urls` WRITE;
/*!40000 ALTER TABLE `short_urls` DISABLE KEYS */;

INSERT INTO `short_urls` (`id`, `long_url`, `short_code`, `hits`, `created`)
VALUES
	(1,'https://github.com/kalin5850/dictionary_reverse/blob/master/dict_reverse.py','4hysRAZ',NULL,'2020-08-08 18:05:45'),
	(2,'https://github.com/kalin5850/dictionary_reverse/blob/master/test/dict_reverse_test.py','4GxkD31',NULL,'2020-08-08 21:26:35'),
	(3,'http://www.codexworld.com/tutorials/php/','tkd2TPV',NULL,'2020-08-08 21:30:37');

/*!40000 ALTER TABLE `short_urls` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
