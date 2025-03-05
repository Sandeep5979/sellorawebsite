"use client"
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import '../../../../public/front/error.css'
import '../../../../public/front/loader.css'
import { ToastContainer, toast } from 'react-toastify';
import $ from 'jquery'
import { baseUrl } from '../../../Http/helper';


function page() {

      const [viewPassword, setViewPassword] = useState(false) 
      const [errors, setErrors] =useState({})
      const route = useRouter(); 
      const [loginData, setLoginData] = useState({
        username:'',
        password:''
      })

      const updateLoginData=(e)=>{  

        const {name, value} = e.target;
        if(value ==""){
            setErrors((preError)=>({
                ...preError,
                [name]:`${name} is required`
            }))
        }else{
          setErrors((preError)=>({
              ...preError,
              [name]:``
          }))
        } 
        setLoginData((preData)=>({
            ...preData,
            [name]:value
          })) 
      }


      
  function loginSubmit(e){
    setErrors({});
    e.preventDefault();
    $('.loaderouter').css('display','flex')
      fetch(`${baseUrl}api/front/seller-login`,{
        method:"POST",
        headers:{
          'Content-Type': 'application/json'
        },
        body:JSON.stringify(loginData)
      }).then((response)=>{ 
        if(!response.ok){
        $('.loaderouter').css('display','none') 
          throw new Error("Network Error")
        }
        return response.json()
      }).then((res)=>{
        
        if(res.status){
          // toast.success('Success! Login successfully.'); 
          setTimeout(() => {  
            sessionStorage.setItem('loginData', JSON.stringify(res.seller));
            sessionStorage.setItem('otpDataExpiration', res.expirationTime);
            route.push(`${baseUrl}sellor/login-otp`)
          }, 300);
          
        }else if(res.data.status_code==403){
          $('.loaderouter').css('display','none')  
          setErrors(res.data.errors)
        }else{
          $('.loaderouter').css('display','none')  
        }
      })
  }


  return (
    <div className="rts-register-area rts-section-gap login_outer">
      
<ToastContainer 
                position="top-center"
                autoClose={3000} // Toast disappears after 3 seconds
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
              {/* loader start */} 
         <div className="loaderouter"><div className="loader"></div></div> 
        {/* loader end */}

  <div className="container">
    <div className="row">
      <div className="col-lg-4 offset-lg-4">
        <div className="login_logo">
          <img src={`${baseUrl}front/assets/images/logo_login.png`} />
        </div>
        <div className="margin_rl">
          <div className="registration-wrapper-1 mb--40">
            <div className="row">
              <div className="col-lg-12">
                <div className="custom-form mt--20 mb--40">
                  <h3 className="log_in_account mb--20 animated fadeIn">
                    Log in Account
                  </h3>
                  {/* checkout.html */}
                  <form action="/sellor/login-otp" className="registration-form"  onSubmit={(e)=>loginSubmit(e)}>
                    <div className="input-wrapper job-input-wrapper">
                      <div className="row align-items-center">
                        <div className="col-lg-12 pb_20">
                          <div className="login2">
                            <input
                              type="text"
                              className="form-control"
                              name="username" 
                              placeholder=""
                              value={loginData.username}
                              onChange={(e)=>updateLoginData(e)}
                            />
                            <label htmlFor="name">
                              Email id or mobile number
                            </label>
                          </div>
                          
                          {errors.username && errors.username != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.username}</span>
                        ):''}
                        </div>
                        <div className="col-lg-12">
                          <div className="lable">
                            <input
                              type={`${viewPassword?'text':"password"}`}
                              className="form-control"
                              placeholder="Password"
                              name='password' 
                              value={loginData.password}
                              onChange={(e)=>updateLoginData(e)}
                            />
                              <i className={`toggle-password fa fa-fw fa-eye${!viewPassword?'-slash':""}`} onClick={()=>setViewPassword(!viewPassword)}/>
 
                          </div>
                          {errors.password && errors.password != ""? ( 
                            <span id="name_error" className="input-error-tip" style={{display: 'inline-block'}}>{errors.password}</span>
                        ):''}
                        </div>
                        <div className="forgot_password">
                          <Link href="#">Forgot Password?</Link>
                        </div>
                      </div>
                    </div>
                    <button className="rts-btn btn-primary">
                      Login{/* Request OTP */}
                    </button>
                    <div className="ter_ms"> Don’t have an account? </div>
                    <Link href="/sellor/register">
                      <div className="register_for_new">
                        Register for new account
                      </div>
                    </Link>
                    <div className="another-way-to-registration">
                      {/*<div className="registradion-top-text"> <span>Or</span> </div>
                      <div className="login-with-brand">
                        <Link href="#" className="single"> <img src={`${baseUrl}front/assets/images/form/google.svg`} alt="login"> </Link> 
                        <Link href="#" className="single faceboomk_button"> <i className="fa-brands fa-facebook-f"></i> Facebook </Link> </div> */}
                      <div className="new_customer">
                        By continuing, you agree to Sellora’s 
                        <Link href="#">Terms of Use</Link> &amp; 
                        <Link href="#">Privacy Policy</Link> 
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

  )
}

export default page