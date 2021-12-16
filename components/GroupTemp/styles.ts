import styled from 'styled-components';

export const Wrapper = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-family: Inter;
    text-transform: uppercase;
    justify-content: space-between;
    padding: 5px;
    box-sizing: border-box;
    background-image: url('images/jpg/nuvens.jpg');
    background-repeat: no-repeat;
    background-size: cover;

    .nameDay{
        color: #61618d;
        font-weight: 800;
        font-size: 30px;
    }



    .icon{
        display: flex;
        height: 100%;
        align-items: center;
        width: 100%;
        justify-content: space-around;
      
        svg{
            width: 40px;
            height: 40px;
            color: #ebbf04; 
            animation: gira 8s linear infinite;  
        }
    }

@keyframes gira {
    to {
        transform: rotate(360deg);
    }
}


`
export const CardsDaysWeek = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .textTemp{
        display: flex;
        align-items: center;
        font-size: 15px;
        color: #b7b7c3;
    }

    .number{
        font-size: 30px;
        margin: 0 7px;
    }



`
