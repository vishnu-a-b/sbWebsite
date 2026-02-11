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
"[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0069af21b241097db122e05cd1e83803e3e1b93802":"getPublicTeamMembers","00aebad6740acd9904e9c923391dfa368206bc123a":"getAboutPageLeadership","00b88b7fcb699cde5201e240cde57fb6c9e8cd4353":"getTeamMembers","4096549a6bda028871a6af46b1dccfa8ab9bfcaa53":"createTeamMember","40e81f960d738236e3a396fedc249d31f46299e385":"getTeamMember","40eb1e179933a9a962ccb1a269ec9b0bd2841d2764":"deleteTeamMember","60cadab19737f150e9478a911e99c2fbf296f4c475":"updateTeamMember"},"",""] */ __turbopack_context__.s([
    "createTeamMember",
    ()=>createTeamMember,
    "deleteTeamMember",
    ()=>deleteTeamMember,
    "getAboutPageLeadership",
    ()=>getAboutPageLeadership,
    "getPublicTeamMembers",
    ()=>getPublicTeamMembers,
    "getTeamMember",
    ()=>getTeamMember,
    "getTeamMembers",
    ()=>getTeamMembers,
    "updateTeamMember",
    ()=>updateTeamMember
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getTeamMembers() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/team/admin`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch team members');
        }
        const data = await response.json();
        return data.members || [];
    } catch (error) {
        console.error('Error fetching team members:', error);
        return [];
    }
}
async function getPublicTeamMembers() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/team`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch team members');
        }
        const data = await response.json();
        return data.members || [];
    } catch (error) {
        console.error('Error fetching public team members:', error);
        return [];
    }
}
async function getAboutPageLeadership() {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/team/about`, {
            cache: 'no-store'
        });
        if (!response.ok) {
            throw new Error('Failed to fetch leadership members');
        }
        const data = await response.json();
        return data.members || [];
    } catch (error) {
        console.error('Error fetching about page leadership:', error);
        return [];
    }
}
async function getTeamMember(id) {
    try {
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/team/${id}`, {
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/team`, {
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/team/${id}`, {
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
        const response = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/team/${id}`, {
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
    getPublicTeamMembers,
    getAboutPageLeadership,
    getTeamMember,
    createTeamMember,
    updateTeamMember,
    deleteTeamMember
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTeamMembers, "00b88b7fcb699cde5201e240cde57fb6c9e8cd4353", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getPublicTeamMembers, "0069af21b241097db122e05cd1e83803e3e1b93802", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAboutPageLeadership, "00aebad6740acd9904e9c923391dfa368206bc123a", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getTeamMember, "40e81f960d738236e3a396fedc249d31f46299e385", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createTeamMember, "4096549a6bda028871a6af46b1dccfa8ab9bfcaa53", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateTeamMember, "60cadab19737f150e9478a911e99c2fbf296f4c475", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteTeamMember, "40eb1e179933a9a962ccb1a269ec9b0bd2841d2764", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0069af21b241097db122e05cd1e83803e3e1b93802",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getPublicTeamMembers"],
    "0099f994b742aedb9649744330d515e513bb7ff4dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFooterContent"],
    "009a27f21d06ce601c3db390f830955a0d52ae1e4c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedAboutContent"],
    "00ac8f0731888bb914e0bc2d9b191213cce1218b3a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedFooterContent"],
    "00aebad6740acd9904e9c923391dfa368206bc123a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAboutPageLeadership"],
    "00b88b7fcb699cde5201e240cde57fb6c9e8cd4353",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTeamMembers"],
    "00fb3d8c0f57b0831852eb6a04e1493af194a3af2e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAboutContent"],
    "403117ed3a07c5b61e812767edfa37a75b378cabaa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateFooterContent"],
    "405e078970def27525c7f2416c1e68e231e4e9d6ee",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAboutContent"],
    "4096549a6bda028871a6af46b1dccfa8ab9bfcaa53",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createTeamMember"],
    "40e81f960d738236e3a396fedc249d31f46299e385",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getTeamMember"],
    "40eb1e179933a9a962ccb1a269ec9b0bd2841d2764",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteTeamMember"],
    "60cadab19737f150e9478a911e99c2fbf296f4c475",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateTeamMember"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$about$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$about$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/about.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$team$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/team.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Official_SbWebsite_client_36fed97c._.js.map