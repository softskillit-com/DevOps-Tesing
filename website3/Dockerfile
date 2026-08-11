FROM httpd:latest

RUN apt-get update && apt-get install -y curl

ENV APP_ENV=Production

COPY . /usr/local/apache2/htdocs/


EXPOSE 80




