import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'


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
        <div className='tab-content'></div>
      </div>
    </Package>
  )
}

const Package = styled.section`
    width: 100%;
    height: 80vh;
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
    }
`;

export default Packages