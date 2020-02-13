import React from "react"
import styled from "styled-components"
import HourTable from "./components/HourTable"
import styleConf from "./styles/StyleConf"
import { default as weekData } from "./data/week.json"

const App: React.FC = () => {
    return (
        <Wrapper>
            <HourTable data={weekData} />
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
