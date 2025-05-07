import * as React from "react"
import { useTranslation } from "react-i18next"

import Seo from "../components/seo"
import Layout from "../components/layout"

import * as style from "../style/_style.module.scss"

const Prices = () => {
  
  const { t } = useTranslation()

  return (
    <Layout>
      <Seo title={t("seo_title_prices")} description={t("seo_description_prices")} />

      <div className={style.container}>
        <h1 className={style.title}>{t("prices")}</h1>

        <h2 className={style.bundlesListTitle}>{t("wedding_bundles")}</h2>
        <div className={style.bundlesList}>
          <div className={style.bundle}>
            <h3 className={style.bundleTitle}>{t("bundle1")}</h3>
            <ul>
              <li className={style.bundleItem}>{t("bundle11")}</li>
              <li className={style.bundleItem}>{t("bundle12")}</li>
              <li className={style.bundleItem}>{t("bundle13")}</li>
            </ul>
            <div className={style.price}>{t("bundle1price")}</div>
          </div>
          <div className={style.bundle}>
            <h3 className={style.bundleTitle}>{t("bundle2")}</h3>
            <ul>
              <li className={style.bundleItem}>{t("bundle21")}</li>
              <li className={style.bundleItem}>{t("bundle22")}</li>
              <li className={style.bundleItem}>{t("bundle23")}</li>
            </ul>
            <div className={style.price}>{t("bundle2price")}</div>
          </div>
          <div className={style.bundle}>
            <h3 className={style.bundleTitle}>{t("bundle3")}</h3>
            <ul>
              <li className={style.bundleItem}>{t("bundle31")}</li>
              <li className={style.bundleItem}>{t("bundle32")}</li>
              <li className={style.bundleItem}>{t("bundle33")}</li>
              <li className={style.bundleItem}>{t("bundle34")}</li>
              <li className={style.bundleItem}>{t("bundle35")}</li>
            </ul>
            <div className={style.price}>{t("bundle3price")}</div>
          </div>
          <div className={style.bundle}>
            <h3 className={style.bundleTitle}>{t("bundle4")}</h3>
            <ul>
              <li className={style.bundleItem}>{t("bundle41")}</li>
              <li className={style.bundleItem}>{t("bundle42")}</li>
              <li className={style.bundleItem}>{t("bundle43")}</li>
              <li className={style.bundleItem}>{t("bundle44")}</li>
            </ul>
            <div className={style.price}>{t("bundle4price")}</div>
          </div>
        </div>

        <h2 className={style.bundlesListTitle}>{t("studio_bundles")}</h2>
        <div className={style.bundlesList}>
          <div className={style.bundle}>
            <h3 className={style.bundleTitle}>{t("bundle5")}</h3>
            <ul>
              <li className={style.bundleItem}>{t("bundle51")}</li>
              <li className={style.bundleItem}>{t("bundle52")}</li>
              <li className={style.bundleItem}>{t("bundle53")}</li>
              <li className={style.bundleItem}>{t("bundle54")}</li>
              <li className={style.bundleItem}>{t("bundle55")}</li>
            </ul>
          </div>
          <div className={style.bundle}>
            <h3 className={style.bundleTitle}>{t("bundle6")}</h3>
            <ul>
              <li className={style.bundleItem}>{t("bundle61")}</li>
            </ul>
          </div>
        </div>

      </div>     
    </Layout>
  )
}

export default Prices

