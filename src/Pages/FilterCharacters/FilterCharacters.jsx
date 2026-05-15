import { useEffect, useState } from 'react'

import {
  Box,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Button,
  TextField,
  CircularProgress
} from '@mui/material'

import CardCharacter from '../../Components/CardCharacter/CardCharacter'

const FilterCharacters = () => {

  const [characters, setCharacters] = useState([])

  const [species, setSpecies] = useState('')

  const [search, setSearch] = useState('')

  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1)

  useEffect(() => {

    setLoading(true)

    let url =
      `https://rickandmortyapi.com/api/character?page=${page}`

    // FILTRO POR ESPECIE

    if (species) {

      url += `&species=${species}`
    }

    // BUSQUEDA POR NOMBRE

    if (search) {

      url += `&name=${search}`
    }

    fetch(url)

      .then(res => res.json())

      .then(data => {

        setCharacters(data.results || [])

        setLoading(false)
      })

      .catch(() => {

        setCharacters([])

        setLoading(false)
      })

  }, [page, species, search])

  return (

    <Box
      sx={{
        padding: 4
      }}
    >

      {/* TITULO */}

      <Typography

        variant="h3"

        sx={{

          textAlign: 'center',

          marginBottom: 3,

          padding: 3,

          borderRadius: 6,

          fontWeight: 'bold',

          fontSize: {
            xs: '2rem',
            md: '3.5rem'
          },

          color: '#1b4332',

          background: `
            linear-gradient(
              135deg,
              #d9f99d,
              #a7f3d0,
              #bae6fd
            )
          `,

          boxShadow: '0px 0px 20px rgba(57,255,20,0.25)',

          border: '2px solid #b7efc5'
        }}
      >

        Busca tu personaje favorito :3

      </Typography>

      {/* BUSCADOR */}

      <TextField

        fullWidth

        label="Buscar por nombre"

        variant="outlined"

        value={search}

        onChange={(e) => {

          setSearch(e.target.value)

          setPage(1)
        }}

        sx={{

          marginBottom: 3,

          '& .MuiOutlinedInput-root': {

            background: `
              linear-gradient(
                135deg,
                #c6ff00,
                #d9f99d
              )
            `,

            borderRadius: 5,

            fontWeight: 'bold',

            '& fieldset': {
              border: '3px solid #39ff14'
            }
          }
        }}
      />

      {/* FILTRO */}

      <FormControl
        fullWidth

        sx={{

          marginBottom: 4,

          '& .MuiOutlinedInput-root': {

            background: `
              linear-gradient(
                135deg,
                #39ff14,
                #c6ff00,
                #e5ff00
              )
            `,

            borderRadius: 5,

            fontWeight: 'bold',

            color: '#000',

            boxShadow: '0px 0px 20px #39ff14',

            transition: '0.3s',

            '& fieldset': {
              border: '3px solid #39ff14'
            },

            '&:hover': {

              transform: 'scale(1.02)',

              boxShadow: '0px 0px 30px #c6ff00'
            },

            '&.Mui-focused fieldset': {
              border: '3px solid #eeff00'
            }
          },

          '& .MuiInputLabel-root': {

            color: '#000',

            fontWeight: 'bold',

            fontSize: '1.1rem'
          },

          '& .MuiSvgIcon-root': {
            color: '#000'
          }
        }}
      >

        <InputLabel>
          Select Species
        </InputLabel>

        <Select
          value={species}
          label="Select Species"

          onChange={(e) => {

            setSpecies(e.target.value)

            setPage(1)
          }}
        >

          <MenuItem value=''>
            All
          </MenuItem>

          <MenuItem value='Human'>
            Human
          </MenuItem>

          <MenuItem value='Animal'>
            Animal
          </MenuItem>

          <MenuItem value='Alien'>
            Alien
          </MenuItem>

          <MenuItem value='Robot'>
            Robot
          </MenuItem>

        </Select>

      </FormControl>

      {/* CARGA */}

      {loading ? (

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: 5
          }}
        >

          <CircularProgress
            sx={{
              color: '#39ff14'
            }}
          />

        </Box>

      ) : (

        <>

          {/* SIN RESULTADOS */}

          {characters.length === 0 && (

            <Typography
              sx={{
                textAlign: 'center',
                fontWeight: 'bold',
                marginTop: 5,
                fontSize: '1.5rem',
                color: '#1b4332'
              }}
            >
              No se encontraron personajes
            </Typography>

          )}

          {/* CARDS */}

          <Grid
            container
            spacing={3}
            sx={{
              marginTop: 3,
              justifyContent: 'center'
            }}
          >

            {characters.map(character => (

              <Grid key={character.id}>

                <CardCharacter
                  id={character.id}
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  status={character.status}
                  gender={character.gender}
                />

              </Grid>

            ))}

          </Grid>

          {/* PAGINACION */}

          {characters.length > 0 && (

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
                  fontWeight: 'bold',

                  '&:hover': {
                    backgroundColor: '#c6ff00'
                  }
                }}
              >
                Previous
              </Button>

              <Typography
                sx={{
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  color: '#1b4332'
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
                  fontWeight: 'bold',

                  '&:hover': {
                    backgroundColor: '#39ff14'
                  }
                }}
              >
                Next
              </Button>

            </Box>

          )}

        </>

      )}

    </Box>
  )
}

export default FilterCharacters