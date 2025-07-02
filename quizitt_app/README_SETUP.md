# Quizitt React Native App Setup

This guide will help you set up the React Native Expo app with authentication and backend integration.

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- Android Studio (for Android development)
- Xcode (for iOS development, macOS only)

## Installation

1. **Install dependencies:**
   ```bash
   cd quizitt_app
   npm install
   ```

2. **Set up environment variables:**
   Create a `.env` file in the root directory:
   ```env
   API_BASE_URL=http://127.0.0.1:3000
   GOOGLE_CLIENT_ID=your_google_client_id_here
   ```

3. **Start the backend server:**
   ```bash
   cd ../api
   npm install
   npm start
   ```

4. **Start the React Native app:**
   ```bash
   cd ../quizitt_app
   npm start
   ```

## Features Implemented

### Authentication
- ✅ Manual login/signup with email and password
- ✅ Google OAuth integration
- ✅ Email verification with OTP
- ✅ JWT token management
- ✅ Automatic token refresh
- ✅ Protected routes

### Local Storage
- ✅ AsyncStorage for auth tokens
- ✅ User data persistence
- ✅ Automatic session restoration

### Navigation Flow
- ✅ Login → Dashboard (existing users)
- ✅ Login → Survey (new users)
- ✅ Registration → Email verification → Survey
- ✅ Survey → Dashboard

## API Integration

The app connects to the backend at `Quizitt/api` with the following endpoints:

- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/register` - User registration
- `POST /api/v1/auth/verify-email` - Email verification
- `GET /api/v1/auth/me` - Get current user
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/google` - Google OAuth

## Mobile-Specific Considerations

### Authentication
- Uses AsyncStorage instead of cookies for token storage
- Automatic token inclusion in API requests
- Handles 401 errors by clearing local storage and redirecting to login

### CORS
- Mobile apps don't enforce CORS like browsers
- Backend handles mobile requests properly
- Token-based authentication instead of cookie-based

## Development

### Running on Device/Simulator
```bash
# For iOS
npm run ios

# For Android
npm run android

# For web
npm run web
```

### Testing Authentication
1. Start the backend server
2. Run the app on device/simulator
3. Try registering a new account
4. Check email for verification OTP
5. Verify email and complete survey
6. Test login with existing account

## Troubleshooting

### Common Issues

1. **API connection failed:**
   - Ensure backend server is running on port 3000
   - Check API_BASE_URL in environment variables
   - Verify network connectivity

2. **Google OAuth not working:**
   - Configure Google Client ID in environment variables
   - Ensure OAuth redirect URLs are properly set up

3. **Token expiration:**
   - App automatically handles token refresh
   - Check backend JWT_SECRET configuration

4. **AsyncStorage issues:**
   - Clear app data and restart
   - Check for storage permissions

## File Structure

```
quizitt_app/
├── app/                    # Expo Router screens
│   ├── login/             # Login screen
│   ├── signup/            # Signup screen
│   ├── dashboard/         # Dashboard screen
│   ├── survey/            # Survey screens
│   └── email-verification/ # Email verification screen
├── components/            # Reusable components
│   └── ProtectedRoute.tsx # Route protection component
├── context/               # React Context
│   └── AuthContext.tsx    # Authentication context
├── services/              # API services
│   └── api.ts            # API configuration and functions
└── app.config.js         # Expo configuration
```

## Next Steps

1. Implement survey functionality
2. Add quiz features
3. Integrate with backend quiz endpoints
4. Add push notifications
5. Implement offline functionality
6. Add error boundaries and better error handling 