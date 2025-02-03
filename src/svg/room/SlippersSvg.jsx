import React from 'react'

const SlippersSvg = ({className,width,height}) => {
  return (
    <div className={className}>
      <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 49 48" fill="none">
  <g clipPath="url(#clip0_4027_8418)">
    <path d="M6.00346 38.2707C8.2151 38.7041 10.4443 38.2638 12.2698 36.9427C14.857 35.0677 16.5105 32.1984 17.7743 29.3601C19.4699 25.5447 20.6318 21.4851 21.685 17.4599C22.5346 14.2053 23.3525 10.6961 22.9277 7.32111C22.7136 5.62157 22.18 4.01492 21.0496 2.6835C19.9192 1.35208 18.2061 0.557352 16.4859 0.202994L15.9242 2.19497L15.9944 2.20873L16.5561 0.216756C14.9167 -0.099758 13.1895 -0.11696 11.6098 0.467903C10.1705 1.00116 8.92071 1.89565 7.90968 3.02754C5.58922 5.62501 4.32543 9.01721 3.31439 12.2752C2.77026 14.0264 2.30687 15.7982 1.85752 17.5768C1.30988 19.7443 0.776279 21.9117 0.439268 24.1204C-0.0311432 27.2168 -0.364644 30.6915 0.7833 33.6984C1.22563 34.8578 1.88561 35.9622 2.86153 36.7672C3.83746 37.5723 4.89062 38.0401 6.07718 38.281L6.63887 36.289L6.56866 36.2752C6.01048 36.1651 5.43124 36.4335 5.27327 36.9977C5.12934 37.5069 5.4488 38.1571 6.01048 38.2672L6.08069 38.281C6.63887 38.3911 7.2181 38.1227 7.37608 37.5585C7.52001 37.0459 7.20055 36.4025 6.63887 36.289C6.42121 36.2443 6.20356 36.1927 5.99293 36.1307C5.88059 36.0963 5.76474 36.0619 5.65241 36.0207C5.56464 35.9897 5.20306 35.828 5.52252 35.9759C5.12934 35.7936 4.7818 35.5803 4.4167 35.3532C4.23766 35.2431 4.60276 35.5184 4.44478 35.3739C4.40266 35.336 4.35351 35.3016 4.31138 35.2638C4.23766 35.2018 4.16394 35.1365 4.09373 35.0711C3.9182 34.906 3.76725 34.7271 3.60577 34.5516C3.45833 34.3865 3.74619 34.7512 3.61981 34.5688C3.59524 34.5344 3.57066 34.5035 3.54609 34.4691C3.47237 34.3658 3.40216 34.2626 3.33546 34.156C3.20206 33.9427 3.07919 33.7259 2.97036 33.4989C2.94579 33.4473 2.92472 33.3957 2.89664 33.344C2.78781 33.1307 2.97738 33.5642 2.89313 33.3372C2.851 33.2271 2.80537 33.117 2.76675 33.0069C2.66494 32.7248 2.57718 32.4392 2.50346 32.1468C2.42974 31.8544 2.37006 31.5688 2.3174 31.2764C2.30687 31.2248 2.24368 30.7879 2.27879 31.0424C2.25421 30.8498 2.23315 30.6571 2.21209 30.4645C2.06113 28.8509 2.15241 27.2168 2.34549 25.6101C2.58771 23.57 3.05812 21.4404 3.57066 19.4002C4.00246 17.6869 4.43074 15.9736 4.91871 14.2741C5.82442 11.1055 6.7828 8.09176 8.68551 5.39451C8.79784 5.23625 8.91018 5.08143 9.02954 4.93006C8.89614 5.10208 9.08922 4.85437 9.10326 4.84061C9.16294 4.76836 9.22262 4.69611 9.28581 4.62387C9.54559 4.32455 9.82292 4.03556 10.1143 3.76721C10.2477 3.6468 10.3811 3.52983 10.5215 3.4163C10.5461 3.39565 10.7813 3.21676 10.5882 3.36125C10.6725 3.29932 10.7532 3.24084 10.841 3.18235C11.1429 2.97593 11.4588 2.79015 11.7853 2.63189C11.8625 2.59405 11.9433 2.55965 12.024 2.5218C12.2452 2.41859 11.8871 2.56653 12.0977 2.49084C12.2943 2.42203 12.4874 2.34978 12.684 2.29474C12.856 2.24657 13.0315 2.20185 13.2071 2.16744C13.2983 2.15024 13.3861 2.13304 13.4774 2.11928C13.5055 2.11584 13.8074 2.08143 13.5651 2.10552C13.9829 2.06423 14.4007 2.04703 14.8219 2.06423C15.0255 2.07455 15.2326 2.08832 15.4363 2.1124C15.7768 2.15024 15.2362 2.07111 15.5767 2.13304C15.7206 2.15712 15.8645 2.18121 16.0085 2.20873C16.5667 2.31538 17.1459 2.05391 17.3039 1.48625C17.4478 0.977077 17.1283 0.326847 16.5667 0.216756L16.4964 0.202994C15.9383 0.0929025 15.359 0.361251 15.2011 0.925471C15.0571 1.43809 15.3766 2.08143 15.9383 2.19497C16.3209 2.2741 16.7001 2.36699 17.0722 2.49084C17.167 2.5218 17.2617 2.55621 17.3565 2.59061C17.3425 2.58373 17.6409 2.70414 17.504 2.64565C17.3671 2.58717 17.6514 2.71446 17.6409 2.70758C17.7532 2.75919 17.8655 2.81423 17.9744 2.87272C18.2377 3.01033 18.4869 3.17203 18.7362 3.34061C18.9854 3.50919 18.5887 3.20299 18.7958 3.38877C18.859 3.44382 18.9257 3.49543 18.9889 3.55391C19.1153 3.664 19.2347 3.78098 19.3505 3.90139C19.4453 4.00116 19.5331 4.10781 19.6243 4.21102C19.8034 4.414 19.5155 4.03556 19.6629 4.26263C19.7086 4.33143 19.7577 4.3968 19.8034 4.46561C19.9719 4.71676 20.1158 4.9851 20.2527 5.25345C20.2703 5.28786 20.3826 5.54588 20.2843 5.31194C20.3159 5.39107 20.3475 5.46676 20.3791 5.54588C20.4282 5.68006 20.4774 5.81423 20.5195 5.94841C20.6248 6.28212 20.7091 6.62616 20.7758 6.9702C20.8039 7.11813 20.8284 7.26607 20.8495 7.41744C20.8179 7.19382 20.8706 7.61699 20.8776 7.69611C20.9127 8.078 20.9338 8.46332 20.9373 8.8452C20.9478 9.5952 20.9022 10.3452 20.8249 11.0883C20.7793 11.5321 20.7477 11.7626 20.6985 12.0998C20.6318 12.5401 20.5546 12.9805 20.4704 13.4174C20.3124 14.2466 20.1263 15.0723 19.9262 15.8911C19.505 17.6113 19.0135 19.3108 18.508 21.0069C17.9112 23.0126 17.3004 25.0115 16.5351 26.9587C15.8891 28.5963 15.1344 30.2064 14.1935 31.7202C13.4458 32.9209 12.863 33.7191 11.7888 34.6892C11.6659 34.7993 11.5396 34.9094 11.4132 35.0126C11.3746 35.0436 11.336 35.0746 11.2973 35.1055C11.1604 35.2225 11.4588 34.9954 11.2201 35.164C10.9814 35.3326 10.7392 35.4943 10.4864 35.6388C10.2442 35.7764 9.99845 35.8934 9.74569 36.0069C10.0476 35.8693 9.66846 36.0344 9.58069 36.0654C9.4508 36.1101 9.32442 36.1514 9.19102 36.1892C8.94178 36.258 8.69253 36.3028 8.43977 36.3544C8.21861 36.3991 8.70306 36.3303 8.47838 36.3509C8.41871 36.3544 8.35903 36.3647 8.29584 36.3681C8.16595 36.3785 8.03255 36.3888 7.90266 36.3922C7.6499 36.3991 7.39714 36.3922 7.14438 36.3716C7.0496 36.3647 6.64589 36.289 7.00045 36.3613C6.86003 36.3337 6.7161 36.3165 6.57568 36.289C6.0175 36.1789 5.43826 36.4438 5.28029 37.0115C5.13636 37.5207 5.45582 38.1709 6.0175 38.281L6.00346 38.2707Z" fill="#535D64"/>
    <path d="M5.65203 13.1936C6.78944 12.767 7.95143 12.4023 9.14501 12.1684C10.2333 11.9551 11.3637 11.8622 12.5783 11.931C15.3551 12.0824 18.0898 13.2659 20.4735 14.7968C20.9509 15.103 21.639 14.8897 21.9128 14.4253C22.2112 13.923 22.0111 13.3209 21.5337 13.0147C19.4414 11.673 17.1209 10.5755 14.6495 10.1214C12.5327 9.72918 10.3948 9.79111 8.29546 10.2418C7.20017 10.4757 6.13297 10.8163 5.08683 11.2085C4.55674 11.4081 4.19165 11.9035 4.34962 12.478C4.49004 12.9769 5.11141 13.4001 5.64501 13.2005L5.65203 13.1936Z" fill="#535D64"/>
    <path d="M2.83298 21.602C5.25173 20.8348 7.674 20.3119 10.2086 20.4082C12.7432 20.5045 15.3726 21.4059 17.4438 23.0401C17.8861 23.391 18.5005 23.4632 18.9323 23.0401C19.3009 22.6788 19.3781 21.9323 18.9323 21.5814C16.4854 19.6479 13.6173 18.5297 10.4754 18.3577C7.69506 18.2064 4.9077 18.7809 2.2748 19.6135C1.73418 19.7855 1.38313 20.3291 1.53759 20.883C1.68503 21.4025 2.28884 21.7775 2.83298 21.6054V21.602Z" fill="#535D64"/>
    <path d="M21.4597 44.5595C21.3087 44.415 21.1648 44.2671 21.0279 44.1123C20.9612 44.0366 20.8945 43.954 20.8278 43.8783C20.7821 43.8267 20.7365 43.727 20.8769 43.9437C20.8453 43.8921 20.8032 43.8439 20.7681 43.7958C20.5259 43.4621 20.3398 43.1077 20.1502 42.743C20.0519 42.5538 20.2099 42.9254 20.1713 42.7912C20.1573 42.743 20.1327 42.6948 20.1151 42.6467C20.0765 42.5504 20.0414 42.4506 20.0098 42.3543C19.9431 42.1547 19.8869 41.9483 19.8413 41.7419C19.8167 41.6352 19.7992 41.5286 19.7781 41.4219C19.7255 41.1467 19.7851 41.5733 19.7641 41.3359C19.743 41.0985 19.722 40.8577 19.7184 40.6169C19.7184 40.4001 19.7184 40.1834 19.736 39.9666C19.743 39.8428 19.7535 39.7155 19.7676 39.5916C19.7746 39.5263 19.7816 39.4643 19.7887 39.4024C19.7992 39.3233 19.7957 39.3508 19.7781 39.485C19.7851 39.4334 19.7957 39.3818 19.8027 39.3302C19.901 38.7866 20.0239 38.2499 20.1889 37.7201C20.2766 37.438 20.3714 37.1559 20.4767 36.8806C20.5329 36.7258 20.5926 36.5744 20.6558 36.4231C20.6803 36.3611 20.7084 36.2992 20.733 36.2373C20.7821 36.1237 20.7856 36.1134 20.747 36.2029C20.7681 36.1547 20.7892 36.1065 20.8102 36.0584C21.1121 35.3978 21.4386 34.7476 21.7967 34.1111C23.6748 30.774 26.1708 27.8325 28.6563 24.9254C30.9767 22.2143 33.4411 19.3451 36.4602 17.4082C37.1517 16.9643 37.9837 16.5205 38.6227 16.2935C38.9913 16.1627 39.3669 16.0526 39.753 15.977C39.8197 15.9632 39.89 15.9494 39.9567 15.9391C39.9988 15.9322 40.2726 15.8978 40.0865 15.9185C40.2902 15.8978 40.4938 15.8841 40.7009 15.8806C40.887 15.8806 41.0765 15.8806 41.2626 15.8978C41.3468 15.9047 41.4346 15.9116 41.5188 15.9219C41.3082 15.8944 41.6347 15.946 41.6452 15.9494C42.0244 16.0217 42.4035 16.1283 42.7581 16.2797C42.586 16.2075 42.916 16.3588 42.909 16.3554C43.0108 16.4036 43.1126 16.4552 43.2109 16.5102C43.3829 16.6031 43.5479 16.7029 43.7129 16.8095C44.1166 17.071 44.4256 17.3359 44.7907 17.6799C45.7666 18.5985 47.2551 17.1501 46.2791 16.2212L46.2265 16.1731C45.254 15.2476 43.7691 16.6994 44.738 17.6318C45.8614 18.7155 46.5881 19.8887 46.8338 21.399C46.8689 21.6123 46.8443 21.4884 46.8408 21.4437C46.8549 21.5504 46.8619 21.657 46.8689 21.7637C46.8794 21.9082 46.8829 22.0492 46.8864 22.1937C46.8864 22.3726 46.8864 22.5549 46.8724 22.7338C46.8654 22.8233 46.8584 22.9162 46.8513 23.0056C46.8478 23.0435 46.8057 23.3772 46.8268 23.2224C46.7179 23.9621 46.5073 24.688 46.244 25.3864C45.0504 28.5687 42.6141 31.4793 40.3393 34.0802C37.7696 37.0182 35.1437 39.9873 32.1071 42.4747C31.0645 43.3279 29.9236 44.1398 28.6668 44.8107C28.3965 44.9552 28.1227 45.0928 27.8418 45.2201C27.7892 45.2442 27.733 45.2682 27.6803 45.2923C27.6803 45.2923 27.417 45.4024 27.568 45.3405C27.7189 45.2786 27.4592 45.3818 27.4592 45.3818C27.3819 45.4127 27.3047 45.4403 27.2275 45.4678C26.7465 45.6398 26.2515 45.7809 25.746 45.8737C25.7004 45.8806 25.6512 45.891 25.6056 45.8978C25.56 45.9047 25.5108 45.9116 25.4652 45.9185C25.6196 45.8978 25.6548 45.8944 25.5705 45.9047C25.4476 45.9081 25.3212 45.9322 25.1949 45.9391C24.9562 45.9529 24.7139 45.9563 24.4717 45.9426C24.3594 45.9357 24.2365 45.9082 24.1242 45.915C23.9802 45.9219 24.398 45.9632 24.1873 45.9254C24.1277 45.915 24.0645 45.9047 24.0048 45.8944C23.7836 45.8531 23.5695 45.8015 23.3554 45.7327C23.2395 45.6983 23.1307 45.6536 23.0148 45.6123C22.9516 45.5916 22.8463 45.5263 23.0991 45.6501C23.0464 45.6226 22.9903 45.602 22.9341 45.5779C22.734 45.485 22.5409 45.3818 22.3513 45.2682C22.2495 45.2063 22.1477 45.1409 22.0459 45.0721C22.0108 45.0481 21.9792 45.024 21.9476 45.0033C21.744 44.8623 21.9792 45.0377 21.9406 44.9999C21.7651 44.8382 21.572 44.6937 21.4 44.532C20.4241 43.61 18.9356 45.0618 19.9115 45.9907L19.9642 46.0389C20.9366 46.9643 22.4286 45.5091 21.4526 44.5802L21.4 44.532L19.9115 45.9907C21.3333 47.3359 23.1974 48.1306 25.1949 48.0068C27.8383 47.8416 30.2571 46.4655 32.3213 44.9311C35.6247 42.4712 38.3804 39.4196 41.1011 36.3715C43.6919 33.4643 46.3634 30.3887 47.9221 26.8038C48.6628 25.1043 49.1613 23.2499 48.9401 21.3921C48.7014 19.3623 47.7044 17.6008 46.2265 16.1765L44.738 17.6352L44.7907 17.6834L46.2791 16.2247C44.9662 14.9896 43.397 14.0882 41.568 13.8715C39.9637 13.6822 38.3769 14.1054 36.9376 14.7797C35.2947 15.5504 33.8273 16.6857 32.4862 17.8795C30.9978 19.204 29.6357 20.6593 28.3228 22.149C25.567 25.2728 22.7937 28.4724 20.6101 32.0159C19.1252 34.4276 17.8157 37.1283 17.6297 39.9838C17.4822 42.2614 18.3037 44.4426 19.9677 46.0423C20.9366 46.9747 22.4286 45.5159 21.4562 44.5836L21.4597 44.5595Z" fill="#535D64"/>
    <path d="M29.9729 36.8532C29.4358 37.3865 28.8776 37.8956 28.2843 38.3704C28.2141 38.4254 28.1439 38.4805 28.0737 38.5355C28.0351 38.5665 27.9473 38.6319 28.0386 38.5631C27.9017 38.6663 27.7648 38.7626 27.6279 38.8589C27.3646 39.0413 27.0978 39.2167 26.8239 39.3784C26.5817 39.5229 26.3325 39.6571 26.0797 39.7844C25.9533 39.8463 25.8234 39.9048 25.6971 39.9633C25.6479 39.9839 25.4584 40.0596 25.683 39.9702C25.6339 39.9908 25.5847 40.0115 25.5321 40.0287C25.0617 40.2076 24.5772 40.3452 24.0787 40.4277C23.5346 40.5206 23.18 41.2018 23.3415 41.6972C23.5311 42.2718 24.0541 42.516 24.6369 42.4197C27.3119 41.9725 29.6043 40.1422 31.4614 38.3085C31.851 37.9231 31.8826 37.2282 31.4614 36.8498C31.0401 36.4713 30.3871 36.4404 29.9729 36.8498V36.8532Z" fill="#535D64"/>
    <path d="M8.12705 31.5412C7.82866 30.227 7.63909 28.9987 7.66717 27.6398C7.67419 27.3646 7.68824 27.0859 7.71632 26.8107C7.72334 26.7453 7.73036 26.6799 7.73738 26.6146C7.75494 26.446 7.71281 26.7659 7.73738 26.6008C7.75845 26.477 7.77951 26.3531 7.80408 26.2292C7.84972 25.9919 7.9094 25.7579 7.97961 25.5274C8.01121 25.4173 8.04982 25.3072 8.08844 25.1971C8.11301 25.1318 8.24641 24.7946 8.15163 25.0148C8.37279 24.5022 8.3096 23.9104 7.77249 23.6042C7.33016 23.3497 6.55434 23.4598 6.33317 23.9758C5.21682 26.563 5.48713 29.415 6.09446 32.0951C6.21732 32.6387 6.85975 32.9586 7.38984 32.8176C7.96206 32.6627 8.24992 32.0951 8.12705 31.5481V31.5412Z" fill="#535D64"/>
    <path d="M43.3866 31.6274C42.9233 29.6974 42.2457 27.788 41.1996 26.0816C40.0306 24.179 38.4298 22.593 36.5622 21.3407C35.2668 20.4703 33.8555 19.796 32.4057 19.2077C31.8791 18.9944 31.2472 19.4382 31.1103 19.9302C30.9453 20.5219 31.3174 20.9864 31.8475 21.1997C33.9679 22.0598 35.9338 23.2123 37.51 24.7708C37.8576 25.1148 38.184 25.4761 38.493 25.8511C38.5035 25.8648 38.6158 26.0024 38.5246 25.8889C38.5561 25.9302 38.5877 25.9715 38.6193 26.0128C38.6825 26.0953 38.7457 26.1813 38.8054 26.2639C38.9564 26.4738 39.1038 26.6871 39.2407 26.9038C39.4864 27.2891 39.7146 27.6882 39.9217 28.0942C40.02 28.2903 40.1148 28.4864 40.2061 28.6825C40.2482 28.7754 40.2904 28.8648 40.329 28.9577C40.2623 28.8029 40.3957 29.1263 40.4167 29.1745C40.8064 30.1481 41.1048 31.1527 41.347 32.171C41.6595 33.4646 43.6885 32.9176 43.3796 31.6206L43.3866 31.6274Z" fill="#535D64"/>
    <path d="M37.8855 38.6456C36.6358 34.4759 34.5435 30.4231 30.7521 27.9598C29.5726 27.1926 28.2596 26.6284 26.9081 26.2259C25.5565 25.8233 25.051 27.8325 26.3464 28.2178C28.386 28.8199 30.1764 29.8658 31.6332 31.3486C32.9813 32.7178 34.0099 34.4139 34.7997 36.2339C34.8454 36.344 34.8138 36.2717 34.8068 36.2477C34.8349 36.3165 34.8664 36.3853 34.8945 36.4575C34.9437 36.5779 34.9928 36.7018 35.042 36.8222C35.1438 37.0837 35.2421 37.3451 35.3369 37.61C35.5229 38.133 35.6949 38.6628 35.8529 39.1926C36.2356 40.4655 38.2681 39.922 37.8855 38.6422V38.6456Z" fill="#535D64"/>
  </g>
  <defs>
    <clipPath id="clip0_4027_8418">
      <rect width="49" height="48" fill="white"/>
    </clipPath>
  </defs>
</svg>
    </div>
  )
}

export default SlippersSvg
