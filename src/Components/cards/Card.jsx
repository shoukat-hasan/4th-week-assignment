import React from 'react'
import img2 from '../../assets/images/Frame-0.png'
import img3 from '../../assets/images/Frame-1.png'
import img4 from '../../assets/images/Frame-2.png'
import img5 from '../../assets/images/Frame-3.png'

const Card = () => {
    return (
        <div>
            <div class="container">
                <div class="row justify-content-center mb-5">
                    <div class="col-lg-3 col-md-6 my-5">
                        <div class="shadow p-3 bg-body">
                            <span class="fw-bold d-block">Increased Efficiency</span>
                            <p class="mt-3">Streamline your workflow and save time.</p>
                            <img class="bg-icon img-fluid" src={img2} alt />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 my-5">
                        <div class="shadow p-3 bg-body">
                            <span class="fw-bold">Improved cooperation</span>
                            <p class=" mt-3">Foster teamwork and communication.</p>
                            <img class="bg-icon img-fluid" src={img3} alt />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 my-5">
                        <div class="shadow p-3 bg-body">
                            <span class="fw-bold d-block">Scalability</span>
                            <p class="mt-3">
                                Adapt to growing business needs seamlessly.
                            </p>
                            <img class="bg-icon img-fluid" src={img4} alt />
                        </div>
                    </div>
                    <div class="col-lg-3 col-md-6 my-5">
                        <div class="shadow px-2 py-3 bg-body">
                            <span class="fw-bold d-block">Data Security</span>
                            <p class="mt-3">
                                Ensure the safety and privacy of your valuable data.
                            </p>
                            <img class="bg-icon img-fluid" src={img5} alt />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;