DROP DATABASE IF EXISTS project2;

CREATE DATABASE project2;

use project2;

create table question_cards
(
	id int not null AUTO_INCREMENT,
	description tinytext,
    played BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

create table response_cards
(
	id int not null AUTO_INCREMENT,
	description tinytext,
    played BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);


INSERT INTO question_cards (description) VALUES ('1'), ('2'), ('3'), ('4'), ('5'), ('6'), ('7'), ('8'), ('9'), ('10');

INSERT INTO response_cards (description) VALUES ('1'), ('2'), ('3'), ('4'), ('5'), ('6'), ('7'), ('8'), ('9'), ('10'), ('11'), ('12'), ('13'), ('14'), ('15'), ('16'), ('17'), ('18'), ('19'), ('20'), ('21'), ('22'), ('23');

SELECT * FROM question_cards;