import React from 'react';
import {
    Modal,
    View,
    Text,
    Pressable,
    Image,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
    TextInput,
} from 'react-native';
import WadopsuGradieButtn from '../WadopsuGradieButtn';
import { launchImageLibrary } from 'react-native-image-picker';

export default function AddItemModal({
    visible,
    setVisible,
    itemImage,
    setItemImage,
    itemName,
    setItemName,
    itemCategory,
    setItemCategory,
    itemColor,
    setItemColor,
    dropdownCat,
    setDropdownCat,
    dropdownCol,
    setDropdownCol,
    categories,
    colors,
    rovenw,
    grokh,
    grosofts,
    handleSave,
    isFilled,
}) {
    const modalFields = [
        {
            key: 'itemName',
            label: 'Item Name',
            type: 'text',
        },
        {
            key: 'itemCategory',
            label: 'Category',
            type: 'dropdown',
            dropdown: 'cat',
        },
        {
            key: 'itemColor',
            label: 'Color',
            type: 'dropdown',
            dropdown: 'col',
        },
    ];

    const handleImagePick = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.assets && response.assets.length > 0) {
                setItemImage(response.assets[0].uri);
            }
        });
    };

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent
            onRequestClose={() => setVisible(false)}
        >
            <TouchableWithoutFeedback onPress={() => {
                setDropdownCat(false);
                Keyboard.dismiss();
            }}>
                <View style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <View style={{
                        width: rovenw,
                        height: grokh,
                        borderRadius: rovenw * 0.04,
                        backgroundColor: '#060827',
                        padding: rovenw * 0.04,
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                        <SafeAreaView />
                        <View style={{
                            width: '95%',
                            alignSelf: 'center',
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginBottom: grokh * 0.02,
                            alignItems: 'center',
                        }}>
                            <Text style={{
                                color: 'white',
                                fontFamily: grosofts.sulerobLight,
                                fontSize: rovenw * 0.07,
                            }}>
                                New item
                            </Text>
                            <Pressable
                                onPress={() => setVisible(false)}
                                style={{
                                    zIndex: 10,
                                    backgroundColor: '#232345',
                                    borderRadius: rovenw * 0.016,
                                    width: rovenw * 0.14,
                                    height: rovenw * 0.14,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}
                            >
                                <Image 
                                    source={require('../../CapsleGrosWardobAssts/SvenodroIcssurd/closx.png')}
                                    style={{
                                        width: rovenw * 0.059,
                                        height: rovenw * 0.059,
                                    }}
                                    resizeMode='contain'
                                />
                            </Pressable>
                        </View>
                        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
                            paddingBottom: grokh * 0.1,
                        }}>
                            <TouchableOpacity
                                onPress={handleImagePick}
                                style={{
                                    width: rovenw * 0.9,
                                    height: rovenw * 0.9,
                                    backgroundColor: 'white',
                                    borderRadius: rovenw * 0.03,
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    marginBottom: grokh * 0.02,
                                    overflow: 'hidden',
                                }}
                            >
                                {itemImage ? (
                                    <Image
                                        source={{ uri: itemImage }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            resizeMode: 'cover',
                                            alignSelf: 'center',
                                        }}
                                    />
                                ) : (
                                    <Text style={{
                                        color: '#B0B0B0',
                                        fontFamily: grosofts.sulerobRegular,
                                        fontSize: rovenw * 0.045,
                                    }}>
                                        Select photo
                                    </Text>
                                )}
                            </TouchableOpacity>
                            {/* Fields */}
                            {modalFields.map(field => {
                                if (field.type === 'text') {
                                    return (
                                        <View
                                            key={field.key}
                                            style={{
                                                width: '100%',
                                                marginBottom: grokh * 0.018,
                                                position: 'relative',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text style={{
                                                position: 'absolute',
                                                left: rovenw * 0.04,
                                                top: grokh * 0.012,
                                                color: '#B0B0B0',
                                                fontFamily: grosofts.sulerobRegular,
                                                fontSize: rovenw * 0.04,
                                                zIndex: 2,
                                            }}>
                                                {field.label}
                                            </Text>
                                            <TextInput
                                                value={itemName}
                                                onChangeText={setItemName}
                                                placeholder=""
                                                placeholderTextColor="#B0B0B0"
                                                style={{
                                                    backgroundColor: '#232345',
                                                    borderRadius: rovenw * 0.03,
                                                    paddingTop: grokh * 0.045,
                                                    paddingBottom: grokh * 0.018,
                                                    paddingHorizontal: rovenw * 0.04,
                                                    width: '100%',
                                                    color: 'white',
                                                    fontFamily: grosofts.sulerobRegular,
                                                    fontSize: rovenw * 0.055,
                                                }}
                                            />
                                        </View>
                                    );
                                }
                                if (field.type === 'dropdown' && field.dropdown === 'cat') {
                                    return (
                                        <View
                                            key={field.key}
                                            style={{
                                                width: '100%',
                                                marginBottom: grokh * 0.018,
                                                position: 'relative',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text style={{
                                                position: 'absolute',
                                                left: rovenw * 0.04,
                                                top: grokh * 0.012,
                                                color: '#B0B0B0',
                                                fontFamily: grosofts.sulerobRegular,
                                                fontSize: rovenw * 0.04,
                                                zIndex: 2,
                                            }}>
                                                {field.label}
                                            </Text>
                                            <TouchableOpacity
                                                onPress={() => setDropdownCat(!dropdownCat)}
                                                style={{
                                                    backgroundColor: '#232345',
                                                    borderRadius: rovenw * 0.03,
                                                    paddingTop: grokh * 0.045,
                                                    paddingBottom: grokh * 0.018,
                                                    paddingHorizontal: rovenw * 0.04,
                                                    width: '100%',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Text style={{
                                                    color: 'white',
                                                    fontFamily: grosofts.sulerobRegular,
                                                    fontSize: rovenw * 0.055,
                                                }}>
                                                    {itemCategory}
                                                </Text>
                                                <Text style={{ color: 'white', fontSize: rovenw * 0.045 }}>▼</Text>
                                            </TouchableOpacity>
                                            {dropdownCat && (
                                                <ScrollView style={{
                                                    maxHeight: grokh * 0.18,
                                                    backgroundColor: '#232345',
                                                    borderRadius: rovenw * 0.03,
                                                    marginTop: grokh * 0.005,
                                                }}>
                                                    {categories.slice(1).map(cat => (
                                                        <TouchableOpacity
                                                            key={cat}
                                                            onPress={() => {
                                                                setItemCategory(cat);
                                                                setDropdownCat(false);
                                                            }}
                                                            style={{
                                                                padding: rovenw * 0.03,
                                                            }}
                                                        >
                                                            <Text style={{
                                                                color: 'white',
                                                                fontFamily: grosofts.sulerobRegular,
                                                                fontSize: rovenw * 0.045,
                                                            }}>{cat}</Text>
                                                        </TouchableOpacity>
                                                    ))}
                                                </ScrollView>
                                            )}
                                        </View>
                                    );
                                }
                                if (field.type === 'dropdown' && field.dropdown === 'col') {
                                    return (
                                        <View
                                            key={field.key}
                                            style={{
                                                width: '100%',
                                                marginBottom: grokh * 0.018,
                                                position: 'relative',
                                                justifyContent: 'center',
                                            }}
                                        >
                                            <Text style={{
                                                position: 'absolute',
                                                left: rovenw * 0.04,
                                                top: grokh * 0.012,
                                                color: '#B0B0B0',
                                                fontFamily: grosofts.sulerobRegular,
                                                fontSize: rovenw * 0.04,
                                                zIndex: 2,
                                            }}>
                                                {field.label}
                                            </Text>
                                            <TouchableOpacity
                                                onPress={() => setDropdownCol(!dropdownCol)}
                                                style={{
                                                    backgroundColor: '#232345',
                                                    borderRadius: rovenw * 0.03,
                                                    paddingTop: grokh * 0.045,
                                                    paddingBottom: grokh * 0.018,
                                                    paddingHorizontal: rovenw * 0.04,
                                                    width: '100%',
                                                    flexDirection: 'row',
                                                    justifyContent: 'space-between',
                                                    alignItems: 'center',
                                                }}
                                            >
                                                <Text style={{
                                                    color: 'white',
                                                    fontFamily: grosofts.sulerobRegular,
                                                    fontSize: rovenw * 0.055,
                                                }}>
                                                    {itemColor}
                                                </Text>
                                                <Text style={{ color: 'white', fontSize: rovenw * 0.045 }}>▼</Text>
                                            </TouchableOpacity>
                                            {dropdownCol && (
                                                <ScrollView style={{
                                                    maxHeight: grokh * 0.18,
                                                    backgroundColor: '#232345',
                                                    borderRadius: rovenw * 0.03,
                                                    marginTop: grokh * 0.005,
                                                }}>
                                                    {colors.map(col => (
                                                        <TouchableOpacity
                                                            key={col}
                                                            onPress={() => {
                                                                setItemColor(col);
                                                                setDropdownCol(false);
                                                            }}
                                                            style={{
                                                                padding: rovenw * 0.03,
                                                            }}
                                                        >
                                                            <Text style={{
                                                                color: 'white',
                                                                fontFamily: grosofts.sulerobRegular,
                                                                fontSize: rovenw * 0.045,
                                                            }}>{col}</Text>
                                                        </TouchableOpacity>
                                                    ))}
                                                </ScrollView>
                                            )}
                                        </View>
                                    );
                                }
                                return null;
                            })}
                            <WadopsuGradieButtn
                                onPress={handleSave}
                                text="SAVE"
                                style={{
                                    width: '100%',
                                    marginTop: grokh * 0.02,
                                    borderRadius: rovenw * 0.03,
                                    opacity: isFilled ? 1 : 0.5,
                                }}
                                disabled={!isFilled}
                            />
                        </ScrollView>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    );
}
