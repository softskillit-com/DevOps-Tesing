# Lightweight nginx image to server static HTML
FROM nginx:alpine

# Remove default nginx welcome page
RUN rm -rf /usr/share/nginx/html/*

# Copy our site into nginx's web root
COPY mysite.html /usr/share/nginx/html


# Nginx port listen

EXPOSE 80
