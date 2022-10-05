import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import { siteContent, devices } from "../Contents/SiteContents";

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
              <img src={pack.url} alt="No Prievew" />
              <div className='destination'>
                <h5>{pack.name}</h5>
                <div className='locations'>
                  {pack.locations.map((location, index) => (
                    <span key={pack.id + index}>{location}</span>
                  ))}
                </div>
                <div className="details">
                  <div className="icons">ICONS</div>
                  <div className='duration-price'>
                    <div className="price">{pack.price}</div>
                    <div className="duration">{pack.time}</div>
                  </div>
                </div>
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
    background-color: aquamarine;
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
          display: flex;
          flex-flow: column nowrap;
          margin-top: 1rem;
          .content-container{
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
                  font-size: .5rem;
                }
              }
              .details{
                display: flex;
                flex-flow: row nowrap;
                justify-content: space-between;
                align-items: center;
                gap: .2rem;
                .icons {
                  font-size: .6rem;
                }
              }
              .duration-price{
                display: flex;
                flex-flow: column nowrap;
                gap: .2rem;
                .price{
                  font-size: .6rem;
                }
                .duration{
                  font-size: .6rem;
                }
              }

            }
          }
        }
    }
`;

export default Packages