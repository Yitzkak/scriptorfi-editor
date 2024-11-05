import React, { useEffect } from 'react';

const KeyboardShortcuts = ({ handlePlayPause, handleAddTimestamp, handleRewind, handleFastForward }) => {
  
  useEffect(() => {
    const handleKeyDown = (event) => {
      const { key, shiftKey, ctrlKey } = event;

      // Play/Pause with Shift + Tab
      if (shiftKey && key === 'Tab') {
        event.preventDefault();
        handlePlayPause();
      }

      // Add Timestamp with Ctrl + Shift
      if (ctrlKey && shiftKey && key === 'Shift') {
        event.preventDefault();
        handleAddTimestamp();
      }

      // Rewind with Shift + Left Arrow
      if (shiftKey && key === 'ArrowLeft') {
        event.preventDefault();
        handleRewind();
      }

      // Fast Forward with Shift + Right Arrow
      if (shiftKey && key === 'ArrowRight') {
        event.preventDefault();
        handleFastForward();
      }
    };

    // Add keydown event listener
    window.addEventListener('keydown', handleKeyDown);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handlePlayPause, handleAddTimestamp, handleRewind, handleFastForward]);

  return null; // No UI needed, just logic
};

export default KeyboardShortcuts;
