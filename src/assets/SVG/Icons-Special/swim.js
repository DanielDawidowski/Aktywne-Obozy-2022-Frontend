import React from "react";
import { motion } from "framer-motion";

const SwimIcon = ({
  color = "#ffffff",
  colorArrow = "#90BE6D",
  rotate = false,
}) => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M60 26.2251H0V55.2251H60V26.2251Z" fill="#D0E8F9" />
      <path
        d="M58 44.2251C55.789 46.9611 52.211 46.9611 50 44.2251"
        stroke="#0096E6"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M41 39.1211C38.789 41.8571 35.211 41.8571 33 39.1211"
        stroke="#0096E6"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M33 45.1731C30.789 47.9091 27.211 47.9091 25 45.1731"
        stroke="#0096E6"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M19 50.1211C16.789 52.8571 13.211 52.8571 11 50.1211"
        stroke="#0096E6"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M22 32.1211C19.789 34.8571 16.211 34.8571 14 32.1211"
        stroke="#0096E6"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M10 40.1211C7.789 42.8571 4.211 42.8571 2 40.1211"
        stroke="#0096E6"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M48 51.1731C45.789 53.9091 42.211 53.9091 40 51.1731"
        stroke="#0096E6"
        strokeWidth="2"
        strokeMiterlimit="10"
        strokeLinecap="round"
      />
      <path
        d="M29.001 38.2251V32.2251H45.001V38.2251H49.001V11.8941C49.001 10.4431 49.979 9.11012 51.403 8.83412C53.318 8.46212 55.001 9.92612 55.001 11.7761C55.001 12.9711 56.05 13.9221 57.277 13.7581C58.231 13.6301 59.015 12.6291 59 11.6671C58.938 7.61212 55.409 4.38212 51.253 4.81512C47.651 5.19112 45.001 8.39412 45.001 12.0161V16.2251H29.001V12.2911C29.001 10.8401 29.979 9.50712 31.403 9.23112C33.318 8.85912 35.001 10.3231 35.001 12.1731C35.001 13.3681 36.05 14.3191 37.278 14.1541C38.231 14.0261 39.015 13.0261 39 12.0641C38.938 8.00812 35.409 4.77812 31.253 5.21112C27.651 5.58712 25.001 8.79012 25.001 12.4121V38.2231H29.001V38.2251ZM45.001 28.2251H29.001V20.2251H45.001V28.2251Z"
        fill="#F9C74F"
      />
      <path d="M25 22.2251H0V26.2251H25V22.2251Z" fill="#4D908E" />
      <path d="M60 22.2251H49V26.2251H60V22.2251Z" fill="#4D908E" />
      <path d="M45 22.2251H29V26.2251H45V22.2251Z" fill="#4D908E" />
    </svg>
  );
};

export default SwimIcon;
