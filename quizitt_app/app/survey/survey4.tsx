import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router"; // Assuming you are using expo-router for navigation

export default () => {
    // Define your options as an array of objects
    const jeeKnowledgeOptions = [
        {
            label: "Beginner",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/ue0wlts6_expires_30_days.png",
            styles: {
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1F64E466",
                    borderRadius: 40,
                    borderWidth: 5,
                    paddingVertical: 10,
                    paddingLeft: 19,
                    paddingRight: 38,
                    marginBottom: 14,
                    marginHorizontal: 17,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 50,
                    height: 50,
                    marginRight: 12,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 15,
                    flex: 1, // Allow text to take up available space
                },
            }
        },
        {
            label: "I Know Basics",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/73r4f387_expires_30_days.png",
            styles: {
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1F64E466",
                    borderRadius: 40,
                    borderWidth: 5,
                    paddingVertical: 10,
                    paddingLeft: 19,
                    paddingRight: 38,
                    marginBottom: 10,
                    marginHorizontal: 16,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 51,
                    height: 51,
                    marginRight: 12,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 15,
                    flex: 1,
                },
            }
        },
        {
            label: "I’m getting hang of it",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/uxud1kiw_expires_30_days.png",
            styles: {
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1F64E466",
                    borderRadius: 40,
                    borderWidth: 5,
                    paddingVertical: 10,
                    paddingLeft: 19,
                    paddingRight: 38,
                    marginBottom: 1,
                    marginHorizontal: 14,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 60,
                    height: 60,
                    marginRight: 7,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 15,
                    flex: 1,
                },
            }
        },
        {
            label: "I have confidence in most topics",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/zd8vyh1w_expires_30_days.png",
            styles: {
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1F64E466",
                    borderRadius: 40,
                    borderWidth: 5,
                    paddingVertical: 15,
                    paddingLeft: 21,
                    paddingRight: 42,
                    marginBottom: 2,
                    marginHorizontal: 11,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 69,
                    height: 69,
                    marginRight: 2,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 15,
                    flex: 1,
                },
            }
        },
        {
            label: "I’m simply a PRO",
            icon: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/bjs9wob1_expires_30_days.png",
            styles: {
                container: {
                    flexDirection: "row",
                    alignItems: "center",
                    backgroundColor: "#5E3BDE26",
                    borderColor: "#1F64E466",
                    borderRadius: 40,
                    borderWidth: 5,
                    paddingVertical: 19,
                    paddingLeft: 22,
                    paddingRight: 44,
                    marginBottom: 208,
                    marginHorizontal: 11,
                    shadowColor: "#00000040",
                    shadowOpacity: 0.3,
                    shadowOffset: { width: 0, height: 4 },
                    shadowRadius: 4,
                    elevation: 4,
                },
                icon: {
                    width: 70,
                    height: 70,
                    marginRight: 1,
                },
                text: {
                    color: "#FFFFFF",
                    fontSize: 15,
                    flex: 1,
                },
            }
        },
    ] as const;

    const handlePress = (selectedKnowledge: string) => {
        // Navigate to 'survey1' and pass the selected knowledge level as a query parameter
        router.push(`/survey/survey1?knowledge=${encodeURIComponent(selectedKnowledge)}`);
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
                {/* Header Section */}
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
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/k119z9t9_expires_30_days.png" }}
                        resizeMode={"stretch"}
                        style={{
                            width: 2,
                            height: 3,
                            marginRight: 2,
                        }}
                    />
                    <Image
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/q8wusbu3_expires_30_days.png" }}
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
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/ahjzefah_expires_30_days.png" }}
                        resizeMode={"stretch"}
                        style={{
                            width: 27,
                            height: 18,
                        }}
                    />
                </View>

                {/* Back Button / Navigation Indicator */}
                <View
                    style={{
                        marginBottom: 10,
                        marginLeft: 12,
                    }}>
                    <Image
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/yicl94wa_expires_30_days.png" }}
                        resizeMode={"stretch"}
                        style={{
                            width: 7,
                            height: 14,
                        }}
                    />
                    <Image
                        source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/nvty29ye_expires_30_days.png" }}
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

                {/* Question Section */}
                <View
                    style={{
                        alignItems: "flex-end",
                        marginBottom: 12,
                    }}>
                    <View
                        style={{
                            marginRight: 17,
                        }}>
                        <Image
                            source={{ uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/55z875ol_expires_30_days.png" }}
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
                                top: 18,
                                right: 1,
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
                                    marginTop: 16,
                                    marginBottom: 15,
                                    marginLeft: 12,
                                }}>
                                {"How much do you Know about J.E.E"}
                            </Text>
                        </LinearGradient>
                    </View>
                </View>

                {/* Dynamic JEE Knowledge Options */}
                {jeeKnowledgeOptions.map((option, index) => (
                    <TouchableOpacity
                        key={index} // Use index as key if the list is static and order won't change
                        onPress={() => handlePress(option.label)}
                        style={option.styles.container}
                    >
                        <Image
                            source={{ uri: option.icon }}
                            resizeMode={"stretch"}
                            style={option.styles.icon}
                        />
                        <Text style={option.styles.text}>
                            {option.label}
                        </Text>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </SafeAreaView>
    );
};