import React from "react"
import styled from "styled-components"
import { default as weekData } from "../data/week.json"
import Day from "./Day"
import styleConf from "../styles/StyleConf"
import clockIcon from "./clock.svg"
import { parseOpeningTimes } from "../utils/DateUtils"

const HourTable: React.FC = () => {
    return (
        <Wrapper>
            <Heading>Opening hours</Heading>
            {parseOpeningTimes(weekData).map((day: { title: string; times?: string; today?: boolean; }) => (
                <Day
                    key={day.title}
                    title={day.title}
                    data={day.times}
                    today={day.today}
                    closed={!day.times}
                />
            ))}

        </Wrapper>
    )
}

const Wrapper = styled.div`
    max-width: 600px;
    border-radius: 16px;
    background-color: ${styleConf.colors.white};
    margin: 0 6px;
    padding: 30px 30px 40px;
    box-shadow: 0 2px 10px rgba(32, 33, 37, 0.06);
    border: 1px solid ${styleConf.colors.uiGray};
`

const Heading = styled.h1`
    &:before {
        display: inline-block;
        content: "";
        background-image: url(${clockIcon});
        background-size: 18px 18px;
        opacity: 0.5;
        width: 18px;
        height: 18px;
        margin-right: 10px;
    }

    ${styleConf.fonts.headingLarge};
    margin: 0;
    padding: 0 0 0.3em;
    border-bottom: 2px solid ${styleConf.colors.black};
`

export default HourTable
