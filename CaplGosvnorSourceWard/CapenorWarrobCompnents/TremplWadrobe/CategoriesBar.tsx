import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

export default function CategoriesBar({
    categories,
    selectedCategory,
    setSelectedCategory,
    rovenw,
    grokh,
    grosofts,
    Reddergrnd,
}) {
    return (
        <View style={{
            marginVertical: grokh * 0.01,
            width: '100%',
            }}
        >
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                    paddingHorizontal: rovenw * 0.025,
                    alignItems: 'center',
                    flexDirection: 'row',
                }}
            >
                {categories.map(cat => (
                    <TouchableOpacity
                        key={cat}
                        onPress={() => setSelectedCategory(cat)}
                        style={{
                            marginRight: cat !== categories[categories.length - 1] ? rovenw * 0.02 : 0,
                            backgroundColor: selectedCategory === cat ? 'transparent' : '#232345',
                            borderRadius: rovenw * 0.01,
                            overflow: 'hidden',
                        }}
                    >
                        {selectedCategory === cat && <Reddergrnd />}
                        <View style={{
                            paddingVertical: grokh * 0.012,
                            paddingHorizontal: rovenw * 0.04,
                        }}>
                            <Text style={{
                                color: 'white',
                                fontFamily: grosofts.sulerobRegular,
                                fontSize: rovenw * 0.045,
                            }}>{cat}</Text>
                        </View>
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
}
