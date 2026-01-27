import StyleBeginsWithClarity from './StyleBeginsWithClarity';
import Sulesetsoven from './Sulesetsoven';
import LinearGradient from 'react-native-linear-gradient';
import { grosofts as HqerFontMix } from '../grosofts';
import TremplWadrobe from './TremplWadrobe';
import React, { useState as QpzrNoxie } from 'react';
import OpenedBookToRead from './OpenedBookToRead';

type FmtrZaqw =
    | 'Check And Pick my Mood'
    | 'Trempel Wardrobe Scn To Update'
    | 'Some Sotries about Clothes'
    | 'Nalashtyvaty Parametrs'
    | 'Wardeno Caps Heneral Scn';

import {
    TouchableOpacity as BnoxTrep,
    Text as LzotQex,
    Image as XlprMivk,
    StyleSheet as QzmnPlok,
    Dimensions as UerqPadd,
    SafeAreaView as RtyeVass,
    View as JkavRuun,
} from 'react-native';

const { width: KpxuWern, height: OmltZevh } = UerqPadd.get('window');

const SvorbenoWrapprveno: React.FC = () => {
    const [TzrqClim, YqvaFlip] =
        QpzrNoxie<FmtrZaqw>('Wardeno Caps Heneral Scn');

    const [JexiBool, NmvqBool] = QpzrNoxie(false);

    const DqroMux = (vx: FmtrZaqw) => {
        switch (vx) {
            case 'Wardeno Caps Heneral Scn':
                return <StyleBeginsWithClarity twistSigilThread={YqvaFlip} />;
            case 'Trempel Wardrobe Scn To Update':
                return <TremplWadrobe />;
            case 'Some Sotries about Clothes':
                return <OpenedBookToRead showQuiz={JexiBool} setShowQuiz={NmvqBool} />;
            case 'Nalashtyvaty Parametrs':
                return <Sulesetsoven />;
            default:
                return null;
        }
    };

    const VqerList = [
        {
            zpx: require('../CapsleGrosWardobAssts/SvenodroIcssurd/knopki/homdmik.png'),
            trg: 'Wardeno Caps Heneral Scn',
        },
        {
            zpx: require('../CapsleGrosWardobAssts/SvenodroIcssurd/knopki/trempel.png'),
            trg: 'Trempel Wardrobe Scn To Update',
        },
        {
            zpx: require('../CapsleGrosWardobAssts/SvenodroIcssurd/knopki/openedBook.png'),
            trg: 'Some Sotries about Clothes',
        },
        {
            zpx: require('../CapsleGrosWardobAssts/SvenodroIcssurd/knopki/parssets.png'),
            trg: 'Nalashtyvaty Parametrs',
        },
    ];

    const QvtrHdr =
        TzrqClim === 'Wardeno Caps Heneral Scn'
            ? 'Style begins with clarity'
            : TzrqClim === 'Trempel Wardrobe Scn To Update'
                ? 'Wardrobe'
                : TzrqClim === 'Nalashtyvaty Parametrs'
                    ? 'Settings'
                    : TzrqClim === 'Some Sotries about Clothes' && !JexiBool
                        ? 'Style Reads'
                        : 'Quiz';

    return (
        <JkavRuun style={{
            width: KpxuWern,
            height: OmltZevh,
            backgroundColor: '#060827',
            flex: 1,
        }}
        >
            <RtyeVass />

            <LzotQex
                style={{
                    paddingHorizontal: KpxuWern * 0.05,
                    marginBottom: OmltZevh * 0.019,
                    fontFamily: HqerFontMix.sulerobLight,
                    color: 'white',
                    width: '100%',
                    fontSize: KpxuWern * 0.1,
                    marginTop: OmltZevh * 0.019,
                    textAlign: 'left',
                }}
            >
                {QvtrHdr}
            </LzotQex>

            <JkavRuun style={{ flex: 1, zIndex: 1 }}>
                {DqroMux(TzrqClim)}
            </JkavRuun>

            <JkavRuun
                style={{
                    width: KpxuWern,
                    justifyContent: 'space-between',
                    position: 'absolute',
                    flexDirection: 'row',
                    height: KpxuWern * 0.25,
                    borderTopColor: '#FFFFFF',
                    borderTopWidth: KpxuWern * 0.001,
                    backgroundColor: '#060827',
                    overflow: 'hidden',
                    zIndex: 100,
                    bottom: 0,
                }}
            >
                {VqerList.map((el, ix) => (
                    <BnoxTrep
                        key={ix}
                        onPress={() => YqvaFlip(el.trg as FmtrZaqw)}
                        style={{
                            justifyContent: 'center',
                            overflow: 'hidden',
                            alignItems: 'center',
                            width: KpxuWern * 0.25,
                        }}
                    >
                        {TzrqClim === el.trg && (
                            <LinearGradient
                                colors={['#FF3500', '#FF006B']}
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                style={QzmnPlok.absoluteFill}
                            />
                        )}
                        <XlprMivk
                            source={el.zpx}
                            style={{
                                width: KpxuWern * 0.08,
                                height: KpxuWern * 0.08,
                            }}
                            resizeMode="contain"
                        />
                    </BnoxTrep>
                ))}
            </JkavRuun>
        </JkavRuun>
    );
};

export default SvorbenoWrapprveno;