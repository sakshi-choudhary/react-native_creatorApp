import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [newTask, setnewTask] = useState("");
  const [appTasks, appTask] = useState([]);

  const taskInputHandler = (enteredText) => {
    setnewTask(enteredText);
  };

  const addTaskHandler = () => {
    appTask((currentTask) => [...currentTask, newTask]);
    console.log(newTask);
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Write a Task here"
          style={styles.input}
          onChangeText={taskInputHandler}
          value={newTask}
        />
        <View style={styles.plus}>
          <Button title="+" onPress={addTaskHandler} />
        </View>
      </View>
      <View>
        {appTasks.map((task) => (
          <Text style={styles.list} key={task}>
            {task}
          </Text>
        ))}
      </View>
      <View style={styles.totalTask}>
        <Button
          title="total tasks"
          onPress={() => alert(`Total tasks: ${appTasks.length}`)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  list: {
    padding: 10,
    margin: 10,
    backgroundColor: "#fafafa",
  },
  totalTask: {
    backgroundColor: "lightblue",
    padding: 10,
    borderWidth: 3,
    borderColor: "#fafafa",
  },
  plus: {
    borderWidth: 4,
    borderRadius: 100,
    backgroundColor: "black",
    borderColor: "#fafafa",
    margin: 20,
    color: "#fff",
  },
  input: {
    borderColor: "pink",
    borderWidth: 4,
    padding: 10,
    borderRadius: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
    bottom: 20,
  },
});
