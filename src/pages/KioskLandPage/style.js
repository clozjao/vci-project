import styled from 'styled-components'

export const StyledKioskLandPage = styled.div`
    height:100%;
    display: flex;
    justify-content: center;
    position: relative;
    font-size: 18px ;
    .kiosk-container{
        a{
            color: inherit;
            text-decoration: none;
            -webkit-tap-highlight-color: transparent;
        }
        height:100%;
        width:50%;
        padding-block:10px;
        .header{
            display: flex;
            justify-content: center;
            flex-direction: column;
            line-height:1.5;
            margin-bottom: 20px;
            .title1-area{
                display: flex;
                align-items: center;
                justify-content: center;
                gap:30px;

                .title1-img{
                    width:2em;
                    height:2em;
                }
                .title1-text{
                    font-family: "Avenir Next";
                    font-weight: 700;
                    letter-spacing:4.8px;
                    color: ${({ theme }) => theme.v3.primary_color};
                }
            }
            .title2-area{
                display: flex;
                justify-content: center;
                .title2-text{
                    line-height: 1.5;
                    font-size: 1.33em;
                }
            }
        }
        .banner{
            height:25%;
            border-radius: 16px;
            margin-bottom: 20px;
            .banner-bg{
                border-radius: 16px;
                background: url('https://sprodm.uni247.xyz/images-v3/KioskLandPage/banner_bg.png') no-repeat center center;
                background-size: 100% auto;
                height:100%;
            }
        }
        .button-group{
            display: grid;
            grid-template-columns: repeat(2 ,1fr);
            grid-template-rows: repeat(2 ,1fr);
            height: 50%;
            gap: 20px;
            .button{
                border-radius: 16px;
                background: #333;
                display: flex;
                align-items: center;
                flex-direction:column;
                justify-content: center;
                gap:24px;
                width: 100%;
                height: 100%;
                .btn-bg{
                    border-radius: 16px;
                    width: 100%;
                    height: auto;
                }
                /* .popular{
                    background: url('https://sprodm.uni247.xyz/images-v3/KioskLandPage/popular1.svg') no-repeat center center;
                    background-size: 100% auto;
                }
                .live-en{
                    background: url('https://sprodm.uni247.xyz/images-v3/KioskLandPage/live_en.svg') no-repeat center center;
                    background-size: 100% auto;
                }
                .live-pt{
                    background: url('https://sprodm.uni247.xyz/images-v3/KioskLandPage/live_pt.svg') no-repeat center center;
                    background-size: 100% auto;
                } */
                .feat-icon{
                    img{
                        width: 2.5em;
                        height: 2.5em;
                        border-radius: 50%;
                    }
                }
                .sport-name{
                    font-family: 'Avenir Next';
                    font-size: 28px;
                    font-weight: 700;
                    line-height: 1.5;
                    letter-spacing: 1.92px;
                }
            }

        }
    }
    .lang-group{
        position: absolute;
        top: calc(50% - 3em - 60px);
        right: calc(12.5% - 1.6em - 72px);
        display: flex;
        flex-direction: column;
        gap: 24px;
        .lang-box{
            display: flex;
            padding: 24px 48px;
            justify-content: center;
            align-items: center;
            gap: 24px;
            border-radius: 16px;
            &.active{
                background: #333;
            }
            .lang-icon{
                width: 1.66em;
                height: 1.66em;
                border-radius: 50%; 
                img{
                    width:100%;
                    height:100%;
                }               
            }
            .lang-text{
                font-size: 1.33em;
                line-height: 2.25;
            }
        }
    }

`