import * as React from 'react';
import Svg, { Path } from 'react-native-svg';

function CurlyLineImages(props) {
  return (
    <Svg width={400} height={300} {...props} viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
      <Path d="M-448.79 172.122L-449 172.042C-372.54 146.372 -293.472 119.83 -227.117 88.8766C-222.649 86.7949 -218.271 84.6001 -214.044 82.4957C-201.57 76.2507 -189.757 70.3676 -175.034 66.4984C-167.118 64.4167 -159.113 63.1383 -150.537 62.5613C-140.942 61.9164 -130.868 62.1766 -119.743 63.3419C-90.8686 66.3853 -62.8633 71.5442 -35.7576 76.5335C-26.9123 78.1627 -17.7371 79.8484 -8.80179 81.421C62.9504 93.9677 121.989 103.516 177.04 111.458C310.95 130.782 468.337 150.083 620.327 146.757C725.721 144.449 810.457 126.969 886.947 91.7389C894.293 88.3561 901.669 84.9055 908.835 81.5567C937.02 68.3764 966.195 54.755 998.308 42.8418C1015.58 36.427 1032.34 30.9965 1049.52 26.2335C1068.8 20.8935 1088.14 16.5265 1108.65 12.8836C1202.05 -3.73601 1311.43 -4.30169 1401.24 11.3336C1440.1 18.0991 1474.58 28.089 1506.66 41.8688C1537.06 54.9247 1562.28 70.164 1582.97 83.3556L1582.7 83.4121C1538.68 55.3319 1488.37 26.6408 1401.12 11.4467C1311.37 -4.17724 1202.08 -3.61156 1108.77 12.9854C1023.52 28.1229 965.325 55.3206 909.045 81.6133C901.879 84.9508 894.503 88.4127 887.156 91.7955C850.036 108.89 811.656 121.573 769.798 130.556C747.67 135.307 724.162 139.086 699.905 141.756C674.868 144.528 648.092 146.236 620.297 146.847C608.543 147.107 596.669 147.232 584.616 147.232C525.847 147.232 463.18 144.166 394.186 137.943C313.109 130.635 235.48 119.989 176.89 111.538C121.839 103.595 62.7705 94.0469 -8.95172 81.4888C-17.887 79.9276 -27.0622 78.2418 -35.9075 76.6014C-62.9833 71.6121 -90.9885 66.4531 -119.833 63.4211C-165.859 58.5676 -189.157 70.2092 -213.834 82.5297C-218.062 84.6453 -222.439 86.8288 -226.907 88.9218C-293.262 119.898 -372.33 146.44 -448.79 172.122Z" fill="#6560E0" />
      <Path d="M-425.762 158.737L-426.002 158.635L-422.014 157.391C-362.765 138.803 -301.508 119.592 -246.367 99.9635C-230.535 94.318 -216.383 89.012 -203.07 83.7399C-198.722 81.9976 -194.434 80.1761 -190.296 78.4225C-165.439 67.8444 -141.962 57.8545 -98.0649 63.1266C-70.6893 66.4075 -44.2732 71.6683 -18.6967 76.7481L-15.0686 77.4722C-7.5126 78.9769 0.313293 80.5268 7.95926 81.9976C63.3701 92.5305 123.099 103.652 184.596 113.653C302.524 132.875 440.092 152.096 578.229 152.096C589.593 152.096 600.927 151.972 612.291 151.7C705.122 149.449 786.019 134.504 859.601 105.982C867.396 102.973 875.312 99.7372 883.078 96.3884C890.395 93.2206 897.801 89.9849 904.967 86.8624C934.621 73.8858 965.325 60.4679 998.727 48.7132C1016.72 42.3889 1034.05 37.015 1051.74 32.3086C1071.59 27.0251 1091.38 22.6921 1112.22 19.0717C1135.37 15.0554 1159.74 11.9216 1184.72 9.74938C1209.64 7.58849 1235.15 6.38926 1260.52 6.19693C1286.19 5.99328 1311.76 6.83049 1336.5 8.65196C1361.84 10.53 1386.42 13.4602 1409.51 17.3747C1450.02 24.2081 1486.66 34.2997 1521.56 48.2493C1554.12 61.2599 1581.29 75.9901 1605.82 89.9849L1605.52 90.0641C1555.74 61.6672 1499.67 32.7045 1409.3 17.4652C1365.46 10.0435 1316.95 6.33269 1267.84 6.33269C1215 6.33269 1161.51 10.6205 1112.31 19.1509C1025.68 34.2205 964.425 60.9997 905.177 86.9077C898.01 90.0415 890.634 93.2772 883.288 96.4337C875.522 99.7938 867.636 103.018 859.811 106.039C824.069 119.887 787.759 130.272 748.839 137.785C728.15 141.778 706.411 144.969 684.283 147.277C661.285 149.675 637.058 151.191 612.261 151.791C600.807 152.062 589.203 152.198 577.509 152.198C519.94 152.198 459.102 148.895 392.567 142.186C314.338 134.3 240.217 122.839 184.386 113.732C122.859 103.731 63.1302 92.6097 7.71939 82.0768C0.0734253 80.606 -7.75244 79.0561 -15.3085 77.5514L-18.9366 76.8273C-44.4231 71.7702 -70.8392 66.5207 -98.1848 63.2398C-141.872 58.0016 -165.29 67.9575 -190.056 78.5017C-194.194 80.2666 -198.452 82.0768 -202.83 83.8191C-216.143 89.0912 -230.295 94.3972 -246.157 100.043C-301.268 119.683 -362.526 138.893 -421.774 157.481L-425.762 158.737Z" fill="#6560E0" />
      <Path d="M570.403 157.188C514.063 157.188 455.024 153.647 391.008 146.451C315.687 137.989 245.074 125.702 191.972 115.95C132.903 105.168 74.5242 93.1308 24.4505 82.6884C18.5136 81.4552 12.4868 80.1542 6.66986 78.8984C4.66092 78.4685 2.65201 78.0385 0.643066 77.5973L-1.60577 77.1108C-25.7131 71.9292 -50.6299 66.5666 -76.5363 63.0368C-117.795 57.4253 -141.272 65.6615 -166.159 74.373C-170.237 75.7985 -174.465 77.2805 -178.752 78.706C-190.836 82.6997 -204.329 86.9197 -222.439 92.3841C-269.845 106.662 -321.597 121.731 -371.671 136.303C-382.015 139.313 -392.39 142.333 -402.735 145.343L-403.004 145.218C-392.66 142.198 -382.315 139.188 -371.941 136.179C-321.897 121.607 -270.144 106.537 -222.709 92.2597C-204.599 86.7952 -191.136 82.5753 -179.022 78.5816C-174.735 77.1674 -170.507 75.6853 -166.429 74.2598C-141.482 65.5145 -117.915 57.2443 -76.3864 62.8897C-50.45 66.4195 -25.5032 71.7822 -1.39584 76.9751L0.852966 77.4616C2.86191 77.8915 4.87085 78.3214 6.87979 78.7626C12.6967 80.0184 18.7235 81.3195 24.6604 82.5526C74.734 92.995 133.083 105.033 192.122 115.826C313.498 138.113 457.393 160.401 604.225 156.611C695.197 154.201 777.174 139.086 854.773 110.418C862.839 107.454 871.055 104.286 879.151 100.994C886.407 98.0522 893.753 95.0428 900.829 92.1352C932.013 79.3622 964.216 66.148 998.997 54.5403C1017.71 48.2953 1035.64 42.9892 1053.84 38.3394C1074.26 33.1125 1094.5 28.8134 1115.7 25.2157C1139.35 21.1994 1164.15 18.0768 1189.46 15.9046C1214.76 13.7324 1240.61 12.5332 1266.31 12.3182C1292.33 12.1033 1318.24 12.9065 1343.34 14.7167C1369.06 16.5721 1394.07 19.4797 1417.67 23.3716C1459.79 30.2615 1498.62 40.4663 1536.37 54.5856C1571.04 67.5396 1601.17 82.4169 1628.58 96.5588L1628.25 96.6493C1572.75 68.0034 1510.74 38.758 1417.49 23.5073C1323.79 8.06434 1213.83 8.73184 1115.88 25.3514C1027.78 40.3419 963.406 66.725 901.159 92.2483C894.053 95.1559 886.737 98.1653 879.48 101.107C871.385 104.399 863.169 107.567 855.103 110.531C817.863 124.288 780.832 134.651 741.853 142.209C720.714 146.304 698.766 149.597 676.577 151.995C653.279 154.507 628.962 156.113 604.255 156.769C593.071 157.052 581.767 157.188 570.403 157.188Z" fill="#6560E0" />
      <Path d="M563.657 162.154C539.849 162.154 515.532 161.453 490.975 160.061C458.442 158.217 424.26 155.061 389.359 150.705C316.947 141.665 249.812 128.564 199.439 118.156C146.157 107.227 93.9542 95.3138 43.4608 83.7966L41.122 83.2649C36.1746 82.1336 31.1673 80.9683 26.3398 79.8256C23.7312 79.2147 21.1526 78.6037 18.5439 78.0041L15.9652 77.4045C-6.79276 72.0985 -30.3004 66.6114 -54.8874 62.8327C-93.9868 56.8252 -117.674 63.387 -142.771 70.3449C-146.639 71.4196 -150.627 72.5284 -154.675 73.5918C-167.568 76.9633 -180.881 80.2781 -194.974 83.7853L-198.752 84.7244C-257.941 99.3641 -320.697 116.085 -379.676 131.958L-379.946 131.811C-320.967 115.938 -258.24 99.217 -199.022 84.5773L-195.244 83.6383C-181.151 80.1311 -167.838 76.8275 -154.945 73.4561C-150.897 72.3926 -146.909 71.2839 -143.041 70.2204C-117.854 63.24 -94.0468 56.6328 -54.7075 62.6856C-30.0905 66.4756 -6.55289 71.9627 16.2351 77.2687L18.8138 77.8684C21.4224 78.4793 24.031 79.0789 26.6096 79.6898C31.4671 80.8212 36.4745 81.9978 41.3919 83.1291L43.7307 83.6609C94.2241 95.1781 146.397 107.091 199.679 118.02C314.848 141.801 451.996 165.56 596.19 161.543C685.903 158.964 766.56 144.132 850.006 114.875C858.732 111.809 867.247 108.709 875.283 105.632C882.389 102.917 889.585 100.145 896.542 97.4747C929.255 84.8941 963.077 71.8722 999.208 60.4229C1018.67 54.257 1037.23 49.0188 1055.94 44.4029C1076.96 39.2326 1097.65 34.9674 1119.23 31.381C1143.4 27.3761 1168.62 24.2422 1194.26 22.0813C1219.95 19.9091 1246.16 18.6873 1272.15 18.461C1298.51 18.2347 1324.78 19.0153 1350.23 20.8029C1376.32 22.6244 1401.75 25.5206 1425.85 29.3785C1469.6 36.3251 1510.59 46.643 1551.22 60.932C1585.79 73.0827 1616.25 86.6024 1651.39 103.154L1651.03 103.267C1587.08 73.1167 1521.71 44.7876 1425.7 29.5483C1380.25 22.251 1330.95 18.6194 1281.03 18.6194C1226.61 18.6194 1171.41 22.9411 1119.44 31.5507C1029.79 46.4733 962.237 72.4718 896.902 97.6105C889.945 100.292 882.749 103.064 875.643 105.768C867.607 108.845 859.091 111.956 850.336 115.011C811.267 128.7 773.486 139.029 734.777 146.598C713.218 150.818 691.03 154.212 668.842 156.69C645.274 159.326 620.837 161.012 596.25 161.724C585.515 162.007 574.631 162.154 563.657 162.154Z" fill="#6560E0" />
      <Path d="M556.461 167.132C533.163 167.132 509.475 166.385 485.638 164.903C454.154 162.935 421.202 159.597 387.769 154.959C318.326 145.353 254.669 131.426 206.965 120.362C163.757 110.417 121.42 99.7938 80.4613 89.5211C72.9052 87.6204 65.3792 85.731 57.8531 83.853C53.7453 82.8235 49.5775 81.76 45.5596 80.7305C42.5912 79.9725 39.5028 79.1805 36.4744 78.4112L33.8658 77.7437C12.3671 72.3019 -9.8512 66.6791 -33.2089 62.6175C-70.3294 56.1688 -94.4366 61.1015 -119.923 66.317C-123.371 67.0298 -126.97 67.7538 -130.598 68.4666C-137.074 69.7337 -143.551 70.9669 -150.447 72.2906C-158.423 73.8179 -166.699 75.4018 -175.064 77.0423C-233.773 88.4915 -296.95 103.833 -356.619 118.563L-356.918 118.393C-297.22 103.663 -234.043 88.3105 -175.304 76.8612C-166.939 75.2208 -158.663 73.6369 -150.687 72.1096C-143.821 70.7972 -137.314 69.5527 -130.837 68.2856C-127.209 67.5841 -123.641 66.8488 -120.193 66.136C-107.09 63.4547 -94.7365 60.9318 -80.8538 59.857C-65.262 58.6464 -50.03 59.4723 -32.969 62.4365C-9.55136 66.498 12.6669 72.1322 34.1956 77.574L36.8042 78.2415C39.8326 79.0108 42.921 79.7914 45.8895 80.5608C49.9073 81.5903 54.0751 82.6538 58.183 83.6833C65.679 85.5613 73.235 87.4507 80.7911 89.3514C121.75 99.6241 164.087 110.247 207.294 120.181C316.257 145.444 446.748 170.696 588.214 166.442C675.408 163.727 757.085 148.747 845.269 119.298C854.384 116.255 863.199 113.2 871.475 110.236C878.341 107.77 885.327 105.247 892.074 102.803C926.286 90.4262 961.727 77.6079 999.267 66.2944C1019.48 60.2077 1038.67 55.0261 1057.95 50.4555C1079.6 45.3304 1100.76 41.0992 1122.74 37.5241C1147.42 33.5304 1173.09 30.3966 1199.02 28.2244C1225.11 26.0408 1251.67 24.819 1277.94 24.5701C1304.63 24.3212 1331.25 25.0905 1357.1 26.8554C1383.55 28.6543 1409.42 31.5166 1434.04 35.3632C1479.37 42.3663 1522.55 52.7974 1566.03 67.2447C1606.33 80.64 1643 96.2074 1674.18 109.738L1673.76 109.874C1603.51 79.3955 1532.27 50.7722 1433.83 35.5668C1387.92 28.3941 1338.15 24.819 1287.69 24.819C1232.24 24.819 1175.96 29.1294 1122.95 37.7164C1031.71 52.5711 960.858 78.1962 892.344 102.973C885.597 105.405 878.641 107.928 871.745 110.406C863.469 113.381 854.654 116.425 845.538 119.479C804.64 133.146 766.08 143.453 727.7 150.999C705.692 155.321 683.294 158.816 661.046 161.373C637.178 164.123 612.681 165.899 588.154 166.668C577.719 166.974 567.135 167.132 556.461 167.132Z" fill="#6560E0" />
      <Path d="M549.235 172.11C526.447 172.11 503.389 171.318 480.301 169.734C449.837 167.653 418.144 164.112 386.151 159.201C357.666 154.834 328.701 149.415 297.577 142.616C272.24 137.083 245.045 130.522 214.461 122.568C178.99 113.416 144.238 103.765 110.626 94.4315C98.7518 91.1392 86.4883 87.7338 74.5545 84.4529C71.1963 83.5252 67.8081 82.5862 64.5098 81.6698C61.1816 80.7421 57.7634 79.7804 54.3752 78.8527L52.0664 78.2192C31.7071 72.619 10.6882 66.8151 -11.5901 62.4481C-47.1214 55.479 -70.8089 58.6241 -98.1845 62.2784C-100.913 62.6404 -103.732 63.0138 -106.55 63.3871L-107.929 63.5681C-121.872 65.367 -136.294 67.2224 -151.406 69.4172C-209.606 77.7892 -270.804 91.1279 -333.591 105.213L-333.89 105.021C-271.073 90.9243 -209.846 77.5856 -151.616 69.2136C-136.504 67.0188 -122.082 65.1633 -108.139 63.3645L-106.76 63.1835C-103.941 62.8214 -101.123 62.4481 -98.3944 62.0747C-84.8415 60.2646 -72.0682 58.5676 -58.1556 58.1829C-42.5338 57.753 -27.6617 59.0427 -11.3203 62.2558C10.988 66.6341 32.0669 72.4379 52.4262 78.0495L54.735 78.683C58.1232 79.6107 61.5414 80.5724 64.8697 81.5001C68.1679 82.4165 71.5562 83.3668 74.9144 84.2832C86.8481 87.5641 99.1416 90.9695 110.985 94.2617C144.598 103.595 179.349 113.246 214.821 122.399C309.961 147.153 423.121 171.895 549.415 171.895C559.579 171.895 569.804 171.737 580.148 171.397C689.771 167.732 776.845 144.03 840.441 123.779C850.096 120.713 858.971 117.805 867.547 114.886C874.083 112.669 880.74 110.417 887.157 108.223C923.078 96.004 960.198 83.3668 999.238 72.2004C1043.01 59.665 1084.57 50.3426 1126.31 43.6903C1151.5 39.6966 1177.58 36.574 1203.88 34.4018C1230.36 32.2183 1257.25 30.9738 1283.85 30.7136C1338.99 30.1819 1392.3 33.7683 1442.31 41.371C1489.21 48.4306 1534.58 58.9635 1580.96 73.5919C1622.82 86.7948 1661.26 101.932 1697.03 116.312L1696.58 116.47C1616.94 84.4642 1542.82 56.7348 1442.07 41.5746C1343.04 26.505 1230.99 27.3309 1126.55 43.8826C1033.6 58.692 959.359 83.9438 887.577 108.37C881.16 110.553 874.503 112.816 867.967 115.033C859.361 117.941 850.516 120.849 840.861 123.926C797.264 137.796 759.094 147.797 720.774 155.377C698.346 159.812 675.678 163.399 653.4 166.046C629.263 168.908 604.646 170.775 580.238 171.59C569.954 171.952 559.609 172.11 549.235 172.11Z" fill="#6560E0" />
      <Path d="M542.008 177.088C519.76 177.088 497.301 176.251 474.963 174.576C445.519 172.37 415.085 168.637 384.531 163.466C357.335 158.862 329.81 153.137 300.365 145.953C276.378 140.104 250.741 133.18 221.956 124.774C192.422 116.221 163.517 107.283 135.542 98.6512C120.94 94.1371 105.858 89.476 91.2253 85.0411C88.6166 84.2491 85.948 83.4345 83.3993 82.6539C79.7413 81.5339 75.9933 80.3799 72.2452 79.2712L70.746 78.8186C51.3762 73.0035 31.3767 66.9847 10.028 62.2443C-24.6038 54.5624 -49.5806 56.1576 -78.4854 58.013C-79.8347 58.1035 -81.184 58.1827 -82.5633 58.2732C-94.6169 59.0313 -110.658 60.1174 -127.779 61.7465C-186.039 67.1996 -245.048 78.5924 -310.563 91.8179L-310.863 91.6029C-281.449 85.6746 -250.145 79.4296 -219.051 74.0669C-184.779 68.15 -154.945 64.0432 -127.899 61.5089C-110.778 59.8798 -94.7068 58.7937 -82.6532 58.0357C-81.3039 57.9452 -79.9246 57.866 -78.5753 57.7755C-49.5206 55.92 -24.4539 54.3135 10.3878 62.0407C31.7665 66.781 51.796 72.8111 71.1958 78.6263L72.695 79.0788C76.413 80.1989 80.191 81.3529 83.8491 82.4729C86.3978 83.2535 89.0664 84.0681 91.675 84.8601C106.307 89.295 121.389 93.9561 135.992 98.4702C163.967 107.102 192.872 116.04 222.406 124.593C311.879 150.727 418.923 176.85 542.188 176.85C552.053 176.85 562.007 176.681 572.112 176.33C677.057 172.585 764.221 149.913 835.673 128.236C845.658 125.204 854.833 122.353 863.678 119.525C869.765 117.579 875.942 115.599 881.939 113.687C919.539 101.638 958.429 89.1818 998.967 78.1398C1044.45 65.7515 1087.27 56.5083 1129.85 49.8673C1181.9 41.7894 1235.66 37.4224 1289.69 36.868C1345.43 36.3024 1399.56 39.8435 1450.5 47.3896C1498.95 54.4945 1546.48 65.1519 1595.8 79.95C1639.01 92.9153 1679.13 107.679 1719.82 122.919L1719.34 123.1C1648.91 96.7393 1561.26 63.9187 1450.23 47.6272C1402.73 40.5902 1352.24 37.0717 1301 37.0717C1243.97 37.0717 1185.98 41.4161 1130.09 50.0936C1035.31 64.869 957.529 89.7814 882.359 113.868C876.392 115.78 870.185 117.771 864.098 119.706C855.253 122.534 846.078 125.385 836.063 128.417C790.037 142.378 751.148 152.357 713.698 159.801C665.393 169.406 619.097 174.882 572.172 176.556C562.157 176.918 552.083 177.088 542.008 177.088Z" fill="#6560E0" />
      <Path d="M534.752 182.066C513.014 182.066 491.215 181.184 469.626 179.419C441.201 177.1 412.027 173.163 382.912 167.721C357.006 162.867 330.919 156.837 303.154 149.291C280.546 143.137 256.439 135.839 229.453 126.992C204.476 118.858 180.069 110.418 156.471 102.261C139.71 96.4682 123.879 91.0038 107.927 85.6411C106.128 85.0302 104.329 84.4306 102.53 83.8197C98.4819 82.462 94.3141 81.0479 90.1762 79.6902L90.1462 79.6789C71.556 73.5583 52.3362 67.234 31.677 62.0524C-0.795868 53.9067 -26.1925 53.2279 -58.5455 53.1713C-75.0368 53.1374 -89.9389 53.4428 -104.121 54.0877C-162.561 56.7124 -221.779 66.6684 -287.535 78.4457L-287.835 78.1968C-222.019 66.4081 -162.771 56.4409 -104.211 53.8049C-90.0289 53.1487 -75.0668 52.8545 -58.5455 52.8772C-26.0726 52.9337 -0.585968 53.6125 32.0668 61.8035C52.756 66.9964 72.0058 73.332 90.596 79.4526L90.626 79.464C94.7638 80.8216 98.9316 82.2245 102.98 83.5934C104.779 84.2043 106.578 84.8039 108.377 85.4149C124.358 90.7775 140.19 96.2419 156.951 102.034C180.549 110.192 204.956 118.62 229.933 126.766C320.425 156.464 430.917 186.173 564.047 181.24C664.824 177.405 751.838 155.638 830.846 132.672C840.201 129.979 849.646 127.184 859.781 124.141C865.268 122.489 870.755 120.838 876.242 119.174C915.612 107.284 956.3 94.9974 998.488 84.0799C1045.8 71.8273 1089.94 62.6407 1133.36 56.0223C1186.43 47.9671 1241 43.5774 1295.51 43.0004C1351.88 42.4008 1406.78 45.8967 1458.69 53.3976C1508.67 60.559 1558.38 71.3182 1610.62 86.2973C1658.41 100.009 1703.15 115.679 1742.61 129.515L1742.13 129.719C1662.04 101.638 1571.25 69.8135 1458.45 53.6578C1356.83 38.9728 1241.48 39.9119 1133.66 56.2825C1036.9 71.0354 955.461 95.6197 876.722 119.401C871.235 121.053 865.748 122.716 860.261 124.367C850.156 127.411 840.681 130.205 831.326 132.909C752.228 155.887 665.124 177.688 564.167 181.523C554.362 181.885 544.557 182.066 534.752 182.066Z" fill="#6560E0" />
      <Path d="M527.496 187.044C506.297 187.044 485.128 186.116 464.289 184.261C436.884 181.828 408.968 177.688 381.323 171.974C356.706 166.883 332.059 160.548 305.973 152.617C284.714 146.157 262.166 138.486 237.009 129.186C215.54 121.29 194.611 113.167 174.372 105.292C157.191 98.6173 140.969 92.3044 124.628 86.2177L122.499 85.4257C117.762 83.6608 112.874 81.8394 108.077 80.0971C89.2166 73.275 72.0957 67.1883 53.2956 61.837C23.0415 53.2161 -3.70444 50.0823 -34.5582 48.0458C-50.5697 46.9824 -65.5918 46.4506 -80.494 46.4167C-139.233 46.247 -198.572 54.7548 -264.537 65.0501L-264.837 64.7785C-233.893 59.9477 -203.609 55.3204 -172.995 51.8472C-138.364 47.9101 -108.109 46.0433 -80.524 46.1225C-65.5918 46.1565 -50.5098 46.6882 -34.4682 47.7517C-3.52451 49.8107 23.3413 52.9446 53.7153 61.5994C72.5154 66.9621 89.6664 73.0487 108.556 79.8821C113.384 81.6244 118.271 83.4459 122.979 85.2108L125.108 86.0027C141.419 92.0894 157.671 98.4024 174.852 105.077C195.091 112.94 216.02 121.075 237.459 128.96C315.627 157.844 410.498 186.738 527.616 186.738C536.911 186.738 546.356 186.557 555.951 186.173C656.338 182.122 744.402 159.733 825.989 137.129C835.434 134.526 845.209 131.8 855.823 128.768C860.531 127.433 865.208 126.098 869.916 124.752C911.144 113.019 953.751 100.88 997.618 90.0643C1046.94 77.9362 1092.49 68.8175 1136.86 62.1991C1190.99 54.1551 1246.31 49.7655 1301.33 49.1546C1358.33 48.521 1414.04 51.9716 1466.87 59.4159C1581.29 75.4246 1674.09 106.016 1763.83 135.613L1765.39 136.122L1764.88 136.348L1763.33 135.839C1673.64 106.265 1580.87 75.6961 1466.6 59.6988C1362.2 44.9912 1248.29 45.9528 1137.16 62.4819C1038.28 77.2347 952.972 101.525 870.455 125.012C865.748 126.347 861.07 127.693 856.363 129.028C845.718 132.049 835.974 134.787 826.528 137.389C789.558 147.628 746.201 159.337 699.695 168.659C649.142 178.796 602.157 184.623 556.101 186.49C546.566 186.852 537.001 187.044 527.496 187.044Z" fill="#6560E0" />
      <Path d="M520.21 192.01C499.521 192.01 479.011 191.037 458.922 189.092C432.536 186.535 405.88 182.202 379.674 176.205C356.346 170.877 333.138 164.236 308.731 155.92C288.852 149.155 267.833 141.122 244.475 131.37C225.735 123.575 207.564 115.576 189.994 107.849C173.143 100.439 157.251 93.4469 141.299 86.7946C136.442 84.7808 131.255 82.6199 125.977 80.5043C111.165 74.576 93.7443 67.7313 74.9442 61.622C48.3482 52.9898 21.1826 47.0388 -10.5408 42.9094C-26.2525 40.8616 -41.3945 39.4927 -56.8364 38.7347C-120.673 35.5669 -187.658 44.482 -241.479 51.6548L-241.749 51.3606C-210.685 47.2198 -180.311 43.3054 -149.877 40.7372C-115.096 37.7957 -84.6317 37.049 -56.7164 38.4292C-41.2146 39.1872 -26.0126 40.5675 -10.2409 42.6152C21.6023 46.7673 48.828 52.7295 75.5139 61.3844C94.374 67.505 111.765 74.3497 126.607 80.2893C131.884 82.4049 137.101 84.5658 141.959 86.5796C157.911 93.232 173.832 100.224 190.653 107.634C208.224 115.373 226.395 123.36 245.135 131.155C323.393 163.817 420.572 196.468 548.005 191.105C650.131 186.75 741.074 162.765 821.311 141.586C830.636 139.131 840.711 136.461 852.075 133.406C855.763 132.422 859.451 131.426 863.109 130.442C906.286 118.835 950.933 106.842 996.659 96.1056C1047.96 84.0567 1095.01 74.9833 1140.46 68.3535C1200.58 59.5969 1261.48 55.2072 1321.24 55.2072C1373.83 55.2072 1425.55 58.6013 1475.15 65.412C1590.86 81.251 1687.35 111.288 1780.66 140.33L1788.27 142.695L1787.73 142.944L1780.12 140.579C1686.78 111.56 1590.35 81.5451 1474.79 65.7288C1369.09 51.2135 1253.56 52.2204 1140.7 68.659C1039.45 83.4232 950.033 107.464 863.559 130.702C859.871 131.698 856.183 132.682 852.525 133.667C841.161 136.721 831.116 139.391 821.761 141.846C741.433 163.036 650.401 187.055 548.065 191.422C538.77 191.818 529.475 192.01 520.21 192.01Z" fill="#6560E0" />
      <Path d="M512.743 197C503.718 197 494.753 196.797 485.908 196.389C469.176 195.609 452.445 194.07 436.134 191.819C406.27 187.689 377.395 181.184 347.86 171.93C323.513 164.316 298.596 154.744 271.67 142.673C247.893 132.015 225.555 120.815 203.966 109.977C183.127 99.5229 163.457 89.6575 143.818 80.9235C94.8235 59.1336 39.4427 38.0112 -33.2391 31.0761C-97.4353 24.9554 -161.751 32.0377 -218.482 38.2828L-218.721 37.9547C-186.368 34.3909 -157.134 31.3136 -126.82 29.6279C-91.8582 27.6933 -61.1844 28.0553 -32.9992 30.748C0.613098 33.9497 32.8761 40.3984 65.6189 50.4448C96.7125 59.9934 124.148 71.6351 144.567 80.7085C164.237 89.4426 183.907 99.3193 204.746 109.773C291.61 153.364 390.078 202.77 539.969 196.039C635.439 191.751 723.383 169.554 800.952 149.97C806.169 148.646 811.356 147.345 816.514 146.044C829.437 142.797 842.57 139.46 855.283 136.235C900.559 124.741 947.395 112.862 995.07 102.204C1048.62 90.2345 1097.35 81.1837 1143.97 74.52C1200.16 66.4987 1257.07 62.0978 1313.05 61.4303C1371.31 60.7401 1428.61 64.1003 1483.3 71.4314C1600.18 87.0894 1700.12 116.584 1796.76 145.105C1801.52 146.508 1806.26 147.911 1811 149.302L1810.46 149.574C1805.72 148.171 1800.96 146.78 1796.22 145.377C1699.64 116.878 1599.76 87.3948 1483 71.7595C1376.02 57.4253 1258.9 58.4887 1144.27 74.8481C1040.41 89.6688 946.525 113.495 855.763 136.53C843.05 139.754 829.917 143.091 816.993 146.338C811.836 147.639 806.649 148.94 801.431 150.264C761.672 160.299 720.534 170.685 677.027 179.182C627.613 188.832 582.817 194.466 540.059 196.389C530.914 196.785 521.799 197 512.743 197Z" fill="#6560E0" />
    </Svg>
  );
}

export default CurlyLineImages;
