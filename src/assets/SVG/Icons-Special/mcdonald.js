import React from "react";
import { motion } from "framer-motion";

const McIcon = ({
  color = "#ffffff",
  colorArrow = "#90BE6D",
  rotate = false,
}) => {
  return (
    <svg
      width="64"
      height="50"
      viewBox="0 0 64 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.31209 0.818966C2.88872 0.818966 2.46949 0.902362 2.07835 1.06439C1.6872 1.22642 1.33181 1.46391 1.03245 1.7633C0.7331 2.06269 0.495651 2.41811 0.333665 2.80927C0.17168 3.20043 0.0883312 3.61967 0.0883789 4.04304V45.9571C0.0883789 46.8121 0.428008 47.6321 1.03256 48.2368C1.63711 48.8414 2.45708 49.1811 3.31209 49.1812H60.6882C61.5431 49.181 62.363 48.8412 62.9676 48.2366C63.5721 47.632 63.9118 46.8121 63.9119 45.9571V4.04268C63.9119 3.18766 63.5722 2.36766 62.9677 1.76304C62.3631 1.15842 61.5432 0.8187 60.6882 0.818604H3.31209V0.818966V0.818966Z"
        fill="#C23C40"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M27.0759 22.6408C27.9442 16.2191 30.807 4.63745 36.2673 4.63745C42.641 4.63745 50.1304 26.0483 50.1289 43.7749H44.2502C44.2502 25.1829 39.6966 8.43059 36.4199 8.42986C33.0019 8.42914 30.0062 19.8249 30.0062 41.5357H24.1362C24.1362 19.8249 21.1587 8.42986 17.7225 8.42986C14.452 8.42986 9.90095 25.1858 9.90095 43.7749H4.02295C4.0284 26.033 11.4988 4.63491 17.8842 4.63745C23.3365 4.63927 26.2004 16.2177 27.0759 22.6408Z"
        fill="#E8AE30"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.2344 36.651V29.8088H50.31V36.651H23.2344Z"
        fill="#C23C40"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M47.5782 30.3594H49.2821V35.9643H47.5782V30.3594ZM55.548 30.3594H56.7075L56.3139 31.8868H55.4706L55.548 30.3594ZM58.7071 31.1895C59.8405 31.1895 60.9052 31.4757 60.9107 32.5884H59.2921C59.2921 32.2049 59.0688 32.031 58.6907 32.031C58.4674 32.031 58.1638 32.1239 58.1645 32.4755C58.1645 33.058 59.0858 32.9418 59.8688 33.1742C60.5719 33.3826 61.0596 33.8021 61.0596 34.4794C61.0596 35.5169 60.2454 36.091 58.7067 36.0972C57.0939 36.1037 56.4875 35.5223 56.4817 34.4794H58.1217C58.1217 34.8734 58.3664 35.1072 58.7118 35.1072C59.1261 35.1072 59.3132 34.95 59.3132 34.6577C59.3132 34.0483 58.1834 34.0639 57.5174 33.846C57.0641 33.6978 56.652 33.3619 56.652 32.6483C56.6523 32.052 57.0997 31.1895 58.7071 31.1895V31.1895ZM23.8145 34.2658C23.532 35.38 22.6078 36.1026 21.4548 36.103C20.0628 36.103 19.0039 35.0499 19.0053 33.5253C19.0064 32.003 19.9473 30.9495 21.4548 30.948C22.7044 30.947 23.5651 31.6729 23.8229 32.7885L22.2283 32.7889C22.1063 32.4533 21.8713 32.1918 21.4544 32.1915C20.751 32.1915 20.5654 32.937 20.5658 33.525C20.5658 34.1133 20.751 34.8588 21.4544 34.8588C21.8695 34.8588 22.1041 34.5992 22.2265 34.2658H23.8145V34.2658ZM12.0611 30.3601H14.0966L14.9827 33.671L15.8688 30.3601H17.9057L18.7958 36.1026H17.1162L16.6724 32.7467L15.7547 36.1026H14.2106L13.2929 32.7467L12.8491 36.1026H11.1685L12.0611 30.3601V30.3601ZM38.1696 33.2188V35.9654H36.485V31.0686H38.1696V31.451C38.596 31.1191 38.9809 30.948 39.855 30.948C40.8047 30.948 41.5695 31.5825 41.5702 32.2485V35.9654H39.8736V33.2697C39.8743 32.8223 39.4734 32.4573 39.0372 32.4573C38.4754 32.4573 38.1958 32.9537 38.1696 33.2188V33.2188ZM53.1966 31.5542V30.3594H54.9001V35.9646H53.1966V35.6926C52.9732 35.8949 52.6794 36.1012 51.9455 36.1012C51.1193 36.1012 49.8062 35.6418 49.8054 33.6702C49.8047 31.7009 51.1175 31.1899 52.0519 31.1899C52.7299 31.1895 53.0506 31.4238 53.1966 31.5542ZM51.4291 33.6699C51.4291 34.4361 51.785 34.926 52.3711 34.926C52.7223 34.926 53.0164 34.7728 53.1973 34.4536V32.9832C53.1065 32.6585 52.7917 32.4192 52.3711 32.4188C51.7843 32.4188 51.4291 32.9036 51.4291 33.6699V33.6699ZM30.8307 33.5257C30.8318 32.0034 31.8192 30.9495 33.4007 30.948C34.9819 30.9466 35.9689 32.003 35.9697 33.5257C35.9711 35.0495 34.9808 36.103 33.4007 36.103C31.8206 36.103 30.8292 35.0499 30.8307 33.5257ZM34.3765 33.5257C34.3765 32.9374 34.1728 32.1922 33.4003 32.1918C32.6272 32.1918 32.4238 32.9374 32.4238 33.5257C32.4246 34.1137 32.6276 34.8592 33.4003 34.8592C34.1728 34.8592 34.3765 34.114 34.3765 33.5257V33.5257ZM24.4083 30.3601H27.3353C29.1663 30.3601 30.4145 31.4975 30.4145 33.2312C30.4145 34.9649 29.1667 36.1026 27.3353 36.1026H24.4083V30.3601ZM26.3446 34.7452H27.2296C27.8031 34.7452 28.501 34.3955 28.501 33.2312C28.501 32.0684 27.8031 31.7176 27.2296 31.7176H26.3446V34.7452ZM44.6087 30.9488C45.8173 30.9477 46.8138 31.3925 46.8919 32.3683V35.9646H45.1869V35.4795C44.7725 35.8346 44.3607 36.1005 43.6151 36.1005C42.7468 36.1005 42.0478 35.4145 42.0478 34.6101C42.0478 33.8057 42.5435 32.912 44.5259 32.9123C45.0372 32.9127 45.1861 32.7112 45.1869 32.4718C45.1876 32.1777 44.8477 32.0132 44.564 32.0132C44.2804 32.0132 43.9583 32.1316 43.9583 32.4392H42.3612C42.3608 31.7176 42.846 30.9506 44.6087 30.9488V30.9488ZM44.5136 33.708C44.1206 33.708 43.7568 33.9179 43.7568 34.3203C43.7568 34.5807 43.9107 34.8055 44.3127 34.8055C44.6973 34.8055 45.1077 34.5774 45.1865 34.1042V33.6564C45.0561 33.7273 44.7623 33.708 44.5136 33.708Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M52.735 39.9532H53.782C54.2998 39.9532 54.6452 40.2314 54.6452 40.5989C54.6452 40.9388 54.3833 41.1614 54.0609 41.1894V41.2003C54.5558 41.3673 54.6281 41.7127 54.6339 42.1804H54.1665C54.1495 41.6179 54.0275 41.3728 53.5317 41.3728H53.1472V42.1804H52.735V39.9532V39.9532ZM53.1468 41.0165H53.6371C54.0216 41.0165 54.1767 40.8829 54.1767 40.6319C54.1767 40.4427 54.0605 40.3087 53.7035 40.3087H53.1468V41.0165V41.0165ZM53.5924 39.179C53.8441 39.1785 54.0934 39.2277 54.326 39.3238C54.5587 39.4199 54.77 39.561 54.948 39.739C55.126 39.9169 55.2671 40.1283 55.3632 40.3609C55.4593 40.5936 55.5085 40.8429 55.508 41.0946C55.508 42.1583 54.6506 43.0102 53.5924 43.0102C52.5342 43.0102 51.6768 42.1579 51.6768 41.0946C51.6763 40.8429 51.7255 40.5936 51.8216 40.3609C51.9177 40.1283 52.0588 39.9169 52.2368 39.739C52.4147 39.561 52.6261 39.4199 52.8587 39.3238C53.0914 39.2277 53.3407 39.1785 53.5924 39.179ZM53.5924 42.8043C54.0397 42.7951 54.4657 42.6109 54.7788 42.2913C55.0919 41.9717 55.2672 41.542 55.2672 41.0946C55.2672 40.6472 55.0919 40.2175 54.7788 39.8979C54.4657 39.5783 54.0397 39.3941 53.5924 39.3849C53.1389 39.3849 52.7041 39.565 52.3834 39.8856C52.0628 40.2063 51.8827 40.6411 51.8827 41.0946C51.8827 41.548 52.0628 41.9829 52.3834 42.3036C52.7041 42.6242 53.1389 42.8043 53.5924 42.8043Z"
        fill="#E8AE30"
      />
    </svg>
  );
};

export default McIcon;