# 🚀 Junior DevOps Activity – CI/CD Pipeline

## 📦 Project Overview

This repository contains two microservices:

- **Node.js Service** – Runs on port 3000
- **Python Service** – Runs on port 5000

Both services are containerized using Docker and automated using GitHub Actions CI/CD.

---

# 🐳 Running the Services with Docker

## 1️⃣ Build Docker Images

From the project root directory:

```bash
docker build -t my-node-service ./node-service
docker build -t my-python-service ./python-service
```

---

## 2️⃣ Run the Containers

### Run Node.js Service

```bash
docker run -p 3000:3000 my-node-service
```

### Run Python Service

```bash
docker run -p 5000:5000 my-python-service
```

---

# 🐳 Using Docker Compose

If docker-compose.yml is available in the project root:

## Start All Services

```bash
docker-compose up --build
```

## Stop Services

```bash
docker-compose down
```

---

# ⚙️ Environment Variables

Environment variables can be configured using:

```bash
-e VARIABLE_NAME=value
```

Example:

```bash
docker run -e PORT=3000 -p 3000:3000 my-node-service
```

You can also define environment variables inside docker-compose.yml.

---

# ✅ How to Verify Services

After running containers:

## Verify Node.js Service

Open in browser:
```
http://localhost:3000
```

Or use curl:
```bash
curl http://localhost:3000
```

---

## Verify Python Service

Open in browser:
```
http://localhost:5000
```

Or use curl:
```bash
curl http://localhost:5000
```

If a response is returned, the service is working correctly.

---

# 🔁 CI/CD Pipeline Documentation

This project uses GitHub Actions for CI/CD automation.

## Pipeline Includes:

- ✅ Node.js linting using ESLint
- ✅ Python linting using Flake8
- ✅ Docker image build after successful linting
- ✅ Docker image push to Docker Hub (if secrets configured)
- ✅ Automatic Docker image versioning using commit SHA

---

## Workflow Trigger

The CI/CD pipeline runs automatically on:

- Push to `main` branch
- Pull requests to `main` branch

---

## Docker Image Versioning

Docker images are automatically tagged using the first 7 characters of the Git commit SHA.

Example:

```
my-node-service:1a2b3c4
my-python-service:1a2b3c4
```

Each push generates a unique version.

---

# 🛠 Technologies Used

- Node.js
- Python
- Docker
- Docker Compose
- GitHub Actions



---

## ✅ DevOps Implementation (Added)

### 🐳 Docker Build Instructions

#### Build Python Service
```bash
cd python-service
docker build -t python-service .
