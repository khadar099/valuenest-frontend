# Step 1: Build Angular app
FROM node:18 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Serve via NGINX
FROM nginx:alpine
COPY --from=build /app/dist/valuenest-frontend/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
