(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{configurable:!1,enumerable:!0,get:d})},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='static/build',b(b.s=2)})([function(a){a.exports=jQuery},,function(a,b,c){'use strict';Object.defineProperty(b,'__esModule',{value:!0});var d=c(5),e=c.n(d),f=c(3),g=c(4);$('input[name=\'playtime\']').TouchSpin({min:10,max:600,step:5,boostat:20,maxboostedstep:50,verticalbuttons:!0,verticalupclass:'fas fa-angle-up fa-lg',verticaldownclass:'fas fa-angle-down fa-lg',postfix:'minutes'}),$('input[name=\'playnum\']').TouchSpin({min:2,max:7,boostat:4,verticalbuttons:!0,verticalupclass:'fas fa-angle-up fa-lg',verticaldownclass:'fas fa-angle-down fa-lg',postfix:'players'}),$('#weight').barrating({theme:'bars-movie'})},function(){var a=Math.floor,b=Math.round;(function(c){'use strict';function d(a,b){return a+'.touchspin_'+b}function e(a,b){return c.map(a,function(a){return d(a,b)})}var f=0;c.fn.TouchSpin=function(d){if('destroy'===d)return void this.each(function(){var a=c(this),b=a.data();c(document).off(e(['mouseup','touchend','touchcancel','mousemove','touchmove','scroll','scrollstart'],b.spinnerid).join(' '))});var g={min:0,max:100,initval:'',replacementval:'',step:1,decimals:0,stepinterval:100,forcestepdivisibility:'round',stepintervaldelay:500,verticalbuttons:!1,verticalupclass:'glyphicon glyphicon-chevron-up',verticaldownclass:'glyphicon glyphicon-chevron-down',prefix:'',postfix:'',prefix_extraclass:'',postfix_extraclass:'',booster:!0,boostat:10,maxboostedstep:!1,mousewheel:!0,buttondown_class:'btn btn-default',buttonup_class:'btn btn-default',buttondown_txt:'-',buttonup_txt:'+'},h={min:'min',max:'max',initval:'init-val',replacementval:'replacement-val',step:'step',decimals:'decimals',stepinterval:'step-interval',verticalbuttons:'vertical-buttons',verticalupclass:'vertical-up-class',verticaldownclass:'vertical-down-class',forcestepdivisibility:'force-step-divisibility',stepintervaldelay:'step-interval-delay',prefix:'prefix',postfix:'postfix',prefix_extraclass:'prefix-extra-class',postfix_extraclass:'postfix-extra-class',booster:'booster',boostat:'boostat',maxboostedstep:'max-boosted-step',mousewheel:'mouse-wheel',buttondown_class:'button-down-class',buttonup_class:'button-up-class',buttondown_txt:'button-down-txt',buttonup_txt:'button-up-txt'};return this.each(function(){function i(){''!==C.initval&&''===K.val()&&K.val(C.initval)}function j(a){m(a),v();var b=E.input.val();''!==b&&(b=+E.input.val(),E.input.val(b.toFixed(C.decimals)))}function k(){C=c.extend({},g,L,l(),d)}function l(){var a={};return c.each(h,function(b,c){var d='bts-'+c+'';K.is('[data-'+d+']')&&(a[b]=K.data(d))}),a}function m(a){C=c.extend({},C,a)}function n(){var a=K.val(),b=K.parent();''!==a&&(a=(+a).toFixed(C.decimals)),K.data('initvalue',a).val(a),K.addClass('form-control'),b.hasClass('input-group')?o(b):p()}function o(a){a.addClass('bootstrap-touchspin');var b,d,e=K.prev(),f=K.next(),g='<span class="input-group-addon bootstrap-touchspin-prefix">'+C.prefix+'</span>',h='<span class="input-group-addon bootstrap-touchspin-postfix">'+C.postfix+'</span>';e.hasClass('input-group-btn')?(b='<button class="'+C.buttondown_class+' bootstrap-touchspin-down" type="button">'+C.buttondown_txt+'</button>',e.append(b)):(b='<span class="input-group-btn"><button class="'+C.buttondown_class+' bootstrap-touchspin-down" type="button">'+C.buttondown_txt+'</button></span>',c(b).insertBefore(K)),f.hasClass('input-group-btn')?(d='<button class="'+C.buttonup_class+' bootstrap-touchspin-up" type="button">'+C.buttonup_txt+'</button>',f.prepend(d)):(d='<span class="input-group-btn"><button class="'+C.buttonup_class+' bootstrap-touchspin-up" type="button">'+C.buttonup_txt+'</button></span>',c(d).insertAfter(K)),c(g).insertBefore(K),c(h).insertAfter(K),D=a}function p(){var a;a=C.verticalbuttons?'<div class="input-group bootstrap-touchspin"><span class="input-group-addon bootstrap-touchspin-prefix">'+C.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+C.postfix+'</span><span class="input-group-btn-vertical"><button class="'+C.buttondown_class+' bootstrap-touchspin-up" type="button"><i class="'+C.verticalupclass+'"></i></button><button class="'+C.buttonup_class+' bootstrap-touchspin-down" type="button"><i class="'+C.verticaldownclass+'"></i></button></span></div>':'<div class="input-group bootstrap-touchspin"><span class="input-group-btn"><button class="'+C.buttondown_class+' bootstrap-touchspin-down" type="button">'+C.buttondown_txt+'</button></span><span class="input-group-addon bootstrap-touchspin-prefix">'+C.prefix+'</span><span class="input-group-addon bootstrap-touchspin-postfix">'+C.postfix+'</span><span class="input-group-btn"><button class="'+C.buttonup_class+' bootstrap-touchspin-up" type="button">'+C.buttonup_txt+'</button></span></div>',D=c(a).insertBefore(K),c('.bootstrap-touchspin-prefix',D).after(K),K.hasClass('input-sm')?D.addClass('input-group-sm'):K.hasClass('input-lg')&&D.addClass('input-group-lg')}function q(){E={down:c('.bootstrap-touchspin-down',D),up:c('.bootstrap-touchspin-up',D),input:c('input',D),prefix:c('.bootstrap-touchspin-prefix',D).addClass(C.prefix_extraclass),postfix:c('.bootstrap-touchspin-postfix',D).addClass(C.postfix_extraclass)}}function r(){''===C.prefix&&E.prefix.hide(),''===C.postfix&&E.postfix.hide()}function s(){K.on('keydown',function(a){var b=a.keyCode||a.which;38===b?('up'!==N&&(x(),A()),a.preventDefault()):40===b&&('down'!==N&&(y(),z()),a.preventDefault())}),K.on('keyup',function(a){var b=a.keyCode||a.which;38===b?B():40===b&&B()}),K.on('blur',function(){v()}),E.down.on('keydown',function(a){var b=a.keyCode||a.which;(32===b||13===b)&&('down'!==N&&(y(),z()),a.preventDefault())}),E.down.on('keyup',function(a){var b=a.keyCode||a.which;(32===b||13===b)&&B()}),E.up.on('keydown',function(a){var b=a.keyCode||a.which;(32===b||13===b)&&('up'!==N&&(x(),A()),a.preventDefault())}),E.up.on('keyup',function(a){var b=a.keyCode||a.which;(32===b||13===b)&&B()}),E.down.on('mousedown.touchspin',function(a){E.down.off('touchstart.touchspin');K.is(':disabled')||(y(),z(),a.preventDefault(),a.stopPropagation())}),E.down.on('touchstart.touchspin',function(a){E.down.off('mousedown.touchspin');K.is(':disabled')||(y(),z(),a.preventDefault(),a.stopPropagation())}),E.up.on('mousedown.touchspin',function(a){E.up.off('touchstart.touchspin');K.is(':disabled')||(x(),A(),a.preventDefault(),a.stopPropagation())}),E.up.on('touchstart.touchspin',function(a){E.up.off('mousedown.touchspin');K.is(':disabled')||(x(),A(),a.preventDefault(),a.stopPropagation())}),E.up.on('mouseout touchleave touchend touchcancel',function(a){N&&(a.stopPropagation(),B())}),E.down.on('mouseout touchleave touchend touchcancel',function(a){N&&(a.stopPropagation(),B())}),E.down.on('mousemove touchmove',function(a){N&&(a.stopPropagation(),a.preventDefault())}),E.up.on('mousemove touchmove',function(a){N&&(a.stopPropagation(),a.preventDefault())}),c(document).on(e(['mouseup','touchend','touchcancel'],f).join(' '),function(a){N&&(a.preventDefault(),B())}),c(document).on(e(['mousemove','touchmove','scroll','scrollstart'],f).join(' '),function(a){N&&(a.preventDefault(),B())}),K.on('mousewheel DOMMouseScroll',function(a){if(C.mousewheel&&K.is(':focus')){var b=a.originalEvent.wheelDelta||-a.originalEvent.deltaY||-a.originalEvent.detail;a.stopPropagation(),a.preventDefault(),0>b?y():x()}})}function t(){K.on('touchspin.uponce',function(){B(),x()}),K.on('touchspin.downonce',function(){B(),y()}),K.on('touchspin.startupspin',function(){A()}),K.on('touchspin.startdownspin',function(){z()}),K.on('touchspin.stopspin',function(){B()}),K.on('touchspin.updatesettings',function(a,b){j(b)})}function u(c){switch(C.forcestepdivisibility){case'round':return(b(c/C.step)*C.step).toFixed(C.decimals);case'floor':return(a(c/C.step)*C.step).toFixed(C.decimals);case'ceil':return(Math.ceil(c/C.step)*C.step).toFixed(C.decimals);default:return c;}}function v(){var a,b,c;return a=K.val(),''===a?void(''!==C.replacementval&&(K.val(C.replacementval),K.trigger('change'))):void(0<C.decimals&&'.'===a||(b=parseFloat(a),isNaN(b)&&(''===C.replacementval?b=0:b=C.replacementval),c=b,b.toString()!==a&&(c=b),b<C.min&&(c=C.min),b>C.max&&(c=C.max),c=u(c),(+a).toString()!==c.toString()&&(K.val(c),K.trigger('change'))))}function w(){if(!C.booster)return C.step;var c=Math.pow(2,a(M/C.boostat))*C.step;return C.maxboostedstep&&c>C.maxboostedstep&&(c=C.maxboostedstep,F=b(F/c)*c),Math.max(C.step,c)}function x(){v(),F=parseFloat(E.input.val()),isNaN(F)&&(F=0);var a=F,b=w();F+=b,F>C.max&&(F=C.max,K.trigger('touchspin.on.max'),B()),E.input.val((+F).toFixed(C.decimals)),a!==F&&K.trigger('change')}function y(){v(),F=parseFloat(E.input.val()),isNaN(F)&&(F=0);var a=F,b=w();F-=b,F<C.min&&(F=C.min,K.trigger('touchspin.on.min'),B()),E.input.val(F.toFixed(C.decimals)),a!==F&&K.trigger('change')}function z(){B(),M=0,N='down',K.trigger('touchspin.on.startspin'),K.trigger('touchspin.on.startdownspin'),I=setTimeout(function(){G=setInterval(function(){M++,y()},C.stepinterval)},C.stepintervaldelay)}function A(){B(),M=0,N='up',K.trigger('touchspin.on.startspin'),K.trigger('touchspin.on.startupspin'),J=setTimeout(function(){H=setInterval(function(){M++,x()},C.stepinterval)},C.stepintervaldelay)}function B(){clearTimeout(I),clearTimeout(J),clearInterval(G),clearInterval(H);'up'==N?(K.trigger('touchspin.on.stopupspin'),K.trigger('touchspin.on.stopspin')):'down'==N?(K.trigger('touchspin.on.stopdownspin'),K.trigger('touchspin.on.stopspin')):void 0;M=0,N=!1}var C,D,E,F,G,H,I,J,K=c(this),L=K.data(),M=0,N=!1;(function(){if(!K.data('alreadyinitialized'))return K.data('alreadyinitialized',!0),f+=1,K.data('spinnerid',f),K.is('input')?void(k(),i(),v(),n(),q(),r(),s(),t(),E.input.css('display','block')):void console.log('Must be an input.')})()})}})(jQuery)},function(a,b,c){var d,e,f,g=Math.floor;(function(g){e=[c(0)],d=g,f='function'==typeof d?d.apply(b,e):d,!(f!==void 0&&(a.exports=f))})(function(a){var b=function(){function b(){var b=this,c=function(){var c=['br-wrapper'];''!==b.options.theme&&c.push('br-theme-'+b.options.theme),b.$elem.wrap(a('<div />',{class:c.join(' ')}))},d=function(){b.$elem.unwrap()},e=function(c){return a.isNumeric(c)&&(c=g(c)),a('option[value="'+c+'"]',b.$elem)},f=function(){var c=b.options.initialRating;return c?e(c):a('option:selected',b.$elem)},h=function(){var c=b.$elem.find('option[value="'+b.options.emptyValue+'"]');return!c.length&&b.options.allowEmpty?(c=a('<option />',{value:b.options.emptyValue}),c.prependTo(b.$elem)):c},i=function(a){var c=b.$elem.data('barrating');return'undefined'==typeof a?c:c[a]},j=function(a,c){null!==c&&'object'==typeof c?b.$elem.data('barrating',c):b.$elem.data('barrating')[a]=c},k=function(){var a=f(),c=h(),d=a.val(),e=a.data('html')?a.data('html'):a.text(),g=null===b.options.allowEmpty?!!c.length:b.options.allowEmpty,i=c.length?c.val():null,k=c.length?c.text():null;j(null,{userOptions:b.options,ratingValue:d,ratingText:e,originalRatingValue:d,originalRatingText:e,allowEmpty:g,emptyRatingValue:i,emptyRatingText:k,readOnly:b.options.readonly,ratingMade:!1})},l=function(){b.$elem.removeData('barrating')},m=function(){return i('ratingText')},n=function(){return i('ratingValue')},o=function(){var c=a('<div />',{class:'br-widget'});return b.$elem.find('option').each(function(){var d,e,f,g;d=a(this).val(),d!==i('emptyRatingValue')&&(e=a(this).text(),f=a(this).data('html'),f&&(e=f),g=a('<a />',{href:'#',"data-rating-value":d,"data-rating-text":e,html:b.options.showValues?e:''}),c.append(g))}),b.options.showSelectedRating&&c.append(a('<div />',{text:'',class:'br-current-rating'})),b.options.reverse&&c.addClass('br-reverse'),b.options.readonly&&c.addClass('br-readonly'),c},p=function(){return i('userOptions').reverse?'nextAll':'prevAll'},q=function(a){e(a).prop('selected',!0),b.$elem.change()},r=function(){a('option',b.$elem).prop('selected',function(){return this.defaultSelected}),b.$elem.change()},s=function(a){a=a?a:m(),a==i('emptyRatingText')&&(a=''),b.options.showSelectedRating&&b.$elem.parent().find('.br-current-rating').text(a)},t=function(a){return Math.round(100*(g(10*a)/10%1))},u=function(){b.$widget.find('a').removeClass(function(a,b){return(b.match(/(^|\s)br-\S+/g)||[]).join(' ')})},v=function(){var c,d,e=b.$widget.find('a[data-rating-value="'+n()+'"]'),g=i('userOptions').initialRating,h=a.isNumeric(n())?n():0,j=t(g);if(u(),e.addClass('br-selected br-current')[p()]().addClass('br-selected'),!i('ratingMade')&&a.isNumeric(g)){if(g<=h||!j)return;c=b.$widget.find('a'),d=e.length?e[i('userOptions').reverse?'prev':'next']():c[i('userOptions').reverse?'last':'first'](),d.addClass('br-fractional'),d.addClass('br-fractional-'+j)}},w=function(a){return i('allowEmpty')&&i('userOptions').deselectable&&n()==a.attr('data-rating-value')},x=function(c){c.on('click.barrating',function(c){var d,e,f=a(this),g=i('userOptions');return c.preventDefault(),d=f.attr('data-rating-value'),e=f.attr('data-rating-text'),w(f)&&(d=i('emptyRatingValue'),e=i('emptyRatingText')),j('ratingValue',d),j('ratingText',e),j('ratingMade',!0),q(d),s(e),v(),g.onSelect.call(b,n(),m(),c),!1})},y=function(b){b.on('mouseenter.barrating',function(){var b=a(this);u(),b.addClass('br-active')[p()]().addClass('br-active'),s(b.attr('data-rating-text'))})},z=function(){b.$widget.on('mouseleave.barrating blur.barrating',function(){s(),v()})},A=function(b){b.on('touchstart.barrating',function(b){b.preventDefault(),b.stopPropagation(),a(this).click()})},B=function(a){a.on('click.barrating',function(a){a.preventDefault()})},C=function(a){x(a),b.options.hoverState&&(y(a),z(a))},D=function(a){a.off('.barrating')},E=function(a){var c=b.$widget.find('a');A&&A(c),a?(D(c),B(c)):C(c)};this.show=function(){i()||(c(),k(),b.$widget=o(),b.$widget.insertAfter(b.$elem),v(),s(),E(b.options.readonly),b.$elem.hide())},this.readonly=function(a){'boolean'!=typeof a||i('readOnly')==a||(E(a),j('readOnly',a),b.$widget.toggleClass('br-readonly'))},this.set=function(a){var c=i('userOptions');0===b.$elem.find('option[value="'+a+'"]').length||(j('ratingValue',a),j('ratingText',b.$elem.find('option[value="'+a+'"]').text()),j('ratingMade',!0),q(n()),s(m()),v(),!c.silent&&c.onSelect.call(this,n(),m()))},this.clear=function(){var a=i('userOptions');j('ratingValue',i('originalRatingValue')),j('ratingText',i('originalRatingText')),j('ratingMade',!1),r(),s(m()),v(),a.onClear.call(this,n(),m())},this.destroy=function(){var a=n(),c=m(),e=i('userOptions');D(b.$widget.find('a')),b.$widget.remove(),l(),d(),b.$elem.show(),e.onDestroy.call(this,a,c)}}return b.prototype.init=function(b,c){return this.$elem=a(c),this.options=a.extend({},a.fn.barrating.defaults,b),this.options},b}();a.fn.barrating=function(c,d){return this.each(function(){var e=new b;if(a(this).is('select')||a.error('Sorry, this plugin only works with select fields.'),e.hasOwnProperty(c)){if(e.init(d,this),'show'===c)return e.show(d);if(e.$elem.data('barrating'))return e.$widget=a(this).next('.br-widget'),e[c](d)}else{if('object'==typeof c||!c)return d=c,e.init(d,this),e.show();a.error('Method '+c+' does not exist on jQuery.barrating')}})},a.fn.barrating.defaults={theme:'',initialRating:null,allowEmpty:null,emptyValue:'',showValues:!1,showSelectedRating:!0,deselectable:!0,reverse:!1,readonly:!1,fastClicks:!0,hoverState:!0,silent:!1,onSelect:function(){},onClear:function(){},onDestroy:function(){}},a.fn.barrating.BarRating=b})},function(){}]);