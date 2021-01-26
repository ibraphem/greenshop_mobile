import { StyleSheet } from "react-native";
import { COLORS } from "./Theme";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  titleText: {
    fontSize: 18,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  input: {
    borderWidth: 0,
    borderColor: "#000",
    width: "100%",
    padding: 15,
    backgroundColor: COLORS.white,
    fontSize: 18,
    borderRadius: 6,
  },
  errorText: {
    color: "crimson",
    fontWeight: "bold",
    marginBottom: 10,
    marginTop: 6,
    textAlign: "center",
  },
  empty: {
    color: COLORS.black,
    textAlign: "center",
    fontSize: 25,
    fontWeight: "700",
  },
});
