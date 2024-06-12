import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const TITLE = "Ryushen"

export default function Home() {
  return (
    <>
      <Helmet>
        <title> {TITLE} </title>
      </Helmet>
      <div>
        
        <h1>hi</h1>
      </div>
    </>
  );
}
