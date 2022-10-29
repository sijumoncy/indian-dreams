import React, { useRef, useEffect, useState } from 'react'
import styled from "styled-components";
import { siteContent, devices } from "../Contents/SiteContents";
// import SafeIcon from "../Assets/Icons/safe.svg";


function testimonial() {
  const [current, setCurrent] = useState(0)
  // const [totalPages, setTotalPages] = useState(0)
  const ref = useRef(null)
  const [filteredTestimony, setFilteredTestimony] = useState([])
  const totalPages = siteContent.testimonials.length

  // const next = () => {
  //   if (current >= totalPages) return
  //   else setCurrent(current + 1)
  // }

  // const prev = () => {
  //   if (current === 0) return
  //   else setCurrent(current - 1)
  // }

  const desired = e => {
    setCurrent(Number(e.target.id))
  }

  useEffect(() => {
    const start = current * 2
    const end = start + 2
    if (end > totalPages - 1) {
      // console.log({ filter: siteContent.testimonials.slice(start) });
      setFilteredTestimony(siteContent.testimonials.slice(start))
    } else {
      // console.log({ filter: siteContent.testimonials.slice(start, end) });
      setFilteredTestimony(siteContent.testimonials.slice(start, end))
    }
  }, [current])

  // useEffect(() => {
  //   setTotalPages(siteContent.testimonials.length)
  // }, [])


  return (
    <Section id='testimonial'>
      <div className='content'>
        <h5>Testimonial</h5>
        <h4>Stories From Our Clients</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ducimus nesciunt magnam sunt nobis temporibus unde quaerat aliquam facilis quasi cum fugit ad, dolorum ab dolore commodi quisquam neque modi.</p>
      </div>

      <div className='box-scroll'>
        {filteredTestimony.map((data) => (
          <div className='box-container' ref={ref}>
            <div className='testimony'>
              <p>
                {data.comment}
                <span>
                  <a href='#'>read more</a>
                </span>
              </p>
            </div>
            <div className='profile'>
              <div className='pic'>
                <img src={data.profile} alt='profile' />
              </div>
              <div className='info'>
                <span className='name'>{data.name}</span>
                <span className='place'>{data.place}</span>
              </div>
            </div>
          </div>

        ))}
        <div className='scroll-btn'>
          {[...Array(Math.ceil((totalPages / 2))).keys()].map((element) => (
            <div
              className={element === current && 'active-scroll'}
              onClick={desired}
              id={element}
              key={element}
            />
          ))}
        </div>
      </div>

    </Section>
  )
}

const Section = styled.section`
    width: 100%;
    margin: 3rem 0 3rem 0;
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    .content{
        h5{
            color: #801080;
        }
        p{
            max-width: 23em;
            font-size: x-small;
            word-wrap: break-word;
            color: var(--gray-light);
        }
    }
    @media (${devices.tabletM}){
      .content{
        p{
          max-width: 40em;
        }     
      }
    }
    @media (${devices.tablet}){
      margin: 5rem 0 5rem 0;
      flex-flow: row nowrap;
      .content{
        p{
          max-width: 23em;
        }     
      }
    }
    @media (${devices.laptopL}){
      .content{
        h5{
          font-size: xx-large;
        }
        h4{
          font-size: larger;
        }
        p{
          max-width: 30em;
          font-size: medium;
        }     
      }
    }
    @media (${devices.desktop}){
      margin: 10rem 0 10rem 0;
      .content{
        h5{
          font-size: 3rem;
        }
        h4{
          font-size: 2rem;
        }
        p{
          max-width: 36em;
          font-size: x-large;
        }     
      }
    }
    
    .box-scroll{
        display: flex;
        flex-flow: column nowrap;
        gap: .5rem;
        .box-container{
            background-color: var(--dark);
            border-radius: .5rem;
            padding: .7rem;
            display: flex;
            flex-flow: column nowrap;
            gap: .5rem;
            color: whitesmoke;
            &:hover{
              border: 2px solid #801080;
              @media (${devices.laptopL}){
                border: 3px solid #801080;
              }  
            }
            @media (${devices.tabletM}){
              flex-flow:row nowrap ;              
            }
            @media (${devices.laptopL}){
              padding: 1.5rem;
              gap: 3rem;
            }
            @media (${devices.desktop}){
              padding: 2rem;
              gap: 4rem;
            }
            .testimony{
                p{
                  max-width: 23em;
                  font-size: x-small;
                  font-style: italic;
                  word-wrap: break-word;
                  span{
                      a{
                          text-decoration: none;
                          color: #801080;
                          font-style: italic;
                          margin-left: .2rem;
                      }
                  }
                }   
                @media (${devices.laptopL}){
                  p{
                    font-size: medium;
                    max-width: 28em;
                  }
                }
                @media (${devices.desktop}){
                  p{
                    font-size: x-large;
                    max-width: 24em;
                  }
                }           
            }
            .profile{
                display: flex;
                flex-flow: row nowrap;
                justify-content: flex-start;
                align-items: center;
                .pic{
                    flex: 1;
                    img{
                      width: 80%;
                      border-radius: 50%;
                    }
                }
                .info{
                    flex: 3;
                    display: flex;
                    flex-flow: column nowrap;
                    font-size: .7rem;
                    .name{
                      display: inline-block;
                    }
                    .place{
                      color: #801080;
                      display: inline-block;                      
                    }
                }
              @media (${devices.tablet}){
                .pic{
                    img{
                      width: 70%;
                      border-radius: 50%;
                    }
                }
                .info{
                  flex: 1;
                }          
              }
              @media (${devices.laptopL}){
                .info{
                  font-size: 1rem;
                }
              }
              @media (${devices.desktop}){
                .info{
                  font-size: 1.5rem;
                }
              }
            }
        }
        .scroll-btn{
          display: flex;
          flex-flow: row;
          justify-content: center;
          .active-scroll{
            background-color: #801080;
          }
          div{
            width: 15px;
            height: 15px;
            border-radius: 15px;
            background-color: var(--dark);
            margin: 6px;
            cursor: pointer;
            @media (${devices.laptopL}){
              width: 22px;
              height: 22px;
              border-radius: 15px;
            }
            @media (${devices.desktop}){
              width: 30px;
              height: 30px;
              border-radius: 15px;
            }
          }
        }
    }
`;

export default testimonial