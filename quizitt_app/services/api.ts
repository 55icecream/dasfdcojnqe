import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Use the deployed backend URL
const API_BASE_URL = "https://quizitt-test-dep.onrender.com";

console.log("API_BASE_URL:", API_BASE_URL);

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Request interceptor
api.interceptors.request.use(
  async (config) => {
    console.log("API Request:", config.method?.toUpperCase(), config.url);
    console.log("Full URL:", `${config.baseURL}${config.url}`);

    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error("Error getting token from storage:", error);
    }
    return config;
  },
  (error) => {
    console.error("API Request Error:", error);
    return Promise.reject(error);
  }
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    console.log("API Response:", response.status, response.config.url);
    return response;
  },
  async (error) => {
    console.error("API Response Error:", error.response?.status, error.response?.data);
    
    if (error.response?.status === 401) {
      try {
        await AsyncStorage.removeItem("token");
        await AsyncStorage.removeItem("user");
        console.log("Token expired, cleared from storage");
      } catch (storageError) {
        console.error("Error clearing storage:", storageError);
      }
    }
    return Promise.reject(error);
  }
);

// ==================== AUTH ENDPOINTS ====================
export const authAPI = {
  register: (username: string, email: string, password: string) =>
    api.post("/api/v1/auth/register", { username, email, password }),
  
  login: (email: string, password: string) =>
    api.post("/api/v1/auth/login", { email, password }),
  
  verifyEmail: (email: string, otp: string) =>
    api.post("/api/v1/auth/verify-email", { email, otp }),
  
  getCurrentUser: () => api.get("/api/v1/auth/me"),
  
  logout: () => api.post("/api/v1/auth/logout"),
  
  updateSyllabus: (syllabus: string[], language?: string, dob?: string, phoneNumber?: string) =>
    api.patch("/api/v1/auth/syllabus", { syllabus, language, dob, phoneNumber }),
  
  updateAvatar: (avatarUrl: string) =>
    api.patch("/api/v1/auth/avatar", { avatarUrl }),
  
  updateUsername: (username: string) =>
    api.patch("/api/v1/auth/username", { username }),
  
  updateGender: (gender: string) =>
    api.patch("/api/v1/auth/gender", { gender }),
  
  forgotPassword: (email: string) =>
    api.post("/api/v1/auth/forgot-password", { email }),
  
  resetPassword: (token: string, email: string, password: string) =>
    api.post("/api/v1/auth/reset-password", { token, email, password }),
  
  getUsers: () => api.get("/api/v1/auth/users"),
  
  getProfile: () => api.get("/api/v1/auth/profile"),
  
  getProfiles: () => api.get("/api/v1/auth/profiles"),
};

// ==================== QUIZ ENDPOINTS ====================
export const quizAPI = {
  // Physics
  getPhysicsChapters: () => api.get("/api/v1/phy-pathway/physics/chapters"),
  getPhysicsChapter: (chapterId: number) => api.get(`/api/v1/phy-pathway/physics/chapters/${chapterId}`),
  getPhysicsSubtopics: (chapterId: number) => api.get(`/api/v1/phy-pathway/physics/chapters/${chapterId}/subtopics`),
  getPhysicsQuestions: (chapterId: number, subtopicId: number) => 
    api.get(`/api/v1/phy-pathway/physics/chapters/${chapterId}/subtopics/${subtopicId}`),
  
  // Chemistry
  getChemistryChapters: () => api.get("/api/v1/chem-pathway/chemistry/chapters"),
  getChemistryChapter: (chapterId: number) => api.get(`/api/v1/chem-pathway/chemistry/chapters/${chapterId}`),
  getChemistrySubtopics: (chapterId: number) => api.get(`/api/v1/chem-pathway/chemistry/chapters/${chapterId}/subtopics`),
  getChemistryQuestions: (chapterId: number, subtopicId: number) => 
    api.get(`/api/v1/chem-pathway/chemistry/chapters/${chapterId}/subtopics/${subtopicId}`),
  
  // Biology
  getBiologyChapters: () => api.get("/api/v1/bio-pathway/biology/chapters"),
  getBiologyChapter: (chapterId: number) => api.get(`/api/v1/bio-pathway/biology/chapters/${chapterId}`),
  getBiologySubtopics: (chapterId: number) => api.get(`/api/v1/bio-pathway/biology/chapters/${chapterId}/subtopics`),
  getBiologyQuestions: (chapterId: number, subtopicId: number) => 
    api.get(`/api/v1/bio-pathway/biology/chapters/${chapterId}/subtopics/${subtopicId}`),
  
  // Maths
  getMathsChapters: () => api.get("/api/v1/math-pathway/maths/chapters"),
  getMathsChapter: (chapterId: number) => api.get(`/api/v1/math-pathway/maths/chapters/${chapterId}`),
  getMathsSubtopics: (chapterId: number) => api.get(`/api/v1/math-pathway/maths/chapters/${chapterId}/subtopics`),
  getMathsQuestions: (chapterId: number, subtopicId: number) => 
    api.get(`/api/v1/math-pathway/maths/chapters/${chapterId}/subtopics/${subtopicId}`),
  
  // Flashcards
  getFlashcards: (subject: string, chapterId: number, subtopicId: number) =>
    api.get(`/api/v1/subjects/${subject}/chapters/${chapterId}/subtopics/${subtopicId}/flashcards`),
  
  // Quiz Scores
  saveQuizScore: (scoreData: any) => api.post("/api/v1/score/save", scoreData),
  getUserQuizScores: (userId: string) => api.get(`/api/v1/score/${userId}`),
  getUserQuizMeta: (userId: string) => api.get(`/api/v1/score/pathway/${userId}`),
  getUserQuizStats: (userId: string) => api.get(`/api/v1/score/stats/${userId}`),
  
  // AI Quiz Scores
  saveAIQuizScore: (scoreData: any) => api.post("/api/v1/ai-quiz-score/save", scoreData),
  getAIQuizScores: (userId: string) => api.get(`/api/v1/ai-quiz-score/user/${userId}`),
  
  // Quiz Stats
  getTotalQuizAttempts: (userId: string) => api.get(`/api/v1/quiz-stat/${userId}`),
  getQuizStreak: (userId: string) => api.get(`/api/v1/quiz-streak/${userId}`),
  getMonthlyStudyTime: (userId: string) => api.get(`/api/v1/monthly-time/${userId}`),
  getMonthlyAverageTime: (userId: string) => api.get(`/api/v1/monthly-average-time/${userId}`),
  
  // User Progress
  getUserProgress: (userId: string, subject: string) => api.get(`/api/v1/progress/${userId}/${subject}`),
  updateUserProgress: (progressData: any) => api.put("/api/v1/progress", progressData),
};

// ==================== MATERIAL ENDPOINTS ====================
export const materialAPI = {
  uploadMaterial: (formData: FormData) => 
    api.post("/api/v1/material/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    }),
  
  getMaterials: (params?: any) => api.get("/api/v1/material", { params }),
  
  togglePublicStatus: (materialId: string) => api.patch(`/api/v1/material/${materialId}/toggle-public`),
  
  // Podcasts
  uploadPodcasts: (formData: FormData) =>
    api.post("/api/v1/podcasts/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    }),
  
  getPodcasts: () => api.get("/api/v1/podcasts/shows"),
};

// ==================== COMMUNITY ENDPOINTS ====================
export const communityAPI = {
  uploadNote: (formData: FormData) =>
    api.post("/api/v1/community/upload", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    }),
  
  getPosts: () => api.get("/api/v1/community/posts"),
  
  addComment: (postId: string, text: string) =>
    api.post(`/api/v1/community/${postId}/comment`, { text }),
  
  likePost: (postId: string) => api.post(`/api/v1/community/${postId}/like`),
  
  // AI Chat
  chatWithAI: (message: string) => api.post("/api/v1/ai/chat", { message }),
};

// ==================== FRIEND ENDPOINTS ====================
export const friendAPI = {
  sendFriendRequest: (recipientId: string, message?: string) =>
    api.post("/api/v1/friend/request", { recipientId, message }),
  
  acceptFriendRequest: (requestId: string) =>
    api.put(`/api/v1/friend/accept/${requestId}`),
  
  declineFriendRequest: (requestId: string) =>
    api.put(`/api/v1/friend/decline/${requestId}`),
  
  getFriendStatus: () => api.get("/api/v1/friend/status"),
  
  getAllFriends: () => api.get("/api/v1/friend/allrequests"),
  
  getLeaderboard: () => api.get("/api/v1/friend/leaderboard"),
  
  getReceivedRequests: () => api.get("/api/v1/friend/requests/received"),
  
  getSentRequests: () => api.get("/api/v1/friend/requests/sent"),
  
  removeFriend: (friendId: string) => api.delete(`/api/v1/friend/${friendId}`),
  
  searchUsers: (query: string) => api.get(`/api/v1/friend/search?query=${query}`),
  
  followUser: (userId: string) => api.post(`/api/v1/friend/follow/${userId}`),
  
  getFollowing: () => api.get("/api/v1/friend/following"),
  
  getFollowers: () => api.get("/api/v1/friend/followers"),
};

// ==================== SUBSCRIPTION ENDPOINTS ====================
export const subscriptionAPI = {
  createCheckoutSession: (priceId: string) =>
    api.post("/api/v1/subscription/create-checkout-session", { priceId }),
  
  verifySession: (sessionId: string) =>
    api.post("/api/v1/subscription/verify-session", { sessionId }),
  
  getCurrentSubscription: () => api.get("/api/v1/subscription/status"),
  
  getUserSubscription: (userId: string) => api.get(`/api/v1/subscription/user/${userId}/status`),
};

// ==================== USER SURVEY ENDPOINTS ====================
export const surveyAPI = {
  submitSurvey: (surveyData: any) => api.post("/api/v1/survey", surveyData),
};

// ==================== USER ENDPOINTS ====================
export const userAPI = {
  getStreak: () => api.get("/api/v1/user/streak"),
  
  deleteUser: (userId: string) => api.delete(`/api/v1/auth/delete/${userId}`),
};

// ==================== ADMIN ENDPOINTS ====================
export const adminAPI = {
  createDashboard: (name: string, password: string) =>
    api.post("/api/v1/admin/new", { name, password }),
  
  getDashboard: (dashboardId: string) =>
    api.post("/api/v1/admin/getAdminDashboard", { DashboardId: dashboardId }),
};

// ==================== SUMMARY/AI ENDPOINTS ====================
export const summaryAPI = {
  generateSummary: (formData: FormData) =>
    api.post("/api/v1/summary/generate", formData, {
      headers: { "Content-Type": "multipart/form-data" }
    }),
};

// ==================== NSFW DETECTION ====================
export const nsfwAPI = {
  checkFile: (fileUrl: string) => api.post("/api/v1/nsfw/check-file-nsfw", { fileUrl }),
};

// ==================== USER PATHWAY ====================
export const pathwayAPI = {
  createPathway: (pathwayData: any) => api.post("/api/v1/userPathway", pathwayData),
  
  getUserPathways: (userId: string) => api.get(`/api/v1/userPathway/my/${userId}`),
  
  getPathwayById: (pathwayId: string) => api.get(`/api/v1/userPathway/${pathwayId}`),
  
  updatePathway: (pathwayId: string, pathwayData: any) =>
    api.put(`/api/v1/userPathway/${pathwayId}`, pathwayData),
  
  deletePathway: (pathwayId: string, userId: string) =>
    api.delete(`/api/v1/userPathway/${pathwayId}`, { data: { userId } }),
  
  getPublicPathways: () => api.get("/api/v1/userPathway/public"),
};

// Legacy exports for backward compatibility
export const testConnection = () => api.get("/api/v1/auth/me");
export const login = (email: string, password: string) => authAPI.login(email, password);
export const register = (username: string, email: string, password: string) => authAPI.register(username, email, password);
export const verifyEmail = (email: string, otp: string) => authAPI.verifyEmail(email, otp);
export const logout = () => authAPI.logout();
export const getCurrentUser = () => authAPI.getCurrentUser();
export const getGoogleAuthUrl = () => `${API_BASE_URL}/api/v1/auth/google`;

export default api;