// Edit these values to personalise the site.
var ME={name:"Ehtasham Rahi",email:"ehtashamrahi2014@gmail.com",cv:""};
var PH=[{"s": "img/1-field.jpg", "c": "Bone fragments in situ at the field site, with a rock hammer for scale", "w": 1400, "h": 1050}, {"s": "img/2-lab-block.jpg", "c": "Engraving a fossil block in the laboratory to remove sand, pebbles and other clastic material", "w": 1054, "h": 1400}, {"s": "img/3-fragments.jpg", "c": "Recovered bone fragments sorted before reassembly", "w": 1054, "h": 1400}, {"s": "img/4-reassembly.jpg", "c": "Reassembling the femur with plaster and adhesive", "w": 1050, "h": 1400}, {"s": "img/5-femur.jpg", "c": "The reconstructed femur in two views (A and B), with a marker pen for scale", "w": 1235, "h": 1400}];
var PH2=[{"s": "img/s1-gcms.jpg", "c": "The Agilent 7890B GC with 5977B MSD used for the analysis", "w": 1053, "h": 1400}, {"s": "img/s2-column.jpg", "c": "Column chromatography to separate the oil into its fractions", "w": 1053, "h": 1400}, {"s": "img/s3-n-alkanes.jpg", "c": "1D distribution of n-alkanes, pristane and phytane (m/z 57)", "w": 1800, "h": 1258}, {"s": "img/s4-aryl-isoprenoids.jpg", "c": "1D distribution of aryl isoprenoids (m/z 133)", "w": 1800, "h": 901}, {"s": "img/s5-aromatics.jpg", "c": "Distribution of the aromatic fraction: naphthalenes and dibenzothiophenes", "w": 1800, "h": 1280}, {"s": "img/s6-hopanes-2d.jpg", "c": "2D (GC×GC) distribution of hopanes and norhopanes (m/z 191)", "w": 1800, "h": 945}, {"s": "img/s7-tetramantane-2d.jpg", "c": "2D (GC×GC) distribution of tetramantane diamondoids", "w": 1800, "h": 816}, {"s": "img/s8-air-prph.jpg", "c": "Cross-plot of Pr/Ph against the Aryl Isoprenoid Ratio (AIR)", "w": 1500, "h": 1354}, {"s": "img/s9-pr-nc17.jpg", "c": "Cross-plot of Pr/n-C17 against Ph/n-C18", "w": 1500, "h": 1211}];
var PH3=[{"s": "img/a1-marble-mine.jpg", "c": "Marble mine with cranes and cut blocks, visited during the field trip", "w": 1200, "h": 900}, {"s": "img/a2-boudins-outcrop.jpg", "c": "Boudinaged dark layers in banded gneissic rock, hammer for scale", "w": 675, "h": 1200}, {"s": "img/a3-boudinage.jpg", "c": "Boudinage: a pinched and swollen vein within foliated rock, pen for scale", "w": 1200, "h": 900}, {"s": "img/a4-banded-layers.jpg", "c": "Dark layers broken into segments within light banded rock, pen for scale", "w": 1200, "h": 900}, {"s": "img/a5-drag-fold.jpg", "c": "Drag fold along a dark band in banded rock, pen for scale", "w": 1200, "h": 900}, {"s": "img/a6-folded-gneiss.jpg", "c": "Complex folding of dark and light bands in gneissic rock, hammer for scale", "w": 1200, "h": 900}, {"s": "img/a7-dark-slab.jpg", "c": "Fractured dark rock slab on lighter host rock, pen for scale", "w": 1200, "h": 900}];
var P=[
{t:"Biomarkers in Siberian crude oil",y:"2026",g:"Prof. Suryendu Dutta, Earth Sciences, IIT Bombay",h:"Biomarker Signatures in Neoproterozoic Crude Oil of Russia",
 l:["Characterised biomarker signatures of Neoproterozoic crude oil from eastern Siberia using GC–MS and GC×GC–TOFMS datasets.","Analysed saturated and aromatic hydrocarbons: n-alkanes, isoprenoids, hopanes, terpanes, diamondoids, dibenzothiophenes and PAHs.","Calculated and interpreted biomarker ratios to assess organic matter sources, depositional redox conditions, thermal maturity and biodegradation.","Compared aromatic biomarkers in Neoproterozoic oils from Oman and Baghewala, India, as analogues for the Siberian system.","Integrated the evidence to interpret microbial–algal contributions, water-column stratification, oxygen-restricted deposition and the thermal evolution of ancient petroleum systems."],
 c:["GC–MS","GC×GC–TOFMS","Biomarkers","Thermal maturity"],ph:PH2,gh:"Methods and results in figures"},
{t:"Middle Jurassic sauropod femur",y:"2022",g:"Dr. Nibedita Rakshit, Earth Sciences, IIT Bombay",h:"Study of Middle Jurassic Sauropod Limb Elements",
 l:["Fieldwork in Kachchh recovered a sauropod femur from Middle Jurassic strata.","Reconstructed 83% of the femur using engraving, B-72 and PoP plastering.","Identified hallmark sauropod traits: a medially projecting femoral head and a robust fourth trochanter.","Classified as Eusauropoda (non-neosauropod) through anatomical comparison with global datasets.","Morphometric and allometric analysis estimated a femur length of about 86.7 cm and a body length of about 11–12 m, adding to Indian Jurassic palaeobiology."],
 c:["Kachchh","Fossil preparation","Morphometrics","Eusauropoda"],ph:PH},
{t:"Rock deformation and failure",y:"2021",g:"Dr. M. Irfan Ahmad, Geology, AMU",h:"Deformation Mechanism and Concept of Rock Failure",
 l:["Built a working understanding of rock deformation under stress and the conditions that lead to failure.","Studied brittle and ductile deformation with examples from real geological settings."],
 c:["Structural geology","Brittle vs ductile"]}];
var $=function(s){return document.querySelector(s)};
function esc(s){return s.replace(/[&<>]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;"}[c]})}
function gal(a,t){return "<h4 class='gh'>"+esc(t||"Dissertation work in photos")+"</h4><div class='gal' tabindex='0' aria-label='Photo gallery, scroll sideways'>"+a.map(function(f,i){return "<figure><button type='button' data-i='"+i+"' aria-label='Open photo "+(i+1)+"'><img src='"+f.s+"' width='"+f.w+"' height='"+f.h+"' alt='"+esc(f.c)+"'></button><figcaption><b>"+(i+1)+"</b>"+esc(f.c)+"</figcaption></figure>"}).join("")+"</div><p class='hint'>Scroll sideways or tap a photo to enlarge.</p>"}
function show(i){
 var p=P[i];
 document.querySelectorAll(".tab").forEach(function(b,j){b.setAttribute("aria-selected",j==i);b.tabIndex=j==i?0:-1});
 A=p.ph||[];PA=A;var g=p.ph?gal(p.ph,p.gh):"";
 $("#panel").innerHTML="<h3>"+esc(p.h)+"</h3><p class='meta'>"+p.y+" · Guide: "+esc(p.g)+"</p><ul>"+p.l.map(function(x){return"<li>"+esc(x)+"</li>"}).join("")+"</ul><div class='chips'>"+p.c.map(function(x){return"<span class='chip'>"+esc(x)+"</span>"}).join("")+"</div>"+g;
}
P.forEach(function(p,i){var b=document.createElement("button");b.className="tab";b.role="tab";b.textContent=p.t;
 b.onclick=function(){show(i)};
 b.onkeydown=function(e){var n=e.key=="ArrowRight"?i+1:e.key=="ArrowLeft"?i-1:null;if(n!==null){n=(n+P.length)%P.length;show(n);document.querySelectorAll(".tab")[n].focus()}};
 $("#tabs").appendChild(b)});
show(0);
// personalise
$("#brand").textContent=ME.name;$("#fn").textContent=ME.name;$("#mail").textContent=ME.email;$("#mail").href="mailto:"+ME.email;
if(ME.cv){$("#cvl").href=ME.cv}else{$("#cvl").style.display="none"}
$("#yr").textContent=new Date().getFullYear();document.title=ME.name+" | Earth Sciences Portfolio";
// nav
var nav=$("#nav"),mb=$("#menu");
function closeNav(){nav.classList.remove("open");mb.setAttribute("aria-expanded","false");mb.textContent="☰"}
mb.onclick=function(){var o=nav.classList.toggle("open");mb.setAttribute("aria-expanded",o);mb.textContent=o?"✕":"☰"};
document.querySelectorAll("[data-go]").forEach(function(a){a.addEventListener("click",function(e){e.preventDefault();var t=document.getElementById(a.dataset.go);if(t)t.scrollIntoView({behavior:"smooth"});closeNav()})});
document.addEventListener("keydown",function(e){if(e.key=="Escape")closeNav()});
var links=document.querySelectorAll("nav a");
if("IntersectionObserver" in window){var io=new IntersectionObserver(function(es){es.forEach(function(en){if(en.isIntersecting){links.forEach(function(l){l.classList.toggle("on",l.dataset.go==en.target.id)})}})},{rootMargin:"-45% 0px -50% 0px"});
 document.querySelectorAll("main section[id]").forEach(function(s){io.observe(s)})}
// theme
var th=$("#theme");
th.onclick=function(){var r=document.documentElement,d=r.dataset.theme?r.dataset.theme=="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark";try{localStorage.setItem("th",r.dataset.theme)}catch(e){}};
try{var s=localStorage.getItem("th");if(s)document.documentElement.dataset.theme=s}catch(e){}
// hero strata: the one orchestrated moment
var items=document.querySelectorAll("#col li");
items.forEach(function(li,i){li.style.transitionDelay=(items.length-1-i)*.12+"s,"+(items.length-1-i)*.12+"s"});
requestAnimationFrame(function(){setTimeout(function(){$("#col").classList.add("go")},150)});

// photo viewer
var cur=0,lb=document.createElement("div");lb.id="lb";lb.hidden=true;lb.setAttribute("role","dialog");lb.setAttribute("aria-label","Photo viewer");
lb.innerHTML="<button class='lbx' aria-label='Close'>\u2715</button><button class='lbp' aria-label='Previous photo'>\u2039</button><button class='lbn' aria-label='Next photo'>\u203A</button><figure><img alt=''><figcaption></figcaption></figure>";
document.body.appendChild(lb);
function lbShow(i){cur=(i+A.length)%A.length;var m=lb.querySelector("img");m.src=A[cur].s;m.alt=A[cur].c;lb.querySelector("figcaption").textContent=(cur+1)+" / "+A.length+" \u00B7 "+A[cur].c}
function lbOpen(i){lbShow(i);lb.hidden=false;document.body.style.overflow="hidden";lb.querySelector(".lbx").focus()}
function lbClose(){lb.hidden=true;document.body.style.overflow=""}
$("#panel").addEventListener("click",function(e){var b=e.target.closest("[data-i]");if(b){A=PA;lbOpen(+b.dataset.i)}});
lb.addEventListener("click",function(e){var t=e.target;if(t===lb||t.closest(".lbx"))lbClose();else if(t.closest(".lbp"))lbShow(cur-1);else if(t.closest(".lbn"))lbShow(cur+1)});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key=="Escape")lbClose();else if(e.key=="ArrowLeft")lbShow(cur-1);else if(e.key=="ArrowRight")lbShow(cur+1)});
var tx=0;lb.addEventListener("touchstart",function(e){tx=e.changedTouches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)lbShow(cur+(d<0?1:-1))},{passive:true});

// Ambaji fieldwork gallery
$("#amb").innerHTML=gal(PH3,"Fieldwork photos from Ambaji");
$("#amb").addEventListener("click",function(e){var b=e.target.closest("[data-i]");if(b){A=PH3;lbOpen(+b.dataset.i)}});
