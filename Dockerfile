# Stage 1: Build the frontend
FROM node:22 AS builder

WORKDIR /app

# Copy all files from the current directory
COPY . ./

# Install dependencies and build the frontend
RUN npm install --legacy-peer-deps
RUN npm run build


# Stage 2: Build the final server image
FROM node:22

WORKDIR /app

# Copy package files and install production server dependencies (express)
COPY package*.json ./
RUN npm install --omit=dev --legacy-peer-deps

# Copy server.js and the built frontend assets
COPY server.js ./
COPY --from=builder /app/dist ./dist

EXPOSE 8080

CMD ["node", "server.js"]
