url: https://www.jhipster.tech/docker-compose/

docker-compose -f src/main/docker/mysql.yml up -d
docker-compose -f src/main/docker/sonar.yml up -d

# generate new

jhipster --force

# generate the files

jhipster import-jdl ./myjdlmodel.jh --force

# sonar

docker-compose -f src/main/docker/sonar.yml up -d
./gradlew sonar

# rabbit-mq

docker-compose -f src/main/docker/rabbitmq.yml up -d
