var loadedResources=new Array;function grabResource(resourceKey,gotoRoot){var value=loadedResources[resourceKey];if(value==null){var url="resourceGrabber.do?key\x3d"+resourceKey;if(gotoRoot&&(isMozilla()||isFirefox()))url="../../"+url;var deploymentId=document.getElementById("deploymentId");if(deploymentId!=null&&deploymentId.value!=null)url+="\x26deploymentId\x3d"+deploymentId.value;makeSynchronousTextRequest(url,"setResourceValue","void(0)");value=loadedResources[resourceKey]}return value}
function grabResourceWithParams(resourceKey,params){var msg=grabResource(resourceKey);for(var i=0;i<params.length;i++)msg=msg.replace("{"+i+"}",params[i]);return msg}function setResourceValue(keyValueString){var keyValueSplit=keyValueString.split("\x3d");if(keyValueSplit.length==2){var key=keyValueSplit[0];var value=keyValueSplit[1];loadedResources[key]=value}};