import { Button, Dropdown } from 'antd'
import React from 'react'
import { useTranslation } from "react-i18next";
import i18n from '../../locale/i18next';
import style from './style/style.module.css'
import arrowDown from '../../assets/navbar/arrowDown.svg'

const Tillar = () => {

  const { t } = useTranslation();

  const items = [
    {
      key: "1",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("uz");
          }}
        >
          UZ
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("ru");
          }}
        >
          RU
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div
          onClick={() => {
            i18n.changeLanguage("en");
          }}
        >
          EN
        </div>
      ),
    },
  ];

  if (t("check") === "uz") {
    items.splice(0, 1);
  }
  if (t("check") === "ru") {
    items.splice(1, 1);
  }
  if (t("check") === "en") {
    items.splice(2, 1);
  }

  return (
    <Dropdown
              menu={{
                items,
              }}
              placement="bottom"
              className={style.dropdown}
            >
              <Button style={{ textTransform: "uppercase" }}>
                {t("check")} <img src={arrowDown} />
              </Button>
            </Dropdown>
  )
}

export default Tillar