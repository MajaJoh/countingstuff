import { Text, View, StyleSheet } from "react-native";

import { CountableButton } from "./CountableButton";
import { CommonStyles } from "../styles/CommonStyles";

export const CountableRow = ({
  countable,
  changeCount,
  deleteCountable,
  index,
}) => (
  <View style={CommonStyles.row}>
    <View>
      <Text style={CommonStyles.textItem}>{countable.name}</Text>
      <Text style={[CommonStyles.textItem, styles.count]}>
        {countable.count}
      </Text>
    </View>
    <View style={styles.buttonColumn}>
      <CountableButton label="+" submit={() => changeCount(1, index)} />
      <CountableButton label="-" submit={() => changeCount(-1, index)} />
      <CountableButton label="x" submit={() => deleteCountable(index)} />
    </View>
  </View>
);

const styles = StyleSheet.create({
  buttonColumn: {
    flexDirection: "row",
    gap: 8,
  },
  count: {
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
  },
});
