import{d as e,i as s,C as t,a as o,p as l,b as n,c as a,w as i,v as r,e as u,f as c,F as p,r as d,g as m,h as w,j as h,o as b,t as j,k,l as y}from"./vendor.149403d9.js";e.extend(s);const f=(s,t,o)=>{const l=s[0].states.map((e=>[e.id,e.name]));console.log(l),console.log(t);const n=l.map((s=>({name:s[1],stories:t.filter((t=>t.workflow_state_id===s[0]&&e(t.updated_at).isBetween(e().subtract(o,"week"),e().add(1,"week"))))})));return console.log(n),n};var g=o({name:"Generator",props:{},data:()=>({apiKey:"",weeks:2,projects:null,stories:null,showEmojis:!1,showWait:!1}),methods:{async listProjects(){this.showWait=!0,this.projects=await(async e=>(console.log(e),t.create(e).listProjects()))(this.apiKey),this.showWait=!1},async getStories(e){this.showWait=!0,this.stories=await(async(e,s,o)=>{const l=t.create(e),n=await l.listWorkflows();console.log(n);const a=await l.listStories(s);return f(n,a,o)})(this.apiKey,e,this.weeks),this.showWait=!1},getEmoji(){if(!this.showEmojis)return;const e=["👨‍💻","👩‍💻","🧑‍💻"," 🛠","🔧","🚀","🦉"];return e[Math.floor(Math.random()*e.length)]}}});const v=w("data-v-752bf115");l("data-v-752bf115");const E=u("label",{for:"api-input"},"Clubhouse API Key",-1),W=u("br",null,null,-1),K=u("br",null,null,-1),P=u("label",{for:"weeks-input"},"Stories from how many weeks ago",-1),C=u("br",null,null,-1),G=u("br",null,null,-1),_=u("label",{for:"emojis"},"Random Emojis",-1),S=u("br",null,null,-1),x=u("br",null,null,-1),U=u("br",null,null,-1),V=u("br",null,null,-1),A={key:0},I=h(" Generate report for: "),M=u("br",null,null,-1),B=u("br",null,null,-1),F={key:1},R={key:2};n();const T=v(((e,s,t,o,l,n)=>(b(),a(p,null,[E,i(u("input",{"onUpdate:modelValue":s[1]||(s[1]=s=>e.apiKey=s),id:"api-input",type:"text"},null,512),[[r,e.apiKey]]),W,K,P,i(u("input",{"onUpdate:modelValue":s[2]||(s[2]=s=>e.weeks=s),id:"weeks-input",type:"number"},null,512),[[r,e.weeks]]),C,G,_,i(u("input",{"onUpdate:modelValue":s[3]||(s[3]=s=>e.showEmojis=s),id:"emojis",type:"checkbox"},null,512),[[c,e.showEmojis]]),S,x,u("button",{onClick:s[4]||(s[4]=(...s)=>e.listProjects&&e.listProjects(...s))},"Get Teams"),U,V,e.projects?(b(),a("div",A,[I,(b(!0),a(p,null,d(e.projects,(s=>(b(),a("button",{onClick:t=>e.getStories(s.id)},j(s.name),9,["onClick"])))),256))])):m("",!0),M,B,e.showWait?(b(),a("h3",F,"Please wait...")):m("",!0),e.stories?(b(),a("div",R,[(b(!0),a(p,null,d(e.stories,(s=>(b(),a("div",null,[h(j(e.getEmoji())+" "+j(s.name)+" "+j(e.getEmoji())+" ",1),u("ul",null,[(b(!0),a(p,null,d(s.stories,(e=>(b(),a("li",null,j(e.name),1)))),256))])])))),256))])):m("",!0)],64))));g.render=T,g.__scopeId="data-v-752bf115";var q=o({name:"App",components:{Generator:g}});q.render=function(e,s,t,o,l,n){const i=k("Generator");return b(),a(i)},y(q).mount("#app");
