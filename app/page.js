import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* container//////////////// */}
      <div className="w-full flex justify-center bg-black ">
        {/* nav ber////////////////////// */}
        <div className="w-[1280px] py-[64px] flex items-center">
          <div className="shrink-0">
            <div className="flex items-center gap-7">
              {/* logooooooooooooooooooooooo///////// */}
              <img
                src="/logo.png" // public ফোল্ডারের ইমেজের নাম
                alt="Logo"
                priority // মেইন পেজ হওয়ায় ইমেজটি দ্রুত লোড করবে
                className="object-cover w-32 h-10" // -z-10 দিয়ে ইমেজটিকে লেখার পেছনে পাঠানো হয়েছে
              />
              {/* logoooooooooooooooooooo//////////// */}
              {/* Menu Part //////////////////////// */}
              <div className="flex justify-center flex-1">
                <ul className="text-[#DDDDDD] h-16 flex justify-between gap-5 items-center">
                  <li className="transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-fullafter:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                    <a href="/">Home</a>
                  </li>
                  <li className="transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-fullafter:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                    <a href="#">About Us</a>
                  </li>
                  <li className="transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-fullafter:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                    <a href="#">Tornament</a>
                  </li>
                  <li className="transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-fullafter:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                    <a href="#">Store</a>
                  </li>
                  <li className="transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-fullafter:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                    <a href="#">Team</a>
                  </li>
                  <li className="transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-fullafter:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                    <a href="#">FAQ</a>
                  </li>
                  <li className="transition-colors duration-300 hover:text-white relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:transition-all after:duration-300 hover:after:w-fullafter:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-right after:scale-x-0 after:bg-white after:transition-transform after:duration-300 hover:after:origin-left hover:after:scale-x-100">
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              {/* Menu Part///////////////////////// */}
            </div>
            {/* button part////////////////////// */}
            <div className="shrink-0">
              <div>
                {/* World icon////////////// */}
                <div>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g filter="url(#filter0_d_11_23)">
                      <path
                        d="M13.9645 6.13027C13.3796 2.52874 12 0 10.3945 0C8.78908 0 7.4095 2.52874 6.8246 6.13027H13.9645ZM6.52206 10.002C6.52206 10.8974 6.57047 11.7564 6.65518 12.5832H14.1299C14.2146 11.7564 14.263 10.8974 14.263 10.002C14.263 9.10668 14.2146 8.24763 14.1299 7.42085H6.65518C6.57047 8.24763 6.52206 9.10668 6.52206 10.002ZM19.6199 6.13027C18.4663 3.39181 16.1307 1.27445 13.2465 0.419439C14.2307 1.78262 14.9084 3.83545 15.2634 6.13027H19.6199ZM7.53859 0.419439C4.65843 1.27445 2.3188 3.39181 1.16916 6.13027H5.5257C5.87665 3.83545 6.55433 1.78262 7.53859 0.419439V0.419439ZM20.0516 7.42085H15.4247C15.5095 8.2678 15.5579 9.13491 15.5579 10.002C15.5579 10.8691 15.5095 11.7362 15.4247 12.5832H20.0475C20.2694 11.7564 20.3944 10.8974 20.3944 10.002C20.3944 9.10668 20.2694 8.24763 20.0516 7.42085ZM5.23123 10.002C5.23123 9.13491 5.27964 8.2678 5.36435 7.42085H0.737535C0.519708 8.24763 0.390625 9.10668 0.390625 10.002C0.390625 10.8974 0.519708 11.7564 0.737535 12.5832H5.36031C5.27964 11.7362 5.23123 10.8691 5.23123 10.002V10.002ZM6.8246 13.8738C7.4095 17.4753 8.78908 20.004 10.3945 20.004C12 20.004 13.3796 17.4753 13.9645 13.8738H6.8246ZM13.2505 19.5846C16.1307 18.7296 18.4703 16.6122 19.624 13.8738H15.2674C14.9124 16.1686 14.2348 18.2214 13.2505 19.5846ZM1.16916 13.8738C2.32283 16.6122 4.65843 18.7296 7.54262 19.5846C6.55836 18.2214 5.88068 16.1686 5.5257 13.8738H1.16916V13.8738Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_11_23"
                        x="-3.60938"
                        y="0"
                        width="28.0038"
                        height="28.004"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood
                          flood-opacity="0"
                          result="BackgroundImageFix"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_11_23"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_11_23"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </div>
                {/* World icon end//////////// */}
                {/* Sing in part///////////////// */}
                <div className="flex justify-between">
                  <svg
                    width="14"
                    height="11"
                    viewBox="0 0 14 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.5924 5.71543L8.9978 10.3092C8.58757 10.7193 7.8765 10.4322 7.8765 9.84433V7.21933H4.15704C3.7933 7.21933 3.50067 6.92675 3.50067 6.56308V3.93808C3.50067 3.57441 3.7933 3.28183 4.15704 3.28183H7.8765V0.656832C7.8765 0.0716753 8.58484 -0.218168 8.9978 0.191988L13.5924 4.78574C13.8468 5.04277 13.8468 5.45839 13.5924 5.71543ZM5.251 10.1725V9.07871C5.251 8.89824 5.10331 8.75058 4.92281 8.75058H2.6255C2.14142 8.75058 1.75033 8.35957 1.75033 7.87558V2.62558C1.75033 2.1416 2.14142 1.75058 2.6255 1.75058H4.92281C5.10331 1.75058 5.251 1.60293 5.251 1.42246V0.328707C5.251 0.148238 5.10331 0.000581563 4.92281 0.000581563H2.6255C1.176 0.000581563 0 1.17636 0 2.62558V7.87558C0 9.3248 1.176 10.5006 2.6255 10.5006H4.92281C5.10331 10.5006 5.251 10.3529 5.251 10.1725Z"
                      fill="white"
                    />
                  </svg>
                  <h1>Sing In</h1>
                </div>
                {/* Sing in part end////////////// */}
              </div>
            </div>
            {/* button part end//////////////////////// */}
          </div>
        </div>
        {/* nav ber end////////////////// */}
      </div>
      {/* container end//////////// */}
    </>
  );
}
