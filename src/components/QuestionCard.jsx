import React, { useMemo } from 'react';
import { ChevronLeft } from 'lucide-react';



export function QuestionCard({
    question,
    originalAnswers,
    currentStep,
    totalSteps,
    onAnswer,
    onBack,
    isFirst
}) {


    return (
        <div className="card-container">

            <div className="progress-text">
                Question {currentStep} of {totalSteps}
            </div>


            {!isFirst && (
                <button className="back-button" onClick={onBack} aria-label="Go back">
                    <ChevronLeft size={24} strokeWidth={1.5} />
                </button>
            )}


            <div className="glass-panel">
                <h2 className="title">{question}</h2>
                <div className="answers-container">
                    {originalAnswers.map((answer, index) => (
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
