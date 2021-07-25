import styled from "styled-components";

export const Container = styled.div`
    width: 80%;
    margin: auto;

    .nav{
        display: flex;
        align-items: center;
        justify-content: space-between;

        .cart{
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    section {
        heigth: 100vh;
        width: 100%;
        background: #dcdcdc;      
        display: flex;
        justify-content: space-around;
        
        .product-content{
            display: grid;
            text-align: center;
            heigth: 300px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;

        }
    }
    
`