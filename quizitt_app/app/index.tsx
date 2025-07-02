import { Link } from "expo-router";
import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
 
export default function HomeScreen() {
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
            alignItems: "flex-start",
            paddingTop: 76,
            paddingBottom: 30,
            paddingLeft: 163,
            marginBottom: 1,
          }}
        >
          <View>
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/1olgkgkj_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 185,
                height: 277,
              }}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/29ru1wri_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                bottom: 13,
                left: -8,
                width: 193,
                height: 27,
              }}
            />
          </View>
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/aj3lok7t_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              position: "absolute",
              top: -9,
              right: 112,
              width: 220,
              height: 232,
            }}
          />
        </View>
        <View
          style={{
            marginBottom: 19,
            marginLeft: 114,
          }}
        >
          <Image
            source={{
              uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/h92ypos5_expires_30_days.png",
            }}
            resizeMode={"stretch"}
            style={{
              width: 129,
              height: 39,
            }}
          />
          <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/9352e60d_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 63,
                height: 13,
              }}
            />
          </View>
        </View>
        <Text
          style={{
            color: "#FFFFFF",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 131,
            marginHorizontal: 43,
          }}
        >
          {"The fun way to get serious about studying!"}
        </Text>
        <Link href="./login/login" asChild>
          <TouchableOpacity>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#CB6BE680", "#1E63E480"]}
              style={{
                borderColor: "#00000040",
                borderRadius: 100,
                borderWidth: 3,
                paddingVertical: 9,
                marginBottom: 12,
                marginHorizontal: 14,
                alignItems: "center",
              }}
            >  <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
                Login
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </Link>

        <Link href="./signup/signup" asChild>
          <TouchableOpacity>
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#CB6BE680", "#1E63E480"]}
              style={{
                alignItems: "center",
                borderColor: "#00000040",
                borderRadius: 100,
                borderWidth: 3,
                paddingVertical: 10,
                marginBottom: 55,
                marginHorizontal: 14,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 20,
                  fontWeight: "bold",
                }}
              >
               Signup
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        </Link>
      </ScrollView>
    </SafeAreaView>
  );
}


 