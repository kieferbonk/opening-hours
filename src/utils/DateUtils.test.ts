import { parseOpeningTimes, convertSecondsToHours } from "./DateUtils"

describe("DateUtils", () => {
    it("converts seconds from midnight to hours/minutes", () => {
        expect(convertSecondsToHours(0)).toBe("12 AM")
        expect(convertSecondsToHours(32400)).toBe("9 AM")
        expect(convertSecondsToHours(86399)).toBe("11:59 PM")
        expect(convertSecondsToHours(99999)).toBe("11:59 PM")
        expect(convertSecondsToHours(-1)).toBe("11:59 PM")
    })

    it("remodels data from seconds to hours", () => {
        const data = {
            monday: [],
            tuesday: [],
            wednesday: [],
            thursday: [],
            friday: [
                {
                    type: "open",
                    value: 36000,
                },
            ],
            saturday: [
                {
                    type: "close",
                    value: 3600,
                },
                {
                    type: "open",
                    value: 36000,
                },
            ],
            sunday: [
                {
                    type: "close",
                    value: 3600,
                },
                {
                    type: "open",
                    value: 43200,
                },
                {
                    type: "close",
                    value: 75600,
                },
            ],
        }
        expect(parseOpeningTimes(data, 1)).toStrictEqual([
            { title: "monday", today: true },
            { title: "tuesday" },
            { title: "wednesday" },
            { title: "thursday" },
            { times: "10 AM - 1 AM", title: "friday" },
            { times: "10 AM - 1 AM", title: "saturday" },
            { times: "12 PM -  9 PM", title: "sunday" },
        ])
    })
})
