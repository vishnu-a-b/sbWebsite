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
        showOnBenevity: project?.showOnBenevity || false,
        link: project?.link || ''
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
                            lineNumber: 100,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                lineNumber: 104,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 103,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                    lineNumber: 99,
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
                                            lineNumber: 113,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 112,
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
                                    lineNumber: 115,
                                    columnNumber: 13
                                }, this),
                                errors.projectName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: errors.projectName
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 124,
                                    columnNumber: 36
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 111,
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
                                            lineNumber: 130,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 129,
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
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this),
                                errors.shortDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: errors.shortDescription
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 141,
                                    columnNumber: 41
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 128,
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
                                            lineNumber: 147,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 146,
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
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                errors.fullDescription && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: errors.fullDescription
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 158,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 145,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "bg-blue-50/50 p-4 rounded-lg border border-blue-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-bold text-primary mb-2",
                                    children: "Support Link / Benevity URL"
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 163,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "url",
                                    value: formData.link,
                                    onChange: (e)=>handleChange('link', e.target.value),
                                    className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary bg-white",
                                    placeholder: "https://causes.benevity.org/..."
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 166,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-[11px] text-blue-600 mt-2 font-medium",
                                    children: 'Optional: If you provide a direct link to this project on Benevity, the website\'s "Support" button will go there.'
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 173,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 162,
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
                                            lineNumber: 181,
                                            columnNumber: 32
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 180,
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
                                                    lineNumber: 186,
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
                                                        lineNumber: 192,
                                                        columnNumber: 26
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                    lineNumber: 187,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 185,
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
                                                lineNumber: 197,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 196,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 183,
                                    columnNumber: 15
                                }, this),
                                errors.featuredImage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-red-500 text-sm mt-1",
                                    children: errors.featuredImage
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 206,
                                    columnNumber: 40
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 179,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-semibold text-gray-700 mb-2",
                                    children: "Gallery Images"
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 211,
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
                                                            lineNumber: 218,
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
                                                                lineNumber: 224,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                            lineNumber: 219,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, index, true, {
                                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                                    lineNumber: 217,
                                                    columnNumber: 19
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 215,
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
                                                    lineNumber: 231,
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
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 230,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 214,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 210,
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
                                            lineNumber: 251,
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
                                            lineNumber: 252,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 250,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 261,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: formData.startDate,
                                            onChange: (e)=>handleChange('startDate', e.target.value),
                                            className: "w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 262,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 260,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-semibold text-gray-700 mb-2",
                                            children: "Expiry Date"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 270,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: formData.expiryDate,
                                            onChange: (e)=>handleChange('expiryDate', e.target.value),
                                            className: `w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent ${errors.expiryDate ? 'border-red-500' : 'border-gray-300'}`
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 271,
                                            columnNumber: 15
                                        }, this),
                                        errors.expiryDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-red-500 text-sm mt-1",
                                            children: errors.expiryDate
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 279,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 269,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 249,
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
                                            lineNumber: 286,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: "Active"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 292,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 285,
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
                                            lineNumber: 295,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: "Show on First Face (Above Fold)"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 301,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 294,
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
                                            lineNumber: 304,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: "Show on Second Face (Below Fold)"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 310,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 303,
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
                                            lineNumber: 313,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "font-semibold text-gray-900",
                                            children: "Show on Benevity Page"
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                            lineNumber: 319,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 312,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 284,
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
                                    lineNumber: 325,
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
                                            lineNumber: 336,
                                            columnNumber: 15
                                        }, this),
                                        project ? 'Update Project' : 'Create Project'
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                                    lineNumber: 332,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                            lineNumber: 324,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
            lineNumber: 97,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx",
        lineNumber: 96,
        columnNumber: 5
    }, this);
}
_s(ProjectForm, "glSfxUDQXL1PggXfF6DvNW0UR74=");
_c = ProjectForm;
var _c;
__turbopack_context__.k.register(_c, "ProjectForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Official/SbWebsite/client/app/actions/cms/data:da90ae [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgQVBJX0JBU0VfVVJMIGZyb20gJ0AvbGliL2FwaSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cyhmaWx0ZXI/OiB7IHNob3dPbkJlbmV2aXR5PzogYm9vbGVhbiwgc2hvd09uRmlyc3RGYWNlPzogYm9vbGVhbiwgbW9kZT86ICdhZG1pbicgfCAncHVibGljJyB9KSB7XG4gIHRyeSB7XG4gICAgbGV0IHVybCA9IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvYWRtaW5gO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgaWYgKGZpbHRlci5zaG93T25CZW5ldml0eSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYWRtaW4gbW9kZSByZXF1ZXN0ZWQgZm9yIEJlbmV2aXR5XG4gICAgICAgICAgICBpZiAoZmlsdGVyLm1vZGUgPT09ICdhZG1pbicpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzL2FkbWluYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gYCR7QVBJX0JBU0VfVVJMfS9iZW5ldml0eS9wcm9qZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gTWFpbiBwcm9qZWN0c1xuICAgICAgICAgICAgIHVybCA9IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHM/YDtcbiAgICAgICAgICAgICBpZiAoZmlsdGVyLnNob3dPbkZpcnN0RmFjZSkge1xuICAgICAgICAgICAgICAgICB1cmwgKz0gYHNob3dPbkZpcnN0RmFjZT10cnVlYDtcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnZ2V0UHJvamVjdHM6IEZldGNoaW5nIGZyb20gVVJMOicsIHVybCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc29sZS5lcnJvcignZ2V0UHJvamVjdHM6IEZldGNoIGZhaWxlZCB3aXRoIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcHJvamVjdHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKCdnZXRQcm9qZWN0czogUmVjZWl2ZWQgZGF0YSBjb3VudDonLCBkYXRhLnByb2plY3RzPy5sZW5ndGgpO1xuICAgIHJldHVybiBkYXRhLnByb2plY3RzIHx8IFtdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2plY3RzOicsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3QoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIC8vIDEuIFRyeSBNYWluIENvbGxlY3Rpb25cbiAgICBjb25zdCBtYWluUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAobWFpblJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtYWluUmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICAgIH1cblxuICAgIC8vIDIuIFRyeSBCZW5ldml0eSBDb2xsZWN0aW9uXG4gICAgLy8gT25seSBpZiBtYWluIGZhaWxlZCAoZS5nLiA0MDQpLCBjaGVjayBCZW5ldml0eVxuICAgIGNvbnN0IGJlbmV2aXR5UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAoYmVuZXZpdHlSZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYmVuZXZpdHlSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gICAgfVxuXG4gICAgLy8gMy4gSWYgaGVyZSwgbmVpdGhlciB3b3JrZWRcbiAgICBjb25zb2xlLmVycm9yKGBnZXRQcm9qZWN0OiBGYWlsZWQgdG8gZmluZCBwcm9qZWN0ICR7aWR9IGluIGVpdGhlciBjb2xsZWN0aW9uLmApO1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvamVjdCBub3QgZm91bmQnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzYCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHNgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcHJvamVjdCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyB0byB1cGRhdGUgVUkgaW1tZWRpYXRlbHlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpOyAvLyBJZiBvbiBob21lXG5cbiAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KGlkOiBzdHJpbmcsIHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvJHtpZH1gO1xuICAgIC8vIEZvciBCZW5ldml0eSByb3V0ZXMsIHdlIG1pZ2h0IG5lZWQgYSBnZW5lcmljIFBVVCBlbmRwb2ludCBpZiB1c2luZyAvOmlkXG4gICAgLy8gQmVuZXZpdHkgcm91dGVzIGN1cnJlbnRseSBkb24ndCBleHBsaWNpdGx5IGxpc3QgUFVUIC86aWQgYnV0IGFzc3VtZSBzdGFuZGFyZCBDUlVELlxuICAgIC8vIEkgbmVlZCB0byBkb3VibGUgY2hlY2sgYmVuZXZpdHkucm91dGVzLnRzLi4uIHdhaXQsIEkgZGlkbid0IGFkZCBQVVQgLzppZCB0aGVyZSFcbiAgICAvLyBJIHNob3VsZCBjaGVjayBhbmQgdXBkYXRlIGJhY2tlbmQgaWYgbmVlZGVkLlxuICAgIFxuICAgIC8vIEFzc3VtaW5nIHN0YW5kYXJkIFJFU1QsIGJ1dCBsZXQncyBjaGVjayBiYWNrZW5kIGZpcnN0LlxuICAgIC8vIFdhaXQsIEkgb25seSBhZGRlZCBHRVQsIFBPU1QgKGNyZWF0ZSksIFBPU1QgKHNlZWQpLCBHRVQgLzppZC5cbiAgICAvLyBJIG1pc3NlZCBVcGRhdGUgYW5kIERlbGV0ZSBpbiBiZW5ldml0eS5yb3V0ZXMudHMhXG4gICAgXG4gICAgLy8gSSB3aWxsIHByb2NlZWQgd2l0aCBmcm9udGVuZCB1cGRhdGUgYXNzdW1pbmcgYmFja2VuZCB3aWxsIGJlIGZpeGVkIHNob3J0bHkuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdVcGRhdGUgZmFpbGVkOicsIHJlc3BvbnNlLnN0YXR1cywgYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBwcm9qZWN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7aWR9YCk7XG5cbiAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkOiBzdHJpbmcsIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvJHtpZH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InFUQUlzQix3TEFBQSJ9
}),
"[project]/Official/SbWebsite/client/app/actions/cms/data:fb04f3 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgQVBJX0JBU0VfVVJMIGZyb20gJ0AvbGliL2FwaSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cyhmaWx0ZXI/OiB7IHNob3dPbkJlbmV2aXR5PzogYm9vbGVhbiwgc2hvd09uRmlyc3RGYWNlPzogYm9vbGVhbiwgbW9kZT86ICdhZG1pbicgfCAncHVibGljJyB9KSB7XG4gIHRyeSB7XG4gICAgbGV0IHVybCA9IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvYWRtaW5gO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgaWYgKGZpbHRlci5zaG93T25CZW5ldml0eSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYWRtaW4gbW9kZSByZXF1ZXN0ZWQgZm9yIEJlbmV2aXR5XG4gICAgICAgICAgICBpZiAoZmlsdGVyLm1vZGUgPT09ICdhZG1pbicpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzL2FkbWluYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gYCR7QVBJX0JBU0VfVVJMfS9iZW5ldml0eS9wcm9qZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gTWFpbiBwcm9qZWN0c1xuICAgICAgICAgICAgIHVybCA9IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHM/YDtcbiAgICAgICAgICAgICBpZiAoZmlsdGVyLnNob3dPbkZpcnN0RmFjZSkge1xuICAgICAgICAgICAgICAgICB1cmwgKz0gYHNob3dPbkZpcnN0RmFjZT10cnVlYDtcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnZ2V0UHJvamVjdHM6IEZldGNoaW5nIGZyb20gVVJMOicsIHVybCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc29sZS5lcnJvcignZ2V0UHJvamVjdHM6IEZldGNoIGZhaWxlZCB3aXRoIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcHJvamVjdHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKCdnZXRQcm9qZWN0czogUmVjZWl2ZWQgZGF0YSBjb3VudDonLCBkYXRhLnByb2plY3RzPy5sZW5ndGgpO1xuICAgIHJldHVybiBkYXRhLnByb2plY3RzIHx8IFtdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2plY3RzOicsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3QoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIC8vIDEuIFRyeSBNYWluIENvbGxlY3Rpb25cbiAgICBjb25zdCBtYWluUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAobWFpblJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtYWluUmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICAgIH1cblxuICAgIC8vIDIuIFRyeSBCZW5ldml0eSBDb2xsZWN0aW9uXG4gICAgLy8gT25seSBpZiBtYWluIGZhaWxlZCAoZS5nLiA0MDQpLCBjaGVjayBCZW5ldml0eVxuICAgIGNvbnN0IGJlbmV2aXR5UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAoYmVuZXZpdHlSZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYmVuZXZpdHlSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gICAgfVxuXG4gICAgLy8gMy4gSWYgaGVyZSwgbmVpdGhlciB3b3JrZWRcbiAgICBjb25zb2xlLmVycm9yKGBnZXRQcm9qZWN0OiBGYWlsZWQgdG8gZmluZCBwcm9qZWN0ICR7aWR9IGluIGVpdGhlciBjb2xsZWN0aW9uLmApO1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvamVjdCBub3QgZm91bmQnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzYCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHNgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcHJvamVjdCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyB0byB1cGRhdGUgVUkgaW1tZWRpYXRlbHlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpOyAvLyBJZiBvbiBob21lXG5cbiAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KGlkOiBzdHJpbmcsIHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvJHtpZH1gO1xuICAgIC8vIEZvciBCZW5ldml0eSByb3V0ZXMsIHdlIG1pZ2h0IG5lZWQgYSBnZW5lcmljIFBVVCBlbmRwb2ludCBpZiB1c2luZyAvOmlkXG4gICAgLy8gQmVuZXZpdHkgcm91dGVzIGN1cnJlbnRseSBkb24ndCBleHBsaWNpdGx5IGxpc3QgUFVUIC86aWQgYnV0IGFzc3VtZSBzdGFuZGFyZCBDUlVELlxuICAgIC8vIEkgbmVlZCB0byBkb3VibGUgY2hlY2sgYmVuZXZpdHkucm91dGVzLnRzLi4uIHdhaXQsIEkgZGlkbid0IGFkZCBQVVQgLzppZCB0aGVyZSFcbiAgICAvLyBJIHNob3VsZCBjaGVjayBhbmQgdXBkYXRlIGJhY2tlbmQgaWYgbmVlZGVkLlxuICAgIFxuICAgIC8vIEFzc3VtaW5nIHN0YW5kYXJkIFJFU1QsIGJ1dCBsZXQncyBjaGVjayBiYWNrZW5kIGZpcnN0LlxuICAgIC8vIFdhaXQsIEkgb25seSBhZGRlZCBHRVQsIFBPU1QgKGNyZWF0ZSksIFBPU1QgKHNlZWQpLCBHRVQgLzppZC5cbiAgICAvLyBJIG1pc3NlZCBVcGRhdGUgYW5kIERlbGV0ZSBpbiBiZW5ldml0eS5yb3V0ZXMudHMhXG4gICAgXG4gICAgLy8gSSB3aWxsIHByb2NlZWQgd2l0aCBmcm9udGVuZCB1cGRhdGUgYXNzdW1pbmcgYmFja2VuZCB3aWxsIGJlIGZpeGVkIHNob3J0bHkuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdVcGRhdGUgZmFpbGVkOicsIHJlc3BvbnNlLnN0YXR1cywgYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBwcm9qZWN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7aWR9YCk7XG5cbiAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkOiBzdHJpbmcsIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvJHtpZH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVUQXdFc0IsMExBQUEifQ==
}),
"[project]/Official/SbWebsite/client/app/actions/cms/data:f5508f [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgQVBJX0JBU0VfVVJMIGZyb20gJ0AvbGliL2FwaSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cyhmaWx0ZXI/OiB7IHNob3dPbkJlbmV2aXR5PzogYm9vbGVhbiwgc2hvd09uRmlyc3RGYWNlPzogYm9vbGVhbiwgbW9kZT86ICdhZG1pbicgfCAncHVibGljJyB9KSB7XG4gIHRyeSB7XG4gICAgbGV0IHVybCA9IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvYWRtaW5gO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgaWYgKGZpbHRlci5zaG93T25CZW5ldml0eSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYWRtaW4gbW9kZSByZXF1ZXN0ZWQgZm9yIEJlbmV2aXR5XG4gICAgICAgICAgICBpZiAoZmlsdGVyLm1vZGUgPT09ICdhZG1pbicpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzL2FkbWluYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gYCR7QVBJX0JBU0VfVVJMfS9iZW5ldml0eS9wcm9qZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gTWFpbiBwcm9qZWN0c1xuICAgICAgICAgICAgIHVybCA9IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHM/YDtcbiAgICAgICAgICAgICBpZiAoZmlsdGVyLnNob3dPbkZpcnN0RmFjZSkge1xuICAgICAgICAgICAgICAgICB1cmwgKz0gYHNob3dPbkZpcnN0RmFjZT10cnVlYDtcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnZ2V0UHJvamVjdHM6IEZldGNoaW5nIGZyb20gVVJMOicsIHVybCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc29sZS5lcnJvcignZ2V0UHJvamVjdHM6IEZldGNoIGZhaWxlZCB3aXRoIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcHJvamVjdHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKCdnZXRQcm9qZWN0czogUmVjZWl2ZWQgZGF0YSBjb3VudDonLCBkYXRhLnByb2plY3RzPy5sZW5ndGgpO1xuICAgIHJldHVybiBkYXRhLnByb2plY3RzIHx8IFtdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2plY3RzOicsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3QoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIC8vIDEuIFRyeSBNYWluIENvbGxlY3Rpb25cbiAgICBjb25zdCBtYWluUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAobWFpblJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtYWluUmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICAgIH1cblxuICAgIC8vIDIuIFRyeSBCZW5ldml0eSBDb2xsZWN0aW9uXG4gICAgLy8gT25seSBpZiBtYWluIGZhaWxlZCAoZS5nLiA0MDQpLCBjaGVjayBCZW5ldml0eVxuICAgIGNvbnN0IGJlbmV2aXR5UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAoYmVuZXZpdHlSZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYmVuZXZpdHlSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gICAgfVxuXG4gICAgLy8gMy4gSWYgaGVyZSwgbmVpdGhlciB3b3JrZWRcbiAgICBjb25zb2xlLmVycm9yKGBnZXRQcm9qZWN0OiBGYWlsZWQgdG8gZmluZCBwcm9qZWN0ICR7aWR9IGluIGVpdGhlciBjb2xsZWN0aW9uLmApO1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvamVjdCBub3QgZm91bmQnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzYCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHNgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcHJvamVjdCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyB0byB1cGRhdGUgVUkgaW1tZWRpYXRlbHlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpOyAvLyBJZiBvbiBob21lXG5cbiAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KGlkOiBzdHJpbmcsIHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvJHtpZH1gO1xuICAgIC8vIEZvciBCZW5ldml0eSByb3V0ZXMsIHdlIG1pZ2h0IG5lZWQgYSBnZW5lcmljIFBVVCBlbmRwb2ludCBpZiB1c2luZyAvOmlkXG4gICAgLy8gQmVuZXZpdHkgcm91dGVzIGN1cnJlbnRseSBkb24ndCBleHBsaWNpdGx5IGxpc3QgUFVUIC86aWQgYnV0IGFzc3VtZSBzdGFuZGFyZCBDUlVELlxuICAgIC8vIEkgbmVlZCB0byBkb3VibGUgY2hlY2sgYmVuZXZpdHkucm91dGVzLnRzLi4uIHdhaXQsIEkgZGlkbid0IGFkZCBQVVQgLzppZCB0aGVyZSFcbiAgICAvLyBJIHNob3VsZCBjaGVjayBhbmQgdXBkYXRlIGJhY2tlbmQgaWYgbmVlZGVkLlxuICAgIFxuICAgIC8vIEFzc3VtaW5nIHN0YW5kYXJkIFJFU1QsIGJ1dCBsZXQncyBjaGVjayBiYWNrZW5kIGZpcnN0LlxuICAgIC8vIFdhaXQsIEkgb25seSBhZGRlZCBHRVQsIFBPU1QgKGNyZWF0ZSksIFBPU1QgKHNlZWQpLCBHRVQgLzppZC5cbiAgICAvLyBJIG1pc3NlZCBVcGRhdGUgYW5kIERlbGV0ZSBpbiBiZW5ldml0eS5yb3V0ZXMudHMhXG4gICAgXG4gICAgLy8gSSB3aWxsIHByb2NlZWQgd2l0aCBmcm9udGVuZCB1cGRhdGUgYXNzdW1pbmcgYmFja2VuZCB3aWxsIGJlIGZpeGVkIHNob3J0bHkuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdVcGRhdGUgZmFpbGVkOicsIHJlc3BvbnNlLnN0YXR1cywgYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBwcm9qZWN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7aWR9YCk7XG5cbiAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkOiBzdHJpbmcsIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvJHtpZH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVUQXNHc0IsMExBQUEifQ==
}),
"[project]/Official/SbWebsite/client/app/actions/cms/data:f50c2b [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
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
 //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vcHJvamVjdHMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzZXJ2ZXInO1xuXG5pbXBvcnQgQVBJX0JBU0VfVVJMIGZyb20gJ0AvbGliL2FwaSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRQcm9qZWN0cyhmaWx0ZXI/OiB7IHNob3dPbkJlbmV2aXR5PzogYm9vbGVhbiwgc2hvd09uRmlyc3RGYWNlPzogYm9vbGVhbiwgbW9kZT86ICdhZG1pbicgfCAncHVibGljJyB9KSB7XG4gIHRyeSB7XG4gICAgbGV0IHVybCA9IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvYWRtaW5gO1xuICAgIGlmIChmaWx0ZXIpIHtcbiAgICAgICAgaWYgKGZpbHRlci5zaG93T25CZW5ldml0eSkge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgYWRtaW4gbW9kZSByZXF1ZXN0ZWQgZm9yIEJlbmV2aXR5XG4gICAgICAgICAgICBpZiAoZmlsdGVyLm1vZGUgPT09ICdhZG1pbicpIHtcbiAgICAgICAgICAgICAgICB1cmwgPSBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzL2FkbWluYDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdXJsID0gYCR7QVBJX0JBU0VfVVJMfS9iZW5ldml0eS9wcm9qZWN0c2A7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgLy8gTWFpbiBwcm9qZWN0c1xuICAgICAgICAgICAgIHVybCA9IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHM/YDtcbiAgICAgICAgICAgICBpZiAoZmlsdGVyLnNob3dPbkZpcnN0RmFjZSkge1xuICAgICAgICAgICAgICAgICB1cmwgKz0gYHNob3dPbkZpcnN0RmFjZT10cnVlYDtcbiAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmxvZygnZ2V0UHJvamVjdHM6IEZldGNoaW5nIGZyb20gVVJMOicsIHVybCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIGNhY2hlOiAnbm8tc3RvcmUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgY29uc29sZS5lcnJvcignZ2V0UHJvamVjdHM6IEZldGNoIGZhaWxlZCB3aXRoIHN0YXR1czonLCByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZmV0Y2ggcHJvamVjdHMnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKCdnZXRQcm9qZWN0czogUmVjZWl2ZWQgZGF0YSBjb3VudDonLCBkYXRhLnByb2plY3RzPy5sZW5ndGgpO1xuICAgIHJldHVybiBkYXRhLnByb2plY3RzIHx8IFtdO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIHByb2plY3RzOicsIGVycm9yKTtcbiAgICByZXR1cm4gW107XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFByb2plY3QoaWQ6IHN0cmluZykge1xuICB0cnkge1xuICAgIC8vIDEuIFRyeSBNYWluIENvbGxlY3Rpb25cbiAgICBjb25zdCBtYWluUmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAobWFpblJlc3BvbnNlLm9rKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBtYWluUmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICAgIH1cblxuICAgIC8vIDIuIFRyeSBCZW5ldml0eSBDb2xsZWN0aW9uXG4gICAgLy8gT25seSBpZiBtYWluIGZhaWxlZCAoZS5nLiA0MDQpLCBjaGVjayBCZW5ldml0eVxuICAgIGNvbnN0IGJlbmV2aXR5UmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCwgeyBjYWNoZTogJ25vLXN0b3JlJyB9KTtcbiAgICBpZiAoYmVuZXZpdHlSZXNwb25zZS5vaykge1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgYmVuZXZpdHlSZXNwb25zZS5qc29uKCk7XG4gICAgICAgIHJldHVybiBkYXRhLnByb2plY3Q7XG4gICAgfVxuXG4gICAgLy8gMy4gSWYgaGVyZSwgbmVpdGhlciB3b3JrZWRcbiAgICBjb25zb2xlLmVycm9yKGBnZXRQcm9qZWN0OiBGYWlsZWQgdG8gZmluZCBwcm9qZWN0ICR7aWR9IGluIGVpdGhlciBjb2xsZWN0aW9uLmApO1xuICAgIHRocm93IG5ldyBFcnJvcignUHJvamVjdCBub3QgZm91bmQnKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBwcm9qZWN0OicsIGVycm9yKTtcbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5cbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSAnbmV4dC9jYWNoZSc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVQcm9qZWN0KHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzYCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHNgO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgIH0sXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwcm9qZWN0RGF0YSksXG4gICAgfSk7XG5cbiAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBjcmVhdGUgcHJvamVjdCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgXG4gICAgLy8gUmV2YWxpZGF0ZSBwYXRocyB0byB1cGRhdGUgVUkgaW1tZWRpYXRlbHlcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcbiAgICByZXZhbGlkYXRlUGF0aCgnLycpOyAvLyBJZiBvbiBob21lXG5cbiAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGNyZWF0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0KGlkOiBzdHJpbmcsIHByb2plY3REYXRhOiBhbnksIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvJHtpZH1gO1xuICAgIC8vIEZvciBCZW5ldml0eSByb3V0ZXMsIHdlIG1pZ2h0IG5lZWQgYSBnZW5lcmljIFBVVCBlbmRwb2ludCBpZiB1c2luZyAvOmlkXG4gICAgLy8gQmVuZXZpdHkgcm91dGVzIGN1cnJlbnRseSBkb24ndCBleHBsaWNpdGx5IGxpc3QgUFVUIC86aWQgYnV0IGFzc3VtZSBzdGFuZGFyZCBDUlVELlxuICAgIC8vIEkgbmVlZCB0byBkb3VibGUgY2hlY2sgYmVuZXZpdHkucm91dGVzLnRzLi4uIHdhaXQsIEkgZGlkbid0IGFkZCBQVVQgLzppZCB0aGVyZSFcbiAgICAvLyBJIHNob3VsZCBjaGVjayBhbmQgdXBkYXRlIGJhY2tlbmQgaWYgbmVlZGVkLlxuICAgIFxuICAgIC8vIEFzc3VtaW5nIHN0YW5kYXJkIFJFU1QsIGJ1dCBsZXQncyBjaGVjayBiYWNrZW5kIGZpcnN0LlxuICAgIC8vIFdhaXQsIEkgb25seSBhZGRlZCBHRVQsIFBPU1QgKGNyZWF0ZSksIFBPU1QgKHNlZWQpLCBHRVQgLzppZC5cbiAgICAvLyBJIG1pc3NlZCBVcGRhdGUgYW5kIERlbGV0ZSBpbiBiZW5ldml0eS5yb3V0ZXMudHMhXG4gICAgXG4gICAgLy8gSSB3aWxsIHByb2NlZWQgd2l0aCBmcm9udGVuZCB1cGRhdGUgYXNzdW1pbmcgYmFja2VuZCB3aWxsIGJlIGZpeGVkIHNob3J0bHkuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocHJvamVjdERhdGEpLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdVcGRhdGUgZmFpbGVkOicsIHJlc3BvbnNlLnN0YXR1cywgYXdhaXQgcmVzcG9uc2UudGV4dCgpKTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIHVwZGF0ZSBwcm9qZWN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICBcbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcbiAgICByZXZhbGlkYXRlUGF0aChgL3Byb2plY3RzLyR7aWR9YCk7XG5cbiAgICByZXR1cm4gZGF0YS5wcm9qZWN0O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHVwZGF0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVQcm9qZWN0KGlkOiBzdHJpbmcsIGlzQmVuZXZpdHk6IGJvb2xlYW4gPSBmYWxzZSkge1xuICB0cnkge1xuICAgIGNvbnN0IHVybCA9IGlzQmVuZXZpdHkgPyBgJHtBUElfQkFTRV9VUkx9L2JlbmV2aXR5L3Byb2plY3RzLyR7aWR9YCA6IGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHMvJHtpZH1gO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgIH0pO1xuXG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZGVsZXRlIHByb2plY3QnKTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aCgnL2FkbWluL3Byb2plY3RzJyk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoJy9wcm9qZWN0cycpO1xuICAgIHJldmFsaWRhdGVQYXRoKCcvYmVuZXZpdHknKTtcblxuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRlbGV0aW5nIHByb2plY3Q6JywgZXJyb3IpO1xuICAgIHRocm93IGVycm9yO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6InVUQThJc0IsMExBQUEifQ==
}),
"[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BenevityProjectsAdminPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/square-pen.js [app-client] (ecmascript) <export default as Edit>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/image.js [app-client] (ecmascript) <export default as ImageIcon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$components$2f$admin$2f$ProjectForm$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/components/admin/ProjectForm.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$da90ae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/data:da90ae [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$fb04f3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/data:fb04f3 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$f5508f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/data:f5508f [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$f50c2b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/Official/SbWebsite/client/app/actions/cms/data:f50c2b [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
function BenevityProjectsAdminPage() {
    _s();
    const [projects, setProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(true);
    const [showForm, setShowForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editingProject, setEditingProject] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BenevityProjectsAdminPage.useEffect": ()=>{
            fetchProjects();
        }
    }["BenevityProjectsAdminPage.useEffect"], []);
    const fetchProjects = async ()=>{
        try {
            setLoading(true);
            // Hardcode showOnBenevity: true and mode: 'admin'
            const data = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$da90ae__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getProjects"])({
                showOnBenevity: true,
                mode: 'admin'
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
            // Force Benevity flag
            data.showOnBenevity = true;
            if (editingProject) {
                // Pass true for isBenevity flag
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$f5508f__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateProject"])(editingProject._id, data, true);
            } else {
                // Pass true for isBenevity flag
                await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$fb04f3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createProject"])(data, true);
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
            // Pass true for isBenevity flag
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$app$2f$actions$2f$cms$2f$data$3a$f50c2b__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteProject"])(id, true);
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
                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                lineNumber: 92,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-8",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-primary mb-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        className: "w-6 h-6"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                        lineNumber: 105,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-3xl font-bold text-gray-900",
                                        children: "Benevity Projects"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                        lineNumber: 106,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                lineNumber: 104,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-600",
                                children: "Manage projects shown specifically on the Benevity landing page. These are distinct from the main website projects."
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                        lineNumber: 103,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setShowForm(true),
                        className: "bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 flex items-center gap-2 transition-all shadow-lg hover:shadow-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            "Add Benevity Project"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                        lineNumber: 112,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white rounded-lg shadow-md overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50 border-b",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                        children: "Priority"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                        lineNumber: 126,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                        children: "Project"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                        lineNumber: 127,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                        children: "Link"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                        lineNumber: 128,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                        lineNumber: 129,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                        children: "Dates"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "px-6 py-4 text-left text-sm font-semibold text-gray-700",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                        lineNumber: 131,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                            lineNumber: 124,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y",
                            children: loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "px-6 py-12 text-center text-gray-500",
                                    children: "Loading projects..."
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                lineNumber: 136,
                                columnNumber: 15
                            }, this) : projects.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 6,
                                    className: "px-6 py-12 text-center text-gray-500",
                                    children: 'No projects found. Click "Add Benevity Project" to create one.'
                                }, void 0, false, {
                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                    lineNumber: 143,
                                    columnNumber: 17
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                lineNumber: 142,
                                columnNumber: 15
                            }, this) : projects.map((project)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-semibold text-primary",
                                                children: project.priority
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                lineNumber: 151,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                            lineNumber: 150,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center gap-3",
                                                children: [
                                                    project.featuredImage ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                        src: project.featuredImage,
                                                        alt: project.projectName,
                                                        className: "w-12 h-12 rounded-lg object-cover"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                        lineNumber: 156,
                                                        columnNumber: 25
                                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ImageIcon$3e$__["ImageIcon"], {
                                                            className: "w-6 h-6 text-gray-400"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                            lineNumber: 159,
                                                            columnNumber: 27
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                        lineNumber: 158,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "font-medium text-gray-900",
                                                                children: project.projectName
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                                lineNumber: 163,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "text-sm text-gray-500 truncate max-w-xs",
                                                                children: project.shortDescription
                                                            }, void 0, false, {
                                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                                lineNumber: 164,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                        lineNumber: 162,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                lineNumber: 154,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                            lineNumber: 153,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: project.link ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: project.link,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "text-xs text-blue-600 hover:underline max-w-[200px] truncate block",
                                                children: project.link
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                lineNumber: 170,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-xs text-gray-400",
                                                children: "None"
                                            }, void 0, false, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                lineNumber: 179,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                            lineNumber: 168,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: project.isActive ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 text-green-600 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                        lineNumber: 185,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Active"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                lineNumber: 184,
                                                columnNumber: 23
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1 text-gray-400 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                        lineNumber: 190,
                                                        columnNumber: 25
                                                    }, this),
                                                    "Inactive"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                lineNumber: 189,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                            lineNumber: 182,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4 text-xs text-gray-500",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: new Date(project.startDate).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "font-semibold text-gray-400",
                                                    children: "to"
                                                }, void 0, false, {
                                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 21
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    children: new Date(project.expiryDate).toLocaleDateString()
                                                }, void 0, false, {
                                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                    lineNumber: 198,
                                                    columnNumber: 21
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "px-6 py-4",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleEdit(project),
                                                        className: "p-2 hover:bg-blue-50 rounded-lg transition-colors",
                                                        title: "Edit",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$square$2d$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit$3e$__["Edit"], {
                                                            className: "w-4 h-4 text-blue-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                            lineNumber: 207,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                        lineNumber: 202,
                                                        columnNumber: 23
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDelete(project._id),
                                                        className: "p-2 hover:bg-red-50 rounded-lg transition-colors",
                                                        title: "Delete",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Official$2f$SbWebsite$2f$client$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-4 h-4 text-red-600"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                            lineNumber: 214,
                                                            columnNumber: 25
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                        lineNumber: 209,
                                                        columnNumber: 23
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                                lineNumber: 201,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                            lineNumber: 200,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, project._id, true, {
                                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                                    lineNumber: 149,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                            lineNumber: 134,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                    lineNumber: 123,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
                lineNumber: 122,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Official/SbWebsite/client/app/(admin-panel)/admin/benevity-projects/page.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, this);
}
_s(BenevityProjectsAdminPage, "66xwcgBgY/+xG93BWXPAmyCnzpQ=");
_c = BenevityProjectsAdminPage;
var _c;
__turbopack_context__.k.register(_c, "BenevityProjectsAdminPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Official_SbWebsite_client_f59a54e8._.js.map