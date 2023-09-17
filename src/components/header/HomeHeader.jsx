import React, { useEffect, useState } from "react";
import style from "./style/homeheader.module.css";
import { Button, Col, Row } from "antd";

import Navigat from "./Navigat";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import i18n from "../../locale/i18next";

const HomeHeader = () => {
  const [lang, setLang] = useState();
  const { t } = useTranslation();
  useEffect(() => {
    setLang(i18n.language);
    
  }, [i18n.language]);

  return (
    <div className={style.homepage}>
      <div className={style.container}>
        <Row
          style={{
            height: "100%",
          }}
        >
          <Col
            style={{
              height: "100%",
            }}
            lg={12}
            md={24}
            sm={24}
            xs={24}
          >
            <div className={style.headertext}>
              <h2>{t("Toshkent shahar")}</h2>
              <h1>
                {`"`}{t("Barkamol avlod")}{`"`} <br />
                {t("bolalar maktabi")}
              </h1>
              <p>
                {t("Keling, koʻring, biz bilan birgalikda bolalar bilimini  yuksaltiring! Zero, Yangi Oʻzbekistonning kelajagi boʻlmish  barkamol avlodni voyaga yetkazish har birimizning burchimizdir.")}
              </p>
              <Link to={'/maktab/maktab-haqida/'}>{t("Batafsil")}</Link>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HomeHeader;
