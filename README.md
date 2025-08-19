*Prerequisites:*
Node.js and npm (if running local dev without Docker)

Or Docker installed for containerized run

Running Locally (Docker)
1. Clone the frontend repo:
```bash
git clone <frontend-repo-url>
cd <frontend-folder>
```

2. Update frontend config to point API base URL to your backend (e.g., http://localhost:8080 or your deployed backend URL).
3. Build Docker image:
```bash
docker build -t chat-app-frontend .
```



