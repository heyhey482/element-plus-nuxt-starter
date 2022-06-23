<template>
<section id="main_sec" class="main_sec">
            <article class="search_bar">
                <label for="">상세검색</label>
                <input type="date" id="start" name="date-start" class="input_type" value="2018-07-22" min="2018-01-01" max="2018-12-31"> 
                <span class="hyphen">-</span>
                <input type="text" id="" class="input_type" placeholder="">               
                <button id="" class="btn_search" title="검색">검색</button>
            </article>
            <section class="main_section">
               <div id="map1" class="map_box">
                    <h3>밭가뭄</h3>
                    <div class="map overflow-hidden" ref="mapView1"></div>
                    <ul class="legend">
                        <li class="mt-2"><span class="status status_1"></span><strong>정상 </strong> 70%초과 [140개 시군]</li>
                        <li class="mt-2"><span class="status status_2"></span><strong>관심 </strong> 60%초과~70% 이하 [15개 시군]</li>
                        <li class="mt-2"><span class="status status_3"></span><strong>주의 </strong> 50%초과~60%이하 [5개 시군]</li>
                        <li class="mt-2"><span class="status status_4"></span><strong>경계 </strong> 40%초과~50%이하 [4개 시군]</li>
                        <li class="mt-2"><span class="status status_5"></span><strong>심각 </strong> 0~40%이하 [3개 시군]</li>
                    </ul>
               </div>
               <div id="map2 " class="map_box">
                    <h3>논가뭄</h3>
                    <div class="map overflow-hidden" id="mapView2"></div>
                    <ul class="legend">
                        <li class="mt-2"><span class="status status_1"></span><strong>정상 </strong> 61%이상 [148개 시군]</li>
                        <li class="mt-2"><span class="status status_2"></span><strong>관심 </strong> 60%이하 [18개 시군]</li>
                        <li class="mt-2"><span class="status status_3"></span><strong>주의 </strong> 45이하 [1개 시군]</li>
                        <li class="mt-2"><span class="status status_4"></span><strong>경계 </strong> 30%이하 [0개 시군]</li>
                        <li class="mt-2"><span class="status status_5"></span><strong>심각 </strong> 15%이하 [0개 시군]</li>
                    </ul>
                </div>
                <div id="map3" class="map_box">
                    <h3>기상가뭄</h3>
                    <div class="map overflow-hidden" id="mapView3"></div>
                    <ul class="legend">
                        <li class="mt-2"><span class="status status_1"></span>80%초과 [30개 시군]</li>
                        <li class="mt-2"><span class="status status_2"></span>70%초과~80% 이하 [27개 시군]</li>
                        <li class="mt-2"><span class="status status_3"></span>80%초과~60%이하 [34개 시군]</li>
                        <li class="mt-2"><span class="status status_4"></span>50%초과~50%이하 [27개 시군]</li>
                        <li class="mt-2"><span class="status status_5"></span>0~50%이하 [45개 시군]</li>
                    </ul>
               </div>
            </section>
        </section>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';
import mapData from '~/assets/data/mapData.json';

export default {
  name: "IndexPage",
  data() {
    return {
        result: "",
        map1: null,
        map2: null,
        map3: null,
        geo_json1: null,
        geo_json2: null,
        geo_json3: null,
        color: [ "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#66c1ff", "#ffe538", "#ff7c58", "#ff523e", ]
    };
  },
  methods: {
    getWord() {
      this.$axios.get("http://localhost:8080/api/helloWorld").then((data) => {
        this.result = data.data;
      });
    },
    
    randomColor(){
        return this.color[Math.floor(Math.random() * this.color.length)]//'#' + Math.floor(Math.random() * 16777215).toString(16);
    },
    resetHighlight1(e) {
        this.geo_json1.resetStyle(e.target);
    },
    resetHighlight2(e) {
        this.geo_json2.resetStyle(e.target);
    },
    resetHighlight3(e) {
        this.geo_json3.resetStyle(e.target);
    },
    highlightFeature(e) {
        var layer = e.target;

        e.target.bindPopup(e.target.feature.properties.SIG_KOR_NM).openPopup();

        layer.setStyle({
            weight: 3,
            color: '#777',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    },
    onEachFeature1(feature, layer) {
        layer.on({
            mouseover: this.highlightFeature,
            mouseout: this.resetHighlight1,
            // click: this.zoomToFeature1
        });
    },
    onEachFeature2(feature, layer) {
        layer.on({
            mouseover: this.highlightFeature,
            mouseout: this.resetHighlight2,
            // click: this.zoomToFeature2
        });
    },
    onEachFeature3(feature, layer) {
        layer.on({
            mouseover: this.highlightFeature,
            mouseout: this.resetHighlight3,
            // click: this.zoomToFeature3
        });
    },
    style(feature) {
        return {
            fillColor: this.randomColor(),
            weight: 1,
            opacity: 1,
            color: 'black',
            // dashArray: '1',
            fillOpacity: 0.9
        };
    }
  },
  setup() {

    const options = {
            center: [36, 127.7],
            zoomSnap: 0.25,
            zoom: 7.4,
            maxBounds: null,
            layers: [],
            worldCopyJump: false,
            crs: L.CRS.EPSG3857,
            zoomControl: true,
        }
    const mapView1 = ref(null);
    const map1 = ref(null);
    const input = ref(null)
    const geo_json1 = ref(null);
    const color = [ "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#ffffff", "#66c1ff", "#ffe538", "#ff7c58", "#ff523e", ]

    onMounted(() => {

        nextTick(() => {
            
          map1.value = L.map(mapView1.value, options)
          geo_json1.value = L.geoJson(mapData, {onEachFeature: onEachFeature1, style: style}).addTo(map1.value)

          // 맵 사이즈를 다시 설정해준다. (route로 이동해서 올때 안그려지는 문제 해결)
          setTimeout(function() { window.dispatchEvent(new Event('resize')) }, 250);
        })
    })

    const randomColor = () => {
        return color[Math.floor(Math.random() * color.length)]//'#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    const style = (feature) => {
        return {
            fillColor: randomColor(),
            weight: 1,
            opacity: 1,
            color: 'black',
            // dashArray: '1',
            fillOpacity: 0.9
        };
    }

    const resetHighlight1 = (e) => {
        geo_json1.value.resetStyle(e.target);
    }

    const highlightFeature = (e) => {
        var layer = e.target;

        e.target.bindPopup(e.target.feature.properties.SIG_KOR_NM).openPopup();

        layer.setStyle({
            weight: 3,
            color: '#777',
            dashArray: '',
            fillOpacity: 0.7
        });

        if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
            layer.bringToFront();
        }
    }

    const zoomToFeature = (e) => {
    }

    const onEachFeature1 = (feature, layer) => {
        layer.on({
            mouseover: highlightFeature,
            mouseout: resetHighlight1,
            click: zoomToFeature
        });
    }

        onDeactivated(() => {
      console.log("unmounted");
      if(map1.value) {
        map1.value.off();
        map1.value.remove();
        map1.value = null
        console.log(map1.value)
      }
    });

    return {
      mapView1,
    }





    // this.$nextTick(() => {

        // this.map1 = L.map('mapView1', options)
    //     this.map2 = L.map('mapView2', options)
    //     this.map3 = L.map('mapView3', options)

        
    //     this.geo_json2 = L.geoJson(mapData, {onEachFeature: this.onEachFeature2, style: this.style}).addTo(this.map2);
    //     this.geo_json3 = L.geoJson(mapData, {onEachFeature: this.onEachFeature3, style: this.style}).addTo(this.map3);

    // })



  
  },
  // destroyed() {
  //   this.map1.off();
  //   this.map1.remove();
  //   this.map1 = null
  //   // this.map2.remove();
  // }
}
</script>
