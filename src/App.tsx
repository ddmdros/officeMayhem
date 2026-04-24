import './App.css'

import { useBrawlers } from './hooks/useBrawlers'
import { useGameEngine } from './hooks/useGameEngine'
import { SceneManager } from './hooks/SceneManager'
import BrawlerModal from './components/BrawlerModal'
import { useState } from 'react'
import { LanguageProvider } from './context/LanguageContext'


function App() {

    const { brawlers } = useBrawlers();
    const game = useGameEngine();
    const [viewingBrawler, setViewingBrawler] = useState<any | null>(null);


    return (
        <LanguageProvider>

            <main className='snap-container'>
                <SceneManager
                    {...game}
                    brawlers={brawlers}
                    setViewingBrawler={setViewingBrawler}
                    nextCard={() =>
                        game.setActiveIndex((prev) => (prev + 1) % game.selectedTeam.length)
                    }
                    prevCard={() =>
                        game.setActiveIndex((prev) => (prev - 1 + game.selectedTeam.length) % game.selectedTeam.length)
                    }
                />

                {viewingBrawler && (
                    <BrawlerModal
                        brawler={viewingBrawler}
                        onClose={() => setViewingBrawler(null)}
                    />
                )}


            </main>
        </LanguageProvider>

    )
}

export default App
