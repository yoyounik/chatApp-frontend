# 🚀 Chat App Frontend

A modern, responsive real-time chat application frontend built with React 19, Vite, and Tailwind CSS. Features real-time messaging, room-based chat system, and seamless WebSocket communication.

## �� Features

- **Real-time messaging** using WebSocket (STOMP) with SockJS
- **Room-based chat system** - create and join chat rooms
- **User authentication** with username
- **Responsive design** with Tailwind CSS
- **Modern UI/UX** with React 19 and Vite
- **Real-time notifications** with React Hot Toast
- **Deployed on Vercel** for optimal performance

## 🏗️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 3.4
- **HTTP Client**: Axios
- **WebSocket**: SockJS + STOMP
- **Routing**: React Router DOM 7
- **Icons**: React Icons
- **Notifications**: React Hot Toast
- **Package Manager**: npm

## �� Live Demo

**Frontend**: [https://chat-app-frontend-fgtp.vercel.app/](https://chat-app-frontend-fgtp.vercel.app/)

**Backend API**: [https://chatapp-backend-67bn.onrender.com](https://chatapp-backend-67bn.onrender.com)


## 🛠️ Prerequisites

- **Node.js 18** or higher
- **npm** (comes with Node.js)
- **Modern web browser** with WebSocket support

## �� Quick Start

### 1. Clone the Repository

```bash
git clone <your-frontend-repo-url>
cd chat-app-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Backend URL

Update the backend URL in `src/config/AxiosHelper.js`:

```javascript
// For development (local backend)
export const baseURL = "http://localhost:8080";

// For production (deployed backend)
export const baseURL = "https://chatapp-backend-67bn.onrender.com";
```

### 4. Run Development Server

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

### 5. Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory.

## �� UI Components

### JoinCreateChat Component
- **Room creation** - Create new chat rooms
- **Room joining** - Join existing rooms with room ID
- **User authentication** - Enter username for chat

### ChatPage Component
- **Real-time messaging** - Send and receive messages
- **Room information** - Display current room and user
- **Message history** - View previous messages
- **User avatars** - Visual user identification
- **Responsive design** - Works on all screen sizes

## �� Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Development
VITE_API_BASE_URL=http://localhost:8080

# Production
VITE_API_BASE_URL=https://chatapp-backend-67bn.onrender.com
```

### Tailwind CSS Configuration

The project uses Tailwind CSS with a dark theme. Customize colors and themes in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Custom color palette
      }
    }
  },
  plugins: []
}
```

## 📱 Responsive Design

The application is fully responsive and works on:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🔌 API Integration

### REST API Endpoints

- `POST /api/v1/rooms` - Create new room
- `GET /api/v1/rooms/{roomId}` - Get room information
- `GET /api/v1/rooms/{roomId}/messages` - Get room messages

### WebSocket Endpoints

- `/app/sendMessage/{roomId}` - Send message
- `/topic/room/{roomId}` - Subscribe to room messages

## �� Deployment

### Deploy on Vercel (Recommended)

1. **Connect your GitHub repository** to Vercel
2. **Set build settings**:
   - Build Command: `npm run build`
   - Output Directory: `dist`
   - Install Command: `npm install`
3. **Deploy** - Vercel will automatically deploy on every push

### Deploy on Netlify

1. **Connect your GitHub repository** to Netlify
2. **Set build settings**:
   - Build Command: `npm run build`
   - Publish Directory: `dist`
3. **Deploy** - Netlify will automatically deploy on every push

### Deploy on GitHub Pages

1. **Add GitHub Pages dependency**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add scripts to package.json**:
   ```json
   {
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```

## 🧪 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

### Code Quality

- **ESLint** for code linting
- **Prettier** for code formatting
- **React Hooks** for state management
- **Functional components** with hooks

## 🐛 Troubleshooting

### Common Issues

1. **WebSocket Connection Fails**
   - Check if backend is running
   - Verify backend URL in configuration
   - Ensure CORS is properly configured on backend

2. **Messages Not Sending**
   - Check browser console for errors
   - Verify room ID is correct
   - Check WebSocket connection status

3. **Build Failures**
   - Ensure Node.js version is 18+
   - Clear node_modules and reinstall: `rm -rf node_modules && npm install`
   - Check for syntax errors in components

4. **Styling Issues**
   - Ensure Tailwind CSS is properly configured
   - Check if CSS classes are applied correctly
   - Verify PostCSS configuration

### Browser Compatibility

- **Chrome** 90+
- **Firefox** 88+
- **Safari** 14+
- **Edge** 90+

## 📝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Nikhil Sinha**
- GitHub: [@your-username](https://github.com/your-username)
- LinkedIn: [Your LinkedIn](https://linkedin.com/in/your-profile)

## �� Acknowledgments

- **React team** for the amazing framework
- **Vite team** for the fast build tool
- **Tailwind CSS team** for the utility-first CSS framework
- **Vercel** for seamless deployment

## 📸 Screenshots

### Join/Create Room Interface
![Join Create Room](https://github.com/user-attachments/assets/9110a2d1-1710-460e-8f63-d3eb6bf74874)

### Chat Interface
![Chat Interface](https://github.com/user-attachments/assets/a7b727b7-d9e7-4974-a869-13097ddd2bba)

---

⭐ **Star this repository if you found it helpful!**

🚀 **Ready to chat? Deploy and start messaging!**




How it will look like:
<img width="1843" height="909" alt="image" src="https://github.com/user-attachments/assets/9110a2d1-1710-460e-8f63-d3eb6bf74874" />
<img width="1600" height="901" alt="image" src="https://github.com/user-attachments/assets/a7b727b7-d9e7-4974-a869-13097ddd2bba" />




