# --- Stage 1: Build the Next.js Frontend ---
FROM node:20 AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy all project files and build the Next.js static export
COPY . .
RUN npm run build

# --- Stage 2: Setup Python FastAPI Backend ---
FROM python:3.11-slim
WORKDIR /app

# Install Python dependencies
COPY backend/requirements.txt ./backend/
RUN pip install --no-cache-dir -r backend/requirements.txt

# Copy backend source code
COPY backend/ ./backend/

# Copy the compiled Next.js frontend from the builder stage
COPY --from=builder /app/out ./out

# Run FastAPI using Uvicorn. 
# Render passes the port via the $PORT environment variable.
CMD uvicorn backend.app:app --host 0.0.0.0 --port ${PORT:-8000}
