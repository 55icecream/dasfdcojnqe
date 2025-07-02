import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProtectedRoute } from "../../components/ProtectedRoute";
import { useAuth } from "../../context/AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <ProtectedRoute requireAuth={true} requireSurvey={false}>
      <SafeAreaView
        style={{
          flex: 1,
          backgroundColor: "#FFFFFF",
        }}
      >
        <ScrollView
          style={{
            flex: 1,
            backgroundColor: "#212B3F",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 27,
              marginLeft: 22,
              marginTop: 50,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginRight: 54,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#C3483D",
                  borderRadius: 5,
                  paddingVertical: 2,
                  paddingHorizontal: 20,
                  marginRight: 7,
                  shadowColor: "#00000040",
                  shadowOpacity: 0.3,
                  shadowOffset: {
                    width: 0,
                    height: 4,
                  },
                  shadowRadius: 4,
                  elevation: 4,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    width: 73,
                  }}
                >
                  {"Physics"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#EEB92A",
                  borderRadius: 5,
                  paddingVertical: 1,
                  paddingHorizontal: 6,
                  marginRight: 7,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    width: 15,
                  }}
                >
                  {"M"}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#5489EC",
                  borderRadius: 5,
                  paddingVertical: 1,
                  paddingHorizontal: 8,
                }}
                onPress={() => alert("Pressed!")}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 16,
                    width: 10,
                  }}
                >
                  {"C"}
                </Text>
              </TouchableOpacity>
            </View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/4bapo42m_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 40,
                height: 40,
                marginRight: 22,
              }}
            />
            <TouchableOpacity onPress={handleLogout}>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/51nij3zq_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 37,
                  height: 34,
                }}
              />
            </TouchableOpacity>
          </View>

          {/* User Info Display */}
          {user && (
            <View
              style={{
                backgroundColor: "#1B3059",
                padding: 16,
                marginHorizontal: 24,
                marginBottom: 20,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 18,
                  fontWeight: "bold",
                  marginBottom: 8,
                }}
              >
                Welcome, {user.username}!
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  marginBottom: 4,
                }}
              >
                Current Streak: {user.currentStreak || 0} days
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                }}
              >
                Longest Streak: {user.longestStreak || 0} days
              </Text>
            </View>
          )}

          <View
            style={{
              backgroundColor: "#1B3059",
              paddingTop: 16,
              paddingBottom: 2,
              marginBottom: 29,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 16,
                fontWeight: "bold",
                marginLeft: 23,
              }}
            >
              {"Gravitation"}
            </Text>
            <View
              style={{
                position: "absolute",
                bottom: 1,
                right: 0,
                left: 0,
                height: 24,
                backgroundColor: "#44557C",
              }}
            ></View>
          </View>

          {/* Dashboard Content */}
          <View
            style={{
              paddingBottom: 55,
              marginBottom: 21,
            }}
          >
            <View
              style={{
                alignItems: "flex-end",
                paddingBottom: 30,
                marginBottom: 61,
                marginHorizontal: 24,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    alignItems: "flex-start",
                  }}
                >
                  <TouchableOpacity
                    style={{
                      alignItems: "flex-start",
                      backgroundColor: "#FFFFFF",
                      borderColor: "#00000040",
                      borderRadius: 10,
                      borderWidth: 2,
                      padding: 9,
                    }}
                    onPress={() => alert("Pressed!")}
                  >
                    <View
                      style={{
                        backgroundColor: "#FFFFFF",
                        borderColor: "#00000000",
                        borderRadius: 10,
                        borderWidth: 2,
                        paddingVertical: 13,
                        paddingHorizontal: 10,
                        shadowColor: "#00000040",
                        shadowOpacity: 0.3,
                        shadowOffset: {
                          width: 0,
                          height: 4,
                        },
                        shadowRadius: 4,
                        elevation: 4,
                      }}
                    >
                      <Image
                        source={{
                          uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/qwe1ty9g_expires_30_days.png",
                        }}
                        resizeMode={"stretch"}
                        style={{
                          width: 30,
                          height: 25,
                        }}
                      />
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* Bottom Navigation */}
          <View
            style={{
              height: 4,
              backgroundColor: "#EDE3E336",
              marginBottom: 9,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 3,
              marginHorizontal: 7,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/2lsu246d_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 60,
                height: 60,
                marginRight: 20,
              }}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/cw7b0bcl_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 40,
                height: 40,
                marginRight: 20,
              }}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/g3fgxlfv_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 40,
                height: 40,
                marginRight: 20,
              }}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/m83pdiv3_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 40,
                height: 40,
                marginRight: 20,
              }}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/m2v8nzmf_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 40,
                height: 40,
                marginRight: 20,
              }}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/g2syxupt_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 40,
                height: 40,
              }}
            />
          </View>
          <View
            style={{
              width: 52,
              height: 4,
              backgroundColor: "#1E63E4",
              borderRadius: 10,
              marginBottom: 15,
              marginLeft: 10,
            }}
          ></View>
        </ScrollView>
      </SafeAreaView>
    </ProtectedRoute>
  );
}
