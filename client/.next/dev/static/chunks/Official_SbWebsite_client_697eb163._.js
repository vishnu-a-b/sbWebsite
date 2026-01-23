(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MediaUpload
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/upload.js [app-client] (ecmascript) <export default as Upload>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/video.js [app-client] (ecmascript) <export default as Video>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/file.js [app-client] (ecmascript) <export default as File>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/loader-circle.js [app-client] (ecmascript) <export default as Loader2>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function MediaUpload({ type = 'any', currentUrl, onUploadComplete, label, accept, maxSize = 50 }) {
    _s();
    const [uploading, setUploading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [preview, setPreview] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(currentUrl || '');
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [dragActive, setDragActive] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const getAcceptString = ()=>{
        if (accept) return accept;
        if (type === 'image') return 'image/*';
        if (type === 'video') return 'video/*';
        return 'image/*,video/*';
    };
    const getFileIcon = (fileType)=>{
        if (fileType.startsWith('image/')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
            lineNumber: 37,
            columnNumber: 47
        }, this);
        if (fileType.startsWith('video/')) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
            lineNumber: 38,
            columnNumber: 47
        }, this);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$file$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__File$3e$__["File"], {
            className: "w-8 h-8"
        }, void 0, false, {
            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
            lineNumber: 39,
            columnNumber: 12
        }, this);
    };
    const validateFile = (file)=>{
        // Check file size
        const fileSizeMB = file.size / (1024 * 1024);
        if (fileSizeMB > maxSize) {
            return `File size must be less than ${maxSize}MB. Current: ${fileSizeMB.toFixed(2)}MB`;
        }
        // Check file type
        if (type === 'image' && !file.type.startsWith('image/')) {
            return 'Please upload an image file';
        }
        if (type === 'video' && !file.type.startsWith('video/')) {
            return 'Please upload a video file';
        }
        return null;
    };
    const handleFileUpload = async (file)=>{
        setError('');
        // Validate file
        const validationError = validateFile(file);
        if (validationError) {
            setError(validationError);
            return;
        }
        setUploading(true);
        try {
            // Create form data
            const formData = new FormData();
            formData.append('file', file);
            formData.append('type', type);
            // Upload to API
            const response = await fetch('/api/upload', {
                method: 'POST',
                body: formData
            });
            if (!response.ok) {
                throw new Error('Upload failed');
            }
            const data = await response.json();
            if (data.success && data.url) {
                setPreview(data.url);
                onUploadComplete(data.url);
            } else {
                throw new Error(data.error || 'Upload failed');
            }
        } catch (err) {
            console.error('Upload error:', err);
            setError(err instanceof Error ? err.message : 'Failed to upload file');
        } finally{
            setUploading(false);
        }
    };
    const handleDrop = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            handleFileUpload(e.dataTransfer.files[0]);
        }
    };
    const handleDragOver = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(true);
    };
    const handleDragLeave = (e)=>{
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
    };
    const handleFileInput = (e)=>{
        if (e.target.files && e.target.files[0]) {
            handleFileUpload(e.target.files[0]);
        }
    };
    const handleClear = ()=>{
        setPreview('');
        setError('');
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
        onUploadComplete('');
    };
    const isVideo = preview && (preview.includes('.mp4') || preview.includes('.webm') || preview.includes('.mov'));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                className: "block text-sm font-semibold text-gray-700",
                children: label
            }, void 0, false, {
                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                lineNumber: 146,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `relative border-2 border-dashed rounded-lg transition-all ${dragActive ? 'border-primary bg-primary/5' : error ? 'border-red-300 bg-red-50' : 'border-gray-300 hover:border-gray-400'}`,
                onDrop: handleDrop,
                onDragOver: handleDragOver,
                onDragLeave: handleDragLeave,
                children: preview ? // Preview
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative group",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4",
                            children: isVideo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                                src: preview,
                                className: "w-full h-48 object-cover rounded-lg",
                                controls: true
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                lineNumber: 168,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: preview,
                                alt: "Preview",
                                className: "w-full h-48 object-cover rounded-lg"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                lineNumber: 174,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 166,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            type: "button",
                            onClick: handleClear,
                            className: "absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full hover:bg-red-600 transition-colors opacity-0 group-hover:opacity-100",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                lineNumber: 186,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 181,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute bottom-2 left-2 right-2 bg-black/70 text-white px-3 py-2 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity",
                            children: preview
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 188,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                    lineNumber: 165,
                    columnNumber: 11
                }, this) : // Upload Area
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            ref: fileInputRef,
                            type: "file",
                            onChange: handleFileInput,
                            accept: getAcceptString(),
                            className: "hidden",
                            disabled: uploading
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 195,
                            columnNumber: 13
                        }, this),
                        uploading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$loader$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Loader2$3e$__["Loader2"], {
                                    className: "w-12 h-12 text-primary animate-spin"
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                    lineNumber: 206,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: "Uploading..."
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                    lineNumber: 207,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 205,
                            columnNumber: 15
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-col items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-gray-400",
                                    children: type === 'image' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                        className: "w-12 h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                        lineNumber: 213,
                                        columnNumber: 21
                                    }, this) : type === 'video' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$video$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Video$3e$__["Video"], {
                                        className: "w-12 h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                        lineNumber: 215,
                                        columnNumber: 21
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Upload$3e$__["Upload"], {
                                        className: "w-12 h-12"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                        lineNumber: 217,
                                        columnNumber: 21
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                    lineNumber: 211,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "text-center",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            type: "button",
                                            onClick: ()=>fileInputRef.current?.click(),
                                            className: "text-primary hover:text-primary/80 font-semibold",
                                            children: "Click to upload"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                            lineNumber: 221,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-gray-600",
                                            children: " or drag and drop"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                            lineNumber: 228,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                    lineNumber: 220,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-gray-500",
                                    children: [
                                        type === 'image' ? 'PNG, JPG, GIF up to ' : type === 'video' ? 'MP4, WebM up to ' : 'Images or videos up to ',
                                        maxSize,
                                        "MB"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                                    lineNumber: 230,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                            lineNumber: 210,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                    lineNumber: 194,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                lineNumber: 151,
                columnNumber: 7
            }, this),
            error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-red-500 text-sm flex items-center gap-1",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                        className: "w-4 h-4"
                    }, void 0, false, {
                        fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                        lineNumber: 246,
                        columnNumber: 11
                    }, this),
                    error
                ]
            }, void 0, true, {
                fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
                lineNumber: 245,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx",
        lineNumber: 144,
        columnNumber: 5
    }, this);
}
_s(MediaUpload, "luUVj3OMe6Xl3hm0dd4Hg65Qyzw=");
_c = MediaUpload;
var _c;
__turbopack_context__.k.register(_c, "MediaUpload");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$components$2f$admin$2f$MediaUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/components/admin/MediaUpload.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ProjectForm({ project, onClose, onSave }) {
    _s();
    const [formData, setFormData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        projectName: project?.projectName || '',
        shortDescription: project?.shortDescription || '',
        fullDescription: project?.fullDescription || '',
        featuredImage: project?.featuredImage || '',
        gallery: project?.gallery || [],
        priority: project?.priority || 0,
        isActive: project?.isActive ?? true,
        startDate: project?.startDate ? new Date(project.startDate).toISOString().split('T')[0] : new Date().toISOString().split('T')[0],
        expiryDate: project?.expiryDate ? new Date(project.expiryDate).toISOString().split('T')[0] : new Date(new Date().setFullYear(new Date().getFullYear() + 1)).toISOString().split('T')[0],
        showOnFirstFace: project?.showOnFirstFace || false,
        showOnSecondFace: project?.showOnSecondFace || false,
        showOnBenevity: project?.showOnBenevity || false
    });
    const [newGalleryUrl, setNewGalleryUrl] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const validate = ()=>{
        const newErrors = {};
        if (!formData.projectName.trim()) newErrors.projectName = 'Project name is required';
        if (!formData.shortDescription.trim()) newErrors.shortDescription = 'Short description is required';
        if (!formData.fullDescription.trim()) newErrors.fullDescription = 'Full description is required';
        if (!formData.featuredImage.trim()) newErrors.featuredImage = 'Featured image is required';
        if (new Date(formData.startDate) > new Date(formData.expiryDate)) {
            newErrors.expiryDate = 'Expiry date must be after start date';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        if (validate()) {
            onSave(formData);
        }
    };
    const handleChange = (field, value)=>{
        setFormData((prev)=>({
                ...prev,
                [field]: value
            }));
        if (errors[field]) {
            setErrors((prev)=>({
                    ...prev,
                    [field]: undefined
                }));
        }
    };
    const addGalleryImage = ()=>{
        if (newGalleryUrl.trim()) {
            setFormData((prev)=>({
                    ...prev,
                    gallery: [
                        ...prev.gallery,
                        newGalleryUrl.trim()
                    ]
                }));
            setNewGalleryUrl('');
        }
    };
    const removeGalleryImage = (index)=>{
        setFormData((prev)=>({
                ...prev,
                gallery: prev.gallery.filter((_, i)=>i !== index)
            }));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-2xl font-bold text-gray-900",
                            children: project ? 'Edit Project' : 'Add New Project'
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 98,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                lineNumber: 102,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 101,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                    lineNumber: 97,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: [
                                        "Project Name ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 111,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    value: formData.projectName,
                                    onChange: (e)=>handleChange('projectName', e.target.value),
                                    className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.projectName ? 'border-red-500' : 'border-gray-300'}`,
                                    placeholder: "e.g., Community Health Program"
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 113,
                                    columnNumber: 13
                                }, this),
                                errors.projectName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: errors.projectName
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 122,
                                    columnNumber: 36
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 109,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: [
                                        "Short Description ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 128,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 127,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.shortDescription,
                                    onChange: (e)=>handleChange('shortDescription', e.target.value),
                                    className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.shortDescription ? 'border-red-500' : 'border-gray-300'}`,
                                    placeholder: "Brief overview (for cards/previews)",
                                    rows: 2
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 130,
                                    columnNumber: 13
                                }, this),
                                errors.shortDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: errors.shortDescription
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 139,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 126,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: [
                                        "Full Description ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 145,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 144,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                    value: formData.fullDescription,
                                    onChange: (e)=>handleChange('fullDescription', e.target.value),
                                    className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.fullDescription ? 'border-red-500' : 'border-gray-300'}`,
                                    placeholder: "Detailed project information",
                                    rows: 6
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 147,
                                    columnNumber: 13
                                }, this),
                                errors.fullDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: errors.fullDescription
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 156,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 143,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: [
                                        "Featured Image ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-red-500",
                                            children: "*"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 162,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 161,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex gap-4 items-start",
                                    children: [
                                        formData.featuredImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative w-32 h-32 rounded-lg overflow-hidden border border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: formData.featuredImage,
                                                    alt: "Featured",
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                    lineNumber: 167,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleChange('featuredImage', ''),
                                                    className: "absolute top-1 right-1 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                                        className: "w-3 h-3"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                        lineNumber: 173,
                                                        columnNumber: 26
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 166,
                                            columnNumber: 21
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex-1",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$components$2f$admin$2f$MediaUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                type: "image",
                                                currentUrl: formData.featuredImage,
                                                onUploadComplete: (url)=>handleChange('featuredImage', url),
                                                label: formData.featuredImage ? "Change Image" : "Upload Featured Image",
                                                maxSize: 5
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                lineNumber: 178,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 177,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 164,
                                    columnNumber: 15
                                }, this),
                                errors.featuredImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: errors.featuredImage
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 187,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 160,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: "Gallery Images"
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 192,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-2 md:grid-cols-4 gap-4",
                                            children: formData.gallery.map((url, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "relative group rounded-lg overflow-hidden border border-gray-200 aspect-video bg-gray-50",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                            src: url,
                                                            alt: `Gallery ${index + 1}`,
                                                            className: "w-full h-full object-cover"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                            lineNumber: 199,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            type: "button",
                                                            onClick: ()=>removeGalleryImage(index),
                                                            className: "absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity hover:bg-red-600",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                className: "w-4 h-4"
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                                lineNumber: 205,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                            lineNumber: 200,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 196,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "bg-gray-50 p-4 rounded-lg border border-dashed border-gray-300",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    className: "text-sm font-semibold text-gray-700 mb-3",
                                                    children: "Add to Gallery"
                                                }, void 0, false, {
                                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$components$2f$admin$2f$MediaUpload$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    type: "image",
                                                    currentUrl: "",
                                                    onUploadComplete: (url)=>{
                                                        setFormData((prev)=>({
                                                                ...prev,
                                                                gallery: [
                                                                    ...prev.gallery,
                                                                    url
                                                                ]
                                                            }));
                                                    },
                                                    label: "Upload Gallery Image",
                                                    maxSize: 5
                                                }, void 0, false, {
                                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 211,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 195,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 191,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid md:grid-cols-3 gap-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Priority"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 232,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            value: formData.priority,
                                            onChange: (e)=>handleChange('priority', parseInt(e.target.value)),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent",
                                            min: "0"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 233,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 231,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: formData.startDate,
                                            onChange: (e)=>handleChange('startDate', e.target.value),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 243,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 241,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Expiry Date"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 251,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: formData.expiryDate,
                                            onChange: (e)=>handleChange('expiryDate', e.target.value),
                                            className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'}`
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this),
                                        errors.expiryDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-sm mt-1",
                                            children: errors.expiryDate
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 260,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 230,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4 bg-gray-50 p-4 rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: formData.isActive,
                                            onChange: (e)=>handleChange('isActive', e.target.checked),
                                            className: "w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 267,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 273,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 266,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: formData.showOnFirstFace,
                                            onChange: (e)=>handleChange('showOnFirstFace', e.target.checked),
                                            className: "w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 276,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: "Show on First Face (Above Fold)"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 282,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 275,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: formData.showOnSecondFace,
                                            onChange: (e)=>handleChange('showOnSecondFace', e.target.checked),
                                            className: "w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 285,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: "Show on Second Face (Below Fold)"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 291,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 284,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-3 cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: formData.showOnBenevity,
                                            onChange: (e)=>handleChange('showOnBenevity', e.target.checked),
                                            className: "w-5 h-5 text-primary rounded focus:ring-2 focus:ring-primary"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 294,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: "Show on Benevity Page"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 300,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 293,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 265,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex gap-3 pt-4 border-t",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors font-medium",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 306,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "flex-1 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                            className: "w-5 h-5"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 317,
                                            columnNumber: 15
                                        }, this),
                                        project ? 'Update Project' : 'Create Project'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 313,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 305,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                    lineNumber: 107,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
            lineNumber: 95,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
        lineNumber: 94,
        columnNumber: 5
    }, this);
}
_s(ProjectForm, "lL7lO8uvLMqAu4dqY3x1cSM8Lq0=");
_c = ProjectForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Official/SbWebsite/client/app/actions/cms/data:539692 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProjects",
    ()=>$$RSC_SERVER_ACTION_0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"4052a7d1f46c0a028198c1f37200896feb2d7200a3":"getProjects"},"Official/SbWebsite/client/app/actions/cms/projects.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_0 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4052a7d1f46c0a028198c1f37200896feb2d7200a3", __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getProjects");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cyhmaWx0ZXI/OiB7IHNob3dPbkJlbmV2aXR5PzogYm9vbGVhbiwgc2hvd09uRmlyc3RGYWNlPzogYm9vbGVhbiwgbW9kZT86ICdhZG1pbicgfCAncHVibGljJyB9KSB7XG4gIHRyeSB7XG4gICAgbGV0IHVybCA9IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy9hZG1pbmA7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgICBpZiAoZmlsdGVyLnNob3dPbkJlbmV2aXR5KSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhZG1pbiBtb2RlIHJlcXVlc3RlZCBmb3IgQmVuZXZpdHlcbiAgICAgICAgICAgIGlmIChmaWx0ZXIubW9kZSA9PT0gJ2FkbWluJykge1xuICAgICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0cy9hZG1pbmA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gTWFpbiBwcm9qZWN0c1xuICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cz9gO1xuICAgICAgICAgICAgIGlmIChmaWx0ZXIuc2hvd09uRmlyc3RGYWNlKSB7XG4gICAgICAgICAgICAgICAgIHVybCArPSBgc2hvd09uRmlyc3RGYWNlPXRydWVgO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdnZXRQcm9qZWN0czogRmV0Y2hpbmcgZnJvbSBVUkw6JywgdXJsKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgY2FjaGU6ICduby1zdG9yZScsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdnZXRQcm9qZWN0czogRmV0Y2ggZmFpbGVkIHdpdGggc3RhdHVzOicsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBwcm9qZWN0cycpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coJ2dldFByb2plY3RzOiBSZWNlaXZlZCBkYXRhIGNvdW50OicsIGRhdGEucHJvamVjdHM/Lmxlbmd0aCk7XG4gICAgcmV0dXJuIGRhdGEucHJvamVjdHMgfHwgW107XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvamVjdHM6JywgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvamVjdChpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgLy8gMS4gVHJ5IE1haW4gQ29sbGVjdGlvblxuICAgIGNvbnN0IG1haW5SZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy8ke2lkfWAsIHsgY2FjaGU6ICduby1zdG9yZScgfSk7XG4gICAgaWYgKG1haW5SZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbWFpblJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGEucHJvamVjdDtcbiAgICB9XG5cbiAgICAvLyAyLiBUcnkgQmVuZXZpdHkgQ29sbGVjdGlvblxuICAgIC8vIE9ubHkgaWYgbWFpbiBmYWlsZWQgKGUuZy4gNDA0KSwgY2hlY2sgQmVuZXZpdHlcbiAgICBjb25zdCBiZW5ldml0eVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAoYmVuZXZpdHlSZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYmVuZXZpdHlSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gICAgfVxuXG4gICAgLy8gMy4gSWYgaGVyZSwgbmVpdGhlciB3b3JrZWRcbiAgICBjb25zb2xlLmVycm9yKGBnZXRQcm9qZWN0OiBGYWlsZWQgdG8gZmluZCBwcm9qZWN0ICR7aWR9IGluIGVpdGhlciBjb2xsZWN0aW9uLmApO1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvamVjdCBub3QgZm91bmQnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfVVJMfS9hcGkvYmVuZXZpdHkvcHJvamVjdHNgIDogYCR7QVBJX1VSTH0vYXBpL3Byb2plY3RzYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgdG8gdXBkYXRlIFVJIGltbWVkaWF0ZWx5XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvamVjdHMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2JlbmV2aXR5Jyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTsgLy8gSWYgb24gaG9tZVxuXG4gICAgcmV0dXJuIGRhdGEucHJvamVjdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvamVjdChpZDogc3RyaW5nLCBwcm9qZWN0RGF0YTogYW55LCBpc0JlbmV2aXR5OiBib29sZWFuID0gZmFsc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBpc0JlbmV2aXR5ID8gYCR7QVBJX1VSTH0vYXBpL2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy8ke2lkfWA7XG4gICAgLy8gRm9yIEJlbmV2aXR5IHJvdXRlcywgd2UgbWlnaHQgbmVlZCBhIGdlbmVyaWMgUFVUIGVuZHBvaW50IGlmIHVzaW5nIC86aWRcbiAgICAvLyBCZW5ldml0eSByb3V0ZXMgY3VycmVudGx5IGRvbid0IGV4cGxpY2l0bHkgbGlzdCBQVVQgLzppZCBidXQgYXNzdW1lIHN0YW5kYXJkIENSVUQuXG4gICAgLy8gSSBuZWVkIHRvIGRvdWJsZSBjaGVjayBiZW5ldml0eS5yb3V0ZXMudHMuLi4gd2FpdCwgSSBkaWRuJ3QgYWRkIFBVVCAvOmlkIHRoZXJlIVxuICAgIC8vIEkgc2hvdWxkIGNoZWNrIGFuZCB1cGRhdGUgYmFja2VuZCBpZiBuZWVkZWQuXG4gICAgXG4gICAgLy8gQXNzdW1pbmcgc3RhbmRhcmQgUkVTVCwgYnV0IGxldCdzIGNoZWNrIGJhY2tlbmQgZmlyc3QuXG4gICAgLy8gV2FpdCwgSSBvbmx5IGFkZGVkIEdFVCwgUE9TVCAoY3JlYXRlKSwgUE9TVCAoc2VlZCksIEdFVCAvOmlkLlxuICAgIC8vIEkgbWlzc2VkIFVwZGF0ZSBhbmQgRGVsZXRlIGluIGJlbmV2aXR5LnJvdXRlcy50cyFcbiAgICBcbiAgICAvLyBJIHdpbGwgcHJvY2VlZCB3aXRoIGZyb250ZW5kIHVwZGF0ZSBhc3N1bWluZyBiYWNrZW5kIHdpbGwgYmUgZml4ZWQgc2hvcnRseS5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwZGF0ZSBmYWlsZWQ6JywgcmVzcG9uc2Uuc3RhdHVzLCBhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcHJvamVjdHMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9iZW5ldml0eScpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvcHJvamVjdHMvJHtpZH1gKTtcblxuICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcHJvamVjdDonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWQ6IHN0cmluZywgaXNCZW5ldml0eTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gaXNCZW5ldml0eSA/IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0cy8ke2lkfWAgOiBgJHtBUElfVVJMfS9hcGkvcHJvamVjdHMvJHtpZH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFUQUlzQix3TEFBQSJ9
}),
"[project]/Official/SbWebsite/client/app/actions/cms/data:a8ebac [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createProject",
    ()=>$$RSC_SERVER_ACTION_2
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60aa0eb5621a561e50a062d75d613a1f94b78cb619":"createProject"},"Official/SbWebsite/client/app/actions/cms/projects.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60aa0eb5621a561e50a062d75d613a1f94b78cb619", __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createProject");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cyhmaWx0ZXI/OiB7IHNob3dPbkJlbmV2aXR5PzogYm9vbGVhbiwgc2hvd09uRmlyc3RGYWNlPzogYm9vbGVhbiwgbW9kZT86ICdhZG1pbicgfCAncHVibGljJyB9KSB7XG4gIHRyeSB7XG4gICAgbGV0IHVybCA9IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy9hZG1pbmA7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgICBpZiAoZmlsdGVyLnNob3dPbkJlbmV2aXR5KSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhZG1pbiBtb2RlIHJlcXVlc3RlZCBmb3IgQmVuZXZpdHlcbiAgICAgICAgICAgIGlmIChmaWx0ZXIubW9kZSA9PT0gJ2FkbWluJykge1xuICAgICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0cy9hZG1pbmA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gTWFpbiBwcm9qZWN0c1xuICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cz9gO1xuICAgICAgICAgICAgIGlmIChmaWx0ZXIuc2hvd09uRmlyc3RGYWNlKSB7XG4gICAgICAgICAgICAgICAgIHVybCArPSBgc2hvd09uRmlyc3RGYWNlPXRydWVgO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdnZXRQcm9qZWN0czogRmV0Y2hpbmcgZnJvbSBVUkw6JywgdXJsKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgY2FjaGU6ICduby1zdG9yZScsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdnZXRQcm9qZWN0czogRmV0Y2ggZmFpbGVkIHdpdGggc3RhdHVzOicsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBwcm9qZWN0cycpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coJ2dldFByb2plY3RzOiBSZWNlaXZlZCBkYXRhIGNvdW50OicsIGRhdGEucHJvamVjdHM/Lmxlbmd0aCk7XG4gICAgcmV0dXJuIGRhdGEucHJvamVjdHMgfHwgW107XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvamVjdHM6JywgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvamVjdChpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgLy8gMS4gVHJ5IE1haW4gQ29sbGVjdGlvblxuICAgIGNvbnN0IG1haW5SZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy8ke2lkfWAsIHsgY2FjaGU6ICduby1zdG9yZScgfSk7XG4gICAgaWYgKG1haW5SZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbWFpblJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGEucHJvamVjdDtcbiAgICB9XG5cbiAgICAvLyAyLiBUcnkgQmVuZXZpdHkgQ29sbGVjdGlvblxuICAgIC8vIE9ubHkgaWYgbWFpbiBmYWlsZWQgKGUuZy4gNDA0KSwgY2hlY2sgQmVuZXZpdHlcbiAgICBjb25zdCBiZW5ldml0eVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAoYmVuZXZpdHlSZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYmVuZXZpdHlSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gICAgfVxuXG4gICAgLy8gMy4gSWYgaGVyZSwgbmVpdGhlciB3b3JrZWRcbiAgICBjb25zb2xlLmVycm9yKGBnZXRQcm9qZWN0OiBGYWlsZWQgdG8gZmluZCBwcm9qZWN0ICR7aWR9IGluIGVpdGhlciBjb2xsZWN0aW9uLmApO1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvamVjdCBub3QgZm91bmQnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfVVJMfS9hcGkvYmVuZXZpdHkvcHJvamVjdHNgIDogYCR7QVBJX1VSTH0vYXBpL3Byb2plY3RzYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgdG8gdXBkYXRlIFVJIGltbWVkaWF0ZWx5XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvamVjdHMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2JlbmV2aXR5Jyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTsgLy8gSWYgb24gaG9tZVxuXG4gICAgcmV0dXJuIGRhdGEucHJvamVjdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvamVjdChpZDogc3RyaW5nLCBwcm9qZWN0RGF0YTogYW55LCBpc0JlbmV2aXR5OiBib29sZWFuID0gZmFsc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBpc0JlbmV2aXR5ID8gYCR7QVBJX1VSTH0vYXBpL2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy8ke2lkfWA7XG4gICAgLy8gRm9yIEJlbmV2aXR5IHJvdXRlcywgd2UgbWlnaHQgbmVlZCBhIGdlbmVyaWMgUFVUIGVuZHBvaW50IGlmIHVzaW5nIC86aWRcbiAgICAvLyBCZW5ldml0eSByb3V0ZXMgY3VycmVudGx5IGRvbid0IGV4cGxpY2l0bHkgbGlzdCBQVVQgLzppZCBidXQgYXNzdW1lIHN0YW5kYXJkIENSVUQuXG4gICAgLy8gSSBuZWVkIHRvIGRvdWJsZSBjaGVjayBiZW5ldml0eS5yb3V0ZXMudHMuLi4gd2FpdCwgSSBkaWRuJ3QgYWRkIFBVVCAvOmlkIHRoZXJlIVxuICAgIC8vIEkgc2hvdWxkIGNoZWNrIGFuZCB1cGRhdGUgYmFja2VuZCBpZiBuZWVkZWQuXG4gICAgXG4gICAgLy8gQXNzdW1pbmcgc3RhbmRhcmQgUkVTVCwgYnV0IGxldCdzIGNoZWNrIGJhY2tlbmQgZmlyc3QuXG4gICAgLy8gV2FpdCwgSSBvbmx5IGFkZGVkIEdFVCwgUE9TVCAoY3JlYXRlKSwgUE9TVCAoc2VlZCksIEdFVCAvOmlkLlxuICAgIC8vIEkgbWlzc2VkIFVwZGF0ZSBhbmQgRGVsZXRlIGluIGJlbmV2aXR5LnJvdXRlcy50cyFcbiAgICBcbiAgICAvLyBJIHdpbGwgcHJvY2VlZCB3aXRoIGZyb250ZW5kIHVwZGF0ZSBhc3N1bWluZyBiYWNrZW5kIHdpbGwgYmUgZml4ZWQgc2hvcnRseS5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwZGF0ZSBmYWlsZWQ6JywgcmVzcG9uc2Uuc3RhdHVzLCBhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcHJvamVjdHMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9iZW5ldml0eScpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvcHJvamVjdHMvJHtpZH1gKTtcblxuICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcHJvamVjdDonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWQ6IHN0cmluZywgaXNCZW5ldml0eTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gaXNCZW5ldml0eSA/IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0cy8ke2lkfWAgOiBgJHtBUElfVVJMfS9hcGkvcHJvamVjdHMvJHtpZH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVUQXdFc0IsMExBQUEifQ==
}),
"[project]/Official/SbWebsite/client/app/actions/cms/data:e57f43 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "updateProject",
    ()=>$$RSC_SERVER_ACTION_3
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"70ec8de4bd180a36f98d47bc35bbc15186253fbf2f":"updateProject"},"Official/SbWebsite/client/app/actions/cms/projects.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("70ec8de4bd180a36f98d47bc35bbc15186253fbf2f", __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateProject");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cyhmaWx0ZXI/OiB7IHNob3dPbkJlbmV2aXR5PzogYm9vbGVhbiwgc2hvd09uRmlyc3RGYWNlPzogYm9vbGVhbiwgbW9kZT86ICdhZG1pbicgfCAncHVibGljJyB9KSB7XG4gIHRyeSB7XG4gICAgbGV0IHVybCA9IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy9hZG1pbmA7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgICBpZiAoZmlsdGVyLnNob3dPbkJlbmV2aXR5KSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhZG1pbiBtb2RlIHJlcXVlc3RlZCBmb3IgQmVuZXZpdHlcbiAgICAgICAgICAgIGlmIChmaWx0ZXIubW9kZSA9PT0gJ2FkbWluJykge1xuICAgICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0cy9hZG1pbmA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gTWFpbiBwcm9qZWN0c1xuICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cz9gO1xuICAgICAgICAgICAgIGlmIChmaWx0ZXIuc2hvd09uRmlyc3RGYWNlKSB7XG4gICAgICAgICAgICAgICAgIHVybCArPSBgc2hvd09uRmlyc3RGYWNlPXRydWVgO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdnZXRQcm9qZWN0czogRmV0Y2hpbmcgZnJvbSBVUkw6JywgdXJsKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgY2FjaGU6ICduby1zdG9yZScsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdnZXRQcm9qZWN0czogRmV0Y2ggZmFpbGVkIHdpdGggc3RhdHVzOicsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBwcm9qZWN0cycpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coJ2dldFByb2plY3RzOiBSZWNlaXZlZCBkYXRhIGNvdW50OicsIGRhdGEucHJvamVjdHM/Lmxlbmd0aCk7XG4gICAgcmV0dXJuIGRhdGEucHJvamVjdHMgfHwgW107XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvamVjdHM6JywgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvamVjdChpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgLy8gMS4gVHJ5IE1haW4gQ29sbGVjdGlvblxuICAgIGNvbnN0IG1haW5SZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy8ke2lkfWAsIHsgY2FjaGU6ICduby1zdG9yZScgfSk7XG4gICAgaWYgKG1haW5SZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbWFpblJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGEucHJvamVjdDtcbiAgICB9XG5cbiAgICAvLyAyLiBUcnkgQmVuZXZpdHkgQ29sbGVjdGlvblxuICAgIC8vIE9ubHkgaWYgbWFpbiBmYWlsZWQgKGUuZy4gNDA0KSwgY2hlY2sgQmVuZXZpdHlcbiAgICBjb25zdCBiZW5ldml0eVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAoYmVuZXZpdHlSZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYmVuZXZpdHlSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gICAgfVxuXG4gICAgLy8gMy4gSWYgaGVyZSwgbmVpdGhlciB3b3JrZWRcbiAgICBjb25zb2xlLmVycm9yKGBnZXRQcm9qZWN0OiBGYWlsZWQgdG8gZmluZCBwcm9qZWN0ICR7aWR9IGluIGVpdGhlciBjb2xsZWN0aW9uLmApO1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvamVjdCBub3QgZm91bmQnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfVVJMfS9hcGkvYmVuZXZpdHkvcHJvamVjdHNgIDogYCR7QVBJX1VSTH0vYXBpL3Byb2plY3RzYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgdG8gdXBkYXRlIFVJIGltbWVkaWF0ZWx5XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvamVjdHMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2JlbmV2aXR5Jyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTsgLy8gSWYgb24gaG9tZVxuXG4gICAgcmV0dXJuIGRhdGEucHJvamVjdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvamVjdChpZDogc3RyaW5nLCBwcm9qZWN0RGF0YTogYW55LCBpc0JlbmV2aXR5OiBib29sZWFuID0gZmFsc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBpc0JlbmV2aXR5ID8gYCR7QVBJX1VSTH0vYXBpL2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy8ke2lkfWA7XG4gICAgLy8gRm9yIEJlbmV2aXR5IHJvdXRlcywgd2UgbWlnaHQgbmVlZCBhIGdlbmVyaWMgUFVUIGVuZHBvaW50IGlmIHVzaW5nIC86aWRcbiAgICAvLyBCZW5ldml0eSByb3V0ZXMgY3VycmVudGx5IGRvbid0IGV4cGxpY2l0bHkgbGlzdCBQVVQgLzppZCBidXQgYXNzdW1lIHN0YW5kYXJkIENSVUQuXG4gICAgLy8gSSBuZWVkIHRvIGRvdWJsZSBjaGVjayBiZW5ldml0eS5yb3V0ZXMudHMuLi4gd2FpdCwgSSBkaWRuJ3QgYWRkIFBVVCAvOmlkIHRoZXJlIVxuICAgIC8vIEkgc2hvdWxkIGNoZWNrIGFuZCB1cGRhdGUgYmFja2VuZCBpZiBuZWVkZWQuXG4gICAgXG4gICAgLy8gQXNzdW1pbmcgc3RhbmRhcmQgUkVTVCwgYnV0IGxldCdzIGNoZWNrIGJhY2tlbmQgZmlyc3QuXG4gICAgLy8gV2FpdCwgSSBvbmx5IGFkZGVkIEdFVCwgUE9TVCAoY3JlYXRlKSwgUE9TVCAoc2VlZCksIEdFVCAvOmlkLlxuICAgIC8vIEkgbWlzc2VkIFVwZGF0ZSBhbmQgRGVsZXRlIGluIGJlbmV2aXR5LnJvdXRlcy50cyFcbiAgICBcbiAgICAvLyBJIHdpbGwgcHJvY2VlZCB3aXRoIGZyb250ZW5kIHVwZGF0ZSBhc3N1bWluZyBiYWNrZW5kIHdpbGwgYmUgZml4ZWQgc2hvcnRseS5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwZGF0ZSBmYWlsZWQ6JywgcmVzcG9uc2Uuc3RhdHVzLCBhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcHJvamVjdHMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9iZW5ldml0eScpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvcHJvamVjdHMvJHtpZH1gKTtcblxuICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcHJvamVjdDonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWQ6IHN0cmluZywgaXNCZW5ldml0eTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gaXNCZW5ldml0eSA/IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0cy8ke2lkfWAgOiBgJHtBUElfVVJMfS9hcGkvcHJvamVjdHMvJHtpZH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVUQXNHc0IsMExBQUEifQ==
}),
"[project]/Official/SbWebsite/client/app/actions/cms/data:c04fa0 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deleteProject",
    ()=>$$RSC_SERVER_ACTION_4
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
/* __next_internal_action_entry_do_not_use__ [{"60ffeae8b5dc590ed43163967b5ee0f8cd35297d21":"deleteProject"},"Official/SbWebsite/client/app/actions/cms/projects.ts",""] */ "use turbopack no side effects";
;
const $$RSC_SERVER_ACTION_4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60ffeae8b5dc590ed43163967b5ee0f8cd35297d21", __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteProject");
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5jb25zdCBBUElfVVJMID0gJ2h0dHA6Ly8xMjcuMC4wLjE6NTAwMSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cyhmaWx0ZXI/OiB7IHNob3dPbkJlbmV2aXR5PzogYm9vbGVhbiwgc2hvd09uRmlyc3RGYWNlPzogYm9vbGVhbiwgbW9kZT86ICdhZG1pbicgfCAncHVibGljJyB9KSB7XG4gIHRyeSB7XG4gICAgbGV0IHVybCA9IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy9hZG1pbmA7XG4gICAgaWYgKGZpbHRlcikge1xuICAgICAgICBpZiAoZmlsdGVyLnNob3dPbkJlbmV2aXR5KSB7XG4gICAgICAgICAgICAvLyBDaGVjayBpZiBhZG1pbiBtb2RlIHJlcXVlc3RlZCBmb3IgQmVuZXZpdHlcbiAgICAgICAgICAgIGlmIChmaWx0ZXIubW9kZSA9PT0gJ2FkbWluJykge1xuICAgICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0cy9hZG1pbmA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gTWFpbiBwcm9qZWN0c1xuICAgICAgICAgICAgIHVybCA9IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cz9gO1xuICAgICAgICAgICAgIGlmIChmaWx0ZXIuc2hvd09uRmlyc3RGYWNlKSB7XG4gICAgICAgICAgICAgICAgIHVybCArPSBgc2hvd09uRmlyc3RGYWNlPXRydWVgO1xuICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKCdnZXRQcm9qZWN0czogRmV0Y2hpbmcgZnJvbSBVUkw6JywgdXJsKTtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgY2FjaGU6ICduby1zdG9yZScsXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdnZXRQcm9qZWN0czogRmV0Y2ggZmFpbGVkIHdpdGggc3RhdHVzOicsIHJlc3BvbnNlLnN0YXR1cyk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBmZXRjaCBwcm9qZWN0cycpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2coJ2dldFByb2plY3RzOiBSZWNlaXZlZCBkYXRhIGNvdW50OicsIGRhdGEucHJvamVjdHM/Lmxlbmd0aCk7XG4gICAgcmV0dXJuIGRhdGEucHJvamVjdHMgfHwgW107XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgcHJvamVjdHM6JywgZXJyb3IpO1xuICAgIHJldHVybiBbXTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvamVjdChpZDogc3RyaW5nKSB7XG4gIHRyeSB7XG4gICAgLy8gMS4gVHJ5IE1haW4gQ29sbGVjdGlvblxuICAgIGNvbnN0IG1haW5SZXNwb25zZSA9IGF3YWl0IGZldGNoKGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy8ke2lkfWAsIHsgY2FjaGU6ICduby1zdG9yZScgfSk7XG4gICAgaWYgKG1haW5SZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgbWFpblJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIGRhdGEucHJvamVjdDtcbiAgICB9XG5cbiAgICAvLyAyLiBUcnkgQmVuZXZpdHkgQ29sbGVjdGlvblxuICAgIC8vIE9ubHkgaWYgbWFpbiBmYWlsZWQgKGUuZy4gNDA0KSwgY2hlY2sgQmVuZXZpdHlcbiAgICBjb25zdCBiZW5ldml0eVJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYCR7QVBJX1VSTH0vYXBpL2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAoYmVuZXZpdHlSZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYmVuZXZpdHlSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gICAgfVxuXG4gICAgLy8gMy4gSWYgaGVyZSwgbmVpdGhlciB3b3JrZWRcbiAgICBjb25zb2xlLmVycm9yKGBnZXRQcm9qZWN0OiBGYWlsZWQgdG8gZmluZCBwcm9qZWN0ICR7aWR9IGluIGVpdGhlciBjb2xsZWN0aW9uLmApO1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvamVjdCBub3QgZm91bmQnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfVVJMfS9hcGkvYmVuZXZpdHkvcHJvamVjdHNgIDogYCR7QVBJX1VSTH0vYXBpL3Byb2plY3RzYDtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gY3JlYXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIC8vIFJldmFsaWRhdGUgcGF0aHMgdG8gdXBkYXRlIFVJIGltbWVkaWF0ZWx5XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9hZG1pbi9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvcHJvamVjdHMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL2JlbmV2aXR5Jyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy8nKTsgLy8gSWYgb24gaG9tZVxuXG4gICAgcmV0dXJuIGRhdGEucHJvamVjdDtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjcmVhdGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUHJvamVjdChpZDogc3RyaW5nLCBwcm9qZWN0RGF0YTogYW55LCBpc0JlbmV2aXR5OiBib29sZWFuID0gZmFsc2UpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCB1cmwgPSBpc0JlbmV2aXR5ID8gYCR7QVBJX1VSTH0vYXBpL2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9VUkx9L2FwaS9wcm9qZWN0cy8ke2lkfWA7XG4gICAgLy8gRm9yIEJlbmV2aXR5IHJvdXRlcywgd2UgbWlnaHQgbmVlZCBhIGdlbmVyaWMgUFVUIGVuZHBvaW50IGlmIHVzaW5nIC86aWRcbiAgICAvLyBCZW5ldml0eSByb3V0ZXMgY3VycmVudGx5IGRvbid0IGV4cGxpY2l0bHkgbGlzdCBQVVQgLzppZCBidXQgYXNzdW1lIHN0YW5kYXJkIENSVUQuXG4gICAgLy8gSSBuZWVkIHRvIGRvdWJsZSBjaGVjayBiZW5ldml0eS5yb3V0ZXMudHMuLi4gd2FpdCwgSSBkaWRuJ3QgYWRkIFBVVCAvOmlkIHRoZXJlIVxuICAgIC8vIEkgc2hvdWxkIGNoZWNrIGFuZCB1cGRhdGUgYmFja2VuZCBpZiBuZWVkZWQuXG4gICAgXG4gICAgLy8gQXNzdW1pbmcgc3RhbmRhcmQgUkVTVCwgYnV0IGxldCdzIGNoZWNrIGJhY2tlbmQgZmlyc3QuXG4gICAgLy8gV2FpdCwgSSBvbmx5IGFkZGVkIEdFVCwgUE9TVCAoY3JlYXRlKSwgUE9TVCAoc2VlZCksIEdFVCAvOmlkLlxuICAgIC8vIEkgbWlzc2VkIFVwZGF0ZSBhbmQgRGVsZXRlIGluIGJlbmV2aXR5LnJvdXRlcy50cyFcbiAgICBcbiAgICAvLyBJIHdpbGwgcHJvY2VlZCB3aXRoIGZyb250ZW5kIHVwZGF0ZSBhc3N1bWluZyBiYWNrZW5kIHdpbGwgYmUgZml4ZWQgc2hvcnRseS5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHVybCwge1xuICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VwZGF0ZSBmYWlsZWQ6JywgcmVzcG9uc2Uuc3RhdHVzLCBhd2FpdCByZXNwb25zZS50ZXh0KCkpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gdXBkYXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIFxuICAgIHJldmFsaWRhdGVQYXRoKCcvYWRtaW4vcHJvamVjdHMnKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9iZW5ldml0eScpO1xuICAgIHJldmFsaWRhdGVQYXRoKGAvcHJvamVjdHMvJHtpZH1gKTtcblxuICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcignRXJyb3IgdXBkYXRpbmcgcHJvamVjdDonLCBlcnJvcik7XG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QoaWQ6IHN0cmluZywgaXNCZW5ldml0eTogYm9vbGVhbiA9IGZhbHNlKSB7XG4gIHRyeSB7XG4gICAgY29uc3QgdXJsID0gaXNCZW5ldml0eSA/IGAke0FQSV9VUkx9L2FwaS9iZW5ldml0eS9wcm9qZWN0cy8ke2lkfWAgOiBgJHtBUElfVVJMfS9hcGkvcHJvamVjdHMvJHtpZH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVUQThJc0IsMExBQUEifQ==
}),
"[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProjectsAdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$components$2f$admin$2f$ProjectForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$539692__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/data:539692 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$a8ebac__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/data:a8ebac [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$e57f43__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/data:e57f43 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$c04fa0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/data:c04fa0 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function ProjectsAdminPage() {
    _s();
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProject, setEditingProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsAdminPage.useEffect": ()=>{
            fetchProjects();
        }
    }["ProjectsAdminPage.useEffect"], []);
    const fetchProjects = async ()=>{
        try {
            setLoading(true);
            // Hardcode showOnBenevity: false for Main
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$539692__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProjects"])({
                mode: 'admin',
                showOnBenevity: false
            });
            setProjects(data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching projects:', error);
            setLoading(false);
        }
    };
    const handleSave = async (data)=>{
        try {
            // Force Benevity off
            data.showOnBenevity = false;
            if (editingProject) {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$e57f43__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProject"])(editingProject._id, data, false);
            } else {
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$a8ebac__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProject"])(data, false);
            }
            setShowForm(false);
            setEditingProject(null);
            fetchProjects();
        } catch (error) {
            console.error('Error saving project:', error);
            alert('Failed to save project');
        }
    };
    const handleEdit = (project)=>{
        setEditingProject(project);
        setShowForm(true);
    };
    const handleDelete = async (id)=>{
        if (!confirm('Are you sure you want to delete this project?')) return;
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$c04fa0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProject"])(id, false);
            fetchProjects();
        } catch (error) {
            console.error('Error deleting project:', error);
            alert('Failed to delete project');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-8",
        children: [
            showForm && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$components$2f$admin$2f$ProjectForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                project: editingProject,
                onClose: ()=>{
                    setShowForm(false);
                    setEditingProject(null);
                },
                onSave: handleSave
            }, void 0, false, {
                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                lineNumber: 84,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "text-3xl font-bold text-gray-900",
                                children: "Featured Projects"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600 mt-1",
                                children: "Manage community programs, special initiatives & campaigns for the Official Website."
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                        lineNumber: 95,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowForm(true),
                        className: "bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                lineNumber: 103,
                                columnNumber: 11
                            }, this),
                            "Add New Project"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                lineNumber: 94,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-semibold text-blue-900 mb-2",
                        children: "CMS Controls"
                    }, void 0, false, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                        lineNumber: 110,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "text-sm text-blue-800 space-y-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• Projects display based on ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Priority"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 112,
                                        columnNumber: 43
                                    }, this),
                                    " (higher first)"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                lineNumber: 112,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• Only ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Active"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 22
                                    }, this),
                                    " projects within ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Start/Expiry dates"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 113,
                                        columnNumber: 62
                                    }, this),
                                    " are shown"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                lineNumber: 113,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "First Face"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 114,
                                        columnNumber: 17
                                    }, this),
                                    ": Shows above the fold on homepage"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                lineNumber: 114,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: [
                                    "• ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Second Face"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 115,
                                        columnNumber: 17
                                    }, this),
                                    ": Shows below the fold on homepage"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: "• Upload featured image + gallery images for each project"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                        lineNumber: 111,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                lineNumber: 109,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-full text-center py-12 text-gray-500",
                    children: "Loading projects..."
                }, void 0, false, {
                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                    lineNumber: 123,
                    columnNumber: 11
                }, this) : projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "col-span-full text-center py-12 text-gray-500",
                    children: 'No projects found. Click "Add New Project" to create one.'
                }, void 0, false, {
                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, this) : projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative h-48 bg-gray-200",
                                children: [
                                    project.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: project.featuredImage,
                                        alt: project.projectName,
                                        className: "w-full h-full object-cover"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 136,
                                        columnNumber: 19
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-full h-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                            className: "w-12 h-12 text-gray-400"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                            lineNumber: 139,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 138,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 right-2 flex gap-2",
                                        children: [
                                            project.showOnFirstFace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-green-500 text-white text-xs px-2 py-1 rounded",
                                                children: "1st Face"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                lineNumber: 144,
                                                columnNumber: 21
                                            }, this),
                                            project.showOnSecondFace && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-blue-500 text-white text-xs px-2 py-1 rounded",
                                                children: "2nd Face"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                lineNumber: 147,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 142,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 left-2",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "bg-primary text-white text-xs px-2 py-1 rounded font-semibold",
                                            children: [
                                                "Priority: ",
                                                project.priority
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                            lineNumber: 151,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 150,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                lineNumber: 134,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "font-semibold text-lg text-gray-900 mb-2",
                                        children: project.projectName
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 159,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mb-4 line-clamp-2",
                                        children: project.shortDescription
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 160,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center justify-between text-xs text-gray-500 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: project.isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1 text-green-600 font-medium",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                            lineNumber: 167,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Active"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                    lineNumber: 166,
                                                    columnNumber: 23
                                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "flex items-center gap-1 text-gray-400",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                            className: "w-3 h-3"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 25
                                                        }, this),
                                                        "Inactive"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                lineNumber: 164,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-right",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: new Date(project.startDate).toLocaleDateString()
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                        lineNumber: 178,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            "to ",
                                                            new Date(project.expiryDate).toLocaleDateString()
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                        lineNumber: 179,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                lineNumber: 177,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 163,
                                        columnNumber: 17
                                    }, this),
                                    project.gallery && project.gallery.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "text-xs text-gray-500 mb-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                className: "w-3 h-3 inline mr-1"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                lineNumber: 186,
                                                columnNumber: 21
                                            }, this),
                                            project.gallery.length,
                                            " images in gallery"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 185,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleEdit(project),
                                                className: "flex-1 bg-blue-50 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-100 flex items-center justify-center gap-2 transition-colors",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                        lineNumber: 197,
                                                        columnNumber: 21
                                                    }, this),
                                                    "Edit"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>handleDelete(project._id),
                                                className: "bg-red-50 text-red-600 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                    lineNumber: 204,
                                                    columnNumber: 21
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                                lineNumber: 200,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                                lineNumber: 158,
                                columnNumber: 15
                            }, this)
                        ]
                    }, project._id, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                        lineNumber: 132,
                        columnNumber: 13
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/projects/page.tsx",
        lineNumber: 82,
        columnNumber: 5
    }, this);
}
_s(ProjectsAdminPage, "66xwcgBgY/+xG93BWXPAmyCnzpQ=");
_c = ProjectsAdminPage;
var _c;
__turbopack_context__.k.register(_c, "ProjectsAdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Official_SbWebsite_client_697eb163._.js.map