import React, {
    useEffect as PlimEcho,
    useState as VraxoSeed,
} from 'react';
import {
    TouchableOpacity as KlixTap,
    View as JomRaqi,
    Image as ZivPict,
    Text as FexiTxt,
    Modal as PruvMeld,
    Alert as WarnFlaq,
    SafeAreaView as BexiHush,
    ScrollView as UloxDrip,
    Pressable as MipHold,
    Dimensions as QxamVero,
} from 'react-native';

import WadopsuGradieButtn from '../CapenorWarrobCompnents/WadopsuGradieButtn';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { grosofts as FntMorsel, grosofts } from '../grosofts';

/* максимально хаотичні локальні константи */
const QPRX_KATAMORPH = ['Tops', 'Bottoms', 'Footwear', 'Outerwear'];

/* максимально унікальний генератор ідентифікаторів */
function x9vQeRr_MeltId() {
    return (
        Math.random().toString(36).slice(2) +
        Date.now().toString(36) +
        Math.random().toString(36).slice(2)
    );
}

export default function StyleBeginsWithClarity({
    twistSigilThread,
}: {
    twistSigilThread: (val: string) => void;
}) {
    const { width: VepWiz, height: ZolHex } = QxamVero.get('window');

    const [RuxModal, FlipRuxModal] = VraxoSeed(false);
    const [JatSelect, PlantJat] = VraxoSeed<any>(null);
    const [MivArchive, SetMivArchive] = VraxoSeed<any[]>([]);
    const [QlotMatrix, SeedQlot] = VraxoSeed<Record<string, any[]>>({});

    /* завантаження збережених луків */
    PlimEcho(() => {
        (async () => {
            const rawPack = await AsyncStorage.getItem('outfits');
            if (rawPack) SetMivArchive(JSON.parse(rawPack));
        })();
    }, []);

    /* генерація нового луку */
    const ForgeLookPulse = async () => {
        const rawWard = await AsyncStorage.getItem('wardrobeItems');
        const parsedWard = rawWard ? JSON.parse(rawWard) : [];

        const localBins: Record<string, any[]> = {};
        QPRX_KATAMORPH.forEach(k => (localBins[k] = []));

        parsedWard.forEach((itm: any) => {
            if (localBins[itm.category]) localBins[itm.category].push(itm);
        });

        SeedQlot(localBins);

        for (let gate of QPRX_KATAMORPH) {
            if (!localBins[gate] || localBins[gate].length === 0) {
                WarnFlaq.alert(
                    'Not Enough Items to Generate an Outfit',
                    'You need at least one item from each category (Tops, Bottoms, Footwear, Outerwear) in your wardrobe to create a complete outfit.',
                    [
                        { text: 'Close', style: 'cancel' },
                        {
                            text: 'Go to Wardrobe',
                            onPress: () =>
                                twistSigilThread('Trempel Wardrobe Scn To Update'),
                        },
                    ],
                );
                return;
            }
        }

        const brewedLook = {
            zk: x9vQeRr_MeltId(),
            Tops: localBins.Tops[Math.floor(Math.random() * localBins.Tops.length)],
            Bottoms:
                localBins.Bottoms[
                Math.floor(Math.random() * localBins.Bottoms.length)
                ],
            Footwear:
                localBins.Footwear[
                Math.floor(Math.random() * localBins.Footwear.length)
                ],
            Outerwear:
                localBins.Outerwear[
                Math.floor(Math.random() * localBins.Outerwear.length)
                ],
        };

        PlantJat(brewedLook);
        FlipRuxModal(true);
    };

    /* збереження луку */
    const SealLookPulse = async () => {
        const stitched = [...MivArchive, JatSelect];
        SetMivArchive(stitched);
        await AsyncStorage.setItem('outfits', JSON.stringify(stitched));
        FlipRuxModal(false);
    };

    const ShuffleLocked =
        Object.values(QlotMatrix).some(arr => arr.length <= 1);

    return (
        <JomRaqi style={{
            width: VepWiz * 0.9,
            alignSelf: 'center',
            alignItems: 'center',
            flex: 1,
            backgroundColor: 'transparent',
        }}
        >
            <FexiTxt
                style={{
                    color: 'white',
                    fontFamily: FntMorsel.sulerobLight,
                    fontSize: VepWiz * 0.059,
                    width: '100%',
                }}
            >
                Generate a Look
            </FexiTxt>

            <FexiTxt
                style={{
                    marginTop: ZolHex * 0.007,
                    fontFamily: FntMorsel.sulerobRegular,
                    fontSize: VepWiz * 0.04,
                    width: '100%',
                    color: 'white',
                }}
            >
                A curated outfit, built from your wardrobe in one tap
            </FexiTxt>

            <WadopsuGradieButtn
                style={{ marginTop: ZolHex * 0.03 }}
                text="✨ GENERATE LOOK"
                onPress={ForgeLookPulse}
            />

            <PruvMeld
                animationType="slide"
                onRequestClose={() => FlipRuxModal(false)}
                visible={RuxModal}
                transparent
            >
                <BexiHush style={{
                    alignItems: 'center',
                    backgroundColor: '#0a0a2a',
                    flex: 1,
                }}
                >
                    <JomRaqi
                        style={{
                            padding: VepWiz * 0.06,
                            width: VepWiz * 0.95,
                        }}
                    >
                        <JomRaqi
                            style={{
                                alignItems: 'center',
                                marginBottom: ZolHex * 0.03,
                                justifyContent: 'space-between',
                                flexDirection: 'row',
                            }}
                        >
                            <FexiTxt
                                style={{
                                    fontFamily: FntMorsel.sulerobRegular,
                                    color: 'white',
                                    fontSize: VepWiz * 0.06,
                                }}
                            >
                                New look
                            </FexiTxt>

                            <KlixTap onPress={() => FlipRuxModal(false)}>
                                <ZivPict
                                    source={require('../CapsleGrosWardobAssts/SvenodroIcssurd/closx.png')}
                                    style={{
                                        width: VepWiz * 0.07,
                                        height: VepWiz * 0.07,
                                    }}
                                />
                            </KlixTap>
                        </JomRaqi>

                        {JatSelect && (
                            <JomRaqi
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    alignItems: 'flex-start',
                                    marginTop: ZolHex * 0.01,
                                }}
                            >
                                {/* Left column: Tops, Bottoms, Footwear */}
                                <JomRaqi style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    <ZivPict
                                        source={{ uri: JatSelect['Tops'].image }}
                                        style={{
                                            width: VepWiz * 0.42,
                                            height: VepWiz * 0.42,
                                            margin: VepWiz * 0.01,
                                        }}
                                    />
                                    <ZivPict
                                        source={{ uri: JatSelect['Bottoms'].image }}
                                        style={{
                                            width: VepWiz * 0.42,
                                            height: VepWiz * 0.42,
                                            margin: VepWiz * 0.01,
                                        }}
                                    />
                                    <ZivPict
                                        source={{ uri: JatSelect['Footwear'].image }}
                                        style={{
                                            width: VepWiz * 0.42,
                                            height: VepWiz * 0.42,
                                            margin: VepWiz * 0.01,
                                        }}
                                    />
                                </JomRaqi>
                                {/* Right column: Outerwear */}
                                <JomRaqi style={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                                    <ZivPict
                                        source={{ uri: JatSelect['Outerwear'].image }}
                                        style={{
                                            width: VepWiz * 0.42,
                                            height: VepWiz * 0.42,
                                            margin: VepWiz * 0.01,
                                        }}
                                    />
                                </JomRaqi>
                            </JomRaqi>
                        )}

                        <JomRaqi style={{
                            alignItems: 'center',
                            marginTop: ZolHex * 0.03,
                            flexDirection: 'row',
                        }}>
                            {!ShuffleLocked && (
                                <KlixTap
                                    disabled={ShuffleLocked}
                                    onPress={
                                        ShuffleLocked ? undefined : ForgeLookPulse
                                    }
                                    style={{
                                        opacity: ShuffleLocked ? 0 : 1,
                                        padding: VepWiz * 0.05,
                                    }}
                                >
                                    <ZivPict
                                        source={require('../CapsleGrosWardobAssts/SvenodroIcssurd/shuffle.png')}
                                        style={{
                                            width: VepWiz * 0.064,
                                            height: VepWiz * 0.064,
                                        }}
                                    />
                                </KlixTap>
                            )}

                            <WadopsuGradieButtn
                                onPress={SealLookPulse}
                                text="SAVE"
                                style={{ flex: 1 }}
                            />
                        </JomRaqi>
                    </JomRaqi>
                </BexiHush>
            </PruvMeld>

            {MivArchive.length > 0 && (
                <FexiTxt
                    style={{
                        // marginBottom: ZolHex * 0.019,
                        fontFamily: grosofts.sulerobLight,
                        color: 'white',
                        width: '100%',
                        fontSize: VepWiz * 0.1,
                        marginTop: ZolHex * 0.019,
                        textAlign: 'left',
                    }}
                >
                    Looks
                </FexiTxt>
            )}

            <UloxDrip style={{ width: '100%' }}>
                {/* Group looks into pairs for each row */}
                {Array.from({ length: Math.ceil(MivArchive.length / 2) }).map((_, rowIdx) => (
                    <JomRaqi
                        key={rowIdx}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'flex-start',
                            marginBottom: ZolHex * 0.02,
                        }}
                    >
                        {/* Render up to two looks per row */}
                        {[0, 1].map(colIdx => {
                            const lk = MivArchive[rowIdx * 2 + colIdx];
                            if (!lk) return null;
                            return (
                                <MipHold
                                    key={lk.zk || (rowIdx * 2 + colIdx)}
                                    onLongPress={() => {
                                        WarnFlaq.alert(
                                            'Delete this outfit?',
                                            'Are you sure you want to delete this outfit from your collection?',
                                            [
                                                { text: 'Cancel', style: 'cancel' },
                                                {
                                                    text: 'OK',
                                                    style: 'destructive',
                                                    onPress: async () => {
                                                        const trimmed = MivArchive.filter(
                                                            o => o.zk !== lk.zk,
                                                        );
                                                        SetMivArchive(trimmed);
                                                        await AsyncStorage.setItem(
                                                            'outfits',
                                                            JSON.stringify(trimmed),
                                                        );
                                                    },
                                                },
                                            ],
                                        );
                                    }}
                                    style={{
                                        backgroundColor: '#18183a',
                                        // padding: VepWiz * 0.02,
                                        marginRight: VepWiz * 0.02,
                                        width: VepWiz * 0.44,
                                        marginTop: ZolHex * 0.019,
                                    }}
                                >
                                    {/* 2x2 grid for each look */}
                                    <JomRaqi style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center', }}>
                                        {/* First row: Tops, Outerwear */}
                                        <ZivPict
                                            source={{ uri: lk.Tops.image }}
                                            style={{
                                                width: VepWiz * 0.19,
                                                height: VepWiz * 0.19,
                                                margin: VepWiz * 0.01,
                                            }}
                                        />
                                        <ZivPict
                                            source={{ uri: lk.Outerwear.image }}
                                            style={{
                                                width: VepWiz * 0.19,
                                                height: VepWiz * 0.19,
                                                margin: VepWiz * 0.01,
                                            }}
                                        />
                                        {/* Second row: Bottoms, Footwear */}
                                        <ZivPict
                                            source={{ uri: lk.Bottoms.image }}
                                            style={{
                                                width: VepWiz * 0.19,
                                                height: VepWiz * 0.19,
                                                margin: VepWiz * 0.01,
                                            }}
                                        />
                                        <ZivPict
                                            source={{ uri: lk.Footwear.image }}
                                            style={{
                                                width: VepWiz * 0.19,
                                                height: VepWiz * 0.19,
                                                margin: VepWiz * 0.01,
                                            }}
                                        />
                                    </JomRaqi>
                                </MipHold>
                            );
                        })}
                    </JomRaqi>
                ))}
            </UloxDrip>
        </JomRaqi>
    );
}
