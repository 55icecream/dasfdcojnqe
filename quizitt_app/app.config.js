export default {
	expo: {
		name: "Quizitt",
		slug: "quizitt-app",
		version: "1.0.0",
		orientation: "portrait",
		icon: "./assets/icon.png",
		userInterfaceStyle: "light",
		splash: {
			image: "./assets/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
		},
		android: {
			package: "com.quizitt.app",
			adaptiveIcon: {
				foregroundImage: "./assets/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
		},
		web: {
			favicon: "./assets/favicon.png",
		},
		extra: {
			API_BASE_URL: "https://quizitt-test-dep.onrender.com",
			GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
		},
		plugins: ["expo-router"],
	},
};

