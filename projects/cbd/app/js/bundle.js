(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var navBar = document.getElementById("navBar");
var burger = document.getElementById("burger");
var mobileMenu = document.getElementById("mobileNav");
document.addEventListener("scroll", function () {
  if (window.pageYOffset < navBar.clientHeight) {
    navBar.classList.remove("filled");
  } else {
    navBar.classList.add("filled");
  }
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9jYmQvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUEsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBZjtBQUNBLElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxjQUFULENBQXdCLFFBQXhCLENBQWY7QUFDQSxJQUFNLFVBQVUsR0FBRyxRQUFRLENBQUMsY0FBVCxDQUF3QixXQUF4QixDQUFuQjtBQUdBLFFBQVEsQ0FBQyxnQkFBVCxDQUEwQixRQUExQixFQUFvQyxZQUFNO0FBQ3hDLE1BQUksTUFBTSxDQUFDLFdBQVAsR0FBcUIsTUFBTSxDQUFDLFlBQWhDLEVBQThDO0FBQzVDLElBQUEsTUFBTSxDQUFDLFNBQVAsQ0FBaUIsTUFBakIsQ0FBd0IsUUFBeEI7QUFDRCxHQUZELE1BRU87QUFDTCxJQUFBLE1BQU0sQ0FBQyxTQUFQLENBQWlCLEdBQWpCLENBQXFCLFFBQXJCO0FBQ0Q7QUFDRixDQU5EIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCJjb25zdCBuYXZCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5hdkJhclwiKTtcclxuY29uc3QgYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidXJnZXJcIik7XHJcbmNvbnN0IG1vYmlsZU1lbnUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1vYmlsZU5hdlwiKTtcclxuXHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwic2Nyb2xsXCIsICgpID0+IHtcclxuICBpZiAod2luZG93LnBhZ2VZT2Zmc2V0IDwgbmF2QmFyLmNsaWVudEhlaWdodCkge1xyXG4gICAgbmF2QmFyLmNsYXNzTGlzdC5yZW1vdmUoXCJmaWxsZWRcIik7XHJcbiAgfSBlbHNlIHtcclxuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKFwiZmlsbGVkXCIpO1xyXG4gIH1cclxufSk7Il0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTlqWW1RdmMzSmpMMnB6TDJGd2NDNXFjeUpkTENKdVlXMWxjeUk2VzEwc0ltMWhjSEJwYm1keklqb2lRVUZCUVRzN08wRkRRVUVzU1VGQlRTeE5RVUZOTEVkQlFVY3NVVUZCVVN4RFFVRkRMR05CUVZRc1EwRkJkMElzVVVGQmVFSXNRMEZCWmp0QlFVTkJMRWxCUVUwc1RVRkJUU3hIUVVGSExGRkJRVkVzUTBGQlF5eGpRVUZVTEVOQlFYZENMRkZCUVhoQ0xFTkJRV1k3UVVGRFFTeEpRVUZOTEZWQlFWVXNSMEZCUnl4UlFVRlJMRU5CUVVNc1kwRkJWQ3hEUVVGM1FpeFhRVUY0UWl4RFFVRnVRanRCUVVkQkxGRkJRVkVzUTBGQlF5eG5Ra0ZCVkN4RFFVRXdRaXhSUVVFeFFpeEZRVUZ2UXl4WlFVRk5PMEZCUTNoRExFMUJRVWtzVFVGQlRTeERRVUZETEZkQlFWQXNSMEZCY1VJc1RVRkJUU3hEUVVGRExGbEJRV2hETEVWQlFUaERPMEZCUXpWRExFbEJRVUVzVFVGQlRTeERRVUZETEZOQlFWQXNRMEZCYVVJc1RVRkJha0lzUTBGQmQwSXNVVUZCZUVJN1FVRkRSQ3hIUVVaRUxFMUJSVTg3UVVGRFRDeEpRVUZCTEUxQlFVMHNRMEZCUXl4VFFVRlFMRU5CUVdsQ0xFZEJRV3BDTEVOQlFYRkNMRkZCUVhKQ08wRkJRMFE3UVVGRFJpeERRVTVFSWl3aVptbHNaU0k2SW1kbGJtVnlZWFJsWkM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWelEyOXVkR1Z1ZENJNld5SW9ablZ1WTNScGIyNG9LWHRtZFc1amRHbHZiaUJ5S0dVc2JpeDBLWHRtZFc1amRHbHZiaUJ2S0drc1ppbDdhV1lvSVc1YmFWMHBlMmxtS0NGbFcybGRLWHQyWVhJZ1l6MWNJbVoxYm1OMGFXOXVYQ0k5UFhSNWNHVnZaaUJ5WlhGMWFYSmxKaVp5WlhGMWFYSmxPMmxtS0NGbUppWmpLWEpsZEhWeWJpQmpLR2tzSVRBcE8ybG1LSFVwY21WMGRYSnVJSFVvYVN3aE1DazdkbUZ5SUdFOWJtVjNJRVZ5Y205eUtGd2lRMkZ1Ym05MElHWnBibVFnYlc5a2RXeGxJQ2RjSWl0cEsxd2lKMXdpS1R0MGFISnZkeUJoTG1OdlpHVTlYQ0pOVDBSVlRFVmZUazlVWDBaUFZVNUVYQ0lzWVgxMllYSWdjRDF1VzJsZFBYdGxlSEJ2Y25Sek9udDlmVHRsVzJsZFd6QmRMbU5oYkd3b2NDNWxlSEJ2Y25SekxHWjFibU4wYVc5dUtISXBlM1poY2lCdVBXVmJhVjFiTVYxYmNsMDdjbVYwZFhKdUlHOG9ibng4Y2lsOUxIQXNjQzVsZUhCdmNuUnpMSElzWlN4dUxIUXBmWEpsZEhWeWJpQnVXMmxkTG1WNGNHOXlkSE45Wm05eUtIWmhjaUIxUFZ3aVpuVnVZM1JwYjI1Y0lqMDlkSGx3Wlc5bUlISmxjWFZwY21VbUpuSmxjWFZwY21Vc2FUMHdPMms4ZEM1c1pXNW5kR2c3YVNzcktXOG9kRnRwWFNrN2NtVjBkWEp1SUc5OWNtVjBkWEp1SUhKOUtTZ3BJaXdpWTI5dWMzUWdibUYyUW1GeUlEMGdaRzlqZFcxbGJuUXVaMlYwUld4bGJXVnVkRUo1U1dRb1hDSnVZWFpDWVhKY0lpazdYSEpjYm1OdmJuTjBJR0oxY21kbGNpQTlJR1J2WTNWdFpXNTBMbWRsZEVWc1pXMWxiblJDZVVsa0tGd2lZblZ5WjJWeVhDSXBPMXh5WEc1amIyNXpkQ0J0YjJKcGJHVk5aVzUxSUQwZ1pHOWpkVzFsYm5RdVoyVjBSV3hsYldWdWRFSjVTV1FvWENKdGIySnBiR1ZPWVhaY0lpazdYSEpjYmx4eVhHNWNjbHh1Wkc5amRXMWxiblF1WVdSa1JYWmxiblJNYVhOMFpXNWxjaWhjSW5OamNtOXNiRndpTENBb0tTQTlQaUI3WEhKY2JpQWdhV1lnS0hkcGJtUnZkeTV3WVdkbFdVOW1abk5sZENBOElHNWhka0poY2k1amJHbGxiblJJWldsbmFIUXBJSHRjY2x4dUlDQWdJRzVoZGtKaGNpNWpiR0Z6YzB4cGMzUXVjbVZ0YjNabEtGd2labWxzYkdWa1hDSXBPMXh5WEc0Z0lIMGdaV3h6WlNCN1hISmNiaUFnSUNCdVlYWkNZWEl1WTJ4aGMzTk1hWE4wTG1Ga1pDaGNJbVpwYkd4bFpGd2lLVHRjY2x4dUlDQjlYSEpjYm4wcE95SmRmUT09In0=