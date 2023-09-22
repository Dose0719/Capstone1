import React from 'react';
import '../components/CarListing.css'
import card1 from "../img/car1.jpg"

const CarListing = () => {
    return (
        <div className="container container3">
            <div className="title_main">
                <h2>FEATURED LISTINGS</h2>
            </div>
            <div className="row">
                <div className="col-md-4 mb-4">
                    <div className="card text-light">
                        <img className="card-img-top"  src={card1} alt="Banner Image"></img>
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-subTitl">Toyota</h5>
                                <h6 className="card-subTitle">2020</h6>
                            </div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-regular fa-user" style={{ color: '#806393' }}></i> 4 people
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-gauge" style={{ color: '#806393' }}></i> 6.1 km/ 1-liter
                                    </p>
                                </div>
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-solid fa-gas-pump" style={{ color: '#806393' }}></i> Hybrid
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-car" style={{ color: '#806393' }}></i> Automatic
                                    </p>
                                </div>
                                <hr style={{ width: '200%' }} />
                            </div>
                            <div className="grid-item2">
                                <h5 className="card-title amountText">$400 / month</h5>
                                <button className="car__favorite heartBtn" type="button" aria-label="Add to favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                                    </svg>
                                </button>
                                <button className="btn" style={{ width: '28%', color: 'white', backgroundColor: '#806393' }}>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-light">
                        <img className="card-img-top"  src={card1} alt="Banner Image"></img>
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-subTitl">Toyota</h5>
                                <h6 className="card-subTitle">2020</h6>
                            </div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-regular fa-user" style={{ color: '#806393' }}></i> 4 people
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-gauge" style={{ color: '#806393' }}></i> 6.1 km/ 1-liter
                                    </p>
                                </div>
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-solid fa-gas-pump" style={{ color: '#806393' }}></i> Hybrid
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-car" style={{ color: '#806393' }}></i> Automatic
                                    </p>
                                </div>
                                <hr style={{ width: '200%' }} />
                            </div>
                            <div className="grid-item2">
                                <h5 className="card-title amountText">$400 / month</h5>
                                <button className="car__favorite heartBtn" type="button" aria-label="Add to favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                                    </svg>
                                </button>
                                <button className="btn" style={{ width: '28%', color: 'white', backgroundColor: '#806393' }}>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-light">
                        <img className="card-img-top"  src={card1} alt="Banner Image"></img>
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-subTitl">Toyota</h5>
                                <h6 className="card-subTitle">2020</h6>
                            </div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-regular fa-user" style={{ color: '#806393' }}></i> 4 people
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-gauge" style={{ color: '#806393' }}></i> 6.1 km/ 1-liter
                                    </p>
                                </div>
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-solid fa-gas-pump" style={{ color: '#806393' }}></i> Hybrid
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-car" style={{ color: '#806393' }}></i> Automatic
                                    </p>
                                </div>
                                <hr style={{ width: '200%' }} />
                            </div>
                            <div className="grid-item2">
                                <h5 className="card-title amountText">$400 / month</h5>
                                <button className="car__favorite heartBtn" type="button" aria-label="Add to favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                                    </svg>
                                </button>
                                <button className="btn" style={{ width: '28%', color: 'white', backgroundColor: '#806393' }}>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-light">
                        <img className="card-img-top"  src={card1} alt="Banner Image"></img>
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-subTitl">Toyota</h5>
                                <h6 className="card-subTitle">2020</h6>
                            </div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-regular fa-user" style={{ color: '#806393' }}></i> 4 people
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-gauge" style={{ color: '#806393' }}></i> 6.1 km/ 1-liter
                                    </p>
                                </div>
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-solid fa-gas-pump" style={{ color: '#806393' }}></i> Hybrid
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-car" style={{ color: '#806393' }}></i> Automatic
                                    </p>
                                </div>
                                <hr style={{ width: '200%' }} />
                            </div>
                            <div className="grid-item2">
                                <h5 className="card-title amountText">$400 / month</h5>
                                <button className="car__favorite heartBtn" type="button" aria-label="Add to favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                                    </svg>
                                </button>
                                <button className="btn" style={{ width: '28%', color: 'white', backgroundColor: '#806393' }}>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-light">
                        <img className="card-img-top"  src={card1} alt="Banner Image"></img>
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-subTitl">Toyota</h5>
                                <h6 className="card-subTitle">2020</h6>
                            </div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-regular fa-user" style={{ color: '#806393' }}></i> 4 people
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-gauge" style={{ color: '#806393' }}></i> 6.1 km/ 1-liter
                                    </p>
                                </div>
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-solid fa-gas-pump" style={{ color: '#806393' }}></i> Hybrid
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-car" style={{ color: '#806393' }}></i> Automatic
                                    </p>
                                </div>
                                <hr style={{ width: '200%' }} />
                            </div>
                            <div className="grid-item2">
                                <h5 className="card-title amountText">$400 / month</h5>
                                <button className="car__favorite heartBtn" type="button" aria-label="Add to favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                                    </svg>
                                </button>
                                <button className="btn" style={{ width: '28%', color: 'white', backgroundColor: '#806393' }}>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="card text-light">
                        <img className="card-img-top"  src={card1} alt="Banner Image"></img>
                        <div className="card-body">
                            <div className="card-header">
                                <h5 className="card-subTitl">Toyota</h5>
                                <h6 className="card-subTitle">2020</h6>
                            </div>
                            <div className="grid-container">
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-regular fa-user" style={{ color: '#806393' }}></i> 4 people
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-gauge" style={{ color: '#806393' }}></i> 6.1 km/ 1-liter
                                    </p>
                                </div>
                                <div className="grid-item">
                                    <p className="card-text">
                                        <i className="fa-solid fa-gas-pump" style={{ color: '#806393' }}></i> Hybrid
                                    </p>
                                    <p className="card-text">
                                        <i className="fa-solid fa-car" style={{ color: '#806393' }}></i> Automatic
                                    </p>
                                </div>
                                <hr style={{ width: '200%' }} />
                            </div>
                            <div className="grid-item2">
                                <h5 className="card-title amountText">$400 / month</h5>
                                <button className="car__favorite heartBtn" type="button" aria-label="Add to favorite">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M20.16,5A6.29,6.29,0,0,0,12,4.36a6.27,6.27,0,0,0-8.16,9.48l6.21,6.22a2.78,2.78,0,0,0,3.9,0l6.21-6.22A6.27,6.27,0,0,0,20.16,5Zm-1.41,7.46-6.21,6.21a.76.76,0,0,1-1.08,0L5.25,12.43a4.29,4.29,0,0,1,0-6,4.27,4.27,0,0,1,6,0,1,1,0,0,0,1.42,0,4.27,4.27,0,0,1,6,0A4.29,4.29,0,0,1,18.75,12.43Z"></path>
                                    </svg>
                                </button>
                                <button className="btn" style={{ width: '28%', color: 'white', backgroundColor: '#806393' }}>
                                    Rent Now
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CarListing;
