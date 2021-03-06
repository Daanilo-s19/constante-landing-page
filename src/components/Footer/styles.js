import styled from "styled-components";
import { Medium } from "../../utils/styles";

export const Container = styled.footer`
  width: 100%;
  height: auto;
  background: #f0f0f5;
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 6;

  .line-border {
    width: 100%;
    height: 1px;
    padding: 0;
    background: linear-gradient(
      269.14deg,
      rgba(180, 180, 184, 0) 0.91%,
      rgba(180, 180, 184, 0.7) 51.49%,
      rgba(180, 180, 184, 0) 100%
    );
  }
  div {
    width: 80%;
    /* border-top: 1px solid #909090; */
    text-align: center;
    padding-top: 24px;
    span {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 24px;
      text-align: center;
      color: #8c8c8f;
    }
  }
  span {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #8c8c8f;
    margin-top: 40px;
  }
  a {
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 27px;
    text-align: center;
    color: #009a93;
    margin-bottom: 36px;
    cursor: pointer;
  }

  @media (max-width: ${Medium}) {
    padding: 40px 23px;
  }
`;
