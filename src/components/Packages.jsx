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
              <div className='img-wraper'>
                <img src={pack.url} alt="No Prievew" />
              </div>

              <div className='destination'>
                <h5>{pack.name}</h5>

                <div className='locations'>
                  {pack.locations.map((location, index) => (
                    <span className='location-item' key={pack.id + index}>{location}</span>
                  ))}
                </div>

                <div className="details">
                  <div className="icons">
                    <img src={PlaneIcon} />
                    <img src={HotelIcon} />
                    <img src={CarIcon} />
                    <img src={ManClimbIcon} />
                  </div>
                  <div className="price">&#8377;{pack.price}</div>
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
    @media (${devices.laptopL}){
      margin-top: 2rem;
    }
    @media (${devices.desktop}){
      margin-top: 3rem;
    }
    .container {
        h5{
          text-align: center;
          @media (${devices.laptopL}){
            font-size: large;
          } 
          @media (${devices.desktop}){
            font-size: xx-large;
          } 
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
            @media (${devices.laptopL}){
              margin-top: 1rem;              
              font-size: large;
              font-weight: 500;
            }
            @media (${devices.desktop}){
              margin-top: 1.2rem;
              font-size: x-large;
              font-weight: 600;
            }
        }
        .tab-content{
          margin-top: 1rem;
          display: grid;
          gap: 1rem;
          @media (${devices.tabletM}){
            grid-template-columns : repeat(2, 1fr) ;
            gap: 1rem 0;
            margin: 1rem 1rem 0 1rem;
          }
          @media (${devices.tabletL}){
            grid-template-columns : repeat(3, 1fr) ;
            margin-top: 1.5rem;
          }
          @media (${devices.desktop}){
            margin-top: 2.2rem;
          }
          .content-container{
            background-color: #cac6c6b2;
            padding: 1rem;
            border-radius: .5rem;
            margin: 0rem .5rem 0 .5rem ;
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
            @media (${devices.tabletM}){
              .img-wraper{
                width: 100%;
                height: calc(9rem + 10vw);
                margin-bottom: .8rem;
                img{}
              }
              .destination{
                .details{
                  margin-top: .8rem;
                  .icons{
                    img {
                    width: 6%;
                    height: 6%;
                  }
                  }
                }
              }
            }
            @media (${devices.tabletL}){
              .img-wraper{
                width: 100%;
                height: calc(6rem + 10vw);
                margin-bottom: .8rem;
              }
            }
            @media (${devices.laptopL}){
              .destination{
                .locations{
                  margin-top: .3rem;
                  span{
                    display: inline-block;
                    font-size: .8rem;
                    padding: .4rem;
                    margin-top: .4rem;
                  }
                }
                .details{
                  margin-top: 1rem;                
                  .price{
                    font-size: medium;
                  }
                }
                .duration{
                  font-size: medium;
                }
              }
            }
            @media (${devices.desktop}){
              padding: 2rem;
              border-radius: 1rem;
              .img-wraper{
                width: 100%;
                height: calc(11rem + 10vw);
                margin-bottom: 1rem;
                img{
                  border-radius: 1rem;
                }
              }
              .destination{
                .locations{
                  span{
                    display: inline-block;
                    font-size: 1.1rem;
                    padding: .5rem;
                    margin-top: .8rem;
                  }
                }
                .details{
                  margin-top: 1.5rem;
                  .icons {
                  img {
                    width: 7%;
                    height: 7%;
                  }
                }
                  .price{
                    font-size: x-large;
                  }
                }
                .duration{
                  font-size: x-large;
                }
              }
            }
            
          }
        }
    }
`;

export default Packages