import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router"; // Assuming you are still using expo-router for navigation

export default () => {
    // Define your options as an array of objects, similar to timeOptions
    const quizittOptions = [
        {
            label: "T.V",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/azq0rhwa_expires_30_days.png",
            styles: { // Renamed from customStyles to just 'styles' for clarity
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1F64E466",
                    borderRadius: 40,
                    borderWidth: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 35,
                    marginBottom: 31,
                    marginLeft: 14,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 20,
                    height: 22,
                    marginRight: 29,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 16,
                    // width: 21, // No need for fixed width if text input is not used
                    paddingVertical: -4,
                },
            }
        },
        {
            label: "Google Search",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/zdltubmq_expires_30_days.png",
            styles: {
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1F64E466",
                    borderRadius: 40,
                    borderWidth: 5,
                    paddingVertical: 10,
                    paddingHorizontal: 31,
                    marginBottom: 31,
                    marginLeft: 14,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 28,
                    height: 21,
                    marginVertical: 2,
                    marginRight: 25,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 16,
                    // width: 116,
                    paddingVertical: 1,
                },
            }
        },
        {
            label: "Youtube",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/evela3d8_expires_30_days.png",
            styles: {
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1F64E466",
                    borderRadius: 40,
                    borderWidth: 5,
                    paddingVertical: 8,
                    paddingHorizontal: 26,
                    marginBottom: 31,
                    marginLeft: 14,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 37,
                    height: 29,
                    marginRight: 21,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 16,
                    // width: 65,
                    paddingVertical: 3,
                },
            }
        },
        {
            label: "News Article",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/u8bw0ff5_expires_30_days.png",
            styles: {
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1F64E466",
                    borderRadius: 40,
                    borderWidth: 5,
                    paddingVertical: 9,
                    paddingHorizontal: 32,
                    marginBottom: 29,
                    marginLeft: 16,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 24,
                    height: 24,
                    marginRight: 26,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 16,
                    // width: 95,
                    paddingVertical: 1,
                },
            }
        },
        {
            label: "Peer’s",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/7bqnp3q7_expires_30_days.png",
            styles: {
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1F64E466",
                    borderRadius: 40,
                    borderWidth: 5,
                    paddingVertical: 11,
                    paddingHorizontal: 22,
                    marginBottom: 29,
                    marginLeft: 15,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 45,
                    height: 22,
                    marginRight: 16,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 16,
                    // width: 44,
                    paddingVertical: -1,
                },
            }
        },
        {
            label: "Social Media",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/wank0sw7_expires_30_days.png",
            styles: {
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1E63E480",
                    borderRadius: 40,
                    borderWidth: 4,
                    paddingVertical: 10,
                    paddingHorizontal: 20,
                    marginBottom: 176,
                    marginLeft: 15,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 47,
                    height: 27,
                    marginRight: 16,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 16,
                    // width: 99,
                },
            }
        },
    ] as const; // Added `as const` for type inference, similar to your example

    const handlePress = (selectedOption: string) => {
        // You can pass the selected option as a query parameter if needed
        router.push(`/survey/survey4?source=${encodeURIComponent(selectedOption)}`);
    };

    return (
        <SafeAreaView
            style={{
                flex: 1,
                backgroundColor: "#FFFFFF",
            }}>
            <ScrollView
                style={{
                    flex: 1,
                    backgroundColor: "#222B40",
                }}>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 19,
                        marginBottom: 40,
                        marginLeft: 24,
                    }}>
                    <Text
                        style={{
                            color: "#FFFFFF",
                            fontSize: 12,
                            fontWeight: "bold",
                            marginRight: 236,
                        }}>
                        {"10:10"}
                    </Text>
                    <Image
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/y4rtxgyf_expires_30_days.png" }}
                        resizeMode={"stretch"}
                        style={{
                            width: 2,
                            height: 3,
                            marginRight: 2,
                        }}
                    />
                    <Image
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/knl22a6v_expires_30_days.png" }}
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
                        }}>
                        {"4G"}
                    </Text>
                    <Image
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/5oo128w7_expires_30_days.png" }}
                        resizeMode={"stretch"}
                        style={{
                            width: 27,
                            height: 18,
                        }}
                    />
                </View>
                <View
                    style={{
                        marginBottom: 11,
                        marginLeft: 12,
                    }}>
                    <Image
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/tygeculp_expires_30_days.png" }}
                        resizeMode={"stretch"}
                        style={{
                            width: 7,
                            height: 14,
                        }}
                    />
                    <Image
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/87zzrqbr_expires_30_days.png" }}
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
                        marginBottom: 30,
                    }}>
                    <View
                        style={{
                            marginRight: 36,
                        }}>
                        <Image
                            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/j3gvq0wi_expires_30_days.png" }}
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
                                top: 17,
                                right: -18,
                                width: 357,
                                borderColor: "#6B96E666",
                                borderTopRightRadius: 50,
                                borderBottomRightRadius: 50,
                                borderWidth: 4,
                            }}>
                            <Text
                                style={{
                                    color: "#FFFFFF",
                                    fontSize: 16,
                                    fontWeight: "bold",
                                    marginTop: 17,
                                    marginBottom: 14,
                                    marginLeft: 13,
                                }}>
                                {"How Did You Hear about Quizitt?"}
                            </Text>
                        </LinearGradient>
                    </View>
                </View>

                {/* Iterate over quizittOptions to render each choice */}
                {quizittOptions.map((option, index) => (
                    <TouchableOpacity
                        key={index} // Use index as key if items are static and order doesn't change
                        onPress={() => handlePress(option.label)}
                        style={option.styles.container} // Apply the main container style
                    >
                        <Image
                            source={{ uri: option.icon }}
                            resizeMode={"stretch"}
                            style={option.styles.icon}
                        />
                        {/* Use Text component instead of TextInput if it's just a display label */}
                        <Text style={option.styles.text}>
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};