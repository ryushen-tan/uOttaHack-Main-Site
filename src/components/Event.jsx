import React from "react";

const Event = ({ name, date, description, image}) => {
    return(

        <div className="flex flex-row justify-center object-center gap-8">
            <div className="logo">
                <img src={image} alt={image} />
            </div>
            <div className="flex flex-col h-[150px] justify-center">
                <h1><span className="font-bold text-[20px]">{name}</span> / {date}</h1>
                <p className="w-[400px] text-[16px]">{description}</p>
            </div>
        </div>
    );
};

export default Event;