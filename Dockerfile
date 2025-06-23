# Step 1: Build the Angular app
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/valuenest-frontend/browser /usr/share/nginx/html

# Optional: Custom Nginx config for SPA routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

