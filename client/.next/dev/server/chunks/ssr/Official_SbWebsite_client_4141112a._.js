module.exports = [
"[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"006a9f0136aa73ab59509fbd236d639f028e3c5a73":"getNewsEvents","404264ed05ca706caa993ab9005ec48128eeec96c3":"deleteNewsEvent","4077e831e69624a025d475cb414c88243212d0532d":"createNewsEvent","40c764cb9af46b645450e47624b84550c384cb0a25":"getNewsEvent","606b2ab59755e4c353ee38820fa50ba87c9e092d60":"updateNewsEvent"},"",""] */ __turbopack_context__.s([
    "createNewsEvent",
    ()=>createNewsEvent,
    "deleteNewsEvent",
    ()=>deleteNewsEvent,
    "getNewsEvent",
    ()=>getNewsEvent,
    "getNewsEvents",
    ()=>getNewsEvents,
    "updateNewsEvent",
    ()=>updateNewsEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api") || 'http://localhost:5000';
async function getNewsEvents() {
    try {
        const response = await fetch(`${API_URL}/api/news-events/admin`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch news/events');
        }
        const data = await response.json();
        return data.newsEvents || [];
    } catch (error) {
        console.error('Error fetching news/events:', error);
        return [];
    }
}
async function getNewsEvent(id) {
    try {
        const response = await fetch(`${API_URL}/api/news-events/${id}`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch news/event');
        }
        const data = await response.json();
        return data.newsEvent;
    } catch (error) {
        console.error('Error fetching news/event:', error);
        throw error;
    }
}
async function createNewsEvent(newsEventData) {
    try {
        const response = await fetch(`${API_URL}/api/news-events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsEventData)
        });
        if (!response.ok) {
            throw new Error('Failed to create news/event');
        }
        const data = await response.json();
        return data.newsEvent;
    } catch (error) {
        console.error('Error creating news/event:', error);
        throw error;
    }
}
async function updateNewsEvent(id, newsEventData) {
    try {
        const response = await fetch(`${API_URL}/api/news-events/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newsEventData)
        });
        if (!response.ok) {
            throw new Error('Failed to update news/event');
        }
        const data = await response.json();
        return data.newsEvent;
    } catch (error) {
        console.error('Error updating news/event:', error);
        throw error;
    }
}
async function deleteNewsEvent(id) {
    try {
        const response = await fetch(`${API_URL}/api/news-events/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete news/event');
        }
        return true;
    } catch (error) {
        console.error('Error deleting news/event:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getNewsEvents,
    getNewsEvent,
    createNewsEvent,
    updateNewsEvent,
    deleteNewsEvent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsEvents, "006a9f0136aa73ab59509fbd236d639f028e3c5a73", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getNewsEvent, "40c764cb9af46b645450e47624b84550c384cb0a25", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createNewsEvent, "4077e831e69624a025d475cb414c88243212d0532d", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateNewsEvent, "606b2ab59755e4c353ee38820fa50ba87c9e092d60", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteNewsEvent, "404264ed05ca706caa993ab9005ec48128eeec96c3", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/news-events/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/news-events/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "006a9f0136aa73ab59509fbd236d639f028e3c5a73",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getNewsEvents"],
    "404264ed05ca706caa993ab9005ec48128eeec96c3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteNewsEvent"],
    "4077e831e69624a025d475cb414c88243212d0532d",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createNewsEvent"],
    "606b2ab59755e4c353ee38820fa50ba87c9e092d60",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateNewsEvent"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$2d$panel$292f$admin$2f$news$2d$events$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/news-events/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$newsEvents$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/newsEvents.ts [app-rsc] (ecmascript)");
}),
"[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

/* eslint-disable import/no-extraneous-dependencies */ Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "registerServerReference", {
    enumerable: true,
    get: function() {
        return _server.registerServerReference;
    }
});
const _server = __turbopack_context__.r("[project]/Official/SbWebsite/client/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

// This function ensures that all the exported values are valid server actions,
// during the runtime. By definition all actions are required to be async
// functions, but here we can only check that they are functions.
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ensureServerEntryExports", {
    enumerable: true,
    get: function() {
        return ensureServerEntryExports;
    }
});
function ensureServerEntryExports(actions) {
    for(let i = 0; i < actions.length; i++){
        const action = actions[i];
        if (typeof action !== 'function') {
            throw Object.defineProperty(new Error(`A "use server" file can only export async functions, found ${typeof action}.\nRead more: https://nextjs.org/docs/messages/invalid-use-server-value`), "__NEXT_ERROR_CODE", {
                value: "E352",
                enumerable: false,
                configurable: true
            });
        }
    }
} //# sourceMappingURL=action-validate.js.map
}),
];

//# sourceMappingURL=Official_SbWebsite_client_4141112a._.js.map