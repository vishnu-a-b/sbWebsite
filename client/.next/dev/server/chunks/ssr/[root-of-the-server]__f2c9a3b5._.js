module.exports = [
"[project]/Official/SbWebsite/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/node_modules/mongoose)");
;
const MONGODB_URI = process.env.MONGODB_URI;
let cached = global.mongoose || {
    conn: null,
    promise: null
};
if (!cached) {
    cached = global.mongoose = {
        conn: null,
        promise: null
    };
}
async function connectToDatabase() {
    if (!MONGODB_URI) {
        // Return mock connection or throw error depending on strictness.
        // For now, we'll log a warning if it's missing but return null to prevent app crash if just building UI.
        console.warn('MONGODB_URI is not defined in environment variables. Database operations will fail.');
        return null;
    }
    if (cached.conn) {
        return cached.conn;
    }
    if (!cached.promise) {
        const opts = {
            bufferCommands: false
        };
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
            return mongoose;
        });
    }
    try {
        cached.conn = await cached.promise;
    } catch (e) {
        cached.promise = null;
        throw e;
    }
    return cached.conn;
}
const __TURBOPACK__default__export__ = connectToDatabase;
}),
"[project]/Official/SbWebsite/models/AboutImage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/node_modules/mongoose)");
;
const AboutImageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["default"].Schema({
    imageUrl: {
        type: String,
        required: true
    },
    altText: {
        type: String,
        default: 'Shanthibhavan Hospital'
    },
    isActive: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const AboutImage = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["default"].models.AboutImage || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$mongoose$29$__["default"].model('AboutImage', AboutImageSchema);
const __TURBOPACK__default__export__ = AboutImage;
}),
"[project]/Official/SbWebsite/app/actions/aboutImage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00280e1eb9e2dc0cf993b920628304e33fa32966f0":"getAllAboutImages","00ec85f77af6f862a592f0716993a5703efad85293":"getAboutImage","4035d0d91de086002001ad12f2f45cadc02b27eba1":"deleteAboutImage","40a5f178913a09d0b848c4b9f7d45d761aa0ed81f8":"createAboutImage","60b1ca028569248f48dc67facec852137b74fa9f8e":"updateAboutImage"},"",""] */ __turbopack_context__.s([
    "createAboutImage",
    ()=>createAboutImage,
    "deleteAboutImage",
    ()=>deleteAboutImage,
    "getAboutImage",
    ()=>getAboutImage,
    "getAllAboutImages",
    ()=>getAllAboutImages,
    "updateAboutImage",
    ()=>updateAboutImage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/models/AboutImage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getAboutImage() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        const image = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            isActive: true
        }).lean();
        return JSON.parse(JSON.stringify(image));
    } catch (error) {
        console.error("Failed to fetch about image", error);
        return null;
    }
}
async function createAboutImage(data) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        // Deactivate all existing images
        await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].updateMany({}, {
            isActive: false
        });
        // Create new active image
        const image = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
            ...data,
            isActive: true
        });
        return JSON.parse(JSON.stringify(image));
    } catch (error) {
        console.error("Failed to create about image", error);
        throw error;
    }
}
async function updateAboutImage(id, data) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        // Deactivate all existing images
        await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].updateMany({}, {
            isActive: false
        });
        // Update and activate the specified image
        const image = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, {
            ...data,
            isActive: true
        }, {
            new: true
        });
        return JSON.parse(JSON.stringify(image));
    } catch (error) {
        console.error("Failed to update about image", error);
        throw error;
    }
}
async function deleteAboutImage(id) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to delete about image", error);
        throw error;
    }
}
async function getAllAboutImages() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        const images = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).sort({
            createdAt: -1
        }).lean();
        return JSON.parse(JSON.stringify(images));
    } catch (error) {
        console.error("Failed to fetch all about images", error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAboutImage,
    createAboutImage,
    updateAboutImage,
    deleteAboutImage,
    getAllAboutImages
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAboutImage, "00ec85f77af6f862a592f0716993a5703efad85293", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAboutImage, "40a5f178913a09d0b848c4b9f7d45d761aa0ed81f8", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAboutImage, "60b1ca028569248f48dc67facec852137b74fa9f8e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAboutImage, "4035d0d91de086002001ad12f2f45cadc02b27eba1", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllAboutImages, "00280e1eb9e2dc0cf993b920628304e33fa32966f0", null);
}),
"[project]/Official/SbWebsite/.next-internal/server/app/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/app/actions/aboutImage.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/app/actions/aboutImage.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/Official/SbWebsite/.next-internal/server/app/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/app/actions/aboutImage.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "00280e1eb9e2dc0cf993b920628304e33fa32966f0",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllAboutImages"],
    "00ec85f77af6f862a592f0716993a5703efad85293",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAboutImage"],
    "4035d0d91de086002001ad12f2f45cadc02b27eba1",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAboutImage"],
    "40a5f178913a09d0b848c4b9f7d45d761aa0ed81f8",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAboutImage"],
    "60b1ca028569248f48dc67facec852137b74fa9f8e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAboutImage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f2e$next$2d$internal$2f$server$2f$app$2f$about$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/.next-internal/server/app/about/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/app/actions/aboutImage.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/app/actions/aboutImage.ts [app-rsc] (ecmascript)");
}),
"[project]/Official/SbWebsite/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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
const _server = __turbopack_context__.r("[project]/Official/SbWebsite/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)"); //# sourceMappingURL=server-reference.js.map
}),
"[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/node_modules/mongoose)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose-26800f942c105bb4", () => require("mongoose-26800f942c105bb4"));

module.exports = mod;
}),
"[project]/Official/SbWebsite/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__f2c9a3b5._.js.map