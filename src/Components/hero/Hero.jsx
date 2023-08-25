import React from 'react'
import img1 from '../../assets/images/boy.png';

const Hero = () => {
    return (
        <div>
            <div class="container my-5">
                <div class="row">
                    <div class="col-lg-6 mt-5">
                        <h1 class="fs-1 fw-bold mb-5 mt-5">TechVantage Solutions</h1>
                        <p class="fs-6">
                            Empowering Businesses with Innovative Solutions for Success and
                            Growth. Streamline workflows, foster collaboration, and unlock
                            your true potential with TechVantage. Experience the future of
                            work today.
                        </p>
                        <div class="button-group mt-5">
                            <button type="button" class="btn btn-primary fs-6 px-4 me-2">
                                Start Your Free Trial Now
                            </button>
                            <button type="button" class="btn btn-outline-light text-primary fs-6 px-4">
                                Request a demo
                            </button>

                           
                        </div>
                    </div>
                    <div class="col-lg-5">
                        <div class="position-relative">
                            <img class="img-fluid mt-5" src={img1} alt="Boy-Image" />
                            <div
                                class="position-absolute top-50 start-50 translate-middle ms-5">
                                <button type="button"
                                    class="btn green-btn text-white rounded-pill fs-6 px-3 py-2">
                                    Task Management
                                </button>
                            </div>
                            <div class="position-absolute top-50 translate-middle ms-5 mt-4">
                                <button type="button"
                                    class="btn pink-btn text-white rounded-pill fs-6 py-2">
                                    Communication
                                </button>
                            </div>
                            <div class="position-absolute top-50 end-0 mt-5 me-3">
                                <button type="button"
                                    class="btn yellow-btn text-white rounded-pill fs-6 px-4 py-1">
                                    Analytics
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero