const fontFamilies = {
    brand: "'Roboto', sans-serif",
}

const colors = {
    black: "#202125",
    white: "#FFFFFF",
    green: "#5BCB02",
    bgGray: "#F8F8F8",
    uiGray: "#EEEEEE",
    textGray: "#A1A2A4",
}

const fonts = {
    headingLarge: `
        font-family: ${fontFamilies.brand};
        font-weight: 700;
        font-size: 24px;
        line-height: 30px;
        color: ${colors.black};
    `,
    headingMedium: `
        font-family: ${fontFamilies.brand};
        font-weight: 500;
        font-size: 16px;
        line-height: 22px;
        color: ${colors.black};
    `,
    body: `
        font-family: ${fontFamilies.brand};
        font-weight: 400;
        font-size: 16px;
        line-height: 22px;
        color: ${colors.black};
    `,
    noticePositive: `
        font-family: ${fontFamilies.brand};
        font-weight: 500;
        font-size: 12px;
        line-height: 16px;
        color: ${colors.green};
        text-transform: uppercase;
    `,
}

interface IExport {
	colors: any;
	fonts: any;
}

const StyleConf:IExport = {
    colors,
    fonts,
}

export default StyleConf
