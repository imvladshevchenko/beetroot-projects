(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

var _rxjs = rxjs,
    range = _rxjs.range;
var _rxjs$operators = rxjs.operators,
    map = _rxjs$operators.map,
    filter = _rxjs$operators.filter;
range(1, 200).pipe(filter(function (x) {
  return x % 2 === 1;
}), map(function (x) {
  return x + x;
})).subscribe(function (x) {
  return console.log(x);
});

},{}]},{},[1])

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJwcm9qZWN0cy9zdG9wd2F0Y2gvc3JjL2pzL2FwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O1lDQWtCLEk7SUFBVixLLFNBQUEsSztzQkFDZ0IsSUFBSSxDQUFDLFM7SUFBckIsRyxtQkFBQSxHO0lBQUssTSxtQkFBQSxNO0FBRWIsS0FBSyxDQUFDLENBQUQsRUFBSSxHQUFKLENBQUwsQ0FDRyxJQURILENBRUksTUFBTSxDQUFDLFVBQUEsQ0FBQztBQUFBLFNBQUksQ0FBQyxHQUFHLENBQUosS0FBVSxDQUFkO0FBQUEsQ0FBRixDQUZWLEVBR0ksR0FBRyxDQUFDLFVBQUEsQ0FBQztBQUFBLFNBQUksQ0FBQyxHQUFHLENBQVI7QUFBQSxDQUFGLENBSFAsRUFLRyxTQUxILENBS2EsVUFBQSxDQUFDO0FBQUEsU0FBSSxPQUFPLENBQUMsR0FBUixDQUFZLENBQVosQ0FBSjtBQUFBLENBTGQiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImNvbnN0IHsgcmFuZ2UgfSA9IHJ4anM7XHJcbmNvbnN0IHsgbWFwLCBmaWx0ZXIgfSA9IHJ4anMub3BlcmF0b3JzO1xyXG5cclxucmFuZ2UoMSwgMjAwKVxyXG4gIC5waXBlKFxyXG4gICAgZmlsdGVyKHggPT4geCAlIDIgPT09IDEpLFxyXG4gICAgbWFwKHggPT4geCArIHgpXHJcbiAgKVxyXG4gIC5zdWJzY3JpYmUoeCA9PiBjb25zb2xlLmxvZyh4KSk7Il0sInByZUV4aXN0aW5nQ29tbWVudCI6Ii8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKemIzVnlZMlZ6SWpwYkltNXZaR1ZmYlc5a2RXeGxjeTlpY205M2MyVnlMWEJoWTJzdlgzQnlaV3gxWkdVdWFuTWlMQ0p3Y205cVpXTjBjeTl6ZEc5d2QyRjBZMmd2YzNKakwycHpMMkZ3Y0M1cWN5SmRMQ0p1WVcxbGN5STZXMTBzSW0xaGNIQnBibWR6SWpvaVFVRkJRVHM3TzFsRFFXdENMRWs3U1VGQlZpeExMRk5CUVVFc1N6dHpRa0ZEWjBJc1NVRkJTU3hEUVVGRExGTTdTVUZCY2tJc1J5eHRRa0ZCUVN4SE8wbEJRVXNzVFN4dFFrRkJRU3hOTzBGQlJXSXNTMEZCU3l4RFFVRkRMRU5CUVVRc1JVRkJTU3hIUVVGS0xFTkJRVXdzUTBGRFJ5eEpRVVJJTEVOQlJVa3NUVUZCVFN4RFFVRkRMRlZCUVVFc1EwRkJRenRCUVVGQkxGTkJRVWtzUTBGQlF5eEhRVUZITEVOQlFVb3NTMEZCVlN4RFFVRmtPMEZCUVVFc1EwRkJSaXhEUVVaV0xFVkJSMGtzUjBGQlJ5eERRVUZETEZWQlFVRXNRMEZCUXp0QlFVRkJMRk5CUVVrc1EwRkJReXhIUVVGSExFTkJRVkk3UVVGQlFTeERRVUZHTEVOQlNGQXNSVUZMUnl4VFFVeElMRU5CUzJFc1ZVRkJRU3hEUVVGRE8wRkJRVUVzVTBGQlNTeFBRVUZQTEVOQlFVTXNSMEZCVWl4RFFVRlpMRU5CUVZvc1EwRkJTanRCUVVGQkxFTkJUR1FpTENKbWFXeGxJam9pWjJWdVpYSmhkR1ZrTG1weklpd2ljMjkxY21ObFVtOXZkQ0k2SWlJc0luTnZkWEpqWlhORGIyNTBaVzUwSWpwYklpaG1kVzVqZEdsdmJpZ3BlMloxYm1OMGFXOXVJSElvWlN4dUxIUXBlMloxYm1OMGFXOXVJRzhvYVN4bUtYdHBaaWdoYmx0cFhTbDdhV1lvSVdWYmFWMHBlM1poY2lCalBWd2lablZ1WTNScGIyNWNJajA5ZEhsd1pXOW1JSEpsY1hWcGNtVW1KbkpsY1hWcGNtVTdhV1lvSVdZbUptTXBjbVYwZFhKdUlHTW9hU3doTUNrN2FXWW9kU2x5WlhSMWNtNGdkU2hwTENFd0tUdDJZWElnWVQxdVpYY2dSWEp5YjNJb1hDSkRZVzV1YjNRZ1ptbHVaQ0J0YjJSMWJHVWdKMXdpSzJrclhDSW5YQ0lwTzNSb2NtOTNJR0V1WTI5a1pUMWNJazFQUkZWTVJWOU9UMVJmUms5VlRrUmNJaXhoZlhaaGNpQndQVzViYVYwOWUyVjRjRzl5ZEhNNmUzMTlPMlZiYVYxYk1GMHVZMkZzYkNod0xtVjRjRzl5ZEhNc1puVnVZM1JwYjI0b2NpbDdkbUZ5SUc0OVpWdHBYVnN4WFZ0eVhUdHlaWFIxY200Z2J5aHVmSHh5S1gwc2NDeHdMbVY0Y0c5eWRITXNjaXhsTEc0c2RDbDljbVYwZFhKdUlHNWJhVjB1Wlhod2IzSjBjMzFtYjNJb2RtRnlJSFU5WENKbWRXNWpkR2x2Ymx3aVBUMTBlWEJsYjJZZ2NtVnhkV2x5WlNZbWNtVnhkV2x5WlN4cFBUQTdhVHgwTG14bGJtZDBhRHRwS3lzcGJ5aDBXMmxkS1R0eVpYUjFjbTRnYjMxeVpYUjFjbTRnY24wcEtDa2lMQ0pqYjI1emRDQjdJSEpoYm1kbElIMGdQU0J5ZUdwek8xeHlYRzVqYjI1emRDQjdJRzFoY0N3Z1ptbHNkR1Z5SUgwZ1BTQnllR3B6TG05d1pYSmhkRzl5Y3p0Y2NseHVYSEpjYm5KaGJtZGxLREVzSURJd01DbGNjbHh1SUNBdWNHbHdaU2hjY2x4dUlDQWdJR1pwYkhSbGNpaDRJRDArSUhnZ0pTQXlJRDA5UFNBeEtTeGNjbHh1SUNBZ0lHMWhjQ2g0SUQwK0lIZ2dLeUI0S1Z4eVhHNGdJQ2xjY2x4dUlDQXVjM1ZpYzJOeWFXSmxLSGdnUFQ0Z1kyOXVjMjlzWlM1c2IyY29lQ2twT3lKZGZRPT0ifQ==
