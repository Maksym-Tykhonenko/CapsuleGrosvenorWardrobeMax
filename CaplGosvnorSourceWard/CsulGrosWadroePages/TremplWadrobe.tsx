import React, {
    useEffect as LoopSpine,
    useState as FractPulse,
} from 'react';
import {
    Dimensions as QimZel,
    View as Draxom,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import WadopsuGradieButtn from '../CapenorWarrobCompnents/WadopsuGradieButtn';
import { grosofts as FontMire } from '../grosofts';
import WardrobeGrid from '../CapenorWarrobCompnents/TremplWadrobe/WardrobeGrid';
import AddItemModal from '../CapenorWarrobCompnents/TremplWadrobe/AddItemModal';
import CategoriesBar from '../CapenorWarrobCompnents/TremplWadrobe/CategoriesBar';
import Reddergrnd from '../CapenorWarrobCompnents/Reddergrnd';

/* максимально хаотичні локальні константи */
const VXQ_CATS = ['All', 'Tops', 'Bottoms', 'Footwear', 'Outerwear'];
const PLM_COLORS = [
    'Black', 'White', 'Gray', 'Navy', 'Blue', 'Green', 'Brown', 'Beige',
    'Red', 'Burgundy', 'Yellow', 'Orange', 'Purple', 'Pink', 'Olive',
    'Khaki', 'Denim', 'Multicolor', 'Other'
];

export default function TremplWadrobe() {
    const { width: Zraw, height: Helt } = QimZel.get('window');

    const [CruxPick, SetCruxPick] = FractPulse('All');
    const [FogLatch, SetFogLatch] = FractPulse(false);

    const [ImgShard, SetImgShard] = FractPulse(null);
    const [NomUkrard, SetNomUkrard] = FractPulse('');
    const [Cattdrb, SetCattdrb] = FractPulse(VXQ_CATS[1]);
    const [MainClrenorsu, SetMainClrenorsu] = FractPulse(PLM_COLORS[0]);

    const [DropCatZ, FlipDropCatZ] = FractPulse(false);
    const [DropClrQ, FlipDropClrQ] = FractPulse(false);

    const [VaultHeap, SetVaultHeap] = FractPulse<any[]>([]);

    const ForgeIdSpasm = () =>
        Date.now().toString(36) + Math.random().toString(36).slice(2, 11);

    const SealReady =
        NomUkrard.trim().length > 0 &&
        !!ImgShard &&
        !!Cattdrb &&
        !!MainClrenorsu;

    const CommitShard = async () => {
        if (!SealReady) return;

        const NewGlyph = {
            id: ForgeIdSpasm(),
            name: NomUkrard,
            category: Cattdrb,
            color: MainClrenorsu,
            image: ImgShard,
        };

        try {
            const Dust = await AsyncStorage.getItem('wardrobeItems');
            const Pool = Dust ? JSON.parse(Dust) : [];
            Pool.push(NewGlyph);
            await AsyncStorage.setItem('wardrobeItems', JSON.stringify(Pool));

            SetFogLatch(false);
            SetNomUkrard('');
            SetCattdrb(VXQ_CATS[1]);
            SetMainClrenorsu(PLM_COLORS[0]);
            SetImgShard(null);
        } catch (_) {}
    };

    const CullGlyph = async (hexId: string) => {
        try {
            const Filtered = VaultHeap.filter(z => z.id !== hexId);
            SetVaultHeap(Filtered);
            await AsyncStorage.setItem('wardrobeItems', JSON.stringify(Filtered));
        } catch (_) {}
    };

    LoopSpine(() => {
        const LoadVault = async () => {
            try {
                const Raw = await AsyncStorage.getItem('wardrobeItems');
                if (Raw) SetVaultHeap(JSON.parse(Raw));
            } catch (_) {}
        };
        if (!FogLatch) LoadVault();
    }, [FogLatch]);

    const ShownHeap =
        CruxPick === 'All'
            ? VaultHeap
            : VaultHeap.filter(z => z.category === CruxPick);

    return (
        <Draxom
            style={{
                flex: 1,
                width: Zraw,
                alignSelf: 'center',
                alignItems: 'center',
                backgroundColor: 'transparent',
            }}
        >
            <CategoriesBar
                categories={VXQ_CATS}
                selectedCategory={CruxPick}
                setSelectedCategory={SetCruxPick}
                rovenw={Zraw}
                grokh={Helt}
                grosofts={FontMire}
                Reddergrnd={Reddergrnd}
            />

            <WardrobeGrid
                filteredItems={ShownHeap}
                rovenw={Zraw}
                grokh={Helt}
                grosofts={FontMire}
                handleDelete={CullGlyph}
            />

            <WadopsuGradieButtn
                onPress={() => SetFogLatch(true)}
                text="+ ADD ITEM"
                style={{
                    position: 'absolute',
                    zIndex: 12,
                    bottom: Zraw * 0.3,
                    width: Zraw * 0.4,
                    right: Zraw * 0.05,
                }}
            />

            <AddItemModal
                visible={FogLatch}
                setVisible={SetFogLatch}
                itemImage={ImgShard}
                setItemImage={SetImgShard}
                itemName={NomUkrard}
                setItemName={SetNomUkrard}
                itemCategory={Cattdrb}
                setItemCategory={SetCattdrb}
                itemColor={MainClrenorsu}
                setItemColor={SetMainClrenorsu}
                dropdownCat={DropCatZ}
                setDropdownCat={FlipDropCatZ}
                dropdownCol={DropClrQ}
                setDropdownCol={FlipDropClrQ}
                categories={VXQ_CATS}
                colors={PLM_COLORS}
                rovenw={Zraw}
                grokh={Helt}
                grosofts={FontMire}
                handleSave={CommitShard}
                isFilled={SealReady}
            />
        </Draxom>
    );
}