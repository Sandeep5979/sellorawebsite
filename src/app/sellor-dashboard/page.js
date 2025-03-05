import { baseUrl } from '@/Http/helper'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
  <div className="rts-navigation-area-breadcrumb">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <div className="navigator-breadcrumb-wrapper seller-central-dash-board-breadcrumb">
            <ul>
              <li><Link href="#"><img src={`${baseUrl}front/assets/images/hand_shaking.png`} />Help</Link> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mb--50">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="dash-board-boxtop_1">
            <div className="head_5">Your Dashboard <span>. Today</span></div>
            <div className="row">
              <div className="col-lg-4 col-6">
                <div className="dd_mm_box_dfd">
                  <div>Unit Sold</div>
                  <div className="bold">10</div>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="dd_mm_box_dfd">
                  <div>Sales</div>
                  <div className="bold">2500</div>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="dd_mm_box_dfd">
                  <div>Total Balance </div>
                  <div className="bold">10</div>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="dd_mm_box_dfd">
                  <div>New Order</div>
                  <div className="bold">10</div>
                </div>
              </div>
              <div className="col-lg-4 col-6">
                <div className="dd_mm_box_dfd">
                  <div>Active Listing</div>
                  <div className="bold">10</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="dash-board-boxtop_1">
            <div className="row">
              <div className="col-lg-4">
                <div className="sales">Sales : <span>₹2500</span></div>
              </div>
              <div className="col-lg-6 offset-lg-2">
                <div className="view_all_text">view all sales insights</div>
              </div>
              <div className="col-lg-12">
                <div id="datasets-example-4">
                  <table className="charts-css column multiple show-labels data-spacing-5 datasets-spacing-1">
                    <caption>
                      Front End Developer Salary
                    </caption>
                    <tbody>
                      <tr>
                        <th scope="row" className="text_2">1 Oct</th>
                        <td style={{"--size":"calc( 30 / 100 )"}}><span className="data"> 1000 </span></td>
                      </tr>
                      <tr>
                        <th scope="row" className="text_2">2 Oct</th>
                        <td style={{"--size":"calc( 60 / 100 )"}}><span className="data"> 2000 </span></td>
                      </tr><tr>
                        <th scope="row" className="text_2">3 Oct</th>
                        <td style={{"--size":"calc( 40 / 100 )"}}><span className="data"> 1300 </span></td>
                      </tr>
                      <tr>
                        <th scope="row" className="text_2"> 4 Oct</th>
                        <td style={{"--size":"calc( 40 / 100 )"}}><span className="data"> 1300 </span></td>
                      </tr>
                      <tr>
                        <th scope="row" className="text_2"> 5 Oct </th>
                        <td style={{"--size":"calc( 50 / 100 )"}}><span className="data"> 1800 </span></td>
                      </tr>
                      <tr>
                        <th scope="row" className="text_2"> 6 Oct </th>
                        <td style={{"--size":"calc( 30 / 100 )"}}><span className="data"> 1000 </span></td>
                      </tr>
                      <tr>
                        <th scope="row" className="text_2"> 7 Oct </th>
                        <td style={{"--size":"calc( 20 / 100 )"}}><span className="data"> 800 </span></td>
                      </tr>
                      <tr>
                        <th scope="row" className="text_2"> 8 Oct </th>
                        <td style={{"--size":"calc( 75 / 100 )"}}><span className="data"> 2500 </span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="stay_informed">
    <div className="container-fluid">
      <div className="row">
        <div className="col-lg-12">
          <div className="stay_informed_heding">Stay informed with updates through Alerts &amp; Notifications and Explore New
            Features.</div>
        </div>
        <div className="col-lg-3">
          <div className="boxs_1">
            <div className="heding_fl">
              <div><img src={`${baseUrl}front/assets/images/account_health.jpg`} /></div>
              <div>Account Health</div>
            </div>
            <p>Track and manage your account s
              performance with Account Health
              insights.</p>
            <div className="explore_button"><Link href="#">Explore Account Health</Link></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="boxs_1">
            <div className="heding_fl">
              <div><img src={`${baseUrl}front/assets/images/Celebration-Offers.jpg`} /></div>
              <div>Celebration Offers</div>
            </div>
            <ul>
              <li>Festive offers</li>
              <li>Big Billion Days</li>
            </ul>
            <div className="explore_button"><Link href="#">Explore Offer</Link></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="boxs_1">
            <div className="heding_fl">
              <div><img src={`${baseUrl}front/assets/images/new.jpg`} /></div>
              <div><Link href="#">Whats s New</Link></div>
            </div>
            <p>Check out our latest offers and
              exciting new deals</p>
            <div className="explore_button"><Link href="#">Explore What's New</Link></div>
          </div>
        </div>
        <div className="col-lg-3">
          <div className="boxs_1">
            <div className="heding_fl">
              <div><img src={`${baseUrl}front/assets/images/Speed-up.jpg`} /></div>
              <div>Speed up your growth</div>
            </div>
            <p>Grow your business with Sellora!
              Turn shoppers into customers with
              Sellora Sponsored Search ads.</p>
            <div className="explore_button"><Link href="#">Explore Review</Link></div>
          </div>
        </div>
        <div className="col-lg-2 offset-lg-5 mt--20">
          <div className="send"><Link href="#">Send your Feedback</Link></div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default page