module.exports = [
"[project]/Official/SbWebsite/client/lib/db.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/client/node_modules/mongoose)");
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
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["default"].connect(MONGODB_URI, opts).then((mongoose)=>{
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
"[project]/Official/SbWebsite/client/models/AboutImage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/client/node_modules/mongoose)");
;
const AboutImageSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["default"].Schema({
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
const AboutImage = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["default"].models.AboutImage || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$2c$__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$mongoose$29$__["default"].model('AboutImage', AboutImageSchema);
const __TURBOPACK__default__export__ = AboutImage;
}),
"[project]/Official/SbWebsite/client/app/actions/aboutImage.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"0023277e303dfdd4bbf99c2240e2362e046e88cf88":"getAllAboutImages","0081b9125b6c94e23eb2fdf5cd490ce9230c05347e":"getAboutImage","409f8dded37c21f0cffaa0ab6320442a17f62e9518":"createAboutImage","40d67713404377661aa3b51122fd313d5a16947b75":"deleteAboutImage","60e3ac245c052150f7e43b48f026b3c19821de3c7f":"updateAboutImage"},"",""] */ __turbopack_context__.s([
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/server-reference.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/lib/db.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/models/AboutImage.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-validate.js [app-rsc] (ecmascript)");
;
;
;
async function getAboutImage() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        const image = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
            isActive: true
        }).lean();
        return JSON.parse(JSON.stringify(image));
    } catch (error) {
        console.error("Failed to fetch about image", error);
        return null;
    }
}
async function createAboutImage(data) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        // Deactivate all existing images
        await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].updateMany({}, {
            isActive: false
        });
        // Create new active image
        const image = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].create({
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        // Deactivate all existing images
        await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].updateMany({}, {
            isActive: false
        });
        // Update and activate the specified image
        const image = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndUpdate(id, {
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
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(id);
        return {
            success: true
        };
    } catch (error) {
        console.error("Failed to delete about image", error);
        throw error;
    }
}
async function getAllAboutImages() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$lib$2f$db$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"])();
    try {
        const images = await __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$models$2f$AboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({}).sort({
            createdAt: -1
        }).lean();
        return JSON.parse(JSON.stringify(images));
    } catch (error) {
        console.error("Failed to fetch all about images", error);
        return [];
    }
}
;
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$validate$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["ensureServerEntryExports"])([
    getAboutImage,
    createAboutImage,
    updateAboutImage,
    deleteAboutImage,
    getAllAboutImages
]);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAboutImage, "0081b9125b6c94e23eb2fdf5cd490ce9230c05347e", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(createAboutImage, "409f8dded37c21f0cffaa0ab6320442a17f62e9518", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(updateAboutImage, "60e3ac245c052150f7e43b48f026b3c19821de3c7f", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(deleteAboutImage, "40d67713404377661aa3b51122fd313d5a16947b75", null);
(0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$server$2d$reference$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerServerReference"])(getAllAboutImages, "0023277e303dfdd4bbf99c2240e2362e046e88cf88", null);
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/aboutImage.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/aboutImage.ts [app-rsc] (ecmascript)");
;
;
;
;
;
}),
"[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => \"[project]/Official/SbWebsite/client/app/actions/aboutImage.ts [app-rsc] (ecmascript)\" } [app-rsc] (server actions loader, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "0023277e303dfdd4bbf99c2240e2362e046e88cf88",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAllAboutImages"],
    "0081b9125b6c94e23eb2fdf5cd490ce9230c05347e",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getAboutImage"],
    "409f8dded37c21f0cffaa0ab6320442a17f62e9518",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createAboutImage"],
    "40d67713404377661aa3b51122fd313d5a16947b75",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["deleteAboutImage"],
    "60e3ac245c052150f7e43b48f026b3c19821de3c7f",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["updateAboutImage"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f2e$next$2d$internal$2f$server$2f$app$2f28$main$292f$about$2f$page$2f$actions$2e$js__$7b$__ACTIONS_MODULE0__$3d3e$__$225b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$2922$__$7d$__$5b$app$2d$rsc$5d$__$28$server__actions__loader$2c$__ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i('[project]/Official/SbWebsite/client/.next-internal/server/app/(main)/about/page/actions.js { ACTIONS_MODULE0 => "[project]/Official/SbWebsite/client/app/actions/aboutImage.ts [app-rsc] (ecmascript)" } [app-rsc] (server actions loader, ecmascript) <locals>');
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$aboutImage$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/aboutImage.ts [app-rsc] (ecmascript)");
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
"[externals]/mongoose [external] (mongoose, cjs, [project]/Official/SbWebsite/client/node_modules/mongoose)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose-652d8ab43b4c14f9", () => require("mongoose-652d8ab43b4c14f9"));

module.exports = mod;
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

//# sourceMappingURL=%5Broot-of-the-server%5D__e1ab9854._.js.map