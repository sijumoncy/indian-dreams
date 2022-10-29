import React from 'react'
import styled from "styled-components";
import { devices } from "../../Contents/SiteContents";

function ServiceCard({ icon, head, content }) {
    return (
        <Card>
            <div className='box'>
                <div className='icon'>
                    <img src={icon} alt="No preview" />
                </div>
                <span>{head}</span>
                <p>{content}</p>
            </div>
        </Card>
    )
}

const Card = styled.section`
    margin: .5rem .8rem .5rem .8rem;
    align-self: center;
    justify-self: center;
    .box{
        display: flex;
        flex-flow: column nowrap;
        /* background-color: #e1e7e4a7; */
        padding: 1rem;
        border-radius: .5rem;
        .icon {
            img{
                height: 10%;
                width: 10%;
            }
        }
        span{
            font-size: .8rem;
            font-weight: 600;
        }
        p{
            font-size: .7rem;
            color: #585656;
        }
    }
    @media (${devices.mobileL}){
        max-width: 80%;
    }

    @media (${devices.tabletL}){
        max-width: 80%;
        .box{
        .icon {
            img{
                height: 20%;
                width: 20%;
            }
        }
        span{
            font-size: .8rem;
            font-weight: 600;
            line-height: 2rem;
        }
        p{
            font-size: .7rem;
            color: #585656;
        }
    }
    }

    @media (${devices.laptop}){
        max-width: 80%;
        .box{
        .icon {
            img{
                height: 20%;
                width: 20%;
            }
        }
        span{
            font-size: 1rem;
            font-weight: 700;
            line-height: 2rem;
        }
        p{
            font-size: .8rem;
            color: #585656;
        }
    }
    }

    @media (${devices.laptopL}){
        max-width: 80%;
        .box{
        .icon {
            img{
                height: 20%;
                width: 20%;
            }
        }
        span{
            font-size: 1.2rem;
            font-weight: 700;
            line-height: 2.5rem;
        }
        p{
            font-size: 1rem;
            color: #585656;
        }
    }
    }

    @media (${devices.desktop}){
        max-width: 80%;
        .box{
        .icon {
            img{
                height: 15%;
                width: 15%;
            }
        }
        span{
            font-size: 2rem;
            font-weight: 700;
            line-height: 5rem;
        }
        p{
            font-size: 2rem;
            color: #585656;
        }
    }
    }
`;


export default ServiceCard