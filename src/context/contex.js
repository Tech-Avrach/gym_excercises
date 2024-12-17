import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
    const [videos, setVideos] = useState([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState([]);


    return (
        <MyContext.Provider value={{ videos, setVideos,targetMuscleExercises, setTargetMuscleExercises}}>
          {children}
        </MyContext.Provider>
      );

    };

export const useMyContext = () => {
        return useContext(MyContext);
};    