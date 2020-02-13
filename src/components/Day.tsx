import React from "react"
import styled from "styled-components"
import styleConf from "../styles/StyleConf"

interface IProps {
	readonly title?: string | number;
	readonly data?: string;
	readonly today?: boolean;
	readonly closed?: boolean;
}

interface ITitleProps {
	readonly today?: boolean;
}

interface ITimesProps {
	readonly inactive?: boolean;
}

const Day: React.FC<IProps> = ({ title, data, today, closed }) => {
    return (
        <Wrapper>
            <Title today={today}>{title}</Title>
            <Times inactive={closed}>{closed ? "Closed" : data}</Times>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 8px 4px 8px 0;
    border-bottom: 1px solid ${styleConf.colors.uiGray};
`

const Title = styled.div<ITitleProps>`
    ${({ today }) =>
        today &&
        `&:after {
			content: 'Today';
			${styleConf.fonts.noticePositive};
			margin-left: 1em;
		}`}
    ${styleConf.fonts.headingMedium}
    text-transform: capitalize;
`

const Times = styled.div<ITimesProps>`
    ${({ inactive }) => inactive && `color: ${styleConf.colors.textGray}`};
    text-align: right;
    padding-left: 2em;
    white-space: pre-line;

    @media (min-width: 500px) {
        padding-left: 5em;
    }
`

export default Day
