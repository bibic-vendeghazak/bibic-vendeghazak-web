import React, {Component, Fragment} from 'react'
import PeopleCount from "./PeopleCount"


export default class Children extends Component {

  state = {ageGroups: ["0-6", "6-12"]}


  handleChange = (name, value) => {
    const {max} = this.props
    let {values} = this.props

    if (values.length < value) {
      values.push("6-12")
      values = values.slice(0, max)
    }
    if (values.length > value) {
      values.pop()
    }
    this.props.onChange(name, values)
  }

  handleSelect = ({target: {name: index, value}}) => {
    const values = [...this.props.values]

    values[index] = this.state.ageGroups.includes(value) ? value : "6-12"

    this.props.onChange("children", values)
  }

  render() {
    const {
      hasFootnote, name, label, max
    } = this.props
    const values = [...this.props.values].slice(0, max)

    const {ageGroups} = this.state

    return (
      <Fragment>
        <PeopleCount
          {...{
            hasFootnote,
            name,
            label,
            max
          }}
          min={0}
          onChange={this.handleChange}
          placeholder={0}
          value={values.length}
        />
        <div className="children-age">
          {values.map((childAge, index) => {
            return (
              <div
                className="input-box child-age"
                key={index}
              >
                <label htmlFor={index}>{index+1}. gyerek</label>
                <select
                  name={index}
                  onChange={this.handleSelect}
                  value={childAge}
                >
                  {
                    ageGroups.map(ageGroup =>
                      <option
                        key={ageGroup}
                        value={ageGroup}
                      >{ageGroup} év
                      </option>
                    )
                  }
                </select>
              </div>
            )
          })}
        </div>
      </Fragment>
    )
  }
}