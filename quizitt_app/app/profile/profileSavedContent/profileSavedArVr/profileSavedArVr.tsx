import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View } from "react-native";
export default function ProfileSavedArVr(props) {
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
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 13,
            marginLeft: 20,
            marginTop: 76,
          }}
        >
          <Text
            style={{
              color: "#5A9D96",
              fontSize: 32,
              fontWeight: "bold",
              marginRight: 25,
            }}
          >
            {"AR/VR"}
          </Text>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/o4fp9d2g_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 49,
              height: 49,
            }}
          />
        </View>
        <View
          style={{
            marginBottom: 27,
            marginHorizontal: 42,
          }}
        >
          <View
            style={{
              marginBottom: 18,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 8,
                marginLeft: 9,
              }}
            >
              {"Topic Name"}
            </Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/oqnm0ybl_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                height: 130,
              }}
            />
          </View>
          <View
            style={{
              marginBottom: 18,
            }}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 8,
                marginLeft: 9,
              }}
            >
              {"Topic Name"}
            </Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/7ttv9idm_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                height: 130,
              }}
            />
          </View>
          <View>
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 20,
                fontWeight: "bold",
                marginBottom: 8,
                marginLeft: 9,
              }}
            >
              {"Topic Name"}
            </Text>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/ysulljvd_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                height: 130,
              }}
            />
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/rp59crj9_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/ux57fglo_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/2b68tqt1_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/st87p9c1_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/kqowdp9w_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/8u5xp58o_expires_30_days.png",
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
