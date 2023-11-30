create table team (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  country varchar(100) not null,
  league varchar(100) not null
);

create table sport (
  id int unsigned primary key auto_increment not null,
  name varchar(100) not null
);

INSERT INTO team (name, country, league) VALUES ('Paris Saint-Germain', 'France', 'Ligue 1');
INSERT INTO team (name, country, league) VALUES ('San Antonio Spurs', 'USA', 'NBA');
INSERT INTO team (name, country, league) VALUES ('Stade Français', 'France', 'Top 14');
INSERT INTO team (name, country, league) VALUES ('Real Madrid', 'Spain', 'La Liga');
INSERT INTO team (name, country, league) VALUES ('SIG Strasbourg', 'France', 'Pro A');
INSERT INTO team (name, country, league) VALUES ('Stade Toulousain', 'France', 'Top 14');

INSERT INTO sport (name) VALUES ('Football');
INSERT INTO sport (name) VALUES ('Basketball');
INSERT INTO sport (name) VALUES ('Rugby');
