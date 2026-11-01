FROM node:22-alpine

WORKDIR /app

# Install exact dependency versions from package-lock.json
COPY package*.json ./
RUN npm ci

# Copy the frontend source code
COPY . .

# Set the API address used by browser-side requests
ARG NEXT_PUBLIC_API_URL=http://localhost:8000
ENV NEXT_PUBLIC_API_URL=$NEXT_PUBLIC_API_URL

# Build the Next.js application
RUN npm run build

EXPOSE 3000

# Start Next.js so it is reachable outside the container
CMD ["npm", "run", "start", "--", "-H", "0.0.0.0", "-p", "3000"]