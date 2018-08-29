function createScene(engine) {
    var scene = new BABYLON.Scene(engine);

    var hdrTexture = BABYLON.CubeTexture.CreateFromPrefilteredData("/Assets/environment.dds", scene);
    hdrTexture.gammaSpace = false;
    scene.createDefaultSkybox(hdrTexture, true, 100, 0.3);

    var camera = new BABYLON.ArcRotateCamera("camera", -Math.PI / 2, Math.PI / 2, 20);
    camera.wheelPrecision = 100;
    camera.attachControl(scene.getEngine().getRenderingCanvas());

    let parent = new BABYLON.TransformNode("parent, scene");
    let plane = createTextureTransformPlane(new BABYLON.Vector3(-2,6,0), 3, null, null, null, scene);
    plane.parent = parent;
    
    let planeOffset = createTextureTransformPlane(new BABYLON.Vector3(-2,2,0), 3, new BABYLON.Vector2(0.3, 0.1), null, null, scene);
    planeOffset.parent = parent;
    let planeScale = createTextureTransformPlane(new BABYLON.Vector3(-2,-2,0), 3, null, new BABYLON.Vector2(-1, 1), null, scene);
    planeScale.parent = parent;
    let planeRotation = createTextureTransformPlane(new BABYLON.Vector3(-2,-6,0), 3, null, null, Math.PI/4, scene);
    planeRotation.parent = parent;

    BABYLON.GLTF2Export.GLBAsync(scene, "glTFTextureTransform").then((glbData) => {
        let glb = glbData.glTFFiles["glTFTextureTransform.glb"];
        let url = URL.createObjectURL(new Blob([glb]), {type: "model/gltf-binary"});

        BABYLON.SceneLoader.ImportMeshAsync(null, "", url, scene, null, ".glb").then(function(result) {
            result.meshes[0].position.x = 5;
        });
    });

    return scene;
}

function loadModel(scene, name, center, caption) {
    BABYLON.SceneLoader.ImportMesh("", "/Assets/TestCube/", name, scene, function (meshes) {
        var root = new BABYLON.Mesh("root", scene);
        meshes.forEach(mesh => {
            if (!mesh.parent) {
                mesh.setParent(root);
            }
        });

        root.position = center;
        root.rotation = new BABYLON.Vector3(Math.PI / 4, Math.PI / 4, 0);

        var label = createLabel(scene, caption);
        label.position = center.clone();
        label.position.y -= 1;
    });
}

function createLabel(scene, text) {
    var dynamicTexture = new BABYLON.DynamicTexture("DynamicTexture", 512, scene, true);
    dynamicTexture.hasAlpha = true;
    dynamicTexture.drawText(text, null, null, "36px Arial", "white", "transparent");
    var plane = BABYLON.Mesh.CreatePlane("TextPlane", 2, scene);
    plane.material = new BABYLON.StandardMaterial("TextPlaneMaterial", scene);
    plane.material.backFaceCulling = false;
    plane.material.specularColor = BABYLON.Color3.Black();
    plane.material.diffuseTexture = dynamicTexture;
    plane.material.useAlphaFromDiffuseTexture = true;
    return plane;
}

function createTextureTransformPlane(planePosition, width, offset, scale, rotation, scene) {
    let plane = BABYLON.Mesh.CreatePlane("plane", width, scene);
    plane.position = planePosition;
    let material = new BABYLON.PBRMaterial("standMat", scene);
    material.roughness = 1;
    material.specularIntensity = 0;
    let texture = new BABYLON.Texture("/Assets/amiga.jpg", scene);

    if (offset != null) {
        texture.uOffset = offset.x;
        texture.vOffset = offset.y;
    }
    if (scale != null) {
        texture.uScale = scale.x;
        texture.vScale = scale.y;
    }
    if (rotation != null) {
        texture.wAng = rotation;
    }
    material.albedoTexture = texture;
    plane.material = material;

    return plane;
}
