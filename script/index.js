function statusChangeCallback(response) { 
      console.log('statusChangeCallback'); 
	console.log(response); // response 객체는 현재 로그인 상태를 나타내는 정보를 보여준다. // 앱에서 현재의 로그인 상태에 따라 동작하면 된다. // FB.getLoginStatus().의 레퍼런스에서 더 자세한 내용이 참조 가능하다. 
     	if (response.status === 'connected') { // 페이스북을 통해서 로그인이 되어있다. 
        $('.facebook_button').hide();
        $('#status').show();
     		testAPI(); 
     	} else if (response.status === 'not_authorized') {
        $('#status').hide();
        $('.facebook_button').show();
     	 // 페이스북에는 로그인 했으나, 앱에는 로그인이 되어있지 않다. 
     	 //	document.getElementById('status').innerHTML = 'Please log ' + 'into this app.'; 
     	} else { // 페이스북에 로그인이 되어있지 않다. 따라서, 앱에 로그인이 되어있는지 여부가 불확실하다. 
        $('#status').hide();
        $('.facebook_button').show();
     		//document.getElementById('status').innerHTML = 'Please log ' + 'into Facebook.'; 
     	} 
}

function checkLoginState() { 
     	FB.getLoginStatus(function(response) { 
     		statusChangeCallback(response); 
     	}); 
}

function yeah() {
      FB.login(function() {
        checkLoginState();
      }, {scope: 'public_profile,email,user_friends'});
}

window.fbAsyncInit = function() {
      FB.init({
            appId : '1965247123751399',
            cookie : true,
            xfbml : true,
            version : 'v2.9'
      });
      console.log('여기까지 성공!');
      FB.getLoginStatus(function(response) {
      	console.log('여기는?');
      	statusChangeCallback(response);
      });

};

(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));

function testAPI() { 
	console.log('Welcome! Fetching your information.... '); 
	     FB.api('/me', function(response) { 
        document.getElementById("username").innerHTML = response.name;
    		console.log('Successful login for: ' + response.name); 
     		//document.getElementById('status').innerHTML = 'Thanks for logging in, ' + response.name + '!'; 
     	}); 
     	FB.api('/me/picture?type=square', function(res) { 
     		document.getElementById("profile").src = res.data.url;
        
     	}); 
 //     	FB.api("/me/friends", function(res) {
 //     		console.log(res);
 //     		for (var i in res.data) {
 //     			console.log(res.data[i].id);
 //     			FB.api('/' + res.data[i].id + '/picture?type=square', function(respond) { 
 //     			 	console.log(respond);
 //     			 	var a = document.createElement('img');
 //     			 	a.src = respond.data.url;
 //     			 	document.getElementById("status").appendChild(a);
 //     			}); 
 //     		}
	// });
}