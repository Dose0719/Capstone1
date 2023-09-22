import React, { Component } from 'react';
import '../components/Reg.css'

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            retypeEmail: '',
            companyName: '',
            addressLine1: '',
            addressLine2: '',
            city: '',
            stateProvince: '',
            postalCode: '',
            country: '',
            phoneNumber: '',
        };
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    };

    handleSubmit = (e) => {
        e.preventDefault();
        // You can add validation and submission logic here
        console.log(this.state);
    };

    render() {
        const {
            firstName,
            lastName,
            email,
            retypeEmail,
            companyName,
            addressLine1,
            addressLine2,
            city,
            stateProvince,
            postalCode,
            country,
            phoneNumber,
        } = this.state;

        return (
            <div className='Container-Reg'>
                <form className='Formz' onSubmit={this.handleSubmit}>
                    <div className='formzdiv'>
                        <label htmlFor="firstName">First Name:</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={firstName}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className='formzdiv'>
                        <label htmlFor="lastName">Last Name:</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={lastName}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className='formzdiv'>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className='formzdiv'>
                        <label htmlFor="retypeEmail">Retype Email:</label>
                        <input
                            type="email"
                            id="retypeEmail"
                            name="retypeEmail"
                            value={retypeEmail}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <hr></hr>
                    <h5>COMPANY DETAILS</h5>
                    <div className='formzdiv'>
                        <label htmlFor="companyName">Company Name:</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={companyName}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className='formzdiv'>
                        <label htmlFor="addressLine1">Address Line 1:</label>
                        <input
                            type="text"
                            id="addressLine1"
                            name="addressLine1"
                            value={addressLine1}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className='formzdiv'>
                        <label htmlFor="addressLine2">Address Line 2 (Optional):</label>
                        <input
                            type="text"
                            id="addressLine2"
                            name="addressLine2"
                            value={addressLine2}
                            onChange={this.handleInputChange}
                        />
                    </div>
                    <div className='formzdiv'>
                        <label htmlFor="city">City/Town:</label>
                        <input
                            type="text"
                            id="city"
                            name="city"
                            value={city}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className='formzdiv'>
                        <label htmlFor="stateProvince">State/Province:</label>
                        <input
                            type="text"
                            id="stateProvince"
                            name="stateProvince"
                            value={stateProvince}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className='formzdiv'>
                        <label htmlFor="postalCode">Zip/Postal Code:</label>
                        <input
                            type="text"
                            id="postalCode"
                            name="postalCode"
                            value={postalCode}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className='formzdiv'>
                        <label htmlFor="country">Country:</label>
                        <input
                            type="text"
                            id="country"
                            name="country"
                            value={country}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <div className='formzdiv'>
                        <label htmlFor="phoneNumber">Phone Number:</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={this.handleInputChange}
                            required
                        />
                    </div>
                    <button className='com-btn' type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

export default RegistrationForm;
