/* tslint:disable */

import * as React from 'react'
import styled from '../theme/styled-components'

interface Props {
  glyph: string
  size?: number
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void
}

export const Glyph = ({ glyph }) => {
  switch (glyph) {
    case 'album':
      return (
        <g transform="translate(6.000000, 0.000000)">
          <rect fill="#FFD100" x="0" y="0" width="20" height="4" />
          <path
            d="M2,10 L2,27.8387503 L10,21.4387503 L18,27.8387503 L18,10 L2,10 Z"
            stroke="#1F1F1F"
            fill="none"
            strokeWidth="4"
          />
        </g>
      )
    case 'album-tag':
      return (
        <g transform="translate(-245.000000, -140.000000)">
          <g transform="translate(252.000000, 140.000000)">
            <path d="M18.6666667,8 L0,8 L0,5.33333333 L18.6666667,5.33333333 L18.6666667,8 Z M18.6666667,10.6666667 L18.6666667,32 L9.33333333,26.6666667 L0,32 L0,10.6666667 L18.6666667,10.6666667 Z M18.6666667,2.66666667 L0,2.66666667 L0,0 L18.6666667,0 L18.6666667,2.66666667 Z" />
          </g>
        </g>
      )

    case 'album-tag-sm':
      return (
        <g transform="translate(-163.000000, -140.000000)">
          <g transform="translate(170.000000, 140.000000)">
            <g>
              <path d="M19.2,9.6 L0,9.6 L0,6.4 L19.2,6.4 L19.2,9.6 Z M19.2,12.8 L19.2,32 L9.6,25.6 L0,32 L0,12.8 L19.2,12.8 Z M19.2,3.2 L0,3.2 L0,0 L19.2,0 L19.2,3.2 Z" />
            </g>
          </g>
        </g>
      )

    case 'angle-down':
      return (
        <g transform="translate(-81.000000, -310.000000)">
          <g transform="translate(81.000000, 316.000000)">
            <polygon points="27.4285714 0 32 4.26666667 16 19.2 0 4.26666667 4.57142857 0 16 10.6666667" />
          </g>
        </g>
      )
    case 'angle-down-sm':
      return (
        <g transform="translate(-163.000000, -310.000000)">
          <g transform="translate(163.000000, 319.000000)">
            <polygon points="29.3110875 0 32 3.7311153 16 13.7142857 0 3.7311153 2.68891252 0 16 8.30542842" />
          </g>
        </g>
      )
    case 'angle-right':
      return (
        <g transform="translate(-245.000000, -310.000000)">
          <g transform="translate(250.000000, 310.000000)">
            <polygon points="11.5112171 16 0 5.17183261 5.44439147 0 22.4 16 5.44439147 32 2.91038305e-12 26.8281674" />
          </g>
        </g>
      )
    case 'angle-right-light':
      return (
        <g>
          <path id="a" d="M14.504 16L0 1.477 1.475 0l15.98 16-15.98 16L0 30.523z"/>
        </g>
      )
    case 'angle-left':
      return (
        <g transform="translate(-323.000000, -310.000000)">
          <g transform="translate(328.000000, 310.000000)">
            <polygon
              transform="translate(11.200000, 16.000000) rotate(-360.000000) translate(-11.200000, -16.000000) "
              points="10.8887829 16 22.4 26.8281674 16.9556085 32 0 16 16.9556085 0 22.4 5.17183261"
            />
          </g>
        </g>
      )

    case 'arrow-alt-down':
      return (
        <g transform="translate(-81.000000, -387.000000)">
          <g transform="translate(81.000000, 392.000000)">
            <polygon points="18.2857143 16.0221184 29.3110875 9.14285714 32 12.8739724 16 22.8571429 0 12.8739724 2.68891252 9.14285714 13.7142857 16.0221184 13.7142857 0 18.2857143 0" />
          </g>
        </g>
      )

    case 'arrow-down-collapse':
      return (
        <g fill-rule="nonzero" fill="none">
          <path fill="#1F1F1F" d="M29.311 4L32 7.731l-16 9.983L0 7.731 2.689 4 16 12.305z"/>
          <path fill="#FFD100" d="M29.311 15.429L32 19.159l-16 9.984L0 19.16l2.689-3.731L16 23.734z"/>
        </g>
      )

    case 'cart':
      return (
        <g transform="translate(-819.000000, -225.000000)">
          <g transform="translate(822.000000, 225.000000)">
            <g>
              <circle cx="12.8" cy="11.2" r="3.2" />
              <rect fill="#FFD100" x="6.4" y="20.8" width="12.8" height="3.2" />
              <rect fill="none" stroke="#1F1F1F" strokeWidth="3.2" x="1.6" y="1.6" width="22.4" height="28.8" />
            </g>
          </g>
        </g>
      )
    case 'close':
      return (
        <g>
          <polygon points="16 12.4444444 28.4444444 0 32 3.55555556 19.5555556 16 32 28.4444444 28.4444444 32 16 19.5555556 3.55555556 32 0 28.4444444 12.4444444 16 0 3.55555556 3.55555556 0" />
        </g>
      )
    case 'check':
      return (
        <g>
          <path d="M26.146 1.344c.996-1.402 2.989-1.766 4.452-.812 1.463.955 1.842 2.866.847 4.268L16.298 30.656c-1.188 1.674-3.712 1.808-5.085.269L.77 19.215c-1.15-1.29-.992-3.228.353-4.331 1.345-1.103 3.367-.952 4.517.338l7.72 8.654L26.145 1.344z" />
        </g>
      )
    case 'collect':
      return (
        <g>
          <path d="M15.2169043,26.0977775 L5.81234022,30.7220497 L7.30411434,20.3487991 L0,12.8335059 L10.3265311,11.0467566 L15.2169043,1.77777778 L20.1072774,11.0467566 L30.4338085,12.8335059 L23.1296942,20.3487991 L24.6214683,30.7220497 L15.2169043,26.0977775 Z M15.2169043,22.1356473 L20.1428496,24.5577598 L19.3614845,19.1244335 L23.1872512,15.1880551 L17.7783957,14.2521872 L15.2169043,9.39725909 L12.6554128,14.2521872 L7.24655735,15.1880551 L11.072324,19.1244335 L10.290959,24.5577598 L15.2169043,22.1356473 Z" />
          <polygon
            fill="#FFD100"
            points="32 5.02865865 32 8.88888889 23.1175377 7.0820304 19.5555556 0 23.3697824 0 25.4448974 3.90310377"
          />
        </g>
      )
    case 'copy':
      return (
        <g transform="translate(2.000000, 0.000000)">
          <path d="M4,12 L4,28 L16,28 L16,12 L4,12 Z M0,8 L20,8 L20,32 L0,32 L0,8 Z" />
          <polygon fill="#FFD100" points="8 4.23084853 8 0 28 0 28 24 23.6 24 23.6 4.23084853" />
        </g>
      )

    case 'design':
      return (
        <g transform="translate(4.000000, 0.000000)">
          <path
            d="M8,22 L16,22 L16,21.2410308 L16.9985481,20.6634019 C20.0700304,18.8866453 22,15.6125215 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,15.6125215 3.92996957,18.8866453 7.00145191,20.6634019 L8,21.2410308 L8,22 Z"
            stroke="#1F1F1F"
            strokeWidth="4"
            fill="none"
          />
          <rect fill="#FFD100" x="6" y="28" width="12" height="4" />
        </g>
      )

    case 'download':
      return (
        <g transform="translate(2.000000, 0.000000)">
          <path d="M16,16.9705627 L20.9705627,12 L23.7989899,14.8284271 L13.8994949,24.7279221 L4,14.8284271 L6.82842712,12 L12,17.1715729 L12,0 L16,0 L16,16.9705627 Z" />
          <rect fill="#FFD100" x="0" y="28" width="28" height="4" />
        </g>
      )

    case 'edit':
      return (
        <g>
          <path
            d="M20.8249744,22.0275317 L29.2609933,6.84710403 L22.5657376,2.83111633 L14.1764773,17.9274029 L15.6084661,23.4797041 L20.8249744,22.0275317 Z"
            fill="none"
            stroke="#1F1F1F"
            strokeWidth="4.07576846"
          />
          <rect fill="#FFD100" x="0" y="28" width="20" height="4" />
        </g>
      )

    case 'grow':
      return (
        <g transform="translate(-81.000000, -140.000000)">
          <g transform="translate(87.000000, 140.000000)">
            <path d="M14.5454545,10.1818182 L14.5454545,18.9090909 L5.81818182,18.9090909 L5.81818182,10.1818182 L0,10.1818182 L10.1818182,0 L20.3636364,10.1818182 L14.5454545,10.1818182 Z M5.81818182,21.8181818 L14.5454545,21.8181818 L14.5454545,24.7272727 L5.81818182,24.7272727 L5.81818182,21.8181818 Z M5.81818182,27.6363636 L14.5454545,27.6363636 L14.5454545,32 L5.81818182,32 L5.81818182,27.6363636 Z" />
          </g>
        </g>
      )

    case 'like':
      return (
        <g>
          <path d="M16,5.29554907 C18.2096373,1.76518302 20.8672685,0 23.9728938,0 C28.6479213,0 35.9451682,6.53157552 29.3884811,16.6754557 C26.1380498,21.7042127 21.6852341,26.7961106 16.0300341,31.9511496 C10.3147659,26.7961106 5.86195022,21.7042127 2.6115189,16.6754557 C-3.9451682,6.53157552 3.35207867,0 8.02710623,0 C11.1327315,0 13.7903627,1.76518302 16,5.29554907 Z" />
        </g>
      )

    case 'more':
      return (
        <g transform="translate(-81.000000, -225.000000)">
          <g transform="translate(81.000000, 227.000000)">
            <g>
              <rect x="0" y="0" width="5.81818182" height="5.81818182" />
              <rect x="0" y="11.6363636" width="5.81818182" height="5.81818182" />
              <rect x="0" y="23.2727273" width="5.81818182" height="5.81818182" />
              <rect fill="#FFD100" x="8.72727273" y="0" width="23.2727273" height="5.81818182" />
              <rect fill="#FFD100" x="8.72727273" y="11.6363636" width="23.2727273" height="5.81818182" />
              <rect fill="#FFD100" x="8.72727273" y="23.2727273" width="23.2727273" height="5.81818182" />
            </g>
          </g>
        </g>
      )

    case 'pause':
      return (
        <g>
          <path d="M16,30.2222222 C23.8547164,30.2222222 30.2222222,23.8547164 30.2222222,16 C30.2222222,8.14528356 23.8547164,1.77777778 16,1.77777778 C8.14528356,1.77777778 1.77777778,8.14528356 1.77777778,16 C1.77777778,23.8547164 8.14528356,30.2222222 16,30.2222222 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M11.5555556,10.6666667 L11.5555556,21.3333333 L13.3333333,21.3333333 L13.3333333,10.6666667 L11.5555556,10.6666667 Z M18.6666667,10.6666667 L18.6666667,21.3333333 L20.4444444,21.3333333 L20.4444444,10.6666667 L18.6666667,10.6666667 Z" />
        </g>
      )
    case 'play':
      return (
        <g>
          <path d="M16,30.2222222 C23.8547164,30.2222222 30.2222222,23.8547164 30.2222222,16 C30.2222222,8.14528356 23.8547164,1.77777778 16,1.77777778 C8.14528356,1.77777778 1.77777778,8.14528356 1.77777778,16 C1.77777778,23.8547164 8.14528356,30.2222222 16,30.2222222 Z M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M10.6666667,23.1111111 L23.1111111,16 L10.6666667,8.88888889 L10.6666667,23.1111111 Z M12.4105471,11.8800152 L19.6205205,16 L12.4105471,20.1199848 L12.4105471,11.8800152 Z" />
        </g>
      )
    case 'plus':
      return (
        <g>
          <path d="M12.8,12.8 L12.8,0 L19.2,0 L19.2,12.8 L32,12.8 L32,19.2 L19.2,19.2 L19.2,32 L12.8,32 L12.8,19.2 L0,19.2 L0,12.8 L12.8,12.8 Z" />
        </g>
      )
    case 'minus':
      return (
        <g>
          <path d="M0 12.8h32v6.4H0z" />
        </g>
      )
    case 'enter':
      return (
        <g>
            <path d="M8.22 15.133h19.647V3H32v16.177H7.46l6.937 6.937-2.922 2.922L.035 17.597l11.69-11.689 2.86 2.86z" />
        </g>
      )
    case 'question':
      return (
        <g>
          <path d="M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M15.8215103,22.7307692 C15.3546911,22.7307692 14.9702517,22.8681319 14.6407323,23.1978022 C14.3112128,23.5 14.173913,23.8846154 14.173913,24.3516484 C14.173913,24.8186813 14.3112128,25.2032967 14.6407323,25.532967 C14.9702517,25.8351648 15.3546911,26 15.8215103,26 C16.2883295,26 16.6727689,25.8351648 17.0022883,25.532967 C17.3318078,25.2307692 17.4965675,24.8461538 17.4965675,24.3516484 C17.4965675,23.8846154 17.3318078,23.5 17.0297483,23.1978022 C16.7002288,22.8681319 16.2883295,22.7307692 15.8215103,22.7307692 Z M16.2334096,6 C14.2562929,6 12.7185355,6.6043956 11.6201373,7.81318681 C10.5217391,8.96703297 10,10.5054945 10,12.4285714 L12.1693364,12.4285714 C12.1693364,11.0824176 12.4713959,10.0384615 13.0755149,9.26923077 C13.7345538,8.36263736 14.7505721,7.92307692 16.1235698,7.92307692 C17.2768879,7.92307692 18.1830664,8.22527473 18.8146453,8.88461538 C19.4187643,9.48901099 19.7482838,10.3406593 19.7482838,11.4395604 C19.7482838,12.2087912 19.4736842,12.9230769 18.9244851,13.6098901 C18.7597254,13.8296703 18.4302059,14.1593407 17.9908467,14.5989011 C16.5080092,15.9175824 15.6018307,16.9615385 15.2173913,17.7857143 C14.8878719,18.4725275 14.7231121,19.2692308 14.7231121,20.1758242 L14.7231121,20.8076923 L16.9199085,20.8076923 L16.9199085,20.1758242 C16.9199085,19.4340659 17.0846682,18.7747253 17.4416476,18.1703297 C17.7162471,17.6758242 18.1281465,17.1813187 18.7322654,16.6593407 C19.9405034,15.5879121 20.6819222,14.8736264 20.9565217,14.543956 C21.6430206,13.6373626 22,12.5659341 22,11.3296703 C22,9.68131868 21.4782609,8.39010989 20.4622426,7.45604396 C19.3913043,6.46703297 17.9908467,6 16.2334096,6 Z" />
        </g>
      )
    case 'refresh':
      return (
        <g>
          <path
            d="M5.55839329,23.1111111 C7.88481814,25.8107841 11.2943356,27.4304287 14.9859843,27.4304287 C21.8588612,27.4304287 27.4304287,21.8588612 27.4304287,14.9859843 L30.9859843,14.9859843 C30.9859843,23.8225403 23.8225403,30.9859843 14.9859843,30.9859843 C10.5939426,30.9859843 6.51008758,29.2007561 3.55555556,26.1838115 L3.55555556,28.4444444 L-1.77635684e-15,28.4444444 L0,19.5555556 L8.88888889,19.5555556 L8.88888889,23.1111111 L5.55839329,23.1111111 Z"
            fill="#FFD100"
          />
          <path d="M26.2145935,8.88888889 C23.9156043,5.58921258 20.1361041,3.55555556 16,3.55555556 C9.12712311,3.55555556 3.55555556,9.12712311 3.55555556,16 L0,16 C0,7.163444 7.163444,0 16,0 C20.9225481,0 25.4548269,2.24284256 28.4444444,5.94099632 L28.4444444,3.55555556 L32,3.55555556 L32,12.4444444 L23.1111111,12.4444444 L23.1111111,8.88888889 L26.2145935,8.88888889 Z" />
        </g>
      )
    case 'tag-close':
      return (
        <g>
          <path d="M0,0 L17,0 C17.5522847,-1.01453063e-16 18,0.44771525 18,1 L18,18 C8.0588745,18 1.21743675e-15,9.9411255 0,2.20436424e-15 Z M11,5.4 L8.6,3 L7,4.6 L9.4,7 L7,9.4 L8.6,11 L11,8.6 L13.4,11 L15,9.4 L12.6,7 L15,4.6 L13.4,3 L11,5.4 Z" />
        </g>
      )
    case 'search':
      return (
        <g>
          <path d="M12.076 20.126a8.05 8.05 0 1 0 0-16.1 8.05 8.05 0 0 0 0 16.1zm0 4.026C5.406 24.152 0 18.745 0 12.076 0 5.406 5.407 0 12.076 0c6.67 0 12.076 5.407 12.076 12.076 0 6.67-5.407 12.076-12.076 12.076zm12.808-4.96L32 26.307l-1.423 1.424-7.116-7.116 1.423-1.423zm-4.27 4.27l7.117 7.115L26.307 32l-7.115-7.116 1.423-1.423z" />
        </g>
      )

    case 'top':
      return (
        <g transform="translate(-655.000000, -225.000000)">
          <g transform="translate(655.000000, 227.000000)">
            <g>
              <polygon fillRule="nonzero" points="5.33333333 14 0 14 16 0 32 14 26.6666667 14 16 5.05192362" />
              <rect fill="#FFD100" x="8" y="24" width="16" height="4" />
            </g>
          </g>
        </g>
      )
    case 'warning':
      return (
        <g>
          <path d="M16,32 C7.163444,32 0,24.836556 0,16 C0,7.163444 7.163444,0 16,0 C24.836556,0 32,7.163444 32,16 C32,24.836556 24.836556,32 16,32 Z M13.6774194,5.33333333 L14.5376344,19.7759104 L17.4623656,19.7759104 L18.3225806,5.33333333 L13.6774194,5.33333333 Z M15.9827957,21.5910364 C15.2258065,21.5910364 14.6064516,21.8263305 14.1247312,22.2969188 C13.5741935,22.767507 13.3333333,23.372549 13.3333333,24.1120448 C13.3333333,24.8515406 13.5741935,25.4565826 14.1247312,25.9271709 C14.6064516,26.3977591 15.2258065,26.6666667 15.9827957,26.6666667 C16.7397849,26.6666667 17.3591398,26.4313725 17.9096774,25.9607843 C18.3913978,25.4901961 18.6666667,24.8515406 18.6666667,24.1120448 C18.6666667,23.372549 18.3913978,22.767507 17.9096774,22.2969188 C17.3935484,21.8263305 16.7397849,21.5910364 15.9827957,21.5910364 Z" />
        </g>
      )
    case 'zoom-in':
      return (
        <g>
          <circle
            fill="none"
            stroke="#1F1F1F"
            strokeWidth="4.36363636"
            cx="13.0909091"
            cy="13.0909091"
            r="10.9090909"
          />
          <path
            d="M11.6363636,11.6363636 L11.6363636,7.27272727 L14.5454545,7.27272727 L14.5454545,11.6363636 L18.9090909,11.6363636 L18.9090909,14.5454545 L14.5454545,14.5454545 L14.5454545,18.9090909 L11.6363636,18.9090909 L11.6363636,14.5454545 L7.27272727,14.5454545 L7.27272727,11.6363636 L11.6363636,11.6363636 Z"
            fill="#FFD100"
          />
          <polygon points="26.1818182 23.2727273 32 29.0909091 29.0909091 32 23.2727273 26.1818182" />
        </g>
      )
    case 'rmb':
      return (
        <g>
          <path d="M16 12.702L23.45 0 27 2.018 18.8 16h-5.6L5 2.018 8.55 0 16 12.702zM6 18h20v2H6v-2zm0 4h20v2H6v-2zm8 4h4v6h-4v-6z" />
        </g>
      )
    case 'invoice':
      return (
        <g>
          <path d="M5 8v20H1V4h30v24h-4V8H5zm2 4h12v2H7v-2zm0 5h18v2H7v-2zm0 5h18v2H7v-2z" />
        </g>
      )
    case 'download-image':
      return (
        <g>
          <path d="M18 16.97L22.97 12l2.829 2.828-9.9 9.9L6 14.828 8.828 12 14 17.172V0h4v16.97zM29 22v6H3v-6h2v4h22v-4h2zM3 30h26v2H3v-2z" />
        </g>
      )
    case 'certificate':
      return (
        <g>
          <path d="M16.5 17.299c3.933 0 7.121-3.168 7.121-7.077 0-3.908-3.188-7.077-7.121-7.077-3.933 0-7.121 3.169-7.121 7.077 0 3.909 3.188 7.077 7.121 7.077zm0 3.145c-5.68 0-10.286-4.576-10.286-10.222C6.214 4.577 10.82 0 16.5 0c5.68 0 10.286 4.577 10.286 10.222 0 5.646-4.605 10.222-10.286 10.222zm.53 2.598l3.384 5.825 2.296-3.912 4.556-.02-3.384-5.825 1.37-.786L30 26.496l-6.379.028L20.407 32 16.5 25.275 12.593 32 9.38 26.524 3 26.496l4.747-8.172 1.37.786-3.383 5.825 4.556.02 2.296 3.912 3.384-5.825h1.06z" />
        </g>
      )
    case 'download-plus':
      return (
        <g>
          <path d="M17.636 19.976l5.091-5.43 2.182 2.327-8.727 9.309-8.727-9.31 2.181-2.327 5.091 5.43V0h2.91v19.976zM6 29.09h20.364V32H6v-2.91z" />
        </g>
      )
    case 'manage-plus':
      return (
        <g>
          <path d="M3 2.667L16.333 0l13.334 2.667v16.321c0 3.377-1.423 5.265-3.92 7.539-2.671 2.432-5.809 4.257-9.414 5.473-3.604-1.216-6.742-3.04-9.413-5.473C4.423 24.253 3 22.365 3 18.988V2.667zm2.667 16.321c0 2.2.69 3.42 3.048 5.567 2.184 1.989 4.717 3.525 7.618 4.615 2.901-1.09 5.435-2.626 7.618-4.615C26.31 22.408 27 21.188 27 18.988V4.853L16.333 2.719 5.667 4.853v14.135zm4.18-9.006l2.161 1.563A5.302 5.302 0 0 0 11 14.667a5.333 5.333 0 0 0 8.547 4.256l1.609 2.127a7.968 7.968 0 0 1-4.822 1.616A8 8 0 0 1 9.847 9.983zm13.717 8.111l-2.409-1.143a5.333 5.333 0 0 0-6.816-7.231l-.998-2.474a8 8 0 0 1 10.223 10.848z" />
        </g>
      )
    case 'share-plus':
      return (
        <g>
          <path d="M14.545 11.182H8.727V1h14.546v10.182h-5.818v4.363H29.09v5.819H32v8.727h-8.727v-8.727h2.909v-2.91H5.818v2.91h2.91v8.727H0v-8.727h2.91v-5.819h11.635v-4.363zm-2.909-7.273v4.364h8.728V3.909h-8.728zm14.546 20.364v2.909h2.909v-2.91h-2.91zm-23.273 0v2.909h2.91v-2.91h-2.91z" />
        </g>
      )

    case 'location':
      return (
        <g transform="translate(4)" fill="none">
          <path d="M11.975 27.177C19.05 22.047 22.5 16.977 22.5 12c0-.359-.018-.715-.053-1.067C21.909 5.599 17.402 1.5 12 1.5c-5.392 0-9.893 4.084-10.444 9.405-.037.362-.056.727-.056 1.095 0 5.292 3.43 10.35 10.475 15.177z" stroke="#FFF" stroke-width="3"/>
          <circle stroke="#FFF" strokeWidth="3" cx="12" cy="11" r="4.5"/>
          <path fill="#FFD100" d="M0 29h24v3H0z"/>
        </g>
      )
    default:
      return null
  }
}

const computedSize = ({ size }) => (size || 32) + 'px'

export const InlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`

const SvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${computedSize};
  width: ${computedSize};
  height: ${computedSize};
  min-width: ${computedSize};
  min-height: ${computedSize};
  position: relative;
  color: inherit;
  cursor: pointer;
  vertical-align: middle;
`

const Icon: React.SFC<Props> = ({ glyph, size, ...rest }) => (
  <SvgWrapper data-icon={true} size={size} {...rest}>
    <InlineSvg
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="1.414"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      id={glyph}
    >
      <title>{glyph}</title>
      <Glyph glyph={glyph} />
    </InlineSvg>
  </SvgWrapper>
)

export default Icon
