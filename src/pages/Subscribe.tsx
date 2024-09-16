import React from 'react';
import Layout from '@theme/Layout';

export default function Subscribe() {

    const [email, setEmail] = React.useState('');
    const [error, setError] = React.useState(null);

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = event => {
        if (!isValidEmail(event.target.value)) {
            setError('Email is invalid');
        } else {
            setError(null);
        }

        setEmail(event.target.value);
    };



    return (
        <Layout title={"Subscribe"} description={"Page where visitors can subscribe to latest blog posts"}>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '50vh',
            }}>
                <h1>Subscribe Here</h1>

                <input
                    id="email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />

                {error && <h2 style={{color: 'red'}}>{error}</h2>}

            </div>
        </Layout>
    );
}