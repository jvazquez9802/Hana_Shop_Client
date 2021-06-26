CREATE DATABASE IF NOT EXISTS HanaDB

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";


CREATE TABLE IF NOT EXISTS Serie (
   id           uuid            DEFAULT uuid_generate_v4() NOT NULL,
   name         VARCHAR(150)    NOT NULL UNIQUE,

   created_at DATE NOT NULL DEFAULT CURRENT_DATE,
   updated_at DATE NOT NULL DEFAULT CURRENT_DATE,
   
   PRIMARY KEY(id)

);


CREATE TABLE IF NOT EXISTS Category (
   id           uuid            DEFAULT uuid_generate_v4() NOT NULL,
   name         VARCHAR(150)    NOT NULL UNIQUE,
   description  VARCHAR         NOT NULL,

   created_at DATE NOT NULL DEFAULT CURRENT_DATE,
   updated_at DATE NOT NULL DEFAULT CURRENT_DATE,

   PRIMARY KEY(id)
);


CREATE TABLE IF NOT EXISTS Product(
    id          uuid        DEFAULT uuid_generate_v4() NOT NULL,
    name        VARCHAR     NOT NULL,
    description VARCHAR     NOT NULL,
    price       FLOAT       NOT NULL,
    cost        FLOAT       NOT NULL,
    stock       INT         NOT NULL DEFAULT 0,
    images      VARCHAR[],

    id_category uuid        NOT NULL,
    id_serie    uuid        NOt NULL,

    sale_frecuency VARCHAR NOT NULL DEFAULT 0,
    reviews VARCHAR NOT NULL DEFAULT 0,
    average_rating VARCHAR  NOT NULL DEFAULT 0,
    availability VARCHAR NOT NULL DEFAULT 0,

    created_at DATE NOT NULL DEFAULT CURRENT_DATE,
    updated_at DATE NOT NULL DEFAULT CURRENT_DATE,

    PRIMARY KEY(id),
    FOREIGN KEY(id_category) REFERENCES Category(id)    ON UPDATE CASCADE ON DELETE NO ACTION,
    FOREIGN KEY(id_serie) REFERENCES Serie(id)          ON UPDATE CASCADE ON DELETE NO ACTION
);



/*
-- Just to Test

INSERT INTO Serie (name) VALUES
    ('Sora no Otoshimono'),
    ('Kiss x Sis')
;

INSERT INTO Category (name, description) VALUES
    ('Figures', 'Imported figures based on the world of Japanese manga and anime'),
    ('Mangas', 'traditional japanese comics')
;


INSERT INTO Product (name, description, price, cost, stock, images, id_category, id_serie) VALUES

    (
        'Ikaros angeloid PVC',
        'Griffon The Enterprises 1/7 PVC Soraoto Sora no otoshimono Icarus Anime Figure in 12cm',
        22.00,
        28.00,
        356,
        '{
            "https://ae01.alicdn.com/kf/HTB1EPJaLVXXXXc1XpXXq6xXFXXXo/Figura-de-acci-n-del-Anime-Sora-no-otoshimono-de-PVC-figura-de-Ikaros-de-1.jpg_q50.jpg",
            "https://ae01.alicdn.com/kf/HTB1NBI4LFXXXXasXVXXq6xXFXXXF/Figura-de-acci-n-del-Anime-Sora-no-otoshimono-de-PVC-figura-de-Ikaros-de-1.jpg_q50.jpg",
            "https://ae01.alicdn.com/kf/HTB1O7s3LFXXXXamXVXXq6xXFXXXA/Figura-de-acci-n-del-Anime-Sora-no-otoshimono-de-PVC-figura-de-Ikaros-de-1.jpg_q50.jpg"
        }',
        '[UUID GENERATED]', --For example 5bd128c0-b090-42cb-b172-c39239d58c4d SELECT * FROM serie
        '[UUID GENERATED]' --For example 241e2d54-b604-4112-ab07-a202cf62e679  SELECT * FROM Category
     ),
     
    (
        'Astraea PVC',
        'Ciruela The Enterprises 1/4 PVC SLost Property Forte: Astraea Anime Figure in 12cm',
        27.00,
        35.00,
        123,
        '{
            "https://images-na.ssl-images-amazon.com/images/I/71Q3arDSoSL._AC_SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/71Vsqy46waL._AC_SL1500_.jpg",
            "https://images-na.ssl-images-amazon.com/images/I/61q5uQrWpuL._AC_SL1500_.jpg"
        }',
        '[UUID GENERATED]', --For example 5bd128c0-b090-42cb-b172-c39239d58c4d SELECT * FROM serie
        '[UUID GENERATED]' --For example 241e2d54-b604-4112-ab07-a202cf62e679  SELECT * FROM Category
     )
;


/*