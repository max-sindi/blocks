import $editor from 'weblium/editor'

import Component from 'wireframe-zapdos-careers/src/component'
import style from './style.css'

import options from './options.json'

const {enhancers: {withProps}, hoistStatics} = $editor

const ExtendedWireframe = hoistStatics(withProps(_.pipe(_.set('style', style), _.set('$block.options', options))))(Component)

ExtendedWireframe.defaultContent = {
  ...Component.defaultContent,
  careers: [
    {
      ...Component.defaultContent.careers[0],
      icon: {
        svg:
          '<svg width="50px" height="48px" viewBox="0 0 50 48" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Homepage" stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-1015.000000, -9249.000000)"><g id="Careers" transform="translate(375.000000, 8880.000000)" fill-rule="nonzero"><g id="I" transform="translate(635.000000, 369.000000)"><g id="star" transform="translate(5.000000, 0.000000)"><path d="M48.856,21.731 C49.839,20.773 50.186,19.367 49.762,18.06 C49.337,16.753 48.23,15.82 46.87,15.622 L34.778,13.865 C34.263,13.79 33.818,13.467 33.588,13 L28.182,2.043 C27.575,0.812 26.343,0.047 24.97,0.047 C23.598,0.047 22.366,0.812 21.759,2.043 L16.352,13 C16.122,13.467 15.676,13.79 15.161,13.865 L3.069,15.623 C1.71,15.82 0.603,16.753 0.178,18.06 C-0.246,19.367 0.101,20.773 1.084,21.731 L9.833,30.259 C10.206,30.623 10.377,31.147 10.289,31.659 L8.224,43.702 C7.992,45.055 8.537,46.396 9.648,47.204 C10.758,48.013 12.203,48.118 13.42,47.477 L24.234,41.791 C24.695,41.549 25.245,41.549 25.706,41.791 L36.521,47.477 C37.049,47.755 37.621,47.892 38.19,47.892 C38.929,47.892 39.665,47.661 40.293,47.204 C41.404,46.396 41.949,45.055 41.717,43.702 L39.651,31.66 C39.563,31.147 39.734,30.624 40.107,30.26 L48.856,21.731 Z M37.681,31.998 L39.746,44.04 C39.85,44.646 39.615,45.225 39.117,45.587 C38.618,45.948 37.997,45.992 37.452,45.708 L26.637,40.021 C26.116,39.748 25.542,39.61 24.97,39.61 C24.398,39.61 23.825,39.748 23.303,40.022 L12.49,45.708 C11.943,45.992 11.322,45.948 10.824,45.587 C10.326,45.225 10.092,44.647 10.195,44.04 L12.26,31.998 C12.459,30.836 12.074,29.65 11.23,28.828 L2.48,20.299 C2.039,19.869 1.889,19.263 2.08,18.678 C2.27,18.092 2.747,17.69 3.356,17.601 L15.447,15.844 C16.614,15.675 17.623,14.943 18.144,13.885 L23.551,2.928 C23.823,2.376 24.354,2.047 24.969,2.047 C25.585,2.047 26.115,2.376 26.388,2.928 L31.795,13.885 C32.316,14.943 33.324,15.675 34.491,15.844 L46.583,17.601 C47.192,17.69 47.669,18.092 47.859,18.678 C48.049,19.263 47.9,19.869 47.459,20.299 L38.71,28.827 C37.866,29.65 37.481,30.835 37.681,31.998 Z" id="Shape"></path></g></g></g></g></svg>',
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.careers[1],
      icon: {
        svg:
          '<svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Homepage" stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-1010.000000, -9343.000000)"><g id="Careers" transform="translate(375.000000, 8880.000000)" fill-rule="nonzero"><g id="I" transform="translate(635.000000, 369.000000)"><g id="worldwide" transform="translate(0.000000, 94.000000)"><path d="M47.007,5.305 L47.056,5.273 L45.733,4.457 C45.655,4.409 45.573,4.369 45.495,4.321 C45.061,4.059 44.62,3.808 44.172,3.567 C43.945,3.445 43.715,3.33 43.485,3.214 C43.148,3.043 42.807,2.88 42.463,2.722 C42.26,2.629 42.058,2.534 41.854,2.446 C41.319,2.215 40.778,1.998 40.228,1.798 C40.115,1.757 40,1.722 39.886,1.682 C39.405,1.514 38.918,1.358 38.427,1.214 C38.27,1.168 38.113,1.123 37.955,1.08 C37.411,0.93 36.861,0.793 36.305,0.674 C36.252,0.663 36.201,0.649 36.148,0.638 C35.533,0.509 34.911,0.403 34.283,0.313 C34.145,0.293 34.005,0.278 33.867,0.26 C33.376,0.197 32.882,0.145 32.384,0.106 C32.216,0.093 32.049,0.078 31.881,0.068 C31.258,0.026 30.632,0 30,0 C29.317,0 28.642,0.031 27.97,0.076 C27.794,0.088 27.619,0.101 27.443,0.116 C26.812,0.169 26.185,0.237 25.565,0.33 C25.503,0.339 25.441,0.347 25.379,0.356 C24.755,0.453 24.139,0.575 23.529,0.71 C23.327,0.754 23.126,0.801 22.925,0.85 C22.363,0.986 21.807,1.135 21.258,1.302 C21.084,1.355 20.912,1.413 20.74,1.469 C20.248,1.629 19.761,1.802 19.281,1.987 C19.061,2.071 18.841,2.157 18.623,2.247 C18.071,2.474 17.525,2.712 16.99,2.971 C16.814,3.056 16.641,3.151 16.466,3.24 C16.048,3.452 15.636,3.673 15.23,3.904 C15.027,4.019 14.825,4.133 14.624,4.253 C14.116,4.558 13.617,4.876 13.129,5.209 C13.062,5.255 12.991,5.293 12.925,5.34 L12.38,5.718 L12.385,5.74 C4.887,11.197 0,20.036 0,30 C0,46.542 13.458,60 30,60 C46.542,60 60,46.542 60,30 C60,19.769 54.848,10.722 47.007,5.305 Z M15.089,6.318 C15.412,6.114 15.739,5.917 16.069,5.727 C16.252,5.621 16.433,5.512 16.619,5.41 C17.083,5.156 17.554,4.919 18.03,4.693 C18.236,4.595 18.444,4.504 18.653,4.411 C19.002,4.256 19.353,4.109 19.707,3.968 C19.902,3.89 20.096,3.809 20.294,3.736 C20.8,3.548 21.312,3.376 21.828,3.219 C22.017,3.161 22.21,3.11 22.401,3.056 C22.802,2.943 23.205,2.838 23.612,2.743 C23.794,2.7 23.976,2.655 24.159,2.616 C24.718,2.497 25.281,2.393 25.848,2.308 C25.977,2.289 26.108,2.276 26.237,2.258 C26.715,2.194 27.196,2.142 27.679,2.102 C27.847,2.088 28.016,2.074 28.185,2.063 C28.788,2.027 29.392,2 30,2 C30.529,2 31.057,2.018 31.583,2.048 C31.734,2.056 31.883,2.071 32.033,2.082 C32.412,2.11 32.791,2.142 33.168,2.185 C33.335,2.204 33.501,2.227 33.667,2.249 C34.032,2.297 34.395,2.351 34.757,2.414 C34.918,2.442 35.078,2.47 35.238,2.5 C35.615,2.572 35.99,2.653 36.363,2.74 C36.501,2.772 36.64,2.802 36.777,2.836 C37.237,2.951 37.694,3.077 38.147,3.215 C38.193,3.229 38.24,3.24 38.286,3.254 C38.77,3.404 39.248,3.57 39.723,3.745 C39.913,3.816 40.099,3.893 40.287,3.968 C40.563,4.077 40.837,4.188 41.11,4.306 C41.346,4.409 41.58,4.515 41.813,4.624 C42.023,4.722 42.231,4.823 42.439,4.926 C42.591,5 42.743,5.079 42.894,5.158 C39.072,6.69 36.698,8.567 34.041,12.024 C33.664,12.513 33.473,13.112 33.49,13.71 C33.261,13.158 32.925,12.738 32.477,12.444 C31.551,11.836 30.339,11.879 28.774,12.577 L28.489,12.609 C26.483,12.833 25.378,12.957 25.278,15.139 C25.227,16.243 25.819,17.333 26.786,17.915 C27.031,18.062 27.288,18.169 27.55,18.234 C27.578,18.329 27.622,18.426 27.687,18.524 L28.09,19.081 L28.733,18.974 C29.283,18.881 29.745,18.861 30.058,18.87 C30.011,19.314 30.089,19.768 30.289,20.173 C30.567,20.735 31.045,21.145 31.635,21.327 C32.199,21.501 32.248,21.67 32.316,21.903 C32.637,23.008 33.367,23.825 34.319,24.142 C35.229,24.447 36.24,24.25 37.097,23.607 C37.611,23.218 37.902,23.299 39.025,23.842 C39.758,24.196 40.671,24.638 41.853,24.79 C42.039,24.813 42.15,24.869 42.191,24.912 C43.004,25.766 43.628,26.828 44.231,27.855 C45.155,29.428 46.028,30.915 47.53,31.694 C48.705,32.305 47.389,35.754 46.758,37.411 C46.631,37.745 46.512,38.056 46.413,38.334 C44.889,39.508 43.958,40.841 43.057,42.131 C42.25,43.286 41.416,44.481 40.123,45.593 C38.17,47.274 36.518,48.281 34.6,48.963 C34.285,49.074 34.08,48.887 34.006,48.8 C33.936,48.718 33.79,48.495 33.946,48.216 C35.919,44.684 38.201,39.703 35.247,37.258 C32.351,34.862 31.267,31.383 32.483,28.397 C33,27.129 32.423,25.707 31.146,25.039 C31.037,24.906 30.959,24.325 30.908,23.94 C30.795,23.095 30.655,22.044 30.03,21.127 C29.77,20.747 29.304,20.404 28.983,20.248 C27.762,19.65 26.59,19.479 25.457,19.315 C24.555,19.183 23.702,19.059 22.832,18.726 C19.519,17.455 17.161,12.08 15.439,8.154 C15.193,7.592 14.956,7.053 14.728,6.548 C14.847,6.472 14.968,6.395 15.089,6.318 Z M30,58 C14.561,58 2,45.439 2,30 C2,20.923 6.345,12.844 13.061,7.725 C13.238,8.122 13.419,8.532 13.607,8.96 C15.574,13.445 18.022,19.026 22.115,20.596 C23.192,21.009 24.197,21.156 25.168,21.296 C26.194,21.445 27.163,21.586 28.105,22.048 C28.181,22.085 28.338,22.207 28.378,22.257 C28.735,22.781 28.832,23.505 28.925,24.205 C29.054,25.171 29.2,26.266 30.178,26.783 C30.496,26.952 30.774,27.292 30.631,27.643 C29.078,31.455 30.389,35.834 33.972,38.8 C34.89,39.56 35.328,41.642 32.2,47.242 C31.685,48.164 31.795,49.283 32.479,50.093 C32.976,50.68 33.681,50.998 34.412,50.998 C34.698,50.998 34.988,50.949 35.271,50.849 C37.436,50.079 39.277,48.961 41.428,47.11 C42.913,45.834 43.82,44.535 44.698,43.278 C45.584,42.009 46.422,40.81 47.795,39.799 C47.995,39.653 48.143,39.454 48.222,39.224 C48.33,38.908 48.472,38.536 48.628,38.126 C49.656,35.43 51.21,31.355 48.454,29.922 C47.463,29.407 46.766,28.22 45.957,26.845 C45.327,25.772 44.612,24.556 43.641,23.534 C43.265,23.139 42.735,22.888 42.111,22.807 C41.251,22.697 40.564,22.364 39.898,22.042 C38.801,21.511 37.434,20.851 35.897,22.008 C35.665,22.183 35.314,22.364 34.954,22.246 C34.634,22.139 34.373,21.811 34.239,21.347 C34.045,20.676 33.64,19.852 32.227,19.416 C32.165,19.396 32.117,19.353 32.084,19.285 C32.04,19.196 32.035,19.086 32.081,18.96 C32.27,18.445 32.192,17.925 31.867,17.532 C31.51,17.1 30.873,16.878 29.966,16.864 C29.931,16.707 29.851,16.548 29.703,16.393 L29.096,15.838 L28.414,16.24 C28.237,16.345 28.037,16.332 27.82,16.2 C27.484,15.999 27.261,15.599 27.278,15.229 C27.288,15 27.303,14.87 27.316,14.795 C27.561,14.723 28.146,14.657 28.714,14.594 L29.321,14.525 L29.468,14.457 C30.361,14.042 31.076,13.916 31.38,14.113 C31.503,14.194 31.899,14.582 31.854,16.189 L31.829,17.077 L32.707,17.207 C33.848,17.378 34.694,17.155 35.221,16.55 C35.766,15.924 35.865,14.995 35.512,13.789 C35.461,13.614 35.506,13.399 35.627,13.242 C38.394,9.642 40.716,7.985 45.135,6.459 C52.866,11.45 58,20.134 58,30 C58,45.439 45.439,58 30,58 Z" id="Shape"></path></g></g></g></g></svg>',
        fill: 'brand-color',
      },
    },
    {
      ...Component.defaultContent.careers[2],
      icon: {
        svg:
          '<svg width="60px" height="60px" viewBox="0 0 60 60" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="Homepage" stroke="none" stroke-width="1" fill-rule="evenodd" transform="translate(-1010.000000, -9443.000000)"><g id="Careers" transform="translate(375.000000, 8880.000000)" fill-rule="nonzero"><g id="I" transform="translate(635.000000, 369.000000)"><g id="user" transform="translate(0.000000, 194.000000)"><path d="M60,30 C60,13.458 46.542,0 30,0 C13.458,0 0,13.458 0,30 C0,36.142 1.858,41.857 5.038,46.618 L5.036,46.639 L5.243,46.942 C5.423,47.205 5.617,47.454 5.805,47.71 C5.881,47.814 5.956,47.919 6.034,48.023 C6.272,48.339 6.517,48.649 6.766,48.954 C6.838,49.042 6.911,49.129 6.984,49.216 C8.141,50.601 9.411,51.869 10.777,53.01 C10.86,53.079 10.942,53.149 11.026,53.218 C11.324,53.461 11.625,53.699 11.932,53.93 C12.056,54.024 12.182,54.115 12.307,54.207 C12.599,54.421 12.891,54.633 13.191,54.836 C13.351,54.945 13.517,55.047 13.679,55.153 C14.095,55.423 14.515,55.684 14.943,55.932 C15.241,56.106 15.54,56.279 15.845,56.443 C16.029,56.542 16.217,56.634 16.403,56.729 C16.728,56.895 17.054,57.056 17.385,57.21 C17.552,57.287 17.719,57.363 17.887,57.437 C18.27,57.607 18.658,57.768 19.049,57.922 C19.17,57.97 19.29,58.019 19.412,58.066 C20.485,58.472 21.587,58.82 22.714,59.102 C22.76,59.114 22.807,59.123 22.853,59.134 C23.351,59.256 23.854,59.365 24.362,59.462 C24.497,59.488 24.632,59.511 24.767,59.535 C25.191,59.61 25.617,59.676 26.047,59.733 C26.211,59.755 26.374,59.776 26.538,59.796 C26.957,59.844 27.379,59.882 27.803,59.913 C27.961,59.925 28.118,59.94 28.276,59.949 C28.847,59.979 29.421,60 30,60 C30.579,60 31.153,59.979 31.724,59.947 C31.882,59.938 32.039,59.922 32.197,59.911 C32.621,59.88 33.043,59.843 33.462,59.794 C33.626,59.775 33.79,59.753 33.953,59.731 C34.383,59.674 34.809,59.608 35.233,59.533 C35.368,59.509 35.503,59.486 35.638,59.46 C36.146,59.363 36.649,59.254 37.147,59.132 C37.193,59.121 37.24,59.111 37.286,59.1 C38.413,58.818 39.515,58.47 40.588,58.064 C40.71,58.018 40.831,57.968 40.953,57.92 C41.344,57.766 41.731,57.605 42.114,57.436 C42.282,57.362 42.45,57.286 42.616,57.209 C42.947,57.055 43.274,56.894 43.598,56.728 C43.784,56.633 43.972,56.54 44.156,56.442 C44.461,56.278 44.759,56.105 45.058,55.931 C45.486,55.682 45.907,55.422 46.322,55.152 C46.485,55.046 46.65,54.944 46.81,54.835 C47.109,54.632 47.401,54.42 47.694,54.206 C47.819,54.114 47.945,54.023 48.069,53.929 C48.375,53.698 48.677,53.46 48.975,53.217 C49.059,53.148 49.141,53.078 49.224,53.009 C50.591,51.867 51.86,50.6 53.018,49.214 C53.091,49.127 53.163,49.041 53.234,48.953 C53.483,48.648 53.728,48.338 53.966,48.022 C54.044,47.919 54.118,47.814 54.195,47.709 C54.382,47.453 54.577,47.204 54.757,46.941 L54.964,46.638 L54.962,46.617 C58.142,41.857 60,36.142 60,30 Z M58,30 C58,34.972 56.691,39.642 54.409,43.694 C52.697,38.02 47.458,34 41.311,34 L40.415,34 L35.366,34 C35.164,34 35,33.836 35,33.635 L35,32.99 C35,32.807 35.149,32.687 35.276,32.638 C41.715,30.217 45.731,20.174 44.889,13.15 C44.45,9.492 42.638,6.223 40.006,3.855 C50.517,7.892 58,18.086 58,30 Z M52.538,46.59 C52.457,46.699 52.376,46.807 52.294,46.915 C52.071,47.208 51.846,47.499 51.612,47.783 C51.588,47.812 51.563,47.84 51.539,47.869 C50.731,48.841 49.858,49.757 48.928,50.612 C48.873,50.663 48.818,50.715 48.762,50.765 C48.485,51.016 48.201,51.26 47.914,51.5 C47.824,51.575 47.733,51.649 47.642,51.723 C47.363,51.95 47.082,52.173 46.795,52.389 C46.698,52.462 46.598,52.531 46.5,52.603 C46.335,52.724 46.168,52.841 46.001,52.958 L46.001,48 L44.001,48 L44.001,54.233 C43.962,54.256 43.923,54.278 43.883,54.301 C43.628,54.447 43.374,54.592 43.115,54.729 C42.938,54.823 42.758,54.914 42.578,55.005 C42.276,55.157 41.972,55.304 41.665,55.445 C41.515,55.514 41.366,55.583 41.215,55.649 C40.83,55.817 40.441,55.977 40.049,56.128 C39.968,56.159 39.889,56.193 39.808,56.223 C38.808,56.597 37.786,56.915 36.745,57.173 C36.67,57.192 36.594,57.207 36.519,57.225 C36.088,57.328 35.653,57.422 35.216,57.504 C35.086,57.529 34.956,57.551 34.825,57.574 C34.437,57.642 34.047,57.701 33.655,57.752 C33.504,57.772 33.353,57.793 33.201,57.81 C32.813,57.855 32.423,57.888 32.031,57.917 C31.886,57.927 31.742,57.942 31.596,57.95 C31.065,57.982 30.534,58 30,58 C29.466,58 28.935,57.982 28.405,57.952 C28.259,57.944 28.115,57.929 27.97,57.919 C27.579,57.89 27.188,57.857 26.8,57.812 C26.648,57.795 26.497,57.774 26.346,57.754 C25.954,57.702 25.564,57.643 25.176,57.576 C25.046,57.553 24.915,57.531 24.785,57.506 C24.348,57.423 23.913,57.33 23.482,57.226 C23.407,57.208 23.332,57.192 23.257,57.174 C22.216,56.915 21.193,56.598 20.193,56.224 C20.112,56.194 20.032,56.16 19.952,56.129 C19.56,55.978 19.172,55.818 18.787,55.65 C18.636,55.584 18.486,55.515 18.336,55.446 C18.029,55.305 17.725,55.158 17.423,55.006 C17.243,54.915 17.063,54.825 16.886,54.73 C16.627,54.593 16.372,54.447 16.118,54.302 C16.079,54.279 16.039,54.257 16,54.234 L16,48 L14,48 L14,52.958 C13.832,52.841 13.665,52.723 13.501,52.603 C13.403,52.531 13.303,52.462 13.206,52.389 C12.919,52.173 12.638,51.95 12.36,51.724 C12.268,51.65 12.177,51.575 12.086,51.5 C11.799,51.261 11.516,51.017 11.239,50.766 C11.183,50.715 11.127,50.662 11.071,50.611 C10.141,49.756 9.268,48.841 8.461,47.869 C8.437,47.84 8.412,47.812 8.388,47.783 C8.154,47.499 7.929,47.208 7.706,46.915 C7.624,46.807 7.542,46.699 7.462,46.59 C7.342,46.427 7.226,46.261 7.11,46.095 C7.893,40.313 12.804,36 18.689,36 L21.585,36 L30,44.414 L38.414,36 L41.31,36 C47.195,36 52.107,40.313 52.89,46.095 C52.774,46.261 52.659,46.427 52.538,46.59 Z M25.491,30.791 C20.709,29.022 17,20.85 17,15 C17,14.872 17.015,14.747 17.018,14.62 L17.75,13.717 C19.401,11.753 22.219,11.191 24.762,12.317 C25.785,12.771 26.874,13 28,13 C30.971,13 33.64,11.385 35.028,8.816 C38.21,9.861 41.05,11.831 42.971,14.314 C43.264,20.414 39.677,28.847 34.573,30.766 C33.617,31.126 33,31.999 33,32.99 L33,33.635 C33,34.938 34.062,36 35.365,36 L35.586,36 L30,41.586 L24.414,36 L24.635,36 C25.938,36 27,34.938 27,33.635 L27,33 C27,32.014 26.395,31.126 25.491,30.791 Z M30.04,2.002 C30.052,2.002 30.062,2.002 30.073,2.002 C30.562,2.005 31.043,2.032 31.503,2.085 C36.462,2.638 40.63,6.09 42.255,10.674 C40.14,8.832 37.547,7.414 34.758,6.647 L33.898,6.411 L33.565,7.237 C32.644,9.522 30.46,11 28,11 C27.155,11 26.338,10.828 25.573,10.489 C22.807,9.265 19.787,9.596 17.556,11.219 C18.169,9.193 19.276,7.337 20.817,5.799 C23.271,3.35 26.53,2.002 30.04,2.002 Z M19.982,3.86 C19.789,4.034 19.59,4.198 19.404,4.383 C16.564,7.218 15,10.987 15,15 C15,21.629 19.19,30.593 24.797,32.666 C24.916,32.711 25,32.848 25,33 L25,33.635 C25,33.836 24.836,34 24.635,34 L19.586,34 L18.69,34 C12.542,34 7.303,38.02 5.591,43.694 C3.309,39.642 2,34.972 2,30 C2,18.09 9.477,7.9 19.982,3.86 Z" id="Shape"></path></g></g></g></g></svg>',
        fill: 'brand-color',
      },
    },
  ],
  title: {
    ...Component.defaultContent.title,
    content: '- Careers -',
  },
  picture: {
    ...Component.defaultContent.picture,
    resourceRef: 'andrew-neel-288047.jpg',
  },
  'button-1': {
    ...Component.defaultContent['button-1'],
    type: 'link',
  },
}

ExtendedWireframe.modifierScheme = {
  ...Component.modifierScheme,
  body: {defaultValue: true, label: 'Careers main text', type: 'checkbox'},
  button: {defaultValue: true, label: 'Secondary button', type: 'checkbox'},
  icon: {defaultValue: true, label: 'Careers icon', type: 'checkbox'},
  image: {defaultValue: true, label: 'Сareers photo', type: 'checkbox'},
  subtitle: {defaultValue: true, label: 'Careers description', type: 'checkbox'},
  'top-icon': {defaultValue: false, label: 'Top icon decorator', type: 'hidden'},
}


export default ExtendedWireframe
