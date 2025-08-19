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

4. Run Docker container:
```bash
docker run -p 3000:3000 chat-app-frontend
```

5. Access frontend UI at:
```bash
http://localhost:3000
```



