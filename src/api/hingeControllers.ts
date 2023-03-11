import { remove } from '@vue/shared';
import Api from '../utils/request'
import qs from 'qs'

async function apiAddHinge(
  dampingSystem: string,
  doorPanelAdjustment: string,
  hingeBase: string,
  hingeCupInstallation: string,
  id: string,
  installationMaterial: string,
  installationMethod: string,
  largeAngleHinge: string,
  model: string,
  name: string,
  openingAngle: string,
  optionalEquipment: string,
  shutDownSystem: string,
) {
  let api = await Api({
    url: '/HingeController/AddHinge',
    method: 'post',
    transformRequest: [function (data) {
      data = JSON.stringify(data)
      return data
    }],
    data: {
      "dampingSystem": dampingSystem,
      "doorPanelAdjustment": doorPanelAdjustment,
      "hingeBase": hingeBase,
      "hingeCupInstallation": hingeCupInstallation,
      "id": id,
      "installationMaterial": installationMaterial,
      "installationMethod": installationMethod,
      "largeAngleHinge": largeAngleHinge,
      "model": model,
      "name": name,
      "openingAngle": openingAngle,
      "optionalEquipment": optionalEquipment,
      "shutDownSystem": shutDownSystem,
    }
  }).then((res) => {
    return res;
  });
  return api;
}

async function apiupdateHinge(
  dampingSystem: string,
  doorPanelAdjustment: string,
  hingeBase: string,
  hingeCupInstallation: string,
  id: string,
  installationMaterial: string,
  installationMethod: string,
  largeAngleHinge: string,
  model: string,
  name: string,
  openingAngle: string,
  optionalEquipment: string,
  shutDownSystem: string,
) {
  let api = await Api({
    url: '/HingeController/updateHinge',
    method: 'post',
    params: {
      "dampingSystem": dampingSystem,
      "doorPanelAdjustment": doorPanelAdjustment,
      "hingeBase": hingeBase,
      "hingeCupInstallation": hingeCupInstallation,
      "id": id,
      "installationMaterial": installationMaterial,
      "installationMethod": installationMethod,
      "largeAngleHinge": largeAngleHinge,
      "model": model,
      "name": name,
      "openingAngle": openingAngle,
      "optionalEquipment": optionalEquipment,
      "shutDownSystem": shutDownSystem,
    }
  }).then((res) => {
    return res;
  });
  return api;
}



async function apiDropHinge(id: string) {
  let api = await Api({
    url: "/HingeController/DropHinge/" + id + "",
    method: 'get',
  }).then((res) => {
    return res;
  });
  return api;
}


async function apiAddImage(File: FormData, Url: string) {
  let a = File
  let api = await Api({
    url: "/HingeController/AddImage",
    method: 'post',
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data: {
      a
    },
    transformRequest: [
      function () {
        return a
      }
    ],
    params: {
      url: Url
    }


  }).then((res) => {
    return res;
  });
  return api;
}




async function apiHingeFindHinge(value: string) {

  let response = await Api({
    url: '/HingeController/FindHinge/' + value,
    method: 'get',
  }).then((res) => {
    return res;
  });
  return response;
}

async function apiHingeByAll() {

  let response = await Api({
    url: '/HingeController/FindAllHinge',
    method: 'post',
  }).then((res) => {
    return res;
  });
  return response;
}



export { apiHingeByAll, apiDropHinge, apiAddHinge, apiupdateHinge, apiHingeFindHinge, apiAddImage }
