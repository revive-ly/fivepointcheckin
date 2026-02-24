import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { questionData } from './data';
import { QuestionCard } from './components/QuestionCard';
import { ResultsScreen } from './components/ResultsScreen';
import './index.css';

const statesList = [
  'hyperarousal',
  'heightened_engagement',
  'ventral_vagal',
  'low_activation',
  'hypoarousal'
];

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answersHistory, setAnswersHistory] = useState([]);
  const [direction, setDirection] = useState(1);

  const calculateDominantState = () => {
    const scores = {};
    statesList.forEach(state => scores[state] = 0);

    const lastSeenIndex = {};
    answersHistory.forEach((state, index) => {
      scores[state] += 1;
      lastSeenIndex[state] = index;
    });

    let maxScore = -1;
    let dominantState = null;

    statesList.forEach(state => {
      if (scores[state] > maxScore) {
        maxScore = scores[state];
        dominantState = state;
      } else if (scores[state] === maxScore) {
        // Tie breaker
        if (lastSeenIndex[state] > lastSeenIndex[dominantState]) {
          dominantState = state;
        }
      }
    });

    return dominantState;
  };

  const handleStart = () => {
    setDirection(1);
    setCurrentStep(1);
    setAnswersHistory([]);
  };

  const handleAnswer = (stateValue) => {
    setDirection(1);
    const newHistory = [...answersHistory.slice(0, currentStep - 1), stateValue];
    setAnswersHistory(newHistory);
    setCurrentStep(prev => prev + 1);
  };

  const handleBack = () => {
    setDirection(-1);
    setCurrentStep(prev => prev - 1);
  };

  const handleRestart = () => {
    setDirection(-1);
    setAnswersHistory([]);
    setCurrentStep(1);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        duration: 0.3
      }
    })
  };

  return (
    <div className="app-container">
      <AnimatePresence initial={false} custom={direction} mode="wait">

        {currentStep === 0 && (
          <motion.div
            key="landing"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="card-container"
          >
            <div className="glass-panel text-center">
              <h1 className="title" style={{ marginTop: '1rem', marginBottom: '1rem' }}>The 5 Point Check-In</h1>
              <p style={{ marginBottom: '3rem', color: 'var(--text-secondary)' }}>
                A gentle assessment of your nervous system state.
              </p>
              <button className="glass-button glass-button-primary" onClick={handleStart}>
                Begin Check-In
              </button>
            </div>
          </motion.div>
        )}

        {currentStep > 0 && currentStep <= questionData.length && (
          <motion.div
            key={`question-${currentStep}`}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="card-container"
          >
            <QuestionCard
              question={questionData[currentStep - 1].question}
              originalAnswers={questionData[currentStep - 1].answers}
              currentStep={currentStep}
              totalSteps={questionData.length}
              onAnswer={handleAnswer}
              onBack={handleBack}
              isFirst={currentStep === 1}
            />
          </motion.div>
        )}

        {currentStep > questionData.length && (
          <motion.div
            key="results"
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="card-container"
          >
            <ResultsScreen
              dominantState={calculateDominantState()}
              onRestart={handleRestart}
            />
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
