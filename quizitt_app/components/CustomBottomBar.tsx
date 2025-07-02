import React from "react";
import {
  SafeAreaView,
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { useRouter, useSegments } from "expo-router";

const BottomBar = () => {
  const router = useRouter();
  const segments = useSegments(); // to get current path segments

  // A helper function to check if a tab is active
  const isActive = (segment: string) => segments[0] === segment;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.column}>
          <View style={styles.box} />
          <View style={styles.row2}>
            <TouchableOpacity
              onPress={() => router.push("/enrollment/enrollment")}
              style={isActive("home") ? styles.activeTab : undefined}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/axpv9u2p_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image4}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/homepage/homepage")}
              style={isActive("enrollment") ? styles.activeTab : undefined}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/iwemwq57_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image5}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/dashboard/dashboardpage")}
              style={isActive("dashboard") ? styles.activeTab : undefined}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/3ym5375z_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image5}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/dashboard/dashboardpage")}
              style={isActive("profile") ? styles.activeTab : undefined}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/q2d0lci8_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image5}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/quizzybot/quizzybot")}
              style={isActive("settings") ? styles.activeTab : undefined}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/y0j1ouw2_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image5}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => router.push("/profile/profile")}
              style={isActive("more") ? styles.activeTab : undefined}
            >
              <Image
                source={{
                  uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/wbz2qehj_expires_30_days.png",
                }}
                resizeMode="stretch"
                style={styles.image6}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.box2} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#212B3F",
  },
  scrollView: {
    backgroundColor: "#212B3F",
  },
  column: {
    alignItems: "flex-start",
    backgroundColor: "#1C2335",
    paddingTop: 3,
    paddingBottom: 15,
  },
  box: {
    height: 4,
    backgroundColor: "#EDE3E336",
    marginBottom: 9,
  },
  row2: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 3,
    marginHorizontal: 7,
  },
  image4: { width: 60, height: 60, marginRight: 20 },
  image5: { width: 40, height: 40, marginRight: 20 },
  image6: { width: 40, height: 40 },
  box2: {
    width: 52,
    height: 4,
    backgroundColor: "#1E63E4",
    borderRadius: 10,
    marginLeft: 10,
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: "#1E63E4",
  },
});
