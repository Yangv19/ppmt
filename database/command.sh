docker login container-registry.oracle.com
docker pull container-registry.oracle.com/database/enterprise:latest
docker run -d --name oracle -p 1521:1521 -e ORACLE_PWD=dbUserPassword123 container-registry.oracle.com/database/enterprise:latest
