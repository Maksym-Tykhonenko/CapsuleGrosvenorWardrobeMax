import React, { useMemo, useState } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Image } from 'react-native';
import booqiz from '../DopDanniFull/booqiz';

const closeIcon = require('../CapsleGrosWardobAssts/SvenodroIcssurd/closx.png');

function getRandomQuestions(arr: any[], n: number) {
    const shuffled = arr.slice().sort(() => 0.5 - Math.random());
    return shuffled.slice(0, n);
}

const COLORS = {
    wrong: '#D70004',
    correct: '#007A1F',
    default: 'rgba(255,255,255,0.3)',
    text: '#fff'
};

export default function QuizModal({ onClose }: { onClose: () => void }) {
    const questions = useMemo(() => getRandomQuestions(booqiz, 5), []);
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState<number[]>([]);
    const [showResult, setShowResult] = useState(false);

    const handleAnswer = (idx: number) => {
        if (showResult) return;
        setAnswers(prev => [...prev, idx]);
        setTimeout(() => {
            if (step === 4) setShowResult(true);
            else setStep(step + 1);
        }, 500);
    };

    // For responsive sizing (optional, can be improved)
    const width = 340;
    const btnHeight = 48;

    if (showResult) {
        let correctCount = answers.filter((a, i) => a === questions[i].answer).length;
        return (
            <View style={{
                flex: 1,
                backgroundColor: '#0B0B1C',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: 40,
            }}>
                <View style={{ width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                    <Text style={{ color: COLORS.text, fontSize: 28, fontWeight: 'bold' }}>Quiz</Text>
                    <TouchableOpacity onPress={onClose}>
                        <Image source={closeIcon} style={{ width: 32, height: 32, tintColor: '#fff' }} />
                    </TouchableOpacity>
                </View>
                <Text style={{ color: COLORS.text, fontSize: 20, marginBottom: 16 }}>
                    {`You got ${correctCount} out of 5 correct!`}
                </Text>
                <ScrollView style={{ width, marginTop: 10 }}>
                    {questions.map((q, i) => (
                        <View key={i} style={{ marginBottom: 24 }}>
                            <Text style={{ color: COLORS.text, fontSize: 16, fontWeight: 'bold', marginBottom: 6 }}>{q.question}</Text>
                            <Text style={{ color: '#A0FFB2', fontSize: 15 }}>
                                Correct answer: {q.options[q.answer]}
                            </Text>
                        </View>
                    ))}
                </ScrollView>
                <TouchableOpacity
                    onPress={onClose}
                    style={{
                        marginTop: 24,
                        backgroundColor: '#FF4D4D',
                        borderRadius: 12,
                        paddingHorizontal: 32,
                        paddingVertical: 12,
                    }}>
                    <Text style={{ color: '#fff', fontWeight: 'bold', fontSize: 16 }}>RETURN TO STYLE READS</Text>
                </TouchableOpacity>
            </View>
        );
    }

    const q = questions[step];
    const userAnswer = answers[step];

    return (
        <View style={{
            flex: 1,
            backgroundColor: '#0B0B1C',
            alignItems: 'center',
            justifyContent: 'flex-start',
            paddingTop: 40,
        }}>
            <View style={{ width, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <Text style={{ color: COLORS.text, fontSize: 28, fontWeight: 'bold' }}>Quiz {step + 1}/5</Text>
                <TouchableOpacity onPress={onClose}>
                    <Image source={closeIcon} style={{ width: 32, height: 32, tintColor: '#fff' }} />
                </TouchableOpacity>
            </View>
            <Text style={{ color: COLORS.text, fontSize: 20, marginBottom: 24, textAlign: 'center' }}>
                {q.question}
            </Text>
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
                            width: width,
                            minHeight: btnHeight,
                            backgroundColor: bg,
                            borderRadius: 12,
                            marginBottom: 14,
                            justifyContent: 'center',
                            paddingHorizontal: 16,
                        }}>
                        <Text style={{
                            color: '#fff',
                            fontSize: 17,
                            fontWeight: idx === q.answer ? 'bold' : 'normal',
                        }}>
                            {opt}
                        </Text>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
}
