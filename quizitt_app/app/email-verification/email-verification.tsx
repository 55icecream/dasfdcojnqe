import React, { useState, useEffect } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Modal,
  Alert,
} from "react-native";
import { router } from "expo-router";
import { useAuth } from "../../context/AuthContext";
import axios from "axios";

export default function EmailVerification() {
  const { user, verifyEmail } = useAuth();
  const [email, setEmail] = useState(user?.email || "");
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // If user is already verified, redirect away
  useEffect(() => {
    if (user && user.emailVerified) {
      if (user.surveyFilled) {
        router.replace('/dashboard/dashboardpage');
      } else {
        router.replace('/survey/survey1');
      }
    }
  }, [user]);

  const handleVerifyEmail = async () => {
    if (!email || !otp) {
      setErrorMessage("Please enter both email and OTP");
      setShowErrorModal(true);
      return;
    }

    setLoading(true);
    try {
      await verifyEmail(email, otp);
      // Navigation is handled in the auth context
    } catch (err) {
      console.error(err);
      let message = "Email verification failed. Please try again.";

      if (axios.isAxiosError(err)) {
        message = err.response?.data?.message || message;
      }
      setErrorMessage(message);
      setShowErrorModal(true);
    } finally {
      setLoading(false);
    }
  };

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
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 32,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            {"Verify Email"}
          </Text>
        </View>

        <View
          style={{
            marginHorizontal: 24,
            marginBottom: 30,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              textAlign: "center",
              lineHeight: 24,
            }}
          >
            {
              "We've sent a verification code to your email address. Please enter the code below to verify your account."
            }
          </Text>
        </View>

        {/* Email Input */}
        <View
          style={{
            borderColor: "#FFFFFF",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 11,
            paddingHorizontal: 26,
            marginBottom: 18,
            marginHorizontal: 24,
          }}
        >
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
            }}
          />
        </View>

        {/* OTP Input */}
        <View
          style={{
            borderColor: "#FFFFFF",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 11,
            paddingHorizontal: 26,
            marginBottom: 30,
            marginHorizontal: 24,
          }}
        >
          <TextInput
            placeholder={"Enter OTP"}
            value={otp}
            onChangeText={setOtp}
            keyboardType="number-pad"
            placeholderTextColor="#827F7F"
            style={{
              color: "#FFFFFF",
              fontSize: 16,
            }}
            maxLength={6}
          />
        </View>

        <TouchableOpacity
          style={{
            alignItems: "center",
            backgroundColor: "#9C73F4",
            borderRadius: 10,
            paddingVertical: 12,
            marginBottom: 20,
            marginHorizontal: 24,
          }}
          onPress={handleVerifyEmail}
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
              {"Verify Email"}
            </Text>
          )}
        </TouchableOpacity>

        <View
          style={{
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <TouchableOpacity onPress={() => router.push("/login/login")}>
            <Text
              style={{
                color: "#9C73F4",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Back to Login"}
            </Text>
          </TouchableOpacity>
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
            <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
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