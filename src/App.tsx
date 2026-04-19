import './App.css'

import { useBrawlers } from './hooks/useBrawlers'
import { useGameEngine } from './hooks/useGameEngine'
import { SceneManager } from './presentation/scenes/SceneManager'
import BrawlerModal from './presentation/components/BrawlerModal'
import { useState } from 'react'

function App() {

    const {brawlers} = useBrawlers();
    const game = useGameEngine();
    const [viewingBrawler, setViewingBrawler] = useState<any | null>(null);


    return (
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
    )
}

export default App
