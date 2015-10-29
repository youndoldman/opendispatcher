insert into "opendispatcher"."HazardTypes" (id,name_nl,name_en, name_es, symbol, namespace, "createdAt", "updatedAt") values
 (1, 'NFPA-gevarendiamant', 'NFPA Hazard Diamond','NFPA diamante de peligro', 'Tw2.002', 'nen1414', NOW(), NOW()),
 (2000,'GHS00-Diverse', 'Various GHS00','varios GHS00', 'EU-GHS00', 'other', NOW(), NOW()),
 (2001,'Explosief', 'Explosive', 'Explosivo', 'EU-GHS01', 'eughs', NOW(), NOW()),
 (2002,'Ontvlambaar', 'Flammable', 'Inflamable', 'EU-GHS02', 'eughs', NOW(), NOW()),
 (2003,'Brand bevorderend (oxiderend)', 'Oxidizing','Oxidante', 'EU-GHS03', 'eughs', NOW(), NOW()),
 (2004,'Houder onder druk', 'Compressed Gas', 'Gas comprimido','EU-GHS04', 'eughs', NOW(), NOW()),
 (2005,'Corrosief (bijtend)', 'Corrosive', 'Corrosivo', 'EU-GHS05','eughs', NOW(), NOW()),
 (2006,'Toxisch (giftig)', 'Toxic', 'Tóxico', 'EU-GHS06', 'eughs', NOW(), NOW()),
 (2007,'Schadelijk', 'Irritant', 'Irritante', 'EU-GHS07', 'eughs', NOW(), NOW()),
 (2008,'Schadelijk voor de gezondheid op lange termijn', 'Health Hazard', 'Peligro para la salud','EU-GHS08', 'eughs', NOW(), NOW()),
 (2009,'Milieugevaarlijk', 'Environmentally damaging', 'Ambientalmente dañino', 'EU-GHS09', 'eughs', NOW(), NOW()),
 (3001,'Electrische Spanning', 'Electricity', 'electricidad', 'Tw02', 'nen1414', NOW(), NOW()),
 (3002,'Radioactief Materiaal', 'Radioactive', 'Radioactivo', 'Tw09', 'nen1414', NOW(), NOW()),
 (3003,'Laserstralen', 'Laser', 'Láser', 'Tw10', 'nen1414', NOW(), NOW()),
 (3004,'Niet-ioniserende Straling', 'Non-ionizing radiation', 'Radiaciones no ionizantes', 'Tw11', 'nen1414', NOW(), NOW()),
 (3005,'Magnetisch Veld', 'Magnetic field', 'Campo magnético', 'Tw12', 'nen1414', NOW(), NOW()),
 (3006,'Vallen door Hoogteverschil', 'Drop', 'Soltar', 'Tw14', 'nen1414', NOW(), NOW()),
 (3007,'Biologische Agentia', 'Biohazard', 'riesgo biológico', 'Tw15', 'nen1414', NOW(), NOW()),
 (3008,'Lage temperatuur of bevriezing', 'Congealment', 'Congelación', 'Tw16', 'nen1414', NOW(), NOW()),
 (3009,'Explosieve atmosfeer', 'Explosive atmosphere', 'Atmósfera explosiva', 'Tw19', 'nen1414', NOW(), NOW()),
 (3010,'Accu''s en klein chemisch materiaal', 'Batteries and hazardous material' ,'Batería y material peligroso', 'Tw28', 'nen1414', NOW(), NOW());