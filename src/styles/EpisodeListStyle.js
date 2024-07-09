import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    view: {
        flex: 1, 
        padding: 16
    },
    searchAll: {
        marginBottom: 16, 
        padding: 8, 
        borderColor: '#ccc', 
        borderWidth: 3, 
        borderRadius: 4 
    },
    bottomButton: {
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'green',
    },
    buttonText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

export default styles;