create table team (
  id int unsigned primary key auto_increment not null,
  name varchar(255) not null,
  country varchar(100) not null,
  league varchar(100) not null,
  logo varchar(250) not null,
  sport_id int not null
);

create table sport (
  id int unsigned primary key auto_increment not null,
  name varchar(100) not null
);

INSERT INTO team (name, country, league, logo, sport_id) VALUES ('Paris Saint-Germain', 'France', 'Ligue 1', 'https://upload.wikimedia.org/wikipedia/fr/thumb/8/86/Paris_Saint-Germain_Logo.svg/480px-Paris_Saint-Germain_Logo.svg.png', 1);
INSERT INTO team (name, country, league, logo, sport_id) VALUES ('San Antonio Spurs', 'USA', 'NBA', 'https://upload.wikimedia.org/wikipedia/fr/thumb/a/a2/San_Antonio_Spurs.svg/1200px-San_Antonio_Spurs.svg.png', 2);
INSERT INTO team (name, country, league, logo, sport_id) VALUES ('Stade Français', 'France', 'Top 14', 'https://upload.wikimedia.org/wikipedia/fr/0/0f/Logo_Stade_fran%C3%A7ais_PR_2018.svg', 3);
INSERT INTO team (name, country, league, logo, sport_id) VALUES ('Real Madrid', 'Espagne', 'La Liga', 'https://upload.wikimedia.org/wikipedia/fr/thumb/c/c7/Logo_Real_Madrid.svg/1468px-Logo_Real_Madrid.svg.png', 1);
INSERT INTO team (name, country, league, logo, sport_id) VALUES ('SIG Strasbourg', 'France', 'Pro A', 'https://upload.wikimedia.org/wikipedia/fr/thumb/b/b0/Logo_SIG_Strasbourg_-_2015.svg/1200px-Logo_SIG_Strasbourg_-_2015.svg.png', 2);
INSERT INTO team (name, country, league, logo, sport_id) VALUES ('Stade Toulousain', 'France', 'Top 14', 'https://upload.wikimedia.org/wikipedia/fr/0/01/Logo_Stade_Toulousain_Rugby.svg', 3);

INSERT INTO sport (name) VALUES ('Football');
INSERT INTO sport (name) VALUES ('Basketball');
INSERT INTO sport (name) VALUES ('Rugby');
