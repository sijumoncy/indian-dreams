import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { siteContent, devices } from "../Contents/SiteContents";
import CarIcon from "../Assets/Icons/car.svg";
import PlaneIcon from "../Assets/Icons/plane.svg";
import ManClimbIcon from "../Assets/Icons/man-climb.svg";
import HotelIcon from "../Assets/Icons/hotel.svg";

function Packages() {

  const [activeTab, setActiveTab] = useState('holiday')

  return (
    <Package>
      <div className='container'>
        <h5>Top Packages</h5>
        <div className='tab-seletion'>
          <div id="holiday" onClick={(e) => setActiveTab(e.target.id)}
            className={activeTab === 'holiday' ? 'active-tab' : ''}>Holiday</div>
          <div id="family" onClick={(e) => setActiveTab(e.target.id)}
            className={activeTab === 'family' ? 'active-tab' : ''}>Family</div>
          <div id="honeymoon" onClick={(e) => setActiveTab(e.target.id)}
            className={activeTab === 'honeymoon' ? 'active-tab' : ''}>Honeymoon</div>
          <div id="luxury" onClick={(e) => setActiveTab(e.target.id)}
            className={activeTab === 'luxury' ? 'active-tab' : ''}>Luxury</div>
        </div>


        <div className='tab-content'>
          {siteContent.topPackages[activeTab].map((pack) => (
            <div key={pack.id} className='content-container'>
              <div>
                <img src={pack.url} alt="No Prievew" />
              </div>

              <div className='destination'>
                <h5>{pack.name}</h5>

                <div className='locations'>
                  {pack.locations.map((location, index) => (
                    <span key={pack.id + index}>{location}</span>
                  ))}
                </div>

                <div className="details">
                  <div className="icons">
                    <img src={PlaneIcon} />
                    <img src={HotelIcon} />
                    <img src={CarIcon} />
                    <img src={ManClimbIcon} />
                  </div>
                  <div className="price">{pack.price}</div>
                </div>

                <div className="duration">{pack.time}</div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </Package>
  )
}

const Package = styled.section`
    width: 100%;
    /* height: 220vh; */
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    .container {
        h5{
            text-align: center;
        }
        .tab-seletion{
            margin-top:.8rem ;
            display: flex;
            flex-flow: row nowrap;
            gap: 2rem;
            font-weight: 400;
            font-size: small;
            justify-content: center;
            align-items: center;
            .active-tab{
                display: flex;
                flex-flow: column nowrap;
                ::after {
                    content: '';
                    margin-top: .2rem;
                    height: .2rem;
                    width: 100%;
                    border-radius: .5rem;
                    background-color: #801080;
                }
            }
        }
        .tab-content{
          margin-top: 1rem;
          display: grid;
          gap: 1rem;
          .content-container{
            background-color: #cac6c6b2;
            padding: 1rem;
            border-radius: .5rem;
            margin: 0 1rem 0 1rem ;
            img{
              width: 100%;
              height: 100%;
              border-radius: .5rem;
            }
            .destination{
              h5{
                text-align: start;
              }
              .locations{
                span{
                  font-size: .6rem;
                  background-color: #b3aaaaed;
                  padding: .2rem;
                  border-radius: .3rem;
                  margin-right: .5rem;
                }
              }
              .details{
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                gap: .2rem;
                margin-top: .7rem;
                .icons {
                  display: flex;
                  gap: 1rem;
                  img {
                    width: 5%;
                    height: 5%;
                  }
                }
                .price{
                  font-size: .75rem;
                  font-weight: 700;
                }
              }
              .duration{
                display: flex;
                margin-top: .3rem;
                font-size: .7rem;
                color: #2b2929;
                gap: .2rem;
                justify-content : end;
              }

            }
          }
        }
    }
`;

export default Packages