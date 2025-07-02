import React from "react";
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  View,
} from "react-native";
// export default function Podcast(props) {
export default function Podcast() {
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
          backgroundColor: "#212B3F",
        }}
      >
        <View
          style={{
            alignItems: "flex-start",
            marginBottom: 5,
            marginHorizontal: 15,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 49,
              marginLeft: 9,
              marginTop: 70,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/v7zlxl39_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 12,
                height: 6,
                marginRight: 88,
              }}
            />
            <Text
              style={{
                color: "#FF4E95",
                fontSize: 16,
                fontWeight: "bold",
                marginRight: 12,
              }}
            >
              {"Podcast"}
            </Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/mu4n4lsp_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 25,
                height: 25,
              }}
            />
          </View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/rg96edq8_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              height: 301,
              marginBottom: 24,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 48,
              marginLeft: 4,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "bold",
                marginRight: 263,
              }}
            >
              {"Unit 1.1"}
            </Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/vhca0b1x_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 12,
                height: 12,
              }}
            />
          </View>
          <View
            style={{
              alignItems: "flex-start",
              marginBottom: 2,
              marginLeft: 4,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/nelwcntc_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 51,
                height: 8,
              }}
            />
            <View
              style={{
                width: 315,
                height: 4,
                backgroundColor: "#EDE3E336",
                marginHorizontal: 1,
              }}
            ></View>
          </View>
          <View
            style={{
              flexDirection: "row",
              marginBottom: 5,
              marginLeft: 4,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 10,
                fontWeight: "bold",
                marginRight: 248,
              }}
            >
              {"0.02"}
            </Text>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 10,
                fontWeight: "bold",
              }}
            >
              {"15 min left"}
            </Text>
          </View>
          <View
            style={{
              alignItems: "center",
              marginBottom: 36,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: 12,
                  height: 21,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 1,
                  marginRight: 17,
                }}
              ></View>
              <ImageBackground
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/30xjdzey_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  alignItems: "flex-start",
                  paddingVertical: 14,
                  paddingHorizontal: 18,
                  marginRight: 16,
                }}
              >
                <View
                  style={{
                    width: 9,
                    height: 16,
                    backgroundColor: "#222B40",
                    borderRadius: 1,
                  }}
                ></View>
              </ImageBackground>
              <View
                style={{
                  width: 12,
                  height: 21,
                  backgroundColor: "#FFFFFF",
                  borderRadius: 1,
                }}
              ></View>
            </View>
          </View>
          <View
            style={{
              backgroundColor: "#D9D9D9",
              borderRadius: 10,
              paddingVertical: 8,
            }}
          >
            <Text
              style={{
                color: "#000000",
                fontSize: 13,
                fontWeight: "bold",
                marginBottom: 14,
                marginLeft: 13,
                width: 117,
              }}
            >
              {"Podcast Overview"}
            </Text>
            <Text
              style={{
                color: "#000000",
                fontSize: 12,
                marginHorizontal: 13,
              }}
            >
              {
                "Kinematics is a branch of physics that focuses on the motion of objects without considering the forces that cause the motion. It involves the study of key quantities such as displacement, velocity, speed, and acceleration to describe how objects move over time. Kinematics helps us understand both uniform motion (where velocity remains constant) and non-uniform motion (where there is acceleration). The subject uses mathematical equations known as the equations of motion to relate these quantities, especially in cases of constant acceleration. Examples of kinematics in real life include a car moving on a highway, a ball being thrown, or a satellite orbiting the Earth. It forms the foundation for understanding more advanced topics in mechanics and is essential for fields like engineering, robotics, and astronomy."
              }
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "#1C2335",
            paddingTop: 4,
            paddingBottom: 16,
          }}
        >
          <View
            style={{
              height: 4,
              backgroundColor: "#EDE3E336",
              marginBottom: 7,
            }}
          ></View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginBottom: 2,
              marginHorizontal: 7,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/bvsv9i9c_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/tnymuggh_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/869vmsve_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/k15ausa5_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/agnvtp3g_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/rjglbziv_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 60,
                height: 60,
              }}
            />
          </View>
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <View
              style={{
                width: 52,
                height: 4,
                backgroundColor: "#1E63E4",
                borderRadius: 10,
                marginRight: 11,
              }}
            ></View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
