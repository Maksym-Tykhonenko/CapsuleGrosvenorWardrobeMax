
import { grosofts as FontMurk } from '../grosofts';
import { useNavigation as DriftNav } from '@react-navigation/native';
import WadopsuGradieButtn from '../CapenorWarrobCompnents/WadopsuGradieButtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
    TouchableOpacity as Prask,
    View as Dranqo,
    Text as Leximor,
    Switch as Torgle,
    Linking as UrlHop,
    Image as Imgra,
    Modal as ShadBox,
    Dimensions as Vexulo,
    Share as Scatter,
} from 'react-native';

import React, { useState as FrizTick } from 'react';
import InAppReview from 'react-native-in-app-review';

/* максимально хаотичний локальний конфіг */
const ZORKA_MENULIST = [
    {
        kx: 'a1x',
        tx: 'Reset all data',
        ig: require('../CapsleGrosWardobAssts/SvenodroIcssurd/colorReset.png'),
        fx: 'wipe',
    },
    {
        kx: 'b9q',
        tx: 'Share the app',
        ig: require('../CapsleGrosWardobAssts/SvenodroIcssurd/rdshr.png'),
        fx: 'blast',
    },
    {
        kx: 'r77',
        tx: 'Rate us',
        ig: null,
        fx: 'judge',
    },
    {
        kx: 't4m',
        tx: 'Terms of use',
        ig: null,
        fx: 'legal',
    },
];

export default function Sulesetsoven() {
    const { width: Qrow, height: Hlim } = Vexulo.get('window');

    const RowTall = Hlim * 0.07;
    const PixOrb = RowTall * 0.5;
    const RndEdge = RowTall * 0.25;
    const TxtMass = RowTall * 0.38;

    const [PingFlag, FlipPingFlag] = FrizTick(true);
    const [FogLatch, SetFogLatch] = FrizTick(false);

    const NavSlip = DriftNav();

    const FluxGate = (node: any) => {
        if (node.fx === 'wipe') {
            SetFogLatch(true);
        }
        if (node.fx === 'legal') {
            UrlHop.openURL(
                'https://www.termsfeed.com/live/0b989f89-ca53-4cba-9573-602d7b674936'
            );
        }
        if (node.fx === 'blast') {
            Scatter.share({
                message:
                    'Use Groswenor: Capsule Wardobe to manage your wardrobe and generate outfits!',
            });
        }
        if (node.fx === 'judge') {
            if (InAppReview.isAvailable()) {
                InAppReview.RequestInAppReview();
            } else {
                UrlHop.openURL(
                    'https://apps.apple.com/us/app/groswenor-capsule-wardobe/id6757855776'
                );
            }
        }
    };

    return (
        <Dranqo style={{
            width: Qrow * 0.9,
            backgroundColor: 'transparent',
            alignSelf: 'center',
            flex: 1,
            paddingTop: Hlim * 0.05,
        }}>
            {/* notification toggle */}
            <Dranqo style={{
                marginBottom: Hlim * 0.01,
                justifyContent: 'space-between',
                alignItems: 'center',
                flexDirection: 'row',
                height: RowTall,
            }}
            >
                <Leximor style={{
                    fontSize: TxtMass,
                    color: '#fff',
                    fontFamily: FontMurk.sulerobLight,
                }}
                >
                    Notifications
                </Leximor>
                <Torgle
                    thumbColor="#fff"
                    onValueChange={FlipPingFlag}
                    trackColor={{ false: '#444', true: '#FF2128' }}
                    style={{
                        transform: [{ scaleX: 1.1 }, { scaleY: 1.1 }],
                    }}
                    value={PingFlag}
                />
            </Dranqo>

            <Dranqo style={{ width: '100%', height: 1, backgroundColor: '#444' }} />

            {/* action rows */}
            {ZORKA_MENULIST.map((vx, ix) => (
                <Prask key={vx.kx}
                    activeOpacity={0.7} onPress={() => FluxGate(vx)} style={{
                        borderBottomColor: '#444',
                        alignItems: 'center',
                        flexDirection: 'row',
                        height: RowTall,
                        borderBottomWidth: ix < ZORKA_MENULIST.length - 1 ? 1 : 0,
                        justifyContent: 'space-between',
                    }}
                >
                    <Leximor style={{
                        fontFamily: FontMurk.sulerobLight,
                        fontSize: TxtMass,
                        color: '#fff',
                    }}
                    >
                        {vx.tx}
                    </Leximor>
                    {vx.ig && (
                        <Imgra source={vx.ig} style={{
                            height: PixOrb,
                            width: PixOrb,
                                resizeMode: 'contain',
                            }}
                        />
                    )}
                </Prask>
            ))}

            {/* reset fog */}
            <ShadBox
                onRequestClose={() => SetFogLatch(false)}
                visible={FogLatch}
                transparent
                animationType="fade"
            >
                <Dranqo  style={{
                    justifyContent: 'center',
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    flex: 1,
                        alignItems: 'center',
                    }}
                >
                    <Dranqo    style={{
                        alignItems: 'center',
                        borderRadius: RndEdge,
                        width: Qrow * 0.8,
                            padding: Hlim * 0.03,
                            backgroundColor: '#181828',
                        }}
                    >
                        <Leximor style={{
                                fontFamily: FontMurk.sulerobRegular,
                                fontSize: TxtMass * 1.1,
                                textAlign: 'center',
                                marginBottom: Hlim * 0.02,
                                color: '#fff',
                            }}
                        >
                            Are you sure you want to reset all data?
                        </Leximor>

                        <Dranqo
                            style={{
                                marginTop: Hlim * 0.01,
                                gap: Qrow * 0.05,
                                flexDirection: 'row',
                            }}
                        >
                            <WadopsuGradieButtn
                                style={{ width: '46%' }}
                                onPress={() => SetFogLatch(false)}
                                text="Close"
                            />
                            <WadopsuGradieButtn text="Reset"
                                onPress={() => {
                                    SetFogLatch(false);
                                    AsyncStorage.clear();
                                    NavSlip.replace('GrovensoPsuleLoadWdob');
                                }}
                                style={{ width: '46%' }}
                            />
                        </Dranqo>
                    </Dranqo>
                </Dranqo>
            </ShadBox>
        </Dranqo>
    );
}