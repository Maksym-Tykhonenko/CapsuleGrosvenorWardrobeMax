const ZAPREX_IMG_CLOSE = require('../CapsleGrosWardobAssts/SvenodroIcssurd/closx.png');
import {
    Text as PexiNom,


    View as Ralxivo,

    Image as Imxora,
    ScrollView as ScurDro,

    TouchableOpacity as Klikravo,

    Dimensions as JexuMaq,
} from 'react-native';

import QuizModal from '../CapenorWarrobCompnents/QuizModal';
const ZAPREX_IMG_SHARE = require('../CapsleGrosWardobAssts/SvenodroIcssurd/frshar.png');
import WadopsuGradieButtn from '../CapenorWarrobCompnents/WadopsuGradieButtn';
import React, { useState as TovraSeed } from 'react';
import artcls from '../DopDanniFull/artcls';
import { grosofts as FonxPile } from '../grosofts';


export default function OpenedBookToRead({
    showQuiz,
    setShowQuiz,
}: {
    showQuiz: boolean;
    setShowQuiz: (val: boolean) => void;
}) {
    const { width: XorWen, height: Glaph } = JexuMaq.get('window');
    const [IxOpen, SetIxOpen] = TovraSeed<number | null>(null);

    const RndRad = XorWen * 0.04;
    const PadVox = Glaph * 0.025;
    const PadHex = XorWen * 0.045;
    const IcoScale = XorWen * 0.09;
    const GapDeck = Glaph * 0.018;
    const BtnDrip = Glaph * 0.025;

    if (showQuiz) {
        return <QuizModal onClose={() => setShowQuiz(false)} />;
    }

    if (IxOpen !== null) {
        const GrotLeaf = artcls[IxOpen];
        return (
            <Ralxivo style={{ flex: 1, alignItems: 'center', width: XorWen }}>
                <Ralxivo style={{
                    width: XorWen * 0.93,
                    borderRadius: RndRad,
                    marginBottom: Glaph * 0.04,
                    paddingHorizontal: PadHex,
                }}
                >
                    <Ralxivo style={{
                        alignItems: 'center',
                        flexDirection: 'row',

                        justifyContent: 'space-between',
                    }}
                    >
                        <Klikravo
                            style={{
                                alignItems: 'center',
                                height: IcoScale * 1.9,
                                justifyContent: 'center',
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                width: IcoScale * 1.9,
                            }}
                        >
                            <Imxora
                                source={ZAPREX_IMG_SHARE}
                                style={{
                                    width: IcoScale * 0.7,
                                    height: IcoScale * 0.7,
                                }} />
                        </Klikravo>

                        <Klikravo onPress={() => SetIxOpen(null)} style={{
                            width: IcoScale * 1.9,
                            height: IcoScale * 1.9,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: 'rgba(255,255,255,0.1)',
                        }}
                        >
                            <Imxora source={ZAPREX_IMG_CLOSE} style={{
                                height: IcoScale * 0.7,
                                width: IcoScale * 0.7,
                            }}
                            />
                        </Klikravo>
                    </Ralxivo>

                    <ScurDro style={{
                        maxHeight: Glaph * 0.7,
                        marginTop: IcoScale * 0.3,
                    }} showsVerticalScrollIndicator={false} contentContainerStyle={{
                        paddingBottom: XorWen * 0.3,
                    }}
                    >
                        <PexiNom style={{
                            fontFamily: FonxPile.sulerobBold,
                            color: 'white',
                            fontSize: XorWen * 0.065,
                            marginBottom: Glaph * 0.018,
                        }}
                        >
                            {GrotLeaf.title}
                        </PexiNom>

                        <PexiNom
                            style={{
                                color: '#D6D6E7',
                                fontFamily: FonxPile.sulerobRegular,
                                fontSize: XorWen * 0.045,
                                lineHeight: XorWen * 0.065,
                            }}
                        >
                            {GrotLeaf.body}
                        </PexiNom>
                    </ScurDro>
                </Ralxivo>
            </Ralxivo>
        );
    }

    return (
        <Ralxivo style={{ flex: 1, alignItems: 'center', width: XorWen }}>
            <PexiNom style={{
                marginBottom: Glaph * 0.018,
                fontFamily: FonxPile.sulerobRegular,
                color: 'white',
                width: XorWen * 0.9,
                fontSize: XorWen * 0.04,
            }}
            >
                5 fresh questions every time. Test your style sense and discover something new about your look
            </PexiNom>

            <WadopsuGradieButtn onPress={() => setShowQuiz(true)} text="Take the Style Quiz"
                style={{
                    width: XorWen * 0.9,
                    marginVertical: BtnDrip,
                }}
            />

            <ScurDro style={{
                marginTop: Glaph * 0.01,
                width: XorWen * 0.93,
            }}
                showsVerticalScrollIndicator={false}
            >
                {artcls.map((blk, ridx) => (
                    <Klikravo
                        key={blk.title}
                        onPress={() => SetIxOpen(ridx)}
                        style={{
                            justifyContent: 'space-between',
                            borderWidth: XorWen * 0.001,
                            borderColor: 'rgba(255,255,255,0.7)',
                            paddingVertical: PadVox,
                            paddingHorizontal: PadHex,
                            flexDirection: 'row',
                            marginBottom: GapDeck,
                            borderRadius: RndRad,
                        }}
                    >
                        <PexiNom
                            numberOfLines={2}
                            style={{
                                color: 'white',
                                fontFamily: FonxPile.sulerobRegular,
                                fontSize: XorWen * 0.052,
                                flex: 1,
                                marginRight: XorWen * 0.03,
                            }}
                        >
                            {blk.title}
                        </PexiNom>

                        <Imxora
                            source={ZAPREX_IMG_SHARE}
                            style={{
                                width: XorWen * 0.12,
                                height: XorWen * 0.12,
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                padding: XorWen * 0.025,
                                borderRadius: XorWen * 0.01,
                            }}
                        />
                    </Klikravo>
                ))}
            </ScurDro>
        </Ralxivo>
    );
}