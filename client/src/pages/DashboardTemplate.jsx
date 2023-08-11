import React from 'react';
import Layout from '../components/LayoutTemplate';

export default function DashboardTemplate({ }) {
    return (
        <Layout>
            <div className="container mt-4">
                <h1>Welcome to Dashboard</h1>

                <div className="row">
                {/* Card 1 */}
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card 1</h5>
                        <p className="card-text">Content for Card 1</p>
                    </div>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card 2</h5>
                        <p className="card-text">Content for Card 2</p>
                    </div>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card 3</h5>
                        <p className="card-text">Content for Card 3</p>
                    </div>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="col-lg-3 col-md-6">
                    <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Card 4</h5>
                        <p className="card-text">Content for Card 4</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </Layout>
    );
};