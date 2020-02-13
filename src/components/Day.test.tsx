import React from "react"
import ReactDOM from "react-dom"
import Day from "./Day"

describe("Day", () => {
	it("renders currectly with monday", () => {
		const container = document.createElement("div")
		ReactDOM.render(<Day title="monday" data="10 AM - 3:30 PM" today={true} />, container)

		expect(container.textContent).toContain('monday')
		expect(container.textContent).toContain('10 AM - 3:30 PM')
	})
})
