function e(e,t){return new Promise(((o,n)=>{Math.random()>.3?o({position:e,delay:t}):n({position:e,delay:t})}))}document.querySelector("form").addEventListener("submit",(function(t){t.preventDefault();const o=Number(t.target.elements.delay.value),n=Number(t.target.elements.step.value);for(let l=0;l<t.target.elements.amount.value;l++)e(l,o+n*l).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)}))}));
//# sourceMappingURL=03-promises.e4b11ffb.js.map
