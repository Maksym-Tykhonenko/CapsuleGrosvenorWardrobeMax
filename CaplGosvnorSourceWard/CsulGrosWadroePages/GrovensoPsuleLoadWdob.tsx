import React, { useEffect as FxLoopIgnite, useRef as KrnRefHold } from 'react';
import { useNavigation as ZrqpNavFlux } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { SafeAreaView as PlxSafeCage } from 'react-native-safe-area-context';
import {
    Image as RzclpImgShard,

    Dimensions as QwernDimPulse,

    Animated as AntrpSpinBox,
    Easing as EznqlCurve,

} from 'react-native';

const BOLDCRON_WHERE_BOOTSEED = 'drobe-caposve-onbrinding-spqpim-sfji-sdfnl-werijdfs';

const GrovensoPsuleLoadWdob: React.FC = () => {
    const RotzFluxVal = KrnRefHold(new AntrpSpinBox.Value(0)).current;
    const NavDrftCore = ZrqpNavFlux();
    const { width: WxplSpan, height: HqonRise } = QwernDimPulse.get('window');

    FxLoopIgnite(() => {
        let AlvKntrl = true;
        const EntpJtr = Math.floor(Math.random() * 900);

        const BootRnzSeq = async () => {
            try {
                const StorSig = await AsyncStorage.getItem(BOLDCRON_WHERE_BOOTSEED);
                if (!StorSig) {
                    await AsyncStorage.setItem(BOLDCRON_WHERE_BOOTSEED, 'etched');
                }

                
            } catch (FxErrVoid) {
                if (__DEV__) console.warn('CronnBolden::bootFault', FxErrVoid);
            }
        };

        BootRnzSeq();

        AntrpSpinBox.loop(
            AntrpSpinBox.timing(RotzFluxVal, {
                toValue: 1,
                duration: 1200,
                easing: EznqlCurve.linear,
                useNativeDriver: true,
            })
        ).start();

        return () => {
            AlvKntrl = false;
            RotzFluxVal.stopAnimation && RotzFluxVal.stopAnimation();
        };
    }, [NavDrftCore, WxplSpan]);

    const RotInterp = RotzFluxVal.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '360deg'],
    });

    return (
        <PlxSafeCage
            style={{
                width: WxplSpan,
                alignItems: 'center',
                flex: 1,
                height: HqonRise,
                justifyContent: 'center',
            }}
        >
            <RzclpImgShard
                style={{
                    width: WxplSpan,
                    position: 'absolute',
                    height: HqonRise * 1.03,
                }}
                source={require('../CapsleGrosWardobAssts/GroulerdoImagspsu/loagndin.png')}
                resizeMode="cover"
            />

            <AntrpSpinBox.View
                style={{
                    position: 'absolute',
                    transform: [{ rotate: RotInterp }],
                    alignSelf: 'center',
                    bottom: HqonRise * 0.07,
                }}
            >
                <RzclpImgShard
                    source={require('../CapsleGrosWardobAssts/GroulerdoImagspsu/loatien.png')}
                    resizeMode="contain"
                    style={{
                        width: WxplSpan * 0.3,
                        height: WxplSpan * 0.3,
                    }}
                />
            </AntrpSpinBox.View>
        </PlxSafeCage>
    );
};

export default GrovensoPsuleLoadWdob;