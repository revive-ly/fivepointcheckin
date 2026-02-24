import React from 'react';
import { RotateCcw, Sparkles } from 'lucide-react';
import { stateDescriptions } from '../data';

export function ResultsScreen({
    dominantState,
    onRestart,
    onGoToResource,
    onSettle
}) {
    const result = stateDescriptions[dominantState];

    return (
        <div className="card-container">
            <div className="glass-panel text-center">
                <h2 className="title">{result?.title || "Your State"}</h2>

                <p style={{ marginBottom: '2rem', lineHeight: '1.6', fontSize: '1rem', fontWeight: 300, whiteSpace: 'pre-line' }}>
                    {result?.text}
                </p>

                {/* Primary restart */}
                <button
                    className="glass-button glass-button-primary"
                    onClick={onRestart}
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                    <RotateCcw size={18} strokeWidth={1.5} />
                    <span>Restart Check-In</span>
                </button>

                {/* Action buttons row */}
                {/* Side-by-side actions */}
                <div className="results-actions">
                    {result?.actions?.map((action, index) => (
                        <a
                            key={index}
                            href={action.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="glass-action"
                            style={{ textDecoration: 'none' }}
                        >
                            <span>{action.label}</span>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
}