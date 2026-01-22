module.exports = [
"[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"003e05553895ee42d7b4aec7db699418ff588db004":"getAwards","401baa188168c2aad0ace2f1d47e6d9e7614f343af":"deleteAward","4057e512684732c462fdef4afd0d451a3cab11008a":"createAward","40d48ac09875f932591a8bd2666f8fa7bb63ecd6b0":"getAward","60ffa8fd1a2477861439bb038fd3edd4bd9bee6d89":"updateAward"},"",""] */ __turbopack_context__.s([
    "createAward",
    ()=>createAward,
    "deleteAward",
    ()=>deleteAward,
    "getAward",
    ()=>getAward,
    "getAwards",
    ()=>getAwards,
    "updateAward",
    ()=>updateAward
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api") || 'http://localhost:5001';
async function getAwards() {
    try {
        const response = await fetch(`${API_URL}/api/awards/admin`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch awards');
        }
        const data = await response.json();
        return data.awards || [];
    } catch (error) {
        console.error('Error fetching awards:', error);
        return [];
    }
}
async function getAward(id) {
    try {
        const response = await fetch(`${API_URL}/api/awards/${id}`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch award');
        }
        const data = await response.json();
        return data.award;
    } catch (error) {
        console.error('Error fetching award:', error);
        throw error;
    }
}
async function createAward(awardData) {
    try {
        const response = await fetch(`${API_URL}/api/awards`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(awardData)
        });
        if (!response.ok) {
            throw new Error('Failed to create award');
        }
        const data = await response.json();
        return data.award;
    } catch (error) {
        console.error('Error creating award:', error);
        throw error;
    }
}
async function updateAward(id, awardData) {
    try {
        const response = await fetch(`${API_URL}/api/awards/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(awardData)
        });
        if (!response.ok) {
            throw new Error('Failed to update award');
        }
        const data = await response.json();
        return data.award;
    } catch (error) {
        console.error('Error updating award:', error);
        throw error;
    }
}
async function deleteAward(id) {
    try {
        const response = await fetch(`${API_URL}/api/awards/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete award');
        }
        return true;
    } catch (error) {
        console.error('Error deleting award:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAwards,
    getAward,
    createAward,
    updateAward,
    deleteAward
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAwards, "003e05553895ee42d7b4aec7db699418ff588db004", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAward, "40d48ac09875f932591a8bd2666f8fa7bb63ecd6b0", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAward, "4057e512684732c462fdef4afd0d451a3cab11008a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAward, "60ffa8fd1a2477861439bb038fd3edd4bd9bee6d89", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAward, "401baa188168c2aad0ace2f1d47e6d9e7614f343af", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/awards/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/awards/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "003e05553895ee42d7b4aec7db699418ff588db004",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAwards"],
    "401baa188168c2aad0ace2f1d47e6d9e7614f343af",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAward"],
    "4057e512684732c462fdef4afd0d451a3cab11008a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAward"],
    "60ffa8fd1a2477861439bb038fd3edd4bd9bee6d89",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAward"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$2d$panel$292f$admin$2f$awards$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/awards/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$awards$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/awards.ts [app-rsc] (ecmascript)");
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

//# sourceMappingURL=Official_SbWebsite_client_acb370d8._.js.map