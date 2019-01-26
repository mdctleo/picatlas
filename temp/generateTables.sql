CREATE TABLE Destinations (
	Name char(255) PRIMARY_KEY,
	Filename char(255),
	Address char(255)
);

CREATE TABLE Destination_Tag
	Name, FOREIGN_KEY
	TagID, FOREIGN_KEY

CREATE TABLE Tags (
	TagID smallint PRIMARY_KEY,
	TagName char(255)
);

INSERT INTO Destinations VALUES ('Alaska', 'alaska.jpg', 'Alaska, USA');

INSERT INTO Tags VALUES (0, 'Urban');
INSERT INTO Tags VALUES (1, 'Rural');
INSERT INTO Tags VALUES (2, 'Vista');
INSERT INTO Tags VALUES (3, 'Landmark');
INSERT INTO Tags VALUES (4, 'Desert');
INSERT INTO Tags VALUES (5, 'Glacial');
INSERT INTO Tags VALUES (6, 'Flower/Field');
INSERT INTO Tags VALUES (7, 'Snow');
INSERT INTO Tags VALUES (8, 'Mountainous');
INSERT INTO Tags VALUES (9, 'Architecture');
INSERT INTO Tags VALUES (10, 'Tropical');
INSERT INTO Tags VALUES (11, '');
INSERT INTO Tags VALUES (12, '');
INSERT INTO Tags VALUES (13, '');
INSERT INTO Tags VALUES (14, '');
INSERT INTO Tags VALUES (15, '');
INSERT INTO Tags VALUES (16, '');
INSERT INTO Tags VALUES (17, '');
INSERT INTO Tags VALUES (18, '');
INSERT INTO Tags VALUES (19, '');
INSERT INTO Tags VALUES (20, '');
INSERT INTO Tags VALUES (21, '');