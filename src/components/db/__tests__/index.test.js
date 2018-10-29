import {Database} from ".."
import {submitReservation, normalizeReservation} from "../reservation"


jest.mock("../reservation", () => ({submitReservation: jest.fn(), normalizeReservation: jest.fn()}))

describe("Database component", () => {
  const props = {location: {search: "", pathname: "foglalas"}}
  const wrapper = mount(
    <Database {...props}>
      <div>Content</div>
    </Database>
  )

  it("renders correctly", () => {
    expect(wrapper).toHaveLength(1)
  })

  describe("updated by url", () => {
    it("updated state", () => {
      wrapper.instance().updateByURL("szoba=1")
      expect(wrapper.state("reservation").roomId).toBe(1)
    })

    it("message form", () => {
      wrapper.setProps({location: {...props.location, pathname: "uzenet"}})
      wrapper.instance().updateByURL("tema=reggeli", true)
      expect(wrapper.state("reservation").foodService).toBe("breakfast")
    })

    it("query needs to be translated", () => {
      wrapper.instance().updateByURL("tema=reggeli")
      expect(wrapper.state("reservation").foodService).toBe("breakfast")
    })
  })


  describe("submitting reservation", () => {
    it("submitReservation is invoked", () => {
      wrapper.instance().handleSubmitReservation()
      expect(submitReservation).toBeCalled()
    })
  })

})