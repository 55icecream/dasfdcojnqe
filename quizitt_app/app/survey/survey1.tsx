import React, { useState } from "react";
import { SafeAreaView, View, ScrollView, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { ProtectedRoute } from "../../components/ProtectedRoute";

export default function SurveyScreen() {
	const [dropdownVisible, setDropdownVisible] = useState(false);
	const [selectedLanguage, setSelectedLanguage] = useState("Select language");

	const toggleDropdown = () => {
		setDropdownVisible(!dropdownVisible);
	};

	const selectLanguage = (lang: string) => {
		setSelectedLanguage(lang);
		setDropdownVisible(false);
	};

	return (
		<ProtectedRoute requireAuth={true} requireSurvey={true}>
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
							alignItems: "flex-start",
							marginBottom: 14,
							marginLeft: 10,
							marginTop: 30
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/io4k3lfg_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 40,
								height: 60,
							}}
						/>
						<View 
							style={{
								marginTop: 8,
							}}>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/9kpnnllc_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									width: 80,
									height: 24,
								}}
							/>
							<View 
								style={{
									alignItems: "flex-end",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/u59wylt3_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 40,
										height: 8,
									}}
								/>
							</View>
						</View>
					</View>
					<View
						style={{
							position: "relative", // Important to anchor the dropdown position
							marginLeft: 51,
							marginBottom: 10,
							zIndex: 1, // Ensure this is above other components
						}}
					>
						<TouchableOpacity
							style={{
								flexDirection: "row",
								alignItems: "center",
								backgroundColor: "#6B96E6",
								borderRadius: 5,
								paddingVertical: 5,
								paddingHorizontal: 10,
								width: 200,
								marginBottom: 50
							}}
							onPress={toggleDropdown}
						>
							<Text
								style={{
									color: "#FFFFFF",
									fontSize: 16,
									marginRight: 13,
									width: 200
								}}
							>
								{selectedLanguage}
							</Text>
							<Image
								source={{
									uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/gxy1udsh_expires_30_days.png",
								}}
								resizeMode={"stretch"}
								style={{
									borderRadius: 5,
									width: 8,
									height: 4,
								}}
							/>
						</TouchableOpacity>

						{dropdownVisible && (
							<View
								style={{
									position: "absolute", // This makes it float
									top: 45, // Position it just below the button
									backgroundColor: "#6B96E6",
									borderRadius: 5,
									width: 160,
									shadowColor: "#000",
									shadowOffset: { width: 0, height: 2 },
									shadowOpacity: 0.25,
									shadowRadius: 3.84,
									elevation: 5,
									zIndex: 9999,
								}}
							>
								{["English", "Hindi", "Marathi"].map((lang) => (
									<TouchableOpacity
										key={lang}
										onPress={() => selectLanguage(lang)}
										style={{
											paddingVertical: 8,
											paddingHorizontal: 12,
										}}
									>
										<Text style={{ color: "#FFFFFF", fontSize: 16 }}>{lang}</Text>
									</TouchableOpacity>
								))}
							</View>
						)}
					</View>
					<View 
						style={{
							alignItems: "center",
							marginBottom: 49,
						}}>
						<Text 
							style={{
								color: "#FFFFFF",
								fontSize: 22,
								fontWeight: "bold",
							}}>
							{"I Want To Master...."}
						</Text>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "flex-start",
							paddingVertical: 8,
							marginBottom: 70,
							marginHorizontal: 48,
						}}>
						<View 
							style={{
								flex: 1,
								marginRight: 72,
							}}>
							<View >
								<View 
									style={{
										backgroundColor: "#6B96E666",
										borderColor: "#1E63E4",
										borderRadius: 15,
										borderWidth: 4,
										paddingVertical: 26,
										width: 140,
										height: 170,
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/pj561bjx_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 100,
											marginHorizontal: 8,
										}}
									/>
								</View>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#CB6BE533", "#1E63E433"]}
									style={{
										position: "absolute",
										bottom: -26,
										right: -21,
										left: -21,
										borderColor: "#6B96E666",
										borderRadius: 50,
										borderWidth: 2,
										paddingTop: 12,
										paddingBottom: 3,
										paddingHorizontal: 11,
									}}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 9,
											textAlign: "center",
										}}>
										{"National Testing Agency"}
									</Text>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 11,
											marginLeft: 49,
										}}>
										{"J.E.E"}
									</Text>
								</LinearGradient>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/as0c0s4d_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									position: "absolute",
									top: -8,
									right: -5,
									width: 34,
									height: 34,
								}}
							/>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
							<View >
								<View 
									style={{
										backgroundColor: "#6B96E666",
										borderColor: "#1E63E4",
										borderRadius: 15,
										borderWidth: 4,
										paddingVertical: 26,
										width: 140,
										height: 170
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/s982l69w_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 100,
											marginHorizontal: 8,
										}}
									/>
								</View>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#CB6BE533", "#1E63E433"]}
									style={{
										position: "absolute",
										bottom: -26,
										right: -21,
										left: -21,
										alignItems: "center",
										borderColor: "#6B96E666",
										borderRadius: 50,
										borderWidth: 2,
										paddingTop: 12,
										paddingBottom: 3,
										paddingHorizontal: 11,
									}}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 9,
											textAlign: "center",
										}}>
										{"National Testing Agency"}
									</Text>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 11,
										}}>
										{"NEET"}
									</Text>
								</LinearGradient>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/s2pwfc8h_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									position: "absolute",
									top: -8,
									right: -5,
									width: 34,
									height: 34,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "flex-start",
							paddingVertical: 8,
							marginBottom: 135,
							marginHorizontal: 48,
						}}>
						<View 
							style={{
								flex: 1,
								marginRight: 72,
							}}>
							<View >
								<View 
									style={{
										backgroundColor: "#6B96E666",
										borderColor: "#1E63E4",
										borderRadius: 15,
										borderWidth: 4,
										paddingVertical: 31,
										width: 140,
										height: 170
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/amkpnjdo_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 85,
											marginHorizontal: 26,
										}}
									/>
								</View>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#CB6BE533", "#1E63E433"]}
									style={{
										position: "absolute",
										bottom: -26,
										right: -21,
										left: -21,
										borderColor: "#6B96E666",
										borderRadius: 50,
										borderWidth: 2,
										paddingTop: 12,
										paddingBottom: 3,
										paddingHorizontal: 22,
									}}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 9,
										}}>
										{"Somaiya Vidyavihar"}
									</Text>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 11,
											marginLeft: 38,
										}}>
										{"SVU"}
									</Text>
								</LinearGradient>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/m8dqahnp_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									position: "absolute",
									top: -8,
									right: -5,
									width: 34,
									height: 34,
								}}
							/>
						</View>
						<View 
							style={{
								flex: 1,
							}}>
							<View >
								<View 
									style={{
										backgroundColor: "#6B96E666",
										borderColor: "#1E63E4",
										borderRadius: 15,
										borderWidth: 4,
										paddingVertical: 31,
										width: 140,
										height: 170
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/i7fx30xe_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											height: 85,
											marginHorizontal: 27,
										}}
									/>
								</View>
								<LinearGradient 
									start={{x:0, y:0}}
									end={{x:0, y:1}}
									colors={["#CB6BE533", "#1E63E433"]}
									style={{
										position: "absolute",
										bottom: -26,
										right: -21,
										left: -21,
										borderColor: "#6B96E666",
										borderRadius: 50,
										borderWidth: 2,
										paddingTop: 12,
										paddingBottom: 3,
										paddingHorizontal: 27,
									}}>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 9,
										}}>
										{"Mumbai University"}
									</Text>
									<Text 
										style={{
											color: "#FFFFFF",
											fontSize: 11,
											marginLeft: 33,
										}}>
										{"M.U."}
									</Text>
								</LinearGradient>
							</View>
							<Image
								source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/7qblxkfa_expires_30_days.png"}} 
								resizeMode = {"stretch"}
								style={{
									position: "absolute",
									top: -8,
									right: -5,
									width: 34,
									height: 34,
								}}
							/>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							justifyContent: "space-between",
							marginBottom: 71,
							marginHorizontal: 33,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/mvvdwoqr_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 23,
								height: 14,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/2EEI2g68MB/na77v8xy_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 23,
								height: 14,
							}}
						/>
					</View>
				</ScrollView>
			</SafeAreaView>
		</ProtectedRoute>
	)
}