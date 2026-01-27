import React from 'react';
import { TouchableOpacity, Text, StyleSheet, ViewStyle, StyleProp, Dimensions } from 'react-native';
import Reddergrnd from './Reddergrnd';
import { grosofts } from '../grosofts';

type WadopsuGradieButtnProps = {
    onPress: () => void;
    text: string;
    style?: StyleProp<ViewStyle>;
    disabled?: boolean;
};

const WadopsuGradieButtn: React.FC<WadopsuGradieButtnProps> = ({ onPress, text, style, disabled }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[styles.button, style]}
            activeOpacity={0.8}
            disabled={disabled !== null && disabled !== undefined ? disabled : false}
        >
            <Reddergrnd />
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('window').width * 0.9,
        alignSelf: 'center',
        height: Dimensions.get('window').height * 0.08, // typical height, adjust if needed
        borderRadius: 4,
        overflow: 'hidden',
    },
    text: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').width * 0.04,
        color: 'white',
        fontWeight: '500',
        fontFamily: grosofts.wadrocinzlRegular,
    },
});

export default WadopsuGradieButtn;
