import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';

export default function WardrobeGrid({
    filteredItems,
    rovenw,
    grokh,
    grosofts,
    handleDelete,
}) {
    return (
        <View style={{
            alignItems: 'center',
            flex: 1,
            width: '100%',
        }}>
            {filteredItems.length === 0 ? (
                <Text style={{
                    marginTop: grokh * 0.25,
                    color: 'white',
                    fontSize: rovenw * 0.05,
                    fontFamily: grosofts.sulerobRegular,
                }}>
                    Your wardrobe is empty
                </Text>
            ) : (
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1, paddingBottom: grokh * 0.3 }}
                    style={{ width: '100%' }}
                >
                    {(() => {
                        const itemsPerRow = 2;
                        const rows = [];
                        for (let i = 0; i < filteredItems.length; i += itemsPerRow) {
                            const rowItems = filteredItems.slice(i, i + itemsPerRow);
                            const isLastRow = i + itemsPerRow >= filteredItems.length;
                            const isOdd = rowItems.length === 1;
                            rows.push(
                                <View
                                    key={i}
                                    style={{
                                        width: '95%',
                                        flexDirection: 'row',
                                        justifyContent: isLastRow && isOdd ? 'flex-start' : 'space-between',
                                        alignSelf: 'center',
                                        marginTop: grokh * 0.01,
                                        flexWrap: 'nowrap',
                                    }}
                                >
                                    {rowItems.map(item => (
                                        <TouchableOpacity
                                            style={{
                                                borderRadius: rovenw * 0.025,
                                                margin: rovenw * 0.015,
                                                marginBottom: grokh * 0.02,
                                                backgroundColor: '#18182A',
                                                alignItems: 'center',
                                                width: rovenw * 0.43,
                                            }}
                                            activeOpacity={0.91}
                                            key={item.id}
                                            onLongPress={() => {
                                                Alert.alert(
                                                    'Delete This Item?',
                                                    'Are you sure you want to remove this item from your wardrobe? This action cannot be undone.',
                                                    [
                                                        { text: 'Cancel', style: 'cancel' },
                                                        {
                                                            text: 'Delete',
                                                            style: 'destructive',
                                                            onPress: () => handleDelete(item.id),
                                                        },
                                                    ],
                                                    { cancelable: true }
                                                );
                                            }}
                                        >
                                            <Image
                                                source={{ uri: item.image }}
                                                style={{
                                                    resizeMode: 'cover',
                                                    height: rovenw * 0.43,
                                                    backgroundColor: 'white',
                                                    borderTopRightRadius: rovenw * 0.025,
                                                    width: rovenw * 0.43,
                                                    borderTopLeftRadius: rovenw * 0.025,
                                                }}
                                            />
                                            <View style={{
                                                paddingVertical: grokh * 0.018,
                                                backgroundColor: '#232345',
                                                borderBottomLeftRadius: rovenw * 0.025,
                                                borderBottomRightRadius: rovenw * 0.025,
                                                width: '100%',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{
                                                    textAlign: 'center',
                                                    fontFamily: grosofts.sulerobRegular,
                                                    fontSize: rovenw * 0.045,
                                                    color: 'white',
                                                }}>
                                                    {item.name}
                                                </Text>
                                            </View>
                                        </TouchableOpacity>
                                    ))}
                                </View>
                            );
                        }
                        return rows;
                    })()}
                </ScrollView>
            )}
        </View>
    );
}
