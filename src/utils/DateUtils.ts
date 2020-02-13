import add from "date-fns/add"
import format from "date-fns/format"
import last from "lodash/last"

export const convertSecondsToHours = (seconds: number | undefined) => {
	if (!seconds && seconds !== 0) return null

    const date = add(new Date(1970, 1, 1, 0, 0, 0), {
        seconds: seconds && seconds > 86399 ? 86399 : seconds,
    })
    const minuteFormat = parseInt(format(date, "m"), 10) > 0 ? ":mm" : ""

    return format(date, `h${minuteFormat} a`)
}

interface IDay {
	readonly type: string;
	readonly value?: number;
}

interface IResult {
	title: string;
	times?: string;
	today?: boolean;
}

export const parseOpeningTimes = (data: any, today = new Date().getDay()) => {
    const indexes = Object.keys(data)
    let week = []
    for (let i = 0; indexes.length > i; i++) {
		const weekday = indexes[i]
		const day = data[weekday]
		const lastDay: IDay | undefined = last(day)
        const tomorrow = indexes[i + 1]
        const result: IResult = {
            title: weekday,
        }

        if (day && day.length > 0) {
            result.times = day
                .filter((val: { type: string; }, index: number) => !(index === 0 && val.type === "close")) // filter out leading "close"-objects
                .reduce((acc: string, val: IDay) => {
                    const prefix = val.type === "open" ? "\n" : " - " // add linebreak if not first, dash if closing time
                    const hours = convertSecondsToHours(val.value)
                    if (hours) acc += acc.length ? `${prefix} ${hours}` : hours
                    return acc
                }, "")

			// if last entry is "open", fetch closing time from next entry
            if (lastDay?.type === "open" && tomorrow?.length) {
                const hours = convertSecondsToHours(
                    data[tomorrow].find((n: { type: string; }) => n.type === "close").value,
                )
                if (hours) result.times += ` - ${hours}`
            }
        }

        if (i === today - 1) result.today = true

        week.push(result)
    }

    return week
}
