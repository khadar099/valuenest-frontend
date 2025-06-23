# Step 1: Build Angular app using Node
FROM node:18 AS builder

# Set working directory
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy app source code
COPY . .

# Build the app with production configuration
RUN npx ng build --configuration production

# Step 2: Use NGINX to serve the Angular app
FROM nginx:alpine

# Copy Angular production build output (inside browser folder)
COPY --from=builder /app/dist/valuenest-frontend/browser /usr/share/nginx/html

# Copy custom nginx config to support Angular routing
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 80
EXPOSE 80

# Start NGINX server
CMD ["nginx", "-g", "daemon off;"]
