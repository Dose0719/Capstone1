import React from 'react'
import '../components/Smallmid1.css'
import banner from '../img/calling.jpg'
import { Link } from 'react-router-dom'

const Smallmid1 = () => {
    return (
        <>
            <div className='Container-fluid'>
                <img src={banner} alt='image'></img>

                <h2 style={{ textAlign: "center" }} ><b>For Small and mid-Sized Business </b></h2>
            </div>
            <div className='Container'>
                <div className='basic'>
                    <div className='basic1'><p><br />Small Business. Big Savings </p></div>
                    <div className='basic2'><strong>Already a member?</strong> <Link>Log in Now</Link> </div>
                </div>
                <div>
                    <p className='p1'>lorem The Avis For Business program is a unique program built exclusively for small businesses. As a member, you gain access to Reward Days, discounts, and so much more each time you or your employees rent with Avis.  The more rentals your company completes, the greater the rewards your company will receive......so get driving!</p>
                    <p>As a <b>"welcome to the program"</b> bonus you will receive:</p>
                    <ul>
                        <li><b>One Reward Day</b> after your first completed rental.</li>
                        <li><b>Double rewards</b> for the <b>first 90 days</b> as a member.</li>
                    </ul>
                    <p>Your everyday benefits include:</p>
                    <ul>
                        <li>Up to 30% off base rates.</li>
                        <li>One Reward Day for every 15 completed rental days, along with one Reward Day earned after your first completed rental!</li>
                        <li>Access to the Avis For Business member site where you can view all of your rental activity and Reward Days.</li>
                        <li>Complimentary Avis Preferred membership to help you avoid lines and paperwork.</li>
                        <li>A dedicated customer service team that is always just a call or click away.</li>
                    </ul>
                    <p>
                    Enroll today to get an Avis Worldwide Discount (AWD) number to share with your company's employees, and immediately start enjoying the benefits.  
                    </p>
                    <button className='b1' type="">Program Terms and Conditions</button>
                    <hr></hr>
                    <h5>YOUR INFORMATION</h5>
                    
                    
                    
                    
                </div>
            </div>

        </>
    )
}

export default Smallmid1