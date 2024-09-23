import Link from "next/link"


export default function Clients() {
    return (
        <>
            <section className="clients-section-home13 text-center">
                <div className="auto-container">
                    <div className="sec-title-two text-center">
                        <h6>Delicious Vegan Breakfast</h6>
                        <h2>Our Brunch is Rated #1 on The Big Island!</h2>
                    </div>
                    <div className="clients-inner">
                        <ul className="logo-list clearfix">
                            <li>
                                <figure className="clients-logo"><Link href="/"><img src="/assets/images/resource/foods/banna-chocolate-chip-muffins-journey-cafe-kona-hawaii.jpg" alt="" />Banna Chocolate Chip Muffins!</Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/"><img src="/assets/images/resource/foods/acai-bowl-journey-cafe-kona-hawaii.jpg" alt="" />Acai Bowls!</Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/"><img src="/assets/images/resource/foods/heart-journey-cafe-kona-hawaii.jpg" alt="" />Amazing Breakfast Options!</Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images/resource/foods/tropical-ube-pancake-journey-cafe-kona-hawaii.jpg" alt="" />Tropical Ube Pancakes!</Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images/resource/foods/breakfast-wrap-journey-cafe-kona-hawaii.jpg" alt="" />Delicious Breakfast Wraps!</Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images/resource/foods/chai-latte-journey-cafe-kona-hawaii.jpg" alt="" />Chi Latte!</Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images/resource/foods/chocolate-chip-cookies-journey-cafe-kona-hawaii.jpg" alt="" />Chocolate Chip Cookies!</Link></figure>
                            </li>
                            <li>
                                <figure className="clients-logo"><Link href="/index-13"><img src="/assets/images/resource/foods/Kombucha-Of-The-Day-16-oz.jpg" alt="" />Kombucha of The Day!</Link></figure>
                            </li>
                        </ul>
                    </div>
                    <div className="more-links">
                        <h6><i className="far fa-long-arrow-right" /> Come Experience Our Passion For Artisan Vegan Food!</h6>
                    </div>
                </div>
            </section>
        </>
    )
}
