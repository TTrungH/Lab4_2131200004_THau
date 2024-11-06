import { StyleSheet, View, Text, Alert, Button } from 'react-native';
import ContactThum from './ContactThum';
import { IconButton } from 'react-native-paper';
import DetailListItem from './DetailListItem.js'
import Icon from 'react-native-vector-icons';
const ProfileContact = ({ route }) => {
    const { contact } = route.params;
    const { id, avatar, name, email, phone, cell, favorite } = contact;

    return (
        <View style={styles.container}>
            <View style={styles.avatarSection}>
                <ContactThum avatar={avatar} name={name} phone={phone} />
            </View>
            <View style={styles.detailsSection}>
                <DetailListItem icon="email" title="Email" subtitle={email} />
                <DetailListItem icon="phone" title="Work" subtitle={phone} />
                <DetailListItem icon="cellphone" title="Personal" subtitle={cell} />
                <View style={{ alignItems: 'center' }}>
                    <IconButton
                        icon={favorite ? "star-check" : "star-check-outline"}
                        iconColor="#663399"
                        size={20}
                        onPress={() => {
                            //updateFavorite();
                        }}
                    />
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container:{
        flex :1,
    },
    avatarSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'blue',
    },
    detailsSection:{
        flex : 1,
        backgroundColor: 'white',
    },
});
export default ProfileContact;
