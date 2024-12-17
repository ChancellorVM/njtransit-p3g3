DROP TABLE IF EXISTS NJ_Railstations;
DROP TABLE IF EXISTS Rail_Network;
DROP TABLE IF EXISTS Rail_Lines;
DROP TABLE IF EXISTS NJ_Municipal;

-- create NJ_Municipal table and set our primary key

CREATE TABLE NJ_Municipal (
 OBJECTID INT PRIMARY KEY,
    MUN VARCHAR(100) NOT NULL, -- Municipality name
    COUNTY VARCHAR(100)NOT NULL, -- County name
    MUN_LABEL VARCHAR(150)NOT NULL, -- Municipality label
    MUN_TYPE VARCHAR(50)NOT NULL, -- Type (Borough, City, etc.)
    NAME VARCHAR(150)NOT NULL, -- Name of the municipality
    GNIS_NAME VARCHAR(150)NOT NULL, -- GNIS Name
    GNIS INT NOT NULL, -- Geographic Names Information System ID
    SSN INT NOT NULL, -- SSN code
    MUN_CODE INT NOT NULL, -- Municipality code
    POP2020 INT NOT NULL, -- Population in 2020
    POP2010 INT NOT NULL, -- Population in 2010
    POP2000 INT NOT NULL, -- Population in 2000
    POP1990 INT NOT NULL, -- Population in 1990
    POP1980 INT NOT NULL, -- Population in 1980
    POPDEN2020 FLOAT NOT NULL, -- Population density in 2020
    POPDEN2010 FLOAT NOT NULL, -- Population density in 2010
    POPDEN2000 FLOAT NOT NULL, -- Population density in 2000
    POPDEN1990 FLOAT NOT NULL, -- Population density in 1990
    POPDEN1980 FLOAT NOT NULL, -- Population density in 1980
    Shape__Area FLOAT NOT NULL, -- Shape area
    Shape__Length FLOAT NOT NULL -- Shape length
);
-- create NJ_Railstations table and set our primary key

CREATE TABLE NJ_Railstations (
    OBJECTID_1 INT PRIMARY KEY,
    STATION_ID VARCHAR(150) NOT NULL, -- Station ID
    COUNTY VARCHAR(100) NOT NULL, -- County name
    LATITUDE FLOAT NOT NULL, -- Latitude coordinate
    LONGITUDE FLOAT NOT NULL, -- Longitude coordinate
    ATIS_ID INT NOT NULL, -- ATIS ID
    SE_ANNO_CAD_DATA VARCHAR(255) NOT NULL, -- Annotation data (not fully defined)
    LINE_CODE VARCHAR(20) NOT NULL, -- Line code
    LAYER VARCHAR(50) NOT NULL, -- Layer name (e.g., "STATIONS")
    MUNICIPALITY VARCHAR(150) NOT NULL, -- Municipality name
    RAIL_SERVICE VARCHAR(10) NOT NULL, -- Rail service code
    ADA VARCHAR(3) NOT NULL, -- Accessibility (YES/NO)
    x FLOAT NOT NULL, -- x-coordinate
    y FLOAT NOT NULL, -- y-coordinate
	FOREIGN KEY (LINE_CODE) REFERENCES Rail_Lines (LINE_CODE),
    FOREIGN KEY (COUNTY) REFERENCES NJ_Municipal (COUNTY)
);
-- create Rail_Lines table and set our primary key
CREATE TABLE Rail_Lines (
    OBJECTID INT PRIMARY KEY,
    LINE_CODE VARCHAR(20) NOT NULL, -- Line code
    SE_ANNO_CAD_DATA VARCHAR(255) NOT NULL, -- Annotation data (not fully defined)
    LINE_NAME VARCHAR(150) NOT NULL, -- Rail line name
    Shape__Length FLOAT NOT NULL -- Shape length
);
-- create Rail_Network table and set our primary key and foreign keys

CREATE TABLE Rail_Network (
    OBJECTID INT PRIMARY KEY,
    LINE_NAME VARCHAR(150) NOT NULL, -- Railroad line name
    LINE_ID INT NOT NULL, -- Line ID
    Shape__Length FLOAT NOT NULL -- Shape length
);

  

select * from NJ_Municipal;
select * from NJ_Railstations;
select * from Rail_Lines;
select * from Rail_Network;