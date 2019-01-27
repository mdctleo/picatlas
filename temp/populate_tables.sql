INSERT INTO TAG (TAG_NAME) VALUES ('Urban');
INSERT INTO TAG (TAG_NAME) VALUES ('Rural');
INSERT INTO TAG (TAG_NAME) VALUES ('Nature');
INSERT INTO TAG (TAG_NAME) VALUES ('Small-town');
INSERT INTO TAG (TAG_NAME) VALUES ('Glacier');
INSERT INTO TAG (TAG_NAME) VALUES ('Flower');
INSERT INTO TAG (TAG_NAME) VALUES ('Snow');
INSERT INTO TAG (TAG_NAME) VALUES ('Mountain');
INSERT INTO TAG (TAG_NAME) VALUES ('Landmark');
INSERT INTO TAG (TAG_NAME) VALUES ('Architecture');
INSERT INTO TAG (TAG_NAME) VALUES ('Alleys');
INSERT INTO TAG (TAG_NAME) VALUES ('Night');
INSERT INTO TAG (TAG_NAME) VALUES ('Maritime');
INSERT INTO TAG (TAG_NAME) VALUES ('Vista');
INSERT INTO TAG (TAG_NAME) VALUES ('Tropical');
INSERT INTO TAG (TAG_NAME) VALUES ('Desert');

INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Alaska', '/img/destinations/alaska.jpg', 'Alaska, USA');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Bandarban', '/img/destinations/bandarban.jpg', 'Bandarban District, Bangladesh');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Bern', '/img/destinations/bern.jpg', 'Bern, Switzerland');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Boston Old Street', '/img/destinations/boston-old-street.jpg', 'Boston, MA, USA');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Central Park', '/img/destinations/central-park-fall.jpg', 'New York, NY, USA');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Chicago', '/img/destinations/chicago.jpg', 'Chicago, IL, USA');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Deoksugung Palace', '/img/destinations/deoksugung.jpg', 'Seoul, South Korea');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Faroe Islands', '/img/destinations/faroe.jpg', 'Faroe Islands');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Ginza', '/img/destinations/ginza.jpg', 'Ginza, Chuo, Tokyo');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Great Smoky Mountains', '/img/destinations/great-smoky-mountains.jpg', 'Tennessee-North Carolina');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Hollow Rock', '/img/destinations/hollow-rock.jpg', 'Grand Portage, MN 55605, USA');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Hong Kong', '/img/destinations/hong-kong.jpg', 'Hong Kong, China');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Mt St Helens', '/img/destinations/mt-st-helens.jpg', 'Mt St Helens, WA, USA');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Pachuca', '/img/destinations/pachuca.jpg', 'Pachuca, Hidalgo, Mexico');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Rainy Tokyo Alley', '/img/destinations/rainy-tokyo-alley.jpg', 'Tokyo, Japan');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('San Francisco', '/img/destinations/san-francisco.jpg', 'San Francisco, CA, USA');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Strokkur Geyser', '/img/destinations/strokkur-geyser.jpg', 'Haukadalur, Iceland');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Tulips in Netherlands', '/img/destinations/netherlands.jpg', 'Netherlands');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Wasatch Range', '/img/destinations/wasatch-range.jpg', '1281 Warm Springs Rd, Midway, UT 84049, USA');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Zion National Park', '/img/destinations/zion.jpg', 'Zion National Park, UT, USA');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('Vancouver', '/img/destinations/vancouver.jpg', 'Vancouver, BC, Canada');
INSERT INTO DESTINATION (NAME, IMG_PATH, ADDRESS) VALUES ('North Vancouver', '/img/destinations/north-vancouver.jpg', 'North Vancouver, BC, Canada');

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(1, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(1, 14);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(1, 7);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(1, 5);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(2, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(2, 6);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(2, 14);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(2, 8);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(3, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(3, 4);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(3, 10);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(4, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(4, 12);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(4, 10);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(5, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(5, 12);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(5, 10);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(6, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(6, 12);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(6, 8);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(7, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(7, 10);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(8, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(8, 9);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(8, 13);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(8, 14);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(9, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(9, 12);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(9, 10);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(10, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(10, 8);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(10, 14);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(11, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(11, 13);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(11, 7);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(11, 5);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(12, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(12, 12);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(12, 10);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(13, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(13, 8);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(13, 9);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(14, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(14, 2);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(14, 10);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(15, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(15, 12);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(16, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(16, 14);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(16, 9);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(17, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(17, 9);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(17, 14);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(18, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(18, 6);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(18, 14);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(19, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(19, 8);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(19, 14);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(20, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(20, 14);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(20, 8);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(20, 6);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(21, 1);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(21, 10);

INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(22, 3);
INSERT INTO DESTINATION_TAG (DESTINATION_ID, TAG_ID) VALUES(22, 8);
