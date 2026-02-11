module.exports = [
"[project]/Official/SbWebsite/client/lib/api.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "API_ENDPOINTS",
    ()=>API_ENDPOINTS,
    "default",
    ()=>__TURBOPACK__default__export__
]);
// API Configuration for Express Backend
const rawUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5002") || 'http://localhost:5002/api';
const API_BASE_URL = rawUrl.endsWith('/api') ? rawUrl : `${rawUrl}/api`;
const API_ENDPOINTS = {
    banner: `${API_BASE_URL}/banner`,
    payment: `${API_BASE_URL}/payment`,
    contact: `${API_BASE_URL}/contact`,
    volunteer: `${API_BASE_URL}/volunteer`,
    stats: `${API_BASE_URL}/stats`,
    service: `${API_BASE_URL}/service`,
    aboutImage: `${API_BASE_URL}/about-image`,
    health: `${API_BASE_URL}/health`
};
const __TURBOPACK__default__export__ = API_BASE_URL;
}),
"[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"002cf5760abf88aa6b8fc73cd6cab4cd79ee331411":"getServices","40fcfeff4042241a1dd07c2ab0bfc2a4695a1bd6fa":"getServiceBySlug"},"",""] */ __turbopack_context__.s([
    "getServiceBySlug",
    ()=>getServiceBySlug,
    "getServices",
    ()=>getServices
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getServices() {
    try {
        console.log(`Fetching services from: ${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/services`);
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/services`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            console.error(`getServices: Fetch failed with status: ${response.status}`);
            throw new Error('Failed to fetch services');
        }
        const data = await response.json();
        console.log(`getServices: Fetched ${data.services?.length} services`);
        return data.services || [];
    } catch (error) {
        console.error("Failed to fetch services", error);
    }
}
async function getServiceBySlug(slug) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/services/slug/${slug}`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            console.error(`getServiceBySlug: Fetch failed with status: ${response.status}`);
            return null;
        }
        const data = await response.json();
        return data.service;
    } catch (error) {
        console.error("Failed to fetch service by slug", error);
        return null;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getServices,
    getServiceBySlug
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServices, "002cf5760abf88aa6b8fc73cd6cab4cd79ee331411", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getServiceBySlug, "40fcfeff4042241a1dd07c2ab0bfc2a4695a1bd6fa", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/services/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/services/[slug]/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "002cf5760abf88aa6b8fc73cd6cab4cd79ee331411",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServices"],
    "0099f994b742aedb9649744330d515e513bb7ff4dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFooterContent"],
    "00ac8f0731888bb914e0bc2d9b191213cce1218b3a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedFooterContent"],
    "403117ed3a07c5b61e812767edfa37a75b378cabaa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateFooterContent"],
    "40fcfeff4042241a1dd07c2ab0bfc2a4695a1bd6fa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getServiceBySlug"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$services$2f5b$slug$5d2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/services/[slug]/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$service$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/service.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Official_SbWebsite_client_4b5844ad._.js.map