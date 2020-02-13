import React from "react"
import {render} from "react-dom"
import HourTable from "./HourTable"

describe("HourTable", () => {
	it("renders properly", () => {
		const container = document.createElement("div")
		render(<HourTable />, container)

		expect(container.textContent).toContain('Opening hours')
		expect(container.textContent).toContain('monday')
		expect(container.textContent).toContain('tuesday')
		expect(container.textContent).toContain('wednesday')
		expect(container.textContent).toContain('thursday')
		expect(container.textContent).toContain('friday')
		expect(container.textContent).toContain('saturday')
		expect(container.textContent).toContain('sunday')
	})
})
