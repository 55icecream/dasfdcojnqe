import React from "react";
import { SafeAreaView, View, ScrollView, Text, Image, StyleSheet, } from "react-native";
export default () => {
	return (
		<SafeAreaView style={styles.container}>
			<ScrollView  style={styles.scrollView}>
				<View style={styles.row}>
					<Text style={styles.text}>
						{"10:10"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/tgrzjkj8_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={styles.image}
					/>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/2t05vxss_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={styles.image2}
					/>
					<Text style={styles.text2}>
						{"4G"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/a4wjuiyp_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={styles.image3}
					/>
				</View>
				<View style={styles.view}>
					<View style={styles.row2}>
						<Text style={styles.text3}>
							{"Hello , User "}
						</Text>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/h5hqmn38_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image4}
						/>
					</View>
				</View>
				<View style={styles.column}>
					<Text style={styles.text4}>
						{"Ask QuizzyBot"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/qp26ly3u_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={styles.image5}
					/>
				</View>
				<View style={styles.column2}>
					<View style={styles.box}>
					</View>
					<View style={styles.row3}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/9mhl9kyz_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/2as9qhdc_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/hkcw4a3n_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/y6fqrt0s_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image6}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/fcgv2lin_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image7}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/Cwjsay77Nq/kdpnfie4_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={styles.image8}
						/>
					</View>
					<View style={styles.box2}>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#FFFFFF",
	},
	box: {
		height: 4,
		backgroundColor: "#EDE3E336",
		marginBottom: 9,
	},
	box2: {
		width: 52,
		height: 4,
		backgroundColor: "#1E63E4",
		borderRadius: 10,
		marginLeft: 251,
	},
	column: {
		marginBottom: 31,
		marginHorizontal: 24,
	},
	column2: {
		alignItems: "flex-start",
		backgroundColor: "#1C2335",
		paddingTop: 3,
		paddingBottom: 16,
	},
	image: {
		width: 2,
		height: 3,
		marginRight: 2,
	},
	image2: {
		width: 1,
		height: 4,
		marginRight: 17,
	},
	image3: {
		width: 27,
		height: 18,
	},
	image4: {
		width: 60,
		height: 90,
	},
	image5: {
		height: 62,
	},
	image6: {
		width: 40,
		height: 40,
		marginRight: 20,
	},
	image7: {
		width: 60,
		height: 60,
		marginRight: 20,
	},
	image8: {
		width: 40,
		height: 40,
	},
	row: {
		flexDirection: "row",
		alignItems: "center",
		marginTop: 19,
		marginBottom: 261,
		marginLeft: 24,
	},
	row2: {
		flexDirection: "row",
		alignItems: "center",
	},
	row3: {
		flexDirection: "row",
		alignItems: "center",
		marginBottom: 2,
		marginHorizontal: 7,
	},
	scrollView: {
		flex: 1,
		backgroundColor: "#212B3F",
	},
	text: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "bold",
		marginRight: 236,
	},
	text2: {
		color: "#FFFFFF",
		fontSize: 12,
		fontWeight: "bold",
		marginRight: 10,
	},
	text3: {
		color: "#CB6BE5",
		fontSize: 30,
		fontWeight: "bold",
		marginRight: 14,
	},
	text4: {
		color: "#F6E5FF",
		fontSize: 16,
		marginLeft: 26,
	},
	view: {
		alignItems: "center",
		marginBottom: 225,
	},
});