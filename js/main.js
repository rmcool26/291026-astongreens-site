(function(){
var NAV=[
 {t:'What we do',k:[['Solar EPC','Utility and C&I plants','solar-epc.html'],['O&M and AI SCADA','Run and monitor plants','om-scada.html'],['Advisory','Before you build','advisory.html'],['Digital construction','BIM and 3D models','digital-construction.html'],['Energy-as-a-Service','Pay for energy, not plants','energy-as-a-service.html']]},
 {t:'Technology',h:'technovision.html'},{t:'Projects',h:'projects.html'},
 {t:'Company',k:[['About','Story, mission, leadership','about.html'],['Global presence','India, UAE, KSA, Bahrain','global-presence.html'],['Our companies','The Astongreens group','our-companies.html'],['News and awards','Latest from us','news.html'],['Life at Astongreens','Culture and people','life.html'],['Careers','Join the team','careers.html']]},
 {t:'ESG',h:'esg.html'},{t:'Training',h:'training.html'}];
var page=document.body.dataset.page||'';
var LOGO='<img src="assets/logos/astongreens.png" alt="Astongreens" onerror="var s=document.createElement(\'span\');s.className=\'wmk\';s.textContent=\'astongreens\';this.replaceWith(s)">';
var L=function(n){return '<i data-lucide="'+n+'"></i>'};
var navHtml=NAV.map(function(n,i){
 if(n.h)return '<li><a href="'+n.h+'"'+(page===n.h?' class="on" aria-current="page"':'')+'>'+n.t+'</a></li>';
 return '<li class="has-dd"><button aria-expanded="false" aria-haspopup="true">'+n.t+L('chevron-down')+'</button><div class="dd">'+n.k.map(function(k){return '<a href="'+k[2]+'"><b>'+k[0]+'</b><span>'+k[1]+'</span></a>'}).join('')+'</div></li>'}).join('');
var mHtml=NAV.map(function(n){return n.h?'<a href="'+n.h+'">'+n.t+'</a>':'<a href="'+n.k[0][2]+'">'+n.t+'</a><div class="sub">'+n.k.map(function(k){return '<a href="'+k[2]+'">'+k[0]+'</a>'}).join('')+'</div>'}).join('');
document.getElementById('hdr').innerHTML='<a class="skip" href="#main">Skip to content</a><div class="wrap hdr-in"><a class="logo" href="index.html" aria-label="Astongreens home">'+LOGO+'</a><ul class="nav" aria-label="Main">'+navHtml+'</ul><div class="hdr-cta"><a class="btn sm" href="contact.html">Contact our team</a></div><button class="burger" aria-label="Menu" aria-expanded="false">'+L('menu')+'</button></div><div class="mnav">'+mHtml+'<a href="contact.html" style="color:var(--green-dd)">Contact our team</a></div>';
var addr=function(c,t){return '<address><b>'+c+'</b>'+t+'</address>'};
document.getElementById('ftr').innerHTML='<footer class="ftr"><div class="wrap"><div class="ftr-g"><div><a class="logo" style="color:var(--ink)" href="index.html">'+LOGO+'</a><p style="margin-top:14px;color:var(--ink-2);max-width:280px">Solar EPC, O&amp;M and digital construction for the Middle East and India. Since 2010.</p><p style="margin-top:14px"><a href="tel:+919555488080"><b>+91 95554 88080</b></a></p></div>'
+'<div><h4>What we do</h4><ul>'+NAV[0].k.map(function(k){return '<li><a href="'+k[2]+'">'+k[0]+'</a></li>'}).join('')+'</ul></div>'
+'<div><h4>Company</h4><ul><li><a href="about.html">About</a></li><li><a href="global-presence.html">Global presence</a></li><li><a href="our-companies.html">Our companies</a></li><li><a href="news.html">News and awards</a></li><li><a href="careers.html">Careers</a></li><li><a href="contact.html">Contact</a></li></ul></div>'
+'<div><h4>Group</h4><ul><li><a href="https://terranxt.com" target="_blank" rel="noopener">Terranxt</a></li><li><a href="technovision.html">SmartTrak AI</a></li><li><a href="training.html">ISTI</a></li><li><a href="our-companies.html">Ayam Solar</a></li></ul></div>'
+'<div><h4>Offices</h4>'+addr('India','12A, M3M Urbana Premium<br>Sector 67, Gurugram 122101')+addr('UAE · KSA · Bahrain','See <a href="global-presence.html">Global presence</a>')+'</div></div>'
+'<div class="ftr-legal"><span>&copy; '+new Date().getFullYear()+' Astongreens. All rights reserved.</span><span><a href="privacy.html">Privacy</a> &nbsp; <a href="terms.html">Terms</a> &nbsp; <a href="cookies.html">Cookies</a></span></div></div><div class="wm" aria-hidden="true"><span>astongreens</span></div></footer><button class="totop" aria-label="Back to top">'+L('arrow-up')+'</button>';
var h=document.getElementById('hdr'),t=document.querySelector('.totop'),hero=document.querySelector('.hero'),stmt=document.querySelector('.statement'),scr=document.querySelector('.scrolly');
var rm=matchMedia('(prefers-reduced-motion:reduce)').matches;
function onScroll(){
 h.classList.toggle('solid',scrollY>40);t.classList.toggle('show',scrollY>700);
 if(hero&&!rm){hero.style.setProperty('--p',Math.min(1,scrollY/(hero.offsetHeight*.9)).toFixed(3))}
 if(stmt){var r=stmt.getBoundingClientRect(),p=Math.min(1,Math.max(0,(innerHeight*.85-r.top)/(innerHeight*.55+r.height*.4)));var ws=stmt.querySelectorAll('.w'),n=Math.round(p*ws.length);ws.forEach(function(w,i){w.classList.toggle('lit',i<n||rm)})}
 if(scr){var b=scr.getBoundingClientRect();scr.style.setProperty('--sp',Math.min(1,Math.max(0,(innerHeight*.5-b.top)/b.height)).toFixed(3))}
}
addEventListener('scroll',onScroll,{passive:true});onScroll();
if(stmt){stmt.innerHTML=stmt.textContent.trim().split(/\s+/).map(function(w){return '<span class="w">'+w+'</span> '}).join('');onScroll()}
t.onclick=function(){scrollTo({top:0})};
var b=document.querySelector('.burger');b.onclick=function(){var o=h.classList.toggle('open');b.setAttribute('aria-expanded',o)};
document.querySelectorAll('.mnav a').forEach(function(a){a.addEventListener('click',function(){h.classList.remove('open')})});
/* dropdowns */
document.querySelectorAll('.has-dd').forEach(function(d){var bt=d.querySelector('button');
 function set(o){d.classList.toggle('open',o);bt.setAttribute('aria-expanded',o)}
 bt.onclick=function(e){e.stopPropagation();var o=!d.classList.contains('open');document.querySelectorAll('.has-dd').forEach(function(x){x.classList.remove('open')});set(o)};
 d.addEventListener('mouseenter',function(){if(matchMedia('(hover:hover)').matches){document.querySelectorAll('.has-dd').forEach(function(x){x.classList.remove('open')});set(true)}});
 d.addEventListener('mouseleave',function(){set(false)});
 d.addEventListener('keydown',function(e){if(e.key==='Escape'){set(false);bt.focus()}})});
document.addEventListener('click',function(){document.querySelectorAll('.has-dd').forEach(function(x){x.classList.remove('open');x.querySelector('button').setAttribute('aria-expanded',false)})});
/* glow, whispers */
document.querySelectorAll('.dark,.hero,.wm').forEach(function(s){s.addEventListener('mousemove',function(e){var r=s.getBoundingClientRect();s.style.setProperty('--mx',(e.clientX-r.left)+'px');s.style.setProperty('--my',(e.clientY-r.top)+'px')})});
document.querySelectorAll('[data-whispers]').forEach(function(s){var w=s.dataset.whispers.split('|'),els=w.map(function(x,i){var e=document.createElement('span');e.className='whisper';e.textContent=x;e.style.left=(8+i*21)%80+'%';e.style.top=(14+(i*37)%66)+'%';s.appendChild(e);return e}),i=0;if(rm)return;setInterval(function(){els.forEach(function(e){e.classList.remove('on')});els[i%els.length].classList.add('on');i++},2200)});
/* reveal + count */
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);e.target.querySelectorAll('[data-count]').forEach(cnt)})},{threshold:.2});
document.querySelectorAll('[data-r]').forEach(function(e){io.observe(e)});
function cnt(el){var to=parseFloat(el.dataset.count),pre=el.dataset.pre||'',suf=el.dataset.suf||'',d=to%1?1:0,s=performance.now();if(rm){el.textContent=pre+to+suf;return}(function f(n){var p=Math.min(1,(n-s)/1400);el.textContent=pre+(to*(1-Math.pow(1-p,3))).toFixed(d)+suf;if(p<1)requestAnimationFrame(f)})(s)}
/* scrollytelling steps */
if(scr){var steps=scr.querySelectorAll('.step'),num=scr.querySelector('.big b'),ph=scr.querySelector('.ph span');
 var so=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;steps.forEach(function(s){s.classList.remove('on')});e.target.classList.add('on');if(num)num.textContent=e.target.dataset.i;if(ph)ph.textContent=e.target.dataset.ph})},{rootMargin:'-45% 0px -45% 0px'});
 steps.forEach(function(s){so.observe(s)});if(steps[0])steps[0].classList.add('on')}
/* tabs (countries) */
document.querySelectorAll('.tab').forEach(function(tb){tb.onclick=function(){var g=tb.closest('[data-tabs]')||document;g.querySelectorAll('.tab').forEach(function(x){x.setAttribute('aria-selected',x===tb)});g.querySelectorAll('.tabp').forEach(function(p){p.classList.toggle('on',p.id===tb.dataset.p)})}});
/* form tabs */
document.querySelectorAll('.ftab').forEach(function(tb){tb.onclick=function(){document.querySelectorAll('.ftab').forEach(function(x){x.setAttribute('aria-selected',x===tb)});document.querySelectorAll('.fpanel').forEach(function(p){p.classList.toggle('on',p.id===tb.dataset.p)});history.replaceState(null,'','#'+tb.dataset.p.replace('fp-',''))}});
function openHash(){var hs=location.hash.replace('#','');if(!hs)return;var tb=document.querySelector('.ftab[data-p="fp-'+hs+'"]');if(tb){tb.click();var f=document.getElementById('forms');if(f)setTimeout(function(){scrollTo({top:f.getBoundingClientRect().top+scrollY-96,behavior:'smooth'})},60)}}openHash();addEventListener('hashchange',openHash)
/* forms: set endpoints (Odoo) here */
var ENDPOINTS={contact:'',proposal:'',appointment:'',careers:''};
document.querySelectorAll('form[data-form]').forEach(function(f){f.addEventListener('submit',function(e){e.preventDefault();
 var k=f.dataset.form,fd=new FormData(f);
 if(k==='appointment'&&!(fd.get('day')&&fd.get('slot'))){f.querySelector('.err').textContent='Please choose a day and a time.';return}
 var done=function(){f.style.display='none';f.parentNode.querySelector('.thanks').classList.add('on')};
 if(ENDPOINTS[k]){fetch(ENDPOINTS[k],{method:'POST',body:fd}).then(done).catch(done)}else{done()}})});
/* appointment slots */
var bk=document.querySelector('[data-book]');
if(bk){var days=bk.querySelector('.days'),slots=bk.querySelector('.slots'),f=bk.closest('form'),dn=['Sun','Mon','Tue','Wed','Thu','Fri','Sat'],mn=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],d=new Date(),c=0;
 while(c<10){d.setDate(d.getDate()+1);if(d.getDay()>0&&d.getDay()<6){var v=d.toISOString().slice(0,10),bt=document.createElement('button');bt.type='button';bt.className='bd';bt.dataset.v=v;bt.innerHTML=dn[d.getDay()]+' '+d.getDate()+' '+mn[d.getMonth()]+'<small>Mon-Fri</small>';bt.setAttribute('aria-pressed','false');days.appendChild(bt);c++}}
 var pad=function(n){return (n<10?'0':'')+n};
 for(var m=10*60;m<=17*60+30;m+=30){var g=m-90,bt2=document.createElement('button');bt2.type='button';bt2.className='bs';bt2.dataset.v=pad(Math.floor(m/60))+':'+pad(m%60)+' IST';bt2.innerHTML=pad(Math.floor(m/60))+':'+pad(m%60)+' IST<small>'+pad(Math.floor(g/60))+':'+pad(g%60)+' GST</small>';bt2.setAttribute('aria-pressed','false');slots.appendChild(bt2)}
 var pick=function(box,name){box.addEventListener('click',function(e){var b=e.target.closest('button');if(!b)return;box.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',x===b)});f.querySelector('[name='+name+']').value=b.dataset.v})};
 pick(days,'day');pick(slots,'slot')}
if(window.lucide)lucide.createIcons();else addEventListener('load',function(){window.lucide&&lucide.createIcons()});
})();

;(function(){var v=document.querySelector('.hero-vid');if(!v)return;if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){v.removeAttribute('autoplay');v.pause()}v.addEventListener('error',function(){v.style.display='none'},true)})();

;(function(){var n=document.querySelector('.snav');if(!n)return;var ls=[].slice.call(n.querySelectorAll('a')),ts=ls.map(function(a){return document.querySelector(a.getAttribute('href'))});function f(){var y=window.scrollY+160,c=0;ts.forEach(function(t,i){if(t&&t.offsetTop<=y)c=i});ls.forEach(function(a,i){a.classList.toggle('on',i===c)})}window.addEventListener('scroll',f,{passive:true});f()})();

;(function(){var Z=document.getElementById('hz');if(!Z)return;var T=document.getElementById('hzTrack'),Y=document.getElementById('hzYear'),Fl=document.getElementById('hzFill'),I=[].slice.call(T.children),mq=matchMedia('(max-width:860px),(prefers-reduced-motion:reduce)'),max=0,tg=0,cp=0,run=false,cur=-1;
function size(){if(mq.matches){Z.style.height='';T.style.transform='';return}max=Math.max(0,T.scrollWidth-innerWidth);Z.style.height=(max+innerHeight*1.15)+'px'}
function meas(){if(mq.matches)return;var r=Z.getBoundingClientRect(),span=Math.max(1,Z.offsetHeight-innerHeight),p=Math.max(0,Math.min(1,-r.top/span));tg=p*max;Fl.style.transform='scaleX('+p+')';if(!run){run=true;requestAnimationFrame(step)}}
function step(){var d=tg-cp;cp=Math.abs(d)<.4?tg:cp+d*.14;T.style.transform='translate3d('+(-cp)+'px,0,0)';var b=max?Math.round((cp/max)*(I.length-1)):0;b=Math.max(0,Math.min(I.length-1,b));if(b!==cur){cur=b;I.forEach(function(el,i){el.classList.toggle('on',i===b)});var yy=I[b].dataset.year;Y.textContent=yy==='[Year]'?'TBC':yy}if(cp!==tg)requestAnimationFrame(step);else run=false}
size();meas();addEventListener('resize',function(){size();meas()});addEventListener('scroll',meas,{passive:true});mq.addEventListener&&mq.addEventListener('change',function(){size();meas()})})();
;(function(){var w=document.createElement('div');w.className='talk';var I=function(n){return '<i data-lucide="'+n+'"></i>'};
w.innerHTML='<div class="talk-p" id="talkP" role="region" aria-label="Talk to Astongreens"><h2>How can we help?</h2><p>Pick the quickest way. We reply within one working day.</p><a href="contact.html#proposal"><span class="ti">'+I('file-text')+'</span><span><b>Request a proposal</b><small>Tell us your site and size</small></span></a><a href="contact.html#appointment"><span class="ti">'+I('calendar-check')+'</span><span><b>Book a call with the CEO</b><small>Mon to Fri, 10:00 to 17:30 IST</small></span></a><a href="https://wa.me/919555488080" target="_blank" rel="noopener"><span class="ti">'+I('message-circle')+'</span><span><b>WhatsApp</b><small>+91 95554 88080</small></span></a><a href="tel:+919555488080"><span class="ti">'+I('phone')+'</span><span><b>Call us</b><small>+91 95554 88080</small></span></a></div><button class="talk-b" type="button" aria-expanded="false" aria-controls="talkP">'+I('messages-square')+'<span>Talk to us</span></button>';
document.body.appendChild(w);var b=w.querySelector('.talk-b');function set(o){w.classList.toggle('open',o);b.setAttribute('aria-expanded',o)}
b.addEventListener('click',function(){set(!w.classList.contains('open'))});document.addEventListener('keydown',function(e){if(e.key==='Escape')set(false)});document.addEventListener('click',function(e){if(!w.contains(e.target))set(false)});
if(window.lucide)lucide.createIcons();else addEventListener('load',function(){window.lucide&&lucide.createIcons()})})();
