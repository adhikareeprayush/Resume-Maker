import { useState, useCallback } from 'react';
import type { HistoryState } from '../types';

export const useHistory = (initialState: HistoryState) => {
  const [history, setHistory] = useState<HistoryState[]>([initialState]);
  const [currentStep, setCurrentStep] = useState(0);

  const addToHistory = useCallback((newState: HistoryState) => {
    setHistory(prev => {
      const newHistory = prev.slice(0, currentStep + 1);
      return [...newHistory, newState];
    });
    setCurrentStep(prev => prev + 1);
  }, [currentStep]);

  const undo = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
      return history[currentStep - 1];
    }
    return null;
  }, [currentStep, history]);

  const redo = useCallback(() => {
    if (currentStep < history.length - 1) {
      setCurrentStep(prev => prev + 1);
      return history[currentStep + 1];
    }
    return null;
  }, [currentStep, history]);

  const canUndo = currentStep > 0;
  const canRedo = currentStep < history.length - 1;

  return {
    history,
    currentStep,
    addToHistory,
    undo,
    redo,
    canUndo,
    canRedo
  };
};