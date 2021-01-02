FROM openjdk:11
COPY target/*.jar application.jar
COPY wait-for-it.sh wait-for-it.sh
EXPOSE 4000
CMD ["./wait-for-it.sh", "mysql:3306", "-t", "60", "--", "java", "-jar", "/application.jar"]
