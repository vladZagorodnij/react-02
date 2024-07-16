import { useState } from 'react';

export default function Player({initialName, symbol, isActive, changeName}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);
    let editablePlayerName = <span className="player-name">{playerName}</span>,
        buttonLabel = "Edit";

    function handleEditClick() {
        setIsEditing(editing => !editing);

        if (isEditing) {
            changeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        console.log(event)
        setPlayerName(event.target.value)
    }

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} onChange={handleChange} />
        buttonLabel = "Save";
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{buttonLabel}</button>
        </li>
    )
}