import { Text } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled1 = ({
  navigation
}) => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: "#f0f0f1",
      padding: 10,
      position: "relative",
      flex: 1,
      flexWrap: "no-wrap"
    }}><Text style={styles.TBjmFRIt}>Lorem ipsum…</Text><View style={styles.cjSGXJsi}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  TBjmFRIt: {
    width: 100,
    height: 50,
    lineHeight: 14,
    fontSize: 14,
    borderRadius: 0
  },
  cjSGXJsi: {
    width: 80,
    height: 80,
    backgroundColor: "#E4E4E4",
    borderRadius: 40
  }
});
export default Untitled1;