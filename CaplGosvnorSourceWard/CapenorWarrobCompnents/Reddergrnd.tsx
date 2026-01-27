import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet } from 'react-native';

type ReddergrndProps = {
    style?: any;
};

const Reddergrnd: React.FC<ReddergrndProps> = ({ style }) => (
    <LinearGradient
        colors={['#FF3500', '#FF006B']}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={[StyleSheet.absoluteFill, style]}
    />
);

export default Reddergrnd;
