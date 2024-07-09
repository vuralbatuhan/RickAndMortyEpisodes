import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    image: {
        width: 50,
        height: 50,
        marginRight: 16,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexGrow: 1,
        justifyContent: 'flex-start',
        paddingTop: 10,
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