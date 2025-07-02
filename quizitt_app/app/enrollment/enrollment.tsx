import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router"; 

 
import BottomBar from "../../components/CustomBottomBar";

export default function EnrollmentScreen() {
  const router = useRouter();

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
        contentContainerStyle={{ paddingBottom: 100 }} // Add bottom padding to avoid content hidden behind BottomBar
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginBottom: 27,
            marginLeft: 10,
            marginTop: 35,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/m70gl8cd_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 40,
              height: 60,
            }}
          />
          <View
            style={{
              marginTop: 8,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/6p8dkqmk_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 80,
                height: 24,
              }}
            />
            <View
              style={{
                alignItems: "flex-end",
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/hdykuefm_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  width: 40,
                  height: 8,
                }}
              />
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            marginBottom: 31,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 22,
              fontWeight: "bold",
              textAlign: "center",
              width: 230,
            }}
          >
            {"My Enrollments"}
          </Text>
        </View>

        {/* JEE Enrollment Card - Made Touchable */}
        <TouchableOpacity
          onPress={() => router.push("/dashboard/dashboardpage")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#6B96E666",
            borderColor: "#1E63E4",
            borderRadius: 15,
            borderWidth: 4,
            marginBottom: 28,
            marginHorizontal: 22,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#6B96E6",
              borderRadius: 15,
              borderWidth: 4,
              paddingTop: 11,
              paddingBottom: 31,
              marginRight: 7,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/o055vw9u_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 150,
                height: 120,
                marginBottom: 20,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                position: "absolute",
                bottom: 27,
                left: 65,
                color: "#ABABAB",
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              {"JEE"}
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: "bold",
                marginBottom: 9,
              }}
            >
              {"Joint Entrance Exam"}
            </Text>
            <Text
              style={{
                color: "#E3DCDC",
                fontSize: 10,
                marginBottom: 47,
                marginHorizontal: 2,
                width: 142,
              }}
            >
              {"Master India’s Toughest Engineering  Entrance exam  with new age learning"}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginHorizontal: 9,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingRight: 1,
                  marginRight: 49,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/1nfi2bzx_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    color: "#9ABDFF",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {"17"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingRight: 3,
                }}
              >
                <Text
                  style={{
                    color: "#E92125",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginRight: 4,
                  }}
                >
                  {"P"}
                </Text>
                <Text
                  style={{
                    color: "#6B96E6",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginRight: 4,
                  }}
                >
                  {"C"}
                </Text>
                <Text
                  style={{
                    color: "#FFC100",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {"M"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        {/* NEET Enrollment Card - Made Touchable */}
        <TouchableOpacity
          onPress={() => router.push("/dashboard/dashboardpage")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#6B96E666",
            borderColor: "#1E63E4",
            borderRadius: 15,
            borderWidth: 4,
            marginBottom: 28,
            marginHorizontal: 22,
          }}
        >
          <View
            style={{
              flex: 1,
              backgroundColor: "#FFFFFF",
              borderColor: "#6B96E6",
              borderRadius: 15,
              borderWidth: 4,
              paddingTop: 11,
              paddingBottom: 31,
              marginRight: 7,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/qg8p22km_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 150,
                height: 120,
                marginBottom: 20,
                marginLeft: 15,
              }}
            />
            <Text
              style={{
                position: "absolute",
                bottom: 27,
                right: 49,
                left: 49,
                color: "#ABABAB",
                fontSize: 24,
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              {"NEET"}
            </Text>
          </View>
          <View
            style={{
              alignItems: "flex-start",
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 12,
                fontWeight: "bold",
                marginBottom: 9,
                width: 112,
              }}
            >
              {"National Eligibility Entrance Test"}
            </Text>
            <Text
              style={{
                color: "#E3DCDC",
                fontSize: 10,
                marginBottom: 28,
                marginHorizontal: 2,
                width: 144,
              }}
            >
              {"Master India’s Toughest Medical  Entrance exam  with new age learning"}
            </Text>
            <View
              style={{
                flexDirection: "row",
                alignItems: "flex-start",
                marginHorizontal: 9,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingRight: 1,
                  marginRight: 49,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/f8ayp0wy_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 22,
                    height: 22,
                    marginRight: 5,
                  }}
                />
                <Text
                  style={{
                    color: "#9ABDFF",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {"17"}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  paddingRight: 2,
                }}
              >
                <Text
                  style={{
                    color: "#E92125",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginRight: 4,
                  }}
                >
                  {"P"}
                </Text>
                <Text
                  style={{
                    color: "#6B96E6",
                    fontSize: 15,
                    fontWeight: "bold",
                    marginRight: 4,
                  }}
                >
                  {"C"}
                </Text>
                <Text
                  style={{
                    color: "#54C025",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {"B"}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>

        <Image
          source={{
            uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/nhrke6nz_expires_30_days.png",
          }}
          resizeMode={"stretch"}
          style={{
            height: 200,
            marginBottom: 57,
            marginHorizontal: 22,
            marginLeft: 30,
          }}
        />
      </ScrollView>

      {/* Bottom Navigation Bar */}
      <BottomBar />
    </SafeAreaView>
  );
}
