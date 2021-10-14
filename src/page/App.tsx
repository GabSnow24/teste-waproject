import React, { useState, useEffect } from 'react';
import CardEscuro from '../components/card-escuro';
import Modal from '../components/modal';
import { Autocomplete, Button, MenuItem, Select, TextField } from '@material-ui/core';
import { dummy } from '../dummy/dummy'

function App() {
  const [qtd, setQtd] = useState(dummy[0])
  const [cancel, setCancel] = useState(false)
  const [confirm, setConfirm] = useState(false)




  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-800">
      <div className="col-span-12 mx-auto md:w-1/3">
        <CardEscuro tamanho="w-60 shadow-2xl h-60 md:w-auto md:h-auto p-10 md:mx-auto mx-auto  bg-gray-600 items-center grid text-center">
        <h1 className="text-white text-xl mb-2">{qtd == 0 ? "Quantas perguntas deseja escolher?" : "Você escolheu " + qtd + " perguntas!"}</h1>
          {qtd == 0 ? <div className="space-y-5 mx-auto ">
          <Autocomplete
          className="bg-white mx-auto rounded-lg text-black"
            disablePortal
            id="combo-box-demo"
            value={qtd}
            options={dummy}
            getOptionLabel={(option) => option.toString()}
            onChange={async (event:any, newQtd:any) => {
              await setQtd(newQtd);
              
            }}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
          </div>
            :
          <div className="flex mx-auto gap-x-4  mt-10">
            <Button variant="contained" onClick={()=>setConfirm(!confirm)} color="success"> Start</Button>
            <Button variant="contained" onClick={()=>setQtd(0)} color="info"> Cancel</Button>
          </div>
}
        </CardEscuro>
      </div>
    </div>
  );
}

export default App;
