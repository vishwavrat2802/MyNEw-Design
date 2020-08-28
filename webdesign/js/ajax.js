(function (global) {


	var ajaxUtils = {};

	function getrequestOBJECT() {

		if(window.XMLHttpRequest){

			return (new XMLHttpRequest());
		}

		else {
			global.alert("Ajax is not supported")
		}

	};

	ajaxUtils.sendGETrequest = function(requesturl , responseHandler , jsonrequest){

		var request = getrequestOBJECT();
		request.onreadystatechange = function() {

			handleResponse (request , responseHandler , jsonrequest);
		};

		request.open("GET" , requesturl , true);
		request.send(null);
	};

	function handleResponse (request , responseHandler,jsonrequest) {

		console.log(request)
		if ((request.readyState == 4) && (request.status == 200)) {


			if(jsonrequest == undefined){
				jsonrequest = true;
			}

			if (jsonrequest){
				responseHandler(JSON.parse(request.responseText));
			}

			else {
				responseHandler(request.responseText);
			};
		};
	};
	global.$ajaxUtils = ajaxUtils;

})(window);