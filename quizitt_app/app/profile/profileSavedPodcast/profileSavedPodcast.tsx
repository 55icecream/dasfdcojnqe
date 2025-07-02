import React from "react";
import { Image, SafeAreaView, ScrollView, Text, View, TouchableOpacity} from "react-native";
import { router } from 'expo-router';

// export default function ProfileSavedPodcast(props)  {
export default function ProfileSavedPodcast()  {
	return (
		<SafeAreaView 
			style={{
				flex: 1,
				backgroundColor: "#FFFFFF",
			}}>
			<ScrollView  
				style={{
					flex: 1,
					backgroundColor: "#212B3F",
				}}>
			
            	<View 
					style={{
						flexDirection: "row",
						alignItems: "center",
						marginBottom: 13,
						marginLeft: 18,
                        marginTop:70
					}}>
					<Text 
						style={{
							color: "#FF4E95",
							fontSize: 32,
							fontWeight: "bold",
							marginBottom: 1,
							marginRight: 17,
						}}>
						{"Podcast"}
					</Text>
					<Image
						source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/f0tcdft7_expires_30_days.png"}} 
						resizeMode = {"stretch"}
						style={{
							width: 50,
							height: 50,
						}}
					/>
				</View>
				<View >
					 <TouchableOpacity onPress={() => router.push("./podcastPreview")}>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#414F70",
							paddingVertical: 9,
							paddingHorizontal: 14,
							marginBottom: 15,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/esongptn_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 84,
								height: 86,
								marginRight: 13,
							}}
						/>
						<View 
							style={{
								flex: 1,
								alignItems: "flex-start",
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 14,
									fontWeight: "bold",
									marginBottom: 1,
								}}>
								{"Unit 1.1"}
							</Text>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									fontWeight: "bold",
									marginBottom: 8,
								}}>
								{"Kinematics is the branch of physics that deals with the motion of objects without considering the forces that cause them......"}
							</Text>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 10,
									marginLeft: 1,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 10,
										fontWeight: "bold",
										marginRight: 9,
									}}>
									{"15 min left"}
								</Text>
								<View 
									style={{
										alignItems: "flex-start",
										backgroundColor: "#D9D9D966",
										borderRadius: 10,
										paddingRight: 103,
										marginRight: 12,
									}}>
									<View 
										style={{
											width: 45,
											height: 5,
											backgroundColor: "#FFFFFF",
											borderRadius: 10,
										}}>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/c6aci5bg_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 15,
										height: 15,
									}}
								/>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/fz8f5mcz_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
										marginRight: 10,
									}}
								/>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/goqhu8e1_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
										marginRight: 10,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/b8fjsnly_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 8,
											height: 4,
											marginBottom: 2,
										}}
									/>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/enqbsn38_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 16,
											height: 10,
										}}
									/>
								</View>
							</View>
						</View>
					</View>
					</TouchableOpacity>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#414F70",
							paddingVertical: 9,
							paddingHorizontal: 14,
							marginBottom: 15,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/txszd9sm_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 84,
								height: 86,
								marginRight: 13,
							}}
						/>
						<View 
							style={{
								flex: 1,
								alignItems: "flex-start",
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 14,
									fontWeight: "bold",
									marginBottom: 1,
								}}>
								{"Unit 1.2"}
							</Text>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									fontWeight: "bold",
									marginBottom: 8,
								}}>
								{"Kinematics is the branch of physics that deals with the motion of objects without considering the forces that cause them......"}
							</Text>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 10,
									marginLeft: 1,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 10,
										fontWeight: "bold",
										marginRight: 9,
									}}>
									{"15 min left"}
								</Text>
								<View 
									style={{
										alignItems: "flex-start",
										backgroundColor: "#D9D9D966",
										borderRadius: 10,
										paddingRight: 103,
										marginRight: 12,
									}}>
									<View 
										style={{
											width: 45,
											height: 5,
											backgroundColor: "#FFFFFF",
											borderRadius: 10,
										}}>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/3xzt7zxm_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 15,
										height: 15,
									}}
								/>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/emdz4mk3_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
										marginRight: 10,
									}}
								/>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/eaou09n9_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
										marginRight: 10,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/7rnvsc8s_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 8,
											height: 4,
											marginBottom: 2,
										}}
									/>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/5qdgxsyq_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 16,
											height: 10,
										}}
									/>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							backgroundColor: "#414F70",
							paddingVertical: 9,
							paddingHorizontal: 14,
							marginBottom: 15,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/8jijgd08_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 84,
								height: 86,
								marginRight: 13,
							}}
						/>
						<View 
							style={{
								flex: 1,
								alignItems: "flex-start",
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 14,
									fontWeight: "bold",
									marginBottom: 1,
								}}>
								{"Unit 1.3"}
							</Text>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									fontWeight: "bold",
									marginBottom: 8,
								}}>
								{"Kinematics is the branch of physics that deals with the motion of objects without considering the forces that cause them......"}
							</Text>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 10,
									marginLeft: 1,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 10,
										fontWeight: "bold",
										marginRight: 9,
									}}>
									{"15 min left"}
								</Text>
								<View 
									style={{
										alignItems: "flex-start",
										backgroundColor: "#D9D9D966",
										borderRadius: 10,
										paddingRight: 103,
										marginRight: 12,
									}}>
									<View 
										style={{
											width: 45,
											height: 5,
											backgroundColor: "#FFFFFF",
											borderRadius: 10,
										}}>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/jkaq8sji_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 15,
										height: 15,
									}}
								/>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "flex-start",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/02tcseec_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
										marginRight: 10,
									}}
								/>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/3h4vhoxe_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 16,
										marginRight: 10,
									}}
								/>
								<View 
									style={{
										alignItems: "center",
									}}>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/a46jrwak_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 8,
											height: 4,
											marginBottom: 2,
										}}
									/>
									<Image
										source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/4gg78wo7_expires_30_days.png"}} 
										resizeMode = {"stretch"}
										style={{
											width: 16,
											height: 10,
										}}
									/>
								</View>
							</View>
						</View>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "flex-start",
							backgroundColor: "#414F70",
							paddingVertical: 9,
							paddingHorizontal: 14,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/ec869u2r_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 84,
								height: 86,
								marginTop: 17,
								marginRight: 13,
							}}
						/>
						<View 
							style={{
								flex: 1,
								alignItems: "flex-start",
								marginBottom: 7,
							}}>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 14,
									fontWeight: "bold",
									marginBottom: 1,
								}}>
								{"Unit 1.4"}
							</Text>
							<Text 
								style={{
									color: "#FFFFFF",
									fontSize: 10,
									fontWeight: "bold",
									marginBottom: 8,
								}}>
								{"Kinematics is the branch of physics that deals with the motion of objects without considering the forces that cause them......"}
							</Text>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
									marginBottom: 10,
									marginLeft: 1,
								}}>
								<Text 
									style={{
										color: "#FFFFFF",
										fontSize: 10,
										fontWeight: "bold",
										marginRight: 9,
									}}>
									{"15 min left"}
								</Text>
								<View 
									style={{
										alignItems: "flex-start",
										backgroundColor: "#D9D9D966",
										borderRadius: 10,
										paddingRight: 103,
										marginRight: 12,
									}}>
									<View 
										style={{
											width: 45,
											height: 5,
											backgroundColor: "#FFFFFF",
											borderRadius: 10,
										}}>
									</View>
								</View>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/6laj0ela_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 15,
										height: 15,
									}}
								/>
							</View>
							<View 
								style={{
									flexDirection: "row",
									alignItems: "center",
								}}>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/2lnp20n6_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 5,
										marginRight: 10,
									}}
								/>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/d96fiw4g_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 16,
										height: 5,
										marginRight: 14,
									}}
								/>
								<Image
									source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/u746ytao_expires_30_days.png"}} 
									resizeMode = {"stretch"}
									style={{
										width: 8,
										height: 4,
									}}
								/>
							</View>
						</View>
					</View>
				</View>
				<View 
					style={{
						backgroundColor: "#1C2335",
						paddingTop: 4,
						paddingBottom: 16,
					}}>
					<View 
						style={{
							height: 4,
							backgroundColor: "#EDE3E336",
							marginBottom: 7,
						}}>
					</View>
					<View 
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginBottom: 2,
							marginHorizontal: 7,
						}}>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/mjhxo2rp_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 40,
								height: 40,
								marginRight: 20,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/rnyn10ed_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 40,
								height: 40,
								marginRight: 20,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/ccate2xn_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 40,
								height: 40,
								marginRight: 20,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/9svpbosf_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 40,
								height: 40,
								marginRight: 20,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/a0n0lgcb_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 40,
								height: 40,
								marginRight: 20,
							}}
						/>
						<Image
							source = {{uri: "https://storage.googleapis.com/tagjs-prod.appspot.com/v1/wIXNHuw7No/u57ew08g_expires_30_days.png"}} 
							resizeMode = {"stretch"}
							style={{
								width: 60,
								height: 60,
							}}
						/>
					</View>
					<View 
						style={{
							alignItems: "flex-end",
						}}>
						<View 
							style={{
								width: 52,
								height: 4,
								backgroundColor: "#1E63E4",
								borderRadius: 10,
								marginRight: 11,
							}}>
						</View>
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}