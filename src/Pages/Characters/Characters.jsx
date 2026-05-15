import { useState, useEffect } from 'react'

import CardCharacter from '../../Components/CardCharacter/CardCharacter'

import './Characters.css'

import {
    Box,
    Button,
    Typography,
    CircularProgress
} from '@mui/material'

const Characters = () => {

    const [characters, setCharacters] = useState([])

    const [page, setPage] = useState(1)

    const [loading, setLoading] = useState(true)

    useEffect(() => {

        setLoading(true)

        fetch(
            `https://rickandmortyapi.com/api/character?page=${page}`
        )
            .then(res => res.json())
            .then(data => {

                setCharacters(data.results)

                setLoading(false)
            })

    }, [page])

    return (

        <>

            {loading ? (

                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginTop: 10
                    }}
                >

                    <CircularProgress
                        sx={{
                            color: '#39ff14'
                        }}
                    />

                </Box>

            ) : (

                <div className='containerCharacters'>

                    {characters.map(character => (

                        <CardCharacter
                            key={character.id}

                            id={character.id}

                            name={character.name}

                            species={character.species}

                            status={character.status}

                            image={character.image}

                            gender={character.gender}
                        />

                    ))}

                </div>

            )}

            {/* PAGINACION */}

            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: 3,
                    marginTop: 5,
                    marginBottom: 5
                }}
            >

                <Button

                    variant="contained"

                    disabled={page === 1}

                    onClick={() =>
                        setPage(page - 1)
                    }

                    sx={{
                        backgroundColor: '#39ff14',
                        color: '#000',
                        fontWeight: 'bold'
                    }}
                >
                    Previous
                </Button>

                <Typography
                    sx={{
                        fontWeight: 'bold',
                        fontSize: '1.3rem'
                    }}
                >
                    Page {page}
                </Typography>

                <Button

                    variant="contained"

                    onClick={() =>
                        setPage(page + 1)
                    }

                    sx={{
                        backgroundColor: '#c6ff00',
                        color: '#000',
                        fontWeight: 'bold'
                    }}
                >
                    Next
                </Button>

            </Box>

        </>
    )
}

export default Characters
