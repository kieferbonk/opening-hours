import React from "react"
import {render} from "react-dom"
import HourTable from "./HourTable"
import { default as weekData } from "../data/week.json"

describe("HourTable", () => {
	it("renders properly with default data", () => {
		const container = document.createElement("div")
		render(<HourTable data={weekData} />, container)

		expect(container.textContent).toContain('Opening hours')
		expect(container.textContent).toContain('mondayClosed')
		expect(container.textContent).toContain('tuesday')
		expect(container.textContent).toContain('wednesdayClosed')
		expect(container.textContent).toContain('thursday')
		expect(container.textContent).toContain('friday')
		expect(container.textContent).toContain('saturday')
		expect(container.textContent).toContain('sunday')
	})

	it("renders properly with custom data", () => {
		const customData = {
			"monday": [],
			"tuesday": [],
			"wednesday": [],
			"thursday": [],
			"friday": [],
			"saturday": [
				{
					"type": "close",
					"value": 0,
				},
				{
					"type": "open",
					"value": 123,
				},
				{
					"type": "close",
					"value": 3600,
				},
				{
					"type": "open",
					"value": 36000,
				},
				{
					"type": "close",
					"value": 53600,
				},
				{
					"type": "open",
					"value": 36000,
				},
			],
			"sunday": [
				{
					"type": "close",
					"value": 3600,
				},
				{
					"type": "open",
					"value": 43200,
				},
				{
					"type": "close",
					"value": 75660,
				},
			],
		}

		const container = document.createElement("div")
		render(<HourTable data={customData} />, container)

		expect(container.textContent).toContain('Opening hoursmondayClosedtuesdayClosedwednesdayClosedthursdayClosedfridayClosedsaturday12:02 AM -  1 AM\n 10 AM -  2:53 PM\n 10 AM - 1 AMsunday12 PM -  9:01 PM')
	})
})
