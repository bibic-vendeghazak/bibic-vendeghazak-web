import React from 'react'
import Stars from './Stars'
import {withStore} from '../db'
import {Loading} from '../shared/Elements'
import Fade from "react-reveal/Fade"
import {hu} from 'date-fns/locale'
import {formatDistance} from 'date-fns'
import {TODAY} from '../../utils/constants'

export const Feedbacks = ({feedbacks}) => {
  const rooms = Object.entries(feedbacks.rooms || {})
  const sum = rooms.reduce((acc, [_, value]) => acc + value, 0)
  const allAvg = (sum / rooms.length).toFixed(2)

  return (
    <section id="visszajelzesek">
      <h2>Visszajelzések</h2>
      <Fade up>
        <div>
          <h3>Értékelések</h3>
          <Stars
            title="Összesített"
            value={allAvg}
          />
          <div className="room-feedbacks">
            {rooms.map(([roomId, avg]) =>
              <div
                className="room-feedback"
                key={roomId}
              >
                <Stars
                  size={18}
                  title={`Szoba ${roomId}`}
                  value={avg.toFixed(2)}
                />
              </div>
            )}
          </div>
        </div>
      </Fade>
      <Fade up>
        <div>
          <h3>Önök mondták</h3>
          <ul className="feedback-list">
            {Array.isArray(feedbacks.all) ? feedbacks.all.length ?
              feedbacks.all
                // Do not show feedbacks with no real content
                .filter(({content}) => !content.includes("*"))
                .map((feedback, index) =>
                  <Feedback
                    key={index}
                    {...feedback}
                  />
                ) : <Loading/> : "Nincs visszajelzés."}
          </ul>
        </div>
      </Fade>
    </section>
  )
}

export default withStore(Feedbacks)


export const Feedback = ({
  content, roomId, timestamp
}) =>
  <li
    className="feedback-list-element"
    data-room={roomId}
  >
    <span>{roomId}</span>
    <p>{content}</p>
    <h6>{formatDistance(timestamp, TODAY, {locale: hu})}</h6>
  </li>