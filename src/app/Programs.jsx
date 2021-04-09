import React from "react";

const Programs = (props) => {
    return(
        <div className="section">
            <h3 className="section-header">Programs</h3>
            <h6>Current Programs</h6>
            <div id="currentPrograms"> 
                <p>Alhumdulillah for the last 5 years the following programs and activities haven 
                    been conducting in a very limited rented office space (1100 sq ft)</p>
            </div>        
            <h6>Educational Programs</h6>
            <div>
                <ul>
                    <li>Learn how to read the Quran with Tajweed (Nazirah)</li>
                    <li>Tajweed - The science of reciting the Quran correctly</li>
                    <li>Memorization of the Quran (Hifz)</li>
                    <li>Fiqh Classes</li>  
                </ul>
            </div>
        
        <h6>Other Activities</h6>
        <div>
            <ul>
                <li>Daily 5 times Salah</li>
                <li>Friday Prayers</li>
                <li>Presently Masjid Sahabah arranges Huffaz for Taraweeh during Ramadan</li>
                <li>Daily Hadith session for men</li>
                <li>Weekly Hadith session for women</li>
                <li>Separate weekly Islamic teaching for girls and boys</li>
                <li>Weekly Dawah program</li>
                <li>Islamic Counselling</li>  
            </ul>
        </div>
        </div>
    );
};

export default Programs;