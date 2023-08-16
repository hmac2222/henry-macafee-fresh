import { FC } from 'react'

interface ArrowKeysProps {
    handleKeyDown: (key: KeyboardEvent) => void
}

const ArrowKeys: FC<ArrowKeysProps> = ({handleKeyDown}) => {

    return <div className="arrow-keys-overlay">
    <div className="arrows">
        <div onTouchStart={() => handleKeyDown({ key: 'ArrowUp' } as KeyboardEvent)}>↑</div>
        <div onTouchStart={() => handleKeyDown({ key: 'ArrowLeft' } as KeyboardEvent)}>←</div>
        <div onTouchStart={() => handleKeyDown({ key: 'ArrowDown' } as KeyboardEvent)}>↓</div>
        <div onTouchStart={() => handleKeyDown({ key: 'ArrowRight' } as KeyboardEvent)}>→</div>
    </div>
    <div onTouchStart={() => handleKeyDown({ key: 'Enter' } as KeyboardEvent)}>Enter</div>
    </div>
}

export default ArrowKeys