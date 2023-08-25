import React from 'react'

const Header = () => {
    return (
        <div>
            <div class="container">
            <nav class="navbar navbar-expand-lg">
                <div class="container-fluid">
                    <a class="navbar-brand fw-bold me-5" href="#">TechVantage</a>
                    <button
                        class="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item px-2 dropdown">
                                <a class="nav-link active dropdown-toggle fs-6"
                                    data-bs-toggle="dropdown" href="#"
                                    role="button" aria-expanded="false">Product</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item fs-6" href="#">Product 1</a></li>
                                    <li><a class="dropdown-item fs-6" href="#">Product 2</a></li>
                                    <li><hr class="dropdown-divider" /></li>
                                    <li><a class="dropdown-item fs-6" href="#">Product 3</a></li>
                                </ul>
                            </li>
                            <li class="nav-item px-2 dropdown">
                                <a class="nav-link dropdown-toggle fs-6"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button" aria-expanded="false">Solutions</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item fs-6" href="#">Solution 1</a></li>
                                    <li><a class="dropdown-item fs-6" href="#">Solution 2</a></li>
                                </ul>
                            </li>
                            <li class="nav-item px-2 dropdown">
                                <a class="nav-link dropdown-toggle fs-6"
                                    data-bs-toggle="dropdown"
                                    href="#"
                                    role="button" aria-expanded="false">Resources</a>
                                <ul class="dropdown-menu">
                                    <li><a class="dropdown-item fs-6" href="#">Resources 1</a></li>
                                    <li><a class="dropdown-item fs-6 disabled" href="#">Resources
                                        2</a></li>
                                </ul>
                            </li>
                            <li class="nav-item px-2">
                                <a class="nav-link fs-6" href="#">Pricing</a>
                            </li>
                        </ul>
                        <div class>
                            <button type="button" class="btn">
                                <a class="text-decoration-none px-3 fs-6" href="#">Login</a>
                            </button>
                            <button type="button" class="btn btn-primary px-4 fs-6">
                                Get Started Now
                            </button>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    )
}

export default Header