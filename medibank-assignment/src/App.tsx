import React, { useEffect, useState } from 'react';
import './App.css';
import { DisplayType, PetsType, ResponseType } from './types';
import { displayInitialValue } from './constants';
import Pets from './comsponents/pets';
import { Box, CircularProgress } from '@mui/material';
import Divider from '@mui/material/Divider';

function App() {
  const [loader, setLoader] = useState(false);
  const [display, setDisplay] = useState({ ...displayInitialValue })

  const sortData = (res: ResponseType[]) => {
    let x: DisplayType = {
      Male: {
        title: "Male",
        pets: []
      },
      Female: {
        title: "Female",
        pets: []
      }
    }
    res.forEach((d) => {
      if (d.gender === "Male" && d.pets !== null) {
        d.pets.forEach((p: PetsType) => {
          x.Male.pets = [...x.Male.pets, p.name]

        });
      }
      if (d.gender === "Female" && d.pets !== null) {
        d.pets.forEach((p: PetsType) => {
          x.Female.pets = [...x.Female.pets, p.name]
        });
      }
    });
    x.Male.pets = x.Male.pets.sort();
    x.Female.pets = x.Female.pets.sort();
    setDisplay({ ...x });
    setLoader(false)
  }

  //making api call on mounting and setting state.
  useEffect(() => {
    async function getData() {
      setLoader(true)
      let res: any = await fetch("https://gist.githubusercontent.com/medibank-digital/a1fc81a93200a7b9d5f8b7eae0fac6f8/raw/de10a4fcf717e6c431e88c965072c784808fd6b2/people.json");
      res = await res.json();
      sortData([...res])
    }
    getData();
  }, []);

  return (
    <Box sx={{ width: '100%', maxWidth: 360 }} ml={"10px"}>
      {
        loader ? <CircularProgress /> : (
          <>
            <Pets title={display.Female.title} pets={display.Female.pets} />
            <Divider />
            <Pets title={display.Male.title} pets={display.Male.pets} />
          </>
        )
      }
    </Box >
  );
}

export default App;
