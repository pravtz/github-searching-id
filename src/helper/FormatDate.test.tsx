import {FormatDate} from "@/helper/FormatDate";

describe("FormatDate",() => {
    it("should format the date to day/month/year", () => {
        const date = FormatDate("2017-09-25T01:50:12Z")

        expect(date).toBe("24/09/2017")
    })
})