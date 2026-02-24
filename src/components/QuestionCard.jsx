import React, { useMemo } from 'react';
import { ChevronLeft } from 'lucide-react';

// Fisher-Yates shuffle
function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

export function QuestionCard({
    question,
    originalAnswers,
    currentStep,
    totalSteps,
    onAnswer,
    onBack,
    isFirst
}) {
    // Memoize shuffled answers so they don't change on re-renders while viewing the same card
    const shuffledAnswers = useMemo(() => shuffleArray(originalAnswers), [originalAnswers]);

    return (
        <div className="card-container">
            {/* Progress Text */}
            <div className="progress-text">
                Question {currentStep} of {totalSteps}
            </div>

            {/* Back Button */}
            {!isFirst && (
                <button className="back-button" onClick={onBack} aria-label="Go back">
                    <ChevronLeft size={24} strokeWidth={1.5} />
                </button>
            )}

            {/* Glass Card */}
            <div className="glass-panel">
                <h2 className="title">{question}</h2>
                <div className="answers-container">
                    {shuffledAnswers.map((answer, index) => (
                        <button
                            key={index}
                            className="glass-button"
                            onClick={() => onAnswer(answer.state)}
                        >
                            {answer.text}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
