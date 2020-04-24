import React from 'react';
import {Text, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

export default ({item: {id, text}, enableEditing, onDelete}) => (
  <View style={styles.item}>
    <Text>{text}</Text>
    <View style={styles.editing}>
      <Icon
        style={styles.icons}
        name="edit"
        size={20}
        color="blue"
        onPress={() => enableEditing()}
      />
      <Icon
        name="remove"
        color="firebrick"
        size={20}
        onPress={() => onDelete(id)}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  item: {
    width: 390,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  editing: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icons: {
    marginRight: 10,
  },
});
