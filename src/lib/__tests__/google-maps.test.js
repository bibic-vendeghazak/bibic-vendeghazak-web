import {MAPS_API_KEY, MAPS_STYLE} from "../google-maps"


it("MAPS_API_KEY exists", () => {
  expect(typeof MAPS_API_KEY).toBe("string")
  expect(MAPS_API_KEY.length).toBe(39)
})

it("MAPS_STYLE exists", () => {
  expect(Array.isArray(MAPS_STYLE)).toBe(true)
  expect(MAPS_STYLE.length).toBeGreaterThan(0)
})