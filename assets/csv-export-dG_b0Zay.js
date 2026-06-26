function p(n,a,s){const t=o=>`"${o.replace(/"/g,'""')}"`,l=[a.map(t).join(","),...s.map(o=>o.map(t).join(","))],r=new Blob(["\uFEFF"+l.join(`
`)],{type:"text/csv;charset=utf-8"}),c=URL.createObjectURL(r),e=document.createElement("a");e.href=c,e.download=n,e.click(),URL.revokeObjectURL(c)}export{p as d};
