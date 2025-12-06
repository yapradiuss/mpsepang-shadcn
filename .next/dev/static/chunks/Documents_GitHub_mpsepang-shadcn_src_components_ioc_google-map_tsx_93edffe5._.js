(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GoogleMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function GoogleMap({ onMapLoad, onMapError, showLandmarks = false, showBlokPerancangan = false, showBridge = false, showCCTV = false, showChartingKm = false, showConstructedSlope = false, showDrainage = false, showEarthWork = false, showFeederPillar = false, showFlexiblePost = false, showGtmix = false, showSempadanTaman = false, showGtnhSemasa = false, showJalan = false, showJalanKejuruteraan = false, showKomitedKm = false, showLocationMapAset = false, showLocationMapAsetItem = false, showLokasiBanjir = false, showNdcdb20 = false, showNdcdb23 = false, showPasarAwam = false, showPasarMalam = false, showPasarSari = false, showPasarTani = false, showRoadHump = false, showRoadMarkingLinear = false, showRoadMarkingPoint = false, showRoadMedian = false, showRoadShoulder = false, showSampahHaram = false, showSempadanDaerah = false, showSignboard = false, showSportFacility = false, showStreetLighting = false, showLoranetStreetlight = false, showTamanPerumahan = false, showTrafficLight = false, showWartaKawasanLapang = false, showZonAhliMajlis = false, apiUrl = 'http://43.216.228.155:3001/api/blok_perancangan' }) {
    _s();
    const mapRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const mapInstanceRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const resizeHandlerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const dataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const bridgeDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chartingKmDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const constructedSlopeDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const drainageDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const earthWorkDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const flexiblePostDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const gtmixDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sempadanTamanDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sempadanTamanMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const gtnhSemasaDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const jalanDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const jalanKejuruteraanDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const komitedKmDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const locationMapAsetMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const locationMapAsetItemMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const lokasiBanjirMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const ndcdb20DataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ndcdb20MarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const ndcdb23DataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ndcdb23MarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pasarAwamDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pasarAwamMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pasarMalamDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pasarMalamMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pasarSariDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pasarSariMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const pasarTaniDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const pasarTaniMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const roadHumpMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const roadMarkingLinearDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roadMarkingLinearMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const roadMarkingPointMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const roadMedianDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roadMedianMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const roadShoulderDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const roadShoulderMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const sampahHaramMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const sempadanDaerahDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sempadanDaerahMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const signboardMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const sportFacilityMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const streetLightingMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const loranetStreetlightMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const tamanPerumahanDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const tamanPerumahanMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const trafficLightMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const wartaKawasanLapangDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const wartaKawasanLapangMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const zonAhliMajlisDataLayerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const zonAhliMajlisMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const polygonsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const bridgeMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const cctvMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const chartingKmMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const constructedSlopeMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const drainageMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const earthWorkMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const feederPillarMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const flexiblePostMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const jalanMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const jalanKejuruteraanMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const komitedKmMarkersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [blokData, setBlokData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [bridgeData, setBridgeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [cctvData, setCctvData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [chartingKmData, setChartingKmData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [constructedSlopeData, setConstructedSlopeData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [drainageData, setDrainageData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [earthWorkData, setEarthWorkData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [feederPillarData, setFeederPillarData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [flexiblePostData, setFlexiblePostData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gtmixData, setGtmixData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sempadanTamanData, setSempadanTamanData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [gtnhSemasaData, setGtnhSemasaData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jalanData, setJalanData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [jalanKejuruteraanData, setJalanKejuruteraanData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [komitedKmData, setKomitedKmData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [locationMapAsetData, setLocationMapAsetData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [locationMapAsetItemData, setLocationMapAsetItemData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [lokasiBanjirData, setLokasiBanjirData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ndcdb20Data, setNdcdb20Data] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [ndcdb23Data, setNdcdb23Data] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pasarAwamData, setPasarAwamData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pasarMalamData, setPasarMalamData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pasarSariData, setPasarSariData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [pasarTaniData, setPasarTaniData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roadHumpData, setRoadHumpData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roadMarkingLinearData, setRoadMarkingLinearData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roadMarkingPointData, setRoadMarkingPointData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roadMedianData, setRoadMedianData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [roadShoulderData, setRoadShoulderData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sampahHaramData, setSampahHaramData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sempadanDaerahData, setSempadanDaerahData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [signboardData, setSignboardData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [sportFacilityData, setSportFacilityData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [streetLightingData, setStreetLightingData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loranetStreetlightData, setLoranetStreetlightData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [tamanPerumahanData, setTamanPerumahanData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [trafficLightData, setTrafficLightData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [wartaKawasanLapangData, setWartaKawasanLapangData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [zonAhliMajlisData, setZonAhliMajlisData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const initAttemptedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    const landmarksEnabledRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(showLandmarks);
    // Helper function to get color for each blok
    const getColorForBlok = (blok, index)=>{
        const colors = [
            '#3b82f6',
            '#10b981',
            '#f59e0b',
            '#ef4444',
            '#8b5cf6',
            '#06b6d4',
            '#f97316',
            '#ec4899'
        ];
        return colors[index % colors.length];
    };
    // Function to load and plot blok_perancangan data
    const loadBlokPerancanganData = async (map, dataLayer)=>{
        try {
            console.log('Fetching blok_perancangan data from API...', apiUrl);
            const response = await fetch(apiUrl);
            if (!response.ok) {
                const errorText = await response.text().catch(()=>'Unknown error');
                console.error(`HTTP error! status: ${response.status}`, errorText);
                // Don't throw - just log and return, so map can still work
                setError(`Failed to load blok_perancangan data: ${response.status}`);
                return;
            }
            const data = await response.json();
            console.log('API Response:', data);
            const blokPerancangan = data.blok_perancangan || [];
            console.log(`Loaded ${blokPerancangan.length} blok_perancangan records`);
            if (blokPerancangan.length > 0) {
                console.log('Sample record:', JSON.stringify(blokPerancangan[0], null, 2));
                console.log('Has geom?', !!blokPerancangan[0].geom);
                console.log('Has lat/lon?', !!blokPerancangan[0].latitude && !!blokPerancangan[0].longitude);
                if (blokPerancangan[0].geom) {
                    console.log('Geom type:', typeof blokPerancangan[0].geom);
                    if (typeof blokPerancangan[0].geom === 'object') {
                        console.log('Geom keys:', Object.keys(blokPerancangan[0].geom));
                    }
                }
            }
            setBlokData(blokPerancangan);
            if (blokPerancangan.length === 0) {
                console.warn('No blok_perancangan data found');
                return;
            }
            // Clear existing polygons
            polygonsRef.current.forEach((polygon)=>{
                polygon.setMap(null);
            });
            polygonsRef.current = [];
            // Clear existing data layer
            dataLayer.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all features first
            const allFeatures = [];
            // Process each blok_perancangan record
            blokPerancangan.forEach((blok, index)=>{
                try {
                    // Always try to add a marker first using lat/lon if available
                    if (blok.latitude && blok.longitude) {
                        console.log(`Adding marker for ${blok.nama} at ${blok.latitude}, ${blok.longitude}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat: blok.latitude,
                                lng: blok.longitude
                            },
                            map,
                            title: blok.nama || `Blok ${blok.id}`,
                            icon: {
                                path: window.google.maps.SymbolPath.CIRCLE,
                                scale: 10,
                                fillColor: '#ef4444',
                                fillOpacity: 0.9,
                                strokeColor: '#FFFFFF',
                                strokeWeight: 3
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${blok.nama || 'Blok Perancangan'}</h3>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${blok.id}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Sem RT:</strong> ${blok.sem_rt || 'N/A'}</p>
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Location:</strong> ${blok.latitude?.toFixed(6)}, ${blok.longitude?.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        polygonsRef.current.push(marker);
                    }
                    // Then try to add geometry if available
                    if (blok.geom) {
                        console.log(`Processing geometry for blok ${blok.gid} (${blok.nama})`);
                        // Check if geom is already GeoJSON or needs parsing
                        let geometry = blok.geom;
                        // If geom is a string, try to parse it
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for blok ${blok.gid}:`, e);
                                return;
                            }
                        }
                        console.log(`Geometry type: ${geometry?.type}`, geometry);
                        // Create feature for this geometry
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                gid: blok.gid,
                                id: blok.id,
                                nama: blok.nama,
                                sem_rt: blok.sem_rt,
                                index: index,
                                latitude: blok.latitude,
                                longitude: blok.longitude
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing blok ${blok.gid}:`, err);
                }
            });
            console.log(`Total features collected: ${allFeatures.length}`);
            // Add all features to Data Layer at once
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                console.log('Adding GeoJSON to Data Layer...');
                console.log(`Feature collection has ${allFeatures.length} features`);
                console.log('First feature sample:', JSON.stringify(allFeatures[0], null, 2));
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} features to map`);
                    if (!addedFeatures || addedFeatures.length === 0) {
                        console.warn('No features were added to the map. Check geometry format.');
                        return;
                    }
                    // Style the polygons with different colors
                    dataLayer.setStyle((feature)=>{
                        try {
                            let props = {};
                            // Try different ways to get properties
                            if (feature.getProperty) {
                                props = feature.getProperty('properties') || {};
                            }
                            if (!props || Object.keys(props).length === 0) {
                                try {
                                    const geoJson = feature.toGeoJson();
                                    props = geoJson?.properties || {};
                                } catch (e) {
                                    console.warn('Could not get feature properties:', e);
                                }
                            }
                            const index = props.index || 0;
                            return {
                                fillColor: getColorForBlok({}, index),
                                fillOpacity: 0.5,
                                strokeColor: '#FFFFFF',
                                strokeWeight: 3,
                                strokeOpacity: 1
                            };
                        } catch (err) {
                            console.error('Error styling feature:', err);
                            // Return default style
                            return {
                                fillColor: '#3b82f6',
                                fillOpacity: 0.5,
                                strokeColor: '#FFFFFF',
                                strokeWeight: 3,
                                strokeOpacity: 1
                            };
                        }
                    });
                    // Add click event listener for info window
                    dataLayer.addListener('click', (event)=>{
                        try {
                            const feature = event.feature;
                            let props = {};
                            // Try different ways to get properties
                            if (feature.getProperty) {
                                props = feature.getProperty('properties') || {};
                            }
                            if (!props || Object.keys(props).length === 0) {
                                try {
                                    const geoJson = feature.toGeoJson();
                                    props = geoJson?.properties || {};
                                } catch (e) {
                                    console.warn('Could not get feature properties for info window:', e);
                                }
                            }
                            const infoWindow = new window.google.maps.InfoWindow({
                                content: `
                  <div style="padding: 8px; min-width: 200px;">
                    <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${props.nama || 'Blok Perancangan'}</h3>
                    <p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${props.id || props.gid || 'N/A'}</p>
                    <p style="margin: 4px 0; font-size: 14px;"><strong>Sem RT:</strong> ${props.sem_rt || 'N/A'}</p>
                    ${props.latitude && props.longitude ? `
                      <p style="margin: 4px 0; font-size: 12px; color: #666;">
                        <strong>Location:</strong> ${props.latitude.toFixed(6)}, ${props.longitude.toFixed(6)}
                      </p>
                    ` : ''}
                  </div>
                `
                            });
                            infoWindow.setPosition(event.latLng);
                            infoWindow.open(map);
                        } catch (err) {
                            console.error('Error showing info window:', err);
                        }
                    });
                    // Fit bounds to show all features - use addedFeatures array instead of getLength()
                    if (addedFeatures && addedFeatures.length > 0) {
                        const bounds = new window.google.maps.LatLngBounds();
                        addedFeatures.forEach((feature)=>{
                            try {
                                const geometry = feature.getGeometry();
                                if (geometry) {
                                    geometry.forEachLatLng((latLng)=>{
                                        bounds.extend(latLng);
                                    });
                                }
                            } catch (err) {
                                console.warn('Error processing feature for bounds:', err);
                            }
                        });
                        if (!bounds.isEmpty()) {
                            console.log('Fitting bounds to show all features');
                            map.fitBounds(bounds);
                        }
                    }
                } catch (geoJsonError) {
                    console.error('Error adding GeoJSON to Data Layer:', geoJsonError);
                    console.error('Feature collection:', featureCollection);
                }
            }
            // Also fit bounds to markers if we have any
            if (polygonsRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                polygonsRef.current.forEach((marker)=>{
                    if (marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show all markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading blok_perancangan data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot bridge data
    const loadBridgeData = async (map, dataLayer)=>{
        try {
            const bridgeApiUrl = 'http://43.216.228.155:3001/api/bridge';
            console.log('Fetching bridge data from API...', bridgeApiUrl);
            const response = await fetch(bridgeApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const bridges = data.bridge || [];
            console.log(`Loaded ${bridges.length} bridge records`);
            console.log('Bridge API Response:', data);
            if (bridges.length > 0) {
                console.log('Sample bridge record:', JSON.stringify(bridges[0], null, 2));
                console.log('Sample bridge latitude_s:', bridges[0].latitude_s, typeof bridges[0].latitude_s);
                console.log('Sample bridge longitude_:', bridges[0].longitude_, typeof bridges[0].longitude_);
            }
            setBridgeData(bridges);
            if (bridges.length === 0) {
                console.warn('No bridge data found');
                return;
            }
            // Clear existing bridge markers
            bridgeMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            bridgeMarkersRef.current = [];
            // Clear existing bridge features from data layer
            dataLayer.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all bridge features
            const allFeatures = [];
            // Process each bridge record
            let markersCreated = 0;
            bridges.forEach((bridge, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof bridge.latitude_s === 'string' ? parseFloat(bridge.latitude_s) : typeof bridge.latitude_s === 'number' ? bridge.latitude_s : null;
                    const lng = typeof bridge.longitude_ === 'string' ? parseFloat(bridge.longitude_) : typeof bridge.longitude_ === 'number' ? bridge.longitude_ : null;
                    console.log(`Bridge ${bridge.gid}: lat=${lat}, lng=${lng}, original lat=${bridge.latitude_s}, original lng=${bridge.longitude_}`);
                    // Add marker at start point if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for bridge ${bridge.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: bridge.lable_id || bridge.route_name || `Bridge ${bridge.gid}`,
                            icon: {
                                url: '/icon/bridge.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${bridge.lable_id || 'Bridge'}</h3>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Route:</strong> ${bridge.route_name || 'N/A'}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Park:</strong> ${bridge.park_name || 'N/A'}</p>
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Start:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        bridgeMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Bridge ${bridge.gid} has invalid coordinates: lat=${bridge.latitude_s} (${typeof bridge.latitude_s}), lng=${bridge.longitude_} (${typeof bridge.longitude_})`);
                    }
                    // Add geometry if available (MULTILINESTRING for bridges)
                    if (bridge.geom) {
                        let geometry = bridge.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for bridge ${bridge.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'bridge',
                                gid: bridge.gid,
                                lable_id: bridge.lable_id,
                                route_name: bridge.route_name,
                                park_name: bridge.park_name,
                                index: index
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing bridge ${bridge.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} bridge markers out of ${bridges.length} bridges`);
            // Fit map bounds to show all bridge markers (but don't override if blok_perancangan is also loaded)
            // We'll let the blok_perancangan bounds take precedence if both are loaded
            if (bridgeMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                bridgeMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Bridge markers bounds:', bounds.toJSON());
                // Only fit bounds if there are no other features that might have already set bounds
                // This prevents the map from jumping when both datasets load
                }
            }
            // Add bridge features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} bridge features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style bridge lines (MULTILINESTRING) - apply style to all features in this layer
                        dataLayer.setStyle({
                            strokeColor: '#f59e0b',
                            strokeWeight: 4,
                            strokeOpacity: 0.8
                        });
                        // Add click event listener for bridge info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                let props = {};
                                // Try to get properties
                                try {
                                    props = feature.getProperty('properties') || {};
                                } catch (e) {
                                    try {
                                        const geoJson = feature.toGeoJson();
                                        props = geoJson?.properties || {};
                                    } catch (e2) {
                                        console.warn('Could not get feature properties:', e2);
                                    }
                                }
                                const infoWindow = new window.google.maps.InfoWindow({
                                    content: `
                    <div style="padding: 8px; min-width: 200px;">
                      <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${props.lable_id || 'Bridge'}</h3>
                      <p style="margin: 4px 0; font-size: 14px;"><strong>Route:</strong> ${props.route_name || 'N/A'}</p>
                      <p style="margin: 4px 0; font-size: 14px;"><strong>Park:</strong> ${props.park_name || 'N/A'}</p>
                    </div>
                  `
                                });
                                infoWindow.setPosition(event.latLng);
                                infoWindow.open(map);
                            } catch (err) {
                                console.error('Error showing bridge info window:', err);
                            }
                        });
                    }
                } catch (geoJsonError) {
                    console.error('Error adding bridge GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading bridge data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot CCTV data
    const loadCCTVData = async (map)=>{
        try {
            const cctvApiUrl = 'http://43.216.228.155:3001/api/cctv';
            console.log('Fetching CCTV data from API...', cctvApiUrl);
            const response = await fetch(cctvApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const cctvs = data.cctv || [];
            console.log(`Loaded ${cctvs.length} CCTV records`);
            setCctvData(cctvs);
            if (cctvs.length === 0) {
                console.warn('No CCTV data found');
                return;
            }
            // Clear existing CCTV markers
            cctvMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            cctvMarkersRef.current = [];
            // Process each CCTV record
            let markersCreated = 0;
            cctvs.forEach((cctv, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (cctv.latitude !== undefined && cctv.longitude !== undefined) {
                        lat = typeof cctv.latitude === 'string' ? parseFloat(cctv.latitude) : typeof cctv.latitude === 'number' ? cctv.latitude : null;
                        lng = typeof cctv.longitude === 'string' ? parseFloat(cctv.longitude) : typeof cctv.longitude === 'number' ? cctv.longitude : null;
                    } else if (cctv.geom && cctv.geom.type === 'Point' && cctv.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = cctv.geom.coordinates[0];
                        lat = cctv.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for CCTV ${cctv.no_cctv} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: cctv.no_cctv || `CCTV ${cctv.gid}`,
                            icon: {
                                url: '/icon/cctv.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px; min-width: 200px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${cctv.no_cctv || 'CCTV'}</h3>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Location:</strong> ${cctv.lokasi || 'N/A'}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Status:</strong> ${cctv.status || 'N/A'}</p>
                  ${cctv.catatan ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Note:</strong> ${cctv.catatan}</p>` : ''}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        cctvMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`CCTV ${cctv.gid} (${cctv.no_cctv}) has invalid coordinates`);
                    }
                } catch (err) {
                    console.error(`Error processing CCTV ${cctv.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} CCTV markers out of ${cctvs.length} CCTV records`);
            // Fit map bounds to show all CCTV markers if we have any
            if (cctvMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                cctvMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show CCTV markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading CCTV data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Feeder Pillar data
    const loadFeederPillarData = async (map)=>{
        try {
            const feederPillarApiUrl = 'http://43.216.228.155:3001/api/feeder_pillar';
            console.log('Fetching feeder_pillar data from API...', feederPillarApiUrl);
            const response = await fetch(feederPillarApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const feederPillars = data.feeder_pillar || [];
            console.log(`Loaded ${feederPillars.length} feeder_pillar records`);
            setFeederPillarData(feederPillars);
            if (feederPillars.length === 0) {
                console.warn('No feeder_pillar data found');
                return;
            }
            // Clear existing feeder_pillar markers
            feederPillarMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            feederPillarMarkersRef.current = [];
            // Process each feeder_pillar record
            let markersCreated = 0;
            feederPillars.forEach((feederPillar, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (feederPillar.latitude !== undefined && feederPillar.longitude !== undefined) {
                        lat = typeof feederPillar.latitude === 'string' ? parseFloat(feederPillar.latitude) : typeof feederPillar.latitude === 'number' ? feederPillar.latitude : null;
                        lng = typeof feederPillar.longitude === 'string' ? parseFloat(feederPillar.longitude) : typeof feederPillar.longitude === 'number' ? feederPillar.longitude : null;
                    } else if (feederPillar.geom && feederPillar.geom.type === 'Point' && feederPillar.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = feederPillar.geom.coordinates[0];
                        lat = feederPillar.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for feeder_pillar ${feederPillar.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Feeder Pillar ${feederPillar.gid}`,
                            icon: {
                                url: '/icon/feeder-pillar.jpg',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Feeder Pillar ${feederPillar.gid}</h3>
                ${feederPillar.objectid ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Object ID:</strong> ${feederPillar.objectid}</p>` : ''}
                ${Object.keys(feederPillar).filter((key)=>![
                                'gid',
                                'objectid',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && feederPillar[key] !== null && feederPillar[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${feederPillar[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        feederPillarMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Feeder Pillar ${feederPillar.gid} has invalid coordinates`);
                    }
                } catch (err) {
                    console.error(`Error processing feeder_pillar ${feederPillar.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} feeder_pillar markers out of ${feederPillars.length} feeder_pillar records`);
            // Fit map bounds to show all feeder_pillar markers if we have any
            if (feederPillarMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                feederPillarMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show feeder_pillar markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading feeder_pillar data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Location Map Aset data
    const loadLocationMapAsetData = async (map)=>{
        try {
            const locationMapAsetApiUrl = 'http://43.216.228.155:3001/api/location_map_aset';
            console.log('Fetching location_map_aset data from API...', locationMapAsetApiUrl);
            const response = await fetch(locationMapAsetApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const locationMapAsets = data.location_map_aset || [];
            console.log(`Loaded ${locationMapAsets.length} location_map_aset records`);
            setLocationMapAsetData(locationMapAsets);
            if (locationMapAsets.length === 0) {
                console.warn('No location_map_aset data found');
                return;
            }
            // Clear existing location_map_aset markers
            locationMapAsetMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            locationMapAsetMarkersRef.current = [];
            // Process each location_map_aset record
            let markersCreated = 0;
            locationMapAsets.forEach((locationMapAset, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (locationMapAset.latitude !== undefined && locationMapAset.longitude !== undefined) {
                        lat = typeof locationMapAset.latitude === 'string' ? parseFloat(locationMapAset.latitude) : typeof locationMapAset.latitude === 'number' ? locationMapAset.latitude : null;
                        lng = typeof locationMapAset.longitude === 'string' ? parseFloat(locationMapAset.longitude) : typeof locationMapAset.longitude === 'number' ? locationMapAset.longitude : null;
                    } else if (locationMapAset.geom && locationMapAset.geom.type === 'Point' && locationMapAset.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = locationMapAset.geom.coordinates[0];
                        lat = locationMapAset.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for location_map_aset ${locationMapAset.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Location Map Aset ${locationMapAset.gid}`,
                            icon: {
                                url: '/icon/tree.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Location Map Aset ${locationMapAset.gid}</h3>
                ${locationMapAset.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${locationMapAset.id}</p>` : ''}
                ${Object.keys(locationMapAset).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && locationMapAset[key] !== null && locationMapAset[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${locationMapAset[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        locationMapAsetMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Location Map Aset ${locationMapAset.gid} has invalid coordinates`);
                    }
                } catch (err) {
                    console.error(`Error processing location_map_aset ${locationMapAset.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} location_map_aset markers out of ${locationMapAsets.length} location_map_aset records`);
            // Fit map bounds to show all location_map_aset markers if we have any
            if (locationMapAsetMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                locationMapAsetMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show location_map_aset markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading location_map_aset data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Location Map Aset Item data
    const loadLocationMapAsetItemData = async (map)=>{
        try {
            const locationMapAsetItemApiUrl = 'http://43.216.228.155:3001/api/location_map_aset_item';
            console.log('Fetching location_map_aset_item data from API...', locationMapAsetItemApiUrl);
            const response = await fetch(locationMapAsetItemApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const locationMapAsetItems = data.location_map_aset_item || [];
            console.log(`Loaded ${locationMapAsetItems.length} location_map_aset_item records`);
            setLocationMapAsetItemData(locationMapAsetItems);
            if (locationMapAsetItems.length === 0) {
                console.warn('No location_map_aset_item data found');
                return;
            }
            // Clear existing location_map_aset_item markers
            locationMapAsetItemMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            locationMapAsetItemMarkersRef.current = [];
            // Process each location_map_aset_item record
            let markersCreated = 0;
            locationMapAsetItems.forEach((locationMapAsetItem, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (locationMapAsetItem.latitude !== undefined && locationMapAsetItem.longitude !== undefined) {
                        lat = typeof locationMapAsetItem.latitude === 'string' ? parseFloat(locationMapAsetItem.latitude) : typeof locationMapAsetItem.latitude === 'number' ? locationMapAsetItem.latitude : null;
                        lng = typeof locationMapAsetItem.longitude === 'string' ? parseFloat(locationMapAsetItem.longitude) : typeof locationMapAsetItem.longitude === 'number' ? locationMapAsetItem.longitude : null;
                    } else if (locationMapAsetItem.geom && locationMapAsetItem.geom.type === 'Point' && locationMapAsetItem.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = locationMapAsetItem.geom.coordinates[0];
                        lat = locationMapAsetItem.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for location_map_aset_item ${locationMapAsetItem.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Location Map Aset Item ${locationMapAsetItem.gid}`,
                            icon: {
                                url: '/icon/tree.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Location Map Aset Item ${locationMapAsetItem.gid}</h3>
                ${locationMapAsetItem.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${locationMapAsetItem.id}</p>` : ''}
                ${Object.keys(locationMapAsetItem).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && locationMapAsetItem[key] !== null && locationMapAsetItem[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${locationMapAsetItem[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        locationMapAsetItemMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Location Map Aset Item ${locationMapAsetItem.gid} has invalid coordinates`);
                    }
                } catch (err) {
                    console.error(`Error processing location_map_aset_item ${locationMapAsetItem.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} location_map_aset_item markers out of ${locationMapAsetItems.length} location_map_aset_item records`);
            // Fit map bounds to show all location_map_aset_item markers if we have any
            if (locationMapAsetItemMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                locationMapAsetItemMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show location_map_aset_item markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading location_map_aset_item data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Lokasi Banjir data
    const loadLokasiBanjirData = async (map)=>{
        try {
            const lokasiBanjirApiUrl = 'http://43.216.228.155:3001/api/lokasi_banjir';
            console.log('Fetching lokasi_banjir data from API...', lokasiBanjirApiUrl);
            const response = await fetch(lokasiBanjirApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const lokasiBanjirs = data.lokasi_banjir || [];
            console.log(`Loaded ${lokasiBanjirs.length} lokasi_banjir records`);
            setLokasiBanjirData(lokasiBanjirs);
            if (lokasiBanjirs.length === 0) {
                console.warn('No lokasi_banjir data found');
                return;
            }
            // Clear existing lokasi_banjir markers
            lokasiBanjirMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            lokasiBanjirMarkersRef.current = [];
            // Process each lokasi_banjir record
            let markersCreated = 0;
            lokasiBanjirs.forEach((lokasiBanjir, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (lokasiBanjir.latitude !== undefined && lokasiBanjir.longitude !== undefined) {
                        lat = typeof lokasiBanjir.latitude === 'string' ? parseFloat(lokasiBanjir.latitude) : typeof lokasiBanjir.latitude === 'number' ? lokasiBanjir.latitude : null;
                        lng = typeof lokasiBanjir.longitude === 'string' ? parseFloat(lokasiBanjir.longitude) : typeof lokasiBanjir.longitude === 'number' ? lokasiBanjir.longitude : null;
                    } else if (lokasiBanjir.geom && lokasiBanjir.geom.type === 'Point' && lokasiBanjir.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = lokasiBanjir.geom.coordinates[0];
                        lat = lokasiBanjir.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for lokasi_banjir ${lokasiBanjir.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Lokasi Banjir ${lokasiBanjir.gid}`,
                            icon: {
                                url: '/icon/flood.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Lokasi Banjir ${lokasiBanjir.gid}</h3>
                ${lokasiBanjir.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${lokasiBanjir.id}</p>` : ''}
                ${Object.keys(lokasiBanjir).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && lokasiBanjir[key] !== null && lokasiBanjir[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${lokasiBanjir[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        lokasiBanjirMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Lokasi Banjir ${lokasiBanjir.gid} has invalid coordinates`);
                    }
                } catch (err) {
                    console.error(`Error processing lokasi_banjir ${lokasiBanjir.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} lokasi_banjir markers out of ${lokasiBanjirs.length} lokasi_banjir records`);
            // Fit map bounds to show all lokasi_banjir markers if we have any
            if (lokasiBanjirMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                lokasiBanjirMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show lokasi_banjir markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading lokasi_banjir data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot charting_km data
    const loadChartingKmData = async (map, dataLayer)=>{
        try {
            const chartingKmApiUrl = 'http://43.216.228.155:3001/api/charting_km';
            console.log('Fetching charting_km data from API...', chartingKmApiUrl);
            const response = await fetch(chartingKmApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const chartingKms = data.charting_km || [];
            console.log(`Loaded ${chartingKms.length} charting_km records`);
            setChartingKmData(chartingKms);
            if (chartingKms.length === 0) {
                console.warn('No charting_km data found');
                return;
            }
            // Clear existing charting_km markers
            chartingKmMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            chartingKmMarkersRef.current = [];
            // Clear existing charting_km features from data layer
            dataLayer.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all charting_km features and create markers
            const allFeatures = [];
            let markersCreated = 0;
            chartingKms.forEach((chartingKm, index)=>{
                try {
                    if (chartingKm.geom) {
                        let geometry = chartingKm.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for charting_km ${chartingKm.gid}:`, e);
                                return;
                            }
                        }
                        // Calculate centroid for marker placement
                        let lat = null;
                        let lng = null;
                        if (geometry.type === 'MultiPolygon' && geometry.coordinates) {
                            // Calculate centroid from first polygon's first ring
                            const firstPolygon = geometry.coordinates[0];
                            if (firstPolygon && firstPolygon[0] && firstPolygon[0].length > 0) {
                                const coords = firstPolygon[0];
                                let sumLat = 0;
                                let sumLng = 0;
                                let count = 0;
                                coords.forEach((coord)=>{
                                    // GeoJSON coordinates are [longitude, latitude]
                                    sumLng += coord[0];
                                    sumLat += coord[1];
                                    count++;
                                });
                                if (count > 0) {
                                    lng = sumLng / count;
                                    lat = sumLat / count;
                                }
                            }
                        } else if (geometry.type === 'Polygon' && geometry.coordinates) {
                            // Handle single Polygon
                            const firstRing = geometry.coordinates[0];
                            if (firstRing && firstRing.length > 0) {
                                let sumLat = 0;
                                let sumLng = 0;
                                let count = 0;
                                firstRing.forEach((coord)=>{
                                    sumLng += coord[0];
                                    sumLat += coord[1];
                                    count++;
                                });
                                if (count > 0) {
                                    lng = sumLng / count;
                                    lat = sumLat / count;
                                }
                            }
                        }
                        // Create marker at centroid if coordinates are valid
                        if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng)) {
                            const marker = new window.google.maps.Marker({
                                position: {
                                    lat,
                                    lng
                                },
                                map,
                                title: chartingKm.no_fail_km || `Charting KM ${chartingKm.gid}`,
                                icon: {
                                    url: '/icon/chartingkm.png',
                                    scaledSize: new window.google.maps.Size(32, 32),
                                    anchor: new window.google.maps.Point(16, 16)
                                }
                            });
                            const infoWindow = new window.google.maps.InfoWindow({
                                content: `
                  <div style="padding: 8px; min-width: 200px;">
                    <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${chartingKm.no_fail_km || 'Charting KM'}</h3>
                    ${chartingKm.pemaju ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Pemaju:</strong> ${chartingKm.pemaju}</p>` : ''}
                    ${chartingKm.status ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Status:</strong> ${chartingKm.status}</p>` : ''}
                    ${chartingKm.no_ruj_pel ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>No. Rujukan:</strong> ${chartingKm.no_ruj_pel}</p>` : ''}
                  </div>
                `
                            });
                            marker.addListener('click', ()=>{
                                infoWindow.open(map, marker);
                            });
                            chartingKmMarkersRef.current.push(marker);
                            markersCreated++;
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'charting_km',
                                gid: chartingKm.gid,
                                no_fail_km: chartingKm.no_fail_km,
                                pemaju: chartingKm.pemaju,
                                status: chartingKm.status,
                                index: index
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing charting_km ${chartingKm.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} charting_km markers out of ${chartingKms.length} charting_km records`);
            console.log(`Total features collected: ${allFeatures.length}`);
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                console.log('Adding GeoJSON to Data Layer...');
                console.log(`Feature collection has ${allFeatures.length} features`);
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} charting_km features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style the polygons with different colors
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                const index = props.index || 0;
                                return {
                                    fillColor: getColorForBlok({}, index),
                                    fillOpacity: 0.3,
                                    strokeColor: getColorForBlok({}, index),
                                    strokeWeight: 2,
                                    strokeOpacity: 0.8
                                };
                            } catch (err) {
                                console.error('Error styling charting_km feature:', err);
                                return {
                                    fillColor: '#8b5cf6',
                                    fillOpacity: 0.3,
                                    strokeColor: '#8b5cf6',
                                    strokeWeight: 2,
                                    strokeOpacity: 0.8
                                };
                            }
                        });
                        // Add click event listener for charting_km info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'charting_km') {
                                    const chartingKm = chartingKms.find((ck)=>ck.gid === props.gid);
                                    const infoWindow = new window.google.maps.InfoWindow({
                                        content: `
                      <div style="padding: 8px; min-width: 200px;">
                        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${props.no_fail_km || 'Charting KM'}</h3>
                        ${props.pemaju ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Pemaju:</strong> ${props.pemaju}</p>` : ''}
                        ${props.status ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Status:</strong> ${props.status}</p>` : ''}
                        ${chartingKm?.no_ruj_pel ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>No. Rujukan:</strong> ${chartingKm.no_ruj_pel}</p>` : ''}
                      </div>
                    `
                                    });
                                    infoWindow.setPosition(event.latLng);
                                    infoWindow.open(map);
                                }
                            } catch (err) {
                                console.error('Error showing charting_km info window:', err);
                            }
                        });
                    }
                } catch (geoJsonError) {
                    console.error('Error adding charting_km GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading charting_km data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot constructed_slope data
    const loadConstructedSlopeData = async (map, dataLayer)=>{
        try {
            const constructedSlopeApiUrl = 'http://43.216.228.155:3001/api/constructed_slope';
            console.log('Fetching constructed_slope data from API...', constructedSlopeApiUrl);
            const response = await fetch(constructedSlopeApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const constructedSlopes = data.constructed_slope || [];
            console.log(`Loaded ${constructedSlopes.length} constructed_slope records`);
            setConstructedSlopeData(constructedSlopes);
            if (constructedSlopes.length === 0) {
                console.warn('No constructed_slope data found');
                return;
            }
            // Clear existing constructed_slope markers
            constructedSlopeMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            constructedSlopeMarkersRef.current = [];
            // Clear existing constructed_slope features from data layer
            // Collect features first, then remove them (to avoid iteration issues)
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'constructed_slope') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all constructed_slope features
            const allFeatures = [];
            // Process each constructed_slope record
            let markersCreated = 0;
            constructedSlopes.forEach((slope, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof slope.latitude_s === 'string' ? parseFloat(slope.latitude_s) : typeof slope.latitude_s === 'number' ? slope.latitude_s : null;
                    const lng = typeof slope.longitude_ === 'string' ? parseFloat(slope.longitude_) : typeof slope.longitude_ === 'number' ? slope.longitude_ : null;
                    // Add marker at start point if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for constructed_slope ${slope.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: slope.lable_id || slope.route_name || `Constructed Slope ${slope.gid}`,
                            icon: {
                                url: '/icon/constructionslope.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${slope.lable_id || 'Constructed Slope'}</h3>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Route:</strong> ${slope.route_name || 'N/A'}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Park:</strong> ${slope.park_name || 'N/A'}</p>
                  ${slope.type ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Type:</strong> ${slope.type}</p>` : ''}
                  ${slope.events ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Events:</strong> ${slope.events}</p>` : ''}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Start:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        constructedSlopeMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Constructed Slope ${slope.gid} has invalid coordinates: lat=${slope.latitude_s} (${typeof slope.latitude_s}), lng=${slope.longitude_} (${typeof slope.longitude_})`);
                    }
                    // Add geometry if available (MULTILINESTRING for constructed_slope)
                    if (slope.geom) {
                        let geometry = slope.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for constructed_slope ${slope.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'constructed_slope',
                                gid: slope.gid,
                                lable_id: slope.lable_id,
                                route_name: slope.route_name,
                                park_name: slope.park_name,
                                slope_type: slope.type,
                                events: slope.events,
                                index: index
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing constructed_slope ${slope.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} constructed_slope markers out of ${constructedSlopes.length} constructed_slope records`);
            // Fit map bounds to show all constructed_slope markers if we have any
            if (constructedSlopeMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                constructedSlopeMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show constructed_slope markers');
                    map.fitBounds(bounds);
                }
            }
            // Add constructed_slope features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} constructed_slope features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style constructed_slope lines (MULTILINESTRING) - apply style to all features in this layer
                        dataLayer.setStyle({
                            strokeColor: '#10b981',
                            strokeWeight: 4,
                            strokeOpacity: 0.8
                        });
                        // Add click event listener for constructed_slope info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'constructed_slope') {
                                    const infoWindow = new window.google.maps.InfoWindow({
                                        content: `
                      <div style="padding: 8px; min-width: 200px;">
                        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${props.lable_id || 'Constructed Slope'}</h3>
                        <p style="margin: 4px 0; font-size: 14px;"><strong>Route:</strong> ${props.route_name || 'N/A'}</p>
                        <p style="margin: 4px 0; font-size: 14px;"><strong>Park:</strong> ${props.park_name || 'N/A'}</p>
                        ${props.slope_type ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Type:</strong> ${props.slope_type}</p>` : ''}
                        ${props.events ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Events:</strong> ${props.events}</p>` : ''}
                      </div>
                    `
                                    });
                                    infoWindow.setPosition(event.latLng);
                                    infoWindow.open(map);
                                }
                            } catch (err) {
                                console.error('Error showing constructed_slope info window:', err);
                            }
                        });
                    }
                } catch (geoJsonError) {
                    console.error('Error adding constructed_slope GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading constructed_slope data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot drainage data
    const loadDrainageData = async (map, dataLayer)=>{
        try {
            const drainageApiUrl = 'http://43.216.228.155:3001/api/drainage';
            console.log('Fetching drainage data from API...', drainageApiUrl);
            const response = await fetch(drainageApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const drainages = data.drainage || [];
            console.log(`Loaded ${drainages.length} drainage records`);
            setDrainageData(drainages);
            if (drainages.length === 0) {
                console.warn('No drainage data found');
                return;
            }
            // Clear existing drainage markers
            drainageMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            drainageMarkersRef.current = [];
            // Clear existing drainage features from data layer
            // Collect features first, then remove them (to avoid iteration issues)
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'drainage') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all drainage features
            const allFeatures = [];
            // Process each drainage record
            let markersCreated = 0;
            drainages.forEach((drainage, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof drainage.latitude_s === 'string' ? parseFloat(drainage.latitude_s) : typeof drainage.latitude_s === 'number' ? drainage.latitude_s : null;
                    const lng = typeof drainage.longitude_ === 'string' ? parseFloat(drainage.longitude_) : typeof drainage.longitude_ === 'number' ? drainage.longitude_ : null;
                    // Add marker at start point if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for drainage ${drainage.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: drainage.lable_id || drainage.route_name || `Drainage ${drainage.gid}`,
                            icon: {
                                url: '/icon/drainage.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${drainage.lable_id || 'Drainage'}</h3>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Route:</strong> ${drainage.route_name || 'N/A'}</p>
                  <p style="margin: 4px 0; font-size: 14px;"><strong>Park:</strong> ${drainage.park_name || 'N/A'}</p>
                  ${drainage.type ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Type:</strong> ${drainage.type}</p>` : ''}
                  ${drainage.location ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Location:</strong> ${drainage.location}</p>` : ''}
                  ${drainage.events ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Events:</strong> ${drainage.events}</p>` : ''}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Start:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        drainageMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Drainage ${drainage.gid} has invalid coordinates: lat=${drainage.latitude_s} (${typeof drainage.latitude_s}), lng=${drainage.longitude_} (${typeof drainage.longitude_})`);
                    }
                    // Add geometry if available (MULTILINESTRING for drainage)
                    if (drainage.geom) {
                        let geometry = drainage.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for drainage ${drainage.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'drainage',
                                gid: drainage.gid,
                                lable_id: drainage.lable_id,
                                route_name: drainage.route_name,
                                park_name: drainage.park_name,
                                drainage_type: drainage.type,
                                location: drainage.location,
                                events: drainage.events,
                                index: index
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing drainage ${drainage.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} drainage markers out of ${drainages.length} drainage records`);
            // Fit map bounds to show all drainage markers if we have any
            if (drainageMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                drainageMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show drainage markers');
                    map.fitBounds(bounds);
                }
            }
            // Add drainage features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} drainage features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style drainage lines (MULTILINESTRING) - apply style to all features in this layer
                        dataLayer.setStyle({
                            strokeColor: '#3b82f6',
                            strokeWeight: 3,
                            strokeOpacity: 0.8
                        });
                        // Add click event listener for drainage info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'drainage') {
                                    const infoWindow = new window.google.maps.InfoWindow({
                                        content: `
                      <div style="padding: 8px; min-width: 200px;">
                        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${props.lable_id || 'Drainage'}</h3>
                        <p style="margin: 4px 0; font-size: 14px;"><strong>Route:</strong> ${props.route_name || 'N/A'}</p>
                        <p style="margin: 4px 0; font-size: 14px;"><strong>Park:</strong> ${props.park_name || 'N/A'}</p>
                        ${props.drainage_type ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Type:</strong> ${props.drainage_type}</p>` : ''}
                        ${props.location ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Location:</strong> ${props.location}</p>` : ''}
                        ${props.events ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Events:</strong> ${props.events}</p>` : ''}
                      </div>
                    `
                                    });
                                    infoWindow.setPosition(event.latLng);
                                    infoWindow.open(map);
                                }
                            } catch (err) {
                                console.error('Error showing drainage info window:', err);
                            }
                        });
                    }
                } catch (geoJsonError) {
                    console.error('Error adding drainage GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading drainage data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Flexible Post data
    const loadFlexiblePostData = async (map, dataLayer)=>{
        try {
            const flexiblePostApiUrl = 'http://43.216.228.155:3001/api/flexible_post';
            console.log('Fetching flexible_post data from API...', flexiblePostApiUrl);
            const response = await fetch(flexiblePostApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const flexiblePosts = data.flexible_post || [];
            console.log(`Loaded ${flexiblePosts.length} flexible_post records`);
            setFlexiblePostData(flexiblePosts);
            if (flexiblePosts.length === 0) {
                console.warn('No flexible_post data found');
                return;
            }
            // Clear existing flexible_post markers
            flexiblePostMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            flexiblePostMarkersRef.current = [];
            // Clear existing flexible_post features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'flexible_post') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all flexible_post features
            const allFeatures = [];
            // Process each flexible_post record
            let markersCreated = 0;
            flexiblePosts.forEach((flexiblePost, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (flexiblePost.latitude !== undefined && flexiblePost.longitude !== undefined) {
                        lat = typeof flexiblePost.latitude === 'string' ? parseFloat(flexiblePost.latitude) : typeof flexiblePost.latitude === 'number' ? flexiblePost.latitude : null;
                        lng = typeof flexiblePost.longitude === 'string' ? parseFloat(flexiblePost.longitude) : typeof flexiblePost.longitude === 'number' ? flexiblePost.longitude : null;
                    } else if (flexiblePost.geom && flexiblePost.geom.type === 'MultiLineString' && flexiblePost.geom.coordinates) {
                        // Extract from GeoJSON MultiLineString geometry - get first point of first line
                        const firstLine = flexiblePost.geom.coordinates[0];
                        if (firstLine && firstLine.length > 0) {
                            const firstPoint = firstLine[0];
                            // GeoJSON coordinates are [longitude, latitude]
                            lng = firstPoint[0];
                            lat = firstPoint[1];
                        }
                    }
                    // Add marker at start point if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for flexible_post ${flexiblePost.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Flexible Post ${flexiblePost.gid}`,
                            icon: {
                                url: '/icon/flexiblepost.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Flexible Post ${flexiblePost.gid}</h3>
                ${flexiblePost.objectid ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Object ID:</strong> ${flexiblePost.objectid}</p>` : ''}
                ${Object.keys(flexiblePost).filter((key)=>![
                                'gid',
                                'objectid',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && flexiblePost[key] !== null && flexiblePost[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${flexiblePost[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        flexiblePostMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Flexible Post ${flexiblePost.gid} has invalid coordinates`);
                    }
                    // Add geometry if available (MULTILINESTRING for flexible_post)
                    if (flexiblePost.geom) {
                        let geometry = flexiblePost.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for flexible_post ${flexiblePost.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'flexible_post',
                                gid: flexiblePost.gid,
                                objectid: flexiblePost.objectid,
                                index: index
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing flexible_post ${flexiblePost.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} flexible_post markers out of ${flexiblePosts.length} flexible_post records`);
            // Fit map bounds to show all flexible_post markers if we have any
            if (flexiblePostMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                flexiblePostMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show flexible_post markers');
                    map.fitBounds(bounds);
                }
            }
            // Add flexible_post features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} flexible_post features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style flexible_post lines (MULTILINESTRING) - use a distinct color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'flexible_post') {
                                    return {
                                        strokeColor: '#f97316',
                                        strokeWeight: 3,
                                        strokeOpacity: 0.8
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling flexible_post feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for flexible_post info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'flexible_post') {
                                    const flexiblePost = flexiblePosts.find((fp)=>fp.gid === props.gid);
                                    if (flexiblePost) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Flexible Post ${flexiblePost.gid}</h3>
                          ${flexiblePost.objectid ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Object ID:</strong> ${flexiblePost.objectid}</p>` : ''}
                          ${Object.keys(flexiblePost).filter((key)=>![
                                                    'gid',
                                                    'objectid',
                                                    'latitude',
                                                    'longitude',
                                                    'geom',
                                                    'geom_geojson'
                                                ].includes(key) && flexiblePost[key] !== null && flexiblePost[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${flexiblePost[key]}</p>`).join('')}
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing flexible_post info window:', err);
                            }
                        });
                    }
                } catch (geoJsonError) {
                    console.error('Error adding flexible_post GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading flexible_post data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Gtmix data
    const loadGtmixData = async (map, dataLayer)=>{
        try {
            const gtmixApiUrl = 'http://43.216.228.155:3001/api/gtmix';
            console.log('Fetching gtmix data from API...', gtmixApiUrl);
            const response = await fetch(gtmixApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const gtmixes = data.gtmix || [];
            console.log(`Loaded ${gtmixes.length} gtmix records`);
            setGtmixData(gtmixes);
            if (gtmixes.length === 0) {
                console.warn('No gtmix data found');
                return;
            }
            // Clear existing gtmix features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'gtmix') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all gtmix features
            const allFeatures = [];
            // Process each gtmix record
            gtmixes.forEach((gtmix, index)=>{
                try {
                    // Add geometry if available (MULTIPOLYGON for gtmix)
                    if (gtmix.geom) {
                        let geometry = gtmix.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for gtmix ${gtmix.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'gtmix',
                                gid: gtmix.gid,
                                id: gtmix.id,
                                index: index,
                                latitude: gtmix.latitude,
                                longitude: gtmix.longitude,
                                ...Object.keys(gtmix).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude',
                                        'longitude',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = gtmix[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing gtmix ${gtmix.gid}:`, err);
                }
            });
            console.log(`Total gtmix features collected: ${allFeatures.length}`);
            // Add all features to Data Layer at once
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} gtmix features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style gtmix polygons (MULTIPOLYGON) - use a distinct color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'gtmix') {
                                    return {
                                        fillColor: '#ef4444',
                                        fillOpacity: 0.6,
                                        strokeColor: '#dc2626',
                                        strokeWeight: 3,
                                        strokeOpacity: 1.0
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling gtmix feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for gtmix info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'gtmix') {
                                    const gtmix = gtmixes.find((g)=>g.gid === props.gid);
                                    if (gtmix) {
                                        const infoContent = `
                      <div style="padding: 8px; min-width: 200px;">
                        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">GTMix ${gtmix.gid}</h3>
                        ${gtmix.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${gtmix.id}</p>` : ''}
                        ${Object.keys(gtmix).filter((key)=>![
                                                'gid',
                                                'id',
                                                'latitude',
                                                'longitude',
                                                'geom',
                                                'geom_geojson'
                                            ].includes(key) && gtmix[key] !== null && gtmix[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${gtmix[key]}</p>`).join('')}
                        ${gtmix.latitude && gtmix.longitude ? `
                          <p style="margin: 4px 0; font-size: 12px; color: #666;">
                            <strong>Centroid:</strong> ${gtmix.latitude.toFixed(6)}, ${gtmix.longitude.toFixed(6)}
                          </p>
                        ` : ''}
                      </div>
                    `;
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: infoContent
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing gtmix info window:', err);
                            }
                        });
                        // Fit bounds to show all features
                        if (addedFeatures && addedFeatures.length > 0) {
                            const bounds = new window.google.maps.LatLngBounds();
                            addedFeatures.forEach((feature)=>{
                                try {
                                    const geometry = feature.getGeometry();
                                    if (geometry) {
                                        geometry.forEachLatLng((latLng)=>{
                                            bounds.extend(latLng);
                                        });
                                    }
                                } catch (err) {
                                    console.warn('Error processing feature for bounds:', err);
                                }
                            });
                            if (!bounds.isEmpty()) {
                                console.log('Fitting bounds to show gtmix features');
                                map.fitBounds(bounds);
                            }
                        }
                    }
                } catch (geoJsonError) {
                    console.error('Error adding gtmix GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading gtmix data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Sempadan Taman data
    const loadSempadanTamanData = async (map, dataLayer)=>{
        try {
            const sempadanTamanApiUrl = 'http://43.216.228.155:3001/api/sempadan_taman';
            console.log('Fetching sempadan_taman data from API...', sempadanTamanApiUrl);
            const response = await fetch(sempadanTamanApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const sempadanTamans = data.sempadan_taman || [];
            console.log(`Loaded ${sempadanTamans.length} sempadan_taman records`);
            setSempadanTamanData(sempadanTamans);
            if (sempadanTamans.length === 0) {
                console.warn('No sempadan_taman data found');
                return;
            }
            // Clear existing sempadan_taman features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'sempadan_taman') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Clear existing sempadan_taman markers
            sempadanTamanMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            sempadanTamanMarkersRef.current = [];
            // Collect all sempadan_taman features
            const allFeatures = [];
            let markersCreated = 0;
            // Process each sempadan_taman record
            sempadanTamans.forEach((sempadanTaman, index)=>{
                try {
                    // Get latitude and longitude for marker position
                    let lat = null;
                    let lng = null;
                    if (sempadanTaman.latitude !== undefined && sempadanTaman.longitude !== undefined) {
                        lat = typeof sempadanTaman.latitude === 'string' ? parseFloat(sempadanTaman.latitude) : typeof sempadanTaman.latitude === 'number' ? sempadanTaman.latitude : null;
                        lng = typeof sempadanTaman.longitude === 'string' ? parseFloat(sempadanTaman.longitude) : typeof sempadanTaman.longitude === 'number' ? sempadanTaman.longitude : null;
                    } else if (sempadanTaman.geom && sempadanTaman.geom.type === 'MultiPolygon' && sempadanTaman.geom.coordinates && sempadanTaman.geom.coordinates.length > 0) {
                        const firstPolygon = sempadanTaman.geom.coordinates[0];
                        if (firstPolygon && firstPolygon.length > 0 && firstPolygon[0] && firstPolygon[0].length > 0) {
                            lng = firstPolygon[0][0][0];
                            lat = firstPolygon[0][0][1];
                        }
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Sempadan Taman ${sempadanTaman.gid}`,
                            icon: {
                                url: '/icon/tamanborder.png',
                                scaledSize: new window.google.maps.Size(24, 24),
                                anchor: new window.google.maps.Point(12, 12)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `<div style="padding: 8px;"><h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Sempadan Taman ${sempadanTaman.gid}</h3>${sempadanTaman.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${sempadanTaman.id}</p>` : ''}${Object.keys(sempadanTaman).filter((key)=>![
                                    'gid',
                                    'id',
                                    'latitude',
                                    'longitude',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key) && sempadanTaman[key] !== null && sempadanTaman[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${sempadanTaman[key]}</p>`).join('')}<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Center:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}</p></div>`
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        sempadanTamanMarkersRef.current.push(marker);
                        markersCreated++;
                    }
                    // Add geometry if available (MULTIPOLYGON for sempadan_taman)
                    if (sempadanTaman.geom) {
                        let geometry = sempadanTaman.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for sempadan_taman ${sempadanTaman.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'sempadan_taman',
                                gid: sempadanTaman.gid,
                                id: sempadanTaman.id,
                                index: index,
                                latitude: sempadanTaman.latitude,
                                longitude: sempadanTaman.longitude,
                                ...Object.keys(sempadanTaman).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude',
                                        'longitude',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = sempadanTaman[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing sempadan_taman ${sempadanTaman.gid}:`, err);
                }
            });
            console.log(`Total sempadan_taman features collected: ${allFeatures.length}`);
            // Add all features to Data Layer at once
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} sempadan_taman features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style sempadan_taman polygons (MULTIPOLYGON) - use a distinct color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'sempadan_taman') {
                                    return {
                                        fillColor: '#10b981',
                                        fillOpacity: 0.5,
                                        strokeColor: '#059669',
                                        strokeWeight: 3,
                                        strokeOpacity: 1.0
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling sempadan_taman feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for sempadan_taman info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'sempadan_taman') {
                                    const sempadanTaman = sempadanTamans.find((s)=>s.gid === props.gid);
                                    if (sempadanTaman) {
                                        const infoContent = `
                      <div style="padding: 8px; min-width: 200px;">
                        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Sempadan Taman ${sempadanTaman.gid}</h3>
                        ${sempadanTaman.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${sempadanTaman.id}</p>` : ''}
                        ${Object.keys(sempadanTaman).filter((key)=>![
                                                'gid',
                                                'id',
                                                'latitude',
                                                'longitude',
                                                'geom',
                                                'geom_geojson'
                                            ].includes(key) && sempadanTaman[key] !== null && sempadanTaman[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${sempadanTaman[key]}</p>`).join('')}
                        ${sempadanTaman.latitude && sempadanTaman.longitude ? `
                          <p style="margin: 4px 0; font-size: 12px; color: #666;">
                            <strong>Centroid:</strong> ${sempadanTaman.latitude.toFixed(6)}, ${sempadanTaman.longitude.toFixed(6)}
                          </p>
                        ` : ''}
                      </div>
                    `;
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: infoContent
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing sempadan_taman info window:', err);
                            }
                        });
                        // Fit bounds to show all features
                        if (addedFeatures && addedFeatures.length > 0) {
                            const bounds = new window.google.maps.LatLngBounds();
                            addedFeatures.forEach((feature)=>{
                                try {
                                    const geometry = feature.getGeometry();
                                    if (geometry) {
                                        geometry.forEachLatLng((latLng)=>{
                                            bounds.extend(latLng);
                                        });
                                    }
                                } catch (err) {
                                    console.warn('Error processing feature for bounds:', err);
                                }
                            });
                            if (!bounds.isEmpty()) {
                                console.log('Fitting bounds to show sempadan_taman features');
                                map.fitBounds(bounds);
                            }
                        }
                    }
                } catch (geoJsonError) {
                    console.error('Error adding sempadan_taman GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading sempadan_taman data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Gtnh Semasa data
    const loadGtnhSemasaData = async (map, dataLayer)=>{
        try {
            const gtnhSemasaApiUrl = 'http://43.216.228.155:3001/api/gtnh_semasa';
            console.log('Fetching gtnh_semasa data from API...', gtnhSemasaApiUrl);
            const response = await fetch(gtnhSemasaApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const gtnhSemasas = data.gtnh_semasa || [];
            console.log(`Loaded ${gtnhSemasas.length} gtnh_semasa records`);
            setGtnhSemasaData(gtnhSemasas);
            if (gtnhSemasas.length === 0) {
                console.warn('No gtnh_semasa data found');
                return;
            }
            // Clear existing gtnh_semasa features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'gtnh_semasa') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all gtnh_semasa features
            const allFeatures = [];
            // Process each gtnh_semasa record
            gtnhSemasas.forEach((gtnhSemasa, index)=>{
                try {
                    // Add geometry if available (MULTIPOLYGON for gtnh_semasa)
                    if (gtnhSemasa.geom) {
                        let geometry = gtnhSemasa.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for gtnh_semasa ${gtnhSemasa.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'gtnh_semasa',
                                gid: gtnhSemasa.gid,
                                id: gtnhSemasa.id,
                                index: index,
                                latitude: gtnhSemasa.latitude,
                                longitude: gtnhSemasa.longitude,
                                ...Object.keys(gtnhSemasa).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude',
                                        'longitude',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = gtnhSemasa[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing gtnh_semasa ${gtnhSemasa.gid}:`, err);
                }
            });
            console.log(`Total gtnh_semasa features collected: ${allFeatures.length}`);
            // Add all features to Data Layer at once
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} gtnh_semasa features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style gtnh_semasa polygons (MULTIPOLYGON) - use a distinct color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'gtnh_semasa') {
                                    return {
                                        fillColor: '#3b82f6',
                                        fillOpacity: 0.5,
                                        strokeColor: '#2563eb',
                                        strokeWeight: 3,
                                        strokeOpacity: 1.0
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling gtnh_semasa feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for gtnh_semasa info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'gtnh_semasa') {
                                    const gtnhSemasa = gtnhSemasas.find((g)=>g.gid === props.gid);
                                    if (gtnhSemasa) {
                                        const infoContent = `
                      <div style="padding: 8px; min-width: 200px;">
                        <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">GTNH Semasa ${gtnhSemasa.gid}</h3>
                        ${gtnhSemasa.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${gtnhSemasa.id}</p>` : ''}
                        ${Object.keys(gtnhSemasa).filter((key)=>![
                                                'gid',
                                                'id',
                                                'latitude',
                                                'longitude',
                                                'geom',
                                                'geom_geojson'
                                            ].includes(key) && gtnhSemasa[key] !== null && gtnhSemasa[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${gtnhSemasa[key]}</p>`).join('')}
                        ${gtnhSemasa.latitude && gtnhSemasa.longitude ? `
                          <p style="margin: 4px 0; font-size: 12px; color: #666;">
                            <strong>Centroid:</strong> ${gtnhSemasa.latitude.toFixed(6)}, ${gtnhSemasa.longitude.toFixed(6)}
                          </p>
                        ` : ''}
                      </div>
                    `;
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: infoContent
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing gtnh_semasa info window:', err);
                            }
                        });
                        // Fit bounds to show all features
                        if (addedFeatures && addedFeatures.length > 0) {
                            const bounds = new window.google.maps.LatLngBounds();
                            addedFeatures.forEach((feature)=>{
                                try {
                                    const geometry = feature.getGeometry();
                                    if (geometry) {
                                        geometry.forEachLatLng((latLng)=>{
                                            bounds.extend(latLng);
                                        });
                                    }
                                } catch (err) {
                                    console.warn('Error processing feature for bounds:', err);
                                }
                            });
                            if (!bounds.isEmpty()) {
                                console.log('Fitting bounds to show gtnh_semasa features');
                                map.fitBounds(bounds);
                            }
                        }
                    }
                } catch (geoJsonError) {
                    console.error('Error adding gtnh_semasa GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading gtnh_semasa data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Jalan data
    const loadJalanData = async (map, dataLayer)=>{
        try {
            const jalanApiUrl = 'http://43.216.228.155:3001/api/jalan';
            console.log('Fetching jalan data from API...', jalanApiUrl);
            const response = await fetch(jalanApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const jalans = data.jalan || [];
            console.log(`Loaded ${jalans.length} jalan records`);
            setJalanData(jalans);
            if (jalans.length === 0) {
                console.warn('No jalan data found');
                return;
            }
            // Clear existing jalan markers
            jalanMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            jalanMarkersRef.current = [];
            // Clear existing jalan features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'jalan') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all jalan features
            const allFeatures = [];
            // Process each jalan record
            let markersCreated = 0;
            jalans.forEach((jalan, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof jalan.latitude_s === 'string' ? parseFloat(jalan.latitude_s) : typeof jalan.latitude_s === 'number' ? jalan.latitude_s : null;
                    const lng = typeof jalan.longitude_s === 'string' ? parseFloat(jalan.longitude_s) : typeof jalan.longitude_s === 'number' ? jalan.longitude_s : null;
                    // Add marker at start point if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for jalan ${jalan.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Jalan ${jalan.gid}`,
                            icon: {
                                path: window.google.maps.SymbolPath.CIRCLE,
                                scale: 8,
                                fillColor: '#6366f1',
                                fillOpacity: 0.9,
                                strokeColor: '#FFFFFF',
                                strokeWeight: 2
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Jalan ${jalan.gid}</h3>
                  ${jalan.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${jalan.id}</p>` : ''}
                  ${Object.keys(jalan).filter((key)=>![
                                    'gid',
                                    'id',
                                    'latitude_s',
                                    'longitude_s',
                                    'latitude_e',
                                    'longitude_e',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key) && jalan[key] !== null && jalan[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${jalan[key]}</p>`).join('')}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Start:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        jalanMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Jalan ${jalan.gid} has invalid coordinates: lat=${jalan.latitude_s} (${typeof jalan.latitude_s}), lng=${jalan.longitude_s} (${typeof jalan.longitude_s})`);
                    }
                    // Add geometry if available (MULTILINESTRING for jalan)
                    if (jalan.geom) {
                        let geometry = jalan.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for jalan ${jalan.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'jalan',
                                gid: jalan.gid,
                                id: jalan.id,
                                index: index,
                                latitude_s: jalan.latitude_s,
                                longitude_s: jalan.longitude_s,
                                latitude_e: jalan.latitude_e,
                                longitude_e: jalan.longitude_e,
                                ...Object.keys(jalan).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude_s',
                                        'longitude_s',
                                        'latitude_e',
                                        'longitude_e',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = jalan[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing jalan ${jalan.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} jalan markers out of ${jalans.length} jalan records`);
            // Fit map bounds to show all jalan markers if we have any
            if (jalanMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                jalanMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show jalan markers');
                    map.fitBounds(bounds);
                }
            }
            // Add jalan features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} jalan features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style jalan lines (MULTILINESTRING) - use a distinct color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'jalan') {
                                    return {
                                        strokeColor: '#6366f1',
                                        strokeWeight: 4,
                                        strokeOpacity: 0.8
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling jalan feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for jalan info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'jalan') {
                                    const jalan = jalans.find((j)=>j.gid === props.gid);
                                    if (jalan) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Jalan ${jalan.gid}</h3>
                          ${jalan.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${jalan.id}</p>` : ''}
                          ${Object.keys(jalan).filter((key)=>![
                                                    'gid',
                                                    'id',
                                                    'latitude_s',
                                                    'longitude_s',
                                                    'latitude_e',
                                                    'longitude_e',
                                                    'geom',
                                                    'geom_geojson'
                                                ].includes(key) && jalan[key] !== null && jalan[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${jalan[key]}</p>`).join('')}
                          ${jalan.latitude_s && jalan.longitude_s ? `
                            <p style="margin: 4px 0; font-size: 12px; color: #666;">
                              <strong>Start:</strong> ${jalan.latitude_s.toFixed(6)}, ${jalan.longitude_s.toFixed(6)}
                            </p>
                          ` : ''}
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing jalan info window:', err);
                            }
                        });
                    }
                } catch (geoJsonError) {
                    console.error('Error adding jalan GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading jalan data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Jalan Kejuruteraan data
    const loadJalanKejuruteraanData = async (map, dataLayer)=>{
        try {
            const jalanKejuruteraanApiUrl = 'http://43.216.228.155:3001/api/jalan_kejuruteraan';
            console.log('Fetching jalan_kejuruteraan data from API...', jalanKejuruteraanApiUrl);
            const response = await fetch(jalanKejuruteraanApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const jalanKejuruteraans = data.jalan_kejuruteraan || [];
            console.log(`Loaded ${jalanKejuruteraans.length} jalan_kejuruteraan records`);
            setJalanKejuruteraanData(jalanKejuruteraans);
            if (jalanKejuruteraans.length === 0) {
                console.warn('No jalan_kejuruteraan data found');
                return;
            }
            // Clear existing jalan_kejuruteraan markers
            jalanKejuruteraanMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            jalanKejuruteraanMarkersRef.current = [];
            // Clear existing jalan_kejuruteraan features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'jalan_kejuruteraan') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all jalan_kejuruteraan features
            const allFeatures = [];
            // Process each jalan_kejuruteraan record
            let markersCreated = 0;
            jalanKejuruteraans.forEach((jalanKejuruteraan, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof jalanKejuruteraan.latitude_s === 'string' ? parseFloat(jalanKejuruteraan.latitude_s) : typeof jalanKejuruteraan.latitude_s === 'number' ? jalanKejuruteraan.latitude_s : null;
                    const lng = typeof jalanKejuruteraan.longitude_s === 'string' ? parseFloat(jalanKejuruteraan.longitude_s) : typeof jalanKejuruteraan.longitude_s === 'number' ? jalanKejuruteraan.longitude_s : null;
                    // Add marker at start point if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for jalan_kejuruteraan ${jalanKejuruteraan.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Jalan Kejuruteraan ${jalanKejuruteraan.gid}`,
                            icon: {
                                path: window.google.maps.SymbolPath.CIRCLE,
                                scale: 8,
                                fillColor: '#ec4899',
                                fillOpacity: 0.9,
                                strokeColor: '#FFFFFF',
                                strokeWeight: 2
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Jalan Kejuruteraan ${jalanKejuruteraan.gid}</h3>
                  ${jalanKejuruteraan.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${jalanKejuruteraan.id}</p>` : ''}
                  ${Object.keys(jalanKejuruteraan).filter((key)=>![
                                    'gid',
                                    'id',
                                    'latitude_s',
                                    'longitude_s',
                                    'latitude_e',
                                    'longitude_e',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key) && jalanKejuruteraan[key] !== null && jalanKejuruteraan[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${jalanKejuruteraan[key]}</p>`).join('')}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Start:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        jalanKejuruteraanMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Jalan Kejuruteraan ${jalanKejuruteraan.gid} has invalid coordinates: lat=${jalanKejuruteraan.latitude_s} (${typeof jalanKejuruteraan.latitude_s}), lng=${jalanKejuruteraan.longitude_s} (${typeof jalanKejuruteraan.longitude_s})`);
                    }
                    // Add geometry if available (MULTILINESTRING ZM for jalan_kejuruteraan)
                    if (jalanKejuruteraan.geom) {
                        let geometry = jalanKejuruteraan.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for jalan_kejuruteraan ${jalanKejuruteraan.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'jalan_kejuruteraan',
                                gid: jalanKejuruteraan.gid,
                                id: jalanKejuruteraan.id,
                                index: index,
                                latitude_s: jalanKejuruteraan.latitude_s,
                                longitude_s: jalanKejuruteraan.longitude_s,
                                latitude_e: jalanKejuruteraan.latitude_e,
                                longitude_e: jalanKejuruteraan.longitude_e,
                                ...Object.keys(jalanKejuruteraan).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude_s',
                                        'longitude_s',
                                        'latitude_e',
                                        'longitude_e',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = jalanKejuruteraan[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing jalan_kejuruteraan ${jalanKejuruteraan.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} jalan_kejuruteraan markers out of ${jalanKejuruteraans.length} jalan_kejuruteraan records`);
            // Fit map bounds to show all jalan_kejuruteraan markers if we have any
            if (jalanKejuruteraanMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                jalanKejuruteraanMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show jalan_kejuruteraan markers');
                    map.fitBounds(bounds);
                }
            }
            // Add jalan_kejuruteraan features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} jalan_kejuruteraan features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style jalan_kejuruteraan lines (MULTILINESTRING) - use a distinct color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'jalan_kejuruteraan') {
                                    return {
                                        strokeColor: '#ec4899',
                                        strokeWeight: 4,
                                        strokeOpacity: 0.8
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling jalan_kejuruteraan feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for jalan_kejuruteraan info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'jalan_kejuruteraan') {
                                    const jalanKejuruteraan = jalanKejuruteraans.find((j)=>j.gid === props.gid);
                                    if (jalanKejuruteraan) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Jalan Kejuruteraan ${jalanKejuruteraan.gid}</h3>
                          ${jalanKejuruteraan.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${jalanKejuruteraan.id}</p>` : ''}
                          ${Object.keys(jalanKejuruteraan).filter((key)=>![
                                                    'gid',
                                                    'id',
                                                    'latitude_s',
                                                    'longitude_s',
                                                    'latitude_e',
                                                    'longitude_e',
                                                    'geom',
                                                    'geom_geojson'
                                                ].includes(key) && jalanKejuruteraan[key] !== null && jalanKejuruteraan[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${jalanKejuruteraan[key]}</p>`).join('')}
                          ${jalanKejuruteraan.latitude_s && jalanKejuruteraan.longitude_s ? `
                            <p style="margin: 4px 0; font-size: 12px; color: #666;">
                              <strong>Start:</strong> ${jalanKejuruteraan.latitude_s.toFixed(6)}, ${jalanKejuruteraan.longitude_s.toFixed(6)}
                            </p>
                          ` : ''}
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing jalan_kejuruteraan info window:', err);
                            }
                        });
                    }
                } catch (geoJsonError) {
                    console.error('Error adding jalan_kejuruteraan GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading jalan_kejuruteraan data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Komited KM data
    const loadKomitedKmData = async (map, dataLayer)=>{
        try {
            const komitedKmApiUrl = 'http://43.216.228.155:3001/api/komited_km';
            console.log('Fetching komited_km data from API...', komitedKmApiUrl);
            const response = await fetch(komitedKmApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const komitedKms = data.komited_km || [];
            console.log(`Loaded ${komitedKms.length} komited_km records`);
            setKomitedKmData(komitedKms);
            if (komitedKms.length === 0) {
                console.warn('No komited_km data found');
                return;
            }
            // Clear existing komited_km markers
            komitedKmMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            komitedKmMarkersRef.current = [];
            // Clear existing komited_km features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'komited_km') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all komited_km features
            const allFeatures = [];
            // Process each komited_km record
            let markersCreated = 0;
            komitedKms.forEach((komitedKm, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof komitedKm.latitude === 'string' ? parseFloat(komitedKm.latitude) : typeof komitedKm.latitude === 'number' ? komitedKm.latitude : null;
                    const lng = typeof komitedKm.longitude === 'string' ? parseFloat(komitedKm.longitude) : typeof komitedKm.longitude === 'number' ? komitedKm.longitude : null;
                    // Add marker at centroid if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for komited_km ${komitedKm.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Komited KM ${komitedKm.gid}`,
                            icon: {
                                path: window.google.maps.SymbolPath.CIRCLE,
                                scale: 8,
                                fillColor: '#f59e0b',
                                fillOpacity: 0.9,
                                strokeColor: '#FFFFFF',
                                strokeWeight: 2
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Komited KM ${komitedKm.gid}</h3>
                  ${komitedKm.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${komitedKm.id}</p>` : ''}
                  ${Object.keys(komitedKm).filter((key)=>![
                                    'gid',
                                    'id',
                                    'latitude',
                                    'longitude',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key) && komitedKm[key] !== null && komitedKm[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${komitedKm[key]}</p>`).join('')}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Centroid:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        komitedKmMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Komited KM ${komitedKm.gid} has invalid coordinates: lat=${komitedKm.latitude} (${typeof komitedKm.latitude}), lng=${komitedKm.longitude} (${typeof komitedKm.longitude})`);
                    }
                    // Add geometry if available (MULTIPOLYGON for komited_km)
                    if (komitedKm.geom) {
                        let geometry = komitedKm.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for komited_km ${komitedKm.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'komited_km',
                                gid: komitedKm.gid,
                                id: komitedKm.id,
                                index: index,
                                latitude: komitedKm.latitude,
                                longitude: komitedKm.longitude,
                                ...Object.keys(komitedKm).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude',
                                        'longitude',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = komitedKm[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing komited_km ${komitedKm.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} komited_km markers out of ${komitedKms.length} komited_km records`);
            // Fit map bounds to show all komited_km markers if we have any
            if (komitedKmMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                komitedKmMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show komited_km markers');
                    map.fitBounds(bounds);
                }
            }
            // Add komited_km features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} komited_km features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style komited_km polygons (MULTIPOLYGON) - use a distinct color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'komited_km') {
                                    return {
                                        fillColor: '#f59e0b',
                                        fillOpacity: 0.6,
                                        strokeColor: '#d97706',
                                        strokeWeight: 3,
                                        strokeOpacity: 1.0
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling komited_km feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for komited_km info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'komited_km') {
                                    const komitedKm = komitedKms.find((k)=>k.gid === props.gid);
                                    if (komitedKm) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Komited KM ${komitedKm.gid}</h3>
                          ${komitedKm.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${komitedKm.id}</p>` : ''}
                          ${Object.keys(komitedKm).filter((key)=>![
                                                    'gid',
                                                    'id',
                                                    'latitude',
                                                    'longitude',
                                                    'geom',
                                                    'geom_geojson'
                                                ].includes(key) && komitedKm[key] !== null && komitedKm[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${komitedKm[key]}</p>`).join('')}
                          ${komitedKm.latitude && komitedKm.longitude ? `
                            <p style="margin: 4px 0; font-size: 12px; color: #666;">
                              <strong>Centroid:</strong> ${komitedKm.latitude.toFixed(6)}, ${komitedKm.longitude.toFixed(6)}
                            </p>
                          ` : ''}
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing komited_km info window:', err);
                            }
                        });
                        // Fit bounds to show all features
                        if (addedFeatures && addedFeatures.length > 0) {
                            const bounds = new window.google.maps.LatLngBounds();
                            addedFeatures.forEach((feature)=>{
                                try {
                                    const geometry = feature.getGeometry();
                                    if (geometry) {
                                        geometry.forEachLatLng((latLng)=>{
                                            bounds.extend(latLng);
                                        });
                                    }
                                } catch (err) {
                                    console.error('Error processing feature bounds:', err);
                                }
                            });
                            if (!bounds.isEmpty()) {
                                console.log('Fitting bounds to show komited_km features');
                                map.fitBounds(bounds);
                            }
                        }
                    }
                } catch (geoJsonError) {
                    console.error('Error adding komited_km GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading komited_km data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot NDCDB20 data
    const loadNdcdb20Data = async (map, dataLayer)=>{
        try {
            const ndcdb20ApiUrl = 'http://43.216.228.155:3001/api/ndcdb20';
            console.log('Fetching ndcdb20 data from API...', ndcdb20ApiUrl);
            const response = await fetch(ndcdb20ApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const ndcdb20s = data.ndcdb20 || [];
            console.log(`Loaded ${ndcdb20s.length} ndcdb20 records`);
            setNdcdb20Data(ndcdb20s);
            if (ndcdb20s.length === 0) {
                console.warn('No ndcdb20 data found');
                return;
            }
            // Clear existing ndcdb20 markers
            ndcdb20MarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            ndcdb20MarkersRef.current = [];
            // Clear existing ndcdb20 features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'ndcdb20') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all ndcdb20 features
            const allFeatures = [];
            // Process each ndcdb20 record
            let markersCreated = 0;
            ndcdb20s.forEach((ndcdb20, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof ndcdb20.latitude === 'string' ? parseFloat(ndcdb20.latitude) : typeof ndcdb20.latitude === 'number' ? ndcdb20.latitude : null;
                    const lng = typeof ndcdb20.longitude === 'string' ? parseFloat(ndcdb20.longitude) : typeof ndcdb20.longitude === 'number' ? ndcdb20.longitude : null;
                    // Add marker at centroid if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for ndcdb20 ${ndcdb20.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `NDCDB20 ${ndcdb20.gid}`,
                            icon: {
                                url: '/icon/ndcdb20.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">NDCDB20 ${ndcdb20.gid}</h3>
                  ${ndcdb20.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${ndcdb20.id}</p>` : ''}
                  ${Object.keys(ndcdb20).filter((key)=>![
                                    'gid',
                                    'id',
                                    'latitude',
                                    'longitude',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key) && ndcdb20[key] !== null && ndcdb20[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${ndcdb20[key]}</p>`).join('')}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Centroid:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        ndcdb20MarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`NDCDB20 ${ndcdb20.gid} has invalid coordinates: lat=${ndcdb20.latitude} (${typeof ndcdb20.latitude}), lng=${ndcdb20.longitude} (${typeof ndcdb20.longitude})`);
                    }
                    // Add geometry if available (MULTIPOLYGON for ndcdb20)
                    if (ndcdb20.geom) {
                        let geometry = ndcdb20.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for ndcdb20 ${ndcdb20.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'ndcdb20',
                                gid: ndcdb20.gid,
                                id: ndcdb20.id,
                                index: index,
                                latitude: ndcdb20.latitude,
                                longitude: ndcdb20.longitude,
                                ...Object.keys(ndcdb20).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude',
                                        'longitude',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = ndcdb20[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing ndcdb20 ${ndcdb20.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} ndcdb20 markers out of ${ndcdb20s.length} ndcdb20 records`);
            // Fit map bounds to show all ndcdb20 markers if we have any
            if (ndcdb20MarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                ndcdb20MarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show ndcdb20 markers');
                    map.fitBounds(bounds);
                }
            }
            // Add ndcdb20 features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} ndcdb20 features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style ndcdb20 polygons (MULTIPOLYGON) - use a distinct color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'ndcdb20') {
                                    return {
                                        fillColor: '#06b6d4',
                                        fillOpacity: 0.6,
                                        strokeColor: '#0891b2',
                                        strokeWeight: 3,
                                        strokeOpacity: 1.0
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling ndcdb20 feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for ndcdb20 info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'ndcdb20') {
                                    const ndcdb20 = ndcdb20s.find((n)=>n.gid === props.gid);
                                    if (ndcdb20) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">NDCDB20 ${ndcdb20.gid}</h3>
                          ${ndcdb20.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${ndcdb20.id}</p>` : ''}
                          ${Object.keys(ndcdb20).filter((key)=>![
                                                    'gid',
                                                    'id',
                                                    'latitude',
                                                    'longitude',
                                                    'geom',
                                                    'geom_geojson'
                                                ].includes(key) && ndcdb20[key] !== null && ndcdb20[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${ndcdb20[key]}</p>`).join('')}
                          ${ndcdb20.latitude && ndcdb20.longitude ? `
                            <p style="margin: 4px 0; font-size: 12px; color: #666;">
                              <strong>Centroid:</strong> ${ndcdb20.latitude.toFixed(6)}, ${ndcdb20.longitude.toFixed(6)}
                            </p>
                          ` : ''}
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing ndcdb20 info window:', err);
                            }
                        });
                        // Fit bounds to show all features
                        if (addedFeatures && addedFeatures.length > 0) {
                            const bounds = new window.google.maps.LatLngBounds();
                            addedFeatures.forEach((feature)=>{
                                try {
                                    const geometry = feature.getGeometry();
                                    if (geometry) {
                                        geometry.forEachLatLng((latLng)=>{
                                            bounds.extend(latLng);
                                        });
                                    }
                                } catch (err) {
                                    console.error('Error processing feature bounds:', err);
                                }
                            });
                            if (!bounds.isEmpty()) {
                                console.log('Fitting bounds to show ndcdb20 features');
                                map.fitBounds(bounds);
                            }
                        }
                    }
                } catch (geoJsonError) {
                    console.error('Error adding ndcdb20 GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading ndcdb20 data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot NDCDB23 data
    const loadNdcdb23Data = async (map, dataLayer)=>{
        try {
            const ndcdb23ApiUrl = 'http://43.216.228.155:3001/api/ndcdb23';
            console.log('Fetching ndcdb23 data from API...', ndcdb23ApiUrl);
            const response = await fetch(ndcdb23ApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const ndcdb23s = data.ndcdb23 || [];
            console.log(`Loaded ${ndcdb23s.length} ndcdb23 records`);
            setNdcdb23Data(ndcdb23s);
            if (ndcdb23s.length === 0) {
                console.warn('No ndcdb23 data found');
                return;
            }
            // Clear existing ndcdb23 markers
            ndcdb23MarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            ndcdb23MarkersRef.current = [];
            // Clear existing ndcdb23 features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'ndcdb23') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all ndcdb23 features
            const allFeatures = [];
            // Process each ndcdb23 record
            let markersCreated = 0;
            ndcdb23s.forEach((ndcdb23, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof ndcdb23.latitude === 'string' ? parseFloat(ndcdb23.latitude) : typeof ndcdb23.latitude === 'number' ? ndcdb23.latitude : null;
                    const lng = typeof ndcdb23.longitude === 'string' ? parseFloat(ndcdb23.longitude) : typeof ndcdb23.longitude === 'number' ? ndcdb23.longitude : null;
                    // Add marker at centroid if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for ndcdb23 ${ndcdb23.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `NDCDB23 ${ndcdb23.gid}`,
                            icon: {
                                url: '/icon/ndcdb23.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">NDCDB23 ${ndcdb23.gid}</h3>
                  ${ndcdb23.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${ndcdb23.id}</p>` : ''}
                  ${Object.keys(ndcdb23).filter((key)=>![
                                    'gid',
                                    'id',
                                    'latitude',
                                    'longitude',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key) && ndcdb23[key] !== null && ndcdb23[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${ndcdb23[key]}</p>`).join('')}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Centroid:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        ndcdb23MarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`NDCDB23 ${ndcdb23.gid} has invalid coordinates: lat=${ndcdb23.latitude} (${typeof ndcdb23.latitude}), lng=${ndcdb23.longitude} (${typeof ndcdb23.longitude})`);
                    }
                    // Add geometry if available (MULTIPOLYGON for ndcdb23)
                    if (ndcdb23.geom) {
                        let geometry = ndcdb23.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for ndcdb23 ${ndcdb23.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'ndcdb23',
                                gid: ndcdb23.gid,
                                id: ndcdb23.id,
                                index: index,
                                latitude: ndcdb23.latitude,
                                longitude: ndcdb23.longitude,
                                ...Object.keys(ndcdb23).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude',
                                        'longitude',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = ndcdb23[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing ndcdb23 ${ndcdb23.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} ndcdb23 markers out of ${ndcdb23s.length} ndcdb23 records`);
            // Fit map bounds to show all ndcdb23 markers if we have any
            if (ndcdb23MarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                ndcdb23MarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show ndcdb23 markers');
                    map.fitBounds(bounds);
                }
            }
            // Add ndcdb23 features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} ndcdb23 features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style ndcdb23 polygons (MULTIPOLYGON) - use a distinct color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'ndcdb23') {
                                    return {
                                        fillColor: '#0891b2',
                                        fillOpacity: 0.6,
                                        strokeColor: '#0e7490',
                                        strokeWeight: 3,
                                        strokeOpacity: 1.0
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling ndcdb23 feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for ndcdb23 info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'ndcdb23') {
                                    const ndcdb23 = ndcdb23s.find((n)=>n.gid === props.gid);
                                    if (ndcdb23) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">NDCDB23 ${ndcdb23.gid}</h3>
                          ${ndcdb23.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${ndcdb23.id}</p>` : ''}
                          ${Object.keys(ndcdb23).filter((key)=>![
                                                    'gid',
                                                    'id',
                                                    'latitude',
                                                    'longitude',
                                                    'geom',
                                                    'geom_geojson'
                                                ].includes(key) && ndcdb23[key] !== null && ndcdb23[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${ndcdb23[key]}</p>`).join('')}
                          ${ndcdb23.latitude && ndcdb23.longitude ? `
                            <p style="margin: 4px 0; font-size: 12px; color: #666;">
                              <strong>Centroid:</strong> ${ndcdb23.latitude.toFixed(6)}, ${ndcdb23.longitude.toFixed(6)}
                            </p>
                          ` : ''}
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing ndcdb23 info window:', err);
                            }
                        });
                        // Fit bounds to show all features
                        if (addedFeatures && addedFeatures.length > 0) {
                            const bounds = new window.google.maps.LatLngBounds();
                            addedFeatures.forEach((feature)=>{
                                try {
                                    const geometry = feature.getGeometry();
                                    if (geometry) {
                                        geometry.forEachLatLng((latLng)=>{
                                            bounds.extend(latLng);
                                        });
                                    }
                                } catch (err) {
                                    console.error('Error processing feature bounds:', err);
                                }
                            });
                            if (!bounds.isEmpty()) {
                                console.log('Fitting bounds to show ndcdb23 features');
                                map.fitBounds(bounds);
                            }
                        }
                    }
                } catch (geoJsonError) {
                    console.error('Error adding ndcdb23 GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading ndcdb23 data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Generic helper function to load pasar data
    const loadPasarData = async (map, dataLayer, apiUrl, typeName, setData, markersRef, dataArray)=>{
        try {
            console.log(`Fetching ${typeName} data from API...`, apiUrl);
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const items = data[typeName] || [];
            console.log(`Loaded ${items.length} ${typeName} records`);
            setData(items);
            if (items.length === 0) {
                console.warn(`No ${typeName} data found`);
                return;
            }
            // Clear existing markers
            markersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            markersRef.current = [];
            // Clear existing features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === typeName) {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all features
            const allFeatures = [];
            // Process each record
            let markersCreated = 0;
            items.forEach((item, index)=>{
                try {
                    // Convert latitude and longitude to numbers
                    const lat = typeof item.latitude === 'string' ? parseFloat(item.latitude) : typeof item.latitude === 'number' ? item.latitude : null;
                    const lng = typeof item.longitude === 'string' ? parseFloat(item.longitude) : typeof item.longitude === 'number' ? item.longitude : null;
                    // Add marker at centroid if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for ${typeName} ${item.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `${typeName} ${item.gid}`,
                            icon: {
                                url: '/icon/pasar.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${typeName} ${item.gid}</h3>
                  ${item.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${item.id}</p>` : ''}
                  ${Object.keys(item).filter((key)=>![
                                    'gid',
                                    'id',
                                    'latitude',
                                    'longitude',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key) && item[key] !== null && item[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${item[key]}</p>`).join('')}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Centroid:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        markersRef.current.push(marker);
                        markersCreated++;
                    }
                    // Add geometry if available (MULTIPOLYGON)
                    if (item.geom) {
                        let geometry = item.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for ${typeName} ${item.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: typeName,
                                gid: item.gid,
                                id: item.id,
                                index: index,
                                latitude: item.latitude,
                                longitude: item.longitude,
                                ...Object.keys(item).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude',
                                        'longitude',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = item[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing ${typeName} ${item.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} ${typeName} markers out of ${items.length} ${typeName} records`);
            // Fit map bounds to show all markers if we have any
            if (markersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                markersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log(`Fitting bounds to show ${typeName} markers`);
                    map.fitBounds(bounds);
                }
            }
            // Add features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} ${typeName} features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style polygons - use a distinct color for pasar
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === typeName) {
                                    return {
                                        fillColor: '#8b5cf6',
                                        fillOpacity: 0.6,
                                        strokeColor: '#7c3aed',
                                        strokeWeight: 3,
                                        strokeOpacity: 1.0
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error(`Error styling ${typeName} feature:`, err);
                                return null;
                            }
                        });
                        // Add click event listener for info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === typeName) {
                                    const item = items.find((i)=>i.gid === props.gid);
                                    if (item) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${typeName} ${item.gid}</h3>
                          ${item.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${item.id}</p>` : ''}
                          ${Object.keys(item).filter((key)=>![
                                                    'gid',
                                                    'id',
                                                    'latitude',
                                                    'longitude',
                                                    'geom',
                                                    'geom_geojson'
                                                ].includes(key) && item[key] !== null && item[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${item[key]}</p>`).join('')}
                          ${item.latitude && item.longitude ? `
                            <p style="margin: 4px 0; font-size: 12px; color: #666;">
                              <strong>Centroid:</strong> ${item.latitude.toFixed(6)}, ${item.longitude.toFixed(6)}
                            </p>
                          ` : ''}
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error(`Error showing ${typeName} info window:`, err);
                            }
                        });
                        // Fit bounds to show all features
                        if (addedFeatures && addedFeatures.length > 0) {
                            const bounds = new window.google.maps.LatLngBounds();
                            addedFeatures.forEach((feature)=>{
                                try {
                                    const geometry = feature.getGeometry();
                                    if (geometry) {
                                        geometry.forEachLatLng((latLng)=>{
                                            bounds.extend(latLng);
                                        });
                                    }
                                } catch (err) {
                                    console.error('Error processing feature bounds:', err);
                                }
                            });
                            if (!bounds.isEmpty()) {
                                console.log(`Fitting bounds to show ${typeName} features`);
                                map.fitBounds(bounds);
                            }
                        }
                    }
                } catch (geoJsonError) {
                    console.error(`Error adding ${typeName} GeoJSON to Data Layer:`, geoJsonError);
                }
            }
        } catch (err) {
            console.error(`Error loading ${typeName} data:`, err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Pasar Awam data
    const loadPasarAwamData = async (map, dataLayer)=>{
        return loadPasarData(map, dataLayer, 'http://43.216.228.155:3001/api/pasar_awam', 'pasar_awam', setPasarAwamData, pasarAwamMarkersRef, pasarAwamData);
    };
    // Function to load and plot Pasar Malam data
    const loadPasarMalamData = async (map, dataLayer)=>{
        return loadPasarData(map, dataLayer, 'http://43.216.228.155:3001/api/pasar_malam', 'pasar_malam', setPasarMalamData, pasarMalamMarkersRef, pasarMalamData);
    };
    // Function to load and plot Pasar Sari data
    const loadPasarSariData = async (map, dataLayer)=>{
        return loadPasarData(map, dataLayer, 'http://43.216.228.155:3001/api/pasar_sari', 'pasar_sari', setPasarSariData, pasarSariMarkersRef, pasarSariData);
    };
    // Function to load and plot Pasar Tani data
    const loadPasarTaniData = async (map, dataLayer)=>{
        return loadPasarData(map, dataLayer, 'http://43.216.228.155:3001/api/pasar_tani', 'pasar_tani', setPasarTaniData, pasarTaniMarkersRef, pasarTaniData);
    };
    // Function to load and plot Road Marking Linear data
    const loadRoadMarkingLinearData = async (map, dataLayer)=>{
        try {
            const roadMarkingLinearApiUrl = 'http://43.216.228.155:3001/api/road_marking_linear';
            console.log('Fetching road_marking_linear data from API...', roadMarkingLinearApiUrl);
            const response = await fetch(roadMarkingLinearApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const roadMarkingLinears = data.road_marking_linear || [];
            console.log(`Loaded ${roadMarkingLinears.length} road_marking_linear records`);
            setRoadMarkingLinearData(roadMarkingLinears);
            if (roadMarkingLinears.length === 0) {
                console.warn('No road_marking_linear data found');
                return;
            }
            // Clear existing road_marking_linear markers
            roadMarkingLinearMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            roadMarkingLinearMarkersRef.current = [];
            // Clear existing road_marking_linear features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'road_marking_linear') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all road_marking_linear features
            const allFeatures = [];
            // Process each road_marking_linear record
            let markersCreated = 0;
            roadMarkingLinears.forEach((roadMarkingLinear, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof roadMarkingLinear.latitude_s === 'string' ? parseFloat(roadMarkingLinear.latitude_s) : typeof roadMarkingLinear.latitude_s === 'number' ? roadMarkingLinear.latitude_s : null;
                    const lng = typeof roadMarkingLinear.longitude_s === 'string' ? parseFloat(roadMarkingLinear.longitude_s) : typeof roadMarkingLinear.longitude_s === 'number' ? roadMarkingLinear.longitude_s : null;
                    // Add marker at start point if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for road_marking_linear ${roadMarkingLinear.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Road Marking Linear ${roadMarkingLinear.gid}`,
                            icon: {
                                url: '/icon/road-marking.png',
                                scaledSize: new window.google.maps.Size(24, 24),
                                anchor: new window.google.maps.Point(12, 12)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Road Marking Linear ${roadMarkingLinear.gid}</h3>
                  ${roadMarkingLinear.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${roadMarkingLinear.id}</p>` : ''}
                  ${Object.keys(roadMarkingLinear).filter((key)=>![
                                    'gid',
                                    'id',
                                    'latitude_s',
                                    'longitude_s',
                                    'latitude_e',
                                    'longitude_e',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key) && roadMarkingLinear[key] !== null && roadMarkingLinear[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${roadMarkingLinear[key]}</p>`).join('')}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Start:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        roadMarkingLinearMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Road Marking Linear ${roadMarkingLinear.gid} has invalid coordinates: lat=${roadMarkingLinear.latitude_s} (${typeof roadMarkingLinear.latitude_s}), lng=${roadMarkingLinear.longitude_s} (${typeof roadMarkingLinear.longitude_s})`);
                    }
                    // Add geometry if available (MULTILINESTRING for road_marking_linear)
                    if (roadMarkingLinear.geom) {
                        let geometry = roadMarkingLinear.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for road_marking_linear ${roadMarkingLinear.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'road_marking_linear',
                                gid: roadMarkingLinear.gid,
                                id: roadMarkingLinear.id,
                                index: index,
                                latitude_s: roadMarkingLinear.latitude_s,
                                longitude_s: roadMarkingLinear.longitude_s,
                                latitude_e: roadMarkingLinear.latitude_e,
                                longitude_e: roadMarkingLinear.longitude_e,
                                ...Object.keys(roadMarkingLinear).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude_s',
                                        'longitude_s',
                                        'latitude_e',
                                        'longitude_e',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = roadMarkingLinear[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing road_marking_linear ${roadMarkingLinear.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} road_marking_linear markers out of ${roadMarkingLinears.length} road_marking_linear records`);
            // Fit map bounds to show all road_marking_linear markers if we have any
            if (roadMarkingLinearMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                roadMarkingLinearMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show road_marking_linear markers');
                    map.fitBounds(bounds);
                }
            }
            // Add road_marking_linear features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} road_marking_linear features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style road_marking_linear lines (MULTILINESTRING) - use orange color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'road_marking_linear') {
                                    return {
                                        strokeColor: '#f97316',
                                        strokeWeight: 3,
                                        strokeOpacity: 0.9
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling road_marking_linear feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for road_marking_linear info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'road_marking_linear') {
                                    const roadMarkingLinear = roadMarkingLinears.find((r)=>r.gid === props.gid);
                                    if (roadMarkingLinear) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Road Marking Linear ${roadMarkingLinear.gid}</h3>
                          ${roadMarkingLinear.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${roadMarkingLinear.id}</p>` : ''}
                          ${Object.keys(roadMarkingLinear).filter((key)=>![
                                                    'gid',
                                                    'id',
                                                    'latitude_s',
                                                    'longitude_s',
                                                    'latitude_e',
                                                    'longitude_e',
                                                    'geom',
                                                    'geom_geojson'
                                                ].includes(key) && roadMarkingLinear[key] !== null && roadMarkingLinear[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${roadMarkingLinear[key]}</p>`).join('')}
                          <p style="margin: 4px 0; font-size: 12px; color: #666;">
                            <strong>Start:</strong> ${props.latitude_s?.toFixed(6) || 'N/A'}, ${props.longitude_s?.toFixed(6) || 'N/A'}
                          </p>
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing road_marking_linear info window:', err);
                            }
                        });
                    }
                } catch (err) {
                    console.error('Error adding road_marking_linear GeoJSON to map:', err);
                }
            }
        } catch (err) {
            console.error('Error loading road_marking_linear data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Road Median data
    const loadRoadMedianData = async (map, dataLayer)=>{
        try {
            const roadMedianApiUrl = 'http://43.216.228.155:3001/api/road_median';
            console.log('Fetching road_median data from API...', roadMedianApiUrl);
            const response = await fetch(roadMedianApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const roadMedians = data.road_median || [];
            console.log(`Loaded ${roadMedians.length} road_median records`);
            setRoadMedianData(roadMedians);
            if (roadMedians.length === 0) {
                console.warn('No road_median data found');
                return;
            }
            // Clear existing road_median markers
            roadMedianMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            roadMedianMarkersRef.current = [];
            // Clear existing road_median features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'road_median') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all road_median features
            const allFeatures = [];
            // Process each road_median record
            let markersCreated = 0;
            roadMedians.forEach((roadMedian, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof roadMedian.latitude_s === 'string' ? parseFloat(roadMedian.latitude_s) : typeof roadMedian.latitude_s === 'number' ? roadMedian.latitude_s : null;
                    const lng = typeof roadMedian.longitude_s === 'string' ? parseFloat(roadMedian.longitude_s) : typeof roadMedian.longitude_s === 'number' ? roadMedian.longitude_s : null;
                    // Add marker at start point if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for road_median ${roadMedian.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Road Median ${roadMedian.gid}`,
                            icon: {
                                url: '/icon/roadmedian.webp',
                                scaledSize: new window.google.maps.Size(24, 24),
                                anchor: new window.google.maps.Point(12, 12)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Road Median ${roadMedian.gid}</h3>
                  ${roadMedian.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${roadMedian.id}</p>` : ''}
                  ${Object.keys(roadMedian).filter((key)=>![
                                    'gid',
                                    'id',
                                    'latitude_s',
                                    'longitude_s',
                                    'latitude_e',
                                    'longitude_e',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key) && roadMedian[key] !== null && roadMedian[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${roadMedian[key]}</p>`).join('')}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Start:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        roadMedianMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Road Median ${roadMedian.gid} has invalid coordinates: lat=${roadMedian.latitude_s} (${typeof roadMedian.latitude_s}), lng=${roadMedian.longitude_s} (${typeof roadMedian.longitude_s})`);
                    }
                    // Add geometry if available (MULTILINESTRING for road_median)
                    if (roadMedian.geom) {
                        let geometry = roadMedian.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for road_median ${roadMedian.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'road_median',
                                gid: roadMedian.gid,
                                id: roadMedian.id,
                                index: index,
                                latitude_s: roadMedian.latitude_s,
                                longitude_s: roadMedian.longitude_s,
                                latitude_e: roadMedian.latitude_e,
                                longitude_e: roadMedian.longitude_e,
                                ...Object.keys(roadMedian).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude_s',
                                        'longitude_s',
                                        'latitude_e',
                                        'longitude_e',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = roadMedian[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing road_median ${roadMedian.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} road_median markers out of ${roadMedians.length} road_median records`);
            // Fit map bounds to show all road_median markers if we have any
            if (roadMedianMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                roadMedianMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show road_median markers');
                    map.fitBounds(bounds);
                }
            }
            // Add road_median features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} road_median features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style road_median lines (MULTILINESTRING) - use teal color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'road_median') {
                                    return {
                                        strokeColor: '#14b8a6',
                                        strokeWeight: 3,
                                        strokeOpacity: 0.9
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling road_median feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for road_median info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'road_median') {
                                    const roadMedian = roadMedians.find((r)=>r.gid === props.gid);
                                    if (roadMedian) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Road Median ${roadMedian.gid}</h3>
                          ${roadMedian.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${roadMedian.id}</p>` : ''}
                          ${Object.keys(roadMedian).filter((key)=>![
                                                    'gid',
                                                    'id',
                                                    'latitude_s',
                                                    'longitude_s',
                                                    'latitude_e',
                                                    'longitude_e',
                                                    'geom',
                                                    'geom_geojson'
                                                ].includes(key) && roadMedian[key] !== null && roadMedian[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${roadMedian[key]}</p>`).join('')}
                          <p style="margin: 4px 0; font-size: 12px; color: #666;">
                            <strong>Start:</strong> ${props.latitude_s?.toFixed(6) || 'N/A'}, ${props.longitude_s?.toFixed(6) || 'N/A'}
                          </p>
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing road_median info window:', err);
                            }
                        });
                    }
                } catch (err) {
                    console.error('Error adding road_median GeoJSON to map:', err);
                }
            }
        } catch (err) {
            console.error('Error loading road_median data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Road Shoulder data
    const loadRoadShoulderData = async (map, dataLayer)=>{
        try {
            const roadShoulderApiUrl = 'http://43.216.228.155:3001/api/road_shoulder';
            console.log('Fetching road_shoulder data from API...', roadShoulderApiUrl);
            const response = await fetch(roadShoulderApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const roadShoulders = data.road_shoulder || [];
            console.log(`Loaded ${roadShoulders.length} road_shoulder records`);
            setRoadShoulderData(roadShoulders);
            if (roadShoulders.length === 0) {
                console.warn('No road_shoulder data found');
                return;
            }
            // Clear existing road_shoulder markers
            roadShoulderMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            roadShoulderMarkersRef.current = [];
            // Clear existing road_shoulder features from data layer
            const featuresToRemove = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'road_shoulder') {
                    featuresToRemove.push(feature);
                }
            });
            featuresToRemove.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all road_shoulder features
            const allFeatures = [];
            // Process each road_shoulder record
            let markersCreated = 0;
            roadShoulders.forEach((roadShoulder, index)=>{
                try {
                    // Convert latitude and longitude to numbers, handling string values
                    const lat = typeof roadShoulder.latitude_s === 'string' ? parseFloat(roadShoulder.latitude_s) : typeof roadShoulder.latitude_s === 'number' ? roadShoulder.latitude_s : null;
                    const lng = typeof roadShoulder.longitude_s === 'string' ? parseFloat(roadShoulder.longitude_s) : typeof roadShoulder.longitude_s === 'number' ? roadShoulder.longitude_s : null;
                    // Add marker at start point if available and valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for road_shoulder ${roadShoulder.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Road Shoulder ${roadShoulder.gid}`,
                            icon: {
                                url: '/icon/roadshoulder.png',
                                scaledSize: new window.google.maps.Size(24, 24),
                                anchor: new window.google.maps.Point(12, 12)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Road Shoulder ${roadShoulder.gid}</h3>
                  ${roadShoulder.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${roadShoulder.id}</p>` : ''}
                  ${Object.keys(roadShoulder).filter((key)=>![
                                    'gid',
                                    'id',
                                    'latitude_s',
                                    'longitude_s',
                                    'latitude_e',
                                    'longitude_e',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key) && roadShoulder[key] !== null && roadShoulder[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${roadShoulder[key]}</p>`).join('')}
                  <p style="margin: 4px 0; font-size: 12px; color: #666;">
                    <strong>Start:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                  </p>
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        roadShoulderMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        console.warn(`Road Shoulder ${roadShoulder.gid} has invalid coordinates: lat=${roadShoulder.latitude_s} (${typeof roadShoulder.latitude_s}), lng=${roadShoulder.longitude_s} (${typeof roadShoulder.longitude_s})`);
                    }
                    // Add geometry if available (MULTILINESTRING for road_shoulder)
                    if (roadShoulder.geom) {
                        let geometry = roadShoulder.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for road_shoulder ${roadShoulder.gid}:`, e);
                                return;
                            }
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'road_shoulder',
                                gid: roadShoulder.gid,
                                id: roadShoulder.id,
                                index: index,
                                latitude_s: roadShoulder.latitude_s,
                                longitude_s: roadShoulder.longitude_s,
                                latitude_e: roadShoulder.latitude_e,
                                longitude_e: roadShoulder.longitude_e,
                                ...Object.keys(roadShoulder).reduce((acc, key)=>{
                                    if (![
                                        'gid',
                                        'id',
                                        'latitude_s',
                                        'longitude_s',
                                        'latitude_e',
                                        'longitude_e',
                                        'geom',
                                        'geom_geojson'
                                    ].includes(key)) {
                                        acc[key] = roadShoulder[key];
                                    }
                                    return acc;
                                }, {})
                            }
                        });
                    }
                } catch (err) {
                    console.error(`Error processing road_shoulder ${roadShoulder.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} road_shoulder markers out of ${roadShoulders.length} road_shoulder records`);
            // Fit map bounds to show all road_shoulder markers if we have any
            if (roadShoulderMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                roadShoulderMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show road_shoulder markers');
                    map.fitBounds(bounds);
                }
            }
            // Add road_shoulder features to Data Layer
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} road_shoulder features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style road_shoulder lines (MULTILINESTRING) - use slate color
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'road_shoulder') {
                                    return {
                                        strokeColor: '#64748b',
                                        strokeWeight: 3,
                                        strokeOpacity: 0.9
                                    };
                                }
                                return null;
                            } catch (err) {
                                console.error('Error styling road_shoulder feature:', err);
                                return null;
                            }
                        });
                        // Add click event listener for road_shoulder info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'road_shoulder') {
                                    const roadShoulder = roadShoulders.find((r)=>r.gid === props.gid);
                                    if (roadShoulder) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Road Shoulder ${roadShoulder.gid}</h3>
                          ${roadShoulder.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${roadShoulder.id}</p>` : ''}
                          ${Object.keys(roadShoulder).filter((key)=>![
                                                    'gid',
                                                    'id',
                                                    'latitude_s',
                                                    'longitude_s',
                                                    'latitude_e',
                                                    'longitude_e',
                                                    'geom',
                                                    'geom_geojson'
                                                ].includes(key) && roadShoulder[key] !== null && roadShoulder[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${roadShoulder[key]}</p>`).join('')}
                          <p style="margin: 4px 0; font-size: 12px; color: #666;">
                            <strong>Start:</strong> ${props.latitude_s?.toFixed(6) || 'N/A'}, ${props.longitude_s?.toFixed(6) || 'N/A'}
                          </p>
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error showing road_shoulder info window:', err);
                            }
                        });
                    }
                } catch (err) {
                    console.error('Error adding road_shoulder GeoJSON to map:', err);
                }
            }
        } catch (err) {
            console.error('Error loading road_shoulder data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Sempadan Daerah data
    const loadSempadanDaerahData = async (map, dataLayer)=>{
        try {
            const sempadanDaerahApiUrl = 'http://43.216.228.155:3001/api/sempadan_daerah';
            const response = await fetch(sempadanDaerahApiUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            const sempadanDaerahs = data.sempadan_daerah || [];
            setSempadanDaerahData(sempadanDaerahs);
            sempadanDaerahMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) marker.setMap(null);
            });
            sempadanDaerahMarkersRef.current = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'sempadan_daerah') dataLayer.remove(feature);
            });
            const allFeatures = [];
            let markersCreated = 0;
            sempadanDaerahs.forEach((sempadanDaerah, index)=>{
                let lat = null;
                let lng = null;
                if (sempadanDaerah.latitude !== undefined && sempadanDaerah.longitude !== undefined) {
                    lat = typeof sempadanDaerah.latitude === 'string' ? parseFloat(sempadanDaerah.latitude) : typeof sempadanDaerah.latitude === 'number' ? sempadanDaerah.latitude : null;
                    lng = typeof sempadanDaerah.longitude === 'string' ? parseFloat(sempadanDaerah.longitude) : typeof sempadanDaerah.longitude === 'number' ? sempadanDaerah.longitude : null;
                } else if (sempadanDaerah.geom && sempadanDaerah.geom.type === 'MultiPolygon' && sempadanDaerah.geom.coordinates && sempadanDaerah.geom.coordinates.length > 0) {
                    const firstPolygon = sempadanDaerah.geom.coordinates[0];
                    if (firstPolygon && firstPolygon.length > 0 && firstPolygon[0] && firstPolygon[0].length > 0) {
                        lng = firstPolygon[0][0][0];
                        lat = firstPolygon[0][0][1];
                    }
                }
                if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                    const marker = new window.google.maps.Marker({
                        position: {
                            lat,
                            lng
                        },
                        map,
                        title: `Sempadan Daerah ${sempadanDaerah.gid}`,
                        icon: {
                            url: '/icon/daerah.png',
                            scaledSize: new window.google.maps.Size(24, 24),
                            anchor: new window.google.maps.Point(12, 12)
                        }
                    });
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `<div style="padding: 8px;"><h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Sempadan Daerah ${sempadanDaerah.gid}</h3>${sempadanDaerah.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${sempadanDaerah.id}</p>` : ''}${Object.keys(sempadanDaerah).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && sempadanDaerah[key] !== null && sempadanDaerah[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${sempadanDaerah[key]}</p>`).join('')}<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Center:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}</p></div>`
                    });
                    marker.addListener('click', ()=>{
                        infoWindow.open(map, marker);
                    });
                    sempadanDaerahMarkersRef.current.push(marker);
                    markersCreated++;
                }
                if (sempadanDaerah.geom) {
                    let geometry = sempadanDaerah.geom;
                    if (typeof geometry === 'string') geometry = JSON.parse(geometry);
                    allFeatures.push({
                        type: 'Feature',
                        geometry: geometry,
                        properties: {
                            type: 'sempadan_daerah',
                            gid: sempadanDaerah.gid,
                            id: sempadanDaerah.id,
                            index: index,
                            latitude: sempadanDaerah.latitude,
                            longitude: sempadanDaerah.longitude,
                            ...Object.keys(sempadanDaerah).reduce((acc, key)=>{
                                if (![
                                    'gid',
                                    'id',
                                    'latitude',
                                    'longitude',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key)) {
                                    acc[key] = sempadanDaerah[key];
                                }
                                return acc;
                            }, {})
                        }
                    });
                }
            });
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                const addedFeatures = dataLayer.addGeoJson(featureCollection);
                if (addedFeatures && addedFeatures.length > 0) {
                    dataLayer.setStyle((feature)=>{
                        const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                        if (props.type === 'sempadan_daerah') {
                            return {
                                fillColor: '#3b82f6',
                                fillOpacity: 0.3,
                                strokeColor: '#60a5fa',
                                strokeWeight: 2,
                                strokeOpacity: 0.9
                            };
                        }
                        return null;
                    });
                    dataLayer.addListener('click', (event)=>{
                        const feature = event.feature;
                        const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                        if (props.type === 'sempadan_daerah') {
                            const sempadanDaerah = sempadanDaerahs.find((s)=>s.gid === props.gid);
                            if (sempadanDaerah) {
                                const infoWindow = new window.google.maps.InfoWindow({
                                    content: `<div style="padding: 8px; min-width: 200px;"><h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Sempadan Daerah ${sempadanDaerah.gid}</h3>${sempadanDaerah.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${sempadanDaerah.id}</p>` : ''}${Object.keys(sempadanDaerah).filter((key)=>![
                                            'gid',
                                            'id',
                                            'latitude',
                                            'longitude',
                                            'geom',
                                            'geom_geojson'
                                        ].includes(key) && sempadanDaerah[key] !== null && sempadanDaerah[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${sempadanDaerah[key]}</p>`).join('')}${sempadanDaerah.latitude && sempadanDaerah.longitude ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Center:</strong> ${sempadanDaerah.latitude.toFixed(6)}, ${sempadanDaerah.longitude.toFixed(6)}</p>` : ''}</div>`
                                });
                                infoWindow.setPosition(event.latLng);
                                infoWindow.open(map);
                            }
                        }
                    });
                }
            }
        } catch (err) {
            console.error('Error loading sempadan_daerah data:', err);
        }
    };
    // Function to load and plot Sampah Haram data
    const loadSampahHaramData = async (map)=>{
        try {
            const sampahHaramApiUrl = 'http://43.216.228.155:3001/api/sampah_haram';
            console.log('Fetching sampah_haram data from API...', sampahHaramApiUrl);
            const response = await fetch(sampahHaramApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const sampahHarams = data.sampah_haram || [];
            console.log(`Loaded ${sampahHarams.length} sampah_haram records`);
            setSampahHaramData(sampahHarams);
            if (sampahHarams.length === 0) {
                console.warn('No sampah_haram data found');
                return;
            }
            // Clear existing sampah_haram markers
            sampahHaramMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            sampahHaramMarkersRef.current = [];
            // Process each sampah_haram record
            let markersCreated = 0;
            sampahHarams.forEach((sampahHaram, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (sampahHaram.latitude !== undefined && sampahHaram.longitude !== undefined) {
                        lat = typeof sampahHaram.latitude === 'string' ? parseFloat(sampahHaram.latitude) : typeof sampahHaram.latitude === 'number' ? sampahHaram.latitude : null;
                        lng = typeof sampahHaram.longitude === 'string' ? parseFloat(sampahHaram.longitude) : typeof sampahHaram.longitude === 'number' ? sampahHaram.longitude : null;
                    } else if (sampahHaram.geom && sampahHaram.geom.type === 'Point' && sampahHaram.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = sampahHaram.geom.coordinates[0];
                        lat = sampahHaram.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for sampah_haram ${sampahHaram.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Sampah Haram ${sampahHaram.gid}`,
                            icon: {
                                url: '/icon/illegaldumping.jpeg',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Sampah Haram ${sampahHaram.gid}</h3>
                ${sampahHaram.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${sampahHaram.id}</p>` : ''}
                ${Object.keys(sampahHaram).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && sampahHaram[key] !== null && sampahHaram[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${sampahHaram[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        sampahHaramMarkersRef.current.push(marker);
                        markersCreated++;
                    }
                } catch (err) {
                    console.error(`Error processing sampah_haram ${sampahHaram.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} sampah_haram markers out of ${sampahHarams.length} sampah_haram records`);
            // Fit map bounds to show all markers if we have any
            if (sampahHaramMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                sampahHaramMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show sampah_haram markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading sampah_haram data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Signboard data
    const loadSignboardData = async (map)=>{
        try {
            const signboardApiUrl = 'http://43.216.228.155:3001/api/signboard';
            console.log('Fetching signboard data from API...', signboardApiUrl);
            const response = await fetch(signboardApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const signboards = data.signboard || [];
            console.log(`Loaded ${signboards.length} signboard records`);
            setSignboardData(signboards);
            if (signboards.length === 0) {
                console.warn('No signboard data found');
                return;
            }
            // Clear existing signboard markers
            signboardMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            signboardMarkersRef.current = [];
            // Process each signboard record
            let markersCreated = 0;
            signboards.forEach((signboard, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (signboard.latitude !== undefined && signboard.longitude !== undefined) {
                        lat = typeof signboard.latitude === 'string' ? parseFloat(signboard.latitude) : typeof signboard.latitude === 'number' ? signboard.latitude : null;
                        lng = typeof signboard.longitude === 'string' ? parseFloat(signboard.longitude) : typeof signboard.longitude === 'number' ? signboard.longitude : null;
                    } else if (signboard.geom && signboard.geom.type === 'Point' && signboard.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = signboard.geom.coordinates[0];
                        lat = signboard.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for signboard ${signboard.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Signboard ${signboard.gid}`,
                            icon: {
                                url: '/icon/signboard.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Signboard ${signboard.gid}</h3>
                ${signboard.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${signboard.id}</p>` : ''}
                ${Object.keys(signboard).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && signboard[key] !== null && signboard[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${signboard[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        signboardMarkersRef.current.push(marker);
                        markersCreated++;
                    }
                } catch (err) {
                    console.error(`Error processing signboard ${signboard.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} signboard markers out of ${signboards.length} signboard records`);
            // Fit map bounds to show all markers if we have any
            if (signboardMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                signboardMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show signboard markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading signboard data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Sport Facility data
    const loadSportFacilityData = async (map)=>{
        try {
            const sportFacilityApiUrl = 'http://43.216.228.155:3001/api/sport_facility';
            console.log('Fetching sport_facility data from API...', sportFacilityApiUrl);
            const response = await fetch(sportFacilityApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const sportFacilities = data.sport_facility || [];
            console.log(`Loaded ${sportFacilities.length} sport_facility records`);
            setSportFacilityData(sportFacilities);
            if (sportFacilities.length === 0) {
                console.warn('No sport_facility data found');
                return;
            }
            // Clear existing sport_facility markers
            sportFacilityMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            sportFacilityMarkersRef.current = [];
            // Process each sport_facility record
            let markersCreated = 0;
            sportFacilities.forEach((sportFacility, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (sportFacility.latitude !== undefined && sportFacility.longitude !== undefined) {
                        lat = typeof sportFacility.latitude === 'string' ? parseFloat(sportFacility.latitude) : typeof sportFacility.latitude === 'number' ? sportFacility.latitude : null;
                        lng = typeof sportFacility.longitude === 'string' ? parseFloat(sportFacility.longitude) : typeof sportFacility.longitude === 'number' ? sportFacility.longitude : null;
                    } else if (sportFacility.geom && sportFacility.geom.type === 'Point' && sportFacility.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = sportFacility.geom.coordinates[0];
                        lat = sportFacility.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for sport_facility ${sportFacility.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Sport Facility ${sportFacility.gid}`,
                            icon: {
                                url: '/icon/sport.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Sport Facility ${sportFacility.gid}</h3>
                ${sportFacility.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${sportFacility.id}</p>` : ''}
                ${Object.keys(sportFacility).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && sportFacility[key] !== null && sportFacility[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${sportFacility[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        sportFacilityMarkersRef.current.push(marker);
                        markersCreated++;
                    }
                } catch (err) {
                    console.error(`Error processing sport_facility ${sportFacility.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} sport_facility markers out of ${sportFacilities.length} sport_facility records`);
            // Fit map bounds to show all markers if we have any
            if (sportFacilityMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                sportFacilityMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show sport_facility markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading sport_facility data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Street Lighting data
    const loadStreetLightingData = async (map)=>{
        try {
            const streetLightingApiUrl = 'http://43.216.228.155:3001/api/street_lighting';
            console.log('Fetching street_lighting data from API...', streetLightingApiUrl);
            const response = await fetch(streetLightingApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const streetLightings = data.street_lighting || [];
            console.log(`Loaded ${streetLightings.length} street_lighting records`);
            setStreetLightingData(streetLightings);
            if (streetLightings.length === 0) {
                console.warn('No street_lighting data found');
                return;
            }
            // Clear existing street_lighting markers
            streetLightingMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            streetLightingMarkersRef.current = [];
            // Process each street_lighting record
            let markersCreated = 0;
            streetLightings.forEach((streetLighting, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (streetLighting.latitude !== undefined && streetLighting.longitude !== undefined) {
                        lat = typeof streetLighting.latitude === 'string' ? parseFloat(streetLighting.latitude) : typeof streetLighting.latitude === 'number' ? streetLighting.latitude : null;
                        lng = typeof streetLighting.longitude === 'string' ? parseFloat(streetLighting.longitude) : typeof streetLighting.longitude === 'number' ? streetLighting.longitude : null;
                    } else if (streetLighting.geom && streetLighting.geom.type === 'Point' && streetLighting.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = streetLighting.geom.coordinates[0];
                        lat = streetLighting.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for street_lighting ${streetLighting.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Street Lighting ${streetLighting.gid}`,
                            icon: {
                                url: '/icon/street-light-mps.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Street Lighting ${streetLighting.gid}</h3>
                ${streetLighting.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${streetLighting.id}</p>` : ''}
                ${Object.keys(streetLighting).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && streetLighting[key] !== null && streetLighting[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${streetLighting[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        streetLightingMarkersRef.current.push(marker);
                        markersCreated++;
                    }
                } catch (err) {
                    console.error(`Error processing street_lighting ${streetLighting.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} street_lighting markers out of ${streetLightings.length} street_lighting records`);
            // Fit map bounds to show all markers if we have any
            if (streetLightingMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                streetLightingMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show street_lighting markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading street_lighting data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Loranet Streetlight data
    const loadLoranetStreetlightData = async (map)=>{
        try {
            const loranetApiUrl = 'http://43.216.228.155:3001/api/loranet/streetlight';
            console.log('Fetching Loranet streetlight data from API...', loranetApiUrl);
            const response = await fetch(loranetApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const streetlights = data.data || [];
            console.log(`Loaded ${streetlights.length} Loranet streetlight records`);
            // Log first few records for debugging coordinate format
            if (streetlights.length > 0) {
                console.log('Sample Loranet streetlight data:', JSON.stringify(streetlights.slice(0, 3), null, 2));
            }
            setLoranetStreetlightData(streetlights);
            if (streetlights.length === 0) {
                console.warn('No Loranet streetlight data found');
                return;
            }
            // Clear existing Loranet streetlight markers
            loranetStreetlightMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            loranetStreetlightMarkersRef.current = [];
            // Process each Loranet streetlight record
            let markersCreated = 0;
            streetlights.forEach((streetlight, index)=>{
                try {
                    // Use GeoJSON method to extract coordinates (same as other layers)
                    // Priority: geom (GeoJSON) > latitude/longitude fields
                    let lat = null;
                    let lng = null;
                    // First, try to extract from GeoJSON geometry (most accurate)
                    // Check both geom and geom_geojson fields
                    let geometry = streetlight.geom || streetlight.geom_geojson;
                    if (geometry) {
                        // Parse if it's a string
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for ${streetlight.device_id}:`, e);
                            }
                        }
                        // Extract coordinates from GeoJSON Point geometry
                        // GeoJSON format: [longitude, latitude] for Point coordinates
                        if (geometry && geometry.type === 'Point' && geometry.coordinates && Array.isArray(geometry.coordinates)) {
                            // GeoJSON coordinates are [longitude, latitude]
                            lng = geometry.coordinates[0];
                            lat = geometry.coordinates[1];
                        } else if (geometry && geometry.type === 'Feature' && geometry.geometry) {
                            // Handle Feature type GeoJSON
                            if (geometry.geometry.type === 'Point' && geometry.geometry.coordinates) {
                                lng = geometry.geometry.coordinates[0];
                                lat = geometry.geometry.coordinates[1];
                            }
                        }
                    }
                    // Fallback to latitude/longitude fields if GeoJSON not available
                    if (lat === null || lng === null) {
                        if (streetlight.latitude !== undefined && streetlight.longitude !== undefined) {
                            lat = typeof streetlight.latitude === 'string' ? parseFloat(streetlight.latitude) : typeof streetlight.latitude === 'number' ? streetlight.latitude : null;
                            lng = typeof streetlight.longitude === 'string' ? parseFloat(streetlight.longitude) : typeof streetlight.longitude === 'number' ? streetlight.longitude : null;
                        }
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for Loranet streetlight ${streetlight.device_id} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: streetlight.device_name || streetlight.device_id || 'Loranet Streetlight',
                            icon: {
                                url: '/icon/loranetstreetlight.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${streetlight.device_name || streetlight.device_id || 'Loranet Streetlight'}</h3>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Device ID:</strong> ${streetlight.device_id || 'N/A'}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Status:</strong> ${streetlight.device_status || 'N/A'}</p>
                <p style="margin: 4px 0; font-size: 14px;"><strong>Power:</strong> ${streetlight.status_power || 'N/A'}</p>
                ${streetlight.dim_value !== undefined ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Brightness:</strong> ${streetlight.dim_value}%</p>` : ''}
                ${streetlight.light_type ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Type:</strong> ${streetlight.light_type}</p>` : ''}
                ${streetlight.brand ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Brand:</strong> ${streetlight.brand}</p>` : ''}
                ${streetlight.model ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Model:</strong> ${streetlight.model}</p>` : ''}
                ${streetlight.power_source ? `<p style="margin: 4px 0; font-size: 12px;"><strong>Power Source:</strong> ${streetlight.power_source}</p>` : ''}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        loranetStreetlightMarkersRef.current.push(marker);
                        markersCreated++;
                    } else {
                        // Log detailed coordinate information for debugging
                        console.warn(`Loranet streetlight ${streetlight.device_id} has invalid coordinates:`, {
                            device_id: streetlight.device_id,
                            device_name: streetlight.device_name,
                            has_geom: !!streetlight.geom,
                            geom_type: streetlight.geom?.type,
                            raw_latitude: streetlight.latitude,
                            raw_longitude: streetlight.longitude,
                            parsed_lat: lat,
                            parsed_lng: lng,
                            allFields: Object.keys(streetlight)
                        });
                    }
                } catch (err) {
                    console.error(`Error processing Loranet streetlight ${streetlight.device_id}:`, err);
                }
            });
            console.log(`Created ${markersCreated} Loranet streetlight markers out of ${streetlights.length} records`);
            // Don't auto-fit bounds - keep view on Sepang area
            // Map view will remain unchanged when markers are loaded
            if (loranetStreetlightMarkersRef.current.length > 0) {
                console.log(`Loranet streetlight markers loaded. Map view remains on Sepang area.`);
            // Map view stays unchanged - user can manually zoom/pan to see markers
            }
        } catch (err) {
            console.error('Error loading Loranet streetlight data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Taman Perumahan data
    const loadTamanPerumahanData = async (map, dataLayer)=>{
        try {
            const tamanPerumahanApiUrl = 'http://43.216.228.155:3001/api/taman_perumahan';
            const response = await fetch(tamanPerumahanApiUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            const tamanPerumahans = data.taman_perumahan || [];
            setTamanPerumahanData(tamanPerumahans);
            tamanPerumahanMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) marker.setMap(null);
            });
            tamanPerumahanMarkersRef.current = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'taman_perumahan') dataLayer.remove(feature);
            });
            const allFeatures = [];
            let markersCreated = 0;
            tamanPerumahans.forEach((tamanPerumahan, index)=>{
                let lat = null;
                let lng = null;
                if (tamanPerumahan.latitude !== undefined && tamanPerumahan.longitude !== undefined) {
                    lat = typeof tamanPerumahan.latitude === 'string' ? parseFloat(tamanPerumahan.latitude) : typeof tamanPerumahan.latitude === 'number' ? tamanPerumahan.latitude : null;
                    lng = typeof tamanPerumahan.longitude === 'string' ? parseFloat(tamanPerumahan.longitude) : typeof tamanPerumahan.longitude === 'number' ? tamanPerumahan.longitude : null;
                } else if (tamanPerumahan.geom && tamanPerumahan.geom.type === 'MultiPolygon' && tamanPerumahan.geom.coordinates && tamanPerumahan.geom.coordinates.length > 0) {
                    const firstPolygon = tamanPerumahan.geom.coordinates[0];
                    if (firstPolygon && firstPolygon.length > 0 && firstPolygon[0] && firstPolygon[0].length > 0) {
                        lng = firstPolygon[0][0][0];
                        lat = firstPolygon[0][0][1];
                    }
                }
                if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                    const marker = new window.google.maps.Marker({
                        position: {
                            lat,
                            lng
                        },
                        map,
                        title: `Taman Perumahan ${tamanPerumahan.gid}`,
                        icon: {
                            url: '/icon/tamanperumahan.png',
                            scaledSize: new window.google.maps.Size(24, 24),
                            anchor: new window.google.maps.Point(12, 12)
                        }
                    });
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `<div style="padding: 8px;"><h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Taman Perumahan ${tamanPerumahan.gid}</h3>${tamanPerumahan.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${tamanPerumahan.id}</p>` : ''}${Object.keys(tamanPerumahan).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && tamanPerumahan[key] !== null && tamanPerumahan[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${tamanPerumahan[key]}</p>`).join('')}<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Center:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}</p></div>`
                    });
                    marker.addListener('click', ()=>{
                        infoWindow.open(map, marker);
                    });
                    tamanPerumahanMarkersRef.current.push(marker);
                    markersCreated++;
                }
                if (tamanPerumahan.geom) {
                    let geometry = tamanPerumahan.geom;
                    if (typeof geometry === 'string') geometry = JSON.parse(geometry);
                    allFeatures.push({
                        type: 'Feature',
                        geometry: geometry,
                        properties: {
                            type: 'taman_perumahan',
                            gid: tamanPerumahan.gid,
                            id: tamanPerumahan.id,
                            index: index,
                            latitude: tamanPerumahan.latitude,
                            longitude: tamanPerumahan.longitude,
                            ...Object.keys(tamanPerumahan).reduce((acc, key)=>{
                                if (![
                                    'gid',
                                    'id',
                                    'latitude',
                                    'longitude',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key)) {
                                    acc[key] = tamanPerumahan[key];
                                }
                                return acc;
                            }, {})
                        }
                    });
                }
            });
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                const addedFeatures = dataLayer.addGeoJson(featureCollection);
                if (addedFeatures && addedFeatures.length > 0) {
                    dataLayer.setStyle((feature)=>{
                        const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                        if (props.type === 'taman_perumahan') {
                            return {
                                fillColor: '#10b981',
                                fillOpacity: 0.3,
                                strokeColor: '#059669',
                                strokeWeight: 2,
                                strokeOpacity: 0.8
                            };
                        }
                        return null;
                    });
                    dataLayer.addListener('click', (event)=>{
                        const feature = event.feature;
                        const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                        if (props.type === 'taman_perumahan') {
                            const tamanPerumahan = tamanPerumahans.find((t)=>t.gid === props.gid);
                            if (tamanPerumahan) {
                                const infoWindow = new window.google.maps.InfoWindow({
                                    content: `<div style="padding: 8px; min-width: 200px;"><h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Taman Perumahan ${tamanPerumahan.gid}</h3>${tamanPerumahan.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${tamanPerumahan.id}</p>` : ''}${Object.keys(tamanPerumahan).filter((key)=>![
                                            'gid',
                                            'id',
                                            'latitude',
                                            'longitude',
                                            'geom',
                                            'geom_geojson'
                                        ].includes(key) && tamanPerumahan[key] !== null && tamanPerumahan[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${tamanPerumahan[key]}</p>`).join('')}${tamanPerumahan.latitude && tamanPerumahan.longitude ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Center:</strong> ${tamanPerumahan.latitude.toFixed(6)}, ${tamanPerumahan.longitude.toFixed(6)}</p>` : ''}</div>`
                                });
                                infoWindow.setPosition(event.latLng);
                                infoWindow.open(map);
                            }
                        }
                    });
                }
            }
        } catch (err) {
            console.error('Error loading taman_perumahan data:', err);
        }
    };
    // Function to load and plot Traffic Light data
    const loadTrafficLightData = async (map)=>{
        try {
            const trafficLightApiUrl = 'http://43.216.228.155:3001/api/traffic-light';
            console.log('Fetching traffic-light data from API...', trafficLightApiUrl);
            const response = await fetch(trafficLightApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const trafficLights = data.traffic_light || [];
            console.log(`Loaded ${trafficLights.length} traffic_light records`);
            setTrafficLightData(trafficLights);
            if (trafficLights.length === 0) {
                console.warn('No traffic_light data found');
                return;
            }
            // Clear existing traffic_light markers
            trafficLightMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            trafficLightMarkersRef.current = [];
            // Process each traffic_light record
            let markersCreated = 0;
            trafficLights.forEach((trafficLight, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (trafficLight.latitude !== undefined && trafficLight.longitude !== undefined) {
                        lat = typeof trafficLight.latitude === 'string' ? parseFloat(trafficLight.latitude) : typeof trafficLight.latitude === 'number' ? trafficLight.latitude : null;
                        lng = typeof trafficLight.longitude === 'string' ? parseFloat(trafficLight.longitude) : typeof trafficLight.longitude === 'number' ? trafficLight.longitude : null;
                    } else if (trafficLight.geom && trafficLight.geom.type === 'Point' && trafficLight.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = trafficLight.geom.coordinates[0];
                        lat = trafficLight.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for traffic_light ${trafficLight.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Traffic Light ${trafficLight.gid}`,
                            icon: {
                                url: '/icon/traffic-light.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Traffic Light ${trafficLight.gid}</h3>
                ${trafficLight.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${trafficLight.id}</p>` : ''}
                ${Object.keys(trafficLight).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && trafficLight[key] !== null && trafficLight[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${trafficLight[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        trafficLightMarkersRef.current.push(marker);
                        markersCreated++;
                    }
                } catch (err) {
                    console.error(`Error processing traffic_light ${trafficLight.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} traffic_light markers out of ${trafficLights.length} traffic_light records`);
            // Fit map bounds to show all markers if we have any
            if (trafficLightMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                trafficLightMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show traffic_light markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading traffic_light data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Warta Kawasan Lapang data
    const loadWartaKawasanLapangData = async (map, dataLayer)=>{
        try {
            const wartaKawasanLapangApiUrl = 'http://43.216.228.155:3001/api/warta_kawasan_lapang';
            console.log('Fetching warta_kawasan_lapang data from API...', wartaKawasanLapangApiUrl);
            const response = await fetch(wartaKawasanLapangApiUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            const wartaKawasanLapangs = data.warta_kawasan_lapang || [];
            console.log(`Loaded ${wartaKawasanLapangs.length} warta_kawasan_lapang records`);
            setWartaKawasanLapangData(wartaKawasanLapangs);
            wartaKawasanLapangMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) marker.setMap(null);
            });
            wartaKawasanLapangMarkersRef.current = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'warta_kawasan_lapang') dataLayer.remove(feature);
            });
            const allFeatures = [];
            let markersCreated = 0;
            wartaKawasanLapangs.forEach((wartaKawasanLapang, index)=>{
                let lat = null;
                let lng = null;
                if (wartaKawasanLapang.latitude !== undefined && wartaKawasanLapang.longitude !== undefined) {
                    lat = typeof wartaKawasanLapang.latitude === 'string' ? parseFloat(wartaKawasanLapang.latitude) : typeof wartaKawasanLapang.latitude === 'number' ? wartaKawasanLapang.latitude : null;
                    lng = typeof wartaKawasanLapang.longitude === 'string' ? parseFloat(wartaKawasanLapang.longitude) : typeof wartaKawasanLapang.longitude === 'number' ? wartaKawasanLapang.longitude : null;
                } else if (wartaKawasanLapang.geom && wartaKawasanLapang.geom.type === 'MultiPolygon' && wartaKawasanLapang.geom.coordinates && wartaKawasanLapang.geom.coordinates.length > 0) {
                    const firstPolygon = wartaKawasanLapang.geom.coordinates[0];
                    if (firstPolygon && firstPolygon.length > 0 && firstPolygon[0] && firstPolygon[0].length > 0) {
                        lng = firstPolygon[0][0][0];
                        lat = firstPolygon[0][0][1];
                    }
                }
                if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                    const marker = new window.google.maps.Marker({
                        position: {
                            lat,
                            lng
                        },
                        map,
                        title: `Warta Kawasan Lapang ${wartaKawasanLapang.gid}`,
                        icon: {
                            url: '/icon/land.png',
                            scaledSize: new window.google.maps.Size(24, 24),
                            anchor: new window.google.maps.Point(12, 12)
                        }
                    });
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `<div style="padding: 8px;"><h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Warta Kawasan Lapang ${wartaKawasanLapang.gid}</h3>${wartaKawasanLapang.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${wartaKawasanLapang.id}</p>` : ''}${Object.keys(wartaKawasanLapang).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && wartaKawasanLapang[key] !== null && wartaKawasanLapang[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${wartaKawasanLapang[key]}</p>`).join('')}<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Center:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}</p></div>`
                    });
                    marker.addListener('click', ()=>{
                        infoWindow.open(map, marker);
                    });
                    wartaKawasanLapangMarkersRef.current.push(marker);
                    markersCreated++;
                }
                if (wartaKawasanLapang.geom) {
                    let geometry = wartaKawasanLapang.geom;
                    if (typeof geometry === 'string') geometry = JSON.parse(geometry);
                    allFeatures.push({
                        type: 'Feature',
                        geometry: geometry,
                        properties: {
                            type: 'warta_kawasan_lapang',
                            gid: wartaKawasanLapang.gid,
                            id: wartaKawasanLapang.id,
                            index: index,
                            latitude: wartaKawasanLapang.latitude,
                            longitude: wartaKawasanLapang.longitude,
                            ...Object.keys(wartaKawasanLapang).reduce((acc, key)=>{
                                if (![
                                    'gid',
                                    'id',
                                    'latitude',
                                    'longitude',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key)) {
                                    acc[key] = wartaKawasanLapang[key];
                                }
                                return acc;
                            }, {})
                        }
                    });
                }
            });
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                const addedFeatures = dataLayer.addGeoJson(featureCollection);
                if (addedFeatures && addedFeatures.length > 0) {
                    dataLayer.setStyle((feature)=>{
                        const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                        if (props.type === 'warta_kawasan_lapang') {
                            return {
                                fillColor: '#84cc16',
                                fillOpacity: 0.3,
                                strokeColor: '#65a30d',
                                strokeWeight: 2,
                                strokeOpacity: 0.8
                            };
                        }
                        return null;
                    });
                    dataLayer.addListener('click', (event)=>{
                        const feature = event.feature;
                        const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                        if (props.type === 'warta_kawasan_lapang') {
                            const wartaKawasanLapang = wartaKawasanLapangs.find((w)=>w.gid === props.gid);
                            if (wartaKawasanLapang) {
                                const infoWindow = new window.google.maps.InfoWindow({
                                    content: `<div style="padding: 8px; min-width: 200px;"><h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Warta Kawasan Lapang ${wartaKawasanLapang.gid}</h3>${wartaKawasanLapang.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${wartaKawasanLapang.id}</p>` : ''}${Object.keys(wartaKawasanLapang).filter((key)=>![
                                            'gid',
                                            'id',
                                            'latitude',
                                            'longitude',
                                            'geom',
                                            'geom_geojson'
                                        ].includes(key) && wartaKawasanLapang[key] !== null && wartaKawasanLapang[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${wartaKawasanLapang[key]}</p>`).join('')}${wartaKawasanLapang.latitude && wartaKawasanLapang.longitude ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Center:</strong> ${wartaKawasanLapang.latitude.toFixed(6)}, ${wartaKawasanLapang.longitude.toFixed(6)}</p>` : ''}</div>`
                                });
                                infoWindow.setPosition(event.latLng);
                                infoWindow.open(map);
                            }
                        }
                    });
                }
            }
            console.log(`Created ${markersCreated} warta_kawasan_lapang markers out of ${wartaKawasanLapangs.length} records`);
        } catch (err) {
            console.error('Error loading warta_kawasan_lapang data:', err);
        }
    };
    // Function to load and plot Zon Ahli Majlis data
    const loadZonAhliMajlisData = async (map, dataLayer)=>{
        try {
            const zonAhliMajlisApiUrl = 'http://43.216.228.155:3001/api/zon_ahli_majlis';
            console.log('Fetching zon_ahli_majlis data from API...', zonAhliMajlisApiUrl);
            const response = await fetch(zonAhliMajlisApiUrl);
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            const zonAhliMajlises = data.zon_ahli_majlis || [];
            console.log(`Loaded ${zonAhliMajlises.length} zon_ahli_majlis records`);
            setZonAhliMajlisData(zonAhliMajlises);
            zonAhliMajlisMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) marker.setMap(null);
            });
            zonAhliMajlisMarkersRef.current = [];
            dataLayer.forEach((feature)=>{
                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                if (props.type === 'zon_ahli_majlis') dataLayer.remove(feature);
            });
            const allFeatures = [];
            let markersCreated = 0;
            zonAhliMajlises.forEach((zonAhliMajlis, index)=>{
                let lat = null;
                let lng = null;
                if (zonAhliMajlis.latitude !== undefined && zonAhliMajlis.longitude !== undefined) {
                    lat = typeof zonAhliMajlis.latitude === 'string' ? parseFloat(zonAhliMajlis.latitude) : typeof zonAhliMajlis.latitude === 'number' ? zonAhliMajlis.latitude : null;
                    lng = typeof zonAhliMajlis.longitude === 'string' ? parseFloat(zonAhliMajlis.longitude) : typeof zonAhliMajlis.longitude === 'number' ? zonAhliMajlis.longitude : null;
                } else if (zonAhliMajlis.geom && zonAhliMajlis.geom.type === 'MultiPolygon' && zonAhliMajlis.geom.coordinates && zonAhliMajlis.geom.coordinates.length > 0) {
                    const firstPolygon = zonAhliMajlis.geom.coordinates[0];
                    if (firstPolygon && firstPolygon.length > 0 && firstPolygon[0] && firstPolygon[0].length > 0) {
                        lng = firstPolygon[0][0][0];
                        lat = firstPolygon[0][0][1];
                    }
                }
                if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                    const marker = new window.google.maps.Marker({
                        position: {
                            lat,
                            lng
                        },
                        map,
                        title: `Zon Ahli Majlis ${zonAhliMajlis.gid}`,
                        icon: {
                            url: '/icon/zoning.png',
                            scaledSize: new window.google.maps.Size(24, 24),
                            anchor: new window.google.maps.Point(12, 12)
                        }
                    });
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: `<div style="padding: 8px;"><h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Zon Ahli Majlis ${zonAhliMajlis.gid}</h3>${zonAhliMajlis.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${zonAhliMajlis.id}</p>` : ''}${Object.keys(zonAhliMajlis).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && zonAhliMajlis[key] !== null && zonAhliMajlis[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${zonAhliMajlis[key]}</p>`).join('')}<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Center:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}</p></div>`
                    });
                    marker.addListener('click', ()=>{
                        infoWindow.open(map, marker);
                    });
                    zonAhliMajlisMarkersRef.current.push(marker);
                    markersCreated++;
                }
                if (zonAhliMajlis.geom) {
                    let geometry = zonAhliMajlis.geom;
                    if (typeof geometry === 'string') geometry = JSON.parse(geometry);
                    allFeatures.push({
                        type: 'Feature',
                        geometry: geometry,
                        properties: {
                            type: 'zon_ahli_majlis',
                            gid: zonAhliMajlis.gid,
                            id: zonAhliMajlis.id,
                            index: index,
                            latitude: zonAhliMajlis.latitude,
                            longitude: zonAhliMajlis.longitude,
                            ...Object.keys(zonAhliMajlis).reduce((acc, key)=>{
                                if (![
                                    'gid',
                                    'id',
                                    'latitude',
                                    'longitude',
                                    'geom',
                                    'geom_geojson'
                                ].includes(key)) {
                                    acc[key] = zonAhliMajlis[key];
                                }
                                return acc;
                            }, {})
                        }
                    });
                }
            });
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                const addedFeatures = dataLayer.addGeoJson(featureCollection);
                if (addedFeatures && addedFeatures.length > 0) {
                    dataLayer.setStyle((feature)=>{
                        const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                        if (props.type === 'zon_ahli_majlis') {
                            return {
                                fillColor: '#8b5cf6',
                                fillOpacity: 0.3,
                                strokeColor: '#7c3aed',
                                strokeWeight: 2,
                                strokeOpacity: 0.8
                            };
                        }
                        return null;
                    });
                    dataLayer.addListener('click', (event)=>{
                        const feature = event.feature;
                        const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                        if (props.type === 'zon_ahli_majlis') {
                            const zonAhliMajlis = zonAhliMajlises.find((z)=>z.gid === props.gid);
                            if (zonAhliMajlis) {
                                const infoWindow = new window.google.maps.InfoWindow({
                                    content: `<div style="padding: 8px; min-width: 200px;"><h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Zon Ahli Majlis ${zonAhliMajlis.gid}</h3>${zonAhliMajlis.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${zonAhliMajlis.id}</p>` : ''}${Object.keys(zonAhliMajlis).filter((key)=>![
                                            'gid',
                                            'id',
                                            'latitude',
                                            'longitude',
                                            'geom',
                                            'geom_geojson'
                                        ].includes(key) && zonAhliMajlis[key] !== null && zonAhliMajlis[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${zonAhliMajlis[key]}</p>`).join('')}${zonAhliMajlis.latitude && zonAhliMajlis.longitude ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Center:</strong> ${zonAhliMajlis.latitude.toFixed(6)}, ${zonAhliMajlis.longitude.toFixed(6)}</p>` : ''}</div>`
                                });
                                infoWindow.setPosition(event.latLng);
                                infoWindow.open(map);
                            }
                        }
                    });
                }
            }
            console.log(`Created ${markersCreated} zon_ahli_majlis markers out of ${zonAhliMajlises.length} records`);
        } catch (err) {
            console.error('Error loading zon_ahli_majlis data:', err);
        }
    };
    // Function to load and plot Road Marking Point data
    const loadRoadMarkingPointData = async (map)=>{
        try {
            const roadMarkingPointApiUrl = 'http://43.216.228.155:3001/api/road_marking_point';
            console.log('Fetching road_marking_point data from API...', roadMarkingPointApiUrl);
            const response = await fetch(roadMarkingPointApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const roadMarkingPoints = data.road_marking_point || [];
            console.log(`Loaded ${roadMarkingPoints.length} road_marking_point records`);
            setRoadMarkingPointData(roadMarkingPoints);
            if (roadMarkingPoints.length === 0) {
                console.warn('No road_marking_point data found');
                return;
            }
            // Clear existing road_marking_point markers
            roadMarkingPointMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            roadMarkingPointMarkersRef.current = [];
            // Process each road_marking_point record
            let markersCreated = 0;
            roadMarkingPoints.forEach((roadMarkingPoint, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (roadMarkingPoint.latitude !== undefined && roadMarkingPoint.longitude !== undefined) {
                        lat = typeof roadMarkingPoint.latitude === 'string' ? parseFloat(roadMarkingPoint.latitude) : typeof roadMarkingPoint.latitude === 'number' ? roadMarkingPoint.latitude : null;
                        lng = typeof roadMarkingPoint.longitude === 'string' ? parseFloat(roadMarkingPoint.longitude) : typeof roadMarkingPoint.longitude === 'number' ? roadMarkingPoint.longitude : null;
                    } else if (roadMarkingPoint.geom && roadMarkingPoint.geom.type === 'Point' && roadMarkingPoint.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = roadMarkingPoint.geom.coordinates[0];
                        lat = roadMarkingPoint.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for road_marking_point ${roadMarkingPoint.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Road Marking Point ${roadMarkingPoint.gid}`,
                            icon: {
                                url: '/icon/road-marking-point.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Road Marking Point ${roadMarkingPoint.gid}</h3>
                ${roadMarkingPoint.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${roadMarkingPoint.id}</p>` : ''}
                ${Object.keys(roadMarkingPoint).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && roadMarkingPoint[key] !== null && roadMarkingPoint[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${roadMarkingPoint[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        roadMarkingPointMarkersRef.current.push(marker);
                        markersCreated++;
                    }
                } catch (err) {
                    console.error(`Error processing road_marking_point ${roadMarkingPoint.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} road_marking_point markers out of ${roadMarkingPoints.length} road_marking_point records`);
            // Fit map bounds to show all markers if we have any
            if (roadMarkingPointMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                roadMarkingPointMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show road_marking_point markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading road_marking_point data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    // Function to load and plot Road Hump data
    const loadRoadHumpData = async (map)=>{
        try {
            const roadHumpApiUrl = 'http://43.216.228.155:3001/api/road_hump';
            console.log('Fetching road_hump data from API...', roadHumpApiUrl);
            const response = await fetch(roadHumpApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const roadHumps = data.road_hump || [];
            console.log(`Loaded ${roadHumps.length} road_hump records`);
            setRoadHumpData(roadHumps);
            if (roadHumps.length === 0) {
                console.warn('No road_hump data found');
                return;
            }
            // Clear existing road_hump markers
            roadHumpMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            roadHumpMarkersRef.current = [];
            // Process each road_hump record
            let markersCreated = 0;
            roadHumps.forEach((roadHump, index)=>{
                try {
                    // Get latitude and longitude from API response
                    // Priority: latitude/longitude fields > geom extraction
                    let lat = null;
                    let lng = null;
                    if (roadHump.latitude !== undefined && roadHump.longitude !== undefined) {
                        lat = typeof roadHump.latitude === 'string' ? parseFloat(roadHump.latitude) : typeof roadHump.latitude === 'number' ? roadHump.latitude : null;
                        lng = typeof roadHump.longitude === 'string' ? parseFloat(roadHump.longitude) : typeof roadHump.longitude === 'number' ? roadHump.longitude : null;
                    } else if (roadHump.geom && roadHump.geom.type === 'Point' && roadHump.geom.coordinates) {
                        // Extract from GeoJSON Point geometry [longitude, latitude]
                        lng = roadHump.geom.coordinates[0];
                        lat = roadHump.geom.coordinates[1];
                    }
                    // Add marker if coordinates are valid
                    if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        console.log(`Creating marker for road_hump ${roadHump.gid} at ${lat}, ${lng}`);
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: `Road Hump ${roadHump.gid}`,
                            icon: {
                                url: '/icon/roadhump.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        // Build info window content with available fields
                        const infoContent = `
              <div style="padding: 8px; min-width: 200px;">
                <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">Road Hump ${roadHump.gid}</h3>
                ${roadHump.id ? `<p style="margin: 4px 0; font-size: 14px;"><strong>ID:</strong> ${roadHump.id}</p>` : ''}
                ${Object.keys(roadHump).filter((key)=>![
                                'gid',
                                'id',
                                'latitude',
                                'longitude',
                                'geom',
                                'geom_geojson'
                            ].includes(key) && roadHump[key] !== null && roadHump[key] !== undefined).slice(0, 5).map((key)=>`<p style="margin: 4px 0; font-size: 12px;"><strong>${key}:</strong> ${roadHump[key]}</p>`).join('')}
                <p style="margin: 4px 0; font-size: 12px; color: #666;">
                  <strong>Coordinates:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}
                </p>
              </div>
            `;
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: infoContent
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        roadHumpMarkersRef.current.push(marker);
                        markersCreated++;
                    }
                } catch (err) {
                    console.error(`Error processing road_hump ${roadHump.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} road_hump markers out of ${roadHumps.length} road_hump records`);
            // Fit map bounds to show all markers if we have any
            if (roadHumpMarkersRef.current.length > 0) {
                const bounds = new window.google.maps.LatLngBounds();
                roadHumpMarkersRef.current.forEach((marker)=>{
                    if (marker && marker.getPosition) {
                        bounds.extend(marker.getPosition());
                    }
                });
                if (!bounds.isEmpty()) {
                    console.log('Fitting bounds to show road_hump markers');
                    map.fitBounds(bounds);
                }
            }
        } catch (err) {
            console.error('Error loading road_hump data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    const loadEarthWorkData = async (map, dataLayer)=>{
        try {
            const earthWorkApiUrl = 'http://43.216.228.155:3001/api/earth_work';
            console.log('Fetching earth_work data from API...', earthWorkApiUrl);
            const response = await fetch(earthWorkApiUrl);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            const earthWorks = data.earth_work || [];
            console.log(`Loaded ${earthWorks.length} earth_work records`);
            setEarthWorkData(earthWorks);
            if (earthWorks.length === 0) {
                console.warn('No earth_work data found');
                return;
            }
            // Clear existing earth_work markers
            earthWorkMarkersRef.current.forEach((marker)=>{
                if (marker.setMap) {
                    marker.setMap(null);
                }
            });
            earthWorkMarkersRef.current = [];
            // Clear existing earth_work features from data layer
            dataLayer.forEach((feature)=>{
                dataLayer.remove(feature);
            });
            // Collect all earth_work features and create markers
            const allFeatures = [];
            let markersCreated = 0;
            earthWorks.forEach((earthWork, index)=>{
                try {
                    // Use latitude/longitude from API if available, otherwise calculate from geometry
                    let lat = earthWork.latitude || null;
                    let lng = earthWork.longitude || null;
                    if (earthWork.geom) {
                        let geometry = earthWork.geom;
                        if (typeof geometry === 'string') {
                            try {
                                geometry = JSON.parse(geometry);
                            } catch (e) {
                                console.warn(`Failed to parse geom for earth_work ${earthWork.gid}:`, e);
                                return;
                            }
                        }
                        // If lat/lng not available, calculate centroid from geometry
                        if ((lat === null || lng === null) && geometry.type === 'MultiPolygon' && geometry.coordinates) {
                            // Calculate centroid from first polygon's first ring
                            const firstPolygon = geometry.coordinates[0];
                            if (firstPolygon && firstPolygon[0] && firstPolygon[0].length > 0) {
                                const coords = firstPolygon[0];
                                let sumLat = 0;
                                let sumLng = 0;
                                let count = 0;
                                coords.forEach((coord)=>{
                                    // GeoJSON coordinates are [longitude, latitude]
                                    sumLng += coord[0];
                                    sumLat += coord[1];
                                    count++;
                                });
                                if (count > 0) {
                                    lng = sumLng / count;
                                    lat = sumLat / count;
                                }
                            }
                        } else if ((lat === null || lng === null) && geometry.type === 'Polygon' && geometry.coordinates) {
                            // Handle single Polygon
                            const firstRing = geometry.coordinates[0];
                            if (firstRing && firstRing.length > 0) {
                                let sumLat = 0;
                                let sumLng = 0;
                                let count = 0;
                                firstRing.forEach((coord)=>{
                                    sumLng += coord[0];
                                    sumLat += coord[1];
                                    count++;
                                });
                                if (count > 0) {
                                    lng = sumLng / count;
                                    lat = sumLat / count;
                                }
                            }
                        }
                        // Create marker at centroid if coordinates are valid
                        if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                            const marker = new window.google.maps.Marker({
                                position: {
                                    lat,
                                    lng
                                },
                                map,
                                title: earthWork.tetuan || earthWork.tajuk || `Earth Work ${earthWork.gid}`,
                                icon: {
                                    url: '/icon/earthwork.png',
                                    scaledSize: new window.google.maps.Size(32, 32),
                                    anchor: new window.google.maps.Point(16, 16)
                                }
                            });
                            const infoWindow = new window.google.maps.InfoWindow({
                                content: `
                  <div style="padding: 8px; min-width: 200px;">
                    <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${earthWork.tetuan || 'Earth Work'}</h3>
                    ${earthWork.lot_no ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Lot No:</strong> ${earthWork.lot_no}</p>` : ''}
                    ${earthWork.tajuk ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Tajuk:</strong> ${earthWork.tajuk}</p>` : ''}
                    ${earthWork.status ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Status:</strong> ${earthWork.status}</p>` : ''}
                    ${earthWork.keluasan ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Keluasan:</strong> ${earthWork.keluasan}</p>` : ''}
                    ${earthWork.no_fail ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>No. Fail:</strong> ${earthWork.no_fail}</p>` : ''}
                    ${lat !== null && lng !== null ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Location:</strong> ${lat.toFixed(6)}, ${lng.toFixed(6)}</p>` : ''}
                  </div>
                `
                            });
                            marker.addListener('click', ()=>{
                                infoWindow.open(map, marker);
                            });
                            earthWorkMarkersRef.current.push(marker);
                            markersCreated++;
                        }
                        allFeatures.push({
                            type: 'Feature',
                            geometry: geometry,
                            properties: {
                                type: 'earth_work',
                                gid: earthWork.gid,
                                tetuan: earthWork.tetuan,
                                lot_no: earthWork.lot_no,
                                status: earthWork.status,
                                tajuk: earthWork.tajuk,
                                index: index
                            }
                        });
                    } else if (lat !== null && lng !== null && !isNaN(lat) && !isNaN(lng) && lat !== 0 && lng !== 0) {
                        // Create marker even if no geometry (just use lat/lng)
                        const marker = new window.google.maps.Marker({
                            position: {
                                lat,
                                lng
                            },
                            map,
                            title: earthWork.tetuan || earthWork.tajuk || `Earth Work ${earthWork.gid}`,
                            icon: {
                                url: '/icon/earthwork.png',
                                scaledSize: new window.google.maps.Size(32, 32),
                                anchor: new window.google.maps.Point(16, 16)
                            }
                        });
                        const infoWindow = new window.google.maps.InfoWindow({
                            content: `
                <div style="padding: 8px; min-width: 200px;">
                  <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${earthWork.tetuan || 'Earth Work'}</h3>
                  ${earthWork.lot_no ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Lot No:</strong> ${earthWork.lot_no}</p>` : ''}
                  ${earthWork.tajuk ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Tajuk:</strong> ${earthWork.tajuk}</p>` : ''}
                  ${earthWork.status ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Status:</strong> ${earthWork.status}</p>` : ''}
                </div>
              `
                        });
                        marker.addListener('click', ()=>{
                            infoWindow.open(map, marker);
                        });
                        earthWorkMarkersRef.current.push(marker);
                        markersCreated++;
                    }
                } catch (err) {
                    console.error(`Error processing earth_work ${earthWork.gid}:`, err);
                }
            });
            console.log(`Created ${markersCreated} earth_work markers out of ${earthWorks.length} earth_work records`);
            console.log(`Total features collected: ${allFeatures.length}`);
            if (allFeatures.length > 0) {
                const featureCollection = {
                    type: 'FeatureCollection',
                    features: allFeatures
                };
                console.log('Adding GeoJSON to Data Layer...');
                console.log(`Feature collection has ${allFeatures.length} features`);
                try {
                    const addedFeatures = dataLayer.addGeoJson(featureCollection);
                    console.log(`Added ${addedFeatures?.length || 0} earth_work features to map`);
                    if (addedFeatures && addedFeatures.length > 0) {
                        // Style the polygons with orange/brown color for earth work
                        dataLayer.setStyle((feature)=>{
                            try {
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                const index = props.index || 0;
                                return {
                                    fillColor: '#d97706',
                                    fillOpacity: 0.3,
                                    strokeColor: '#d97706',
                                    strokeWeight: 2,
                                    strokeOpacity: 0.8
                                };
                            } catch (err) {
                                console.error('Error styling earth_work feature:', err);
                                return {
                                    fillColor: '#d97706',
                                    fillOpacity: 0.3,
                                    strokeColor: '#d97706',
                                    strokeWeight: 2,
                                    strokeOpacity: 0.8
                                };
                            }
                        });
                        // Add click event listener for earth_work info window
                        dataLayer.addListener('click', (event)=>{
                            try {
                                const feature = event.feature;
                                const props = feature.getProperty?.('properties') || feature.toGeoJson?.()?.properties || {};
                                if (props.type === 'earth_work') {
                                    const earthWork = earthWorks.find((ew)=>ew.gid === props.gid);
                                    if (earthWork) {
                                        const infoWindow = new window.google.maps.InfoWindow({
                                            content: `
                        <div style="padding: 8px; min-width: 200px;">
                          <h3 style="margin: 0 0 8px 0; font-size: 16px; font-weight: bold;">${earthWork.tetuan || 'Earth Work'}</h3>
                          ${earthWork.lot_no ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Lot No:</strong> ${earthWork.lot_no}</p>` : ''}
                          ${earthWork.tajuk ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Tajuk:</strong> ${earthWork.tajuk}</p>` : ''}
                          ${earthWork.status ? `<p style="margin: 4px 0; font-size: 14px;"><strong>Status:</strong> ${earthWork.status}</p>` : ''}
                          ${earthWork.keluasan ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>Keluasan:</strong> ${earthWork.keluasan}</p>` : ''}
                          ${earthWork.no_fail ? `<p style="margin: 4px 0; font-size: 12px; color: #666;"><strong>No. Fail:</strong> ${earthWork.no_fail}</p>` : ''}
                        </div>
                      `
                                        });
                                        infoWindow.setPosition(event.latLng);
                                        infoWindow.open(map);
                                    }
                                }
                            } catch (err) {
                                console.error('Error handling earth_work click:', err);
                            }
                        });
                        // Fit bounds to show all features
                        if (allFeatures.length > 0) {
                            const bounds = new window.google.maps.LatLngBounds();
                            allFeatures.forEach((feature)=>{
                                const geometry = feature.geometry;
                                if (geometry.type === 'MultiPolygon' && geometry.coordinates) {
                                    geometry.coordinates.forEach((polygon)=>{
                                        polygon.forEach((ring)=>{
                                            ring.forEach((coord)=>{
                                                bounds.extend({
                                                    lat: coord[1],
                                                    lng: coord[0]
                                                });
                                            });
                                        });
                                    });
                                } else if (geometry.type === 'Polygon' && geometry.coordinates) {
                                    geometry.coordinates.forEach((ring)=>{
                                        ring.forEach((coord)=>{
                                            bounds.extend({
                                                lat: coord[1],
                                                lng: coord[0]
                                            });
                                        });
                                    });
                                }
                            });
                            // Also include marker positions
                            earthWorkMarkersRef.current.forEach((marker)=>{
                                if (marker && marker.getPosition) {
                                    bounds.extend(marker.getPosition());
                                }
                            });
                            if (!bounds.isEmpty()) {
                                map.fitBounds(bounds);
                            }
                        }
                    }
                } catch (geoJsonError) {
                    console.error('Error adding earth_work GeoJSON to Data Layer:', geoJsonError);
                }
            }
        } catch (err) {
            console.error('Error loading earth_work data:', err);
        // Don't set error state, just log it - map should still work
        }
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            // Prevent multiple initialization attempts
            if (initAttemptedRef.current) {
                return;
            }
            const apiKey = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
            if (!apiKey || apiKey === 'your_google_maps_api_key_here') {
                const errorMsg = 'API key not configured. Please add NEXT_PUBLIC_GOOGLE_MAPS_API_KEY to .env.local';
                setError(errorMsg);
                setIsLoading(false);
                onMapError?.(errorMsg);
                return;
            }
            initAttemptedRef.current = true;
            const initMap = {
                "GoogleMap.useEffect.initMap": ()=>{
                    if (!mapRef.current || mapInstanceRef.current) {
                        console.log('Map already initialized or ref not available');
                        return;
                    }
                    if (!window.google || !window.google.maps) {
                        console.error('Google Maps API not loaded');
                        return;
                    }
                    try {
                        const center = {
                            lat: 2.7608,
                            lng: 101.7380
                        };
                        console.log('Initializing Google Map...');
                        const map = new window.google.maps.Map(mapRef.current, {
                            center,
                            zoom: 15,
                            mapTypeId: 'hybrid',
                            mapTypeControl: true,
                            streetViewControl: true,
                            fullscreenControl: true,
                            zoomControl: true,
                            disableDefaultUI: false,
                            // Control landmarks visibility
                            styles: landmarksEnabledRef.current ? [] : [
                                {
                                    featureType: 'poi',
                                    elementType: 'labels',
                                    stylers: [
                                        {
                                            visibility: 'off'
                                        }
                                    ]
                                },
                                {
                                    featureType: 'poi.business',
                                    stylers: [
                                        {
                                            visibility: 'off'
                                        }
                                    ]
                                },
                                {
                                    featureType: 'poi.attraction',
                                    stylers: [
                                        {
                                            visibility: 'off'
                                        }
                                    ]
                                },
                                {
                                    featureType: 'poi.place_of_worship',
                                    stylers: [
                                        {
                                            visibility: 'off'
                                        }
                                    ]
                                },
                                {
                                    featureType: 'poi.school',
                                    stylers: [
                                        {
                                            visibility: 'off'
                                        }
                                    ]
                                },
                                {
                                    featureType: 'poi.sports_complex',
                                    stylers: [
                                        {
                                            visibility: 'off'
                                        }
                                    ]
                                }
                            ]
                        });
                        // Zone markers
                        const zones = [
                            {
                                name: 'Zone A - Main Facility',
                                lat: 2.7618,
                                lng: 101.7370,
                                status: 'secure'
                            },
                            {
                                name: 'Zone B - Data Center',
                                lat: 2.7608,
                                lng: 101.7390,
                                status: 'secure'
                            },
                            {
                                name: 'Zone C - Perimeter',
                                lat: 2.7598,
                                lng: 101.7380,
                                status: 'alert'
                            },
                            {
                                name: 'Zone D - Parking Area',
                                lat: 2.7608,
                                lng: 101.7360,
                                status: 'secure'
                            }
                        ];
                        zones.forEach({
                            "GoogleMap.useEffect.initMap": (zone)=>{
                                new window.google.maps.Marker({
                                    position: {
                                        lat: zone.lat,
                                        lng: zone.lng
                                    },
                                    map,
                                    title: zone.name,
                                    icon: {
                                        path: window.google.maps.SymbolPath.CIRCLE,
                                        scale: 8,
                                        fillColor: zone.status === 'secure' ? '#10b981' : '#f59e0b',
                                        fillOpacity: 0.7,
                                        strokeColor: '#FFFFFF',
                                        strokeWeight: 2
                                    }
                                });
                            }
                        }["GoogleMap.useEffect.initMap"]);
                        mapInstanceRef.current = map;
                        // Initialize Data Layer for GeoJSON
                        const dataLayer = new window.google.maps.Data({
                            map
                        });
                        dataLayerRef.current = dataLayer;
                        // Initialize separate data layer for bridges
                        const bridgeDataLayer = new window.google.maps.Data({
                            map
                        });
                        bridgeDataLayerRef.current = bridgeDataLayer;
                        // Initialize separate data layer for charting_km
                        const chartingKmDataLayer = new window.google.maps.Data({
                            map
                        });
                        chartingKmDataLayerRef.current = chartingKmDataLayer;
                        // Initialize separate data layer for constructed_slope
                        const constructedSlopeDataLayer = new window.google.maps.Data({
                            map
                        });
                        constructedSlopeDataLayerRef.current = constructedSlopeDataLayer;
                        // Initialize separate data layer for drainage
                        const drainageDataLayer = new window.google.maps.Data({
                            map
                        });
                        drainageDataLayerRef.current = drainageDataLayer;
                        // Initialize separate data layer for earth_work
                        const earthWorkDataLayer = new window.google.maps.Data({
                            map
                        });
                        earthWorkDataLayerRef.current = earthWorkDataLayer;
                        // Initialize separate data layer for flexible_post
                        const flexiblePostDataLayer = new window.google.maps.Data({
                            map
                        });
                        flexiblePostDataLayerRef.current = flexiblePostDataLayer;
                        // Initialize separate data layer for gtmix
                        const gtmixDataLayer = new window.google.maps.Data({
                            map
                        });
                        gtmixDataLayerRef.current = gtmixDataLayer;
                        // Initialize separate data layer for sempadan_taman
                        const sempadanTamanDataLayer = new window.google.maps.Data({
                            map
                        });
                        sempadanTamanDataLayerRef.current = sempadanTamanDataLayer;
                        // Initialize separate data layer for gtnh_semasa
                        const gtnhSemasaDataLayer = new window.google.maps.Data({
                            map
                        });
                        gtnhSemasaDataLayerRef.current = gtnhSemasaDataLayer;
                        // Initialize separate data layer for jalan
                        const jalanDataLayer = new window.google.maps.Data({
                            map
                        });
                        jalanDataLayerRef.current = jalanDataLayer;
                        // Initialize separate data layer for jalan_kejuruteraan
                        const jalanKejuruteraanDataLayer = new window.google.maps.Data({
                            map
                        });
                        // Initialize separate data layer for road_marking_linear
                        const roadMarkingLinearDataLayer = new window.google.maps.Data({
                            map
                        });
                        roadMarkingLinearDataLayerRef.current = roadMarkingLinearDataLayer;
                        jalanKejuruteraanDataLayerRef.current = jalanKejuruteraanDataLayer;
                        // Initialize separate data layer for komited_km
                        const komitedKmDataLayer = new window.google.maps.Data({
                            map
                        });
                        komitedKmDataLayerRef.current = komitedKmDataLayer;
                        // Initialize separate data layer for ndcdb20
                        const ndcdb20DataLayer = new window.google.maps.Data({
                            map
                        });
                        ndcdb20DataLayerRef.current = ndcdb20DataLayer;
                        // Initialize separate data layer for ndcdb23
                        const ndcdb23DataLayer = new window.google.maps.Data({
                            map
                        });
                        ndcdb23DataLayerRef.current = ndcdb23DataLayer;
                        // Initialize separate data layers for pasar types
                        const pasarAwamDataLayer = new window.google.maps.Data({
                            map
                        });
                        pasarAwamDataLayerRef.current = pasarAwamDataLayer;
                        const pasarMalamDataLayer = new window.google.maps.Data({
                            map
                        });
                        pasarMalamDataLayerRef.current = pasarMalamDataLayer;
                        const pasarSariDataLayer = new window.google.maps.Data({
                            map
                        });
                        pasarSariDataLayerRef.current = pasarSariDataLayer;
                        const pasarTaniDataLayer = new window.google.maps.Data({
                            map
                        });
                        pasarTaniDataLayerRef.current = pasarTaniDataLayer;
                        // Initialize separate data layer for road_median
                        const roadMedianDataLayer = new window.google.maps.Data({
                            map
                        });
                        roadMedianDataLayerRef.current = roadMedianDataLayer;
                        // Initialize separate data layer for road_shoulder
                        const roadShoulderDataLayer = new window.google.maps.Data({
                            map
                        });
                        roadShoulderDataLayerRef.current = roadShoulderDataLayer;
                        // Initialize separate data layer for sempadan_daerah
                        const sempadanDaerahDataLayer = new window.google.maps.Data({
                            map
                        });
                        sempadanDaerahDataLayerRef.current = sempadanDaerahDataLayer;
                        // Initialize separate data layer for taman_perumahan
                        const tamanPerumahanDataLayer = new window.google.maps.Data({
                            map
                        });
                        tamanPerumahanDataLayerRef.current = tamanPerumahanDataLayer;
                        // Initialize separate data layer for warta_kawasan_lapang
                        const wartaKawasanLapangDataLayer = new window.google.maps.Data({
                            map
                        });
                        wartaKawasanLapangDataLayerRef.current = wartaKawasanLapangDataLayer;
                        // Initialize separate data layer for zon_ahli_majlis
                        const zonAhliMajlisDataLayer = new window.google.maps.Data({
                            map
                        });
                        zonAhliMajlisDataLayerRef.current = zonAhliMajlisDataLayer;
                        // Load blok_perancangan data from API if enabled
                        if (showBlokPerancangan) {
                            loadBlokPerancanganData(map, dataLayer);
                        }
                        // Load bridge data from API if enabled
                        if (showBridge) {
                            loadBridgeData(map, bridgeDataLayer);
                        }
                        // Load CCTV data from API if enabled
                        if (showCCTV) {
                            loadCCTVData(map);
                        }
                        // Load feeder_pillar data from API if enabled
                        if (showFeederPillar) {
                            loadFeederPillarData(map);
                        }
                        // Load location_map_aset data from API if enabled
                        if (showLocationMapAset) {
                            loadLocationMapAsetData(map);
                        }
                        // Load location_map_aset_item data from API if enabled
                        if (showLocationMapAsetItem) {
                            loadLocationMapAsetItemData(map);
                        }
                        // Load lokasi_banjir data from API if enabled
                        if (showLokasiBanjir) {
                            loadLokasiBanjirData(map);
                        }
                        // Load charting_km data from API if enabled
                        if (showChartingKm) {
                            loadChartingKmData(map, chartingKmDataLayer);
                        }
                        // Load constructed_slope data from API if enabled
                        if (showConstructedSlope) {
                            loadConstructedSlopeData(map, constructedSlopeDataLayer);
                        }
                        // Load drainage data from API if enabled
                        if (showDrainage) {
                            loadDrainageData(map, drainageDataLayer);
                        }
                        // Load earth_work data from API if enabled
                        if (showEarthWork) {
                            loadEarthWorkData(map, earthWorkDataLayer);
                        }
                        // Load flexible_post data from API if enabled
                        if (showFlexiblePost) {
                            loadFlexiblePostData(map, flexiblePostDataLayer);
                        }
                        // Load gtmix data from API if enabled
                        if (showGtmix) {
                            loadGtmixData(map, gtmixDataLayer);
                        }
                        // Load sempadan_taman data from API if enabled
                        if (showSempadanTaman) {
                            loadSempadanTamanData(map, sempadanTamanDataLayer);
                        }
                        // Load gtnh_semasa data from API if enabled
                        if (showGtnhSemasa) {
                            loadGtnhSemasaData(map, gtnhSemasaDataLayer);
                        }
                        // Load jalan data from API if enabled
                        if (showJalan) {
                            loadJalanData(map, jalanDataLayer);
                        }
                        // Load jalan_kejuruteraan data from API if enabled
                        if (showJalanKejuruteraan) {
                            loadJalanKejuruteraanData(map, jalanKejuruteraanDataLayer);
                        }
                        // Load komited_km data from API if enabled
                        if (showKomitedKm) {
                            loadKomitedKmData(map, komitedKmDataLayer);
                        }
                        // Load ndcdb20 data from API if enabled
                        if (showNdcdb20) {
                            loadNdcdb20Data(map, ndcdb20DataLayer);
                        }
                        // Load ndcdb23 data from API if enabled
                        if (showNdcdb23) {
                            loadNdcdb23Data(map, ndcdb23DataLayer);
                        }
                        // Load pasar data from API if enabled
                        if (showPasarAwam) {
                            loadPasarAwamData(map, pasarAwamDataLayer);
                        }
                        if (showPasarMalam) {
                            loadPasarMalamData(map, pasarMalamDataLayer);
                        }
                        if (showPasarSari) {
                            loadPasarSariData(map, pasarSariDataLayer);
                        }
                        if (showPasarTani) {
                            loadPasarTaniData(map, pasarTaniDataLayer);
                        }
                        // Load road_hump data from API if enabled
                        if (showRoadHump) {
                            loadRoadHumpData(map);
                        }
                        // Load road_marking_linear data from API if enabled
                        if (showRoadMarkingLinear && roadMarkingLinearDataLayerRef.current) {
                            loadRoadMarkingLinearData(map, roadMarkingLinearDataLayerRef.current);
                        }
                        // Load road_marking_point data from API if enabled
                        if (showRoadMarkingPoint) {
                            loadRoadMarkingPointData(map);
                        }
                        // Load road_median data from API if enabled
                        if (showRoadMedian && roadMedianDataLayerRef.current) {
                            loadRoadMedianData(map, roadMedianDataLayerRef.current);
                        }
                        // Load road_shoulder data from API if enabled
                        if (showRoadShoulder && roadShoulderDataLayerRef.current) {
                            loadRoadShoulderData(map, roadShoulderDataLayerRef.current);
                        }
                        // Load sampah_haram data from API if enabled
                        if (showSampahHaram) {
                            loadSampahHaramData(map);
                        }
                        // Load sempadan_daerah data from API if enabled
                        if (showSempadanDaerah && sempadanDaerahDataLayerRef.current) {
                            loadSempadanDaerahData(map, sempadanDaerahDataLayerRef.current);
                        }
                        // Load signboard data from API if enabled
                        if (showSignboard) {
                            loadSignboardData(map);
                        }
                        // Load sport_facility data from API if enabled
                        if (showSportFacility) {
                            loadSportFacilityData(map);
                        }
                        // Load street_lighting data from API if enabled
                        if (showStreetLighting) {
                            loadStreetLightingData(map);
                        }
                        // Load Loranet streetlight data from API if enabled
                        if (showLoranetStreetlight) {
                            loadLoranetStreetlightData(map);
                        }
                        // Load taman_perumahan data from API if enabled
                        if (showTamanPerumahan && tamanPerumahanDataLayerRef.current) {
                            loadTamanPerumahanData(map, tamanPerumahanDataLayerRef.current);
                        }
                        // Load traffic-light data from API if enabled
                        if (showTrafficLight) {
                            loadTrafficLightData(map);
                        }
                        // Load warta_kawasan_lapang data from API if enabled
                        if (showWartaKawasanLapang && wartaKawasanLapangDataLayerRef.current) {
                            loadWartaKawasanLapangData(map, wartaKawasanLapangDataLayerRef.current);
                        }
                        // Load zon_ahli_majlis data from API if enabled
                        if (showZonAhliMajlis && zonAhliMajlisDataLayerRef.current) {
                            loadZonAhliMajlisData(map, zonAhliMajlisDataLayerRef.current);
                        }
                        // Handle window resize to ensure map fills container
                        const handleResize = {
                            "GoogleMap.useEffect.initMap.handleResize": ()=>{
                                if (mapInstanceRef.current && window.google?.maps) {
                                    window.google.maps.event.trigger(mapInstanceRef.current, 'resize');
                                }
                            }
                        }["GoogleMap.useEffect.initMap.handleResize"];
                        // Store handler reference for cleanup
                        resizeHandlerRef.current = handleResize;
                        // Listen for window resize events
                        window.addEventListener('resize', handleResize);
                        // Also listen for orientation changes (mobile)
                        window.addEventListener('orientationchange', handleResize);
                        // Listen for zoom changes and trigger resize
                        window.google.maps.event.addListener(map, 'zoom_changed', {
                            "GoogleMap.useEffect.initMap": ()=>{
                                setTimeout({
                                    "GoogleMap.useEffect.initMap": ()=>{
                                        if (mapInstanceRef.current && window.google?.maps) {
                                            window.google.maps.event.trigger(mapInstanceRef.current, 'resize');
                                        }
                                    }
                                }["GoogleMap.useEffect.initMap"], 100);
                            }
                        }["GoogleMap.useEffect.initMap"]);
                        // Listen for idle event (map finished loading/rendering) and trigger resize
                        window.google.maps.event.addListener(map, 'idle', {
                            "GoogleMap.useEffect.initMap": ()=>{
                                if (mapInstanceRef.current && window.google?.maps) {
                                    window.google.maps.event.trigger(mapInstanceRef.current, 'resize');
                                }
                            }
                        }["GoogleMap.useEffect.initMap"]);
                        // Listen for bounds_changed (when panning/zooming) and trigger resize
                        window.google.maps.event.addListener(map, 'bounds_changed', {
                            "GoogleMap.useEffect.initMap": ()=>{
                                setTimeout({
                                    "GoogleMap.useEffect.initMap": ()=>{
                                        if (mapInstanceRef.current && window.google?.maps) {
                                            window.google.maps.event.trigger(mapInstanceRef.current, 'resize');
                                        }
                                    }
                                }["GoogleMap.useEffect.initMap"], 50);
                            }
                        }["GoogleMap.useEffect.initMap"]);
                        // Trigger resize after initialization to ensure map fills container
                        setTimeout({
                            "GoogleMap.useEffect.initMap": ()=>{
                                if (window.google?.maps) {
                                    window.google.maps.event.trigger(map, 'resize');
                                }
                            }
                        }["GoogleMap.useEffect.initMap"], 100);
                        // Also trigger on next frame to catch any layout changes
                        requestAnimationFrame({
                            "GoogleMap.useEffect.initMap": ()=>{
                                setTimeout({
                                    "GoogleMap.useEffect.initMap": ()=>{
                                        if (window.google?.maps && mapInstanceRef.current) {
                                            window.google.maps.event.trigger(mapInstanceRef.current, 'resize');
                                        }
                                    }
                                }["GoogleMap.useEffect.initMap"], 50);
                            }
                        }["GoogleMap.useEffect.initMap"]);
                        // Additional resize trigger after a longer delay to catch all layout changes
                        setTimeout({
                            "GoogleMap.useEffect.initMap": ()=>{
                                if (window.google?.maps && mapInstanceRef.current) {
                                    window.google.maps.event.trigger(mapInstanceRef.current, 'resize');
                                }
                            }
                        }["GoogleMap.useEffect.initMap"], 500);
                        setIsLoading(false);
                        console.log('Google Map initialized successfully');
                        onMapLoad?.();
                    } catch (err) {
                        const errorMsg = 'Failed to initialize map';
                        console.error('Map initialization error:', err);
                        setError(errorMsg);
                        setIsLoading(false);
                        onMapError?.(errorMsg);
                    }
                }
            }["GoogleMap.useEffect.initMap"];
            // Check if Google Maps is already loaded
            if (window.google && window.google.maps) {
                console.log('Google Maps already loaded, initializing...');
                // Use requestAnimationFrame to ensure DOM is ready
                requestAnimationFrame({
                    "GoogleMap.useEffect": ()=>{
                        setTimeout(initMap, 100);
                    }
                }["GoogleMap.useEffect"]);
                return;
            }
            // Check if script is already being loaded
            const existingScript = document.querySelector('script[src*="maps.googleapis.com"]');
            if (existingScript) {
                console.log('Google Maps script already exists, waiting for load...');
                if (existingScript.onload) {
                    // Script might already be loaded
                    if (window.google && window.google.maps) {
                        requestAnimationFrame({
                            "GoogleMap.useEffect": ()=>{
                                setTimeout(initMap, 100);
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    existingScript.onload = ({
                        "GoogleMap.useEffect": ()=>{
                            console.log('Existing script loaded');
                            requestAnimationFrame({
                                "GoogleMap.useEffect": ()=>{
                                    setTimeout(initMap, 100);
                                }
                            }["GoogleMap.useEffect"]);
                        }
                    })["GoogleMap.useEffect"];
                }
                return;
            }
            // Load Google Maps script
            console.log('Loading Google Maps script...');
            const script = document.createElement('script');
            script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&libraries=places`;
            script.async = true;
            script.defer = true;
            script.onload = ({
                "GoogleMap.useEffect": ()=>{
                    console.log('Google Maps script loaded successfully');
                    requestAnimationFrame({
                        "GoogleMap.useEffect": ()=>{
                            setTimeout(initMap, 100);
                        }
                    }["GoogleMap.useEffect"]);
                }
            })["GoogleMap.useEffect"];
            script.onerror = ({
                "GoogleMap.useEffect": ()=>{
                    const errorMsg = 'Failed to load Google Maps. Check your API key and internet connection.';
                    console.error('Script load error:', errorMsg);
                    setError(errorMsg);
                    setIsLoading(false);
                    onMapError?.(errorMsg);
                }
            })["GoogleMap.useEffect"];
            document.head.appendChild(script);
            // Cleanup resize listeners
            return ({
                "GoogleMap.useEffect": ()=>{
                    if (resizeHandlerRef.current) {
                        window.removeEventListener('resize', resizeHandlerRef.current);
                        window.removeEventListener('orientationchange', resizeHandlerRef.current);
                    }
                }
            })["GoogleMap.useEffect"];
        }
    }["GoogleMap.useEffect"], [
        onMapLoad,
        onMapError,
        showLandmarks
    ]);
    // Update landmarks when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                landmarksEnabledRef.current = showLandmarks;
                const styles = showLandmarks ? [] : [
                    {
                        featureType: 'poi',
                        elementType: 'labels',
                        stylers: [
                            {
                                visibility: 'off'
                            }
                        ]
                    },
                    {
                        featureType: 'poi.business',
                        stylers: [
                            {
                                visibility: 'off'
                            }
                        ]
                    },
                    {
                        featureType: 'poi.attraction',
                        stylers: [
                            {
                                visibility: 'off'
                            }
                        ]
                    },
                    {
                        featureType: 'poi.place_of_worship',
                        stylers: [
                            {
                                visibility: 'off'
                            }
                        ]
                    },
                    {
                        featureType: 'poi.school',
                        stylers: [
                            {
                                visibility: 'off'
                            }
                        ]
                    },
                    {
                        featureType: 'poi.sports_complex',
                        stylers: [
                            {
                                visibility: 'off'
                            }
                        ]
                    }
                ];
                mapInstanceRef.current.setOptions({
                    styles
                });
            }
        }
    }["GoogleMap.useEffect"], [
        showLandmarks
    ]);
    // Update blok_perancangan visibility when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && dataLayerRef.current && window.google?.maps) {
                if (showBlokPerancangan) {
                    // Load data if not already loaded
                    if (blokData.length === 0) {
                        loadBlokPerancanganData(mapInstanceRef.current, dataLayerRef.current);
                    } else {
                        // Show existing data
                        dataLayerRef.current.setMap(mapInstanceRef.current);
                        polygonsRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    dataLayerRef.current.setMap(null);
                    polygonsRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showBlokPerancangan,
        blokData
    ]);
    // Update bridge visibility when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && bridgeDataLayerRef.current && window.google?.maps) {
                if (showBridge) {
                    // Load data if not already loaded
                    if (bridgeData.length === 0) {
                        loadBridgeData(mapInstanceRef.current, bridgeDataLayerRef.current);
                    } else {
                        // Show existing data
                        bridgeDataLayerRef.current.setMap(mapInstanceRef.current);
                        bridgeMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    bridgeDataLayerRef.current.setMap(null);
                    bridgeMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showBridge,
        bridgeData
    ]);
    // Update CCTV visibility when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showCCTV) {
                    // Load data if not already loaded
                    if (cctvData.length === 0) {
                        loadCCTVData(mapInstanceRef.current);
                    } else {
                        // Show existing markers
                        cctvMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide markers
                    cctvMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showCCTV,
        cctvData
    ]);
    // Update feeder_pillar visibility when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showFeederPillar) {
                    // Load data if not already loaded
                    if (feederPillarData.length === 0) {
                        loadFeederPillarData(mapInstanceRef.current);
                    } else {
                        // Show existing markers
                        feederPillarMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide markers
                    feederPillarMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showFeederPillar,
        feederPillarData
    ]);
    // Toggle location_map_aset visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showLocationMapAset) {
                    // Load data if not already loaded
                    if (locationMapAsetData.length === 0) {
                        loadLocationMapAsetData(mapInstanceRef.current);
                    } else {
                        // Show existing markers
                        locationMapAsetMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide markers
                    locationMapAsetMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showLocationMapAset,
        locationMapAsetData
    ]);
    // Toggle location_map_aset_item visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showLocationMapAsetItem) {
                    // Load data if not already loaded
                    if (locationMapAsetItemData.length === 0) {
                        loadLocationMapAsetItemData(mapInstanceRef.current);
                    } else {
                        // Show existing markers
                        locationMapAsetItemMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide markers
                    locationMapAsetItemMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showLocationMapAsetItem,
        locationMapAsetItemData
    ]);
    // Toggle lokasi_banjir visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showLokasiBanjir) {
                    // Load data if not already loaded
                    if (lokasiBanjirData.length === 0) {
                        loadLokasiBanjirData(mapInstanceRef.current);
                    } else {
                        // Show existing markers
                        lokasiBanjirMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide markers
                    lokasiBanjirMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showLokasiBanjir,
        lokasiBanjirData
    ]);
    // Update charting_km visibility when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && chartingKmDataLayerRef.current && window.google?.maps) {
                if (showChartingKm) {
                    // Load data if not already loaded
                    if (chartingKmData.length === 0) {
                        loadChartingKmData(mapInstanceRef.current, chartingKmDataLayerRef.current);
                    } else {
                        // Show existing data
                        chartingKmDataLayerRef.current.setMap(mapInstanceRef.current);
                        chartingKmMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    chartingKmDataLayerRef.current.setMap(null);
                    chartingKmMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showChartingKm,
        chartingKmData
    ]);
    // Update constructed_slope visibility when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && constructedSlopeDataLayerRef.current && window.google?.maps) {
                if (showConstructedSlope) {
                    // Load data if not already loaded
                    if (constructedSlopeData.length === 0) {
                        loadConstructedSlopeData(mapInstanceRef.current, constructedSlopeDataLayerRef.current);
                    } else {
                        // Show existing data
                        constructedSlopeDataLayerRef.current.setMap(mapInstanceRef.current);
                        constructedSlopeMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    constructedSlopeDataLayerRef.current.setMap(null);
                    constructedSlopeMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showConstructedSlope,
        constructedSlopeData
    ]);
    // Update drainage visibility when prop changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && drainageDataLayerRef.current && window.google?.maps) {
                if (showDrainage) {
                    // Load data if not already loaded
                    if (drainageData.length === 0) {
                        loadDrainageData(mapInstanceRef.current, drainageDataLayerRef.current);
                    } else {
                        // Show existing data
                        drainageDataLayerRef.current.setMap(mapInstanceRef.current);
                        drainageMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    drainageDataLayerRef.current.setMap(null);
                    drainageMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showDrainage,
        drainageData
    ]);
    // Toggle earth_work visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && earthWorkDataLayerRef.current && window.google?.maps) {
                if (showEarthWork) {
                    // Load data if not already loaded
                    if (earthWorkData.length === 0) {
                        loadEarthWorkData(mapInstanceRef.current, earthWorkDataLayerRef.current);
                    } else {
                        // Show existing data
                        earthWorkDataLayerRef.current.setMap(mapInstanceRef.current);
                        earthWorkMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    earthWorkDataLayerRef.current.setMap(null);
                    earthWorkMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showEarthWork,
        earthWorkData
    ]);
    // Toggle flexible_post visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && flexiblePostDataLayerRef.current && window.google?.maps) {
                if (showFlexiblePost) {
                    // Load data if not already loaded
                    if (flexiblePostData.length === 0) {
                        loadFlexiblePostData(mapInstanceRef.current, flexiblePostDataLayerRef.current);
                    } else {
                        // Show existing data
                        flexiblePostDataLayerRef.current.setMap(mapInstanceRef.current);
                        flexiblePostMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    flexiblePostDataLayerRef.current.setMap(null);
                    flexiblePostMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showFlexiblePost,
        flexiblePostData
    ]);
    // Toggle gtmix visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && gtmixDataLayerRef.current && window.google?.maps) {
                if (showGtmix) {
                    // Load data if not already loaded
                    if (gtmixData.length === 0) {
                        loadGtmixData(mapInstanceRef.current, gtmixDataLayerRef.current);
                    } else {
                        // Show existing data
                        gtmixDataLayerRef.current.setMap(mapInstanceRef.current);
                    }
                } else {
                    // Hide data
                    gtmixDataLayerRef.current.setMap(null);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showGtmix,
        gtmixData
    ]);
    // Toggle sempadan_taman visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && sempadanTamanDataLayerRef.current && window.google?.maps) {
                if (showSempadanTaman) {
                    // Load data if not already loaded
                    if (sempadanTamanData.length === 0) {
                        loadSempadanTamanData(mapInstanceRef.current, sempadanTamanDataLayerRef.current);
                    } else {
                        // Show existing data
                        sempadanTamanDataLayerRef.current.setMap(mapInstanceRef.current);
                        sempadanTamanMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    sempadanTamanDataLayerRef.current.setMap(null);
                    sempadanTamanMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showSempadanTaman,
        sempadanTamanData
    ]);
    // Toggle gtnh_semasa visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && gtnhSemasaDataLayerRef.current && window.google?.maps) {
                if (showGtnhSemasa) {
                    // Load data if not already loaded
                    if (gtnhSemasaData.length === 0) {
                        loadGtnhSemasaData(mapInstanceRef.current, gtnhSemasaDataLayerRef.current);
                    } else {
                        // Show existing data
                        gtnhSemasaDataLayerRef.current.setMap(mapInstanceRef.current);
                    }
                } else {
                    // Hide data
                    gtnhSemasaDataLayerRef.current.setMap(null);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showGtnhSemasa,
        gtnhSemasaData
    ]);
    // Toggle jalan visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && jalanDataLayerRef.current && window.google?.maps) {
                if (showJalan) {
                    // Load data if not already loaded
                    if (jalanData.length === 0) {
                        loadJalanData(mapInstanceRef.current, jalanDataLayerRef.current);
                    } else {
                        // Show existing data
                        jalanDataLayerRef.current.setMap(mapInstanceRef.current);
                        jalanMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    jalanDataLayerRef.current.setMap(null);
                    jalanMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showJalan,
        jalanData
    ]);
    // Toggle jalan_kejuruteraan visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && jalanKejuruteraanDataLayerRef.current && window.google?.maps) {
                if (showJalanKejuruteraan) {
                    // Load data if not already loaded
                    if (jalanKejuruteraanData.length === 0) {
                        loadJalanKejuruteraanData(mapInstanceRef.current, jalanKejuruteraanDataLayerRef.current);
                    } else {
                        // Show existing data
                        jalanKejuruteraanDataLayerRef.current.setMap(mapInstanceRef.current);
                        jalanKejuruteraanMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    jalanKejuruteraanDataLayerRef.current.setMap(null);
                    jalanKejuruteraanMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showJalanKejuruteraan,
        jalanKejuruteraanData
    ]);
    // Toggle komited_km visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && komitedKmDataLayerRef.current && window.google?.maps) {
                if (showKomitedKm) {
                    // Load data if not already loaded
                    if (komitedKmData.length === 0) {
                        loadKomitedKmData(mapInstanceRef.current, komitedKmDataLayerRef.current);
                    } else {
                        // Show existing data
                        komitedKmDataLayerRef.current.setMap(mapInstanceRef.current);
                        komitedKmMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    komitedKmDataLayerRef.current.setMap(null);
                    komitedKmMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showKomitedKm,
        komitedKmData
    ]);
    // Toggle ndcdb20 visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && ndcdb20DataLayerRef.current && window.google?.maps) {
                if (showNdcdb20) {
                    // Load data if not already loaded
                    if (ndcdb20Data.length === 0) {
                        loadNdcdb20Data(mapInstanceRef.current, ndcdb20DataLayerRef.current);
                    } else {
                        // Show existing data
                        ndcdb20DataLayerRef.current.setMap(mapInstanceRef.current);
                        ndcdb20MarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    ndcdb20DataLayerRef.current.setMap(null);
                    ndcdb20MarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showNdcdb20,
        ndcdb20Data
    ]);
    // Toggle ndcdb23 visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && ndcdb23DataLayerRef.current && window.google?.maps) {
                if (showNdcdb23) {
                    // Load data if not already loaded
                    if (ndcdb23Data.length === 0) {
                        loadNdcdb23Data(mapInstanceRef.current, ndcdb23DataLayerRef.current);
                    } else {
                        // Show existing data
                        ndcdb23DataLayerRef.current.setMap(mapInstanceRef.current);
                        ndcdb23MarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide data
                    ndcdb23DataLayerRef.current.setMap(null);
                    ndcdb23MarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showNdcdb23,
        ndcdb23Data
    ]);
    // Toggle pasar_awam visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && pasarAwamDataLayerRef.current && window.google?.maps) {
                if (showPasarAwam) {
                    if (pasarAwamData.length === 0) {
                        loadPasarAwamData(mapInstanceRef.current, pasarAwamDataLayerRef.current);
                    } else {
                        pasarAwamDataLayerRef.current.setMap(mapInstanceRef.current);
                        pasarAwamMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    pasarAwamDataLayerRef.current.setMap(null);
                    pasarAwamMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showPasarAwam,
        pasarAwamData
    ]);
    // Toggle pasar_malam visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && pasarMalamDataLayerRef.current && window.google?.maps) {
                if (showPasarMalam) {
                    if (pasarMalamData.length === 0) {
                        loadPasarMalamData(mapInstanceRef.current, pasarMalamDataLayerRef.current);
                    } else {
                        pasarMalamDataLayerRef.current.setMap(mapInstanceRef.current);
                        pasarMalamMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    pasarMalamDataLayerRef.current.setMap(null);
                    pasarMalamMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showPasarMalam,
        pasarMalamData
    ]);
    // Toggle pasar_sari visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && pasarSariDataLayerRef.current && window.google?.maps) {
                if (showPasarSari) {
                    if (pasarSariData.length === 0) {
                        loadPasarSariData(mapInstanceRef.current, pasarSariDataLayerRef.current);
                    } else {
                        pasarSariDataLayerRef.current.setMap(mapInstanceRef.current);
                        pasarSariMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    pasarSariDataLayerRef.current.setMap(null);
                    pasarSariMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showPasarSari,
        pasarSariData
    ]);
    // Toggle pasar_tani visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && pasarTaniDataLayerRef.current && window.google?.maps) {
                if (showPasarTani) {
                    if (pasarTaniData.length === 0) {
                        loadPasarTaniData(mapInstanceRef.current, pasarTaniDataLayerRef.current);
                    } else {
                        pasarTaniDataLayerRef.current.setMap(mapInstanceRef.current);
                        pasarTaniMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    pasarTaniDataLayerRef.current.setMap(null);
                    pasarTaniMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showPasarTani,
        pasarTaniData
    ]);
    // Toggle road_hump visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showRoadHump) {
                    if (roadHumpData.length === 0) {
                        loadRoadHumpData(mapInstanceRef.current);
                    } else {
                        roadHumpMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    roadHumpMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showRoadHump,
        roadHumpData
    ]);
    // Toggle road_marking_linear visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && roadMarkingLinearDataLayerRef.current && window.google?.maps) {
                if (showRoadMarkingLinear) {
                    // Load data if not already loaded
                    if (roadMarkingLinearData.length === 0) {
                        loadRoadMarkingLinearData(mapInstanceRef.current, roadMarkingLinearDataLayerRef.current);
                    } else {
                        // Show existing features
                        roadMarkingLinearDataLayerRef.current.setMap(mapInstanceRef.current);
                        roadMarkingLinearMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide features
                    roadMarkingLinearDataLayerRef.current.setMap(null);
                    roadMarkingLinearMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showRoadMarkingLinear,
        roadMarkingLinearData
    ]);
    // Toggle road_marking_point visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showRoadMarkingPoint) {
                    if (roadMarkingPointData.length === 0) {
                        loadRoadMarkingPointData(mapInstanceRef.current);
                    } else {
                        roadMarkingPointMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    roadMarkingPointMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showRoadMarkingPoint,
        roadMarkingPointData
    ]);
    // Toggle road_median visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && roadMedianDataLayerRef.current && window.google?.maps) {
                if (showRoadMedian) {
                    // Load data if not already loaded
                    if (roadMedianData.length === 0) {
                        loadRoadMedianData(mapInstanceRef.current, roadMedianDataLayerRef.current);
                    } else {
                        // Show existing features
                        roadMedianDataLayerRef.current.setMap(mapInstanceRef.current);
                        roadMedianMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide features
                    roadMedianDataLayerRef.current.setMap(null);
                    roadMedianMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showRoadMedian,
        roadMedianData
    ]);
    // Toggle road_shoulder visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && roadShoulderDataLayerRef.current && window.google?.maps) {
                if (showRoadShoulder) {
                    // Load data if not already loaded
                    if (roadShoulderData.length === 0) {
                        loadRoadShoulderData(mapInstanceRef.current, roadShoulderDataLayerRef.current);
                    } else {
                        // Show existing features
                        roadShoulderDataLayerRef.current.setMap(mapInstanceRef.current);
                        roadShoulderMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    // Hide features
                    roadShoulderDataLayerRef.current.setMap(null);
                    roadShoulderMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showRoadShoulder,
        roadShoulderData
    ]);
    // Toggle sampah_haram visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showSampahHaram) {
                    if (sampahHaramData.length === 0) {
                        loadSampahHaramData(mapInstanceRef.current);
                    } else {
                        sampahHaramMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    sampahHaramMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showSampahHaram,
        sampahHaramData
    ]);
    // Toggle sempadan_daerah visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps && sempadanDaerahDataLayerRef.current) {
                if (showSempadanDaerah) {
                    if (sempadanDaerahData.length === 0) {
                        loadSempadanDaerahData(mapInstanceRef.current, sempadanDaerahDataLayerRef.current);
                    } else {
                        sempadanDaerahDataLayerRef.current.setMap(mapInstanceRef.current);
                        sempadanDaerahMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    sempadanDaerahDataLayerRef.current.setMap(null);
                    sempadanDaerahMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showSempadanDaerah,
        sempadanDaerahData
    ]);
    // Toggle signboard visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showSignboard) {
                    if (signboardData.length === 0) {
                        loadSignboardData(mapInstanceRef.current);
                    } else {
                        signboardMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    signboardMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showSignboard,
        signboardData
    ]);
    // Toggle sport_facility visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showSportFacility) {
                    if (sportFacilityData.length === 0) {
                        loadSportFacilityData(mapInstanceRef.current);
                    } else {
                        sportFacilityMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    sportFacilityMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showSportFacility,
        sportFacilityData
    ]);
    // Toggle street_lighting visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showStreetLighting) {
                    if (streetLightingData.length === 0) {
                        loadStreetLightingData(mapInstanceRef.current);
                    } else {
                        streetLightingMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    streetLightingMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showStreetLighting,
        streetLightingData
    ]);
    // Toggle Loranet streetlight visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showLoranetStreetlight) {
                    if (loranetStreetlightData.length === 0) {
                        loadLoranetStreetlightData(mapInstanceRef.current);
                    } else {
                        loranetStreetlightMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    loranetStreetlightMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showLoranetStreetlight,
        loranetStreetlightData
    ]);
    // Toggle taman_perumahan visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps && tamanPerumahanDataLayerRef.current) {
                if (showTamanPerumahan) {
                    if (tamanPerumahanData.length === 0) {
                        loadTamanPerumahanData(mapInstanceRef.current, tamanPerumahanDataLayerRef.current);
                    } else {
                        tamanPerumahanDataLayerRef.current.setMap(mapInstanceRef.current);
                        tamanPerumahanMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    tamanPerumahanDataLayerRef.current.setMap(null);
                    tamanPerumahanMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showTamanPerumahan,
        tamanPerumahanData
    ]);
    // Toggle traffic_light visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps) {
                if (showTrafficLight) {
                    if (trafficLightData.length === 0) {
                        loadTrafficLightData(mapInstanceRef.current);
                    } else {
                        trafficLightMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    trafficLightMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showTrafficLight,
        trafficLightData
    ]);
    // Toggle warta_kawasan_lapang visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps && wartaKawasanLapangDataLayerRef.current) {
                if (showWartaKawasanLapang) {
                    if (wartaKawasanLapangData.length === 0) {
                        loadWartaKawasanLapangData(mapInstanceRef.current, wartaKawasanLapangDataLayerRef.current);
                    } else {
                        wartaKawasanLapangDataLayerRef.current.setMap(mapInstanceRef.current);
                        wartaKawasanLapangMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    wartaKawasanLapangDataLayerRef.current.setMap(null);
                    wartaKawasanLapangMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showWartaKawasanLapang,
        wartaKawasanLapangData
    ]);
    // Toggle zon_ahli_majlis visibility
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "GoogleMap.useEffect": ()=>{
            if (mapInstanceRef.current && window.google?.maps && zonAhliMajlisDataLayerRef.current) {
                if (showZonAhliMajlis) {
                    if (zonAhliMajlisData.length === 0) {
                        loadZonAhliMajlisData(mapInstanceRef.current, zonAhliMajlisDataLayerRef.current);
                    } else {
                        zonAhliMajlisDataLayerRef.current.setMap(mapInstanceRef.current);
                        zonAhliMajlisMarkersRef.current.forEach({
                            "GoogleMap.useEffect": (marker)=>{
                                if (marker && marker.setMap) {
                                    marker.setMap(mapInstanceRef.current);
                                }
                            }
                        }["GoogleMap.useEffect"]);
                    }
                } else {
                    zonAhliMajlisDataLayerRef.current.setMap(null);
                    zonAhliMajlisMarkersRef.current.forEach({
                        "GoogleMap.useEffect": (marker)=>{
                            if (marker && marker.setMap) {
                                marker.setMap(null);
                            }
                        }
                    }["GoogleMap.useEffect"]);
                }
            }
        }
    }["GoogleMap.useEffect"], [
        showZonAhliMajlis,
        zonAhliMajlisData
    ]);
    if (error) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center h-full bg-muted",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center p-8 max-w-md",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold mb-2 text-destructive",
                        children: "Map Loading Error"
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                        lineNumber: 8557,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-muted-foreground mb-4",
                        children: error
                    }, void 0, false, {
                        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                        lineNumber: 8558,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                lineNumber: 8556,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
            lineNumber: 8555,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative w-full h-full",
        style: {
            width: '100%',
            height: '100%'
        },
        children: [
            isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-muted z-10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto mb-4"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                            lineNumber: 8569,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-muted-foreground",
                            children: "Loading Map..."
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                            lineNumber: 8570,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                    lineNumber: 8568,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                lineNumber: 8567,
                columnNumber: 9
            }, this),
            !isLoading && blokData.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-4 right-4 z-20 bg-black/70 text-white px-3 py-2 rounded-lg text-xs backdrop-blur-sm",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-2 h-2 bg-green-500 rounded-full animate-pulse"
                        }, void 0, false, {
                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                            lineNumber: 8578,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: [
                                blokData.length,
                                " blok loaded"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                            lineNumber: 8579,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                    lineNumber: 8577,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                lineNumber: 8576,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$GitHub$2f$mpsepang$2d$shadcn$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: mapRef,
                className: "w-full h-full",
                style: {
                    width: '100%',
                    height: '100%',
                    minHeight: '600px',
                    position: 'relative',
                    display: 'block',
                    overflow: 'hidden'
                }
            }, void 0, false, {
                fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
                lineNumber: 8583,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx",
        lineNumber: 8565,
        columnNumber: 5
    }, this);
}
_s(GoogleMap, "12EX59HdxqPP9nfXqRIqnEzU14c=");
_c = GoogleMap;
var _c;
__turbopack_context__.k.register(_c, "GoogleMap");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/GitHub/mpsepang-shadcn/src/components/ioc/google-map.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=Documents_GitHub_mpsepang-shadcn_src_components_ioc_google-map_tsx_93edffe5._.js.map