import React from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
const DetailListItem = ({icon, title, subtitle}) => {
  return (
    <View style={styles.container}>
      <Icon name={icon} size={30} style={styles.icon} />
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
    marginTop: 10,
    paddingBottom: 12,
    borderBottomWidth: 1, 
    borderBottomColor: 'grey',
    marginLeft: 10,
    marginRight: 10
  },
  icon:{
    color: 'black',
    marginLeft:15,
    marginRight:15,
    
  },
  title:{
    fontWeight: 'bold'
  },
  subtitle:{
    color: 'blue'
  }
});
export default DetailListItem;
