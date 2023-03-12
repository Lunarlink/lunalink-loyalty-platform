import {useParams, useNavigate} from "react-router-dom";
import React, { useEffect, useState } from 'react';


const ProgramView = () => {
    const param = useParams();
    const [program, setProgram] = useState({});
  
    async function getProgram() {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/program/${param.id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const program = await response.json()
        // console.log(programs)
        setProgram(program);
    }
    useEffect(() => {
        getProgram();
    }, []);

      
    return (
        <>
            ProgramView
            <div>
                <div key={program.id}>
                    <h1>{program.id}</h1>
                    <h1>{program.name}</h1>
                    <h1>{program.description}</h1>
                </div>
            </div>
        </>
    );
}
export default ProgramView;