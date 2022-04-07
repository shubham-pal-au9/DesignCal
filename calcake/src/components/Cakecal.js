import React, { useState } from 'react';
import "./cakecal.scss";
import { CloseOutlined, DownOutlined } from '@ant-design/icons';
import mainLogo from "../images/iconSmall.png";

const Cakecal = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [changeIcon, setChangeIcon] = useState(false);

    const showDetails = () => {
        setShowInfo(!showInfo)
    }

    const handleChange = (e) => {
        console.log(e.target.value)
        if (e.target.value) {
            console.log("DataIs")
            setChangeIcon(true)
        }
        else {
            console.log("DataNo")
            setChangeIcon(false)
        }
    }
    return (
        <div className="parentCake">
            <div className="cakeBorder">
                <span className="headCake">ROI Calculator</span>
                <div className="crossOne">  <CloseOutlined /> </div>
                <div className="cakeUSD">
                    <div className="imgIcon">
                        <img src={mainLogo} alt="fireSpot" />
                    </div>
                    <span className="cake">Cake</span>
                    <label class="switch">
                        <input type="checkbox" />
                        <span class="slider round"></span>
                    </label>
                    <span className="USD">USD</span>
                </div>
                <div className='inputField'>
                    <input type="text" placeholder="2.10000CAKE" />
                </div>
                <div className="balanceMain">
                    <span className="useBalance"> USE BALANCE </span>
                    <span className="dollorThousand"> $1000</span>
                    <span className="dollorHundread"> $100 </span>
                    <span className="dollorApprox"> ~ $20.82 </span>
                </div>
                <div className="timeFrame">
                    Time Frame
                </div>
                <div className="days">
                    <span className="oneDay"> 1 Day </span>
                    <span className="timeDuration"> 7 Days </span>
                    <span className="timeDuration"> 30 Days </span>
                    <span className="timeDuration"> 1 Year </span>
                    <span className="timeDuration"> 5 Years </span>
                </div>
                <div className="alignAccAPYSwitch">
                    <div className="accAPY">
                        Enable Accelerated APY
                    </div>
                    <div className="switchNoColor">
                        <label class="switch">
                            <input type="checkbox" />
                            <span class="slider round"></span>
                        </label>
                    </div>
                </div>
                <div className="selectTier">
                    Select Tier
                </div>
                <div className="tier">
                    <span className="normalTier"> Tier 1 </span>
                    <span className="normalTier"> Tier 2</span>
                    <span className="normalTier"> Tier 3 </span>
                    <span className="fourTier"> Tier 4 </span>
                    <span className="normalTier"> Tier 5 </span>
                </div>
                <div className="roiRates">
                    ROI at Current Rates
                </div>

                <input type="text"
                    className={
                        changeIcon === false ? "iconPencile" : "iconTick"
                    }

                    placeholder="100.0 USD" onChange={(e) => handleChange(e)} />

                <div className="threeCake">
                    ~ 3CAKE + 10 DON
                </div>
                <div className="btnAlign">
                    <input type="button" className="applyBtnName" value="Apply" />
                    <input type="button" className="cancelBtnName" value="Cancel" />
                </div>

                {showInfo === false ?
                    <div className="showDetails" onClick={showDetails}>
                        Show Details
                        <span className="alignDownAr"> <DownOutlined /> </span>
                    </div>
                    :
                    <div className="showDetails" onClick={showDetails}>
                        Hide Details
                        <span className="alignDownAr"> <DownOutlined /> </span>
                    </div>
                }

                {showInfo === true && (
                    <div className="mainApy">
                        <div className="apy">
                            <span className="apyText"> APY </span>
                            <span className="apyPercentage"> 63.34% </span>
                        </div>
                        <div className="apyContent">
                            <ul>
                                <li className="changeLiAlign">Calculated based on current rates</li>
                                <li className="changeLiAlign">All fugures are estimates provided for your convenience only,
                                    and by no means represent guaranted returns.</li>
                            </ul>
                        </div>
                    </div>
                )
                }

            </div>
        </div>
    )
}

export default Cakecal;