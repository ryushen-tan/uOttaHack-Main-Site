import React from 'react';
import { Helmet } from 'react-helmet';
// import Bento from '../components/bento';
const TITLE = "Coming Soon..."

export default function Temp() {
    return (
        <>
            <Helmet>
                <title>{TITLE}</title>
            </Helmet>
            <div className="w-full h-screen flex items-center justify-center">
                <h1 className="text-2xl text-center italic">Coming Soon...</h1>
            </div>
        </>
    );
}
