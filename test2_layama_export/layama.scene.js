// Created with Motiva Layama v2.1 2101 LITE https://www.motivacg.com/layama
// Rendered with Layama for 3dsmax - V_Ray_6_Hotfix_3:V_Ray_6_Hotfix_3

function getLayamaCameras()
{
   var layamaCameras = [];
   layamaCameras.push({n: "test02_layama_0000", a: "PhysCamera001", p: {x:-563.719, y:111.671, z:6.28567}, l: {x:-464.163, y:111.671, z:-3.12362},f: [110.127,0.00896652,0.999957,0.00248969],c: [1,1,1,1]});
   layamaCameras.push({n: "test02_layama_0001", a: "PhysCamera003", p: {x:493.91, y:111.671, z:401.678}, l: {x:434.001, y:111.671, z:321.61}, f: [110.142,-0.00464302,0.999983,0.00351822], c: [1,1,1,1]});
   layamaCameras.push({n: "test02_layama_0002", a: "PhysCamera002", p: {x:-183.421, y:111.671, z:329.342}, l: {x:-118.722, y:111.671, z:253.093}, f: [110.101,0.0101355,0.999948,-0.000748606], c: [1,1,1,1]});
   layamaCameras.push({n: "test02_layama_0003", a: "PhysCamera004", p: {x:-214.738, y:111.671, z:-256.686}, l: {x:-116.742, y:111.671, z:-236.765}, f: [110.054,-0.0816186,0.996184,0.0309215], c: [1,1,1,1]});
   return layamaCameras;
}

function getLayamaResolutions()
{
   var layamaResolutions = [];
   layamaResolutions.push("512");
   layamaResolutions.push("512");
   return layamaResolutions;
}

function getLayamaControls()
{
   return {defMove: false, defRot: 1, altMove: true, altRot: 2};
}

