import{r as t,b as f,u as g,j as e}from"./index-EB9XSCGu.js";import{P as h}from"./PageNav-DxUyKRbD.js";function w(){const[s,i]=t.useState("mittalmadhur19@gmail.com"),[l,m]=t.useState("123456"),{isauth:n,login:c,error:o}=f();t.useState("");const[d,u]=t.useState(0),r=g();function p(a){u(x=>!x),a.preventDefault(),s&&l&&c(s,l)}return t.useEffect(()=>{o&&alert(o)},[d]),t.useEffect(function(){n&&r("/app",{replace:!0})},[n,r]),e.jsx("div",{className:" p-5",children:e.jsxs("div",{className:"min-w-[[calc(100vw-2.5rem)]] min-h-[calc(100vh-2.5rem)] overflow-auto bg-[#2D3439] p-6 px-8",children:[e.jsx(h,{}),e.jsxs("form",{className:"productmain mx-auto rounded-md bg-[#42484D] my-16 flex w-[450px] flex-col p-5 gap-2",onSubmit:p,children:[e.jsx("label",{className:" text-white text-lg",htmlFor:"email",children:"Email Address"}),e.jsx("input",{value:s,onChange:a=>i(a.target.value),className:"bg-[#D6DEE0] rounded-md py-[5px] px-1 outline-none",name:"email",id:"email",type:"text"}),e.jsx("label",{className:" text-white text-lg",htmlFor:"password",children:"Password"}),e.jsx("input",{value:l,onChange:a=>m(a.target.value),className:"bg-[#D6DEE0] rounded-md py-[5px] outline-none px-1",name:"password",id:"password",type:"password"}),e.jsx("button",{className:"self-start my-2 bg-green-500 text-md rounded-md  text-black font-semibold  px-3 py-1   text-center uppercase",children:"Login"})," "]})]})})}export{w as default};