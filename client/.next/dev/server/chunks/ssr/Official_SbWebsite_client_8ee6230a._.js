module.exports = [
"[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b88b7fcb699cde5201e240cde57fb6c9e8cd4353":"getTeamMembers","4096549a6bda028871a6af46b1dccfa8ab9bfcaa53":"createTeamMember","40e81f960d738236e3a396fedc249d31f46299e385":"getTeamMember","40eb1e179933a9a962ccb1a269ec9b0bd2841d2764":"deleteTeamMember","60cadab19737f150e9478a911e99c2fbf296f4c475":"updateTeamMember"},"",""] */ __turbopack_context__.s([
    "createTeamMember",
    ()=>createTeamMember,
    "deleteTeamMember",
    ()=>deleteTeamMember,
    "getTeamMember",
    ()=>getTeamMember,
    "getTeamMembers",
    ()=>getTeamMembers,
    "updateTeamMember",
    ()=>updateTeamMember
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
const API_URL = ("TURBOPACK compile-time value", "http://localhost:5000/api") || 'http://localhost:5000';
async function getTeamMembers() {
    try {
        const response = await fetch(`${API_URL}/api/team/admin`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch team members');
        }
        const data = await response.json();
        return data.teamMembers || [];
    } catch (error) {
        console.error('Error fetching team members:', error);
        return [];
    }
}
async function getTeamMember(id) {
    try {
        const response = await fetch(`${API_URL}/api/team/${id}`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch team member');
        }
        const data = await response.json();
        return data.teamMember;
    } catch (error) {
        console.error('Error fetching team member:', error);
        throw error;
    }
}
async function createTeamMember(teamMemberData) {
    try {
        const response = await fetch(`${API_URL}/api/team`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teamMemberData)
        });
        if (!response.ok) {
            throw new Error('Failed to create team member');
        }
        const data = await response.json();
        return data.teamMember;
    } catch (error) {
        console.error('Error creating team member:', error);
        throw error;
    }
}
async function updateTeamMember(id, teamMemberData) {
    try {
        const response = await fetch(`${API_URL}/api/team/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(teamMemberData)
        });
        if (!response.ok) {
            throw new Error('Failed to update team member');
        }
        const data = await response.json();
        return data.teamMember;
    } catch (error) {
        console.error('Error updating team member:', error);
        throw error;
    }
}
async function deleteTeamMember(id) {
    try {
        const response = await fetch(`${API_URL}/api/team/${id}`, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete team member');
        }
        return true;
    } catch (error) {
        console.error('Error deleting team member:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getTeamMembers,
    getTeamMember,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTeamMembers, "00b88b7fcb699cde5201e240cde57fb6c9e8cd4353", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTeamMember, "40e81f960d738236e3a396fedc249d31f46299e385", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTeamMember, "4096549a6bda028871a6af46b1dccfa8ab9bfcaa53", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTeamMember, "60cadab19737f150e9478a911e99c2fbf296f4c475", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTeamMember, "40eb1e179933a9a962ccb1a269ec9b0bd2841d2764", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/team/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)");
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/team/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00b88b7fcb699cde5201e240cde57fb6c9e8cd4353",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTeamMembers"],
    "4096549a6bda028871a6af46b1dccfa8ab9bfcaa53",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTeamMember"],
    "40eb1e179933a9a962ccb1a269ec9b0bd2841d2764",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTeamMember"],
    "60cadab19737f150e9478a911e99c2fbf296f4c475",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTeamMember"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$admin$2d$panel$292f$admin$2f$team$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(admin-panel)/admin/team/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)");
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

//# sourceMappingURL=Official_SbWebsite_client_8ee6230a._.js.map