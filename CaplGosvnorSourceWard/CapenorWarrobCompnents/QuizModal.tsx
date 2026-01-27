import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image, Dimensions, Share } from 'react-native';
import booqiz from '../DopDanniFull/booqiz';
import { grosofts } from '../grosofts';
import WadopsuGradieButtn from './WadopsuGradieButtn';
import Reddergrnd from './Reddergrnd';

const closeIcon = require('../CapsleGrosWardobAssts/SvenodroIcssurd/closx.png');

function getRandomQuestions(arr: any[], n: number) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

const COLORS = {
    wrong: '#D70004',
    correct: '#007A1F',
    default: 'rgba(255,255,255,0.1)',
    text: '#fff'
};

export default function QuizModal({ onClose }: { onClose: () => void }) {
    const { width: rovenw, height: grokh } = Dimensions.get('window');
    const questions = useMemo(() => getRandomQuestions(booqiz, 5), []);
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);

    // Розміри через Dimensions
    const contWidth = rovenw * 0.93;
    const btnHeight = grokh * 0.06;
    const padTop = grokh * 0.05;
    const titleFont = rovenw * 0.07;
    const questionFont = rovenw * 0.052;
    const answerFont = rovenw * 0.045;
    const correctFont = rovenw * 0.042;
    const iconSize = rovenw * 0.085;
    const borderRadius = rovenw * 0.035;
    const btnPadH = rovenw * 0.08;
    const btnPadV = grokh * 0.016;
    const marginBottom = grokh * 0.022;
    const marginTop = grokh * 0.012;

    const handleAnswer = (idx: number) => {
        if (showResult) return;
        setAnswers(prev => [...prev, idx]);
        setTimeout(() => {
            if (step === 4) setShowResult(true);
            else setStep(step + 1);
        }, 500);
    };

    if (showResult) {
        let correctCount = answers.filter((a, i) => a === questions[i].answer).length;
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'flex-start',
            }}>
                <View style={{
                    width: rovenw * 0.9,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: marginBottom,
                    alignSelf: 'center',
                    position: 'absolute',
                    bottom: rovenw * 0.25,
                    zIndex: 100
                }}>
                    <TouchableOpacity onPress={() => {
                        Share.share({
                            message: `I scored ${correctCount} out of 5 on the Groswenor Style Quiz! Try it yourself in the Groswenor: Capsule Wardrobe app!`
                        })
                    }} style={{
                        width: rovenw * 0.19, height: rovenw * 0.19,
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: rovenw * 0.014,
                        overflow: 'hidden',
                    }}>
                        <Reddergrnd />
                        <Image source={require('../CapsleGrosWardobAssts/SvenodroIcssurd/rdshr.png')} style={{ width: iconSize, height: iconSize, tintColor: '#fff' }} />
                    </TouchableOpacity>

                    <WadopsuGradieButtn
                        onPress={onClose}
                        text='Return to Style Reads'
                        style={{
                            width: rovenw * 0.68,
                            alignSelf: 'center',
                        }}
                    />
                </View>
                {/* <Text style={{ color: COLORS.text, fontSize: questionFont, marginBottom: marginBottom }}>
                    {`You got ${correctCount} out of 5 correct!`}
                </Text> */}
                <ScrollView style={{ width: contWidth, marginTop: marginTop }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: grokh * 0.19 }}>
                    {questions.map((q, i) => (
                        <View key={i} style={{ marginBottom: marginBottom }}>
                            <Text style={{
                                color: COLORS.text,
                                fontSize: answerFont,
                                fontFamily: grosofts.sulerobLight,
                                marginBottom: grokh * 0.008
                            }}>{q.question}</Text>
                            <View style={{
                                width: '100%',
                                padding: rovenw * 0.03,
                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                borderRadius: rovenw * 0.01,
                            }}>
                                <Text style={{ color: '#fff', fontSize: correctFont }}>
                                    {q.options[q.answer]}
                                </Text>
                            </View>
                        </View>
                    ))}
                </ScrollView>
                <TouchableOpacity
                    onPress={onClose}
                    style={{
                        marginTop: marginBottom,
                        backgroundColor: '#FF4D4D',
                        borderRadius: borderRadius,
                        paddingHorizontal: btnPadH,
                        paddingVertical: btnPadV,
                    }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: answerFont }}>RETURN TO STYLE READS</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const q = questions[step];
    const userAnswer = answers[step];

    return (
        <View style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'flex-start',
            width: '100%',
        }}>
            <View style={{
                width: rovenw * 0.57,
                paddingRight: rovenw * 0.025,
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                alignSelf: 'flex-end',
                marginBottom: marginBottom,
                marginTop: -grokh * 0.08,
            }}>
                <Text style={{ color: COLORS.text, fontSize: titleFont, fontFamily: grosofts.sulerobRegular }}>{step + 1}/5</Text>
                <TouchableOpacity onPress={onClose} style={{
                    width: iconSize * 1.7, height: iconSize * 1.7,
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <Image source={closeIcon} style={{ width: iconSize, height: iconSize, tintColor: '#fff' }} />
                </TouchableOpacity>
            </View>
            <Text style={{
                color: COLORS.text,
                fontSize: questionFont,
                marginBottom: marginBottom,
                textAlign: 'center',
                width: rovenw * 0.9,
                marginTop: marginTop,
                fontFamily: grosofts.sulerobLight
            }}>
                {q.question}
            </Text>
            <View style={{
                alignSelf: 'center',
                position: 'absolute',
                top: grokh * 0.3,
            }}>
                {q.options.map((opt: string, idx: number) => {
                    let bg = COLORS.default;
                    if (answers.length > step) {
                        if (idx === q.answer) bg = COLORS.correct;
                        else if (idx === answers[step]) bg = COLORS.wrong;
                    }
                    return (
                        <TouchableOpacity
                            key={idx}
                            disabled={answers.length > step}
                            onPress={() => handleAnswer(idx)}
                            style={{
                                width: contWidth,
                                height: grokh * 0.08,
                                minHeight: btnHeight,
                                backgroundColor: bg,
                                borderRadius: rovenw * 0.01,
                                marginBottom: marginBottom * 0.7,
                                justifyContent: 'center',
                                paddingHorizontal: rovenw * 0.04,
                            }}>
                            <Text style={{
                                color: '#fff',
                                fontSize: answerFont,
                                fontWeight: 'normal',
                            }}>
                                {opt}
                            </Text>
                        </TouchableOpacity>
                    );
                })}
            </View>
        </View>
    );
}
