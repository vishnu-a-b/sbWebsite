module.exports = [
"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"009a27f21d06ce601c3db390f830955a0d52ae1e4c":"seedAboutContent","00fb3d8c0f57b0831852eb6a04e1493af194a3af2e":"getAboutContent","405e078970def27525c7f2416c1e68e231e4e9d6ee":"updateAboutContent"},"",""] */ __turbopack_context__.s([
    "getAboutContent",
    ()=>getAboutContent,
    "seedAboutContent",
    ()=>seedAboutContent,
    "updateAboutContent",
    ()=>updateAboutContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
// Remove trailing /api if present to avoid double /api/api paths
const rawApiUrl = ("TURBOPACK compile-time value", "http://127.0.0.1:5002") || 'http://localhost:5001';
const API_URL = rawApiUrl.endsWith('/api') ? rawApiUrl.slice(0, -4) : rawApiUrl;
async function getAboutContent() {
    try {
        const res = await fetch(`${API_URL}/api/about`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            console.error("Failed to fetch about content:", res.status);
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch about content", error);
        return null;
    }
}
async function updateAboutContent(data) {
    try {
        const res = await fetch(`${API_URL}/api/about`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error("Failed to update about content");
        }
        const result = await res.json();
        return result.data || result;
    } catch (error) {
        console.error("Failed to update about content", error);
        throw error;
    }
}
async function seedAboutContent() {
    try {
        const res = await fetch(`${API_URL}/api/about/seed`, {
            method: 'POST'
        });
        if (!res.ok) {
            throw new Error("Failed to seed about content");
        }
        await res.json();
        // After seeding, fetch the new content
        const aboutRes = await fetch(`${API_URL}/api/about`, {
            cache: 'no-store'
        });
        if (!aboutRes.ok) {
            throw new Error("Failed to fetch seeded content");
        }
        return await aboutRes.json();
    } catch (error) {
        console.error("Failed to seed about content", error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAboutContent,
    updateAboutContent,
    seedAboutContent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAboutContent, "00fb3d8c0f57b0831852eb6a04e1493af194a3af2e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAboutContent, "405e078970def27525c7f2416c1e68e231e4e9d6ee", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(seedAboutContent, "009a27f21d06ce601c3db390f830955a0d52ae1e4c", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0099f994b742aedb9649744330d515e513bb7ff4dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFooterContent"],
    "009a27f21d06ce601c3db390f830955a0d52ae1e4c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedAboutContent"],
    "00ac8f0731888bb914e0bc2d9b191213cce1218b3a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedFooterContent"],
    "00fb3d8c0f57b0831852eb6a04e1493af194a3af2e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAboutContent"],
    "403117ed3a07c5b61e812767edfa37a75b378cabaa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateFooterContent"],
    "405e078970def27525c7f2416c1e68e231e4e9d6ee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAboutContent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$about$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Official_SbWebsite_client_d5dcab0d._.js.map