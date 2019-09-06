DROP DATABASE IF EXISTS exampledb;
CREATE DATABASE exampledb;

DROP DATABASE IF EXISTS testdb;
CREATE DATABASE testdb;

-- Main game DB --
DROP DATABASE IF EXISTS project2;
CREATE DATABASE project2;

use project2;

create table main
(
	id int not null AUTO_INCREMENT,
	description tinytext,
    played BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

create table play
(
	id int not null AUTO_INCREMENT,
	description tinytext,
    played BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

INSERT INTO main (description) VALUES ('1');
INSERT INTO main (description) VALUES ('2');
INSERT INTO main (description) VALUES ('3');
INSERT INTO main (description) VALUES ('4');
INSERT INTO main (description) VALUES ('5');
INSERT INTO main (description) VALUES ('6');
INSERT INTO main (description) VALUES ('7');
INSERT INTO main (description) VALUES ('8');
INSERT INTO main (description) VALUES ('9');
INSERT INTO main (description) VALUES ('10');

INSERT INTO play (description) VALUES ('1'), ('2'), ('3'), ('4'), ('5'), ('6'), ('7'), ('8'), ('9'), ('10'), ('11'), ('12'), ('13'), ('14'), ('15'), ('16'), ('17'), ('18'), ('19'), ('20'), ('21'), ('22'), ('23');
