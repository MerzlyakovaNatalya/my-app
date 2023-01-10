import { api, name, params } from "../../helpers";
import style from "./MyCertificates.module.css";
import styled, { keyframes } from 'styled-components';
import { zoomIn } from 'react-animations';

const Bounce = styled.div`animation: 2s ${keyframes`${zoomIn}`}`;

export const MyCertificates = () => {
  return (
    <div className={style.wrap}>
      <h2>Сертификаты Мерзляковой Н. Е.</h2>
      <Bounce>
      {name.map((item, index) => {
        return (
          <div className={style.wrapper} key={index}>
            <p>{item.name}</p>
            <button
              className={style.button}
              onClick={() => {
                const url = api.find((i) => item.id === i.id);
                window.open(`${url.name}`, "certificates", params);
              }}
            >
              Посмотреть
            </button>
          </div>
        );
      })}
      </Bounce>
      {/* {name.map((item, index) => {
        return (
          <div className={style.wrapper} key={index}>
            <p>{item.name}</p>
            <button
              className={style.button}
              onClick={() => {
                const url = api.find((i) => item.id === i.id);
                window.open(`${url.name}`, "certificates", params);
              }}
            >
              Посмотреть
            </button>
          </div>
        );
      })} */}
    </div>
  );
};
