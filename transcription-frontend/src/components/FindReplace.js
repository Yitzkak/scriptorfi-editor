// FindReplace.js
import React, { useState } from 'react';

const FindReplace = ({ transcription, setTranscription }) => {
    const [findText, setFindText] = useState('');
    const [replaceText, setReplaceText] = useState('');
    const [caseSensitive, setCaseSensitive] = useState(false);
    const [fullMatch, setFullMatch] = useState(false);
    const [replaceAll, setReplaceAll] = useState(false);

    const handleFindReplace = () => {
        if (!findText) return; // If there's nothing to find, do nothing.

        let modifiedTranscription = transcription;
        const regexFlags = caseSensitive ? 'g' : 'gi';
        const findRegex = new RegExp(fullMatch ? `\\b${findText}\\b` : findText, regexFlags);

        if (replaceAll) {
            // Replace all instances of the findText
            modifiedTranscription = transcription.replace(findRegex, replaceText);
        } else {
            // Replace the first instance of the findText
            modifiedTranscription = transcription.replace(findRegex, replaceText);
        }

        setTranscription(modifiedTranscription);
    };

    return (
        <div className="find-replace-container">
            <h3>Find & Replace</h3>
            <input
                type="text"
                placeholder="Find"
                value={findText}
                onChange={(e) => setFindText(e.target.value)}
            />
            <input
                type="text"
                placeholder="Replace"
                value={replaceText}
                onChange={(e) => setReplaceText(e.target.value)}
            />
            <div>
                <label>
                    <input
                        type="checkbox"
                        checked={caseSensitive}
                        onChange={() => setCaseSensitive(!caseSensitive)}
                    />
                    Case Sensitive
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={fullMatch}
                        onChange={() => setFullMatch(!fullMatch)}
                    />
                    Full Match
                </label>
                <label>
                    <input
                        type="checkbox"
                        checked={replaceAll}
                        onChange={() => setReplaceAll(!replaceAll)}
                    />
                    Replace All
                </label>
            </div>
            <button onClick={handleFindReplace}>Replace</button>
        </div>
    );
};

export default FindReplace;
