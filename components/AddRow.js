import { useState } from "react";
import { View, TextInput, Keyboard } from "react-native";

import { CountableButton } from "./CountableButton";
import { CommonStyles } from "../styles/CommonStyles";

export const AddRow = ({ addNewCountable }) => {
  const [name, setName] = useState("");

  return (
    <View style={CommonStyles.row}>
      <TextInput
        style={CommonStyles.input}
        placeholder="Enter name"
        onChangeText={setName}
        value={name}
      />
      <CountableButton
        label="Add"
        submit={() => {
          if (name.trim()) {
            addNewCountable(name);
            setName("");
            Keyboard.dismiss();
          }
        }}
      />
    </View>
  );
};
