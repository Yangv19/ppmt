-- Login as sysdba with sys, dbUserPassword123 on ORCLPDB1
CREATE USER root IDENTIFIED BY dbUserPassword123;
GRANT CONNECT TO root;
GRANT CONNECT, RESOURCE, DBA TO root;
GRANT CREATE SESSION TO root;
GRANT ALL PRIVILEGES TO root; 
GRANT UNLIMITED TABLESPACE TO root;
