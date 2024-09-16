import React, { Component } from 'react';
import Layout from '@theme/Layout'; // Assuming you have a Layout component

class SubscribePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEmailSet: false,
            email: '',
            error: '',
        };

        // Binding functions to `this`
        this.handleChange = this.handleChange.bind(this);
        this.isValidEmail = this.isValidEmail.bind(this);
    }

    handleChange(event) {
        this.setState({ email: event.target.value });
    }

    isValidEmail() {
        // @ts-ignore
        const { email } = this.state;

        // Basic email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (emailPattern.test(email)) {
            this.setState({ isEmailSet: true, error: '' });
        } else {
            this.setState({ error: 'Please enter a valid email.' });
        }
    }

    render() {
        // @ts-ignore
        const { isEmailSet, email, error } = this.state;

        if (!isEmailSet) {
            return (
                <Layout title={"Subscribe"} description={"Page where visitors can subscribe to latest blog posts"}>
                    <div className="flex flex-col space-y-2.5 justify-center items-center min-h-screen">
                        <h1 className="text-4xl">Subscribe Here</h1>

                        <input
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={email}
                            onChange={this.handleChange}
                            className="border-2"
                        />

                        {error && <h2 style={{ color: 'red' }}>{error}</h2>}

                        <button
                            type="button"
                            onClick={this.isValidEmail}
                            className="rounded-full bg-blue-500 text-white p-3 px-8"
                        >
                            Subscribe
                        </button>
                    </div>
                </Layout>
            );
        } else {
            return (
                <Layout title={"Subscribe"} description={"Page where visitors can subscribe to latest blog posts"}>
                    <div className="flex flex-col space-y-2.5 justify-center items-center min-h-screen">
                        <h1 className="text-3xl">Thank You So Much! :)</h1>
                    </div>
                </Layout>
            );
        }
    }
}

export default SubscribePage;