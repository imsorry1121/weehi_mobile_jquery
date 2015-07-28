/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        window.parsePlugin.initialize("0MJW9p71s1OXaqG4tJdFx7s1vwujM6M9aHDZHhMk","rHohizLnOjuR1txWiRAOV85SVQrCCXT1yJNE5JIe", function() {
//        alert('success');           
           window.parsePlugin.getInstallationId(function(id) {
            installationID = id;  
            localStorage.setItem("installationID", id);
            // alert(id);      

                    window.parsePlugin.subscribe('', function() {
                    // alert('OK');
                    }, function(e) {
                        alert('error');
                    }); 
                        
                }, function(e) {
                    alert("Error Getting ID: " + e.code + " : " + e.message);
                });
            
        }, function(e) {        
            alert("Error: " + e.code + " : " + e.message);
        });
         
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};





   document.addEventListener('deviceready', this.onDeviceReady, false);
 function onDeviceReady() {
        //app.receivedEvent('deviceready');
		        window.parsePlugin.initialize("0MJW9p71s1OXaqG4tJdFx7s1vwujM6M9aHDZHhMk","rHohizLnOjuR1txWiRAOV85SVQrCCXT1yJNE5JIe", function() {
//		        alert('success');           
		           window.parsePlugin.getInstallationId(function(id) {
		            installationID = id;
                    localStorage.setItem("InstallationID",installationID);
//		            alert(id);      
		                    window.parsePlugin.subscribe('', function() {
		          //          alert('OK');
		                    
		                    
		                    
		                    
		                    }, function(e) {
		                        alert('error');
		                    }); 
		                        
		                }, function(e) {
		                    alert("Error Getting ID: " + e.code + " : " + e.message);
		                });
		            
		        }, function(e) {        
		            alert("Error: " + e.code + " : " + e.message);
		        });          
		    };    

document.addEventListener("resume", function(){

//alert("resume");
window.plugins.webintent.hasExtra('com.parse.Data',
            function(has) {
            alert(has);
                if (has) {
                    // has is true iff it has the extra
                    console.error('extra was gettable');
                    window.plugins.webintent.getExtra('com.parse.Data',
                        function(data) {

                            var data = JSON.stringify(data),
                                data = data.replace(/[\\]/g, '').replace(/[\/]/g, ''),
                                data = data.replace(/"(.+)"/, "$1"),
                                data = $.parseJSON(data);

                            Parse.history.navigate('notification/' + data.pid, true);

                            // if user authenticated already just route 
                            // if not authenticate then route...
                            //AppUser.authenticate();
                        }, function() {
                            // There was no extra supplied.
                            console.error('extra was NOT gettable');
                        }
                    );
                } else {
                    console.error('extra was NOT supplied');
                }
            }, function() {
                // Something really bad happened.
                console.error('Something really bad happened');
            }
        );
  // check for your webintent and perform your action
}, true);

