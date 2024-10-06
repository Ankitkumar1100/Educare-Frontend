/* eslint-disable no-unused-vars */

import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  padding: 20px;
  flex-wrap: wrap;

  .card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    padding: 15px;
    transition: transform 0.3s ease;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      transform: scale(1.05);
    }

    svg {
      height: 30px;
      width: 30px;
      cursor: pointer;
    }

    .instagram {
      fill: #e1306c;
    }
    .twitter {
      fill: #1da1f2;
    }
    .dribble {
      fill: #ea4c89;
    }
    .codepen {
      fill: #333;
    }
    .uiverse {
      fill: url(#paint0_linear_501_142);
    }
    .discord {
      fill: #7289da;
    }
    .github {
      fill: #181717;
    }
  }
`;

const Button = () => {
  return (
    <StyledWrapper>

      <div><h2>Our Socials</h2></div>
      {/* Instagram Icon */}
      <div className="card">
        <svg
          fillRule="nonzero"
          height="30px"
          width="30px"
          viewBox="0,0,256,256"
          className="instagram"
        >
          <g transform="scale(8,8)">
            <path d="M11.46875,5c-3.55078,0 -6.46875,2.91406 -6.46875,6.46875v9.0625c0,3.55078 2.91406,6.46875 6.46875,6.46875h9.0625c3.55078,0 6.46875,-2.91406 6.46875,-6.46875v-9.0625c0,-3.55078 -2.91406,-6.46875 -6.46875,-6.46875zM11.46875,7h9.0625c2.47266,0 4.46875,1.99609 4.46875,4.46875v9.0625c0,2.47266 -1.99609,4.46875 -4.46875,4.46875h-9.0625c-2.47266,0 -4.46875,-1.99609 -4.46875,-4.46875v-9.0625c0,-2.47266 1.99609,-4.46875 4.46875,-4.46875zM21.90625,9.1875c-0.50391,0 -0.90625,0.40234 -0.90625,0.90625c0,0.50391 0.40234,0.90625 0.90625,0.90625c0.50391,0 0.90625,-0.40234 0.90625,-0.90625c0,-0.50391 -0.40234,-0.90625 -0.90625,-0.90625zM16,10c-3.30078,0 -6,2.69922 -6,6c0,3.30078 2.69922,6 6,6c3.30078,0 6,-2.69922 6,-6c0,-3.30078 -2.69922,-6 -6,-6zM16,12c2.22266,0 4,1.77734 4,4c0,2.22266 -1.77734,4 -4,4c-2.22266,0 -4,-1.77734 -4,-4c0,-2.22266 1.77734,-4 4,-4z" />
          </g>
        </svg>
      </div>

      {/* Twitter Icon */}
      <div className="card">
        <svg height="30px" width="30px" viewBox="0 0 48 48" className="twitter">
          <path d="M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429" />
        </svg>
      </div>

      {/* Dribble Icon */}
      <div className="card">
        <svg height="30px" width="30px" viewBox="0 0 40 40" className="dribble">
          <path d="M20,38.5C9.799,38.5,1.5,30.201,1.5,20S9.799,1.5,20,1.5S38.5,9.799,38.5,20S30.201,38.5,20,38.5z" />
          <path
            d="M20,2c9.925,0,18,8.075,18,18s-8.075,18-18,18S2,29.925,2,20S10.075,2,20,2 M20,1 C9.507,1,1,9.507,1,20s8.507,19,19,19s19-8.507,19-19S30.493,1,20,1L20,1z"
            fill="#ea4c89"
          />
          <path
            d="M28.352 36.914c0 0-3.032-21.087-15.63-34.292M1.269 17.848c0 0 24.2 2.117 32.075-11.102M7.804 34.152c0 0 8.624-19.807 31.058-12.194"
            strokeMiterlimit={10}
            stroke="#ea4c89"
            fill="none"
          />
        </svg>
      </div>

      {/* CodePen Icon */}
      <div className="card">
        <svg height="30px" width="30px" viewBox="0 0 24 24" className="codepen">
          <path d="M12 0l-12 12 12 12 12-12-12-12zm0 3.6l3.6 3.6-3.6 3.6-3.6-3.6 3.6-3.6zm0 16.8l-3.6-3.6 3.6-3.6 3.6 3.6-3.6 3.6zm6-5.4l3.6-3.6-3.6-3.6v7.2zM4.8 15.6l3.6 3.6v-7.2l-3.6 3.6z" />
        </svg>
      </div>

      {/* Uiverse Icon */}
      <div className="card">
        <svg height="30px" width="30px" viewBox="0 0 24 24" className="uiverse">
          <defs>
            <linearGradient
              id="paint0_linear_501_142"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop
                offset="0%"
                style={{ stopColor: "#45aaf2", stopOpacity: 1 }}
              />
              <stop
                offset="100%"
                style={{ stopColor: "#4bbf9f", stopOpacity: 1 }}
              />
            </linearGradient>
          </defs>
          <path
            d="M12 0l-12 12 12 12 12-12-12-12z"
            fill="url(#paint0_linear_501_142)"
          />
        </svg>
      </div>

      {/* Discord Icon */}
      <div className="card">
        <svg height="30px" width="30px" viewBox="0 0 24 24" className="discord">
          <path d="M20.03 3.6c-1.17 0-2.25.4-3.12 1.07-.61-.56-1.4-.89-2.25-.89s-1.64.33-2.25.89C12.42 4.01 11.36 3.6 10.19 3.6 8.06 3.6 6.21 5.48 6.21 8.06c0 2.26 1.63 4.16 3.77 4.77-.16.5-.25 1.02-.25 1.57 0 2.53 2.28 4.36 5.02 4.36s5.02-1.83 5.02-4.36c0-.55-.09-1.07-.25-1.57 2.14-.61 3.77-2.51 3.77-4.77 0-2.58-1.85-4.46-3.98-4.46zM15.74 13c-.82 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5 1.5.68 1.5 1.5-.68 1.5-1.5 1.5zM8.26 13c-.82 0-1.5-.68-1.5-1.5s.68-1.5 1.5-1.5 1.5.68 1.5 1.5-.68 1.5-1.5 1.5z" />
        </svg>
      </div>

      {/* GitHub Icon */}
      <div className="card">
        <svg height="30px" width="30px" viewBox="0 0 24 24" className="github">
          <path d="M12 0c-6.627 0-12 5.373-12 12 0 5.305 3.438 9.8 8.205 11.388.6.111.82-.26.82-.577 0-.285-.011-1.239-.017-2.243-3.338.724-4.042-1.607-4.042-1.607-.545-1.382-1.33-1.748-1.33-1.748-1.088-.743.083-.728.083-.728 1.204.085 1.835 1.237 1.835 1.237 1.068 1.831 2.804 1.303 3.487.996.108-.775.418-1.303.76-1.603-2.665-.303-5.467-1.334-5.467-5.928 0-1.313.47-2.389 1.237-3.228-.124-.303-.537-1.527.117-3.176 0 0 1.008-.322 3.302 1.23.957-.266 1.986-.399 3.003-.404 1.017.005 2.046.138 3.003.404 2.293-1.552 3.302-1.23 3.302-1.23.655 1.649.241 2.873.118 3.176.768.839 1.237 1.915 1.237 3.228 0 4.6-2.807 5.619-5.474 5.911.429.368.815 1.094.815 2.207 0 1.593-.014 2.873-.014 3.257 0 .32.215.694.825.577C20.563 21.8 24 17.305 24 12c0-6.627-5.373-12-12-12z" />
        </svg>
      </div>

      {/* Stack Overflow Icon */}
      <div className="card">
        <svg
          height="30px"
          width="30px"
          viewBox="0 0 24 24"
          className="stackoverflow"
        >
          <path d="M17.052 3.23c.06.217.06.45.06.68 0 .03 0 .06 0 .09.226.242.438.491.626.756.118.138.228.289.314.45.076.157.096.327.063.49-.02.107-.077.186-.144.264l-8.67 9.774a2.009 2.009 0 01-.152.178c-.272.265-.668.251-.965-.005l-.183-.176-.177-.183c-.216-.22-.238-.578-.035-.817l6.053-6.4c-.285-.014-.572-.063-.857-.063-1.304 0-2.57.182-3.77.508-.202.057-.402.127-.603.2l-2.195.885c-.095.037-.183.074-.268.097l-.008.001c-.001.001-.002.001-.004.002-.105.037-.217.072-.327.117-.213.091-.428.174-.645.265-.012.004-.025.007-.038.012l-.092.038c-.112.043-.217.086-.323.129-.05.022-.099.045-.147.068-.183.063-.388.14-.614.223-.063.026-.13.059-.194.092l-2.582 1.094c-.013.006-.027.011-.04.017-.056.027-.109.057-.165.086-.022.011-.046.025-.069.038-.063.025-.126.052-.192.075-.097.035-.191.067-.287.096-.034.009-.066.02-.1.03-.234.061-.497.097-.785.097-1.688 0-3.34-.667-4.54-1.88C1.659 14.47 1 12.83 1 11c0-3.57 2.89-6.5 6.5-6.5 1.13 0 2.19.28 3.12.77 1.02.49 1.91 1.17 2.67 2.07.4.54.76 1.12 1.07 1.74.01.019.022.04.03.061l.004.008c.094.184.17.375.25.563.132.294.285.616.45.926.107.232.233.466.368.685.075.119.17.233.289.35l.063.064c.294.296.308.751.02 1.048l-.051.06c-.292.302-.746.308-1.043.03l-.063-.064c-.186-.186-.47-.187-.656-.001-.019.019-.035.04-.053.057l-.006.006c-.164.164-.358.308-.56.43-.051.027-.101.055-.152.082-.032.017-.064.036-.096.052-.103.055-.215.095-.324.145-.07.028-.14.058-.211.085-.025.01-.051.021-.076.031-.09.034-.19.06-.287.09-.058.021-.116.046-.177.065-.14.041-.304.06-.487.06-.489 0-.986-.02-1.55-.186-.073-.022-.144-.048-.218-.071l-.12-.025c-.41-.09-.828-.181-1.257-.281-.212-.057-.426-.116-.641-.175-.028-.008-.057-.016-.085-.024l-.01-.004c-.25-.068-.513-.134-.77-.195C6.157 7.743 6 7.418 6 7c0-.55.44-1 1-1h5c.552 0 1 .45 1 1 0 .163.013.328.037.495.145.055.289.116.429.188l3.246 1.509c.167.082.326.16.486.232.085.042.169.091.254.142.015.008.031.016.046.023.06.029.121.058.183.084.083.034.168.069.254.086h.01c.064.015.128.027.194.038.159.018.332.028.516.028h2c.553 0 1 .448 1 1 0 .043-.002.086-.007.129l-.15 1.23c-.035.294-.076.577-.131.847-.173 1.09-.493 2.19-.927 3.28-.012.034-.028.064-.041.096-.084.244-.167.484-.251.722-.046.122-.085.25-.132.372-.134.268-.284.516-.451.748-.035.057-.074.11-.112.168-.19.33-.387.661-.613.977-.103.138-.196.285-.307.42-.205.292-.49.546-.814.756-.175.103-.356.201-.547.293-.004.002-.008.004-.012.006-.09.037-.183.062-.279.084-.088.02-.178.03-.271.03-.058 0-.115-.002-.173-.007-.154-.011-.3-.025-.447-.05-.158-.027-.314-.063-.47-.105-.004 0-.008.001-.012.001h-.006c-.274.043-.547.078-.817.078-.309 0-.623-.029-.929-.089-.003 0-.006-.001-.009-.001h-.003c-.297-.045-.579-.093-.854-.15l-.068-.012c-.019 0-.037-.002-.056-.002-1.117 0-2.084-.263-2.954-.777-1.012-.392-1.76-1.006-2.297-1.804-.036-.057-.074-.113-.111-.17-.057-.079-.11-.153-.169-.228-.049-.067-.111-.138-.163-.204-.236-.297-.471-.548-.718-.774-.075-.059-.147-.12-.224-.174-.214-.17-.408-.36-.591-.566l-.005-.006C2.796 17.73 1 15.91 1 13c0-5.52 4.48-10 10-10 2.76 0 5.26 1.07 7.15 2.8z" />
        </svg>
      </div>

      {/* LinkedIn Icon */}
      <div className="card">
        <svg
          height="30px"
          width="30px"
          viewBox="0 0 24 24"
          className="linkedin"
        >
          <path d="M19 0h-14c-2.206 0-4 1.794-4 4v16c0 2.206 1.794 4 4 4h14c2.206 0 4-1.794 4-4v-16c0-2.206-1.794-4-4-4zm-11 20h-3v-8h3v8zm-1.5-9.086c-1.034 0-1.5-.681-1.5-1.5s.465-1.5 1.5-1.5 1.5.681 1.5 1.5-.465 1.5-1.5 1.5zm13.5 9.086h-3v-4.204c0-1.01-.021-2.31-1.407-2.31-1.408 0-1.621 1.097-1.621 2.224v4.29h-3v-8h3v1.095c.394-.75 1.354-1.83 3.074-1.83 3.28 0 3.891 2.261 3.891 5.209v3.526z" />
        </svg>
      </div>
    </StyledWrapper>
  );
};

export default Button;
