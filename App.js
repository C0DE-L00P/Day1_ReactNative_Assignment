import {
  StyleSheet,
  Text,
  ScrollView,
  Image,
  View,
  Button,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { Divider} from "react-native-paper";
import InfoBox from "./components/InfoBox";
import SliderElement from "./components/SliderElement";
import CV from "./assets/bold_cv.pdf";

export default function App() {

  const basicInfo = [
    { title: "Age", value: "25" },
    { title: "Residence", value: "BD" },
    { title: "Freelance", value: "Available", color: "#efb615" },
    { title: "Address", value: "Minya, Egypt" },
  ];

  const langs = [
    { title: "Arabic", percent: 100 },
    { title: "English", percent: 85 },
  ];

  const technicals = [
    { title: "HTML", percent: 100 },
    { title: "CSS", percent: 88 },
    { title: "JavaScript", percent: 84 },
    { title: "JQuery", percent: 77 },
    { title: "React JS", percent: 62 },
    { title: "Angular JS", percent: 81 },
    { title: "Flutter", percent: 90 },
    { title: "React Native", percent: 40 },
  ];

  const extraTechnicals = [
    "Bootstrap & Material UI Frameworks",
    "Sass and Scss",
    "Gulp and Webpack",
    "Git, Git flow and Github",
    "Node js, Express js",
    "MVC and MVVM Design patterns",
    "MongoDB, Firebase (Realtime and Firestore)",
    "SQLite and Postgress",
    "Trello , Notion and Jira",
  ];

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>


      {/* 1- Personal Info */}

      <Image
        style={styles.personalImg}
        source={require("./assets/img (1).jpg")}
      />

      <Text style={styles.personalName}>Thomas Anderson</Text>
      <Text style={{ color: "grey", fontSize: 16, marginBottom: 16 }}>
        Front End Developer
      </Text>

      <View style={styles.horizontalList}>
        <Icon
          name="facebook"
          style={styles.contactIconsFac}
          onPress={() => console.log("Facebook")}
        />
        <Icon
          name="twitter"
          style={styles.contactIcons}
          onPress={() => console.log("Twitter")}
        />
        <Icon
          name="linkedin"
          style={styles.contactIcons}
          onPress={() => console.log("LinkedIn")}
        />
        <Icon
          name="instagram"
          style={styles.contactIcons}
          onPress={() => console.log("Instragram")}
        />
        <Icon
          name="whatsapp"
          style={styles.contactIcons}
          onPress={() => console.log("Whatsapp")}
        />
      </View>

      <Divider style={styles.divider} />

      {/* 2- more personal info */}

      {basicInfo?.map((info, index) => (
        <InfoBox
          title={info.title}
          value={info.value}
          key={index}
          color={info.color}
        />
      ))}

      <Divider style={styles.divider} />

      {/* 3- Languages */}

      <View style={styles.sectionLayout}>
        <Text style={styles.sectionTitle}>Languages</Text>
        {langs?.map((lang, index) => (
          <SliderElement
            title={lang.title}
            percent={lang.percent}
            key={index}
          />
        ))}
      </View>

      <Divider style={styles.divider} />

      {/* 4- Skills */}

      <View style={styles.sectionLayout}>
        <Text style={styles.sectionTitle}>Skills</Text>

        {technicals?.map((item, index) => (
          <SliderElement
            key={index}
            title={item.title}
            percent={item.percent}
          />
        ))}
      </View>

      <Divider style={styles.divider} />

      {/* 5- Extra Skills */}

      <View style={styles.sectionLayout}>
        <Text style={styles.sectionTitle}>Extra Skills</Text>

        {extraTechnicals?.map((skill, index) => (
          <Text
            key={index}
            style={{
              color: "white",
              marginStart: 16,
              marginEnd: 16,
              marginBottom: 8,
              fontSize: 16,
            }}
          >
            <Icon name="plus" style={{ color: "#efb615" }} /> {skill}
          </Text>
        ))}
      </View>

      <Divider style={styles.divider} />

      {/* 6- Download CV Button */}

      <a
        href={CV}
        download
        style={{
          width: "80%",
          textDecoration: "none",
          overflow: "hidden",
          borderRadius: 8,
          backgroundColor: "#efb615",
          marginTop: 24,
          maxWidth: 400,
        }}
      >
        <Button title="Download CV" color="transparent" />
      </a>
    </ScrollView>
  );

  //View === div
  //Js coach is more like pub.dev for react-native
  //reactnativeelements or rneui is more like a bootstrap for React Native Components and you have to make npm install for some packages to use it
}

const styles = StyleSheet.create({
  scrollView: {
    padding: 24,
    backgroundColor: "#181818",
    flexGrow: 1,
    alignItems: "center",
    // justifyContent: 'center',
    flexDirection: "column",
  },
  personalImg: {
    marginBottom: 16,
    resizeMode: "contain",
    height: 200,
    borderRadius: 16,
    backgroundColor: "black",
    width: 200,
    overflow: "hidden",
  },
  personalName: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  horizontalList: {
    flexDirection: "row",
  },
  contactIcons: {
    backgroundColor: "#efb615",
    padding: 8,
    borderRadius: "50%",
    marginEnd: 8,
  },
  contactIconsFac: {
    paddingStart: 10,
    paddingEnd: 11,
    paddingTop: 8,
    paddingBottom: 8,
    backgroundColor: "#efb615",
    borderRadius: "50%",
    marginEnd: 8,
  },
  progressBar: {
    backgroundColor: "red",
  },
  divider: {
    height: 2,
    backgroundColor: "white",
    borderRadius: 8,
    width: "90%",
    marginTop: 16,
    marginBottom: 8,
  },
  sectionTitle: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 24,
  },
  sectionLayout: {
    width: "100%",
    paddingEnd: 32,
    paddingStart: 32,
    paddingTop: 24,
    paddingDown: 24,
  }
});
