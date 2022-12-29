import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { useSelector } from "react-redux";

export default function Header({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const users = useSelector((state) => state.user.value);
  return (
    <View style={styles.header}>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          activeOpacity={1}
          onPressOut={() => setModalVisible(false)}
          style={styles.centeredView}
        >
          <View style={styles.headerModal}>
            <View
              style={{
                height: 45,
                width: 45,
                backgroundColor: "#fff",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FontAwesome name="user-circle-o" size={44} color="grey" />
            </View>
            <Feather name="settings" size={44} color="#fff" />
          </View>
          <Text style={{ color: "#fff" }}>Hi {users.username} !</Text>
        </TouchableOpacity>
      </Modal>
      <FontAwesome
        name="user-circle-o"
        size={24}
        color="black"
        onPress={() => setModalVisible(true)}
      />
      <FontAwesome5
        name="twitter"
        size={24}
        color="#00acee"
        onPress={() => navigation.navigate("Home")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    borderBottomColor: "grey",
    borderBottomWidth: 1,
    width: "100%",
    height: "15%",
    alignItems: "flex-end",
    justifyContent: "space-evenly",
    paddingBottom: 15,
    flexDirection: "row",
  },
  centeredView: {
    padding: 15,
    flex: 1,
    backgroundColor: "#000",
    width: "85%",
  },
  headerModal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: "10%",
    width: "100%",
  },
});