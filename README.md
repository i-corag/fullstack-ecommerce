# Full Stack Ecommerce Web App

[KOFFIE](https://ecommerce-fontend.vercel.app/) - Visit the website! ☕️ 🤎

The frontend is a **React App** bootstrapped with **Vite**.
The backend was built with **Node.js** and **Express.js**
The database is **MySQL.**

- Libraries used on the client side:
  **Axios, Zustand, React Query, React Router, React Hook Form, Yup, Tailwind CSS**
- Libraries used on the server side:
  **Express-session, Cookie-parser, Body-parser, Bcrypt , Cors, Mysql2, Sequelize, Dotenv**

### ✨ App features:

- Browse categories, products and their details, filter by name and sort by price
- Add products to a wishlist
- Add products to cart and place order
- Register and login
- Also has an Admin Portal with CRUD operations for the products, categories, brands, users and orders.

### 🚀 In order to run this project you need to:

1. Create a schema is MySQL
2. git clone https://github.com/i-corag/fullstack-ecommerce.git
3. add some env on the server: SESSION_SECRET, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_PORT
4. Start the server to create the structure of your schema:

   ```sh
   cd server
   npm i
   npm run dev
   ```

5. You can add your own data into your mysql schema or import it using the script at then end of this file. You can also create a sequelize seeder [Sequelize-migrations](https://sequelize.org/docs/v6/other-topics/migrations/), which I haven't tried yet so if want to contribute... Thanksss! 🙌🏻🙌🏽🙌🏾🙌🏿

6. Start the client:

   ```sh
   cd client
   npm i
   npm run dev
   ```

## To import the data in your mysql schema

```sh

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
-- Dumping data for table `Brands`
--

LOCK TABLES `Brands` WRITE;
/*!40000 ALTER TABLE `Brands` DISABLE KEYS */;
INSERT INTO `Brands` VALUES ('0e6810785f72d208b5d3','BREVILLE','2023-05-12 17:51:58','2023-05-12 17:51:58'),('193b9774507b328444d8','VOLCANICA COFFEE','2023-05-12 22:02:22','2023-05-12 22:02:22'),('290f3040add15e298d61','LAGUNA PACIFIC','2023-05-12 22:03:23','2023-05-12 22:03:23'),('506182a266e70e70aa0f','ESPRO','2023-05-12 21:59:33','2023-05-12 21:59:33'),('65c031c48547959b9b86','CHEMEX','2023-05-12 22:00:38','2023-05-12 22:00:38'),('859d78fc8bdcbcbcd450','CAFES GUILIS','2023-05-12 22:01:55','2023-05-12 22:01:55'),('98ed76f01a58e6169334','AEROPRESS','2023-05-12 17:45:55','2023-05-12 17:45:55'),('bb20c03010dae4fb259a','GREEN COFFEE TRADERS','2023-05-12 22:01:30','2023-05-12 22:01:30'),('c011f5799b7cf0ee38fa','SUNWILL','2023-05-12 22:02:47','2023-05-12 22:02:47'),('c1f26199e20655303339','BIALETTI','2023-05-12 22:00:15','2023-05-12 22:00:15'),('c8ee736c07a26880243c','JOYJOLT','2023-05-12 22:03:09','2023-05-12 22:03:09'),('e04b3131073ff13f0fc4','HARIO','2023-05-12 21:58:49','2023-05-12 21:58:49');
/*!40000 ALTER TABLE `Brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Categories`
--

LOCK TABLES `Categories` WRITE;
/*!40000 ALTER TABLE `Categories` DISABLE KEYS */;
INSERT INTO `Categories` VALUES ('af69b84d61ff32464474','accessories','2023-05-12 17:42:56','2023-05-15 14:36:36'),('e7957ed842672530c482','grains','2023-05-12 17:41:02','2023-05-12 17:41:02'),('f42a566965e2d030a554','makers','2023-05-12 17:24:40','2023-05-12 17:24:40');
/*!40000 ALTER TABLE `Categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Orders`
--

LOCK TABLES `Orders` WRITE;
/*!40000 ALTER TABLE `Orders` DISABLE KEYS */;
INSERT INTO `Orders` VALUES ('94be4fa9d986689bf977','2023-05-15 23:14:04','2023-05-15 23:14:04','a48f807aa8f01f72f5b3');
/*!40000 ALTER TABLE `Orders` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Products`
--

LOCK TABLES `Products` WRITE;
/*!40000 ALTER TABLE `Products` DISABLE KEYS */;
INSERT INTO `Products` VALUES ('0dc144dda5b902654076','Micro Filters x 350 units','Compatible with both the AeroPress Original and AeroPress Go. Removes grit and they are biodegradable and compostable.',14.95,'https://cdn.shopify.com/s/files/1/0601/8783/6659/products/B000LTOCSG.AP.PaperFilters.1MainOption_1300x.jpg?v=1669355126','2023-05-12 22:17:22','2023-05-12 22:17:22','af69b84d61ff32464474','98ed76f01a58e6169334'),('2db97c11062b8508f946','V60 Ceramic Coffee Dripper','Specially designed to produce an evenly brewed cup of coffee. Durable Japanese ceramic retains heat to help ensure retain temperature throughout the brewing cycle. Specialty cone shape and unique spiral ridges allow for deeper layering of the coffee grounds, producing a deep, rich umami flavor.',24.5,'https://www.kitocoffee.com/images/products/brew/hario_plastic_dripper_01.jpg','2023-05-12 22:12:33','2023-05-12 22:12:33','f42a566965e2d030a554','e04b3131073ff13f0fc4'),('2e242a62aa724d9f3bd1','100% Jamaica Blue Mountain Coffee','The Blue Mountains of Jamaica provide ideal conditions for growing coffee. Small farms, set in the sheltered locations below the majestic rain forest, produce the world\'s finest coffee beans, handpicked with meticulous care.',35,'https://cdn.shopify.com/s/files/1/0043/8714/3773/products/GCT_-_1JBM_New_bag_1024x1024@2x.jpg?v=1549425150','2023-05-12 22:13:39','2023-05-12 22:13:39','e7957ed842672530c482','bb20c03010dae4fb259a'),('2e8c05b4b0cc716f41ff','Ethiopian Yirgacheffe and Kenya AA','100% Pure Ethiopian Coffee Beans - Yirgacheffe, Medium-bodied and brilliantly acidy with rough, fruity or winy tones. Thick body and an earthy aroma coupled with lemon, blueberry and blackberry notes. 100% Pure Kenya AA Coffee Beans with a rich body, pleasant vibrant acidity, fragrant aroma and flavor notes of raspberry, cranberry, fresh-cut redwood, alyssum-like flowers in aroma and cup.',37.99,'https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/41NQo95kecS._AC_SR300,300_.jpg','2023-05-12 22:14:06','2023-05-12 22:14:06','e7957ed842672530c482','193b9774507b328444d8'),('4a301b37273a8e315203','Cafe de Finca 100% Colombia Natural','Un café Premium procedente de las mejores fincas de Colombia. Tostado de forma natural con una curva de tueste desarrollada para este café, el resultado es una taza con un penetrante aroma afrutado y una nota de acidez natural.',25,'https://cafesguilis.com/wp-content/uploads/2022/04/cafes-guilis-origen-colombia-cafe-finca-aroma-afrutado-acidez-natural-cafe-grano-tueste-natural-10123-1.jpg','2023-05-12 22:13:54','2023-05-12 22:13:54','e7957ed842672530c482','859d78fc8bdcbcbcd450'),('4adbf6bfc3bed54c161b','Insulated Stainless Steel Mug with Lip','Coffee mug by Sunwill is with double wall vacuum insulation technology, keeping your favorite beverages hot for 3+ hours and cold for 9+ hours. Sweat proof, no condensation, burn free.',12.99,'https://m.media-amazon.com/images/I/71SGwRKiT2L._AC_SX679_.jpg','2023-05-12 22:16:42','2023-05-12 22:16:42','af69b84d61ff32464474','c011f5799b7cf0ee38fa'),('5b9109842c564c7019d4','Handblown Series','The Classic Series used together with the scientifically designed, patented CHEMEX® Bonded Filters, will guarantee that our pour over brewing process will deliver the perfect cup of coffee, without any sediments or bitter elements',115.45,'https://cdn.shopify.com/s/files/1/0435/0201/0530/products/cafetiere-chemex-larbre-a-cafe-accessoire-788583_5000x.jpg?v=1658161421','2023-05-12 22:13:16','2023-05-12 22:13:16','f42a566965e2d030a554','65c031c48547959b9b86'),('63cd58c13af3246bcb07','Double Wall Insulated Glass Coffee Cups','The double wall glass cups are perfect for hot or cold beverages. The elegant shape fits comfortably in your hand, and remains cool to the touch. This glass mugs are made of heat and condensation-resistant borosilicate glass and has a smooth finish.',24.99,'https://cdn.shopify.com/s/files/1/0321/0241/6515/products/JG10220-_3_1024x1024@2x.jpg?v=1580696937','2023-05-12 22:16:55','2023-05-12 22:16:55','af69b84d61ff32464474','c8ee736c07a26880243c'),('8029da83c62737e97a30','The Barista Express Impress','Experience third wave specialty coffee at home, made possible by the 4 keys formula. Designed to use the right dose of freshly grounds beans, ensure precise temperature control, optimal water pressure and create true microfoam milk essential for latte art. You\'re only a touch away.',719.96,'https://assets.breville.com/cdn-cgi/image/width=1300,format=auto/BES876/BES876BSS1BNA1/pdp_notag.png?pdp','2023-05-12 22:12:13','2023-05-12 22:12:13','f42a566965e2d030a554','0e6810785f72d208b5d3'),('a4c8a678fc8946f53921','Original Coffee Maker','Our patented technology produces the richest, smoothes coffee, cold brew, and espresso style drinks you\'ve ever tasted. Designed in Silicon Valley, Made in the USA.',39.95,'https://varuste.net/tiedostot/1/kuva/tuote/600/12842773.jpg','2023-05-12 22:13:27','2023-05-12 22:13:27','f42a566965e2d030a554','98ed76f01a58e6169334'),('a9ca991d705e6a8fd39c','French Press','Unlike other presses, the patented double micro-filter keeps your cup extraordinarily free of grit and sludge. Pressing the filter stops extraction completely, so your coffee doesn\'t get bitter over time. The last cup tastes just like the first.',69.95,'https://cdn.shopify.com/s/files/1/0580/1390/9171/products/FrenchPresses-P5Polished-MAIN.png?v=1635271807&width=1080','2023-05-12 22:12:46','2023-05-12 22:12:46','f42a566965e2d030a554','506182a266e70e70aa0f'),('b252a038eef2527de3ab','Bonded Unfolded Filters x 100 units','These filters will work and are designed, for all sizes and styles of Chemex Coffee Brewers except the small Chemex CM-1C & CM-1 models (pint size models) 1-3 Cup Coffee Makers. Chemex filters remove even the finest sediment particles as well as the undesirable oils and fats. The formulation of the filter permits the proper infusion time by regulating the filtration rate - not to slow, not too fast.',22.99,'https://m.media-amazon.com/images/I/51lQpH4-VfL._AC_SX679_.jpg','2023-05-12 22:17:47','2023-05-15 14:31:57','af69b84d61ff32464474','65c031c48547959b9b86'),('e864982d1bbd469e8924','Buono Drip Kettle','Stunning stainless steel stovetop kettle that\'s easy to use, and the slender gooseneck spout allows for a slow, steady, and controlled pour. Great for pour over, drip or manual coffee brewing.',44.5,'https://cdn.shopify.com/s/files/1/0065/2718/9028/products/VKB-120HSV_1000x1000.jpg?v=1610527517','2023-05-12 22:17:37','2023-05-12 22:17:37','af69b84d61ff32464474','e04b3131073ff13f0fc4'),('f91b3235990d804273c8','Express Moka','It is Made in Italy and its quality is enhanced by the patented safety valve which makes it easy to clean. Suitable for gas, electric and induction.',41.8,'https://www.bialetti.com/media/catalog/product/cache/e8aa104d064dcf81ed9afb1c9c6893f4/m/o/moka_express.png','2023-05-12 22:13:02','2023-05-12 22:13:02','f42a566965e2d030a554','c1f26199e20655303339'),('ffd64c07334e4f6b9292','Manual Coffee Bean Grinder','Introducing the ultimate manual coffee grinder for everyday coffee enthusiasts and connoisseurs alike. The ceramic conical burr grinding mechanism ensures a precise and consistent grind every time, while the dial with six coarseness settings allows for customization to suit your brewing method of choice.',29.99,'https://m.media-amazon.com/images/I/61VCCzxRHzL._AC_SX679_.jpg','2023-05-12 22:17:10','2023-05-12 22:17:10','af69b84d61ff32464474','290f3040add15e298d61');
/*!40000 ALTER TABLE `Products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Stocks`
--

LOCK TABLES `Stocks` WRITE;
/*!40000 ALTER TABLE `Stocks` DISABLE KEYS */;
/*!40000 ALTER TABLE `Stocks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `Users`
--

LOCK TABLES `Users` WRITE;
/*!40000 ALTER TABLE `Users` DISABLE KEYS */;
INSERT INTO `Users` VALUES ('1bbdc710f47b9e0b236e','Jose','jose@jose.com','$2b$10$HAkMZoVkvNfgzIk0K/DyCeZfdLjOSwYjqIT1KG1K4ad0mN3tgRM0i','Calle 45','3471354679','customer','2023-05-14 08:05:23','2023-05-14 08:05:23'),('a48f807aa8f01f72f5b3','Ivana','ivana@ivana.com','$2b$10$W.rx17Vu2OYcJyIrlgiOvOQ4bwFKE6QrmIDz4nL8iSDxVjG5k6PEi','calle 98','347131412','admin','2023-05-12 22:18:53','2023-05-12 22:18:53');
/*!40000 ALTER TABLE `Users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `brand_category`
--

LOCK TABLES `brand_category` WRITE;
/*!40000 ALTER TABLE `brand_category` DISABLE KEYS */;
/*!40000 ALTER TABLE `brand_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping data for table `order_product`
--

LOCK TABLES `order_product` WRITE;
/*!40000 ALTER TABLE `order_product` DISABLE KEYS */;
INSERT INTO `order_product` VALUES ('2023-05-15 23:14:04','2023-05-15 23:14:04','2e242a62aa724d9f3bd1','94be4fa9d986689bf977');
/*!40000 ALTER TABLE `order_product` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
```
