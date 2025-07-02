import React, {useState} from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  Alert 
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router"; 


// router.push("../profile/profileSavedContent/profileSavedNote/profileSavedNote");
import * as ImagePicker from 'expo-image-picker';

// export default function Profile(props) {
export default function Profile() {


   const [selectedImage, setSelectedImage] = useState("");
    const [selectedTab, setSelectedTab] = useState("Post");


    const handleCardPress = () => {
    router.push("../profile/profileSavedContent/profileSavedNote/profileSavedNote");
  };

     const renderContent = () => {
    switch (selectedTab) {
      case "Post":
        return (
          <>
             <View
            style={{  
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flex: 1,
                marginRight: 12,
              }}
            >
              <View
                style={{
                  borderColor: "#1E63E4",
                  borderRadius: 20,
                  borderWidth: 2,
                  paddingVertical: 8,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/8mf7ckxe_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    height: 71,
                    marginBottom: 1,
                    marginHorizontal: 8,
                  }}
                />
                <Text
                  style={{
                    color: "#DA97ED",
                    fontSize: 13,
                    fontWeight: "bold",
                    marginBottom: 6,
                    marginHorizontal: 19,
                  }}
                >
                  {"INTEGRAL CALCULUS"}
                </Text>
                <Text
                  style={{
                    color: "#ABABAB",
                    fontSize: 10,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 16,
                    marginHorizontal: 14,
                  }}
                >
                  {
                    "Learn to find areas and reverse derivatives using integrals."
                  }
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/yz7femu2_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 19,
                      height: 19,
                      marginRight: 4,
                    }}
                  />
                  <Text
                    style={{
                      color: "#6B96E6",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginVertical: 3,
                      marginRight: 71,
                    }}
                  >
                    {"11"}
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: "#6B96E6",
                        fontSize: 12,
                        fontWeight: "bold",
                        marginLeft: 18,
                      }}
                    >
                      {"19/25"}
                    </Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/1idki694_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        width: 21,
                        height: 21,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: -8,
                  right: 47,
                  left: 47,
                  backgroundColor: "#1E63E4",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 11,
                    fontWeight: "bold",
                    marginVertical: 8,
                    marginHorizontal: 7,
                  }}
                >
                  {"TAKE TEST"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  borderColor: "#1E63E4",
                  borderRadius: 20,
                  borderWidth: 2,
                  paddingVertical: 8,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/9t3whdll_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    height: 71,
                    marginBottom: 1,
                    marginHorizontal: 8,
                  }}
                />
                <Text
                  style={{
                    color: "#263CE0",
                    fontSize: 13,
                    fontWeight: "bold",
                    marginBottom: 6,
                    marginHorizontal: 49,
                  }}
                >
                  {"SOLID STATE"}
                </Text>
                <Text
                  style={{
                    color: "#ABABAB",
                    fontSize: 10,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 16,
                    marginHorizontal: 14,
                  }}
                >
                  {
                    "Learn to find areas and reverse derivatives using integrals."
                  }
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/2b5o5uko_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 19,
                      height: 19,
                      marginRight: 4,
                    }}
                  />
                  <Text
                    style={{
                      color: "#6B96E6",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginVertical: 3,
                      marginRight: 71,
                    }}
                  >
                    {"11"}
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: "#6B96E6",
                        fontSize: 12,
                        fontWeight: "bold",
                        marginLeft: 18,
                      }}
                    >
                      {"19/25"}
                    </Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/xzf2n471_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        width: 21,
                        height: 21,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: -8,
                  right: 47,
                  left: 47,
                  backgroundColor: "#1E63E4",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 11,
                    fontWeight: "bold",
                    marginVertical: 8,
                    marginHorizontal: 7,
                  }}
                >
                  {"TAKE TEST"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                flex: 1,
                borderColor: "#1E63E4",
                borderRadius: 20,
                borderWidth: 2,
                paddingVertical: 8,
                marginRight: 14,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/germ1hpo_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  height: 71,
                  marginBottom: 1,
                  marginHorizontal: 8,
                }}
              />
              <Text
                style={{
                  color: "#9C73F4",
                  fontSize: 13,
                  fontWeight: "bold",
                  marginBottom: 6,
                  marginHorizontal: 49,
                }}
              >
                {"KINEMATICS"}
              </Text>
              <Text
                style={{
                  color: "#ABABAB",
                  fontSize: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginHorizontal: 14,
                }}
              >
                {"Learn to find areas and reverse derivatives using integrals."}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderColor: "#1E63E4",
                borderRadius: 20,
                borderWidth: 2,
                paddingVertical: 8,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/tcosonjq_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  height: 71,
                  marginBottom: 1,
                  marginHorizontal: 8,
                }}
              />
              <View
                style={{
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <Text
                  style={{
                    color: "#FDE030",
                    fontSize: 13,
                    fontWeight: "bold",
                  }}
                >
                  {"AMINES"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#ABABAB",
                  fontSize: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginHorizontal: 14,
                }}
              >
                {"Learn to find areas and reverse derivatives using integrals."}
              </Text>
            </View>
          </View>
          </>
        );
      case "Calendar":
        return (
              <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/ogwba17l_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        height: 318,
                        marginBottom: 24,
                      }}
                    />
        );
      case "Saved":
        return (
           <View
          style={{
            marginBottom: 50,
            marginHorizontal: 22,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: 15,
              marginHorizontal: 1,
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#97CFFC",
                borderColor: "#4F89F4",
                borderRadius: 30,
                borderWidth: 3,
                paddingVertical: 16,
                paddingHorizontal: 37,
                marginRight: 15,
                shadowColor: "#00000040",
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 4,
                elevation: 4,
              }}
              onPress={() =>handleCardPress()}
            >
              <Text
                style={{
                  color: "#5189F1",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 12,
                }}
              >
                {"Notes"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/hr1rvgvr_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  height: 82,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFFFE6",
                borderColor: "#FFC100",
                borderRadius: 30,
                borderWidth: 3,
                paddingVertical: 16,
                paddingHorizontal: 37,
                shadowColor: "#00000040",
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 4,
                elevation: 4,
              }}
              onPress={() => {router.push("../profile/profileSavedContent/profileSavedVideo/profileSavedVideo");}}
            >
              <Text
                style={{
                  color: "#FFC100",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 12,
                }}
              >
                {"Videos"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/99491unr_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  height: 82,
                }}
              />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#FFE0E1",
                borderColor: "#FB3082",
                borderRadius: 30,
                borderWidth: 3,
                paddingVertical: 20,
                paddingHorizontal: 31,
                marginRight: 15,
                shadowColor: "#00000040",
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 4,
                elevation: 4,
              }}
              onPress={() => {router.push("../profile/profileSavedPodcast/profileSavedPodcast");}}
            >
              <Text
                style={{
                  color: "#FB3082",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {"Podcasts"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/5blr4ftq_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  height: 82,
                  marginHorizontal: 6,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                flex: 1,
                alignItems: "center",
                backgroundColor: "#BDFFF8",
                borderColor: "#37B4A7",
                borderRadius: 30,
                borderWidth: 3,
                paddingVertical: 20,
                paddingHorizontal: 37,
                shadowColor: "#00000040",
                shadowOpacity: 0.3,
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowRadius: 4,
                elevation: 4,
              }}
              onPress={() => {router.push("../profile/profileSavedContent/profileSavedArVr/profileSavedArVr")} }
            >
              <Text
                style={{
                  color: "#37B4A7",
                  fontSize: 20,
                  fontWeight: "bold",
                  marginBottom: 5,
                }}
              >
                {"AR"}
              </Text>
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/0a3u55io_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  height: 82,
                }}
              />
            </TouchableOpacity>
          </View>
        </View>
        );
      default:
        return null;
    }
  };

  const renderTabButton = (label: string) => {
    const isSelected = selectedTab === label;
    return (
      <TouchableOpacity
        key={label}
        style={{
          backgroundColor: isSelected ? "#FFFFFFD1" : "#EDEDED",
          borderRadius: 20,
          paddingVertical: 3,
          paddingHorizontal: 28,
          marginHorizontal: 5,
        }}
        onPress={() => setSelectedTab(label)}
      >
        <Text
          style={{
            color: isSelected ? "#9B67E0" : "#888888",
            fontSize: 14,
            fontWeight: "bold",
          }}
        >
          {label}
        </Text>
      </TouchableOpacity>
    );
  };

    const pickImage = async () => {
    // Ask for media library permission
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!permissionResult.granted) {
      Alert.alert('Permission required', 'Permission to access gallery is needed!');
      return;
    }

    // Launch image picker
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
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
          backgroundColor: "#212B3F",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 35,
            marginHorizontal: 8,
            marginTop: 76,
          }}
        >
           <TouchableOpacity onPress={pickImage}>
      <View style={{ marginRight: 11 }}>
        <Image
          source={{
            uri: selectedImage || 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/rvhcugql_expires_30_days.png',
          }}
          resizeMode="stretch"
          style={{
            width: 88,
            height: 88,
          }}
        />
        <Image
          source={{
            uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/dp37fq5h_expires_30_days.png',
          }}
          resizeMode="stretch"
          style={{
            position: 'absolute',
            bottom: -2,
            right: -2,
            width: 32,
            height: 32,
          }}
        />
        <Image
          source={{
            uri: 'https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/2w1uk1g7_expires_30_days.png',
          }}
          resizeMode="stretch"
          style={{
            position: 'absolute',
            bottom: -2,
            right: 2,
            width: 32,
            height: 32,
          }}
        />
      </View>
    </TouchableOpacity>
          <View
            style={{
              flex: 1,
              marginVertical: 1,
              marginRight: 12,
            }}
          >
            <Text
              style={{
                color: "#D9D9D9",
                fontSize: 15,
                fontWeight: "bold",
                marginBottom: 16,
              }}
            >
              {"Username"}
            </Text>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-start",
              }}
            >
              <View
                style={{
                  paddingBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {"8"}
                </Text>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 15,
                    marginHorizontal: 1,
                  }}
                >
                  {"Post"}
                </Text>
              </View>
              <View
                style={{
                  paddingBottom: 10,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  {"20"}
                </Text>
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 15,
                    marginHorizontal: 1,
                  }}
                >
                  {"Followers"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 19,
              }}
            >
              <View
                style={{
                  marginRight: 44,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/8khoofl0_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 28,
                    height: 28,
                  }}
                />
                <View
                  style={{
                    position: "absolute",
                    bottom: 0,
                    left: 8,
                    width: 51,
                    alignItems: "flex-end",
                    backgroundColor: "#CB6BE6",
                    borderRadius: 20,
                    paddingTop: 5,
                    paddingBottom: 6,
                  }}
                >
                  <Text
                    style={{
                      color: "#FFFFFF",
                      fontSize: 13,
                      fontWeight: "bold",
                      marginRight: 9,
                    }}
                  >
                    {"JEE"}
                  </Text>
                </View>
              </View>
              <View
                style={{
                  alignItems: "center",
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/dddn4jm1_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 18,
                    height: 1,
                    marginBottom: 6,
                  }}
                />
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/fn0j7234_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 18,
                    height: 1,
                    marginBottom: 6,
                  }}
                />
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/nvkx2nek_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    width: 18,
                    height: 1,
                  }}
                />
              </View>
            </View>
            <View
              style={{
                marginHorizontal: 15,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 15,
                  fontWeight: "bold",
                }}
              >
                {"20"}
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 15,
                  marginHorizontal: 1,
                }}
              >
                {"Following"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 30,
            marginLeft: 21,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              backgroundColor: "#9646FF",
              borderRadius: 30,
              paddingHorizontal: 2,
              marginRight: 27,
              width: 100,
              height: 30
            }}
          >
            {/* <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/d8xv837e_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 18,
                height: 18,
                marginRight: 16,
              }}
            /> */}
            <Text
              style={{
                 color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 2,
                  marginLeft: 8
              }}
            >
              {"1"}
            </Text>
            <View
              style={{
                alignItems: "center",
                marginVertical: 2,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: "bold",
                  marginBottom: 2,
                }}
              >
                {" Day Drip"}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-start",
              marginRight: 27,
            
            }}
          >
            {/* <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/1ped0jms_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 20,
                height: 20,
                marginLeft: 1,
              }}
            /> */}
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#9646FF",
                borderRadius: 30,
                paddingVertical: 1,
                paddingLeft: 10,
                paddingRight: 8,
                width: 100,
                height: 30
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: "bold",
                  // marginRight: 6,
                  marginBottom: 2,
                  // marginLeft: 8
                }}
              >
                {"20"}
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {" Gems"}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-start",
            }}
          >
            
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#9646FF",
                borderRadius: 30,
                paddingVertical: 1,
                paddingLeft: 10,
                paddingRight: 8,
                width: 115,
                height: 30
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginRight: 7,
                }}
              >
                {"1"}
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {" Quizzes"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginBottom: 17,
            marginHorizontal: 13,
          }}
        >
          {/* <TouchableOpacity
            style={{
              backgroundColor: "#9B67E0",
              borderRadius: 20,
              paddingVertical: 3,
              paddingHorizontal: 29,
              marginRight: 14,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Post"}
            </Text>
          </TouchableOpacity> */}
          {/* <View
            style={{
              flex: 1,
              backgroundColor: "#DADBDF",
              borderRadius: 20,
              paddingVertical: 3,
              marginRight: 14,
            }}
          >
            <Text
              style={{
                color: "#9B67E0",
                fontSize: 14,
                fontWeight: "bold",
                marginHorizontal: 33,
              }}
            >
              {"Calendar"}
            </Text>
          </View> */}
          {/* <TouchableOpacity
            style={{
              backgroundColor: "#FFFFFFD1",
              borderRadius: 20,
              paddingVertical: 3,
              paddingHorizontal: 28,
            }}
            onPress={() => alert("Pressed!")}
          >
            <Text
              style={{
                color: "#9B67E0",
                fontSize: 14,
                fontWeight: "bold",
              }}
            >
              {"Saved"}
            </Text>
          </TouchableOpacity> */}

           <View style={{ flexDirection: "row", justifyContent: "center", marginBottom: 20 }}>
        {["Post", "Calendar", "Saved"].map((tab) => renderTabButton(tab))}
      </View>

      {/* Content */}
        </View>
      {renderContent()}
        {/* <View
          style={{
            marginBottom: 8,
            marginHorizontal: 11,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
              marginBottom: 12,
            }}
          >
            <View
              style={{
                flex: 1,
                marginRight: 12,
              }}
            >
              <View
                style={{
                  borderColor: "#1E63E4",
                  borderRadius: 20,
                  borderWidth: 2,
                  paddingVertical: 8,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/8mf7ckxe_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    height: 71,
                    marginBottom: 1,
                    marginHorizontal: 8,
                  }}
                />
                <Text
                  style={{
                    color: "#DA97ED",
                    fontSize: 13,
                    fontWeight: "bold",
                    marginBottom: 6,
                    marginHorizontal: 19,
                  }}
                >
                  {"INTEGRAL CALCULUS"}
                </Text>
                <Text
                  style={{
                    color: "#ABABAB",
                    fontSize: 10,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 16,
                    marginHorizontal: 14,
                  }}
                >
                  {
                    "Learn to find areas and reverse derivatives using integrals."
                  }
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/yz7femu2_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 19,
                      height: 19,
                      marginRight: 4,
                    }}
                  />
                  <Text
                    style={{
                      color: "#6B96E6",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginVertical: 3,
                      marginRight: 71,
                    }}
                  >
                    {"11"}
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: "#6B96E6",
                        fontSize: 12,
                        fontWeight: "bold",
                        marginLeft: 18,
                      }}
                    >
                      {"19/25"}
                    </Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/1idki694_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        width: 21,
                        height: 21,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: -8,
                  right: 47,
                  left: 47,
                  backgroundColor: "#1E63E4",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 11,
                    fontWeight: "bold",
                    marginVertical: 8,
                    marginHorizontal: 7,
                  }}
                >
                  {"TAKE TEST"}
                </Text>
              </View>
            </View>
            <View
              style={{
                flex: 1,
              }}
            >
              <View
                style={{
                  borderColor: "#1E63E4",
                  borderRadius: 20,
                  borderWidth: 2,
                  paddingVertical: 8,
                }}
              >
                <Image
                  source={{
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/9t3whdll_expires_30_days.png",
                  }}
                  resizeMode={"stretch"}
                  style={{
                    height: 71,
                    marginBottom: 1,
                    marginHorizontal: 8,
                  }}
                />
                <Text
                  style={{
                    color: "#263CE0",
                    fontSize: 13,
                    fontWeight: "bold",
                    marginBottom: 6,
                    marginHorizontal: 49,
                  }}
                >
                  {"SOLID STATE"}
                </Text>
                <Text
                  style={{
                    color: "#ABABAB",
                    fontSize: 10,
                    fontWeight: "bold",
                    textAlign: "center",
                    marginBottom: 16,
                    marginHorizontal: 14,
                  }}
                >
                  {
                    "Learn to find areas and reverse derivatives using integrals."
                  }
                </Text>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                    marginHorizontal: 12,
                  }}
                >
                  <Image
                    source={{
                      uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/2b5o5uko_expires_30_days.png",
                    }}
                    resizeMode={"stretch"}
                    style={{
                      width: 19,
                      height: 19,
                      marginRight: 4,
                    }}
                  />
                  <Text
                    style={{
                      color: "#6B96E6",
                      fontSize: 12,
                      fontWeight: "bold",
                      marginVertical: 3,
                      marginRight: 71,
                    }}
                  >
                    {"11"}
                  </Text>
                  <View>
                    <Text
                      style={{
                        color: "#6B96E6",
                        fontSize: 12,
                        fontWeight: "bold",
                        marginLeft: 18,
                      }}
                    >
                      {"19/25"}
                    </Text>
                    <Image
                      source={{
                        uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/xzf2n471_expires_30_days.png",
                      }}
                      resizeMode={"stretch"}
                      style={{
                        width: 21,
                        height: 21,
                      }}
                    />
                  </View>
                </View>
              </View>
              <View
                style={{
                  position: "absolute",
                  bottom: -8,
                  right: 47,
                  left: 47,
                  backgroundColor: "#1E63E4",
                  borderRadius: 5,
                }}
              >
                <Text
                  style={{
                    color: "#FFFFFF",
                    fontSize: 11,
                    fontWeight: "bold",
                    marginVertical: 8,
                    marginHorizontal: 7,
                  }}
                >
                  {"TAKE TEST"}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "flex-start",
            }}
          >
            <View
              style={{
                flex: 1,
                borderColor: "#1E63E4",
                borderRadius: 20,
                borderWidth: 2,
                paddingVertical: 8,
                marginRight: 14,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/germ1hpo_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  height: 71,
                  marginBottom: 1,
                  marginHorizontal: 8,
                }}
              />
              <Text
                style={{
                  color: "#9C73F4",
                  fontSize: 13,
                  fontWeight: "bold",
                  marginBottom: 6,
                  marginHorizontal: 49,
                }}
              >
                {"KINEMATICS"}
              </Text>
              <Text
                style={{
                  color: "#ABABAB",
                  fontSize: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginHorizontal: 14,
                }}
              >
                {"Learn to find areas and reverse derivatives using integrals."}
              </Text>
            </View>
            <View
              style={{
                flex: 1,
                borderColor: "#1E63E4",
                borderRadius: 20,
                borderWidth: 2,
                paddingVertical: 8,
              }}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/tcosonjq_expires_30_days.png",
                }}
                resizeMode={"stretch"}
                style={{
                  height: 71,
                  marginBottom: 1,
                  marginHorizontal: 8,
                }}
              />
              <View
                style={{
                  alignItems: "center",
                  marginBottom: 6,
                }}
              >
                <Text
                  style={{
                    color: "#FDE030",
                    fontSize: 13,
                    fontWeight: "bold",
                  }}
                >
                  {"AMINES"}
                </Text>
              </View>
              <Text
                style={{
                  color: "#ABABAB",
                  fontSize: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                  marginHorizontal: 14,
                }}
              >
                {"Learn to find areas and reverse derivatives using integrals."}
              </Text>
            </View>
          </View>
        </View> */}
        {/* <View
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/6d8nsnmx_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/1k8c7vv4_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/jjxjkuss_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/rwxr8xus_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/8rkhqopu_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/a8alvxc9_expires_30_days.png",
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
        </View> */}
      </ScrollView>
    </SafeAreaView>
  );
}
