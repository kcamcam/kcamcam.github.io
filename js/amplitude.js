!function(e,t){var n=e.amplitude||{_q:[],_iq:{}},i=t.createElement("script");i.type="text/javascript",i.integrity="sha384-d/yhnowERvm+7eCU79T/bYjOiMmq4F11ElWYLmt0ktvYEVgqLDazh4+gW9CKMpYW",i.crossOrigin="anonymous",i.async=!0,i.src="https://cdn.amplitude.com/libs/amplitude-5.2.2-min.gz.js",i.onload=function(){e.amplitude.runQueuedFunctions||console.log("[Amplitude] Error: could not load SDK")};var r=t.getElementsByTagName("script")[0];function s(e,t){e.prototype[t]=function(){return this._q.push([t].concat(Array.prototype.slice.call(arguments,0))),this}}r.parentNode.insertBefore(i,r);for(var o=function(){return this._q=[],this},a=["add","append","clearAll","prepend","set","setOnce","unset"],c=0;c<a.length;c++)s(o,a[c]);n.Identify=o;for(var u=function(){return this._q=[],this},l=["setProductId","setQuantity","setPrice","setRevenueType","setEventProperties"],p=0;p<l.length;p++)s(u,l[p]);n.Revenue=u;var d=["init","logEvent","logRevenue","setUserId","setUserProperties","setOptOut","setVersionName","setDomain","setDeviceId","setGlobalUserProperties","identify","clearUserProperties","setGroup","logRevenueV2","regenerateDeviceId","groupIdentify","onInit","logEventWithTimestamp","logEventWithGroups","setSessionId","resetSessionId"];function g(e){function t(t){e[t]=function(){e._q.push([t].concat(Array.prototype.slice.call(arguments,0)))}}for(var n=0;n<d.length;n++)t(d[n])}g(n),n.getInstance=function(e){return e=(e&&0!==e.length?e:"$default_instance").toLowerCase(),n._iq.hasOwnProperty(e)||(n._iq[e]={_q:[]},g(n._iq[e])),n._iq[e]},e.amplitude=n}(window,document),amplitude.getInstance().init("ce3618ba74bc7ef9c11419d1e01dcc2a");