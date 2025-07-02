import React from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
export default function ProfileSavedContent(props) {
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
            marginTop: 70,
          }}
        >
          <View
            style={{
              marginRight: 11,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/1336b356_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 88,
                height: 88,
              }}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/y5vomw0y_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                bottom: -2,
                right: -2,
                width: 32,
                height: 32,
              }}
            />
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/e8tg9lki_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                position: "absolute",
                bottom: -2,
                right: 2,
                width: 32,
                height: 32,
              }}
            />
          </View>
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/heza3gj8_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/grzhijrv_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/m8sincdd_expires_30_days.png",
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
                    uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/qu7pvu70_expires_30_days.png",
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
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/p83mcac3_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 18,
                height: 18,
                marginRight: 16,
              }}
            />
            <Text
              style={{
                color: "#FFFFFF",
                fontSize: 14,
                fontWeight: "bold",
                marginTop: 9,
                marginRight: 10,
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
                {"Day"}
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 12,
                  fontWeight: "bold",
                }}
              >
                {"Drip"}
              </Text>
            </View>
          </View>
          <View
            style={{
              alignItems: "flex-start",
              marginRight: 27,
            }}
          >
            <Image
              source={{
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/acr2x8ll_expires_30_days.png",
              }}
              resizeMode={"stretch"}
              style={{
                width: 20,
                height: 20,
                marginLeft: 1,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#9646FF",
                borderRadius: 30,
                paddingVertical: 1,
                paddingLeft: 32,
                paddingRight: 8,
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: "bold",
                  marginRight: 6,
                }}
              >
                {"20"}
              </Text>
              <Text
                style={{
                  color: "#FFFFFF",
                  fontSize: 14,
                  fontWeight: "bold",
                }}
              >
                {"gems"}
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
                width: 4,
                height: 20,
                backgroundColor: "#3166C7",
                borderTopLeftRadius: 20,
                marginLeft: 2,
              }}
            ></View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: "#9646FF",
                borderRadius: 30,
                paddingVertical: 1,
                paddingLeft: 36,
                paddingRight: 8,
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
                {"Quizzes"}
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginBottom: 29,
            marginHorizontal: 13,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#DADBDF",
              borderRadius: 20,
              paddingVertical: 3,
              paddingHorizontal: 29,
              marginRight: 14,
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
              {"Post"}
            </Text>
          </TouchableOpacity>
          <View
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
                color: "#9C73F4",
                fontSize: 14,
                fontWeight: "bold",
                marginHorizontal: 33,
              }}
            >
              {"Calendar"}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: "#9C73F4",
              borderRadius: 20,
              paddingVertical: 3,
              paddingHorizontal: 28,
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
              {"Saved"}
            </Text>
          </TouchableOpacity>
        </View>
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
              onPress={() => alert("Pressed!")}
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
              onPress={() => alert("Pressed!")}
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
              onPress={() => alert("Pressed!")}
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
              onPress={() => alert("Pressed!")}
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/b4tjtdhz_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/4y077qlt_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/hqvcvb1s_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/r4mjwc0o_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/8d9cr42a_expires_30_days.png",
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
                uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/7sarh9l4_expires_30_days.png",
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
