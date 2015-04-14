$(document).on('ready', function() {

var outerShell = $('<div class="outer-shell"></div>');

var innerShell = $('<div class="inner-shell"></div>');

var am = $('<span class="am">AM</span>');

var pm = $('<span class="pm">PM</span>');

var auto = $('<span class="auto">Auto</span>');

var clockScreen = $('<div class="clock-screen"></div>');

var amPmIndicator = $('<span class="indicator">.</span>');

var clockText = $('<span class="clock-text">12:34</span>');

var amFreq = $('<span class="am-freq">AM .. 530 600 800  1100  1400  1700 ..KHz</span>');

var fmFreq = $('<span class="fm-freq">FM .. 87  91  95  99  103  106  108 ..MHz</span>');


$(".container").append(outerShell);
$(".container").append(innerShell);
$(innerShell).prepend(am);
$(innerShell).prepend(pm);
$(innerShell).prepend(auto);
$(innerShell).prepend(clockScreen);
$(clockScreen).prepend(amPmIndicator);
$(innerShell).append(amFreq);
$(innerShell).append(fmFreq);
$(clockScreen).append(clockText);












});