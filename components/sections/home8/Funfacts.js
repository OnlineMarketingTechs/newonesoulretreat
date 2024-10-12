import CounterUp from "@/components/elements/CounterUp"


export default function Funfacts() {
    return (
        <>
            <section className="funfacts-section-eight" style={{ backgroundImage: 'url(assets/images-3/funfacts-section-eight-bg.jpg)' }}>
                <div className="auto-container">
                    {/* Fact Counter */}
                    <ul className="fact-counter-eight">
                        {/*Column*/}
                        <li className="counter-column">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon-star-1 clr8" />
                                    </div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={4200} />
                                        <div className="counter-title">Successful Journeys</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="counter-column">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon-love clr8" />
                                    </div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={98} /><div className="percentage">%</div>
                                        <div className="counter-title">Life's Transformed</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="counter-column">
                            <div className="inner wow fadeInLeft" data-wow-delay="0ms" data-wow-duration="1500ms">
                                <div className="content">
                                    <div className="icon-box">
                                        <span className="icon-user clr8" />
                                    </div>
                                    <div className="count-outer count-box">
                                        <CounterUp end={3200} />
                                        <div className="counter-title">Members of The <br></br>One Soul Path Program</div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}
