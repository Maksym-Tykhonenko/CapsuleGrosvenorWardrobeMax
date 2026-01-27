import WadopsuGradieButtn from '../CapenorWarrobCompnents/WadopsuGradieButtn';
import { useNavigation as QrzNavTangle } from '@react-navigation/native';
const Grssenr_EKknfds_sdfoqwpeoijkl = 'dsoj-eiwo-siofpasjm-w283r9dio-dfss-2r2fds';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState as VlopZynCrk } from 'react';
import {
    SafeAreaView as ZynqSafeHold,
    useWindowDimensions as HqrDimSplice,
    Text as Cpsurswentextorso,
    View as DrolecaboxSewerod,
    TouchableOpacity as NorawTappdbar,
    Image as FlimzorPicta,
} from 'react-native';
import { grosofts as KrndFontMesh } from '../grosofts';

const CaprovenorOnbrdnWrdro: React.FC = () => {
    const { width: WxqPlume, height: HkroSpill } = HqrDimSplice();
    const NavQrxFlux = QrzNavTangle();
    const [IdxPhaseRift, SetIdxPhaseRift] = VlopZynCrk(0);

    const ZqRitualScatter = [
        {
            topper: 'Build your capsule',
            zobr: require('../CapsleGrosWardobAssts/GroulerdoImagspsu/slayboi/firstboy.png'),
            lore: `Upload your pieces, sort them by category, and keep your wardrobe clean, searchable, and ready for combinations`,
        },
        {
            topper: 'Generate outfits in one tap',
            lore: `Let the app create a complete outfit from your wardrobe. Regenerate, refine, and save your best combinations to your archive`,
            zobr: require('../CapsleGrosWardobAssts/GroulerdoImagspsu/slayboi/hetakesphoto.png'),
        },
        {
            topper: 'Style becomes a system',
            lore: `Read practical articles about style and wardrobe logic, take short quizzes, and sharpen your sense of combinations over time`,
            zobr: require('../CapsleGrosWardobAssts/GroulerdoImagspsu/slayboi/intelephone.png'),
        },
    ];

    const PulseAdvanceGlyph = async () => {
        if (IdxPhaseRift < ZqRitualScatter.length - 1) {
            SetIdxPhaseRift(x => x + 1);
        } else {
            try {
                await AsyncStorage.setItem(Grssenr_EKknfds_sdfoqwpeoijkl, 'sealed');
            } catch (SealCrshVoid) {
                if (__DEV__) console.warn('CronnBolden::sealFail', SealCrshVoid);
            }
            NavQrxFlux.replace?.('SvorbenoWrapprveno');
        }
    };

    const ActiveRuneImage = ZqRitualScatter[IdxPhaseRift].zobr;

    return (
        <DrolecaboxSewerod style={{ width: WxqPlume, height: HkroSpill, flex: 1, alignItems: 'center' }}>
            <ZynqSafeHold />

            <FlimzorPicta
                style={{
                    position: 'absolute',
                    top: 0,
                    width: WxqPlume,
                    height: HkroSpill,
                    zIndex: 0,
                    left: 0,
                }}
                source={require('../CapsleGrosWardobAssts/GroulerdoImagspsu/reestrant.png')}
                resizeMode="cover"
            />

            <FlimzorPicta
                style={{
                    width: WxqPlume * 0.95,
                    top: HkroSpill * 0.1043314,
                    zIndex: 1,
                    alignSelf: 'center',
                    height: HkroSpill * 0.64,
                    position: 'absolute',
                }}
                source={ActiveRuneImage}
                resizeMode="contain"
            />

            <NorawTappdbar
                onPress={() => {
                    NavQrxFlux.replace?.('SvorbenoWrapprveno');
                }}
                style={{
                    left: WxqPlume * 0.05,
                    overflow: 'hidden',
                    top: HkroSpill * 0.070534,
                    justifyContent: 'center',
                    alignItems: 'center',
                    position: 'absolute',
                    zIndex: 12,
                    borderRadius: HkroSpill * 0.004,
                    height: HkroSpill * 0.08,
                    width: WxqPlume * 0.9,
                }}
                activeOpacity={0.8}
            >
                <Cpsurswentextorso
                    style={{
                        fontSize: WxqPlume * 0.053,
                        color: '#fff',
                        textAlign: 'left',
                        width: '100%',
                        marginBottom: HkroSpill * 0.015,
                        fontFamily: KrndFontMesh.sulerobMedium,
                    }}
                >
                    Skip
                </Cpsurswentextorso>
            </NorawTappdbar>

            <DrolecaboxSewerod
                style={{
                    height: HkroSpill * 0.44,
                    marginTop: HkroSpill * 0.03,
                    zIndex: 5,
                    position: 'absolute',
                    width: WxqPlume,
                    alignItems: 'center',
                    paddingVertical: HkroSpill * 0.02,
                    alignSelf: 'center',
                    backgroundColor: '#060827',
                    bottom: 0,
                    paddingHorizontal: WxqPlume * 0.05,
                }}
            >
                <Cpsurswentextorso
                    style={{
                        fontSize: WxqPlume * 0.07,
                        color: 'white',
                        fontFamily: KrndFontMesh.wadrocinzlRegular,
                        marginBottom: HkroSpill * 0.015,
                        fontWeight: '500',
                        width: '100%',
                        textAlign: 'left',
                    }}
                >
                    {ZqRitualScatter[IdxPhaseRift].topper}
                </Cpsurswentextorso>

                <Cpsurswentextorso
                    style={{
                        fontFamily: KrndFontMesh.sulerobLight,
                        color: '#fff',
                        textAlign: 'left',
                        marginBottom: HkroSpill * 0.015,
                        fontSize: WxqPlume * 0.048020394,
                        width: '100%',
                    }}
                >
                    {ZqRitualScatter[IdxPhaseRift].lore}
                </Cpsurswentextorso>
            </DrolecaboxSewerod>

            <WadopsuGradieButtn
                style={{
                    bottom: HkroSpill * 0.070534,
                    position: 'absolute',
                    zIndex: 12,
                }}
                text={IdxPhaseRift === ZqRitualScatter.length - 1 ? 'GET STARTED' : 'CONTINUE'}
                onPress={PulseAdvanceGlyph}
            />
        </DrolecaboxSewerod>
    );
};

export default CaprovenorOnbrdnWrdro;