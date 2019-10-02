import React from "react"
import {useTranslation} from "react-i18next"

import Button from "ui/Button"
import {GalleryItem} from "components/Gallery"
import Carousel from "components/Carousel"
import Section from "ui/Section"
import {Link} from "react-router-dom"

const Facilities = () => {
  const [t] = useTranslation("facilities")
  return (
    <Section
      id="szolgaltatasok"
      title={t("title")}
    >
      <Carousel
        className="gallery"
        count={3}
        item={GalleryItem}
        slider={false}
        type="szolgaltatasaink"
      />
      <div className="facilities-footer">
        <Button component={Link} to="szolgaltatasok">
          {t("more")}
        </Button>
      </div>
    </Section>
  )
}

export default Facilities