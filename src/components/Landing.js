import { Link } from 'react-router-dom';
import './css/landing.css'

const Landing = () => {
    return (
        <>
            <div>
                <div className="soloyal-homepage-soloyal-homepage">
                    <div className="soloyal-homepage-intro">
                        <span className="soloyal-homepage-text">
                            <span>Lunarlink</span>
                        </span>
                        <span className="soloyal-homepage-text02">
                            <span>
                                <span>
                                    Lunarlink enables businesses to create coalition loyalty
                                    programs with partners worldwide.
                                    <span
                                        dangerouslySetInnerHTML={{
                                            __html: ' ',
                                        }}
                                    />
                                </span>
                                <br></br>
                                <span></span>
                                <br></br>
                                <span>
                                    It enables seamless integration with Solana Pay, enabling
                                    secure, instant and seamless payment transactions.
                                </span>
                            </span>
                        </span>
                    </div>
                    <Link to="/create-program">
                        <button className="soloyal-homepage-button">
                            <span className="soloyal-homepage-text09">Try Now</span>
                        </button>
                    </Link>
                    <div className="soloyal-homepage-soloyalty-logo">
                        <div className="soloyal-homepage-vector">
                            <img
                                src="/playground_assets/subtracti258-elxb.svg"
                                alt="SubtractI258"
                                className="soloyal-homepage-subtract"
                            />
                            <img
                                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9b1c32dc-b699-439a-9eed-280c4b9f2f2b/5411d08a-6741-41bf-8a1b-f450163e5fce?org_if_sml=1276"
                                alt="Rectangle39338I258"
                                className="soloyal-homepage-rectangle39338"
                            />
                            <img
                                src="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/9b1c32dc-b699-439a-9eed-280c4b9f2f2b/45f689eb-3243-469c-83ae-64e4460332ac?org_if_sml=1276"
                                alt="Rectangle39339I258"
                                className="soloyal-homepage-rectangle39339"
                            />
                        </div>
                        <span className="soloyal-homepage-text10">
                            <span>Lunarlink</span>
                        </span>
                    </div>
                    <div className="soloyal-homepage-poweredby">
                        <span className="soloyal-homepage-text12">
                            <span>Powered by</span>
                        </span>
                        <div className="soloyal-homepage-solana-pay-mark">
                            <div className="soloyal-homepage-solanapay">
                                <img
                                    src="/playground_assets/vectori2931-hsld.svg"
                                    alt="VectorI2931"
                                    className="soloyal-homepage-vector1"
                                />
                                <img
                                    src="/playground_assets/vectori2931-5f2h.svg"
                                    alt="VectorI2931"
                                    className="soloyal-homepage-vector2"
                                />
                                <img
                                    src="/playground_assets/vectori2931-r86m.svg"
                                    alt="VectorI2931"
                                    className="soloyal-homepage-vector3"
                                />
                                <img
                                    src="/playground_assets/vectori2931-k8a.svg"
                                    alt="VectorI2931"
                                    className="soloyal-homepage-vector4"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Landing;
