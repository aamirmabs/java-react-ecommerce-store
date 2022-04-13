-- -----------------------------------------------------
-- Schema full-stack-ecommerce
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `full-stack-ecommerce`;

CREATE SCHEMA `full-stack-ecommerce`;
USE `full-stack-ecommerce` ;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product_category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`product_category` (
`id` BIGINT(20) NOT NULL AUTO_INCREMENT,
`category_name` VARCHAR(255) NULL DEFAULT NULL,
PRIMARY KEY (`id`))
ENGINE=InnoDB
AUTO_INCREMENT = 1;

-- -----------------------------------------------------
-- Table `full-stack-ecommerce`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `full-stack-ecommerce`.`product` (
`id` BIGINT(20) NOT NULL AUTO_INCREMENT,
`sku` VARCHAR(255) DEFAULT NULL,
`name` VARCHAR(255) DEFAULT NULL,
`description` VARCHAR(1000) DEFAULT NULL,
`unit_price` DECIMAL(13,2) DEFAULT NULL,
`image_url` VARCHAR(255) DEFAULT NULL,
`active` BIT DEFAULT 1,
`units_in_stock` INT(11) DEFAULT NULL,
`date_created` DATETIME(6) DEFAULT NULL,
`last_updated` DATETIME(6) DEFAULT NULL,
`category_id` BIGINT(20) NOT NULL,
PRIMARY KEY (`id`),
KEY `fk_category` (`category_id`),
CONSTRAINT `fk_category` FOREIGN KEY (`category_id`) REFERENCES
`product_category` (`id`)
)
ENGINE=InnoDB
AUTO_INCREMENT = 1;


-- -----------------------------------------------------
-- Add sample data
-- -----------------------------------------------------

-- ID: 1
INSERT INTO product_category(category_name) VALUES ('INDOOR-PLANTS');
-- ID: 2
INSERT INTO product_category(category_name) VALUES ('OUTDOOR-PLANTS');
-- ID: 3
INSERT INTO product_category(category_name) VALUES ('TOOLS');
-- ID: 4
INSERT INTO product_category(category_name) VALUES ('ACCESSORIES');

-- Indoor Plants
INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
  'INDOOR-PLANT-1000',
  'Elephant Ear (Alocasia Zebrina) - 60-70cm Height',
  'Highly distinctive and exceptionally elegant, the Alocasia Zebrina is a true
  statement plant.

  Everything about this plant is eye-catching, from its bold, arrow-shaped leaves
  to the spectacular black and white stripes along its stems.

  Native to South East Asia, the Alocasia Zebrina is used to a warm, humid
  environment and plenty of bright, indirect, light. It is quite sensitive to cold
  so try and keep it somewhere warm and draught free (just make sure this isn’t
  near your radiator as that will cause it to crisp up).',
'assets/images/products/placeholder.png'
,1,100,19.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
  'INDOOR-PLANT-1001',
  'Cast Iron Plant (Aspidistra Eliator) - 60-70cm Height',
  'Effortlessly elegant and extremely hardy, the Cast Iron Plant is the perfect
  beginner’s houseplant.

  It gets its nickname from its reputation for being remarkably hardy, coping well
  with limited light and infrequent watering.

  The Aspidistra Eliator, to use its proper name, has been a popular houseplant
  since the Victorian times for this very reason: unlike most other exotic plants,
  it survived quite happily in the poor light and air quality of urban
  environments.',
'assets/images/products/placeholder.png'
,1,100,29.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
  'INDOOR-PLANT-1002',
  'Mistletoe Cactus (Rhipsalis Cashero) - 15-25cm Height',
  'With its quirky, sprawling foliage, the Mistletoe Cactus is a wonderfully
  distinctive houseplant.

  Interestingly, it’s the only cactus known to exist outside of North and South
  America, originating from certain parts of Africa and Asia. Due to this, it also
  behaves quite differently from other cacti, preferring a humid environment that
  a traditional cactus would hate.

  Due to its natural habitat, it also likes more frequent watering than other
  cacti; that said, you should still wait until the top several inches of soil are
  dry to the touch before then watering it well.',
'assets/images/products/placeholder.png'
,1,100,24.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
  'INDOOR-PLANT-1003',
  'Alocasia Regal Shield - 40-50cm Height',
  'With its giant, elegant leaves, the Alocasia Regal Shield is a majestic
  houseplant with real impact.

  Sitting atop vivid, pale green stems, its huge leaves have a dark green top and
  rich burgundy underside. Along the middle of each leaf runs vivid, pale green
  veining which looks spectacular when it catches the light.

  Like most Alocasia, it will be happiest in a warm, humid spot with plenty of
  bright but indirect light. Wait until the top couple of inches of soil have
  dried out before watering it thoroughly',
'assets/images/products/placeholder.png'
,1,100,29.99,1, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
  'INDOOR-PLANT-1004',
  'Swiss Cheese Plant (Monstera Deliciosa) - 50-60cm Height',
  'Renowned for its eye-catching split leaves, the Monstera has been a popular
  houseplant since the Victorian times.

  With its glossy, heart-shaped leaves and spectacular splits, this plant is a
  real head-turner thats also refreshingly easy to look after - perfect for if
  youre new to the world of houseplants.

  Monstera are hardy plants that can handle a decent amount of neglect, but if you
  want the very best for your plant then just follow these simple steps.',
'assets/images/products/placeholder.png'
,1,100,24.99,1, NOW());



-- Outdoor Plants
INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
'OUTDOOR-PLANT-1000',
'King Size Monstera Deliciosa',
'The Monstera Deliciosa truly is an interior design staple, being both easy to
care for and extremely aesthetically pleasing. This classic houseplant is often
called a ‘Swiss Cheese Plant’ due to having large holes in its lush, split
leaves - known as fenestrations. More mature specimens, such as this one, have
deeper and more pronounced fenestrations - providing a wonderfully tropical
feel!

🌞 Bright but indirect light is best - although it will also appreciate some
dappled sun from an East-facing window. It will tolerate lower light conditions,
but be mindful that dimmer lighting can slow growth.

💧 Enjoys fairly moist soil - water approximately once per week, or whenever the
top-soil feels dry.',
'assets/images/products/placeholder.png'
,1,100,19.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
'OUTDOOR-PLANT-1001',
'Strelitzia Nicolai',
'Also known as the "Bird of Paradise" plant, this plant can grow to 5-6ft and
produce beautiful flowers if cared for correctly. It has lovely, glossy foliage
and brings very tropical vibes to any indoor space. These babies can withstand
brighter light than many other lush tropicals, making them an ideal choice for
sprucing up a well-lit room.

🌞 Native to sunny South-Eastern Africa, It enjoys lots of bright light; mostly
bright but indirect light, with some direct sun, is preferable.

💧 Moist soil is important for this plant to flourish; water approximately every
10 days, or whenever the top couple inches of soil is dry. Ensure the soil
underneath does not dry out to avoid damaging the foliage and slowing growth.',
'assets/images/products/placeholder.png'
,1,100,29.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
'OUTDOOR-PLANT-1002',
'Kentia Palm',
'Kentia Palm is the perfect indoor palm, good in shady areas, can cope with
general neglect. It has gorgeous arching fronds, making it a brilliant statement
piece for any home. Native to Lord Howe Island, a small island off the coast of
Australia, this tropical looking beauty is both striking and functional, with
good air purifying qualities.

🌞 Bright indirect light is best for keeping this plant happy, although they can
tolerate shadier spots.

💧 Water approximately weekly; these palms enjoy lightly moist soil during the
growing season. During winter, allow the soil to dry a few inches down before
re-watering.',
'assets/images/products/placeholder.png'
,1,100,24.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
'OUTDOOR-PLANT-1003',
'Pachira Aquatica',
'Also known as the "Japanese Money Tree", the Pachira Aquatica is believed to
bring good luck and prosperity, and is often utilised by masters of Feng Shui to
create positive energy, or ‘chi’.

This specimen has an attractive, braided trunk and a crest of bushy, green
leaves, making a wonderful statement piece!

🌞 Bright but indirect light

💧 Only water when the soil becomes dry, approximately every 2 weeks. Check the
soil a few inches down using your finger before watering',
'assets/images/products/placeholder.png'
,1,100,29.99,2, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
'OUTDOOR-PLANT-1004',
'Dracaena Warneckii',
'The Dracaena is surprisingly easy to care for, as it is more drought resistant
than many houseplants! It has stunning green foliage with white stripes, giving
it a real retro feel.

💧 Native to tropical Africa, the Dracaena thrives best on regular watering, as
long as you allow the soil to dry completely before re-watering. When watering,
tip out any excess water to prevent the roots getting soggy.

🌞 Place in a medium lit space in the home, away from direct sunlight. Overly
warm spots should be avoided.

🧼 Wipe the leaves down regularly to keep it flourishing!',
'assets/images/products/placeholder.png'
,1,100,24.99,2, NOW());

-- Tools
INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
  'TOOL-1000',
  'Darlac Small Professional Bypass Pruner',
  'Do you find youself struggling with bigger secateurs? The Darlac Small Bypass
  Pruners are designed specifically for smaller hands, with the same strength and
  quality you expect from Darlac.',
'assets/images/products/placeholder.png'
,1,100,19.99,3, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
  'TOOL-1001',
  'Kent & Stowe Stainless Steel Hand Trowel',
  'A traditionally styled, high quality Kent & Stowe Hand Trowel made from
  stainless steel and beautiful ash wood. Featuring a cranked shaft to protect
  knuckles during work, this tool also has quality guaranteed with its 15 year
  guarantee.',
  'assets/images/products/placeholder.png'
,1,100,29.99,3, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
  'TOOL-1002',
  'Wolf Comfort Single Hand Grass Shear',
  'The Wolf comfort single-handed shears with a 180-degree rotating blade head are
  perfect for edging and trimming lawns in places that are difficult to reach e.g.
  along walls and fences. Non-stick coated, wavy-edged blades result in a precise
  cut even after prolonged use.',
'assets/images/products/placeholder.png'
,1,100,24.99,3, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
  'TOOL-1003',
  'Kent & Stowe Lighter Stainless Steel Digging Spade',
  'This perfectly sized Garden Life Stainless Steel Digging Spade is the lighter
  and more compact version of our full size Kent & Stowe Digging Spade, helping
  you dig for longer. A full 40% lighter, this spade is practical and easy to use
  and gives increased manoeuvrability around the garden. This spade is ideal for
  gardeners who might struggle with heavier tools. It is also great for tighter
  spaces and beds and borders gardening.',
'assets/images/products/placeholder.png'
,1,100,29.99,3, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
  'TOOL-1004',
  'Wilkinson Sword Ratchet Anvil Pruning Shears',
  'The Wilkinson Sword Ratchet Anvil Pruner is designed to prune woody, thick
  growth, removing branches cleanly and precisely. Anvil pruners close the bade
  against a softer metal anvil on the lower jaw and the ratchet mechanism prevents
  wrist strain.',
'assets/images/products/placeholder.png'
,1,100,24.99,3, NOW());

-- Accessories
INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
'ACCESSORY-1000',
'Garland Extra Large Kneeling Mat 40 x 40cm',
'Triple layer foam construction Garland Extra Large Kneeling Mat 40 x 40cm helps
protect your knees around the home and garden.Ideal as a seating pad and comes
with a hang up handle for easy storage.',
'assets/images/products/placeholder.png'
,1,100,7.99,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
'ACCESSORY-1001',
'Garden Bag 55x55x45cm',
'This large Garden Bag is ideal for collecting leaves, weeds, pruning offcuts and
grass. Made from tough, woven PE material and featuring two carry handles, it is
easy to wipe clean and fold away for easy storage.',
'assets/images/products/placeholder.png'
,1,100,1.99,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
'ACCESSORY-1002',
'Garland Cane Caps - 10 Pack',
'Garland Cane Caps - 10 Pack Easy to use simply place the caps on top of your
garden canes and protect your eyes while working and bending in the garden,
The tapered holes ensure a strong grip,
Fits up to a ½" cane,',
'assets/images/products/placeholder.png'
,1,100,2.99,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
'ACCESSORY-1003',
'Garland 5m Hook N Loop Tie',
'Garland 5m Hook N Loop Tie simple to use,Put round the plant and stake, pass
through the slot and simply press the tie together for a firm grip.',
'assets/images/products/placeholder.png'
,1,100,5.99,4, NOW());

INSERT INTO product (sku, name, description, image_url, active, units_in_stock,
unit_price, category_id, date_created)
VALUES (
'ACCESSORY-1004',
'Garland Garden Pegs - 10 Pack',
'Garland Garden Pegs - 10 Pack simple to use garden pegs ideal for holding
netting in to place.
Pack Contains 10 Pegs.',
'assets/images/products/placeholder.png'
,1,100,24.99,4, NOW());
