import React from 'react'

const EiffelTowerSvg = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 33 29" fill="none">
  <path d="M6.26656 28.7195L4.74302 27.3684C7.3137 24.8007 9.37857 21.774 10.7563 18.4528L10.827 18.2579C12.7908 13.9332 13.9466 8.9203 13.9847 3.67221L13.9847 3.65847H16.1406C16.1021 9.17131 14.8919 14.4237 12.7204 19.2432L12.8349 18.9552C11.2829 22.7287 9.05235 25.9745 6.2397 28.7463L6.26652 28.7195L6.26656 28.7195ZM26.7334 28.7195C23.9472 25.9734 21.7166 22.7263 20.2394 19.1567L20.1651 18.9514C18.1078 14.4198 16.8977 9.1674 16.8594 3.66844V3.65462H19.0152C19.0548 8.91696 20.2122 13.9296 22.2867 18.5289L22.1773 18.2541C23.6239 21.7715 25.6875 24.7996 28.2856 27.3976L28.2569 27.3684L26.7334 28.7195ZM33 29H0V27.0879H33V29ZM20.625 4.61451H12.375V2.70244H20.625V4.61451ZM17.578 3.65847H15.422V0H17.578V3.65847ZM22.0048 14.3662H10.9952V12.4541H22.0048V14.3662ZM26.1298 21.6831H6.87023V19.771H26.1298V21.6831ZM22.6372 29H10.3628L14.5424 23.4295H18.4575L22.6372 29ZM14.3872 27.0879H18.6128L17.302 25.3415H15.698L14.3872 27.0879ZM17.578 20.727H15.422V18.2923H17.578V20.727Z" fill="#233038" fillOpacity="0.8"/>
  <path d="M6.24617 28.7528C6.78821 28.2186 7.30863 27.6668 7.80676 27.0971H11.7792L10.3583 28.9909H0.00914256V27.0971H4.99833C4.91167 27.1859 4.82441 27.2742 4.73656 27.3619L4.74302 27.3684L4.74949 27.3748L4.84994 27.4754L6.25319 28.7199L6.23328 28.7398L6.23324 28.7399L6.24612 28.7528C6.24613 28.7528 6.24615 28.7528 6.24617 28.7528ZM5.02387 27.0971H7.78247C7.38679 27.5492 6.97706 27.9899 6.55361 28.4195L6.26615 28.707L4.75636 27.368C4.84615 27.2782 4.93532 27.1879 5.02387 27.0971ZM10.3811 28.9909L11.802 27.0971H21.198L22.6189 28.9909H10.3811ZM32.9909 27.0971V28.9909H22.6418L21.2208 27.0971H25.191C25.6818 27.6575 26.1943 28.201 26.727 28.7261L26.6378 28.8166L26.7395 28.7264L28.2563 27.3812C28.2639 27.3888 28.2715 27.3964 28.2791 27.404C28.2791 27.404 28.2791 27.404 28.2791 27.404L28.2921 27.3911L28.2921 27.3911L28.2635 27.362L28.3855 27.2421L28.2571 27.356C28.1715 27.2702 28.0865 27.1839 28.0021 27.0971H32.9909ZM26.1207 19.7801V21.6739H23.8738C23.5166 21.0602 23.1812 20.4291 22.8682 19.7801H26.1207ZM21.9956 12.4632V14.357H20.7056C20.5092 13.7317 20.3292 13.1004 20.166 12.4632H21.9956ZM20.6159 2.71158V4.60537H19.0437C19.0332 4.28937 19.0268 3.97242 19.0244 3.65455L20.2303 3.64548H19.0152H17.5871V2.71158H20.6159ZM17.5688 0.00914256V2.6933H15.4312V0.00914256H17.5688ZM12.3842 2.71158H13.98L13.9756 3.65843L13.9755 3.67214C13.9733 3.98408 13.9671 4.29519 13.957 4.60537H12.3842V2.71158ZM11.0044 12.4632H12.8452C12.6821 13.1036 12.5024 13.7352 12.3069 14.357H11.0044V12.4632ZM10.8355 18.2614C11.3995 17.0192 11.8969 15.7203 12.3203 14.3753H14.5275C14.0599 15.9397 13.4948 17.4684 12.8382 18.9565L12.8264 18.9517C12.7142 19.2245 12.5985 19.4946 12.4792 19.7619H10.1807C10.3872 19.3321 10.582 18.8968 10.7647 18.4563L10.7649 18.4559L10.8354 18.2617C10.8354 18.2616 10.8354 18.2615 10.8355 18.2614ZM6.87937 19.7801H10.1516C9.84123 20.4244 9.50461 21.0561 9.14318 21.6739H6.87937V19.7801ZM7.79846 27.0788H5.04168C6.62856 25.4476 8.0141 23.6386 9.15366 21.6922H11.5321C10.4841 23.6434 9.23401 25.4359 7.79846 27.0788ZM23.8633 21.6922C25.0106 23.6619 26.3823 25.4527 27.9589 27.0788H25.1993C23.7491 25.4217 22.4885 23.6154 21.4535 21.6922H23.8633ZM25.2153 27.0971H27.9766C28.0649 27.188 28.1538 27.2783 28.2434 27.3682L26.7338 28.707C26.2073 28.1879 25.7007 27.6508 25.2153 27.0971ZM22.2828 18.5308C22.4595 18.9481 22.645 19.3584 22.8391 19.7619H20.5084C20.4191 19.5601 20.3323 19.3573 20.2479 19.1534C20.2479 19.1533 20.2479 19.1533 20.2479 19.1532L20.1737 18.9483L20.1737 18.9483L20.1734 18.9476C19.5129 17.4926 18.9397 15.9633 18.4646 14.3753H20.6922C21.1383 15.794 21.6687 17.1812 22.2783 18.5327L22.2828 18.5308ZM19.0261 4.62365C19.1165 7.3064 19.4977 9.92084 20.1425 12.4449H17.9428C17.3372 9.94204 16.9723 7.31608 16.887 4.62365H19.0261ZM19.0062 3.66377C19.0086 3.97854 19.0151 4.29242 19.0255 4.60537H16.8864C16.8767 4.2939 16.8707 3.98154 16.8685 3.66838V3.66762H17.578V3.66377H19.0062ZM16.8594 3.64548V3.64933H16.1406H15.4312V2.71158H17.5688V3.64548H16.8594ZM13.9847 2.71158H15.4129V3.64933V3.65339L14.8318 3.64933H13.9847V2.71158ZM15.422 3.66762H16.1314C16.1292 3.98105 16.1231 4.29365 16.1133 4.60537H13.9753C13.9853 4.29523 13.9915 3.98417 13.9938 3.67228V3.67225L13.9938 3.66762H15.422ZM12.8687 12.4449C13.5026 9.94975 13.8855 7.32181 13.9747 4.62365H16.1127C16.0272 7.30205 15.6649 9.91584 15.0503 12.4449H12.8687ZM14.533 14.357H12.3261C12.5215 13.7352 12.701 13.1036 12.8641 12.4632H15.0458C14.8907 13.1 14.7197 13.7313 14.533 14.357ZM10.1719 19.7801H12.4711C12.1818 20.4274 11.8719 21.0585 11.5419 21.6739H9.16436C9.52547 21.0561 9.86179 20.4244 10.1719 19.7801ZM23.8527 21.6739H21.4436C21.1108 21.0544 20.8014 20.4228 20.5165 19.7801H22.8479C23.1607 20.429 23.4958 21.0602 23.8527 21.6739ZM20.6864 14.357H18.4591C18.2732 13.7344 18.1024 13.1028 17.9472 12.4632H20.1471C20.3102 13.1004 20.4902 13.7317 20.6864 14.357ZM16.8502 3.66851C16.8524 3.98162 16.8584 4.29394 16.8681 4.60537H16.1316C16.1414 4.29365 16.1475 3.98105 16.1497 3.66762H16.8502V3.66844V3.66851ZM18.44 14.357H14.5521C14.7386 13.7313 14.9096 13.0999 15.0646 12.4632H17.9284C18.0835 13.1028 18.2542 13.7344 18.44 14.357ZM21.4229 21.6739H11.5627C11.8924 21.0585 12.202 20.4274 12.4911 19.7801H15.4129V20.727H15.422V20.7362H17.578V20.727H17.5871V19.7801H20.4965C20.7811 20.4228 21.0903 21.0544 21.4229 21.6739ZM15.4312 20.7179V19.7801H17.5688V20.7179H15.4312ZM17.5688 18.3015V19.7619H15.4312V18.3015H17.5688ZM18.453 23.4386L21.1843 27.0788H18.6174L17.3093 25.336L17.3142 25.3324H17.302H15.698V25.3263L15.6907 25.336L14.3826 27.0788H11.8157L14.547 23.4386H18.453Z" stroke="#233038" strokeOpacity="0.8" strokeWidth="0.0182851"/>
</svg>
    </div>
  )
}

export default EiffelTowerSvg
