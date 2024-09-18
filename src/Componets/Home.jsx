import React from "react";
// import Animal5 from "../../public/images/Animal5"

export const Home = () => {
    return (
        <>
            <section id="Hero">
                <div className="row">
                    <div className="container-fluid">
                        <div className=" container-fluid Hero">
                            {/* <img src="../public/images/Animal2.jpg" /> */}
                        </div>
                    </div>
                </div>
            </section>
            {/* //************************* */}
            <section id="card">
                <div className="row py-4 px-3">
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
                        <div className="line"></div>

                        <div className="row py-4">
                            <div className="col-md-6">
                                <h3>100% NATURAL</h3>
                                <p>Our cows are naturally grazed. We feed  <br />natural fodder and cattle feed.
                                    Free of <br /> Growth hormone, Antibiotic, and<br /> Preservatives.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h2>FARM FRESH</h2>
                                <p>Our goal is to serve the freshest milk.<br /> Fresh milk is delivered from our farms<br />
                                    to your home as quickly as
                                    possible with<br /> strict cold-chain.
                                </p>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-md-6">
                                <h3>HYGIENICALLY PRODUCED </h3>
                                <p>We pay close attention to our cows' hygiene. <br />They are washed regularly and
                                    their health <br />is maintained very well.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h3>UNPROCESSED MILK  </h3>
                                <p>We believe in consuming fresh milk. It<br /> tastes better and rich in vitamins and<br /> minerals
                                    compared to processed milk.
                                </p>
                            </div>
                        </div>
                        <div className="row py-2">
                            <div className="col-md-6">
                                <h3>FROM HAPPY COWS
                                </h3>
                                <p>Our cows are treated with love and care.<br /> We provide quality fodder,
                                    cattle feed, and <br />nice shelter for them to live happily.
                                </p>
                            </div>
                            <div className="col-md-6">
                                <h3>FREE OF ANTIBIOTIC & HORMONE
                                </h3>
                                <p>We don't use growth hormones or use milk from <br />cows that are treated with antibiotics.
                                    Our milk<br /> is safe and healthy.
                                </p>
                            </div>
                        </div>
                        <button className="button teal py-2">READ MORE</button>
                    </div>
                </div>

            </section>
            {/* **************** */}
            <section id="Divider py-5">
                <div className="container-fluid">
                    <div className="row py-5">
                        <div className="col-md-6 px-5 py-5">
                            <hr className="mt-0 mb-0 hr py-3" />
                            <h3>MORE THAN </h3>
                            <h1>NATURAL</h1>
                            <div className="line"></div>
                            <div className="text-cont">
                                <p>It's not just about producing good quality natural<br /> milk from cows. It's about their happiness level. If<br /> cows are happy, they produce far better quality<br /> milk. Apart from natural fodder and cattle feed we<br /> provide, our cows are provided with good housing <br />and space to move around and graze. Their hygiene<br /> and health are also taken care of very well by<br /> experienced farmers.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="Animal5">
                                <img src="../public/images/Animal5.jpg" />
                            </div>
                        </div>
                    </div>
                </div>
                {/* </hr> */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="Animal5">
                            <img src="../public/images/Animal6.jpg" />
                        </div>

                    </div>
                    <div className="col-md-6">
                        <h3>FOREST</h3>
                        <h1>GRAZED</h1>
                        <div className="line"></div>
                        <div className="text-cont">

                            <p>When cows walk around and graze naturally in the<br /> open field, they are very healthy. Our Desi Cows are<br /> grazed in the forest during the day. They graze<br /> natural grass, leaves, and medicinal herbs. Grazing <br />cows in the open field under the sun not only keep<br /> cows healthy, but they also give us nutrition-rich<br /> milk. Consuming milk and milk products from forest<br /> grazed cows is known to have various health<br /> benefits.
                            </p>
                            <hr className="mt-0 mb-0 hr" />
                        </div>
                    </div>
                </div>
            </section >
            {/* **************** */}
            < section id="Process fes4-count " >
                <div className="container py-5">
                    <div className="row">
                        <div className="col-xs-12 col-sm-4 col-md-4">
                            <h2 className="section-title">
                                OUR
                                <span className="bold"> PROCESS</span>
                            </h2>
                        </div>
                        <div className="col-sm-4">
                            <h3><b>GRAZING</b></h3>
                            NATURALLY
                            <p className="py-3"> Our cows are grazed naturally. We feed our cows with naturally grown grass and chemical-free cattle feed along with oil cakes and natural mineral supplements.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <h3><b>CARING</b></h3>
                            WITH LOVE
                            <p className="py-3">Cows in our farms are treated with love and care. We monitor closely to make sure they are properly housed, washed, and health is periodically checked.
                            </p>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-sm-4">
                            <h3><b>MILKING</b></h3>
                            HYGEINICALLY
                            <p className="py-3">Cows are washed regularly and their hygiene is maintained very well. Before milking udder area is thoroughly washed and dried.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <h3><b>CHILLING</b></h3>
                            FASTER
                            <p className="py-3">After milking, milk is chilled as quickly as possible to 4°C. This helps to avoid bacterial growth and maintain freshness.
                            </p>
                        </div>
                        <div className="col-sm-4">
                            <h3><b>DELIVERY</b></h3>
                            ON TIME
                            <p className="py-3">Fresh milk is delivered to customers every day before 7 am to their doorsteps. We maintain a strict cold chain end-to-end to maintain freshness.
                            </p>


                        </div>
                    </div>
                </div>
            </section >
            {/* ***************** */}
            <section id="Our-passion">
                <div className="process-bg">
                    <div className="container fes4-count">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="mb-50 ">
                                    <h2 className="section-title section-color">
                                        OUR
                                        <span className="bold"> PASSION</span>
                                    </h2>

                                    <p className="mb-50 py-4">We have set out to serve Gomathas and follow<br /> our tradition. We believe our tradition is rich<br /> and enables us to live a happy and healthy<br /> lifestyle. Our Gomathas play a very crucial role<br /> in our tradition.</p>

                                </div>
                            </div>
                            <div className="col-md-7">
                                <div className="row">
                                    <div className=" col-xs-12 col-sm-4 col-md-6">
                                        <div className="fes4-title-cont">
                                            <div className="fes4-box-icon">

                                            </div>
                                        </div>
                                        <h5><b>PROTECT COWS</b></h5>
                                        <p>We take care of cows even when they stop giving milk
                                        </p>
                                    </div>
                                    <div className=" col-xs-12 col-sm-4 col-md-6">

                                        <div className="fes4-title-cont">
                                            <div className="fes4-box-icon">

                                            </div>
                                        </div>
                                        <h5>PRESERVE DESI COWS</h5>
                                        <p>We protect desi cows by promoting desi cow products</p>
                                    </div>

                                </div>

                                <div className="row">
                                    <div className=" col-xs-12 col-sm-4 col-md-6">
                                        <div className="fes4-title-cont">
                                            <div className="fes4-box-icon">

                                            </div>
                                        </div>
                                        <h5><b>ORGANIC FARMING
                                        </b></h5>
                                        <p>We make organic fertilizers and pesticides for organic farming


                                        </p>
                                    </div>
                                    <div className=" col-xs-12 col-sm-4 col-md-6">

                                        <div className="fes4-title-cont">
                                            <div className="fes4-box-icon">

                                            </div>
                                        </div>
                                        <h5>FOLLOW TRADITION
                                        </h5>
                                        <p>We follow traditional methods while making our dairy products

                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </section>
            {/* ***************** */}
            <section id="Products">
                {/* product-1  */}
                <div className="row py-5 px-4">
                    <div className="col-md-4 col-sm-4 Page-section mt-80">
                        <div className="padding-img margin-img">
                            <img src="../public/images/prod-1.jpg" />
                            <div className="port-overlay-count">
                                <div className="port-title-count">
                                    <h3>Organic Milk</h3>
                                    <a>100 Natural</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* product-2  */}
                    <div className="col-md-4 col-sm-4 Page-section mt-80">
                        <div className="padding-img margin-img">
                            <img src="../public/images/prod-2.jpg" />
                        </div>
                    </div>

                    {/* product-3  */}
                    <div className="col-md-4 col-sm-4 Page-section mt-80">
                        <div className="padding-img margin-img">
                            <img src="../public/images/prod-3.jpg" />
                        </div>
                    </div>
                </div>
                {/* product-4  */}
                <div className="row px-4">
                    <div className="col-md-4 col-sm-4 Page-section mt-80">
                        <div className="padding-img margin-img">
                            <img src="../public/images/prod-4.jpg" />
                        </div>
                    </div>
                    {/* product-5  */}
                    <div className="col-md-4 col-sm-4 Page-section mt-80">
                        <div className="padding-img margin-img">
                            <img src="../public/images/prod-5.jpg" />
                        </div>
                    </div>
                    {/* product-6  */}
                    <div className="col-md-4 col-sm-4 Page-section mt-80">
                        <div className="padding-img margin-img">
                            <img src="../public/images/prod-6.jpg" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}