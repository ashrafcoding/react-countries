import React from 'react'

function Country(props) {
    const { flag, nam, population, region, capital} = props
    return (
        <div className="country-container" >
            <div className="country-card" >
                <div className="flag">
                    <img src={flag} alt={`flag of ${nam}`}style={{width: "40px"}} />
                </div>
                <div className="inf0">
                    <h3>{nam}</h3>
                    <p>{population}</p>
                    <p>{region}</p>
                    <p>{capital}</p>
                </div>
            </div>
        </div>
    )
}

export default Country
