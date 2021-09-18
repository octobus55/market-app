import styled from "styled-components";

export const Label = styled.label`
input {
    display: none; /* Hide the default checkbox */
  }

  span {
    height: 10px;
    width: 10px;
    border: 1px solid grey;
    display: inline-block;
    position: relative;
  }

  [type=checkbox]:checked + span:before {
    content: '\2714';
    position: absolute;
    top: -5px;
    left: 0;
  }
`;
