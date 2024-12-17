import React,{useState, useEffect} from 'react'
import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import { excerciseOption, fetchData } from '../utils/fetchData' 
import { HorizontalScrollbar } from './HorizontalScrollbar'
export const SearchExcercises = ({setExcercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState('')
    const [bodyParts, setBodyParts] = useState([])

    useEffect(() => {
        const fetchexcercisesData = async () => {
        const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', excerciseOption);
            
        // console.log(bodyPartsData);
         setBodyParts(['all',...bodyPartsData])
        }
        fetchexcercisesData()
    },[])

    const handelSearch = async() => {
        if(search){
            const excercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=1500', excerciseOption);
        
            const searchedExcercises = excercisesData.filter(
                (excercise) => excercise.name.toLowerCase().includes(search) 
                || excercise.target.toLowerCase().includes(search) 
                || excercise.equipment.toLowerCase().includes(search) 
                || excercise.bodyPart.toLowerCase().includes(search) 
            )
            setExcercises(searchedExcercises);  
            setSearch('')
    
        }
    
    }  

  return (
    <Stack 
    alignItems='center'
    p='20px'
    mt='3px'
    justifyContent='center'
    >
      <Typography
      fontWeight={700}
      sx={{
        fontSize: { lg:'44px', xs:'30px' }
      }}
      mb='50px'
      textAlign='center'
      >
        Awsome Excercises You <br/>
        Should Know
      </Typography>
      <Box
      position='relative'
      mb='72px'
      >
        <TextField
        sx={{
          input: {fontWeight:'700', border:'none', borderRadius:'4px' 
        },
        width: { lg:'1000px', xs:'350px' },
        backgroundColor:'#fff',
        borderRadius:'40px'
        }}
        height='76px'
        value={search}
        onChange={(e) => {setSearch(e.target.value.toLowerCase())}}
        placeholder='Search'
        type='text'
        />
        <Button className='search-btn'
        sx={{
          bgcolor: '#FF2625',
          color:'#fff',
          textTransform: 'none',
          width: {lg: '175px', xs:'80px'},
          fontSize: { lg:'20px', xs:'14px' },
          height:'56px',
          position:'absolute',
          right:'0'
        }}
        onClick={handelSearch}
        >Search</Button>
      </Box>
      <Box sx={{
        position:'relative',
        width:'100%',
        p:'20px',
      }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} isBodyParts/>
      </Box>
      
    </Stack>
  )
}
