# Base image with Nginx
FROM nginx:alpine

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copy already-built Angular app into Nginx's web directory
COPY dist/valuenest-frontend /usr/share/nginx/html
