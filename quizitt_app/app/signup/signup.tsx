import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { router } from "expo-router";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  TextInput, 
  ActivityIndicator, 
  Modal 
} from "react-native";
import axios from "axios";
import { useAuth } from "../../context/AuthContext";

// export default function Signup(props) {
export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); 
  const [loading, setLoading] = useState(false);
  const [showErrorModal, setShowErrorModal] = useState(false); // State for error modal
  const [errorMessage, setErrorMessage] = useState(""); // State for error message
  
  const navigation = useNavigation();
  const { register } = useAuth();

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prevState) => !prevState);
  };

  const handleRegister = async () => {
    if (!username || !email || !password) {
      setErrorMessage("Please fill in all fields");
      setShowErrorModal(true);
      return;
    }

    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long");
      setShowErrorModal(true);
      return;
    }

    setLoading(true);
    try {
      await register(username, email, password);
      // Navigation is handled in the auth context
    } catch (err) {
      console.error(err);
      let message = "Registration failed. Please try again.";

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
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/kih3keoo_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 57,
              height: 86,
            }}
          />
        </View>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 32,
            fontWeight: "bold",
            marginBottom: 25,
            marginHorizontal: 46,
          }}
        >
          {"Create an account"}
        </Text>
        {/* Username Input */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            borderColor: "#FFFFFF",
            borderRadius: 10,
            borderWidth: 1,
            paddingVertical: 14,
            paddingHorizontal: 27,
            marginBottom: 19,
            marginHorizontal: 26,
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/v92sg26c_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 7,
                height: 6,
                marginBottom: 4,
              }}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/u6c6u9tw_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 13,
                height: 5,
              }}
            />
          </View>
          <TextInput
            placeholder={"Your Name"}
            value={username}
            onChangeText={setUsername}
            placeholderTextColor="#827F7F"
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              marginVertical: 1,
              flex: 1, // Allow text input to take available space
            }}
          />
        </View>
        {/* Email Input */}
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
              color: "#FFFFFF", // Changed to white for better contrast on dark background
              fontSize: 16,
              flex: 1,
            }}
            maxLength={255}       
            accessible={true}
          />
        </View>
        {/* Password Input */}
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
            marginBottom: 30,
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
            marginLeft: 31,
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              backgroundColor: "#FFFFFF",
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
            }}
          >
            {"Accept terms & condition"}
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
          onPress={handleRegister}
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
              {"Sign Up"}
            </Text>
          )}
        </TouchableOpacity>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 35,
            marginHorizontal: 31,
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              source={{
                uri: "https://i.pinimg.com/736x/46/2e/b8/462eb83802ec8299536cec2b6fad9b8f.jpg",
              }}
              resizeMode={"stretch"}
              style={{
                width: 40,
                height: 41,
                marginRight: 69,
              }}
            />
            <View
              style={{
                alignItems: "flex-start",
                marginRight: 77,
              }}
            >
              <View
                style={{
                  marginLeft: 15,
                }}
              >
                <Image
                  source={{
                    uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Google_Favicon_2025.svg/250px-Google_Favicon_2025.svg.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 27,
                    height: 27,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                alignItems: "center",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/dfrkdlff_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 9,
                  height: 10,
                }}
              />
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/ak1x4y7j_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 24,
                  height: 24,
                }}
              />
            </View>
          </View>
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
              {"Already have an account? "}
            </Text>
            <TouchableOpacity onPress={() => router.push("/login/login")}>
              <Text
                style={{
                  color: "#9C73F4",
                  fontSize: 14,
                  fontWeight: "bold"
                }}
              >
                Sign in
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
        <View style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,0.5)'
        }}>
          <View style={{
            backgroundColor: 'white',
            padding: 20,
            borderRadius: 10,
            alignItems: 'center',
            marginHorizontal: 20,
            maxWidth: 300,
          }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Error</Text>
            <Text style={{ textAlign: 'center', marginBottom: 20 }}>{errorMessage}</Text>
            <TouchableOpacity
              onPress={closeErrorModal}
              style={{
                backgroundColor: '#9C73F4',
                paddingVertical: 10,
                paddingHorizontal: 20,
                borderRadius: 5,
              }}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>OK</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}