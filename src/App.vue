<template>
  <div id="app">
    <div id="top" ref="top"></div>
    <div
      class="container-fluid bg-primary d-flex flex-column justify-content-center align-items-center"
      :class="{'animation-delay':data.length>0}"
    >
      <div class="block d-flex align-items-center justify-content-center">
        <div class="loading">
          <span class="ball1"></span>
          <span class="ball2"></span>
        </div>
      </div>
    </div>
    <!--================= navbar =================-->
    <header>
      <NavBar
        @checkToggle="checkToggle"
        @changeRouter="changeRouter"
        :currentRouter="currentRouter"
      ></NavBar>
    </header>
    <!-- ================= modal ================= -->
    <Modal @changeRouter="changeRouter" :currentRouter="currentRouter"></Modal>

    <!-- stores content -->
    <section class="bg-light">
      <main
        role="main"
        class="container overflow-xs-auto"
        ref="content"
        :class="{'overflow-hidden':isFocus}"
      >
        <div class="row d-flex justify-content-sm-center">
          <div class="col-md-8 col-lg-5 bg-light pt-4 mb-md-3 min-height px-0 px-md-3">
            <!--================= Search Input =================-->
            <div class="d-flex justify-content-between mb-3 px-3">
              <div class="form-group d-none d-md-block" style="width:70%">
                <vue-bootstrap-typeahead
                  v-model.trim="searchText"
                  :data="addresses"
                  placeholder="請輸入地址或區域"
                  @hit="selectedAddress = $event"
                  ref="typeahead"
                />
              </div>
              <div class="form-group d-flex d-md-none w-100 mb-3">
                <div class="input-icon-group" v-if="!isFocus">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="目前位置"
                    v-model.trim="searchInput"
                    @focus="onFocus"
                    @click="onFocus"
                  />
                  <div class="input-icon">
                    <i class="material-icons">my_location</i>
                  </div>
                </div>
                <div class="d-flex arrow-input-group">
                  <div class="btn px-3" @click="isFocus = !isFocus" v-if="isFocus">
                    <i
                      class="material-icons align-self-center text-center text-secondary font-weight-bold arrow-back-icon"
                    >arrow_back_ios</i>
                  </div>
                  <vue-bootstrap-typeahead
                    v-if="isFocus"
                    v-model.trim="searchText"
                    :data="addresses"
                    placeholder="請輸入地址或區域"
                    class="w-100 arrow-back-input"
                    @hit="selectedAddress = $event"
                  />
                </div>
              </div>
              <div
                class="btn btn-primary w-25 py-2 d-none d-md-flex justify-content-center align-items-center"
                @click="searchLocation"
              >
                <div class="align-middle">搜尋</div>
              </div>
            </div>
            <div class="h3 text-primary d-flex align-items-baseline px-3" v-if="!isFocus">
              <div class="h3 m-0 font-weight-heavy mb-3">{{day}}</div>
              <span class="h6 m-0 ml-2">購買日</span>
              <div @click="currentRouter='口罩怎麼買'" style="cursor:pointer">
                <img :src="this.publicPath +'icon/ic_help@2x.png'" class="ml-1" />
              </div>
            </div>
            <!--================= Refresh Button =================-->
            <div
              class="d-flex justify-content-between mb-3 px-3 align-items-center mb-3"
              v-if="!isFocus"
            >
              <small class="text-primary mb-0 d-flex flex-column">
                <span class="pb-1" v-if="!isUserLocation">附近健保特約藥局或衛生所</span>
                <span class="pb-1" v-else>距離方圓 3公里 以內的供應商</span>
                <span class="d-flex justify-content-space">
                  資訊更新時間 {{update_time}}
                  <div class="ml-3 fa-1x" v-if="isLoading">
                    <i class="fas fa-spinner fa-pulse text-primary"></i>
                  </div>
                </span>
              </small>

              <div
                class="btn btn-outline-primary btn-rounded border-bold py-2"
                style="width:96px;min-width:25%"
                @click="getData"
              >重整列表</div>
            </div>
            <!--================= Store =================-->

            <div class="px-0 px-md-3 card-list px-0 m-auto" v-if="!isFocus">
              <div class="px-0 px-lg-3 scrollable-content mt-4">
                <template v-if="filterData.length > 0">
                  <div
                    class="card mx-3 mx-lg-0 mb-4"
                    ref="card"
                    :class="{'fade':!isFade,'fade show':isFade}"
                    v-for="(store,index) in filterStore"
                    :key="index"
                    @click="moveToStore(store)"
                  >
                    <div class="card-body">
                      <div class="d-flex justify-content-between">
                        <CardStockItem :mask="store.properties.mask_adult" mask-type="成人"></CardStockItem>
                        <CardStockItem :mask="store.properties.mask_child" mask-type="兒童"></CardStockItem>
                      </div>
                      <div class="card-title mt-4 text-primary mb-0">
                        <div class="d-flex align-items-baseline mb-1">
                          <div
                            class="h5 font-weight-bold p-0 m-0 mr-1 front-border"
                          >{{index+1}}. {{store.properties.name}}</div>
                          <small class="h7" v-if="isUserLocation">{{store.distance}}km</small>
                        </div>

                        <div
                          class="card-text mb-1 d-flex justify-content-between align-items-baseline mt-3"
                        >
                          <p class="mb-3 mr-1 d-flex w-90 justify-content-start">
                            <span class="mr-3">地址</span>
                            <span class="text-secondary w-75">{{store.properties.address}}</span>
                          </p>
                          <small class="ml-auto w-25 text-right" href="javascript:;">
                            <a
                              target="_blank"
                              rel="noopener noreferrer"
                              :href="`https://www.google.com/maps/search/${store.properties.name}+${store.properties.address}`"
                            >
                              <u>於地圖查看</u>
                            </a>
                          </small>
                        </div>
                        <div
                          class="card-text d-flex justify-content-between align-items-baseline mb-3"
                        >
                          <p class="mb-0">
                            <span class="mr-3">電話</span>
                            <span class="text-secondary">{{store.properties.phone}}</span>
                          </p>
                          <small class="ml-auto" href="javascript:;">
                            <a :href="`tel:${store.properties.phone}`">
                              <u>撥打電話</u>
                            </a>
                          </small>
                        </div>
                        <div
                          class="card-text justify-content-between align-items-baseline d-none"
                          :class="{'d-flex':store.properties.note !== ''&&store.properties.note !== '-' || store.properties.custom_note !== ''}"
                        >
                          <div class="mb-0 d-flex w-100">
                            <p class="mr-3">備註</p>
                            <div class="text-secondary w-75">
                              <p v-if="store.properties.note !== '-'" class="mb-1 pb-0">
                                {{store.properties.note }}
                                <br />
                              </p>
                              <p class="mb-0 pb-0">{{store.properties.custom_note }}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!--================= Loading More Data & Go to Top Buttons =================-->
                  <div class="text-center mt-3">
                    <div
                      class="text-center load-data mb-2"
                      style="hight:25px"
                      v-if="loadingData<filterData.length||filterData.length>loadingData"
                    >
                      <small class="text-primary">
                        <div class="lds-ellipsis" v-if="isLoadingMore">
                          <div></div>
                          <div></div>
                          <div></div>
                          <div></div>
                        </div>
                        <p v-else>還有 {{filterData.length - loadingData}} 筆</p>
                      </small>
                    </div>
                    <div class="button-group" :class="{'py-5':filterData.length>1}">
                      <button
                        class="btn btn-primary btn-rounded py-2 btn-shadow load"
                        style="width:40%"
                        v-if="loadingData<filterData.length||filterData.length>loadingData"
                        @click="loadMore"
                      >查看更多</button>
                      <button
                        class="btn btn-primary btn-shadow mb-2 btn-circle"
                        @click="scrollToTop"
                        v-if="filterData.length>1"
                      >TOP</button>
                    </div>
                  </div>
                </template>
                <div class="mb-4 mx-3 mx-md-0 text-primary d-flex" v-if="searchStatus">
                  查無此地點
                  <i class="material-icons ml-1">error</i>
                </div>
                <footer
                  class="footer align-items-center d-flex d-lg-none"
                  :class="{'fixed-bottom':filterData.length<=1}"
                >
                  <div class="container align-items-center d-flex align-items-center">
                    <div class>
                      <div class="text-left text-primary h6 mb-0">防疫專線 1922 ｜ 口罩資訊 1911</div>
                      <small class="text-left text-muted">
                        <a
                          href="https://github.com/HuiyuLiz"
                          target="_blank"
                          title="github"
                          class="text-secondary"
                        >Huiyu Li</a> / PY Design
                      </small>
                    </div>
                  </div>
                </footer>
              </div>
            </div>

            <!--================= Search location list =================-->
            <template v-if="isFocus">
              <div class="d-block d-md-none">
                <div class="flex-fluid px-3">
                  <div
                    class="container bg-primary d-flex text-white align-items-center justify-content-between py-1"
                  >
                    <p class="m-0">最近搜尋</p>
                    <button class="btn btn-small btn-outline-light" @click="clearLocalStorage">
                      <small>清除</small>
                    </button>
                  </div>
                </div>
                <ul class="list-group px-3" style="min-height:90vh">
                  <li
                    class="text-primary border-bottom py-3 px-2"
                    v-for="(data,index) in getLocalData"
                    :key="index"
                    @click="selectLocalData(data)"
                  >{{data}}</li>
                </ul>
                <button class="btn btn-location" @click="getUserLocation">
                  <i class="material-icons">my_location</i>
                </button>
              </div>
            </template>
          </div>
          <!--================= Map =================-->
          <div class="col-md-7 d-none d-lg-flex mb-5 flex-column justify-content-space min-height">
            <div id="map" ref="map" class="h-100 w-100 mb-3">
              <button class="btn btn-location" id="geolocation" @click="getUserLocation">
                <i class="material-icons">my_location</i>
              </button>
            </div>
            <div class="text-right pt-3">
              <div class="text-primary h6 mb-0">防疫專線 1922 ｜ 口罩資訊 1911</div>
              <small class="text-secondary">
                <a
                  href="https://github.com/HuiyuLiz"
                  target="_blank"
                  title="github"
                  class="text-secondary"
                >Huiyu Li</a> / PY Design
              </small>
            </div>
          </div>
        </div>
      </main>
    </section>
  </div>
</template>

<script>
import _ from "underscore";
import VueBootstrapTypeahead from "vue-bootstrap-typeahead";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import "leaflet.markercluster/dist/leaflet.markercluster";
import CardStockItem from "@/components/CardStockItem.vue";
import NavBar from "@/components/NavBar.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "App",
  components: {
    CardStockItem,
    NavBar,
    Modal,
    VueBootstrapTypeahead
  },
  data() {
    return {
      screenWidth: 0,
      searchText: "",
      searchInput: "",
      isLoading: false,
      isSearching: false,
      isLoadingMore: false,
      isFade: false,
      isClicked: false,
      isFocus: false,
      isUserLocation: false,
      currentRouter: "口罩供給現況",
      day: "",
      availableDay: "",
      map: null,
      limit: 15,
      loadingData: 5,
      markerCluster: null,
      userLat: "",
      userLng: "",
      data: [],
      stores: [],
      sortStores: [],
      update_time: "",
      markers: [],
      markerData: [],
      currentMarker: "",
      stock_status: {
        full: "bg-success",
        few: "bg-warning",
        none: "bg-secondary"
      },
      userLocation: [],
      searchStatus: false,
      addressSearch: "",
      selectedAddress: null,
      getLocalData: [],
      initData: [],
      isInit: true
    };
  },
  watch: {
    userLocation(val) {
      let vm = this;
      if (val.length > 0) {
        setTimeout(() => {
          vm.searchStatus = false;
        }, 1000);
      } else {
        setTimeout(() => {
          vm.searchStatus = true;
        }, 1000);
      }
    },
    isClicked() {
      let vm = this;
      if (vm.isClicked === true) {
        setTimeout(() => {
          vm.isClicked = false;
        }, 1500);
      }
    },
    searchTextRegex: _.debounce(function(newVal) {
      this.getAddresses(newVal);
    }, 500),
    screenWidth: {
      handler(val) {
        let vm = this;
        if (val >= 768) {
          vm.isFocus = false;
        }
      },
      immediate: true
    }
  },
  computed: {
    publicPath() {
      return process.env.BASE_URL;
    },
    addresses() {
      let vm = this;
      let result = [];
      vm.data.reduce((pre, country) => {
        result.push(country.properties.address);
      }, result);
      return result;
    },
    searchTextRegex() {
      let vm = this;
      let str = vm.searchText;
      str = str.replace(/\s*/g, "");
      return str;
    },
    allStores() {
      let vm = this;
      if (vm.isUserLocation) {
        return (vm.stores = vm.sortStores);
      } else {
        return (vm.stores = vm.data);
      }
    },
    filterData() {
      let vm = this;
      if (vm.isUserLocation) {
        return (vm.stores = vm.sortStores);
      } else {
        vm.stores = vm.data;
        if (vm.searchTextRegex !== "") {
          return vm.stores.filter(data => {
            let address = data.properties.address;
            vm.searchInput = vm.searchTextRegex;
            return address.indexOf(vm.searchTextRegex) !== -1;
          });
        } else {
          return vm.data;
        }
      }
    },
    filterStore() {
      let vm = this;
      if (vm.loadingData >= vm.filterData.length) {
        return vm.filterData;
      } else {
        return vm.filterData.slice(0, vm.loadingData);
      }
    }
  },
  methods: {
    scrollToTop() {
      let vm = this;
      let el = vm.$refs.card[0];
      if (el) {
        el.scrollIntoView({
          behavior: "smooth",
          block: "nearest"
        });
      }
    },
    onFocus() {
      let vm = this;
      vm.isFocus = !vm.isFocus;
    },
    getAddresses(newVal) {
      let vm = this;
      if (newVal) {
        vm.isLoading = true;
        vm.loadingData = 5;
        vm.isUserLocation = false;
        vm.scrollToTop();
        setTimeout(() => {
          vm.isLoading = false;
        }, 1200);
      }
      if (vm.filterStore.length <= 0) {
        setTimeout(() => {
          vm.searchStatus = true;
        }, 1000);
      } else {
        vm.searchStatus = false;
      }
      vm.setLocalStorage(newVal);
      if (vm.isUserLocation) return;
      vm.$nextTick(vm.searchLocation);
    },
    setLocalStorage(newVal) {
      let vm = this;
      if (vm.filterData.length > 0 && newVal.length >= 3) {
        let array = JSON.parse(localStorage.getItem("location")) || [];
        if (array.indexOf(newVal) == -1) {
          vm.getLocalData.push(newVal);
          localStorage.setItem("location", JSON.stringify(vm.getLocalData));
          vm.getLocalStorage();
        }
      }
    },
    getLocalStorage() {
      let vm = this;
      let array = JSON.parse(localStorage.getItem("location")) || [];
      let arrayLimit = array.slice(-5);
      vm.getLocalData = arrayLimit;
    },
    clearLocalStorage() {
      let vm = this;
      localStorage.removeItem("location");
      vm.getLocalStorage();
    },
    selectLocalData(data) {
      let vm = this;
      vm.searchText = data;
      vm.isFocus = !vm.isFocus;
    },
    searchLocation() {
      let vm = this;
      vm.isUserLocation = false;
      // vm.isFade = false;
      if (vm.filterStore.length > 0) {
        let store = vm.filterStore[0];
        let [storeLat, storeLng] = [
          store.geometry.coordinates[1],
          store.geometry.coordinates[0]
        ];
        vm.map.setView([storeLat, storeLng], 16);
      }
      vm.scrollToTop();
      // setTimeout(() => {
      //   vm.isFade = true;
      // }, 500);
    },
    moveToStore(store) {
      let vm = this;
      let [storeLat, storeLng] = [
        store.geometry.coordinates[1],
        store.geometry.coordinates[0]
      ];
      for (let i in vm.markers) {
        let position = vm.markers[i].getLatLng();
        let [lat, lng] = [position.lat, position.lng];
        if (lat === storeLat && lng === storeLng) {
          vm.map.setView([storeLat, storeLng], 18);
          vm.markers[i].openPopup();
        }
      }
    },
    loadMore() {
      let vm = this;
      vm.isLoadingMore = true;
      setTimeout(() => {
        vm.loadingData += vm.limit;
      }, 600);
      setTimeout(() => {
        vm.isLoadingMore = false;
      }, 1200);
    },
    getUserLocation() {
      let vm = this;
      vm.searchText = "";
      vm.$refs.typeahead.inputValue = "";
      vm.isUserLocation = true;
      vm.isFade = false;
      vm.isLoading = true;
      if (vm.isClicked) return;
      setTimeout(() => {
        vm.initMap();
        vm.getGeolocation();
      }, 500);
      setTimeout(() => {
        vm.isLoading = false;
        vm.isFade = true;
      }, 1500);
      vm.isFocus = false;
      vm.isClicked = true;
      vm.searchInput = "目前位置";
    },
    geolocFail() {
      alert("無法取得目前位置");
    },
    getGeolocation() {
      let vm = this;
      vm.isLoading = true;
      vm.isFade = false;
      if (navigator.geolocation) {
        let location_timeout = setTimeout("vm.geolocFail()", 10000);
        navigator.geolocation.getCurrentPosition(
          function(position) {
            clearTimeout(location_timeout);
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            vm.addUserMarker(lat, lng);
            setTimeout(() => {
              vm.isLoading = false;
              vm.isFade = true;
            }, 2000);
          },
          function(error) {
            clearTimeout(location_timeout);
            vm.geolocFail();
            setTimeout(() => {
              vm.isLoading = false;
              vm.isFade = true;
            }, 2000);
            console.log(error);
          }
        );
      } else {
        vm.geolocFail();
        setTimeout(() => {
          vm.isLoading = false;
          vm.isFade = true;
        }, 2000);
      }
    },
    addUserMarker(lat, lng) {
      let vm = this;
      let map = vm.map;
      vm.userLocation = [];
      vm.userLat = lat;
      vm.userLng = lng;

      // 使用者地點
      let title = "目前位置";
      map.setView([lat, lng], 13);
      let location = L.marker(new L.LatLng(lat, lng), {
        title: title
      }).addTo(map);
      location.bindPopup(title).openPopup();
      vm.userLocation.push(location);
      let popup = location.getPopup();
      popup.options.closeOnClick = false;

      // 新增地點半徑
      L.circle([lat, lng], {
        color: "#fd7e14",
        fillColor: "#fd7e14",
        fillOpacity: 0.5,
        radius: 3000
      }).addTo(map);
      vm.getStores();
    },
    initMap() {
      // 初始地圖
      let vm = this;
      let markerCluster = L.markerClusterGroup();
      vm.markerCluster = markerCluster;
      if (vm.map && vm.map.remove) {
        vm.map.off();
        vm.map.remove();
      }

      vm.map = L.map("map", {
        minZoom: 6,
        maxZoom: 18,
        center: [25.105497, 121.597366],
        zoom: 10,
        zoomControl: true,
        attributionControl: false
      });
      let baseMap = L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      });

      if (vm.map.hasLayer(baseMap)) {
        vm.map.removeLayer(baseMap);
      } else {
        vm.map.zoomControl.setPosition("bottomright");
        vm.map.addLayer(baseMap);
        vm.addMarkers();
      }
    },
    addMarkers() {
      let vm = this;
      let markerCluster = vm.markerCluster;
      vm.markers = [];

      vm.data.forEach(function(store) {
        const iconSale = new L.divIcon({
          iconAnchor: [0, 24],
          labelAnchor: [-6, 0],
          popupAnchor: [0, -36],
          html: `<span class="markerHtmlStyles" >
        <i class="material-icons text-danger" >
        location_on
        </i></sapn> `
        });
        const iconSoldOut = new L.divIcon({
          iconAnchor: [0, 24],
          labelAnchor: [-6, 0],
          popupAnchor: [0, -36],
          html: `<span class="markerHtmlStyles" >
        <i class="material-icons text-secondary" >
        location_on
        </i></sapn> `
        });

        let icon;
        store.properties.mask_adult <= 0 && store.properties.mask_child <= 0
          ? (icon = iconSoldOut)
          : (icon = iconSale);

        let mask_adult_status = vm.stockStatus(store.properties.mask_adult);
        let mask_child_status = vm.stockStatus(store.properties.mask_child);
        let title = `
              <div class="d-flex justify-content-between">
                <div class="${mask_adult_status} px-2 text-center text-white badge">${store.properties.mask_adult}</div>
                <div class="${mask_child_status} px-2 text-center text-white badge">${store.properties.mask_child}</div>
              </div>`;
        let marker = L.marker(
          new L.LatLng(
            store.geometry.coordinates[1],
            store.geometry.coordinates[0]
          ),
          {
            title: title,
            icon: icon
          }
        )
          .bindPopup(title)
          .openPopup();
        vm.markers.push(marker);
        markerCluster.addLayers(marker);
      });
      vm.map.addLayer(markerCluster);
    },
    getMarkers() {
      let vm = this;
      vm.markerData = [];
      vm.data.forEach(store => {
        vm.markerData.push({
          lat: store.geometry.coordinates[1],
          lng: store.geometry.coordinates[0],
          mask_adult: store.properties.mask_adult,
          mask_child: store.properties.mask_child,
          mask_adult_status: vm.stockStatus(store.properties.mask_adult),
          mask_child_status: vm.stockStatus(store.properties.mask_child)
        });
      });
    },
    getDistance(lat, lng) {
      let vm = this;
      if (vm.userLat !== "" && vm.userLng !== "") {
        let radLat1 = (lat * Math.PI) / 180.0;
        let radLat2 = (vm.userLat * Math.PI) / 180.0;
        let a = radLat1 - radLat2;
        let b = (lng * Math.PI) / 180.0 - (vm.userLng * Math.PI) / 180.0;
        let s =
          2 *
          Math.asin(
            Math.sqrt(
              Math.pow(Math.sin(a / 2), 2) +
                Math.cos(radLat1) *
                  Math.cos(radLat2) *
                  Math.pow(Math.sin(b / 2), 2)
            )
          );
        s = s * 6378.137; // EARTH_RADIUS;
        s = Math.round(s * 100) / 100;
        return s;
      } else {
        return "";
      }
    },
    getData() {
      let vm = this;
      vm.isLoading = true;
      vm.isFade = false;
      vm.axios
        .get(
          "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json?fbclid=IwAR1dnONo5ndjbYoiQOHymhawhbnRDFKmWVjQT4A5gV5Wo4zccyBvp0peAgk"
        )
        .then(response => {
          // response.data.features
          //   ? (vm.data = Object.freeze(response.data.features))
          //   : (vm.data = []);
          let data = response.data.features
            ? Object.freeze(response.data.features)
            : [];

          if (vm.isInit) {
            data.filter((d, index) => {
              if (index < 20) {
                vm.initData.push(d);
              }
            });
            vm.data = vm.initData;
            console.log("init", vm.data.length);
            setTimeout(() => {
              vm.data = data;
              vm.getMarkers();
              vm.initMap();
              vm.isInit = false;
              console.log(vm.data.length, vm.isInit);
            }, 4000);
          } else {
            vm.data = data;
            console.log("現有資料再重整", vm.data.length, vm.isInit);
          }

          let update_time = vm.data[0].properties.updated;
          vm.update_time = update_time.split(" ")[1];

          vm.isLoading = false;
          vm.getMarkers();
          vm.initMap();
          vm.today();
          vm.getStores();
          setTimeout(() => {
            vm.isFade = true;
          }, 500);
        })
        .catch(error => {
          console.log(error);
        });
    },
    getStores() {
      let vm = this;
      let distances = [];
      let stores = [];
      vm.data.forEach(store => {
        distances.push(
          vm.getDistance(
            store.geometry.coordinates[1],
            store.geometry.coordinates[0]
          )
        );
      });
      distances.forEach((distance, j) => {
        vm.data.map((store, i) => {
          if (i === j) {
            stores.push({ ...store, distance });
          }
        });
      });
      if (!vm.isUserLocation) return false;
      let array = stores.sort(function(a, b) {
        return a.distance - b.distance;
      });
      vm.sortStores = array.filter(data => {
        return data.distance <= 3;
      });
    },
    stockStatus(stock) {
      // 使用顏色判別庫存狀態
      let vm = this;
      let status;
      if (stock === 0) {
        return vm.stock_status.none;
      } else if (stock <= 20) {
        return vm.stock_status.few;
      } else if (stock > 20) {
        return vm.stock_status.full;
      }
      return status;
    },
    changeRouter(router) {
      let vm = this;
      vm.currentRouter = router;
    },
    checkToggle({ router, isFocus }) {
      let vm = this;
      vm.currentRouter = router;
      vm.isFocus = isFocus;
    },
    today() {
      let vm = this;
      const week = new Array("日", "一", "二", "三", "四", "五", "六");
      let day = new Date().getDay();
      vm.availableDay = `星期${week[day]}`;

      if (day === 0) {
        vm.day = "不限身份證字號";
      } else {
        vm.day = day % 2 === 0 && day !== 0 ? "偶數" : "奇數";
      }
    },
    getResize() {
      let vm = this;
      vm.screenWidth = window.innerWidth;
    }
  },
  created() {
    let vm = this;
    vm.getLocalStorage();
    window.addEventListener("resize", vm.getResize);
    vm.getResize();
    setTimeout(() => {
      vm.getData();
    }, 3000);
  },
  destroyed() {
    let vm = this;
    window.removeEventListener("resize", vm.getResize);
  }
};
</script>

<style lang="scss">
@import "./assets/scss/all";
</style>
