import React from "react";
import { motion } from "framer-motion";

const CalendarIcon = ({
  color = "#ffffff",
  colorArrow = "#90BE6D",
  rotate = false,
}) => {
  return (
    <svg
      width="15"
      height="17"
      viewBox="0 0 15 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="arrow">
        <g id="Date">
          <g id="calendar">
            <g id="Group">
              <path
                id="Vector"
                d="M9.17972 1.17598H8.82293V0.819134C8.82293 0.36727 8.43397 0 7.95532 0C7.47635 0 7.08772 0.36727 7.08772 0.819134V1.17568H6.19737V0.819134C6.19737 0.36727 5.80841 0 5.32976 0C4.85112 0 4.46216 0.36727 4.46216 0.819134V1.17568H3.5718V0.819134C3.5718 0.36727 3.18284 0 2.7042 0C2.22555 0 1.83659 0.36727 1.83659 0.819134V1.17568H1.38102C0.619672 1.17568 0 1.74371 0 2.44162V9.59042C0 10.2883 0.619672 10.8564 1.38102 10.8564H9.17972C9.94139 10.8564 10.5607 10.2883 10.5607 9.59042V2.44162C10.5607 1.74401 9.94107 1.17598 9.17972 1.17598ZM7.57514 0.819134C7.57514 0.613904 7.74573 0.446801 7.95532 0.446801C8.16524 0.446801 8.33551 0.613904 8.33551 0.819134V2.27749C8.33551 2.48272 8.16524 2.64982 7.95532 2.64982C7.74573 2.64982 7.57514 2.48272 7.57514 2.27749V0.819134ZM4.94958 0.819134C4.94958 0.613904 5.12017 0.446801 5.32976 0.446801C5.53935 0.446801 5.70995 0.613904 5.70995 0.819134V2.27749C5.70995 2.48272 5.53935 2.64982 5.32976 2.64982C5.12017 2.64982 4.94958 2.48272 4.94958 2.27749V0.819134V0.819134ZM2.32369 0.819134C2.32369 0.613904 2.49428 0.446801 2.70387 0.446801C2.91346 0.446801 3.08406 0.613904 3.08406 0.819134V2.27749C3.08406 2.48272 2.91346 2.64982 2.70387 2.64982C2.49428 2.64982 2.32369 2.48272 2.32369 2.27749V0.819134ZM9.74838 9.59072C9.74838 9.87816 9.49329 10.112 9.17972 10.112H1.38102C1.06745 10.112 0.812365 9.87816 0.812365 9.59072V3.03765H9.74838V9.59072Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_2"
                d="M3.03658 4.3566H1.54346V5.57458H3.03658V4.3566Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_3"
                d="M5.03007 4.3566H3.53662V5.57458H5.03007V4.3566Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_4"
                d="M7.02389 4.3566H5.53076V5.57458H7.02389V4.3566Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_5"
                d="M9.01689 4.3566H7.52344V5.57458H9.01689V4.3566Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_6"
                d="M3.03658 5.98233H1.54346V7.19941H3.03658V5.98233Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_7"
                d="M5.03007 5.98233H3.53662V7.19941H5.03007V5.98233Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_8"
                d="M7.02389 5.98233H5.53076V7.19941H7.02389V5.98233Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_9"
                d="M9.01689 5.98233H7.52344V7.19941H9.01689V5.98233Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_10"
                d="M3.03658 7.60748H1.54346V8.82457H3.03658V7.60748Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_11"
                d="M5.03007 7.60748H3.53662V8.82457H5.03007V7.60748Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_12"
                d="M7.02389 7.60748H5.53076V8.82457H7.02389V7.60748Z"
                fill="#F9C74F"
              />
              <path
                id="Vector_13"
                d="M9.01689 7.60748H7.52344V8.82457H9.01689V7.60748Z"
                fill="#F9C74F"
              />
            </g>
          </g>
          <motion.path
            animate={{ rotate: rotate ? 180 : 0 }}
            id="Vector_14"
            d="M14.8326 14.579L11.8358 16.852C11.8358 16.852 11.4803 17.1967 11.4803 16.8229C11.4803 16.4477 11.4803 15.5421 11.4803 15.5421C11.4803 15.5421 11.2398 15.5421 10.8722 15.5421C9.81707 15.5421 7.89951 15.5421 7.11939 15.5421C7.11939 15.5421 6.9065 15.5928 6.9065 15.2985C6.9065 15.0034 6.9065 13.7067 6.9065 13.4956C6.9065 13.285 7.08426 13.2895 7.08426 13.2895C7.84426 13.2895 9.82668 13.2895 10.8458 13.2895C11.1767 13.2895 11.3911 13.2895 11.3911 13.2895C11.3911 13.2895 11.3911 12.5636 11.3911 12.1067C11.3911 11.6514 11.7635 11.9944 11.7635 11.9944C11.7635 11.9944 14.5635 13.928 14.8578 14.1967C15.0707 14.3932 14.8326 14.579 14.8326 14.579Z"
            fill={colorArrow}
          />
        </g>
      </g>
    </svg>
  );
};
export default CalendarIcon;
