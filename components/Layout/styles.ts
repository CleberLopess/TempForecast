import styled from 'styled-components'
import { BreackPoints } from '../../utils/MediaQueries'


export const Wrapper = styled.main`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    p{
        margin: 0;
    }


    section{
        max-width: 300px;
    }


    ${BreackPoints.TABLET}{
        section{
            max-width: 720px;
        }
    }

    ${BreackPoints.NOTEBOOK}{
        section{
            max-width: 1170px;
        }
    }

    ${BreackPoints.DESKTOP}{
        section{
            max-width: 1670px;
        }
    }

`