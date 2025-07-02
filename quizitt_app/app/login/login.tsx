import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import { router } from "expo-router";
import axios from "axios";
import * as WebBrowser from "expo-web-browser";
import { useCallback, useState, useEffect } from "react";
import {
  ActivityIndicator,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Modal,
} from "react-native";
import { getGoogleAuthUrl } from "@/services/api";
import { useAuth } from "../../context/AuthContext";

// export default function Login(props) {
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigation = useNavigation();
  const { login, user, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && user) {
      if (user.emailVerified) {
        if (user.surveyFilled) {
          router.replace("../dashboard/dashboardpage");
        } else {
          router.replace("../survey/survey1");
        }
      } else {
        router.replace("../email-verification/email-verification");
      }
    }
  }, [user, isLoading]);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setErrorMessage("Please enter both email and password");
      setShowErrorModal(true);
      return;
    }

    setLoading(true);
    try {
      await login(email, password);
      // Navigation is handled in the auth context
    } catch (err: unknown) {
      console.error(err);

      let message = "Login failed. Please check your credentials.";

      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || message;
      }

      setErrorMessage(message);
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = useCallback(async () => {
    try {
      setLoading(true);
      const redirectUrl = getGoogleAuthUrl();
      const result = await WebBrowser.openAuthSessionAsync(redirectUrl, "");

      if (result.type === "success" && result.url) {
        console.log("Google OAuth success:", result.url);

        router.push("/dashboard/dashboardpage");
      } else if (result.type === "cancel") {
        setErrorMessage("Google login cancelled.");
        setShowErrorModal(true);
      } else {
        setErrorMessage("Google login failed. Please try again.");
        setShowErrorModal(true);
      }
    } catch (error) {
      console.error("Google login error:", error);
      setErrorMessage("An unexpected error occurred during Google login.");
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  }, []);

  const closeErrorModal = () => {
    setShowErrorModal(false);
    setErrorMessage("");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#FFFFFF",
      }}
    >
      <ScrollView
        style={{
          flex: 1,
          backgroundColor: "#222B40",
        }}
      >
        <View
          style={{
            alignItems: "center",
            marginBottom: 8,
            marginTop: 100,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/jhjhsg70_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 57,
              height: 86,
            }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 37,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 32,
              fontWeight: "bold",
            }}
          >
            {"Login"}
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#FFFFFF",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 11,
            paddingHorizontal: 26,
            marginBottom: 18,
            marginHorizontal: 24,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/c7aw6lfg_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 16,
              height: 13,
              marginRight: 13,
            }}
          />
          <TextInput
            placeholder={"Email Address"}
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            keyboardType="email-address"
            placeholderTextColor="#827F7F"
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              flex: 1,
            }}
            maxLength={255}
            accessible={true}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#FFFFFF",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 11,
            paddingLeft: 28,
            paddingRight: 16,
            marginBottom: 16,
            marginHorizontal: 24,
          }}
        >
          <View
            style={{
              alignItems: "center",
              marginRight: 15,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/cnb5u3kw_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 7,
                height: 6,
              }}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/57j57i9k_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 12,
                height: 7,
              }}
            />
          </View>
          <TextInput
            placeholder={"Password"}
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!isPasswordVisible}
            autoCapitalize="none"
            placeholderTextColor="#827F7F"
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              flex: 1,
            }}
          />

          <TouchableOpacity onPress={togglePasswordVisibility}>
            <Image
              source={{
                uri: isPasswordVisible
                  ? "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/y68s7niv_expires_30_days.png"
                  : "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/y68s7niv_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 19,
                height: 19,
              }}
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 35,
            marginHorizontal: 29,
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderColor: "#827F7F",
              borderRadius: 5,
              borderWidth: 2,
              marginRight: 13,
            }}
          ></View>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 14,
              fontWeight: "bold",
              marginRight: 76,
            }}
          >
            {"Remember Me"}
          </Text>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 10,
              fontWeight: "bold",
              flex: 1,
            }}
          >
            {"Forgot Password?"}
          </Text>
        </View>
        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#9C73F4",
            borderRadius: 10,
            paddingVertical: 12,
            marginBottom: 30,
            marginHorizontal: 24,
          }}
          onPress={handleLogin}
          disabled={loading}
        >
          {loading ? (
            <ActivityIndicator color="#FFFFFF" />
          ) : (
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
              }}
            >
              {"Login"}
            </Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 35,
            marginHorizontal: 29,
          }}
        >
          <View
            style={{
              width: 99,
              height: 1,
              backgroundColor: "#827F7F6E",
              marginRight: 10,
            }}
          ></View>
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: "bold",
              marginRight: 14,
            }}
          >
            {"or continue with"}
          </Text>
          <View
            style={{
              height: 1,
              flex: 1,
              backgroundColor: "#827F7F6E",
            }}
          ></View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 46,
          }}
        >
          <TouchableOpacity
            onPress={handleGoogleLogin}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#4285F4",
              borderRadius: 10,
              paddingVertical: 12,
              paddingHorizontal: 20,
            }}
            disabled={loading}
          >
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 24,
                height: 24,
                marginRight: 10,
              }}
            />
            <Text style={{ color: "#fff", fontWeight: "bold", fontSize: 16 }}>
              Sign in with Google
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 114,
          }}
        >
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Don't have an account? "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/signup/signup")}>
              <Text
                style={{
                  color: "#9C73F4",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                Sign up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>

      {/* Custom Error Modal */}
      <Modal
        visible={showErrorModal}
        transparent={true}
        animationType="fade"
        onRequestClose={closeErrorModal}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.5)",
          }}
        >
          <View
            style={{
              backgroundColor: "white",
              padding: 20,
              borderRadius: 10,
              alignItems: "center",
              marginHorizontal: 20,
              maxWidth: 300,
            }}
          >
            <Text
              style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}
            >
              Error
            </Text>
            <Text style={{ textAlign: "center", marginBottom: 20 }}>
              {errorMessage}
            </Text>
            <TouchableOpacity
              onPress={closeErrorModal}
              style={{
                backgroundColor: "#9C73F4",
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
