import React from "react";

const Sun = ({ color = "#ffffff" }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ fill: color }}
    >
      <path d="M12.0003 18.8763C8.20875 18.8763 5.12402 15.7916 5.12402 12C5.12402 8.20845 8.20875 5.12372 12.0003 5.12372C15.7917 5.12372 18.8767 8.20845 18.8767 12C18.8767 13.2407 18.5427 14.4564 17.9106 15.5164C16.6752 17.5887 14.4105 18.8763 12.0003 18.8763ZM12.0003 6.17428C8.78799 6.17428 6.17432 8.78769 6.17432 12.0003C6.17432 15.2129 8.78799 17.826 12.0003 17.826C14.0424 17.826 15.9615 16.735 17.0084 14.9784C17.5433 14.0812 17.8261 13.0514 17.8261 12C17.8263 8.78769 15.2127 6.17428 12.0003 6.17428Z" />
      <path d="M11.9998 4.08706C11.7099 4.08706 11.4746 3.85179 11.4746 3.56191V0.709293C11.4746 0.41941 11.7099 0.184143 11.9998 0.184143C12.2896 0.184143 12.5249 0.41941 12.5249 0.709293V3.56191C12.5249 3.85179 12.2896 4.08706 11.9998 4.08706Z" />
      <path d="M11.9998 23.8159C11.7099 23.8159 11.4746 23.5807 11.4746 23.2908V20.4384C11.4746 20.1485 11.7099 19.9133 11.9998 19.9133C12.2896 19.9133 12.5249 20.1485 12.5249 20.4384V23.2908C12.5249 23.5807 12.2896 23.8159 11.9998 23.8159Z" />
      <path d="M3.56233 12.5252H0.70972C0.419837 12.5252 0.18457 12.2899 0.18457 12C0.18457 11.7101 0.419837 11.4749 0.70972 11.4749H3.56233C3.85222 11.4749 4.08748 11.7101 4.08748 12C4.08748 12.2899 3.85222 12.5252 3.56233 12.5252Z" />
      <path d="M23.2916 12.5252H20.4392C20.1493 12.5252 19.9141 12.2899 19.9141 12C19.9141 11.7101 20.1493 11.4749 20.4392 11.4749H23.2916C23.5814 11.4749 23.8167 11.7101 23.8167 12C23.8167 12.2899 23.5814 12.5252 23.2916 12.5252Z" />
      <path d="M17.9675 6.55842C17.833 6.55842 17.6989 6.50722 17.5962 6.40455C17.3911 6.19948 17.3911 5.86706 17.5962 5.66199L19.6133 3.64489C19.8184 3.43982 20.1508 3.43982 20.3558 3.64489C20.5609 3.84996 20.5609 4.18238 20.3558 4.38745L18.3387 6.40455C18.2361 6.50722 18.1016 6.55842 17.9675 6.55842Z" />
      <path d="M4.01629 20.5088C3.88186 20.5088 3.74742 20.4576 3.64501 20.3549C3.43994 20.1499 3.43994 19.8174 3.64501 19.6124L5.66211 17.5953C5.86718 17.3902 6.19987 17.3902 6.40468 17.5953C6.60975 17.8003 6.60975 18.1328 6.40468 18.3378L4.38758 20.3549C4.28517 20.4576 4.15073 20.5088 4.01629 20.5088Z" />
      <path d="M6.03339 6.55842C5.89896 6.55842 5.76452 6.50722 5.66211 6.40455L3.64501 4.38745C3.43994 4.18238 3.43994 3.84996 3.64501 3.64489C3.84982 3.43982 4.18277 3.43982 4.38758 3.64489L6.40468 5.66199C6.60975 5.86706 6.60975 6.19948 6.40468 6.40455C6.30227 6.50722 6.16783 6.55842 6.03339 6.55842Z" />
      <path d="M19.9836 20.5088C19.8491 20.5088 19.715 20.4576 19.6123 20.3549L17.5952 18.3378C17.3901 18.1328 17.3901 17.8003 17.5952 17.5953C17.8003 17.3902 18.1327 17.3902 18.3378 17.5953L20.3549 19.6124C20.5599 19.8174 20.5599 20.1499 20.3549 20.3549C20.2525 20.4576 20.118 20.5088 19.9836 20.5088Z" />
      <path d="M8.77146 4.72959C8.56534 4.72959 8.36972 4.60749 8.28596 4.40531L7.19444 1.76984C7.08337 1.50175 7.21072 1.1948 7.47855 1.08373C7.7469 0.972928 8.05358 1.10001 8.16465 1.36784L9.25644 4.00331C9.36751 4.27139 9.24016 4.57835 8.97233 4.68941C8.90643 4.71646 8.83842 4.72959 8.77146 4.72959Z" />
      <path d="M16.3213 22.9567C16.1151 22.9567 15.9198 22.8344 15.8358 22.6324L14.7442 19.997C14.6332 19.7289 14.7605 19.4219 15.0284 19.3109C15.297 19.2001 15.6034 19.3274 15.7145 19.595L16.806 22.2302C16.917 22.4983 16.7897 22.8052 16.5219 22.9163C16.4562 22.9436 16.3882 22.9567 16.3213 22.9567Z" />
      <path d="M1.56959 16.8461C1.36346 16.8461 1.16785 16.7238 1.08408 16.5218C0.973015 16.2538 1.10036 15.9468 1.36845 15.8357L4.00392 14.7442C4.27201 14.6331 4.57896 14.7608 4.69003 15.0283C4.8011 15.2964 4.67375 15.6034 4.40566 15.7144L1.77019 16.8059C1.70455 16.833 1.63654 16.8461 1.56959 16.8461Z" />
      <path d="M19.7962 9.29626C19.59 9.29626 19.3947 9.17417 19.3107 8.97198C19.1996 8.70389 19.3269 8.39694 19.5948 8.28587L22.23 7.19409C22.498 7.08328 22.8047 7.21037 22.9161 7.47819C23.0271 7.74628 22.8998 8.05323 22.632 8.1643L19.997 9.25609C19.9314 9.28313 19.8631 9.29626 19.7962 9.29626Z" />
      <path d="M15.2293 4.72953C15.1623 4.72953 15.0943 4.71666 15.0284 4.68936C14.7603 4.57855 14.6332 4.27134 14.7443 4.00325L15.8358 1.36778C15.9469 1.09969 16.2528 0.972344 16.5219 1.08341C16.79 1.19422 16.9171 1.50143 16.806 1.76952L15.7145 4.40499C15.6307 4.60743 15.4354 4.72953 15.2293 4.72953Z" />
      <path d="M7.67945 22.9567C7.61249 22.9567 7.54449 22.9436 7.47858 22.9165C7.21049 22.8054 7.08341 22.4982 7.19448 22.2304L8.28626 19.5952C8.39707 19.3274 8.70402 19.2003 8.97237 19.3111C9.24046 19.4222 9.36755 19.7294 9.25648 19.9972L8.16469 22.6324C8.08119 22.8343 7.88584 22.9567 7.67945 22.9567Z" />
      <path d="M4.20355 9.2963C4.1366 9.2963 4.06859 9.28343 4.00268 9.25612L1.36722 8.16434C1.09939 8.05327 0.972043 7.74606 1.08311 7.47823C1.19392 7.2104 1.50061 7.08279 1.76922 7.19412L4.40469 8.28591C4.67251 8.39698 4.79986 8.70419 4.68879 8.97202C4.60529 9.1742 4.40967 9.2963 4.20355 9.2963Z" />
      <path d="M22.4318 16.8461C22.3649 16.8461 22.2969 16.833 22.231 16.8059L19.5958 15.7144C19.3277 15.6033 19.2006 15.2961 19.3117 15.0283C19.4227 14.7605 19.7289 14.6331 19.9978 14.7442L22.633 15.8357C22.9011 15.9468 23.0282 16.254 22.9171 16.5218C22.8333 16.7237 22.638 16.8461 22.4318 16.8461Z" />
    </svg>
  );
};

export default Sun;