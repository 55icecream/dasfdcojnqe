import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default () => {
  const timeOptions = [
    {
      label: "30m-1hr",
      icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/iq073sp0_expires_30_days.png",
      customStyles: {
        container: {
          alignItems: "flex-end",
          marginBottom: 21,
          marginHorizontal: 18,
        },
        text: {
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 5,
          marginHorizontal: 114,
        },
        touchable: {
          position: "absolute",
          bottom: 2,
          right: 0,
          left: 0,
          backgroundColor: "#5E3BDE26",
          borderColor: "#1F64E466",
          borderRadius: 40,
          borderWidth: 5,
          shadowColor: "#00000040",
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowRadius: 4,
          elevation: 4,
        }
      }
    },
    {
      label: "1hr-3hr’s",
      icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/5lz3fd76_expires_30_days.png",
     customStyles: {
        container: {
          alignItems: "flex-end",
          marginBottom: 21,
          marginHorizontal: 18,
        },
        text: {
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: "bold",
        },
        touchable: {
          position: "absolute",
          top: 2,
          right: 0,
          left: 0,
          backgroundColor: "#5E3BDE26",
          borderColor: "#1F64E466",
          borderRadius: 40,
          borderWidth: 5,
          paddingTop: 10,
          paddingBottom: 13,
          paddingLeft: 115,
          paddingRight: 18,
          shadowColor: "#00000040",
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowRadius: 4,
          elevation: 4,
        }
      }
    },
    {
      label: "3hr-5hrs",
      icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/2hq0dlfm_expires_30_days.png",
      customStyles: {
        container: {
          marginBottom: 21,
          marginHorizontal: 18,
        },
        text: {
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 10,
          marginBottom: 5,
          marginHorizontal: 114,
        },
        touchable: {
          position: "absolute",
          bottom: 1,
          right: 0,
          left: 0,
          backgroundColor: "#5E3BDE26",
          borderColor: "#1F64E466",
          borderRadius: 40,
          borderWidth: 5,
          shadowColor: "#00000040",
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowRadius: 4,
          elevation: 4,
        }
      }
    },
    {
      label: ">5hrs",
      icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/ymzp7n3w_expires_30_days.png",
      customStyles: {
        container: {
          marginBottom: 312,
          marginHorizontal: 18,
        },
        text: {
          color: "#FFFFFF",
          fontSize: 16,
          fontWeight: "bold",
          marginTop: 9,
          marginBottom: 5,
          marginHorizontal: 123,
        },
        touchable: {
          position: "absolute",
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: "#5E3BDE26",
          borderColor: "#1F64E466",
          borderRadius: 40,
          borderWidth: 5,
          shadowColor: "#00000040",
          shadowOpacity: 0.3,
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowRadius: 4,
          elevation: 4,
        }
      }
    },
  ] as const;

const handlePress = (selectedTime: string) => {
  router.push(`/survey/survey3?time=${encodeURIComponent(selectedTime)}`);
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
            flexDirection: "row",
            alignItems: "center",
            marginTop: 19,
            marginBottom: 40,
            marginLeft: 24,
          }}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: "bold",
              marginRight: 236,
            }}
          >
            {"10:10"}
          </Text>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/6ckx8rne_expires_30_days.png" }}
            resizeMode={"stretch"}
            style={{
              width: 2,
              height: 3,
              marginRight: 2,
            }}
          />
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/kl2wh6nz_expires_30_days.png" }}
            resizeMode={"stretch"}
            style={{
              width: 1,
              height: 4,
              marginRight: 17,
            }}
          />
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 12,
              fontWeight: "bold",
              marginRight: 10,
            }}
          >
            {"4G"}
          </Text>
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/atjujhph_expires_30_days.png" }}
            resizeMode={"stretch"}
            style={{
              width: 27,
              height: 18,
            }}
          />
        </View>
        <View
          style={{
            marginBottom: 18,
            marginLeft: 12,
          }}
        >
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/shfudsb7_expires_30_days.png" }}
            resizeMode={"stretch"}
            style={{
              width: 7,
              height: 14,
            }}
          />
          <Image
            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/pq81c33s_expires_30_days.png" }}
            resizeMode={"stretch"}
            style={{
              position: "absolute",
              top: 7,
              left: 0,
              width: 22,
              height: 1,
            }}
          />
        </View>
        <View
          style={{
            alignItems: "flex-end",
            marginBottom: 38,
          }}
        >
          <View
            style={{
              marginRight: 36,
            }}
          >
            <Image
              source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/lv9lsd1i_expires_30_days.png" }}
              resizeMode={"stretch"}
              style={{
                width: 60,
                height: 90,
              }}
            />
            <LinearGradient
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              colors={["#6C34EFB0", "#CB6BE5B0"]}
              style={{
                position: "absolute",
                bottom: 7,
                right: -18,
                width: 357,
                borderColor: "#6B96E666",
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50,
                borderWidth: 4,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 16,
                  fontWeight: "bold",
                  marginTop: 13,
                  marginBottom: 36,
                  marginLeft: 13,
                }}
              >
                {"How much Time can you dedicate daily?"}
              </Text>
            </LinearGradient>
          </View>
        </View>

        {/* ---------- DYNAMIC TIME OPTIONS BELOW ---------- */}
       {timeOptions.map((option, index) => (
          <View key={index} style={option.customStyles.container}>
            <View style={{ alignItems: "flex-end" }}>
              <Image source={{ uri: option.icon }} resizeMode="stretch" style={{ width: 50, height: 50, marginRight: index > 1 ? 1 : 0 }} />
            </View>
            <TouchableOpacity onPress={() => handlePress(option.label)} style={option.customStyles.touchable}>
              <Text style={option.customStyles.text}>{option.label}</Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};