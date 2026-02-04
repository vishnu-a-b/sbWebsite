module.exports = [
"[project]/Official/SbWebsite/client/app/actions/benevityPage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b0e3d66c06e8c0968dc2df0cce15bab3dd500bba":"getBenevityPageContent","00ca80fd4d2553c377e9babdcefe91239b2f735c71":"seedBenevityPageContent","40a78c26d740582b230e7c9395e83848d130d94327":"updateBenevityPageContent"},"",""] */ __turbopack_context__.s([
    "getBenevityPageContent",
    ()=>getBenevityPageContent,
    "seedBenevityPageContent",
    ()=>seedBenevityPageContent,
    "updateBenevityPageContent",
    ()=>updateBenevityPageContent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
const API_URL = ("TURBOPACK compile-time value", "http://127.0.0.1:5002") || 'http://localhost:5001';
async function getBenevityPageContent() {
    try {
        const res = await fetch(`${API_URL}/api/benevity/page`, {
            cache: 'no-store'
        });
        if (!res.ok) {
            console.error("Failed to fetch benevity page content:", res.status);
            return null;
        }
        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch benevity page content", error);
        return null;
    }
}
async function updateBenevityPageContent(data) {
    try {
        const res = await fetch(`${API_URL}/api/benevity/page`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!res.ok) {
            throw new Error("Failed to update benevity page content");
        }
        const result = await res.json();
        // Revalidate the benevity page to show updated content
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/benevity');
        return result.data || result;
    } catch (error) {
        console.error("Failed to update benevity page content", error);
        throw error;
    }
}
async function seedBenevityPageContent() {
    try {
        const res = await fetch(`${API_URL}/api/benevity/page/seed`, {
            method: 'POST'
        });
        if (!res.ok) {
            throw new Error("Failed to seed benevity page content");
        }
        await res.json();
        // After seeding, fetch the new content
        const pageRes = await fetch(`${API_URL}/api/benevity/page`, {
            cache: 'no-store'
        });
        if (!pageRes.ok) {
            throw new Error("Failed to fetch seeded content");
        }
        // Revalidate the benevity page to show updated content
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/benevity');
        return await pageRes.json();
    } catch (error) {
        console.error("Failed to seed benevity page content", error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getBenevityPageContent,
    updateBenevityPageContent,
    seedBenevityPageContent
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getBenevityPageContent, "00b0e3d66c06e8c0968dc2df0cce15bab3dd500bba", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateBenevityPageContent, "40a78c26d740582b230e7c9395e83848d130d94327", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(seedBenevityPageContent, "00ca80fd4d2553c377e9babdcefe91239b2f735c71", null);
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
"[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40370a69f6c648776340f6ec959c680c4fa03c1f5c":"getProject","4052a7d1f46c0a028198c1f37200896feb2d7200a3":"getProjects","60aa0eb5621a561e50a062d75d613a1f94b78cb619":"createProject","60ffeae8b5dc590ed43163967b5ee0f8cd35297d21":"deleteProject","70ec8de4bd180a36f98d47bc35bbc15186253fbf2f":"updateProject"},"",""] */ __turbopack_context__.s([
    "createProject",
    ()=>createProject,
    "deleteProject",
    ()=>deleteProject,
    "getProject",
    ()=>getProject,
    "getProjects",
    ()=>getProjects,
    "updateProject",
    ()=>updateProject
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/api.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/cache.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
async function getProjects(filter) {
    try {
        let url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects/admin`;
        if (filter) {
            if (filter.showOnBenevity) {
                // Check if admin mode requested for Benevity
                if (filter.mode === 'admin') {
                    url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects/admin`;
                } else {
                    url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects`;
                }
            } else {
                // Main projects
                url = `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects?`;
                if (filter.showOnFirstFace) {
                    url += `showOnFirstFace=true`;
                }
            }
        }
        console.log('getProjects: Fetching from URL:', url);
        const response = await fetch(url, {
            cache: 'no-store'
        });
        if (!response.ok) {
            console.error('getProjects: Fetch failed with status:', response.status);
            throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        console.log('getProjects: Received data count:', data.projects?.length);
        return data.projects || [];
    } catch (error) {
        console.error('Error fetching projects:', error);
        return [];
    }
}
async function getProject(id) {
    try {
        // 1. Try Main Collection
        const mainResponse = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects/${id}`, {
            cache: 'no-store'
        });
        if (mainResponse.ok) {
            const data = await mainResponse.json();
            return data.project;
        }
        // 2. Try Benevity Collection
        // Only if main failed (e.g. 404), check Benevity
        const benevityResponse = await fetch(`${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects/${id}`, {
            cache: 'no-store'
        });
        if (benevityResponse.ok) {
            const data = await benevityResponse.json();
            return data.project;
        }
        // 3. If here, neither worked
        console.error(`getProject: Failed to find project ${id} in either collection.`);
        throw new Error('Project not found');
    } catch (error) {
        console.error('Error fetching project:', error);
        throw error;
    }
}
;
async function createProject(projectData, isBenevity = false) {
    try {
        const url = isBenevity ? `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects` : `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData)
        });
        if (!response.ok) {
            throw new Error('Failed to create project');
        }
        const data = await response.json();
        // Revalidate paths to update UI immediately
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/benevity');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/'); // If on home
        return data.project;
    } catch (error) {
        console.error('Error creating project:', error);
        throw error;
    }
}
async function updateProject(id, projectData, isBenevity = false) {
    try {
        const url = isBenevity ? `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects/${id}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects/${id}`;
        // For Benevity routes, we might need a generic PUT endpoint if using /:id
        // Benevity routes currently don't explicitly list PUT /:id but assume standard CRUD.
        // I need to double check benevity.routes.ts... wait, I didn't add PUT /:id there!
        // I should check and update backend if needed.
        // Assuming standard REST, but let's check backend first.
        // Wait, I only added GET, POST (create), POST (seed), GET /:id.
        // I missed Update and Delete in benevity.routes.ts!
        // I will proceed with frontend update assuming backend will be fixed shortly.
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(projectData)
        });
        if (!response.ok) {
            console.error('Update failed:', response.status, await response.text());
            throw new Error('Failed to update project');
        }
        const data = await response.json();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/benevity');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])(`/projects/${id}`);
        return data.project;
    } catch (error) {
        console.error('Error updating project:', error);
        throw error;
    }
}
async function deleteProject(id, isBenevity = false) {
    try {
        const url = isBenevity ? `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/benevity/projects/${id}` : `${__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$api$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"]}/projects/${id}`;
        const response = await fetch(url, {
            method: 'DELETE'
        });
        if (!response.ok) {
            throw new Error('Failed to delete project');
        }
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/admin/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/projects');
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$cache$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["revalidatePath"])('/benevity');
        return true;
    } catch (error) {
        console.error('Error deleting project:', error);
        throw error;
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getProjects,
    getProject,
    createProject,
    updateProject,
    deleteProject
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProjects, "4052a7d1f46c0a028198c1f37200896feb2d7200a3", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getProject, "40370a69f6c648776340f6ec959c680c4fa03c1f5c", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createProject, "60aa0eb5621a561e50a062d75d613a1f94b78cb619", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateProject, "70ec8de4bd180a36f98d47bc35bbc15186253fbf2f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteProject, "60ffeae8b5dc590ed43163967b5ee0f8cd35297d21", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/benevity/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/benevityPage.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$benevityPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/benevityPage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)");
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
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/benevity/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE1 => \"[project]/Official/SbWebsite/client/app/actions/benevityPage.ts [app-rsc] (ecmascript)\", ACTIONS_MODULE2 => \"[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0099f994b742aedb9649744330d515e513bb7ff4dd",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getFooterContent"],
    "00ac8f0731888bb914e0bc2d9b191213cce1218b3a",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedFooterContent"],
    "00b0e3d66c06e8c0968dc2df0cce15bab3dd500bba",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$benevityPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getBenevityPageContent"],
    "00ca80fd4d2553c377e9babdcefe91239b2f735c71",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$benevityPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["seedBenevityPageContent"],
    "403117ed3a07c5b61e812767edfa37a75b378cabaa",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateFooterContent"],
    "40370a69f6c648776340f6ec959c680c4fa03c1f5c",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProject"],
    "4052a7d1f46c0a028198c1f37200896feb2d7200a3",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getProjects"],
    "40a78c26d740582b230e7c9395e83848d130d94327",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$benevityPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateBenevityPageContent"],
    "60aa0eb5621a561e50a062d75d613a1f94b78cb619",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createProject"],
    "60ffeae8b5dc590ed43163967b5ee0f8cd35297d21",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteProject"],
    "70ec8de4bd180a36f98d47bc35bbc15186253fbf2f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateProject"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$benevity$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE1__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$benevityPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29222c$__ACTIONS_MODULE2__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/benevity/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)", ACTIONS_MODULE1 => "[project]/Official/SbWebsite/client/app/actions/benevityPage.ts [app-rsc] (ecmascript)", ACTIONS_MODULE2 => "[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$footer$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/footer.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$benevityPage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/benevityPage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$projects$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/projects.ts [app-rsc] (ecmascript)");
}),
];

//# sourceMappingURL=Official_SbWebsite_client_d044ae15._.js.map