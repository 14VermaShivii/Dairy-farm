import React from "react";
import Animal2 from "/images/Animal2.jpg"
export const Home = () => {
    return (
        <>
            <section id="Hero">
                <div className="row">
                    <div className="container-fluid">
                        <div className=" container-fluid Hero">
                            {/* <img src={Animal2} width={1500} height={600} /> */}
                        </div>
                    </div>
                </div>
            </section>
            <section id="card">

                <div className="row py-4 px-3">
                    {/* <div className="container py-5"> */}
                    <div className="col-md-4  ">
                        <div className="card card-effect">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a to="#" className="card-link">Card link</a>
                                <a to="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>

                    {/* </div> */}
                    <div className="col-md-4">
                        <div className="card card-effect">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a to="#" className="card-link">Card link</a>
                                <a to="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card card-effect">
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a to="#" className="card-link">Card link</a>
                                <a to="#" className="card-link">Another link</a>
                            </div>
                        </div>
                    </div>
                </div>


            </section>
            {/* ********************** */}
            <section id="Info">
                <div className="row">
                    <div className="col-md-4 py-3 px-5 bottle">
                        <img src="../public/images/milk.png" />

                    </div>
                    {/* </div> */}
                    {/* <div className="row"> */}
                    <div className="col-md-8">

                        <h1>FRESH MILK</h1>
                        <h1>
                            <b>HOME DELIVERED
                            </b>
                        </h1>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>100% NATURAL</h3>
                                <p>Our cows are naturally grazed. We feed natural fodder and cattle feed.
                                     Free of Growth hormone,
                                    Antibiotic, and Preservatives.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h2>FARM FRESH</h2>
                                <p>Our goal is to serve the freshest milk. Fresh milk is delivered from our farms to your home as quickly as
                                    possible with strict cold-chain.
                                </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>HYGIENICALLY PRODUCED </h3>
                                <p>We pay close attention to our cows' hygiene. They are washed regularly and
                                    their health is maintained very well.
                                </p>
                            </div>
                                <div className="col-md-6">
                                    <h3>UNPROCESSED MILK  </h3>
                                    <p>We believe in consuming fresh milk. It tastes better and rich in vitamins and minerals
                                        compared to processed milk.
                                    </p>
                                </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <h3>FROM HAPPY COWS
                                </h3>
                                <p>Our cows are treated with love and care. We provide quality fodder,
                                    cattle feed, and nice shelter for them to live happily.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h3>FREE OF ANTIBIOTIC & HORMONE
                                </h3>
                                <p>We don't use growth hormones or use milk from cows that are treated with antibiotics.
                                    Our milk is safe and healthy.
                                </p>
                            </div>
                        </div>
<button>READ MORE</button>
                    </div>
                </div>

            </section>


        </>
    )
}