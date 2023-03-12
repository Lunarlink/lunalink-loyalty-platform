import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PointsProgram from './PointsProgram';
import './css/programs.css'

const Programs = () => {
    const [showForm, setShowForm] = useState(false);


    return (
        <>
    <div className="programs-container">
      <div className="programs-choosearewardprogram">
        <img
          src="/playground_assets/frame42731890229993-wk04.svg"
          alt="Frame42731890229993"
          className="programs-frame427318902"
        />
        <div className="programs-frame427318929">
          <div className="programs-frame427318930">
            <div className="programs-titles">
              <span className="programs-text">
                <span>Choose a program type</span>
              </span>
            </div>
            <div className="programs-frame427318928">
              <div className="programs-cards">
                <div className="programs-group48095299">
                  <div className="programs-group48095295">
                    <img
                      src="/playground_assets/vectorstrokei2999-zi4o.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-5o8.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke01"
                    />
                  </div>
                  <div className="programs-group48095294">
                    <img
                      src="/playground_assets/vectorstrokei2999-fr7q.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke02"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-ddri.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke03"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-oofj.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke04"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-6i1.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke05"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-3xbd.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke06"
                    />
                  </div>
                  <div className="programs-group48095296">
                    <img
                      src="/playground_assets/vectorstrokei2999-k15h.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke07"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-kc1.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke08"
                    />
                  </div>
                </div>
                <div className="programs-frame427318927">
                  <span className="programs-text02">
                    <span>Coalition loyalty program</span>
                  </span>
                  <span className="programs-text04">
                    <span>
                      Suitable for businesses who wish to connect with multiple
                      partners worldwide.
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                  </span>
                </div>
              </div>
              <div className="programs-component2">
                <div className="programs-group48095298">
                  <div className="programs-group48095297">
                    <img
                      src="/playground_assets/vectorstrokei2999-f83i.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke09"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-4vy.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke10"
                    />
                  </div>
                  <div className="programs-group48095293">
                    <img
                      src="/playground_assets/vectorstrokei2999-cs2.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke11"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-qn1.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke12"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-pt4w.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke13"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-s1s.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke14"
                    />
                    <img
                      src="/playground_assets/vectorstrokei2999-arx8.svg"
                      alt="VectorStrokeI2999"
                      className="programs-vector-stroke15"
                    />
                  </div>
                </div>
                <div className="programs-frame4273189271">
                  <span className="programs-text06">
                    <span>Single-firm loyalty program</span>
                  </span>
                  <span className="programs-text08">
                    <span>
                      Create loyalty program and reward your customers.
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
                        <div className="programs-frame427318942">
                            <Link to="/">
            <button className="programs-button">
              <span className="programs-text10">
                <span>go back</span>
              </span>
                                </button>
                            </Link>
                            <Link to="/create-program">
            <button className="programs-button1">
              <span className="programs-text12">
                <span>Setup program</span>
              </span>
                                </button>
                                </Link>
          </div>
        </div>
      </div>
    </div>

        </>
    );
}
export default Programs;
