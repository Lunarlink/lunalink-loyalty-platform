import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import './css/myprograms.css'


const Programs = () => {
    const [programs, setPrograms] = useState([]);

    async function getPrograms() {
        console.log(process.env.REACT_APP_API_URL)
        const response = await fetch(`${process.env.REACT_APP_API_URL}/program`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const programs = await response.json()
        // console.log(programs)
        setPrograms(programs);
    };

    useEffect(() => {
        getPrograms();
    }, []);

    return (
        <>
            <div className="programs-container">
                <div className="programs-choosearewardprogram">
                    <img
                        src="/playground_assets/vector29991-m229.svg"
                        alt="Vector29991"
                        className="programs-vector"
                    />
                    <img
                        src="/playground_assets/frame42731890229991-2sd9.svg"
                        alt="Frame42731890229991"
                        className="programs-frame427318902"
                    />
                    <div className="programs-frame427318940">
                        <div className="programs-form">
                            <div className="programs-titles">
                                <span className="programs-text">
                                    <span>All programs</span>
                                </span>
                            </div>
                        </div>
                        <div className="programs-frame12146573">
                            <div className="programs-tables">
                                <div className="programs-tables-header-labelcell">
                                    <span className="programs-text02">
                                        <span>Program Name</span>
                                    </span>
                                </div>
                                <div className="programs-tables-header-labelcell1">
                                    <span className="programs-text04">
                                        <span>Type</span>
                                    </span>
                                </div>
                                <div className="programs-tables-header-labelcell2">
                                    <span className="programs-text06">
                                        <span>Description</span>
                                    </span>
                                </div>
                                <div className="programs-tables-header-labelcell3">
                                    <span className="programs-text08">
                                        <span>Created</span>
                                    </span>
                                </div>
                            </div>
                            {programs.map((program) => (
                                <Link to={`/program/${program.id}`}>

                                    <div className="programs-tablerow">
                                        <div className="programs-frame12146039">
                                            <div className="programs-frame12146038">
                                                <img
                                                    src="/playground_assets/ellipse77i2999-612-200h.png"
                                                    alt="Ellipse77I2999"
                                                    className="programs-ellipse77"
                                                />
                                                <span className="programs-text10">
                                                    <span>{program.name}</span>
                                                </span>
                                            </div>
                                            <span className="programs-text12">
                                                <span>{program.type}</span>
                                            </span>
                                            <span className="programs-text14">
                                                <span>{program.description}</span>
                                            </span>
                                            <span className="programs-text16">
                                                <span>{program.created}</span>
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Programs;
