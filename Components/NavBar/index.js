import React, { useState } from "react";
// import "./navbar.css";
import { Link } from "react-router-dom";
import burgerMenu from "./burgermenu.svg";
import newlogo from "../../assets/newlogo.png";
import { Image, StyleSheet, Text, View } from "react-native";
import InfoIcon from "../Info";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <View style={styles.navBar}>
      <Image className="logo" source={newlogo} style={styles.logo} />
      <View>
        <InfoIcon />
      </View>
      <Image
        source={burgerMenu}
        className="burgerMenu"
        alt="menu"
        style={styles.burgerMenu}
      />
      <Text
        className="title"
        style={{
          fontFamily: "Roboto",
          position: "absolute",
          textAlign: "center",
          width: 156,
          height: 33,
          left: 50,
          top: 30,
          fontSize: 22,
          lineHeight: 39,
          color: "rgba(22, 48, 43, 0.81)",
        }}
      >
        AniMate
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    backgroundColor: "#f8f8ff",
    width: "100%",
    height: 100,
  },
  logo: {
    marginLeft: -10,
    width: 100,
    height: 100,
    // display: "inline-block",
  },
  burgerMenu: {
    width: 40,
    height: 40,
    position: "absolute",
    right: 10,
    top: 20,
  },
  title: {},
});

export default NavBar;
