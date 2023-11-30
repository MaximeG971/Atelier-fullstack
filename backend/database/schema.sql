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