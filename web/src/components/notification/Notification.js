import styled from "styled-components";

const handleBgColor = (type) => {
    switch(type) {
        case 'sucess':
            return '#29A746';
        case 'alert':
            return '#DC3646';
        case 'warning':
            return '#EFC137'
        default:
            return '#29A746'
    }
}

const NotificationContainer = styled.div`
    background-color: ${({ type }) => handleBgColor(type)};
    position: absolute;
    top: 0;
    right: -300px;
    height: 70px;
    width: 300px;
    color: #fff;
    padding: 10px;
    border-radius: 5px;
    -webkit-box-shadow: -8px 7px 16px 0px rgba(0,0,0,0.2);
    -moz-box-shadow: -8px 7px 16px 0px rgba(0,0,0,0.2);
    box-shadow: -8px 7px 16px 0px rgba(0,0,0,0.2);
    font-size: 13px;
     transition:1s;
    -webkit-transition:2s;
    -moz-transition:2s;
`

export default NotificationContainer;