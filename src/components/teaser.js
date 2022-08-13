import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { LocalizedLink as Link } from "gatsby-theme-i18n"
import { useTranslation } from "react-i18next"
import Button from 'react-bootstrap/Button';

import * as style from "../style/_style.module.scss"

export default function Teaser({ post, image }) {

  const { t } = useTranslation()
 
  return (
    <article>
      <GatsbyImage
        className={style.teaserPhoto}
        image={image}
        alt={post.frontmatter.hero_image.alt}
      />
      <div className={style.info}>
        <h3 className={style.teaserTitle}>
          <Link to={`/works/${post.frontmatter.slug}`}>
            {post.frontmatter.title}
          </Link>
        </h3>
        <p>{post.excerpt}</p>
        <Button variant="outline-light"
          className={style.seeMore}
        >{t("slider_link")}</Button>
      </div>
    </article>
  )
}