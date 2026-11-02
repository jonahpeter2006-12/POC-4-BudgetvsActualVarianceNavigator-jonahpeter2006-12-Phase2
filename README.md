# Budget vs Actual Variance Navigator

A containerized financial analytics application for exploring budget-versus-actual performance, department-level variances, monthly trends, and forecasts.

## Project Overview

This project contains two main services:

- **Frontend:** Next.js, React, TypeScript, and Recharts.
- **Backend:** FastAPI, Python, Pandas, and DuckDB.

The backend reads financial data from `backend/budget_data.csv` and exposes API endpoints consumed by the frontend.

## Live Cloud Deployment

The application is deployed on **Render** using Docker.

| Service | Live URL |
|---|---|
| Frontend Dashboard | https://poc4-budget-frontend.onrender.com |
| Backend API | https://poc4-budget-backend.onrender.com |
| Backend Health Check | https://poc4-budget-backend.onrender.com/api/health |
| Backend Summary | https://poc4-budget-backend.onrender.com/api/summary |

**Cloud deployment status:** Successfully deployed and validated.

Note: Render's free services may spin down after inactivity. The first request after an idle period may take 50 seconds or more while the service wakes up.

## Project Structure

```text
.
├── backend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── main.py
│   ├── requirements.txt
│   └── budget_data.csv
├── frontend/
│   ├── Dockerfile
│   ├── .dockerignore
│   ├── package.json
│   ├── package-lock.json
│   └── src/
├── docs/
├── docker-compose.yml
└── README.md
```

## Services and Ports

| Service | Technology | Local URL |
|---|---|---|
| Frontend | Next.js | http://localhost:3000 |
| Backend | FastAPI | http://localhost:8000 |
| Backend health | FastAPI | http://localhost:8000/api/health |

## Prerequisites

- Docker Desktop
- Docker Engine running
- Docker Compose
- Windows with WSL 2, or another supported Docker environment

## Run with Docker Compose

Open PowerShell in the project root directory.

Build and start the services:

```powershell
docker compose up --build
```

Open the application:

- Frontend: http://localhost:3000
- Backend health check: http://localhost:8000/api/health

To stop the services, press `Ctrl + C` in the terminal and run:

```powershell
docker compose down
```

## Useful Docker Commands

View running containers:

```powershell
docker compose ps
```

View service logs:

```powershell
docker compose logs
```

View backend logs:

```powershell
docker compose logs backend
```

View frontend logs:

```powershell
docker compose logs frontend
```

Rebuild the services:

```powershell
docker compose up --build
```

Stop and remove containers:

```powershell
docker compose down
```

## Backend API

The backend provides these endpoints:

| Endpoint | Purpose |
|---|---|
| `/api/health` | Backend health status |
| `/api/summary` | Summary metrics |
| `/api/waterfall` | Waterfall analysis |
| `/api/department-breakdown` | Department breakdown |
| `/api/monthly-trends` | Monthly trends |
| `/api/department-heatmap` | Department heatmap |
| `/api/forecast` | Forecast data |
| `/api/filters` | Available filters |

## Container Communication

Docker Compose creates a shared network for the frontend and backend services.

For local development, the frontend uses `http://localhost:8000` for browser-side API requests. Docker publishes backend port `8000` to the host so the browser can access it.

For cloud deployment, the frontend uses the `NEXT_PUBLIC_API_URL` environment variable to connect to the deployed backend.

The backend CORS configuration allows requests from the deployed frontend.

## Render Deployment Configuration

Both services use Docker deployment on Render.

| Setting | Backend | Frontend |
|---|---|---|
| Service name | `poc4-budget-backend` | `poc4-budget-frontend` |
| Runtime | Docker | Docker |
| Dockerfile path | `backend/Dockerfile` | `frontend/Dockerfile` |
| Build context | `backend` | `frontend` |
| Branch | `master` | `master` |

Frontend environment variable:

```text
NEXT_PUBLIC_API_URL=https://poc4-budget-backend.onrender.com
```

The backend uses Render's assigned `PORT` environment variable.

## Troubleshooting

### Docker Engine is not running

Open Docker Desktop and wait until the engine reports that it is running.

### Frontend cannot reach the backend

1. Check that both containers are running:

   ```powershell
   docker compose ps
   ```

2. Check backend logs:

   ```powershell
   docker compose logs backend
   ```

3. Check the backend health endpoint:

   http://localhost:8000/api/health

### Container build fails

Review the service logs and verify that the dependency files and source files are present.

### Restart the application

```powershell
docker compose down
docker compose up --build
```

### Cloud application takes time to load

Render free services may spin down after inactivity. Allow time for the service to wake up and retry.

## Current Validation Status

### Local Docker Validation

- [x] Backend Docker image builds successfully.
- [x] Frontend Docker image builds successfully.
- [x] Docker Compose configuration validated.
- [x] Backend health endpoint responds successfully.
- [x] Frontend dashboard loads at http://localhost:3000.
- [x] Dashboard data, charts, and figures display.
- [x] Department and month filters work.
- [x] Frontend communicates with the backend successfully.
- [x] Container logs show successful API responses.
- [x] Containers recover after restart.
- [x] Clean Docker rebuild succeeds.

### Cloud Deployment Validation

- [x] Backend deployed successfully on Render.
- [x] Frontend deployed successfully on Render.
- [x] Backend health endpoint responds successfully.
- [x] Frontend connects to the deployed backend.
- [x] Dashboard figures and charts load successfully.
- [x] Overview tab validated.
- [x] Departments tab validated.
- [x] Trends tab validated.
- [x] Heatmap tab validated