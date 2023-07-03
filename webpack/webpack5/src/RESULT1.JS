{
    "errors": [], //发生了哪些错误
    "errorsCount": 0, // 发生错误的数量
    "warnings": [], //发生了哪些警告
    "warningsCount": 0,  // 警告的数量
    "hash": "8f62f6685b9661cdfae5", //本次编译的hash值
    "version": "5.88.0", //webpack版本号
    "time": 425, // 构建时间
    "builtAt": 1687965023686, //编译的时间 时间戳
    "publicPath": "auto",
    "outputPath": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\dist", //打包后的文件写入到哪个目录里
    "assetsByChunkName": {
        "main": [
            "bundle.js"
        ],
        "hello": [
            "hello.bundle.js"
        ]
    },
    "assets": [  //资源数组
        {
            "type": "asset",
            "name": "bundle.js", // 文件名称
            "size": 11761,  // 文件大小 
            "emitted": true,
            "comparedForEmit": false,
            "cached": false,
            "info": {
                "javascriptModule": false,
                "size": 11761
            },
            "chunkNames": [ // 对应的代码块名称
                "main"
            ],
            "chunkIdHints": [],
            "auxiliaryChunkNames": [],
            "auxiliaryChunkIdHints": [],
            "related": {},
            "chunks": [
                "main"
            ],
            "auxiliaryChunks": [],
            "isOverSizeLimit": false
        },
        {
            "type": "asset",
            "name": "hello.bundle.js",
            "size": 585,
            "emitted": true,
            "comparedForEmit": false,
            "cached": false,
            "info": {
                "javascriptModule": false,
                "size": 585
            },
            "chunkNames": [
                "hello"
            ],
            "chunkIdHints": [],
            "auxiliaryChunkNames": [],
            "auxiliaryChunkIdHints": [],
            "related": {},
            "chunks": [
                "hello"
            ],
            "auxiliaryChunks": [],
            "isOverSizeLimit": false
        },
        {
            "type": "asset",
            "name": "index.html",
            "size": 313,
            "emitted": true,
            "comparedForEmit": false,
            "cached": false,
            "info": {
                "size": 313
            },
            "chunkNames": [],
            "chunkIdHints": [],
            "auxiliaryChunkNames": [],
            "auxiliaryChunkIdHints": [],
            "related": {},
            "chunks": [],
            "auxiliaryChunks": [],
            "isOverSizeLimit": false
        }
    ],
    "chunks": [
        {
            "rendered": true,
            "initial": false,
            "entry": false,
            "recorded": false,
            "size": 25,
            "sizes": {
                "javascript": 25
            },
            "names": [
                "hello"
            ],
            "idHints": [],
            "runtime": [
                "main"
            ],
            "files": [
                "hello.bundle.js"
            ],
            "auxiliaryFiles": [],
            "hash": "ccb687f4ac1b8a51539b",
            "childrenByOrder": {},
            "id": "hello",
            "siblings": [],
            "parents": [
                "main"
            ],
            "children": [],
            "modules": [
                {
                    "type": "module",
                    "moduleType": "javascript/auto",
                    "layer": null,
                    "size": 25,
                    "sizes": {
                        "javascript": 25
                    },
                    "built": true,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\title.js",
                    "name": "./src/title.js",
                    "nameForCondition": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\title.js",
                    "index": 1,
                    "preOrderIndex": 1,
                    "index2": 1,
                    "postOrderIndex": 1,
                    "cacheable": true,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "issuer": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                    "issuerName": "./src/index.js",
                    "issuerPath": [
                        {
                            "identifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                            "name": "./src/index.js",
                            "id": "./src/index.js"
                        }
                    ],
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "./src/title.js",
                    "issuerId": "./src/index.js",
                    "chunks": [
                        "hello"
                    ],
                    "assets": [],
                    "reasons": [
                        {
                            "moduleIdentifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                            "module": "./src/index.js",
                            "moduleName": "./src/index.js",
                            "resolvedModuleIdentifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                            "resolvedModule": "./src/index.js",
                            "type": "import()",
                            "active": true,
                            "explanation": "",
                            "userRequest": "./title",
                            "loc": "17:4-53",
                            "moduleId": "./src/index.js",
                            "resolvedModuleId": "./src/index.js"
                        }
                    ],
                    "usedExports": null,
                    "providedExports": [
                        "default"
                    ],
                    "optimizationBailout": [],
                    "depth": 1
                }
            ],
            "origins": [
                {
                    "module": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                    "moduleIdentifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                    "moduleName": "./src/index.js",
                    "loc": "17:4-53",
                    "request": "./title",
                    "moduleId": "./src/index.js"
                }
            ]
        },
        {
            "rendered": true,
            "initial": true,
            "entry": true,
            "recorded": false,
            "size": 7330,
            "sizes": {
                "javascript": 456,
                "runtime": 6874
            },
            "names": [
                "main"
            ],
            "idHints": [],
            "runtime": [
                "main"
            ],
            "files": [
                "bundle.js"
            ],
            "auxiliaryFiles": [],
            "hash": "70d61d51b82be835d0aa",
            "childrenByOrder": {},
            "id": "main",
            "siblings": [],
            "parents": [],
            "children": [
                "hello"
            ],
            "modules": [
                {
                    "type": "module",
                    "moduleType": "javascript/auto",
                    "layer": null,
                    "size": 456,
                    "sizes": {
                        "javascript": 456
                    },
                    "built": true,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                    "name": "./src/index.js",
                    "nameForCondition": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                    "index": 0,
                    "preOrderIndex": 0,
                    "index2": 0,
                    "postOrderIndex": 0,
                    "cacheable": true,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "issuer": null,
                    "issuerName": null,
                    "issuerPath": null,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "./src/index.js",
                    "issuerId": null,
                    "chunks": [
                        "main"
                    ],
                    "assets": [],
                    "reasons": [
                        {
                            "moduleIdentifier": null,
                            "module": null,
                            "moduleName": null,
                            "resolvedModuleIdentifier": null,
                            "resolvedModule": null,
                            "type": "entry",
                            "active": true,
                            "explanation": "",
                            "userRequest": "./src/index.js",
                            "loc": "main",
                            "moduleId": null,
                            "resolvedModuleId": null
                        }
                    ],
                    "usedExports": null,
                    "providedExports": null,
                    "optimizationBailout": [],
                    "depth": 0
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 308,
                    "sizes": {
                        "runtime": 308
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/define property getters",
                    "name": "webpack/runtime/define property getters",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "main"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 326,
                    "sizes": {
                        "runtime": 326
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/ensure chunk",
                    "name": "webpack/runtime/ensure chunk",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "main"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 174,
                    "sizes": {
                        "runtime": 174
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/get javascript chunk filename",
                    "name": "webpack/runtime/get javascript chunk filename",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "main"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 221,
                    "sizes": {
                        "runtime": 221
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/global",
                    "name": "webpack/runtime/global",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "main"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 88,
                    "sizes": {
                        "runtime": 88
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/hasOwnProperty shorthand",
                    "name": "webpack/runtime/hasOwnProperty shorthand",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "main"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 3057,
                    "sizes": {
                        "runtime": 3057
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/jsonp chunk loading",
                    "name": "webpack/runtime/jsonp chunk loading",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "main"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 1503,
                    "sizes": {
                        "runtime": 1503
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/load script",
                    "name": "webpack/runtime/load script",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "main"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 274,
                    "sizes": {
                        "runtime": 274
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/make namespace object",
                    "name": "webpack/runtime/make namespace object",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "main"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 923,
                    "sizes": {
                        "runtime": 923
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/publicPath",
                    "name": "webpack/runtime/publicPath",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "dependent": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "main"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                }
            ],
            "origins": [
                {
                    "module": "",
                    "moduleIdentifier": "",
                    "moduleName": "",
                    "loc": "main",
                    "request": "./src/index.js"
                }
            ]
        }
    ],
    "modules": [
        {
            "type": "module",
            "moduleType": "javascript/auto",
            "layer": null,
            "size": 456,
            "sizes": {
                "javascript": 456
            },
            "built": true,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
            "name": "./src/index.js",
            "nameForCondition": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
            "index": 0,
            "preOrderIndex": 0,
            "index2": 0,
            "postOrderIndex": 0,
            "cacheable": true,
            "optional": false,
            "orphan": false,
            "issuer": null,
            "issuerName": null,
            "issuerPath": null,
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "./src/index.js",
            "issuerId": null,
            "chunks": [
                "main"
            ],
            "assets": [],
            "reasons": [
                {
                    "moduleIdentifier": null,
                    "module": null,
                    "moduleName": null,
                    "resolvedModuleIdentifier": null,
                    "resolvedModule": null,
                    "type": "entry",
                    "active": true,
                    "explanation": "",
                    "userRequest": "./src/index.js",
                    "loc": "main",
                    "moduleId": null,
                    "resolvedModuleId": null
                }
            ],
            "usedExports": null,
            "providedExports": null,
            "optimizationBailout": [],
            "depth": 0
        },
        {
            "type": "module",
            "moduleType": "javascript/auto",
            "layer": null,
            "size": 25,
            "sizes": {
                "javascript": 25
            },
            "built": true,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\title.js",
            "name": "./src/title.js",
            "nameForCondition": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\title.js",
            "index": 1,
            "preOrderIndex": 1,
            "index2": 1,
            "postOrderIndex": 1,
            "cacheable": true,
            "optional": false,
            "orphan": false,
            "issuer": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
            "issuerName": "./src/index.js",
            "issuerPath": [
                {
                    "identifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                    "name": "./src/index.js",
                    "id": "./src/index.js"
                }
            ],
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "./src/title.js",
            "issuerId": "./src/index.js",
            "chunks": [
                "hello"
            ],
            "assets": [],
            "reasons": [
                {
                    "moduleIdentifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                    "module": "./src/index.js",
                    "moduleName": "./src/index.js",
                    "resolvedModuleIdentifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.js",
                    "resolvedModule": "./src/index.js",
                    "type": "import()",
                    "active": true,
                    "explanation": "",
                    "userRequest": "./title",
                    "loc": "17:4-53",
                    "moduleId": "./src/index.js",
                    "resolvedModuleId": "./src/index.js"
                }
            ],
            "usedExports": null,
            "providedExports": [
                "default"
            ],
            "optimizationBailout": [],
            "depth": 1
        },
        {
            "type": "module",
            "moduleType": "runtime",
            "layer": null,
            "size": 308,
            "sizes": {
                "runtime": 308
            },
            "built": false,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "webpack/runtime/define property getters",
            "name": "webpack/runtime/define property getters",
            "nameForCondition": null,
            "index": null,
            "preOrderIndex": null,
            "index2": null,
            "postOrderIndex": null,
            "optional": false,
            "orphan": false,
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "",
            "chunks": [
                "main"
            ],
            "assets": [],
            "reasons": [],
            "usedExports": null,
            "providedExports": [],
            "optimizationBailout": [],
            "depth": null
        },
        {
            "type": "module",
            "moduleType": "runtime",
            "layer": null,
            "size": 326,
            "sizes": {
                "runtime": 326
            },
            "built": false,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "webpack/runtime/ensure chunk",
            "name": "webpack/runtime/ensure chunk",
            "nameForCondition": null,
            "index": null,
            "preOrderIndex": null,
            "index2": null,
            "postOrderIndex": null,
            "optional": false,
            "orphan": false,
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "",
            "chunks": [
                "main"
            ],
            "assets": [],
            "reasons": [],
            "usedExports": null,
            "providedExports": [],
            "optimizationBailout": [],
            "depth": null
        },
        {
            "type": "module",
            "moduleType": "runtime",
            "layer": null,
            "size": 174,
            "sizes": {
                "runtime": 174
            },
            "built": false,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "webpack/runtime/get javascript chunk filename",
            "name": "webpack/runtime/get javascript chunk filename",
            "nameForCondition": null,
            "index": null,
            "preOrderIndex": null,
            "index2": null,
            "postOrderIndex": null,
            "optional": false,
            "orphan": false,
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "",
            "chunks": [
                "main"
            ],
            "assets": [],
            "reasons": [],
            "usedExports": null,
            "providedExports": [],
            "optimizationBailout": [],
            "depth": null
        },
        {
            "type": "module",
            "moduleType": "runtime",
            "layer": null,
            "size": 221,
            "sizes": {
                "runtime": 221
            },
            "built": false,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "webpack/runtime/global",
            "name": "webpack/runtime/global",
            "nameForCondition": null,
            "index": null,
            "preOrderIndex": null,
            "index2": null,
            "postOrderIndex": null,
            "optional": false,
            "orphan": false,
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "",
            "chunks": [
                "main"
            ],
            "assets": [],
            "reasons": [],
            "usedExports": null,
            "providedExports": [],
            "optimizationBailout": [],
            "depth": null
        },
        {
            "type": "module",
            "moduleType": "runtime",
            "layer": null,
            "size": 88,
            "sizes": {
                "runtime": 88
            },
            "built": false,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "webpack/runtime/hasOwnProperty shorthand",
            "name": "webpack/runtime/hasOwnProperty shorthand",
            "nameForCondition": null,
            "index": null,
            "preOrderIndex": null,
            "index2": null,
            "postOrderIndex": null,
            "optional": false,
            "orphan": false,
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "",
            "chunks": [
                "main"
            ],
            "assets": [],
            "reasons": [],
            "usedExports": null,
            "providedExports": [],
            "optimizationBailout": [],
            "depth": null
        },
        {
            "type": "module",
            "moduleType": "runtime",
            "layer": null,
            "size": 3057,
            "sizes": {
                "runtime": 3057
            },
            "built": false,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "webpack/runtime/jsonp chunk loading",
            "name": "webpack/runtime/jsonp chunk loading",
            "nameForCondition": null,
            "index": null,
            "preOrderIndex": null,
            "index2": null,
            "postOrderIndex": null,
            "optional": false,
            "orphan": false,
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "",
            "chunks": [
                "main"
            ],
            "assets": [],
            "reasons": [],
            "usedExports": null,
            "providedExports": [],
            "optimizationBailout": [],
            "depth": null
        },
        {
            "type": "module",
            "moduleType": "runtime",
            "layer": null,
            "size": 1503,
            "sizes": {
                "runtime": 1503
            },
            "built": false,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "webpack/runtime/load script",
            "name": "webpack/runtime/load script",
            "nameForCondition": null,
            "index": null,
            "preOrderIndex": null,
            "index2": null,
            "postOrderIndex": null,
            "optional": false,
            "orphan": false,
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "",
            "chunks": [
                "main"
            ],
            "assets": [],
            "reasons": [],
            "usedExports": null,
            "providedExports": [],
            "optimizationBailout": [],
            "depth": null
        },
        {
            "type": "module",
            "moduleType": "runtime",
            "layer": null,
            "size": 274,
            "sizes": {
                "runtime": 274
            },
            "built": false,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "webpack/runtime/make namespace object",
            "name": "webpack/runtime/make namespace object",
            "nameForCondition": null,
            "index": null,
            "preOrderIndex": null,
            "index2": null,
            "postOrderIndex": null,
            "optional": false,
            "orphan": false,
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "",
            "chunks": [
                "main"
            ],
            "assets": [],
            "reasons": [],
            "usedExports": null,
            "providedExports": [],
            "optimizationBailout": [],
            "depth": null
        },
        {
            "type": "module",
            "moduleType": "runtime",
            "layer": null,
            "size": 923,
            "sizes": {
                "runtime": 923
            },
            "built": false,
            "codeGenerated": true,
            "buildTimeExecuted": false,
            "cached": false,
            "identifier": "webpack/runtime/publicPath",
            "name": "webpack/runtime/publicPath",
            "nameForCondition": null,
            "index": null,
            "preOrderIndex": null,
            "index2": null,
            "postOrderIndex": null,
            "optional": false,
            "orphan": false,
            "failed": false,
            "errors": 0,
            "warnings": 0,
            "id": "",
            "chunks": [
                "main"
            ],
            "assets": [],
            "reasons": [],
            "usedExports": null,
            "providedExports": [],
            "optimizationBailout": [],
            "depth": null
        }
    ],
    "entrypoints": {
        "main": {
            "name": "main",
            "chunks": [
                "main"
            ],
            "assets": [
                {
                    "name": "bundle.js",
                    "size": 11761
                }
            ],
            "filteredAssets": 0,
            "assetsSize": 11761,
            "auxiliaryAssets": [],
            "filteredAuxiliaryAssets": 0,
            "auxiliaryAssetsSize": 0,
            "children": {},
            "childAssets": {},
            "isOverSizeLimit": false
        }
    },
    "namedChunkGroups": {
        "main": {
            "name": "main",
            "chunks": [
                "main"
            ],
            "assets": [
                {
                    "name": "bundle.js",
                    "size": 11761
                }
            ],
            "filteredAssets": 0,
            "assetsSize": 11761,
            "auxiliaryAssets": [],
            "filteredAuxiliaryAssets": 0,
            "auxiliaryAssetsSize": 0,
            "children": {},
            "childAssets": {},
            "isOverSizeLimit": false
        },
        "hello": {
            "name": "hello",
            "chunks": [
                "hello"
            ],
            "assets": [
                {
                    "name": "hello.bundle.js",
                    "size": 585
                }
            ],
            "filteredAssets": 0,
            "assetsSize": 585,
            "auxiliaryAssets": [],
            "filteredAuxiliaryAssets": 0,
            "auxiliaryAssetsSize": 0,
            "children": {},
            "childAssets": {},
            "isOverSizeLimit": false
        }
    },
    "children": [
        {
            "name": "HtmlWebpackCompiler",
            "hash": "137553a123de7b406caf",
            "version": "5.88.0",
            "time": 205,
            "builtAt": 1687965023610,
            "publicPath": "",
            "outputPath": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\dist",
            "assetsByChunkName": {},
            "assets": [],
            "chunks": [
                {
                    "rendered": true,
                    "initial": true,
                    "entry": true,
                    "recorded": false,
                    "size": 1346,
                    "sizes": {
                        "javascript": 612,
                        "runtime": 734
                    },
                    "names": [
                        "HtmlWebpackPlugin_0-0"
                    ],
                    "idHints": [],
                    "runtime": [
                        "HtmlWebpackPlugin_0-0"
                    ],
                    "files": [],
                    "auxiliaryFiles": [],
                    "hash": "fa156e923a2964731b12",
                    "childrenByOrder": {},
                    "id": "HtmlWebpackPlugin_0-0",
                    "siblings": [],
                    "parents": [],
                    "children": [],
                    "modules": [
                        {
                            "type": "module",
                            "moduleType": "javascript/auto",
                            "layer": null,
                            "size": 535,
                            "sizes": {
                                "javascript": 535
                            },
                            "built": true,
                            "codeGenerated": true,
                            "buildTimeExecuted": false,
                            "cached": false,
                            "identifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\node_modules\\\\html-webpack-plugin\\\\lib\\\\loader.js!E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html",
                            "name": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                            "nameForCondition": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html",
                            "index": 1,
                            "preOrderIndex": 1,
                            "index2": 1,
                            "postOrderIndex": 1,
                            "cacheable": true,
                            "optional": false,
                            "orphan": false,
                            "dependent": false,
                            "issuer": null,
                            "issuerName": null,
                            "issuerPath": null,
                            "failed": false,
                            "errors": 0,
                            "warnings": 0,
                            "id": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                            "issuerId": null,
                            "chunks": [
                                "HtmlWebpackPlugin_0-0"
                            ],
                            "assets": [],
                            "reasons": [
                                {
                                    "moduleIdentifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\node_modules\\\\html-webpack-plugin\\\\lib\\\\loader.js!E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html",
                                    "module": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                                    "moduleName": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                                    "resolvedModuleIdentifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\node_modules\\\\html-webpack-plugin\\\\lib\\\\loader.js!E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html",
                                    "resolvedModule": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                                    "type": "cjs self exports reference",
                                    "active": true,
                                    "explanation": "",
                                    "userRequest": null,
                                    "loc": "1:99-113",
                                    "moduleId": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                                    "resolvedModuleId": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html"
                                },
                                {
                                    "moduleIdentifier": null,
                                    "module": null,
                                    "moduleName": null,
                                    "resolvedModuleIdentifier": null,
                                    "resolvedModule": null,
                                    "type": "entry",
                                    "active": true,
                                    "explanation": "",
                                    "userRequest": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\node_modules\\\\html-webpack-plugin\\\\lib\\\\loader.js!E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html",
                                    "loc": "HtmlWebpackPlugin_0-0",
                                    "moduleId": null,
                                    "resolvedModuleId": null
                                },
                                {
                                    "moduleIdentifier": null,
                                    "module": null,
                                    "moduleName": null,
                                    "resolvedModuleIdentifier": null,
                                    "resolvedModule": null,
                                    "type": null,
                                    "active": true,
                                    "explanation": "used as library export",
                                    "userRequest": null,
                                    "moduleId": null,
                                    "resolvedModuleId": null
                                }
                            ],
                            "usedExports": null,
                            "providedExports": null,
                            "optimizationBailout": [
                                "CommonJS bailout: module.exports is used directly at 1:99-113"
                            ],
                            "depth": 0
                        },
                        {
                            "type": "module",
                            "moduleType": "javascript/esm",
                            "layer": null,
                            "size": 77,
                            "sizes": {
                                "javascript": 77
                            },
                            "built": true,
                            "codeGenerated": true,
                            "buildTimeExecuted": false,
                            "cached": false,
                            "identifier": "javascript/esm|data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                            "name": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                            "nameForCondition": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                            "index": 0,
                            "preOrderIndex": 0,
                            "index2": 0,
                            "postOrderIndex": 0,
                            "cacheable": true,
                            "optional": false,
                            "orphan": false,
                            "dependent": false,
                            "issuer": null,
                            "issuerName": null,
                            "issuerPath": null,
                            "failed": false,
                            "errors": 0,
                            "warnings": 0,
                            "id": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                            "issuerId": null,
                            "chunks": [
                                "HtmlWebpackPlugin_0-0"
                            ],
                            "assets": [],
                            "reasons": [
                                {
                                    "moduleIdentifier": null,
                                    "module": null,
                                    "moduleName": null,
                                    "resolvedModuleIdentifier": null,
                                    "resolvedModule": null,
                                    "type": "entry",
                                    "active": true,
                                    "explanation": "",
                                    "userRequest": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                                    "loc": "HtmlWebpackPlugin_0-0",
                                    "moduleId": null,
                                    "resolvedModuleId": null
                                }
                            ],
                            "usedExports": null,
                            "providedExports": [],
                            "optimizationBailout": [],
                            "depth": 0
                        },
                        {
                            "type": "module",
                            "moduleType": "runtime",
                            "layer": null,
                            "size": 88,
                            "sizes": {
                                "runtime": 88
                            },
                            "built": false,
                            "codeGenerated": true,
                            "buildTimeExecuted": false,
                            "cached": false,
                            "identifier": "webpack/runtime/hasOwnProperty shorthand",
                            "name": "webpack/runtime/hasOwnProperty shorthand",
                            "nameForCondition": null,
                            "index": null,
                            "preOrderIndex": null,
                            "index2": null,
                            "postOrderIndex": null,
                            "optional": false,
                            "orphan": false,
                            "dependent": false,
                            "failed": false,
                            "errors": 0,
                            "warnings": 0,
                            "id": "",
                            "chunks": [
                                "HtmlWebpackPlugin_0-0"
                            ],
                            "assets": [],
                            "reasons": [],
                            "usedExports": null,
                            "providedExports": [],
                            "optimizationBailout": [],
                            "depth": null
                        },
                        {
                            "type": "module",
                            "moduleType": "runtime",
                            "layer": null,
                            "size": 274,
                            "sizes": {
                                "runtime": 274
                            },
                            "built": false,
                            "codeGenerated": true,
                            "buildTimeExecuted": false,
                            "cached": false,
                            "identifier": "webpack/runtime/make namespace object",
                            "name": "webpack/runtime/make namespace object",
                            "nameForCondition": null,
                            "index": null,
                            "preOrderIndex": null,
                            "index2": null,
                            "postOrderIndex": null,
                            "optional": false,
                            "orphan": false,
                            "dependent": false,
                            "failed": false,
                            "errors": 0,
                            "warnings": 0,
                            "id": "",
                            "chunks": [
                                "HtmlWebpackPlugin_0-0"
                            ],
                            "assets": [],
                            "reasons": [],
                            "usedExports": null,
                            "providedExports": [],
                            "optimizationBailout": [],
                            "depth": null
                        },
                        {
                            "type": "module",
                            "moduleType": "runtime",
                            "layer": null,
                            "size": 27,
                            "sizes": {
                                "runtime": 27
                            },
                            "built": false,
                            "codeGenerated": true,
                            "buildTimeExecuted": false,
                            "cached": false,
                            "identifier": "webpack/runtime/publicPath",
                            "name": "webpack/runtime/publicPath",
                            "nameForCondition": null,
                            "index": null,
                            "preOrderIndex": null,
                            "index2": null,
                            "postOrderIndex": null,
                            "optional": false,
                            "orphan": false,
                            "dependent": false,
                            "failed": false,
                            "errors": 0,
                            "warnings": 0,
                            "id": "",
                            "chunks": [
                                "HtmlWebpackPlugin_0-0"
                            ],
                            "assets": [],
                            "reasons": [],
                            "usedExports": null,
                            "providedExports": [],
                            "optimizationBailout": [],
                            "depth": null
                        },
                        {
                            "type": "module",
                            "moduleType": "runtime",
                            "layer": null,
                            "size": 345,
                            "sizes": {
                                "runtime": 345
                            },
                            "built": false,
                            "codeGenerated": true,
                            "buildTimeExecuted": false,
                            "cached": false,
                            "identifier": "webpack/runtime/require chunk loading",
                            "name": "webpack/runtime/require chunk loading",
                            "nameForCondition": null,
                            "index": null,
                            "preOrderIndex": null,
                            "index2": null,
                            "postOrderIndex": null,
                            "optional": false,
                            "orphan": false,
                            "dependent": false,
                            "failed": false,
                            "errors": 0,
                            "warnings": 0,
                            "id": "",
                            "chunks": [
                                "HtmlWebpackPlugin_0-0"
                            ],
                            "assets": [],
                            "reasons": [],
                            "usedExports": null,
                            "providedExports": [],
                            "optimizationBailout": [],
                            "depth": null
                        }
                    ],
                    "origins": [
                        {
                            "module": "",
                            "moduleIdentifier": "",
                            "moduleName": "",
                            "loc": "HtmlWebpackPlugin_0-0",
                            "request": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\node_modules\\\\html-webpack-plugin\\\\lib\\\\loader.js!E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html"
                        },
                        {
                            "module": "",
                            "moduleIdentifier": "",
                            "moduleName": "",
                            "loc": "HtmlWebpackPlugin_0-0",
                            "request": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;"
                        }
                    ]
                }
            ],
            "modules": [
                {
                    "type": "module",
                    "moduleType": "javascript/esm",
                    "layer": null,
                    "size": 77,
                    "sizes": {
                        "javascript": 77
                    },
                    "built": true,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "javascript/esm|data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                    "name": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                    "nameForCondition": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                    "index": 0,
                    "preOrderIndex": 0,
                    "index2": 0,
                    "postOrderIndex": 0,
                    "cacheable": true,
                    "optional": false,
                    "orphan": false,
                    "issuer": null,
                    "issuerName": null,
                    "issuerPath": null,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                    "issuerId": null,
                    "chunks": [
                        "HtmlWebpackPlugin_0-0"
                    ],
                    "assets": [],
                    "reasons": [
                        {
                            "moduleIdentifier": null,
                            "module": null,
                            "moduleName": null,
                            "resolvedModuleIdentifier": null,
                            "resolvedModule": null,
                            "type": "entry",
                            "active": true,
                            "explanation": "",
                            "userRequest": "data:text/javascript,__webpack_public_path__ = __webpack_base_uri__ = htmlWebpackPluginPublicPath;",
                            "loc": "HtmlWebpackPlugin_0-0",
                            "moduleId": null,
                            "resolvedModuleId": null
                        }
                    ],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": 0
                },
                {
                    "type": "module",
                    "moduleType": "javascript/auto",
                    "layer": null,
                    "size": 535,
                    "sizes": {
                        "javascript": 535
                    },
                    "built": true,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\node_modules\\\\html-webpack-plugin\\\\lib\\\\loader.js!E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html",
                    "name": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                    "nameForCondition": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html",
                    "index": 1,
                    "preOrderIndex": 1,
                    "index2": 1,
                    "postOrderIndex": 1,
                    "cacheable": true,
                    "optional": false,
                    "orphan": false,
                    "issuer": null,
                    "issuerName": null,
                    "issuerPath": null,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                    "issuerId": null,
                    "chunks": [
                        "HtmlWebpackPlugin_0-0"
                    ],
                    "assets": [],
                    "reasons": [
                        {
                            "moduleIdentifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\node_modules\\\\html-webpack-plugin\\\\lib\\\\loader.js!E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html",
                            "module": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                            "moduleName": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                            "resolvedModuleIdentifier": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\node_modules\\\\html-webpack-plugin\\\\lib\\\\loader.js!E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html",
                            "resolvedModule": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                            "type": "cjs self exports reference",
                            "active": true,
                            "explanation": "",
                            "userRequest": null,
                            "loc": "1:99-113",
                            "moduleId": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html",
                            "resolvedModuleId": "./node_modules/html-webpack-plugin/lib/loader.js!./src/index.html"
                        },
                        {
                            "moduleIdentifier": null,
                            "module": null,
                            "moduleName": null,
                            "resolvedModuleIdentifier": null,
                            "resolvedModule": null,
                            "type": "entry",
                            "active": true,
                            "explanation": "",
                            "userRequest": "E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\node_modules\\\\html-webpack-plugin\\\\lib\\\\loader.js!E:\\\\learn\\\\fore-end\\\\webpack\\\\webpack5\\\\src\\\\index.html",
                            "loc": "HtmlWebpackPlugin_0-0",
                            "moduleId": null,
                            "resolvedModuleId": null
                        },
                        {
                            "moduleIdentifier": null,
                            "module": null,
                            "moduleName": null,
                            "resolvedModuleIdentifier": null,
                            "resolvedModule": null,
                            "type": null,
                            "active": true,
                            "explanation": "used as library export",
                            "userRequest": null,
                            "moduleId": null,
                            "resolvedModuleId": null
                        }
                    ],
                    "usedExports": null,
                    "providedExports": null,
                    "optimizationBailout": [
                        "CommonJS bailout: module.exports is used directly at 1:99-113"
                    ],
                    "depth": 0
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 88,
                    "sizes": {
                        "runtime": 88
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/hasOwnProperty shorthand",
                    "name": "webpack/runtime/hasOwnProperty shorthand",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "HtmlWebpackPlugin_0-0"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 274,
                    "sizes": {
                        "runtime": 274
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/make namespace object",
                    "name": "webpack/runtime/make namespace object",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "HtmlWebpackPlugin_0-0"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 27,
                    "sizes": {
                        "runtime": 27
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/publicPath",
                    "name": "webpack/runtime/publicPath",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "HtmlWebpackPlugin_0-0"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                },
                {
                    "type": "module",
                    "moduleType": "runtime",
                    "layer": null,
                    "size": 345,
                    "sizes": {
                        "runtime": 345
                    },
                    "built": false,
                    "codeGenerated": true,
                    "buildTimeExecuted": false,
                    "cached": false,
                    "identifier": "webpack/runtime/require chunk loading",
                    "name": "webpack/runtime/require chunk loading",
                    "nameForCondition": null,
                    "index": null,
                    "preOrderIndex": null,
                    "index2": null,
                    "postOrderIndex": null,
                    "optional": false,
                    "orphan": false,
                    "failed": false,
                    "errors": 0,
                    "warnings": 0,
                    "id": "",
                    "chunks": [
                        "HtmlWebpackPlugin_0-0"
                    ],
                    "assets": [],
                    "reasons": [],
                    "usedExports": null,
                    "providedExports": [],
                    "optimizationBailout": [],
                    "depth": null
                }
            ],
            "entrypoints": {
                "HtmlWebpackPlugin_0-0": {
                    "name": "HtmlWebpackPlugin_0-0",
                    "chunks": [
                        "HtmlWebpackPlugin_0-0"
                    ],
                    "assets": [],
                    "filteredAssets": 0,
                    "assetsSize": 0,
                    "auxiliaryAssets": [],
                    "filteredAuxiliaryAssets": 0,
                    "auxiliaryAssetsSize": 0,
                    "children": {},
                    "childAssets": {},
                    "isOverSizeLimit": false
                }
            },
            "namedChunkGroups": {
                "HtmlWebpackPlugin_0-0": {
                    "name": "HtmlWebpackPlugin_0-0",
                    "chunks": [
                        "HtmlWebpackPlugin_0-0"
                    ],
                    "assets": [],
                    "filteredAssets": 0,
                    "assetsSize": 0,
                    "auxiliaryAssets": [],
                    "filteredAuxiliaryAssets": 0,
                    "auxiliaryAssetsSize": 0,
                    "children": {},
                    "childAssets": {},
                    "isOverSizeLimit": false
                }
            },
            "errors": [],
            "errorsCount": 0,
            "warnings": [],
            "warningsCount": 0,
            "children": []
        }
    ]
}