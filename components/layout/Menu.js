import Link from "next/link"
// import { useRouter } from "next/router"

export default function Menu() {
    // const router = useRouter()

    return (
        <>

            {/* <ul className="sub-menu">
                <Link className={router.pathname == "/" ? "active" : ""}>Home Default</Link>
                <Link className={router.pathname == "/index-2" ? "active" : ""}>Home Interior</Link>
            </ul> */}

            <ul className="navigation clearfix">
                
    
                {/* <li className="dropdown"><Link href="#">Company</Link>
                    <ul>
                        <li className=""><Link href="/about">About Us</Link></li>
                        <li className=""><Link href="#">careers</Link></li>
                        <li className=" "><Link href="#">Meet Our Team</Link>
                            
                        </li>
                    </ul>
                </li> */}
                {/* <li className="dropdown"><Link href="https://www.clover.com/online-ordering/journey-cafe-kailuakona">Online Menu</Link>
                    <ul>
                        <li><Link href="/services">Our All Services</Link></li>
                        <li><Link href="/finance-restructuring">Finance &amp; Restructuring</Link></li>
                        <li><Link href="/audit-assurance">Audit &amp; Assurance</Link></li>
                        <li><Link href="/trades-stock-markets">Trades &amp; Stock Market</Link></li>
                        <li><Link href="/strategy-planning">Strategy &amp; Planning</Link></li>
                        <li><Link href="/software-research">Software &amp; Research</Link></li>
                        <li><Link href="/support-maintenance">Support &amp; Maintenance</Link></li>
                    </ul>
                </li> */}
                <li className=""><Link href="/one-soul-path">One Soul Path</Link>
            
                </li>
                <li className="dropdown"><Link href="/amenities">Amenities & Services</Link>
                    
                </li>
                {/* <li className="dropdown"><Link href="#Testimonials">Testimonials</Link>
                    
                </li> */}
             
        
            </ul>
        </>
    )
}
