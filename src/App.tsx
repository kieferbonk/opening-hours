import React from "react"
import styled from "styled-components"
import HourTable from "./components/HourTable"
import styleConf from "./styles/StyleConf"

const App: React.FC = () => {
    return (
        <Wrapper>
            <HourTable />
        </Wrapper>
    )
}

const Wrapper = styled.div`
    ${styleConf.fonts.body};
    display: flex;
    justify-content: center;
    margin: 4vh 0 0;
    background-color: ${styleConf.colors.bgGray};
`

export default App
