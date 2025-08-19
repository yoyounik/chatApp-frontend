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
How it will look like:
<img width="1843" height="909" alt="image" src="https://github.com/user-attachments/assets/9110a2d1-1710-460e-8f63-d3eb6bf74874" />
<img width="1600" height="901" alt="image" src="https://github.com/user-attachments/assets/a7b727b7-d9e7-4974-a869-13097ddd2bba" />




