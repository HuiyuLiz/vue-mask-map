(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&p.push(i[o][0]),i[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(p.length)p.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},i={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/vue-mask-map/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=a("bc3a"),n=a.n(i),o=a("a7fe"),r=a.n(o),c=(a("6cc5"),a("e11e")),l=a.n(c),u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("header",[a("NavBar",{attrs:{currentRouter:t.currentRouter},on:{checkToggle:t.checkToggle,changeRouter:t.changeRouter}})],1),a("Modal",{attrs:{currentRouter:t.currentRouter},on:{changeRouter:t.changeRouter}}),a("section",{staticClass:"bg-light"},[a("main",{ref:"content",staticClass:"container overflow-xs-auto",class:{"overflow-hidden":t.isFocus},attrs:{role:"main"}},[a("div",{staticClass:"row d-flex justify-content-sm-center"},[a("div",{staticClass:"col-md-8 col-lg-5 bg-light pt-4 mb-md-3 min-height px-0 px-md-3"},[a("div",{staticClass:"d-flex justify-content-between mb-3 px-3"},[a("div",{staticClass:"form-group d-none d-md-block",staticStyle:{width:"70%"}},[a("vue-bootstrap-typeahead",{ref:"typeahead",attrs:{data:t.addresses,placeholder:"請輸入地址或區域"},on:{hit:function(e){t.selectedAddress=e}},model:{value:t.searchText,callback:function(e){t.searchText="string"===typeof e?e.trim():e},expression:"searchText"}})],1),a("div",{staticClass:"form-group d-flex d-md-none w-100 mb-3"},[t.isFocus?t._e():a("div",{staticClass:"input-icon-group"},[a("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.searchInput,expression:"searchInput",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"目前位置"},domProps:{value:t.searchInput},on:{focus:t.onFocus,click:t.onFocus,input:function(e){e.target.composing||(t.searchInput=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t._m(0)]),a("div",{staticClass:"d-flex arrow-input-group"},[t.isFocus?a("div",{staticClass:"btn px-3",on:{click:function(e){t.isFocus=!t.isFocus}}},[a("i",{staticClass:"material-icons align-self-center text-center text-secondary font-weight-bold arrow-back-icon"},[t._v("arrow_back_ios")])]):t._e(),t.isFocus?a("vue-bootstrap-typeahead",{staticClass:"w-100 arrow-back-input",attrs:{data:t.addresses,placeholder:"請輸入地址或區域"},on:{hit:function(e){t.selectedAddress=e}},model:{value:t.searchText,callback:function(e){t.searchText="string"===typeof e?e.trim():e},expression:"searchText"}}):t._e()],1)]),a("div",{staticClass:"btn btn-primary w-25 py-2 d-none d-md-flex justify-content-center align-items-center",on:{click:t.searchLocation}},[a("div",{staticClass:"align-middle"},[t._v("搜尋")])])]),t.isFocus?t._e():a("div",{staticClass:"h3 text-primary d-flex align-items-baseline px-3"},[a("div",{staticClass:"h3 m-0 font-weight-heavy mb-3"},[t._v(t._s(t.day))]),a("span",{staticClass:"h6 m-0 ml-2"},[t._v("購買日")]),a("div",{staticStyle:{cursor:"pointer",position:"relative",top:"3px"},on:{click:function(e){t.currentRouter="口罩怎麼買"}}},[a("img",{staticClass:"ml-1",staticStyle:{width:"24px",height:"24px",display:"block"},attrs:{src:this.publicPath+"icon/ic_help@2x@2x.png"}})])]),t.isFocus?t._e():a("div",{staticClass:"d-flex justify-content-between mb-3 px-3 align-items-center mb-3"},[a("small",{staticClass:"text-primary mb-0 d-flex flex-column"},[t.isUserLocation?a("span",{staticClass:"pb-1"},[t._v("距離方圓 3公里 以內的供應商")]):a("span",{staticClass:"pb-1"},[t._v("附近健保特約藥局或衛生所")]),a("span",{staticClass:"d-flex justify-content-space"},[t._v(" 資訊更新時間 "+t._s(t.update_time)+" "),t.isLoading?a("div",{staticClass:"ml-3 fa-1x"},[a("i",{staticClass:"fas fa-spinner fa-pulse text-primary"})]):t._e()])]),a("div",{staticClass:"btn btn-outline-primary btn-rounded border-bold py-2",staticStyle:{width:"96px","min-width":"25%"},on:{click:t.getData}},[t._v("重整列表")])]),t.isFocus?t._e():a("div",{staticClass:"px-0 px-md-3 card-list px-0 m-auto"},[a("div",{staticClass:"px-0 px-lg-3 scrollable-content mt-4"},[t.filterData.length>0?[t._l(t.filterStore,(function(e,s){return a("div",{key:s,ref:"card",refInFor:!0,staticClass:"card mx-3 mx-lg-0 mb-4",class:{fade:!t.isFade,"fade show":t.isFade},on:{click:function(a){return t.moveToStore(e)}}},[a("div",{staticClass:"card-body"},[a("div",{staticClass:"d-flex justify-content-between"},[a("CardStockItem",{attrs:{mask:e.properties.mask_adult,"mask-type":"成人"}}),a("CardStockItem",{attrs:{mask:e.properties.mask_child,"mask-type":"兒童"}})],1),a("div",{staticClass:"card-title mt-4 text-primary mb-0"},[a("div",{staticClass:"d-flex align-items-baseline mb-1"},[a("div",{staticClass:"h5 font-weight-bold p-0 m-0 mr-1 front-border"},[t._v(t._s(s+1)+". "+t._s(e.properties.name))]),t.isUserLocation?a("small",{staticClass:"h7"},[t._v(t._s(e.distance)+"km")]):t._e()]),a("div",{staticClass:"card-text mb-1 d-flex justify-content-between align-items-baseline mt-3"},[a("p",{staticClass:"mb-3 mr-1 d-flex w-90 justify-content-start"},[a("span",{staticClass:"mr-3"},[t._v("地址")]),a("span",{staticClass:"text-secondary w-75"},[t._v(t._s(e.properties.address))])]),a("small",{staticClass:"ml-auto w-25 text-right",attrs:{href:"javascript:;"}},[a("a",{attrs:{target:"_blank",rel:"noopener noreferrer",href:"https://www.google.com/maps/search/"+e.properties.name+"+"+e.properties.address}},[a("u",[t._v("查看地圖")])])])]),a("div",{staticClass:"card-text d-flex justify-content-between align-items-baseline mb-3"},[a("p",{staticClass:"mb-0"},[a("span",{staticClass:"mr-3"},[t._v("電話")]),a("span",{staticClass:"text-secondary"},[t._v(t._s(e.properties.phone))])]),a("small",{staticClass:"ml-auto",attrs:{href:"javascript:;"}},[a("a",{attrs:{href:"tel:"+e.properties.phone}},[a("u",[t._v("撥打電話")])])])]),a("div",{staticClass:"card-text justify-content-between align-items-baseline d-none",class:{"d-flex":""!==e.properties.note&&"-"!==e.properties.note||""!==e.properties.custom_note}},[a("div",{staticClass:"mb-0 d-flex w-100"},[a("p",{staticClass:"mr-3"},[t._v("備註")]),a("div",{staticClass:"text-secondary w-75"},["-"!==e.properties.note?a("p",{staticClass:"mb-1 pb-0"},[t._v(" "+t._s(e.properties.note)+" "),a("br")]):t._e(),a("p",{staticClass:"mb-0 pb-0"},[t._v(t._s(e.properties.custom_note))])])])])])])])})),a("div",{staticClass:"text-center mt-3"},[t.loadingData<t.filterData.length||t.filterData.length>t.loadingData?a("div",{staticClass:"text-center load-data mb-2",staticStyle:{hight:"25px"}},[a("small",{staticClass:"text-primary"},[t.isLoadingMore?a("div",{staticClass:"lds-ellipsis"},[a("div"),a("div"),a("div"),a("div")]):a("p",[t._v("還有 "+t._s(t.filterData.length-t.loadingData)+" 筆")])])]):t._e(),a("div",{staticClass:"button-group"},[t.loadingData<t.filterData.length||t.filterData.length>t.loadingData?a("button",{staticClass:"btn btn-primary btn-rounded py-2 btn-shadow load",staticStyle:{width:"40%"},on:{click:t.loadMore}},[t._v("查看更多")]):t._e(),t.filterData.length>1?a("button",{staticClass:"btn btn-primary btn-shadow btn-circle d-none position-go-top",class:{"d-flex btn-scroll-animation":t.scrollFlag},on:{click:t.backToTop}},[t._v("TOP")]):t._e(),t.filterData.length>1?a("button",{staticClass:"btn btn-primary btn-shadow btn-circle d-none d-md-flex position-go-card",on:{click:t.backToCard}},[t._v("TOP")]):t._e()])])]:t._e(),t.searchStatus?a("div",{staticClass:"mb-4 mx-3 mx-md-0 text-primary d-flex"},[t._v(" 查無此地點 "),a("i",{staticClass:"material-icons ml-1"},[t._v("error")])]):t._e()],2)]),t.isFocus?[a("div",{staticClass:"d-block d-md-none"},[a("div",{staticClass:"flex-fluid px-3"},[a("div",{staticClass:"container bg-primary d-flex text-white align-items-center justify-content-between py-1"},[a("p",{staticClass:"m-0"},[t._v("最近搜尋")]),a("button",{staticClass:"btn btn-small btn-outline-light",on:{click:t.clearLocalStorage}},[a("small",[t._v("清除")])])])]),a("ul",{staticClass:"list-group px-3",staticStyle:{"min-height":"90vh"}},t._l(t.getLocalData,(function(e,s){return a("li",{key:s,staticClass:"text-primary border-bottom py-3 px-2",on:{click:function(a){return t.selectLocalData(e)}}},[t._v(t._s(e))])})),0),a("button",{staticClass:"btn btn-location",on:{click:t.getUserLocation}},[a("i",{staticClass:"material-icons"},[t._v("my_location")])])])]:t._e(),a("footer",{staticClass:"footer align-items-center d-flex d-lg-none",class:{"fixed-bottom":t.filterData.length<=1||t.isFocus}},[t._m(1)])],2),a("div",{staticClass:"col-md-7 d-none d-lg-flex mb-5 flex-column justify-content-space min-height"},[a("div",{ref:"map",staticClass:"h-100 w-100 mb-3",attrs:{id:"map"}},[a("button",{staticClass:"btn btn-location",attrs:{id:"geolocation"},on:{click:t.getUserLocation}},[a("i",{staticClass:"material-icons"},[t._v("my_location")])])]),t._m(2)])])])])],1)},d=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"input-icon"},[a("i",{staticClass:"material-icons"},[t._v("my_location")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container align-items-center d-flex align-items-center"},[a("div",{},[a("div",{staticClass:"text-left text-primary h6 mb-0"},[t._v("防疫專線 1922 ｜ 口罩資訊 1911")]),a("small",{staticClass:"text-left text-muted"},[a("a",{staticClass:"text-secondary",attrs:{href:"https://github.com/HuiyuLiz",target:"_blank",title:"github"}},[t._v("Huiyu Li")]),t._v(" / PY Design ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"text-right pt-3"},[a("div",{staticClass:"text-primary h6 mb-0"},[t._v("防疫專線 1922 ｜ 口罩資訊 1911")]),a("small",{staticClass:"text-secondary"},[a("a",{staticClass:"text-secondary",attrs:{href:"https://github.com/HuiyuLiz",target:"_blank",title:"github"}},[t._v("Huiyu Li")]),t._v(" / PY Design ")])])}],p=(a("99af"),a("4de4"),a("4160"),a("c975"),a("d81d"),a("13d5"),a("fb6a"),a("dca8"),a("ac1f"),a("5319"),a("1276"),a("159b"),a("5530")),m=a("17fb"),f=a.n(m),h=a("d45f"),g=(a("8243"),a("3ac1"),a("7319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"card-md p-3 rounded",class:t.status.bg,staticStyle:{position:"relative"}},[a("div",{staticClass:"h6 pb-2 text-white font-weight-light"},[t._v(t._s(t.maskType)+"口罩數量")]),a("div",{staticClass:"h4 mb-0 font-weight-bold text-white"},[t._v(" "+t._s(t.mask)+" "),a("span",{staticClass:"h7"},[t._v("片")]),a("div",{staticClass:"icon-container"},[a("img",{staticStyle:{width:"48px",height:"48px",display:"block"},attrs:{src:this.publicPath+t.status.icon,alt:""}})])])])}),v=[],b=(a("a9e3"),{name:"CardStockItem",props:{mask:{type:Number,required:!0},maskType:{type:String,required:!0}},data:function(){return{stock_status:{full:{bg:"bg-success",icon:"icon/ic_stock_full@2x@2x.png"},few:{bg:"bg-warning",icon:"icon/ic_stock_few@2x@2x.png"},none:{bg:"bg-secondary",icon:"icon/ic_stock_none@2x@2x.png"}}}},computed:{status:function(){var t;return 0===this.mask?this.stock_status.none:this.mask<=20?this.stock_status.few:this.mask>20?this.stock_status.full:t},publicPath:function(){return"/vue-mask-map/"}}}),_=b,x=a("2877"),y=Object(x["a"])(_,g,v,!1,null,null,null),C=y.exports,k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("nav",{staticClass:"navbar navbar-expand-lg",class:{active:t.isToggle}},[a("div",{staticClass:"container py-2"},[t._m(0),a("button",{staticClass:"navbar-toggler",attrs:{type:"button"},on:{click:function(e){t.isToggle=!t.isToggle}}},[a("div",{staticClass:"header__menu",class:{"hamburger--open":t.isToggle}},[t._m(1)])]),a("div",{staticClass:"navbar-collapse",attrs:{id:"navbarSupportedContent"}},[a("ul",{staticClass:"navbar-nav ml-auto"},[a("li",{staticClass:"nav-item mr-3 d-none d-lg-flex",class:{"border-bottom-primary":"口罩供給現況"===t.currentRouter},on:{click:function(e){return t.changeRouter("口罩供給現況")}}},[t._m(2)]),a("li",{staticClass:"nav-item d-none d-lg-flex",class:{"border-bottom-primary":"口罩怎麼買"===t.currentRouter},on:{click:function(e){return t.changeRouter("口罩怎麼買")}}},[t._m(3)])])])])]),a("nav",{staticClass:"navbar-dropdown-links",class:{active:t.isToggle}},[a("ul",{},[a("li",{staticClass:"nav-item d-flex d-lg-none text-center justify-content-center",on:{click:function(e){return t.checkToggle("口罩供給現況",!1)}}},[t._m(4)]),a("li",{staticClass:"nav-item d-flex d-lg-none text-center justify-content-center",on:{click:function(e){return t.checkToggle("口罩怎麼買",!1)}}},[t._m(5)])])])])},w=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"navbar-brand text-primary d-flex align-items-center",attrs:{href:"javascript:;"}},[a("div",{staticClass:"brand-logo"}),a("h1",{staticClass:"h5 ml-4 m-0"},[t._v("口罩即時查")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"hamburger",attrs:{id:"header__button",href:"javascript:;"}},[a("div",{staticClass:"hamburger__inner"})])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-link text-primary",attrs:{href:"javascript:;"}},[t._v(" 口罩供給現況 "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-link text-primary",attrs:{href:"javascript:;"}},[t._v(" 口罩怎麼買 "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-link text-white",attrs:{href:"javascript:;"}},[t._v(" 口罩供給現況 "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("a",{staticClass:"nav-link text-white",attrs:{href:"javascript:;"}},[t._v(" 口罩怎麼買 "),a("span",{staticClass:"sr-only"},[t._v("(current)")])])}],T={name:"NavBar",props:{currentRouter:{type:String,required:!0}},data:function(){return{isToggle:!1}},methods:{checkToggle:function(t,e){var a=this;a.isToggle=!a.isToggle,this.$emit("checkToggle",{router:t,isFocus:e})},changeRouter:function(t){this.$emit("changeRouter",t)}}},L=T,S=Object(x["a"])(L,k,w,!1,null,null,null),D=S.exports,j=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{ref:"modal",staticClass:"modal",staticStyle:{"background-color":"rgba(52, 73, 94, 0.9)"}},[a("div",{staticClass:"modal-dialog modal-dialog-centered",attrs:{role:"document"}},[a("div",{staticClass:"modal-content rounded-0"},[a("button",{staticClass:"close text-right text-white px-3",attrs:{type:"button"},on:{click:function(e){return t.changeRouter("口罩供給現況")}}},[a("span",{staticClass:"text-white"},[t._v("×")])]),a("div",{staticClass:"modal-body p-0"},[a("div",{staticClass:"d-flex justify-content-center px-3"},[a("img",{staticClass:"img-fluid",staticStyle:{height:"80vh","object-fit":"contain"},attrs:{src:this.publicPath+"jpg/policy.png"}})])])])])])},F=[],M={name:"Modal",props:{currentRouter:{type:String,required:!0}},data:function(){return{}},watch:{currentRouter:function(t){var e=this;"口罩供給現況"===t?(setTimeout((function(){e.$refs.modal.className="modal fade d-flex"}),300),setTimeout((function(){e.$refs.modal.className="modal "}),800)):e.$refs.modal.className="modal fade show d-flex"}},computed:{publicPath:function(){return"/vue-mask-map/"}},methods:{changeRouter:function(t){this.$emit("changeRouter",t)}}},R=M,I=Object(x["a"])(R,j,F,!1,null,null,null),O=I.exports,P={name:"App",components:{CardStockItem:C,NavBar:D,Modal:O,VueBootstrapTypeahead:h["a"]},data:function(){return{screenWidth:0,searchText:"",searchInput:"",isLoading:!1,isSearching:!1,isLoadingMore:!1,isFade:!1,isClicked:!1,isFocus:!1,isUserLocation:!1,currentRouter:"口罩供給現況",day:"",availableDay:"",map:null,limit:15,loadingData:5,markerCluster:null,userLat:"",userLng:"",data:[],stores:[],sortStores:[],update_time:"",markers:[],markerData:[],currentMarker:"",stock_status:{full:"bg-success",few:"bg-warning",none:"bg-secondary"},userLocation:[],searchStatus:!1,addressSearch:"",selectedAddress:null,getLocalData:[],initData:[],isInit:!0,scrollFlag:!1,scrollTop:""}},watch:{userLocation:function(t){var e=this;t.length>0?(setTimeout((function(){e.searchStatus=!1}),1e3),setTimeout((function(){e.isLoading=!1,e.isFade=!0,console.log("userLocation",t.length)}),2e3)):setTimeout((function(){e.searchStatus=!1}),1e3)},isClicked:function(){var t=this;!0===t.isClicked&&setTimeout((function(){t.isClicked=!1}),1500)},searchTextRegex:f.a.debounce((function(t){this.getAddresses(t)}),500),screenWidth:{handler:function(t){var e=this;t>=768&&(e.isFocus=!1)},immediate:!0}},computed:{publicPath:function(){return"/vue-mask-map/"},addresses:function(){var t=this,e=[];return t.data.reduce((function(t,a){e.push(a.properties.address)}),e),e},searchTextRegex:function(){var t=this,e=t.searchText;return e=e.replace(/\s*/g,""),e},allStores:function(){var t=this;return t.isUserLocation?t.stores=t.sortStores:t.stores=t.data},filterData:function(){var t=this;return t.isUserLocation?t.stores=t.sortStores:(t.stores=t.data,""!==t.searchTextRegex?t.stores.filter((function(e){var a=e.properties.address;return t.searchInput=t.searchTextRegex,-1!==a.indexOf(t.searchTextRegex)})):t.data)},filterStore:function(){var t=this;return t.loadingData>=t.filterData.length?t.filterData:t.filterData.slice(0,t.loadingData)}},methods:{backToCard:function(){var t=this,e=t.$refs.card[0];e&&e.scrollIntoView({behavior:"smooth",block:"nearest"})},backToTop:function(){var t=this,e=setInterval((function(){var a=Math.floor(-t.scrollTop/5);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+a,0===t.scrollTop&&clearInterval(e)}),15)},scrollToTop:function(){var t=this;t.scrollTop=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t.screenWidth<=768&&t.scrollTop>0?t.scrollFlag=!0:t.scrollFlag=!1},onFocus:function(){var t=this;t.isFocus=!t.isFocus},getAddresses:function(t){var e=this;t&&(e.isLoading=!0,e.loadingData=5,e.isUserLocation=!1,e.scrollToTop(),setTimeout((function(){e.isLoading=!1}),1200)),e.filterStore.length<=0?setTimeout((function(){e.searchStatus=!0}),1e3):e.searchStatus=!1,e.setLocalStorage(t),e.isUserLocation||e.$nextTick(e.searchLocation)},setLocalStorage:function(t){var e=this;if(e.filterData.length>0&&t.length>=3){var a=JSON.parse(localStorage.getItem("location"))||[];-1==a.indexOf(t)&&(e.getLocalData.push(t),localStorage.setItem("location",JSON.stringify(e.getLocalData)),e.getLocalStorage())}},getLocalStorage:function(){var t=this,e=JSON.parse(localStorage.getItem("location"))||[],a=e.slice(-5);t.getLocalData=a},clearLocalStorage:function(){var t=this;localStorage.removeItem("location"),t.getLocalStorage()},selectLocalData:function(t){var e=this;e.searchText=t,e.isFocus=!e.isFocus},searchLocation:function(){var t=this;if(t.isUserLocation=!1,t.filterStore.length>0){var e=t.filterStore[0],a=[e.geometry.coordinates[1],e.geometry.coordinates[0]],s=a[0],i=a[1];t.map.setView([s,i],16)}t.scrollToTop()},moveToStore:function(t){var e=this,a=[t.geometry.coordinates[1],t.geometry.coordinates[0]],s=a[0],i=a[1];for(var n in e.markers){var o=e.markers[n].getLatLng(),r=[o.lat,o.lng],c=r[0],l=r[1];c===s&&l===i&&(e.map.setView([s,i],18),e.markers[n].openPopup())}},loadMore:function(){var t=this;t.isLoadingMore=!0,setTimeout((function(){t.loadingData+=t.limit}),600),setTimeout((function(){t.isLoadingMore=!1}),1200)},getUserLocation:function(){var t=this;t.searchText="",t.$refs.typeahead.inputValue="",t.isUserLocation=!0,t.isClicked||(setTimeout((function(){t.initMap(),t.getGeolocation()}),500),t.isFocus=!1,t.isClicked=!0,t.searchInput="目前位置")},geolocFail:function(){alert("無法取得目前位置")},getGeolocation:function(){var t=this;if(t.isLoading=!0,t.isFade=!1,navigator.geolocation){var e=setTimeout("vm.geolocFail()",1e4);navigator.geolocation.getCurrentPosition((function(a){clearTimeout(e);var s=a.coords.latitude,i=a.coords.longitude;t.addUserMarker(s,i)}),(function(a){clearTimeout(e),t.geolocFail(),setTimeout((function(){t.isLoading=!1,t.isFade=!0}),2e3),console.log(a)}))}else t.geolocFail(),setTimeout((function(){t.isLoading=!1,t.isFade=!0}),2e3)},addUserMarker:function(t,e){var a=this,s=a.map;a.userLocation=[],a.userLat=t,a.userLng=e;var i="目前位置";s.setView([t,e],13);var n=l.a.marker(new l.a.LatLng(t,e),{title:i}).addTo(s);n.bindPopup(i).openPopup(),a.userLocation.push(n);var o=n.getPopup();o.options.closeOnClick=!1,l.a.circle([t,e],{color:"#fd7e14",fillColor:"#fd7e14",fillOpacity:.5,radius:3e3}).addTo(s),a.getStores()},initMap:function(){var t=this,e=l.a.markerClusterGroup();t.markerCluster=e,t.map&&t.map.remove&&(t.map.off(),t.map.remove()),t.map=l.a.map("map",{minZoom:6,maxZoom:18,center:[25.105497,121.597366],zoom:10,zoomControl:!0,attributionControl:!1});var a=l.a.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'});t.map.hasLayer(a)?t.map.removeLayer(a):(t.map.zoomControl.setPosition("bottomright"),t.map.addLayer(a),t.addMarkers())},addMarkers:function(){var t=this,e=t.markerCluster;t.markers=[],t.data.forEach((function(a){var s,i=new l.a.divIcon({iconAnchor:[0,24],labelAnchor:[-6,0],popupAnchor:[0,-36],html:'<span class="markerHtmlStyles" >\n        <i class="material-icons text-danger" >\n        location_on\n        </i></sapn> '}),n=new l.a.divIcon({iconAnchor:[0,24],labelAnchor:[-6,0],popupAnchor:[0,-36],html:'<span class="markerHtmlStyles" >\n        <i class="material-icons text-secondary" >\n        location_on\n        </i></sapn> '});s=a.properties.mask_adult<=0&&a.properties.mask_child<=0?n:i;var o=t.stockStatus(a.properties.mask_adult),r=t.stockStatus(a.properties.mask_child),c='\n              <div class="d-flex justify-content-between">\n                <div class="'.concat(o,' px-2 text-center text-white badge">').concat(a.properties.mask_adult,'</div>\n                <div class="').concat(r,' px-2 text-center text-white badge">').concat(a.properties.mask_child,"</div>\n              </div>"),u=l.a.marker(new l.a.LatLng(a.geometry.coordinates[1],a.geometry.coordinates[0]),{title:c,icon:s}).bindPopup(c).openPopup();t.markers.push(u),e.addLayers(u)})),t.map.addLayer(e)},getMarkers:function(){var t=this;t.markerData=[],t.data.forEach((function(e){t.markerData.push({lat:e.geometry.coordinates[1],lng:e.geometry.coordinates[0],mask_adult:e.properties.mask_adult,mask_child:e.properties.mask_child,mask_adult_status:t.stockStatus(e.properties.mask_adult),mask_child_status:t.stockStatus(e.properties.mask_child)})}))},getDistance:function(t,e){var a=this;if(""!==a.userLat&&""!==a.userLng){var s=t*Math.PI/180,i=a.userLat*Math.PI/180,n=s-i,o=e*Math.PI/180-a.userLng*Math.PI/180,r=2*Math.asin(Math.sqrt(Math.pow(Math.sin(n/2),2)+Math.cos(s)*Math.cos(i)*Math.pow(Math.sin(o/2),2)));return r*=6378.137,r=Math.round(100*r)/100,r}return""},getData:function(){var t=this;t.isLoading=!0,t.isFade=!1,t.axios.get("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR1dnONo5ndjbYoiQOHymhawhbnRDFKmWVjQT4A5gV5Wo4zccyBvp0peAgk").then((function(e){var a=e.data.features?Object.freeze(e.data.features):[];t.isInit?(a.filter((function(e,a){a<20&&t.initData.push(e)})),t.data=t.initData,console.log("init",t.data.length),setTimeout((function(){t.data=a,t.getMarkers(),t.initMap(),t.isInit=!1,console.log(t.data.length,t.isInit)}),4e3)):(t.data=a,console.log("現有資料再重整",t.data.length,t.isInit));var s=t.data[0].properties.updated;t.update_time=s.split(" ")[1],t.isLoading=!1,t.getMarkers(),t.initMap(),t.today(),t.getStores(),setTimeout((function(){t.isFade=!0}),500)})).catch((function(t){console.log(t)}))},getStores:function(){var t=this,e=[],a=[];if(t.data.forEach((function(a){e.push(t.getDistance(a.geometry.coordinates[1],a.geometry.coordinates[0]))})),e.forEach((function(e,s){t.data.map((function(t,i){i===s&&a.push(Object(p["a"])({},t,{distance:e}))}))})),!t.isUserLocation)return!1;var s=a.sort((function(t,e){return t.distance-e.distance}));t.sortStores=s.filter((function(t){return t.distance<=3}))},stockStatus:function(t){var e,a=this;return 0===t?a.stock_status.none:t<=20?a.stock_status.few:t>20?a.stock_status.full:e},changeRouter:function(t){var e=this;e.currentRouter=t},checkToggle:function(t){var e=t.router,a=t.isFocus,s=this;s.currentRouter=e,s.isFocus=a},today:function(){var t=this,e=new Array("日","一","二","三","四","五","六"),a=(new Date).getDay();t.availableDay="星期".concat(e[a]),t.day=0===a?"不限身份證字號":a%2===0&&0!==a?"偶數":"奇數"},getResize:function(){var t=this;t.screenWidth=window.innerWidth}},mounted:function(){var t=this;window.addEventListener("scroll",t.scrollToTop)},created:function(){var t=this;t.getLocalStorage(),window.addEventListener("resize",t.getResize),t.getResize(),setTimeout((function(){t.getData()}),3e3)},destroyed:function(){var t=this;window.removeEventListener("resize",t.getResize),window.removeEventListener("scroll",t.scrollToTop)}},$=P,E=(a("5c0b"),Object(x["a"])($,u,d,!1,null,null,null)),U=E.exports;s["a"].config.performance=!0,delete c["Icon"].Default.prototype._getIconUrl,c["Icon"].Default.mergeOptions({iconRetinaUrl:a("584d"),iconUrl:a("6397"),shadowUrl:a("e2b9")}),s["a"].use(r.a,n.a),s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(U)}}).$mount("#app")},"5c0b":function(t,e,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},"9c0c":function(t,e,a){}});
//# sourceMappingURL=app.81b6b3de.js.map