import { Box, Pagination, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { excerciseOption, fetchData } from '../utils/fetchData'
import ExcerciseCard from './ExcerciseCard'

export const Excercises = ({ excercises, setExcercises, bodyPart }) => {

  // if(!excercises){

  //   return console.log('ex',excercises)
  // }

    const [currentPage, setCurrentPage] = useState(1)
    const excercisesPerPage = 12;
    
    const indexOfLastExcercise = currentPage * excercisesPerPage;

    const indexOfFirstExcercise = indexOfLastExcercise - excercisesPerPage;

    const currentExcercises = excercises.slice(indexOfFirstExcercise , indexOfLastExcercise)

    const paginate = (e, value) => {
      setCurrentPage(value);

      window.scrollTo({ top: 1800, behavior:'smooth'})
    }

    useEffect(() => {
      const fetchExcercisesData = async () => {
        let excercisesData = [];

        if(bodyPart === 'all'){
          excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=500', excerciseOption);
        } else {
          excercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1500`, excerciseOption);
        }
        setExcercises(excercisesData)
      }
      fetchExcercisesData()
    },[bodyPart])

  return (
    <Box id="excercises"
    sx={{mt: { lg:'110px' }}}
    mt="50px"
    p="20px"
    >
      <Typography variant='h3' mb='46px'>
        Showing Result
      </Typography>
      <Stack 
      direction='row'
      sx={{ gap: { lg:'110px', xs:'50px' }}}
      flexWrap="wrap"
      justifyContent='center'
      >
        {currentExcercises.map((excercise, index) => (
          <ExcerciseCard key={index} excercise={excercise}/>
        ))}
      </Stack>
      <Stack 
      mt='100px'
      alignItems='center'
      >
        {excercises.length > excercisesPerPage && (
          <Pagination 
          color='error'
          shape='rounded'
          defaultPage={1}
          count={Math.ceil(excercises.length / excercisesPerPage)}
          page={currentPage}
          onChange={paginate}
          size='large'
          />
        )}
      </Stack>
    </Box>
  )
}
