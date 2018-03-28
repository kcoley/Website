"use strict";

/**
 * Creates a Babylon scene which loads glTF models and displays them as a grid.  
 * The parameters are picked up from the url and models can be selected with a dropdown menu.
 * @param {BABYLON.Engine} engine 
 */
function createScene(engine) {
    const glTFParameters = getURLParameters();
    const scene = loadScene(engine, glTFParameters);

    return scene;
}

/**
 * Loads the scene based on the test parameters.  If glTF parameters is null, display empty scene.
 * @param {BABYLON.Engine} engine 
 * @param {*} glTFParameters 
 */
function loadScene(engine, glTFParameters) {
    const scene = new BABYLON.Scene(engine);
    let showMenu = true;
    const camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2, 6);
    const hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/Assets/environment.dds", scene);
    hdrTexture.gammaSpace = false;
    scene.createDefaultSkybox(hdrTexture, true, 100, 0.3);

    if (glTFParameters) {
        showMenu = glTFParameters["showMenu"];
        const radius = glTFParameters["radius"];
        camera.radius = radius;
        
        initScene(scene, camera, glTFParameters);
    }
    if (showMenu === true) {
        initDropdownMenu("/Demos/GLTFTests/generatedAssets.json");
    }
    camera.wheelPrecision = 100;
    camera.attachControl(scene.getEngine().getRenderingCanvas());

    return scene;
}

function createBufferInterleavedScene(engine) {
    let glTFParameters = {};
    glTFParameters["test"] = "Buffer_Interleaved";
    glTFParameters["count"] = 5;
    glTFParameters["width"] = 3;
    glTFParameters["position"] = [-1.8, 0.7, 0.0];
    glTFParameters["radius"] = 4;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMaterialScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Material";
    glTFParameters["count"] = 8;
    glTFParameters["width"] = 4;
    glTFParameters["position"] = [-1.8, 0.7, 0.0];
    glTFParameters["radius"] = 4;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMaterialAlphaBlendScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Material_AlphaBlend";
    glTFParameters["count"] = 7;
    glTFParameters["width"] = 4;
    glTFParameters["position"] = [-1.8, 0.7, 0.0];
    glTFParameters["radius"] = 4;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMaterialAlphaMaskScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Material_AlphaMask";
    glTFParameters["count"] = 6;
    glTFParameters["width"] = 4;
    glTFParameters["position"] = [-1.8, 0.7, 0.0];
    glTFParameters["radius"] = 4;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMaterialDoubleSidedScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Material_DoubleSided";
    glTFParameters["count"] = 4;
    glTFParameters["width"] = 4;
    glTFParameters["position"] = [-1.8, 0.7, 0.0];
    glTFParameters["radius"] = 4;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMaterialDoubleSidedBackScene(engine) {
    var glTFParameters = {};
    glTFParameters["title"] = "Material Double Sided (Back)";
    glTFParameters["test"] = "Material_DoubleSided";
    glTFParameters["count"] = 4;
    glTFParameters["width"] = 4;
    glTFParameters["position"] = [-1.8, 0.7, 0.0];
    glTFParameters["radius"] = 4;
    glTFParameters["flip"] = true;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMaterialMetallicRoughnessScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Material_MetallicRoughness";
    glTFParameters["count"] = 12;
    glTFParameters["width"] = 5;
    glTFParameters["position"] = [-2.5, 1.3, 0.0];
    glTFParameters["radius"] = 5.6;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMaterialMixedScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Material_Mixed";
    glTFParameters["count"] = 3;
    glTFParameters["width"] = 3;
    glTFParameters["position"] = [-1.8, 0.7, 0.0];
    glTFParameters["radius"] = 4;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMaterialSpecularGlossinessScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Material_SpecularGlossiness";
    glTFParameters["count"] = 14;
    glTFParameters["width"] = 5;
    glTFParameters["position"] = [-2.5, 1.3, 0.0];
    glTFParameters["radius"] = 5.6;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMeshPrimitiveModeScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Mesh_PrimitiveMode";
    glTFParameters["count"] = 16;
    glTFParameters["width"] = 6;
    glTFParameters["position"] = [-2.8, 1.3, 0.0];
    glTFParameters["radius"] = 6;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMeshPrimitivesScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Mesh_Primitives";
    glTFParameters["count"] = 3;
    glTFParameters["width"] = 4;
    glTFParameters["position"] = [-1.8, 0.7, 0.0];
    glTFParameters["radius"] = 4;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createMeshPrimitivesUVScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Mesh_PrimitivesUV";
    glTFParameters["count"] = 9;
    glTFParameters["width"] = 5;
    glTFParameters["position"] = [-2.5, 1.3, 0.0];
    glTFParameters["radius"] = 5.6;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createPrimitiveAttributeScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Mesh_PrimitiveAttribute";
    glTFParameters["count"] = 7;
    glTFParameters["width"] = 4;
    glTFParameters["position"] = [-1.8, 0.7, 0.0];
    glTFParameters["radius"] = 4;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createPrimitiveVertexColorScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Mesh_PrimitiveVertexColor";
    glTFParameters["count"] = 6;
    glTFParameters["width"] = 4;
    glTFParameters["position"] = [-1.8, 0.7, 0.0];
    glTFParameters["radius"] = 4.0;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function createTextureSamplerScene(engine) {
    var glTFParameters = {};
    glTFParameters["test"] = "Texture_Sampler";
    glTFParameters["count"] = 14;
    glTFParameters["width"] = 6;
    glTFParameters["position"] = [-3.0, 1.3, 0.0];
    glTFParameters["radius"] = 5.6;
    glTFParameters["flip"] = false;
    glTFParameters["showMenu"] = false;

    return loadScene(engine, glTFParameters);
}

function initScene(scene, camera, glTFParameters) {
    const assetRootDirectory = "/Assets/glTFTests/";
    if (glTFParameters) {
        const assetName = glTFParameters["test"];
        const total = glTFParameters["count"];
        const width = glTFParameters["width"];
        const position = glTFParameters["position"];
        let title = glTFParameters.title ? glTFParameters['title'].replace("_", "").replace(/%20/g, ' ').replace(/([A-Z])/g, ' $1') : glTFParameters["test"].replace("_", "").replace(/([A-Z])/g, ' $1');

        const flip = glTFParameters["flip"];
        const showMenu = glTFParameters["showMenu"];

        function glTFGrid(widthDistance, heightDistance, topLeft, rootDirectory, fileNamePrefix, flip) {
            function pad(num, width) {
                let z = '0';
                num = num + "";

                return num.length >= width ? num : new Array(width - num.length + 1).join(z) + num;
            }

            let height = total / width;
            let heightRemainder = (total / width) % width;
            if (heightRemainder > 0) {
                height += heightRemainder / heightRemainder;
            }

            const titleLabel = createLabel(scene, title);
            titleLabel.position.x = topLeft.x + ((width - 1) * widthDistance) / 2;
            titleLabel.position.y = topLeft.y + 0.8;

            for (let h = 0; h < height; ++h) {
                for (let w = 0; w < width; ++w) {
                    const id = w + (h * width);
                    if (id < total) {
                        const paddedID = pad(id, 2);
                        loadGLTF(scene, rootDirectory, fileNamePrefix + paddedID + ".gltf", "root" + paddedID, new BABYLON.Vector3(topLeft.x + w * widthDistance, topLeft.y - h * heightDistance, 0), paddedID, flip, fileNamePrefix + "00" + ".gltf");
                    }
                }
            }
        }

        glTFGrid(+1.2, +1.4, new BABYLON.Vector3(position[0], position[1], position[2]), assetRootDirectory + assetName + "/", assetName + "_", flip);

    }
    else {
        throw new Error("failed to load..");
    }
}

/**
 * Parse the url for parameters.
 */
function getURLParameters() {
    let parameters = {};
    const queryString = window.location.href;
    const urlSplit = queryString.split('?');
    if (urlSplit.length !== 2) {
        return null;
    }

    const params = urlSplit[1].split('&');
    params.forEach(function (param) {
        const keyValue = param.split('=');
        const key = keyValue[0];
        const value = keyValue[1];
        switch (key) {
            case 'title':
            case 'title':
            case 'test':
            case 'count':
            case 'width':
            case 'radius': {
                parameters[key] = value;
                break;
            }
            case 'flip':
            case 'showMenu': {
                parameters[key] = value === 'true';
                break;
            }
            case 'position': {
                const positionStrings = value.match(/-?[0-9]+(\.[0-9]+)?/g);
                parameters['position'] = [];
                positionStrings.forEach(function (element) {
                    parameters.position.push(Number(element));
                });
                break;
            }
            default:
                break;
        }
    });

    return parameters;
}

/**
 * Converts the data into json and initializes the test selector dropdown menu
 * @param {*} jsonFile
 */
function initDropdownMenu(jsonFile) {
    function readJSONFile(file, onSuccess) {
        const rawFile = new XMLHttpRequest();
        rawFile.overrideMimeType("application/json");
        rawFile.open("GET", file, true);
        rawFile.onreadystatechange = function () {
            if (rawFile.readyState === 4 && rawFile.status === 200) {
                onSuccess(rawFile.responseText);
            }
        }
        rawFile.send(null);
    }

    function generateTestSelectorHTML(data) {
        function setURLFromDropdown() {
            const selectTestDropdown = document.getElementById("testSelector");
            selectTestDropdown.addEventListener("change", function () {
                window.location.href = this.options[this.selectedIndex].value;
            });
        }
        let dropdownHTML = '<select id="testSelector" name="testSelector">Things' +
            '<option value="">Choose a Test</option>';

        const keys = Object.keys(data["tests"]).sort();

        keys.forEach(function(key) {
            dropdownHTML += '<option value=' + data["tests"][key]["url"] + '>' + key + '</option>';
        })
        dropdownHTML += '</select>';
        const testSelector = document.getElementById("testSelectorDiv").innerHTML = dropdownHTML;

        setURLFromDropdown();
    }

    readJSONFile(jsonFile, function (data) {
        const results = JSON.parse(data);
        generateTestSelectorHTML(results);
    });
}

/**
 * Load and render the glTF model with caption.  
 * We flip the glTF models by 180 degrees before rendering to conform to the glTF +z-forward convention.
 * @param {BABYLON.Scene} scene 
 * @param {string} rootUrl 
 * @param {string} sceneFileName 
 * @param {string} name 
 * @param {BABYLON.Vector3} position 
 * @param {string} caption 
 * @param {boolean} flip 
 */
function loadGLTF(scene, rootUrl, sceneFileName, name, position, caption, flip) {
    const rotation = new BABYLON.Vector3(0, Math.PI, 0);
    if (flip === true) {
        rotation.y = 0;
    }

    BABYLON.SceneLoader.ImportMesh("", rootUrl, sceneFileName, scene, function (meshes) {
        const root = new BABYLON.Mesh(name, scene);

        const textLabel0 = createLabel(scene, caption);
        textLabel0.position = position.clone();
        textLabel0.position.y -= 0.7;

        meshes.forEach(function(mesh) {
            if (!mesh.parent) {
                mesh.parent = root;
            }
        });

        root.position = position;
        root.rotation = rotation;
    }, null, null);
}

/**
 * Creates a text label.
 * @param {*} scene - BabylonJS scene object.
 * @param {string} text - Text to display for label.
 */
function createLabel(scene, text) {
    const dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 512, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, null, null, "36px Arial", "white", "transparent");

    const plane = BABYLON.Mesh.CreatePlane("TextPlane", 2, scene);
    plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = BABYLON.Color3.White();
    plane.material.diffuseTexture = dynamicTexture;
    plane.material.useAlphaFromDiffuseTexture = true;

    return plane;
}