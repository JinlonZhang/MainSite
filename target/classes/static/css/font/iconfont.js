;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-shanchu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M344.4593 791.382c15.4235 0 27.902-12.4795 27.902-27.902V456.558592c0-15.4225-12.4795-27.902-27.902-27.902-15.4225 0-27.902 12.4805-27.902 27.902v306.92249599999997C316.5573 778.9036 329.0368 791.382 344.4593 791.382zM511.872 791.382c15.4235 0 27.902-12.4795 27.902-27.902V456.558592c0-15.4225-12.4795-27.902-27.902-27.902s-27.902 12.4805-27.902 27.902v306.92249599999997C483.969 778.9036 496.4485 791.382 511.872 791.382zM679.2837 791.382c15.4235 0 27.902-12.4795 27.902-27.902V456.558592c0-15.4225-12.4795-27.902-27.902-27.902s-27.902 12.4805-27.902 27.902v306.92249599999997C651.3818 778.9036 663.8602 791.382 679.2837 791.382zM818.7935 149.6361H703.2340479999999c-12.4795-48.0113-55.8039-83.7059-107.6572-83.7059H428.16512000000006c-51.8533 0-95.1777 35.6946-107.6572 83.7059H204.949504c-61.5526 0-111.6078 50.0828-111.6078 111.6078v27.902976h27.901952v27.901952h55.803904v530.138112c0 61.526 50.0552 111.6078 111.6078 111.6078h446.432256c61.5547 0 111.6078-50.0818 111.6078-111.6078V317.047808h55.803904v-27.901952h27.901952v-27.902976C930.4013 199.7179 880.3482 149.6361 818.7935 149.6361zM428.1651 121.7341h167.411712c20.5445 0 38.3652 11.308 48.0389 27.902H380.12723200000005C389.801 133.0422 407.6206 121.7341 428.1651 121.7341zM790.8915 847.1859c0 30.7896-25.0399 55.8039-55.8039 55.8039H288.65536000000003c-30.763 0-59.6726-25.0143-59.6726-55.8039l3.8687-530.1381h558.040064V847.1859199999999zM149.1446 261.2439c0-30.7896 25.0419-55.8039 55.8039-55.8039H818.793472c30.7651 0 55.8039 25.0143 55.8039 55.8039H149.144576z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M890.92096 747.795456 383.327232 747.795456c-19.218432 0-34.801664 15.584256-34.801664 34.842624 0 19.219456 15.584256 34.802688 34.801664 34.802688L890.92096 817.440768c19.262464 0 34.843648-15.584256 34.843648-34.802688C925.764608 763.378688 910.183424 747.795456 890.92096 747.795456z"  ></path>' +
    '' +
    '<path d="M890.92096 477.524992 383.327232 477.524992c-19.218432 0-34.801664 15.58528-34.801664 34.842624 0 19.258368 15.584256 34.803712 34.801664 34.803712L890.92096 547.171328c19.262464 0 34.843648-15.545344 34.843648-34.803712C925.764608 493.109248 910.183424 477.524992 890.92096 477.524992z"  ></path>' +
    '' +
    '<path d="M383.327232 276.9408 890.92096 276.9408c19.262464 0 34.843648-15.583232 34.843648-34.842624 0-19.258368-15.582208-34.843648-34.843648-34.843648L383.327232 207.254528c-19.218432 0-34.801664 15.58528-34.801664 34.843648C348.524544 261.357568 364.1088 276.9408 383.327232 276.9408z"  ></path>' +
    '' +
    '<path d="M220.051456 164.092928l-86.322176 0c-19.260416 0-34.8416 15.58528-34.8416 34.803712l0 86.361088c0 19.219456 15.582208 34.884608 34.8416 34.884608l86.322176 0c19.260416 0 34.843648-15.666176 34.843648-34.884608l0-86.361088C254.895104 179.678208 239.310848 164.092928 220.051456 164.092928z"  ></path>' +
    '' +
    '<path d="M220.051456 434.32448l-86.322176 0c-19.260416 0-34.8416 15.624192-34.8416 34.88256l0 86.322176c0 19.258368 15.582208 34.842624 34.8416 34.842624l86.322176 0c19.260416 0 34.843648-15.58528 34.843648-34.842624l0-86.322176C254.895104 449.948672 239.310848 434.32448 220.051456 434.32448z"  ></path>' +
    '' +
    '<path d="M220.051456 704.591872l-86.322176 0c-19.260416 0-34.8416 15.58528-34.8416 34.842624l0 86.36416c0 19.218432 15.582208 34.801664 34.8416 34.801664l86.322176 0c19.260416 0 34.843648-15.584256 34.843648-34.801664l0-86.36416C254.895104 720.177152 239.310848 704.591872 220.051456 704.591872z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-edit" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M507.424 676.576l66.272-66.272-86.848-86.848-66.272 66.272 0 32 54.848 0 0 54.848 32 0zM758.848 265.152q-9.152-9.152-18.848 0.576l-200 200q-9.728 9.728-0.576 18.848t18.848-0.576l200-200q9.728-9.728 0.576-18.848zM804.576 604.576l0 108.576q0 68-48.288 116.288t-116.288 48.288l-475.424 0q-68 0-116.288-48.288t-48.288-116.288l0-475.424q0-68 48.288-116.288t116.288-48.288l475.424 0q36 0 66.848 14.272 8.576 4 10.272 13.152 1.728 9.728-5.152 16.576l-28 28q-8 8-18.272 4.576-13.152-3.424-25.728-3.424l-475.424 0q-37.728 0-64.576 26.848t-26.848 64.576l0 475.424q0 37.728 26.848 64.576t64.576 26.848l475.424 0q37.728 0 64.576-26.848t26.848-64.576l0-72q0-7.424 5.152-12.576l36.576-36.576q8.576-8.576 20-4t11.424 16.576zM749.728 182.848l164.576 164.576-384 384-164.576 0 0-164.576zM1003.424 258.272l-52.576 52.576-164.576-164.576 52.576-52.576q16-16 38.848-16t38.848 16l86.848 86.848q16 16 16 38.848t-16 38.848z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bianji" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M949.061632 870.581248l-831.488 0c-18.967552 0-34.34496-15.377408-34.34496-34.34496L83.228672 149.339136c0-18.967552 15.377408-34.34496 34.34496-34.34496l578.429952 0c18.967552 0 34.34496 15.377408 34.34496 34.34496s-15.377408 34.34496-34.34496 34.34496L151.918592 183.684096l0 618.207232 762.79808 0L914.716672 366.267392c0-18.967552 15.377408-34.34496 34.34496-34.34496s34.34496 15.377408 34.34496 34.34496l0 469.968896C983.406592 855.20384 968.029184 870.581248 949.061632 870.581248z"  ></path>' +
    '' +
    '<path d="M533.337088 527.13472c-9.890816 0-19.705856-4.250624-26.497024-12.47232-12.080128-14.623744-10.018816-36.271104 4.604928-48.352256l415.742976-343.450624c14.621696-12.079104 36.272128-10.018816 48.352256 4.604928 12.081152 14.623744 10.01984 36.271104-4.603904 48.352256l-415.742976 343.4496C548.790272 524.556288 541.04064 527.13472 533.337088 527.13472z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tianjia" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M773.813403 606.700849c-88.35635 0-159.966295 71.609944-159.966295 159.967318 0 88.35635 71.609944 159.965272 159.966295 159.965272 88.357374 0 159.966295-71.609944 159.966295-159.965272C933.780721 678.310793 862.170776 606.700849 773.813403 606.700849zM837.800739 798.660812l-31.993668 0 0 31.994692c0 17.620309-14.308891 31.992645-31.993668 31.992645s-31.993668-14.372336-31.993668-31.992645l0-31.994692-31.993668 0c-17.683754 0-31.993668-14.372336-31.993668-31.992645 0-17.683754 14.308891-31.994692 31.993668-31.994692l31.993668 0 0-31.992645c0-17.683754 14.308891-31.994692 31.993668-31.994692s31.993668 14.309914 31.993668 31.994692l0 31.992645 31.993668 0c17.683754 0 31.993668 14.309914 31.993668 31.994692C869.793384 784.288476 855.484494 798.660812 837.800739 798.660812zM552.145837 798.660812 165.942915 798.660812l0-63.986313 386.201899 0c3.228531-22.593578 9.82374-44.097334 19.266809-63.986313L165.942915 670.688185 165.942915 606.700849l451.130677 0c40.387849-39.578414 95.699596-63.986313 156.73981-63.986313 10.863419 0 21.542642 0.789992 31.993668 2.285043L805.807071 158.764933 677.833421 158.764933l0 127.972627-63.986313 0L613.847108 94.77862 101.956601 94.77862l0 831.855842 515.140527 0C582.801021 893.029086 559.274188 848.490707 552.145837 798.660812zM165.942915 286.73756l319.93259 0 0 63.986313L165.942915 350.723873 165.942915 286.73756zM165.942915 478.728222l511.890506 0 0 63.986313L165.942915 542.714536 165.942915 478.728222z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bianji1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M438.643272 685.986613c15.757892 1.108241 31.845289-3.647063 44.715411-14.284331l4.369517-1.39579L350.951047 533.529339l-1.393743 4.363378c-10.643408 12.873192-15.400758 28.967752-14.290471 44.730761l-48.523133 151.887292L438.643272 685.986613zM933.850817 132.141576l-44.73997-44.73997c-24.707728-24.707728-64.766073-24.707728-89.473801 0l-43.342134 43.341111 134.217864 134.217864 43.338041-43.339064C958.564685 196.913788 958.564685 156.850327 933.850817 132.141576zM844.3719 311.102481 710.153012 176.884616l-311.785026 311.780933L532.588921 622.889553 844.3719 311.102481zM828.363298 891.856377 130.389676 891.856377 130.389676 193.883779l444.88237 0 0-61.298088L132.364657 132.585691c-34.945907 0-63.273069 28.327162-63.273069 63.273069l0 695.998641c0 34.945907 28.327162 63.273069 63.273069 63.273069l695.998641 0c34.945907 0 63.273069-28.327162 63.273069-63.273069L891.636367 448.947965l-63.273069 0L828.363298 891.856377z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-icon-liebiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M 63.6747 150.312 c 0 22.5127 18.4195 40.9322 40.9322 40.9322 l 46.0488 0 c 22.5127 0 40.9322 -18.4195 40.9322 -40.9322 l 0 -46.0488 c 0 -22.5127 -18.4195 -40.9322 -40.9322 -40.9322 l -46.0488 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 L 63.6747 150.312 Z"  ></path>' +
    '' +
    '<path d="M 283.631 106.822 c -11.2564 0 -20.4661 9.20976 -20.4661 20.4661 l 0 0 c 0 11.2564 9.20976 20.4661 20.4661 20.4661 l 654.916 0 c 11.2564 0 20.4661 -9.20976 20.4661 -20.4661 l 0 0 c 0 -11.2564 -9.20976 -20.4661 -20.4661 -20.4661 L 283.631 106.822 Z"  ></path>' +
    '' +
    '<path d="M 63.6747 534.464 c 0 22.5127 18.4195 40.9322 40.9322 40.9322 l 46.0488 0 c 22.5127 0 40.9322 -18.4195 40.9322 -40.9322 l 0 -46.0488 c 0 -22.5127 -18.4195 -40.9322 -40.9322 -40.9322 l -46.0488 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 L 63.6747 534.464 Z"  ></path>' +
    '' +
    '<path d="M 263.165 511.439 c 0 11.2564 9.20976 20.4661 20.4661 20.4661 l 654.916 0 c 11.2564 0 20.4661 -9.20976 20.4661 -20.4661 l 0 0 c 0 -11.2564 -9.20976 -20.4661 -20.4661 -20.4661 l -654.916 0 C 272.375 490.973 263.165 500.183 263.165 511.439 L 263.165 511.439 Z"  ></path>' +
    '' +
    '<path d="M 63.6747 919.056 c 0 22.5127 18.4195 40.9322 40.9322 40.9322 l 46.0488 0 c 22.5127 0 40.9322 -18.4195 40.9322 -40.9322 l 0 -46.0488 c 0 -22.5127 -18.4195 -40.9322 -40.9322 -40.9322 l -46.0488 0 c -22.5127 0 -40.9322 18.4195 -40.9322 40.9322 L 63.6747 919.056 Z"  ></path>' +
    '' +
    '<path d="M 263.164 896.031 c 0 11.2564 9.20976 20.4661 20.4661 20.4661 l 654.916 0 c 11.2564 0 20.4661 -9.20976 20.4661 -20.4661 l 0 0 c 0 -11.2564 -9.20976 -20.4661 -20.4661 -20.4661 l -654.916 0 C 272.374 875.565 263.164 884.775 263.164 896.031 L 263.164 896.031 Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-password" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M853.932164 349.716959l-91.221832 0c0-146.51384-111.981287-258.495127-254.702534-258.495127-142.920858 0-254.702534 111.981287-254.702534 258.495127L161.883821 349.716959C161.883821 173.860429 316.980897 0 507.808187 0 698.635478 0 853.932164 173.860429 853.932164 349.716959L853.932164 349.716959zM969.706043 499.624172c0-50.301754-40.920078-91.221832-91.221832-91.221832L147.511891 408.402339c-50.301754 0-91.221832 40.920078-91.221832 91.221832l0 433.153996c0 50.301754 40.920078 91.221832 91.221832 91.221832l730.77271 0c50.301754 0 91.221832-40.920078 91.221832-91.221832L969.506433 499.624172 969.706043 499.624172zM585.25692 838.362573c0 37.726316-30.540351 68.466277-68.466277 68.466277l-9.780897 0c-37.726316 0-68.466277-30.540351-68.466277-68.466277l0-185.637427c0-37.726316 30.540351-68.466277 68.466277-68.466277l9.780897 0c37.726316 0 68.466277 30.540351 68.466277 68.466277L585.25692 838.362573 585.25692 838.362573zM585.25692 838.362573"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-mima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M500.363636 605.090909l23.272727 0C542.906182 605.090909 558.545455 620.730182 558.545455 640l0 162.909091c0 19.269818-15.639273 34.909091-34.932364 34.909091l-23.272727 0c-19.293091 0-34.909091-15.639273-34.909091-34.909091l0-162.909091C465.454545 620.730182 481.070545 605.090909 500.363636 605.090909z"  ></path>' +
    '' +
    '<path d="M884.363636 488.727273l0 419.746909C884.363636 933.678545 863.511273 954.181818 837.818182 954.181818L186.181818 954.181818c-25.669818 0-46.545455-20.503273-46.545455-45.707636L139.636364 488.727273 884.363636 488.727273M954.181818 418.909091 69.818182 418.909091l0 489.565091C69.818182 972.288 121.902545 1024 186.181818 1024l651.636364 0c64.279273 0 116.363636-51.712 116.363636-115.525818L954.181818 418.909091 954.181818 418.909091z"  ></path>' +
    '' +
    '<path d="M861.090909 418.909091l-69.818182 0 0-69.818182c0-156.997818-131.095273-279.272727-279.272727-279.272727-151.831273 0-279.272727 127.418182-279.272727 279.272727l0 69.818182L162.909091 418.909091l0-69.818182C162.909091 158.743273 321.652364 0 512 0c187.950545 0 349.090909 152.273455 349.090909 349.090909L861.090909 418.909091z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiugai" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M468.096 415.36 334.72 281.984 366.272 250.496 189.248 73.408 64 198.72 241.024 375.744 272.512 344.192 405.824 477.568Z"  ></path>' +
    '' +
    '<path d="M906.688 853.952c18.048-27.776-0.832-85.44-0.832-85.44l-204.224-204.224c-116.864 9.216-185.856 157.952-185.856 157.952s183.744 191.232 214.976 214.976 84.032 8.64 84.032 8.64S888.64 881.664 906.688 853.952zM749.056 895.872l-166.656-166.656c-9.6-9.472-9.6-25.024-0.064-34.56 9.472-9.472 25.088-9.472 34.56 0l166.656 166.656c9.472 9.472 9.472 25.088 0 34.56C774.08 905.408 758.592 905.408 749.056 895.872zM824.64 820.288l-166.656-166.656c-9.472-9.536-9.472-25.152 0-34.56 9.536-9.6 25.024-9.6 34.56 0l166.656 166.656c9.472 9.472 9.472 25.024 0 34.624C849.6 829.888 834.176 829.824 824.64 820.288z"  ></path>' +
    '' +
    '<path d="M386.304 755.264c0.384-3.392 1.28-6.656 2.88-8.832 4.608-6.08 160.448-192.448 271.68-219.968 79.104 25.344 169.28 6.72 232.128-56.064 52.288-52.288 73.92-123.584 65.152-191.616l-158.592 165.568-159.232-26.688L590.144 273.856l175.424-191.936c-69.568-10.624-143.04 10.88-196.608 64.448-66.688 66.624-83.648 164.032-51.136 246.4C510.464 428.224 487.936 478.848 428.544 542.208c-122.88 131.008-122.88 131.008-122.88 131.008s-1.28 1.664-4.032 3.328c-48.704-16.32-104.576-5.248-143.36 33.472-54.592 54.592-54.592 143.232 0 197.824s143.104 54.592 197.76-0.064C397.312 866.496 407.296 805.952 386.304 755.264zM201.664 869.248c-31.552-31.488-31.552-82.688 0-114.24 31.552-31.488 82.688-31.488 114.176 0.064s31.552 82.688 0 114.176C284.352 900.8 233.216 900.8 201.664 869.248z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xinwen" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M648.533333 705.422222l-364.088889 0c-12.561067 0-22.755556-10.171733-22.755556-22.755556s10.194489-22.755556 22.755556-22.755556l364.088889 0c12.583822 0 22.755556 10.171733 22.755556 22.755556S661.117156 705.422222 648.533333 705.422222zM648.533333 591.644444l-364.088889 0c-12.561067 0-22.755556-10.171733-22.755556-22.755556s10.194489-22.755556 22.755556-22.755556l364.088889 0c12.583822 0 22.755556 10.171733 22.755556 22.755556S661.117156 591.644444 648.533333 591.644444zM375.466667 364.088889c-12.561067 0-22.755556-10.171733-22.755556-22.755556s10.194489-22.755556 22.755556-22.755556l182.044444 0c12.583822 0 22.755556 10.171733 22.755556 22.755556s-10.171733 22.755556-22.755556 22.755556L375.466667 364.088889zM671.288889 455.111111c0 12.583822-10.171733 22.755556-22.755556 22.755556l-364.088889 0c-12.561067 0-22.755556-10.171733-22.755556-22.755556s10.194489-22.755556 22.755556-22.755556l364.088889 0C661.117156 432.355556 671.288889 442.527289 671.288889 455.111111zM853.333333 864.711111l-682.666667 0c-37.705956 0-68.266667-30.583467-68.266667-68.266667L102.4 227.555556c0-37.6832 30.560711-68.266667 68.266667-68.266667l341.333333 0 204.8 0 68.266667 0c25.122133 0 45.511111 20.388978 45.511111 45.511111l0 318.577778 0 74.569956L830.577778 728.177778c0 12.583822-10.171733 22.755556-22.755556 22.755556s-22.755556-10.171733-22.755556-22.755556l0-136.533333 0-68.266667L785.066667 250.311111c0-25.122133-20.388978-45.511111-45.511111-45.511111l-273.066667 0-68.266667 0-204.8 0c-25.122133 0-45.511111 20.388978-45.511111 45.511111l0 523.377778c0 25.122133 20.388978 45.511111 45.511111 45.511111l568.888889 0 45.511111 0 22.755556 0c25.122133 0 45.511111-20.388978 45.511111-45.511111L876.088889 250.311111c0-12.583822 10.171733-22.755556 22.755556-22.755556s22.755556 10.171733 22.755556 22.755556l0 523.377778 0 22.755556C921.6 834.127644 891.016533 864.711111 853.333333 864.711111z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-bianji2" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M819.2 887.716978 204.8 887.716978c-37.705956 0-68.266667-30.583467-68.266667-68.266667l0-614.4c0-37.6832 30.560711-68.266667 68.266667-68.266667l341.333333 0 45.511111 0 22.755556 0c12.583822 0 22.755556 10.171733 22.755556 22.755556s-10.171733 22.755556-22.755556 22.755556l-22.755556 0-45.511111 0L227.555556 182.294756c-25.122133 0-45.511111 20.388978-45.511111 45.511111l0 568.888889c0 25.122133 20.388978 45.511111 45.511111 45.511111l568.888889 0c25.122133 0 45.511111-20.388978 45.511111-45.511111l0-364.088889 0-41.3696 0-4.141511c0-12.583822 10.171733-22.755556 22.755556-22.755556s22.755556 10.171733 22.755556 22.755556l0 45.511111 0 386.844444C887.466667 857.133511 856.8832 887.716978 819.2 887.716978zM447.670044 586.274133c-8.874667 8.897422-23.278933 8.897422-32.176356 0s-8.897422-23.278933 0-32.176356L824.411022 142.927644c8.897422-8.897422 23.278933-8.897422 32.176356 0s8.897422 23.301689 0 32.176356L447.670044 586.274133z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-yonghu" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M799.093266 627.567428c24.849364 0 31.119568-6.333326 31.119568-31.119568 0-14.349929-10.183821-26.09078-20.599092-34.317792l-1.977849-1.977849c-34.633407-26.785132-70.781762-52.307806-112.337642-68.172684 52.854871-45.364292 86.499353-112.569092 86.499353-187.68529 0-136.555777-110.75957-247.294306-247.315347-247.294306S287.208992 167.738468 287.208992 304.294245c0 75.116198 33.644482 142.320998 86.478312 187.68529C205.001993 556.701502 84.963363 719.81096 84.858159 911.409867l0 0.084164c0.105205 24.744159 10.962336 43.197074 35.664413 43.197074 24.912487 0 26.679927-17.884809 26.74305-42.607927 0-198.374093 119.218033-385.76481 387.237676-381.325169 81.34432 1.346621 176.659831 32.634516 234.77494 81.049746 15.780714 13.150595 19.252471 13.318922 26.30119 15.338854L799.093266 627.567428zM534.503298 482.700475c-127.718577-0.252491-189.116075-91.612304-189.116075-178.40623 0-86.751844 70.150533-188.316518 189.368566-188.316518 138.533626 0 189.368566 102.616722 189.368566 189.368566C724.124355 392.161259 643.495428 485.982863 534.503298 482.700475L534.503298 482.700475zM616.941747 746.490887c0 24.828323 20.136191 36.69542 44.964514 36.69542l239.86685 0c24.828323 0 44.964514-11.867097 44.964514-36.69542 0-24.870405-20.136191-34.317792-44.964514-34.317792l-239.86685 0C637.077938 712.173095 616.941747 721.620482 616.941747 746.490887L616.941747 746.490887zM901.773111 892.746543l-239.86685 0c-24.828323 0-44.964514 8.795118-44.964514 33.623441 0 24.870405 20.136191 33.896973 44.964514 33.896973l239.86685 0c24.828323 0 44.964514-9.047609 44.964514-33.896973C946.737625 901.541661 926.601434 892.746543 901.773111 892.746543L901.773111 892.746543zM901.773111 892.746543"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sanjiao" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M196.03456 603.14496c-50.26048 0-91.1296-40.8896-91.1296-91.15008s40.8704-91.13984 91.1296-91.13984 91.1296 40.88064 91.1296 91.13984S246.29504 603.14496 196.03456 603.14496zM196.03456 457.33504c-30.1504 0-54.68032 24.49024-54.68032 54.65984s24.52992 54.65984 54.68032 54.65984 54.68032-24.49024 54.68032-54.65984S226.18496 457.33504 196.03456 457.33504z"  ></path>' +
    '' +
    '<path d="M827.94496 214.27456c-50.24 0-91.1104-40.8896-91.1104-91.15008 0-50.25024 40.8704-91.13984 91.1104-91.13984 50.26048 0 91.15008 40.8896 91.15008 91.13984C919.09504 173.38496 878.20544 214.27456 827.94496 214.27456zM827.94496 68.46464c-30.12992 0-54.65984 24.49024-54.65984 54.65984s24.52992 54.65984 54.65984 54.65984c30.16064 0 54.69952-24.49024 54.69952-54.65984S858.1056 68.46464 827.94496 68.46464z"  ></path>' +
    '' +
    '<path d="M258.16448 491.98464c-6.11968 0-12.09984-3.08992-15.54048-8.70016-5.28-8.5504-2.59968-19.7696 5.98016-25.09056l507.70048-312.41984c8.5696-5.25056 19.79008-2.6304 25.08032 6.00064 5.26976 8.5504 2.58944 19.7696-5.9904 25.09056L267.69536 489.28512C264.71552 491.09504 261.43488 491.98464 258.16448 491.98464z"  ></path>' +
    '' +
    '<path d="M827.94496 992.01536c-50.24 0-91.1104-40.8896-91.1104-91.15008 0-50.28992 40.8704-91.22048 91.1104-91.22048 50.26048 0 91.15008 40.93056 91.15008 91.22048C919.09504 951.12448 878.20544 992.01536 827.94496 992.01536zM827.94496 846.13504c-30.12992 0-54.65984 24.56064-54.65984 54.73024s24.52992 54.65984 54.65984 54.65984c30.16064 0 54.69952-24.49024 54.69952-54.65984S858.1056 846.13504 827.94496 846.13504z"  ></path>' +
    '' +
    '<path d="M765.83552 880.85504c-3.2704 0-6.54976-0.8896-9.5296-2.69952L248.60544 565.7344c-8.57984-5.31968-11.26016-16.54016-5.98016-25.09056 5.26976-8.62976 16.48-11.24992 25.07008-6.00064L775.39456 847.0656c8.57984 5.31968 11.26016 16.54016 5.9904 25.09056C777.93536 877.76512 771.9552 880.85504 765.83552 880.85504z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-tianjia1" viewBox="0 0 1026 1024">' +
    '' +
    '<path d="M513.883586 0c-282.744343 0-511.974197 229.229854-511.974197 511.974197 0 282.744343 229.178249 512.025803 511.974197 512.025803 282.795948 0 512.025803-229.281459 512.025803-512.025803C1025.909389 229.229854 796.679534 0 513.883586 0zM513.883586 971.311193c-253.639067 0-459.233785-205.697929-459.233785-459.336995 0-253.639067 205.594719-459.28539 459.233785-459.28539 253.690672 0 459.28539 205.646324 459.28539 459.28539C973.168976 765.613264 767.574258 971.311193 513.883586 971.311193z"  ></path>' +
    '' +
    '<path d="M773.715265 493.189941l-240.995817 0L532.719448 252.245729c0-14.552638-11.817568-26.370206-26.370206-26.370206-14.501033 0-26.318601 11.817568-26.318601 26.370206l0 240.944212-240.995817 0c-14.501033 0-26.318601 11.765963-26.318601 26.318601 0 14.552638 11.817568 26.370206 26.318601 26.370206l240.995817 0 0 240.995817c0 14.501033 11.817568 26.318601 26.318601 26.318601 14.552638 0 26.370206-11.817568 26.370206-26.318601l0-240.995817 240.995817 0c14.501033 0 26.318601-11.817568 26.318601-26.370206C800.033866 504.955904 788.216298 493.189941 773.715265 493.189941z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-shanchu1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512 97.501c58.656 0 114 11.172 166 33.5 52 22.343 97.328 52.844 136 91.5 38.656 38 69.156 83.001 91.5 135.001 22.329 52 33.5 107.344 33.5 166 0 59.344-11.172 114.844-33.5 166.5-22.343 51.671-52.844 96.844-91.5 135.5-38.672 38.672-84 69.172-136 91.5-52 22.343-107.344 33.5-166 33.5-58.672 0-114-11.156-166-33.5-52-22.329-97.344-52.828-136-91.5-38.672-38.656-69.172-83.828-91.5-135.5-22.343-51.657-33.5-107.156-33.5-166.5 0-58.656 11.156-114 33.5-166 22.329-52 52.828-97.001 91.5-135.001 38.656-38.656 84-69.156 136-91.5 52-22.329 107.328-33.5 166-33.5zM725.001 676.5l-153.001-152.999 153.001-153.001-60-60-153.001 153.001-152.999-153.001-60 60 153.001 153.001-153.001 152.999 60 61.001 153.001-153.001 153.001 153.001 59.999-61.001z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-xiugaimima" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M951.691649 804.588825 700.041212 544.878828c-10.903328-11.279904-28.628014-11.279904-39.529295 0l-22.169929 22.884197-44.340881-45.769416 97.861842-101.009532 44.339858 0c109.727077 0 167.738305-69.846788 167.738305-201.990411 0-9.999748-5.015224-19.269879-13.235442-24.546046-8.248871-5.276167-18.540262-5.742794-27.227108-1.25355l-93.809549 48.420803-27.402093-28.305673 46.904263-96.841605c4.344958-8.92016 3.877307-19.560498-1.252527-28.042683-5.073552-8.512884-14.080693-13.70207-23.788799-13.70207-128.004349 0-195.694007 59.876716-195.694007 173.131129l0 45.768393-97.859795 101.009532L314.410318 233.42433l22.169929-22.883173c6.076392-6.26775 9.021467-15.10093 7.972579-23.904433-1.048889-8.833179-5.976108-16.674775-13.366426-21.223371L191.38947 78.833463c-10.990309-6.821359-25.069979-5.0142-34.150798 4.343935l-27.955702 28.859281c-9.081843 9.358135-10.800997 23.904433-4.211928 35.243689l83.883479 144.270824c4.430916 7.637957 12.008498 12.71151 20.566408 13.788028 1.136893 0.146333 2.27481 0.234337 3.41068 0.234337 7.359618 0 14.487969-3.031033 19.764136-8.454556l22.169929-22.883173 156.180062 161.177889L101.326245 775.730567c-3.075035 3.146667-5.392824 6.995321-6.762007 11.251252l-27.956725 86.580914c-3.352351 10.377348-0.728594 21.805632 6.748704 29.53057l27.970028 28.858258c5.321192 5.481851 12.462846 8.454556 19.765159 8.454556 2.959402 0 5.946432-0.466628 8.833179-1.484817l83.883479-28.862351c4.125971-1.427512 7.871271-3.787256 10.93198-6.965645l329.71949-340.285127 44.338834 45.76737-22.168905 22.853497c-10.918677 11.280928-10.918677 29.531594 0 40.812521l251.635087 259.71102c5.450129 5.627161 12.622482 8.454556 19.763113 8.454556 7.172353 0 14.312984-2.827395 19.764136-8.454556l83.898829-86.578868C962.593953 834.120418 962.593953 815.842123 951.691649 804.588825zM238.484068 230.188636l-49.863664-85.763292 83.09758 51.452859L238.484068 230.188636zM189.86065 857.472266l-61.219293 21.074991-3.526313-3.643993 20.404726-63.200414 470.637963-485.72252c5.246491-5.421476 8.190543-12.768815 8.190543-20.406772l0-57.719586c0-48.829102 12.171204-98.620112 92.906993-111.971188l-34.035164 70.196759c-5.378497 11.106965-3.26537 24.546046 5.247514 33.320896l55.926754 57.719586c8.510838 8.774851 21.51399 10.961656 32.269961 5.423523l68.012-35.128055c-12.914124 83.315544-61.161988 95.878674-108.47455 95.878674l-55.92573 0c-7.404644 0-14.518668 3.032056-19.764136 8.423857L189.86065 857.472266zM848.027661 870.736361 635.936195 651.834792l44.339858-45.76737 212.090443 218.898499L848.027661 870.736361z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-liebiao-80" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M840.402 293.861h-246.301c-15.139 0-27.369-12.261-27.369-27.369 0-15.103 12.231-27.364 27.369-27.364h246.301c15.133 0 27.369 12.261 27.369 27.364 0 15.109-12.236 27.369-27.369 27.369v0zM840.402 430.695h-246.301c-15.139 0-27.369-12.261-27.369-27.369 0-15.103 12.231-27.364 27.369-27.364h246.301c15.133 0 27.369 12.261 27.369 27.364 0 15.109-12.236 27.369-27.369 27.369v0zM840.402 649.632h-246.301c-15.139 0-27.369-12.236-27.369-27.369s12.231-27.364 27.369-27.364h246.301c15.133 0 27.369 12.231 27.369 27.364s-12.236 27.369-27.369 27.369v0zM840.402 786.467h-246.301c-15.139 0-27.369-12.236-27.369-27.369s12.231-27.364 27.369-27.364h246.301c15.133 0 27.369 12.231 27.369 27.364s-12.236 27.369-27.369 27.369v0zM402.529 485.428h-164.199c-45.266 0-82.103-36.835-82.103-82.102v-164.199c0-45.266 36.835-82.102 82.103-82.102h164.199c45.266 0 82.102 36.835 82.102 82.103v164.199c0 45.266-36.835 82.102-82.102 82.102v0zM238.33 211.759c-15.080 0-27.369 12.29-27.369 27.369v164.199c0 15.080 12.29 27.369 27.369 27.369h164.199c15.080 0 27.369-12.29 27.369-27.369v-164.199c0-15.080-12.29-27.369-27.369-27.369h-164.199zM402.529 868.57h-164.199c-45.266 0-82.103-36.839-82.103-82.103v-164.204c0-45.263 36.835-82.102 82.103-82.102h164.199c45.266 0 82.102 36.839 82.102 82.102v164.204c0 45.262-36.835 82.103-82.102 82.103v0zM238.33 594.899c-15.080 0-27.369 12.26-27.369 27.364v164.204c0 15.104 12.29 27.364 27.369 27.364h164.199c15.080 0 27.369-12.26 27.369-27.364v-164.204c0-15.104-12.29-27.364-27.369-27.364h-164.199zM238.33 594.899z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sanjiao1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M779.57257 511.642866 332.785827 64.856124 244.425384 153.215544 603.210863 511.998977 244.425384 870.783433 332.785827 959.143876 779.57257 512.355087 779.217483 511.998977Z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sanjiao-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M244.427 512.357l446.787 446.787 88.36-88.359-358.785-358.783 358.785-358.784-88.36-88.36-446.433 447.145z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-unie621" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M980.746826 308.98531l-459.606263 458.668769-23.818198-3.662085-3.662085-23.818198 459.606263-459.606263zM804.966766 612.030133l0 265.51578-703.120239 0 0-429.372093 510.875447 0 0-58.593353-517.262123 0q-21.972507 0-37.089593 13.271395t-15.117085 31.581817l0 455.944178q0 19.21862 15.117085 32.490014t37.089593 13.271395l715.952183 0q21.06431 0 36.620846-13.271395t15.556535-32.490014l0-278.318428-58.593353 0zM293.183122 38.899248q-43.945015 22.880704-77.372523 58.124606t-52.646128 75.995579-31.142367 87.421283-12.363198 93.397805 4.130831 94.306002l56.776959-1.845691q-8.232366-50.360987-4.570282-103.915312t16.933479-100.721974 45.321959-88.798227 79.657664-66.386269q53.114875-28.38848 111.708228-32.958761t111.708228 11.894451 99.34503 53.554325 73.710438 89.266974l47.6071-24.726395q-32.958761-62.255438-87.421283-106.200453t-117.186707-63.632382-132.303792-13.740141-131.835045 38.905987z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M879.206 301.466l-379.153 455.339-379.221-455.339z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-down-copy1" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M144.794 722.534l379.153-455.339 379.221 455.339z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-edit-1-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M786.637 989.867h-615.731c-56.593 0-102.639-46.046-102.639-102.639v-684.169c0-56.593 46.046-102.639 102.639-102.639h478.925c18.91 0 34.202 15.326 34.202 34.202s-15.292 34.202-34.202 34.202h-478.925c-18.842 0-34.202 15.36-34.202 34.202v684.169c0 18.876 15.36 34.202 34.202 34.202h615.765c18.876 0 34.202-15.326 34.202-34.202v-547.294c0-18.876 15.292-34.202 34.202-34.202s34.202 15.326 34.202 34.202v547.328c0 56.593-46.046 102.639-102.639 102.639v0zM585.66 442.539c-8.772 0-17.51-3.345-24.166-10.035-13.38-13.38-13.38-34.987 0-48.367l339.968-339.968c13.38-13.38 34.987-13.38 48.367 0 13.38 13.38 13.38 34.987 0 48.367l-339.968 339.968c-6.656 6.69-15.428 10.035-24.201 10.035v0zM444.553 442.539h-205.244c-18.876 0-34.202-15.326-34.202-34.202s15.326-34.202 34.202-34.202h205.244c18.876 0 34.202 15.326 34.202 34.202s-15.326 34.202-34.202 34.202v0zM649.83 647.782h-410.522c-18.876 0-34.202-15.292-34.202-34.202s15.326-34.202 34.202-34.202h410.487c18.91 0 34.202 15.292 34.202 34.202 0.034 18.91-15.258 34.202-34.167 34.202v0zM649.83 647.782z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-angle-down" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M512.357 779.573l446.787-446.787-88.359-88.36-358.783 358.785-358.784-358.785-88.36 88.36 447.145 446.433z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-sanjiao-copy-copy" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M511.643 244.427l-446.787 446.787 88.359 88.36 358.783-358.785 358.784 358.785 88.36-88.36-447.145-446.433z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)