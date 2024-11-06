import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';

const DetailListItem = ({icon, title, subtitle}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 0,
    flexDirection:'row',
  },
  title:{
    fontWeight: 'bold'
  },
  subtitle:{
    color: 'blue'
  }
});
export default DetailListItem;
