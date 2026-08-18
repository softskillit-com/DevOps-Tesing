#FROM nginx:alpine

# Sample website ki file container ke andar copy karein
#COPY index.html /usr/share/nginx/html/index.html
 
#EXPOSE 80
 
FROM httpd:2.4

RUN apt-get update && apt-get install -y curl
COPY ./ /usr/local/apache2/htdocs/

RUN echo "ServerName softskillit.com" >> /usr/local/apache2/conf/httpd.conf
