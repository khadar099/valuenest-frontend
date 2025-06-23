# Step 1: Build Angular app
FROM node:18 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npx ng build --configuration production

# Step 2: Serve with NGINX
FROM nginx:alpine
COPY --from=builder /app/dist/valuenest-frontend /usr/share/nginx/html

# Optional: Add custom nginx.conf to handle Angular routes
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
