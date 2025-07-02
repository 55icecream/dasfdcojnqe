# Troubleshooting Network Connectivity Issues

## Problem: Network Error when connecting to backend

If you're seeing errors like:
```
ERROR API Response Error: undefined undefined
ERROR Login error: [AxiosError: Network Error]
```

This means your mobile app can't reach the backend server. Here's how to fix it:

## 🔧 Quick Fix Steps

### 1. Find Your Computer's IP Address
Run this command in your terminal:
```bash
cd quizitt_app
npm run find-ip
```

This will show you your computer's IP address (e.g., `192.168.1.100`)

### 2. Update the API Configuration
Open `quizitt_app/services/api.ts` and update the IP address:

```typescript
// Change this line in the getApiBaseUrl function:
return "http://192.168.1.100:3000"; // Replace with your actual IP
```

### 3. Ensure Backend is Running
Make sure your backend server is running:
```bash
cd ../api
npm start
```

You should see the server running on port 3000.

### 4. Test the Connection
Try accessing the backend from your computer's browser:
```
http://YOUR_IP_ADDRESS:3000/api/v1/auth/me
```

## 🔍 Detailed Troubleshooting

### Check Network Connectivity

1. **Same Network**: Ensure your phone/emulator and computer are on the same WiFi network

2. **Firewall Settings**: 
   - Windows: Allow Node.js through Windows Firewall
   - macOS: Allow incoming connections for port 3000
   - Linux: Check iptables/ufw settings

3. **Router Settings**: Some routers block local network communication

### Alternative Solutions

#### Option 1: Use Environment Variables
Create a `.env` file in `quizitt_app/`:
```env
API_BASE_URL=http://YOUR_IP_ADDRESS:3000
```

#### Option 2: Use ngrok (for testing)
If you can't get local network working:

1. Install ngrok: `npm install -g ngrok`
2. Start your backend: `cd api && npm start`
3. In another terminal: `ngrok http 3000`
4. Use the ngrok URL in your API configuration

#### Option 3: Use Expo Tunnel
Start Expo with tunnel mode:
```bash
expo start --tunnel
```

### Platform-Specific Issues

#### Android Emulator
- Use `10.0.2.2:3000` instead of localhost
- Or use your computer's IP address

#### iOS Simulator
- Use `localhost:3000` (works fine)
- Or use your computer's IP address

#### Physical Device
- Must use your computer's IP address
- Ensure both devices are on same network

## 🚨 Common Issues

### Issue: "Connection refused"
- Backend server not running
- Wrong port number
- Firewall blocking connection

### Issue: "Timeout"
- Network too slow
- Increase timeout in api.ts (currently 15 seconds)
- Check if backend is responding slowly

### Issue: "CORS error"
- Mobile apps don't have CORS restrictions
- This error usually means the request isn't reaching the server

## ✅ Verification Steps

1. **Backend Running**: `curl http://localhost:3000/api/v1/auth/me`
2. **Network Access**: `curl http://YOUR_IP:3000/api/v1/auth/me`
3. **App Logs**: Check Expo logs for detailed error messages

## 📱 Testing on Different Platforms

### Web (Expo Web)
- Use `localhost:3000` - works fine

### iOS Simulator
- Use `localhost:3000` or your computer's IP

### Android Emulator
- Use `10.0.2.2:3000` or your computer's IP

### Physical Device
- Must use your computer's IP address

## 🔄 After Making Changes

1. Stop the Expo development server
2. Clear Metro cache: `expo start --clear`
3. Restart the app on your device/emulator

## 📞 Still Having Issues?

1. Check the Expo logs for detailed error messages
2. Try the ngrok solution for immediate testing
3. Verify your backend is accessible from a browser
4. Test with a simple API endpoint first

## 🎯 Quick Test

Add this to your login screen temporarily to test connectivity:

```typescript
const testConnection = async () => {
  try {
    const response = await api.get('/api/v1/auth/me');
    console.log('✅ Connection successful:', response.data);
  } catch (error) {
    console.log('❌ Connection failed:', error.message);
  }
};
``` 