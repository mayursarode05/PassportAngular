import './polyfills.server.mjs';
import{a as oe}from"./chunk-SJQKAXJS.mjs";import{a as H,b as re,c as Q}from"./chunk-2IZUZ25K.mjs";import{b as U,d as T,e as Y,f as z,g as W,h as J,m as B,n as A,o as R,v as D,x as K}from"./chunk-JX2H5ULD.mjs";import{b as N}from"./chunk-OXUK6RTZ.mjs";import{o as ne,q as Z}from"./chunk-PLGZ3IQ7.mjs";import{Ha as l,Ia as P,M as q,W as y,X as G,Ya as C,_a as b,ac as k,bc as I,cb as t,cc as F,da as u,db as i,dc as L,ea as f,eb as x,ec as M,hb as w,jb as h,kb as d,n as ie,ob as o,pb as p,rb as g,sb as _,tb as S,ub as V,vb as v,wb as E}from"./chunk-QD7FFSOM.mjs";import{g as j}from"./chunk-VVCT4QZE.mjs";var ae=(()=>{let s=class s{};s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=y({type:s,selectors:[["app-admin-dashboard"]],standalone:!0,features:[v],decls:47,vars:0,consts:[[1,"container"],[1,"row","justify-content-between"],[1,"col-12","col-sm-6","col-md-4","col-lg-3","mb-3"],[1,"card","shadow","p-3","bg-body-tertiary","h-100"],["routerLink","user-list"],["src","../../../../assets/img/userlist.jpeg","alt","...",1,"card-img-top"],[1,"card-body"],[1,"card-text"],["routerLink","new-pass-list"],["src","../../../../assets/img/img4.jpg","alt","...",1,"card-img-top"],["routerLink","re-newpass-list"],["routerLink","user-feedback"],["src","../../../../assets/img/Feedback Illustration.jpeg","alt","...",1,"card-img-top"],["routerLink","user-complaints"]],template:function(e,n){e&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"a",4),x(5,"img",5),t(6,"div",6)(7,"h6"),o(8,"Users"),i(),t(9,"p",7),o(10,"View all users"),i()()()()(),t(11,"div",2)(12,"div",3)(13,"a",8),x(14,"img",9),t(15,"div",6)(16,"h6"),o(17,"New Passport Applications"),i(),t(18,"p",7),o(19,"View passport applications"),i()()()()(),t(20,"div",2)(21,"div",3)(22,"a",10),x(23,"img",9),t(24,"div",6)(25,"h6"),o(26,"Re-New Passport Applications"),i(),t(27,"p",7),o(28,"View passport applications"),i()()()()(),t(29,"div",2)(30,"div",3)(31,"a",11),x(32,"img",12),t(33,"div",6)(34,"h6"),o(35,"User Feedback"),i(),t(36,"p",7),o(37,"View Feedback"),i()()()()(),t(38,"div",2)(39,"div",3)(40,"a",13),x(41,"img",9),t(42,"div",6)(43,"h6"),o(44,"User Complaints"),i(),t(45,"p",7),o(46,"View Complaints"),i()()()()()()())},dependencies:[ne],styles:["a[_ngcontent-%COMP%]{text-decoration:none}"]});let a=s;return a})();var $=j(K());var _e=a=>({show:a}),Se=a=>({display:a});function be(a,s){if(a&1){let r=w();t(0,"tr")(1,"td"),o(2),i(),t(3,"td"),o(4),i(),t(5,"td"),o(6),i(),t(7,"td"),o(8),i(),t(9,"td"),o(10),i(),t(11,"td"),o(12),i(),t(13,"td")(14,"button",14),h("click",function(){let e=u(r).$implicit,n=d();return f(n.HandleEdit(e.id))}),x(15,"i",15),i(),t(16,"button",16),h("click",function(){let e=u(r).$implicit,n=d();return f(n.HandleDelete(e.id))}),x(17,"i",17),i()()()}if(a&2){let r=s.$implicit;l(2),p(r.fullName+" "+r.surname),l(2),p(r.dateOfBirth),l(2),p(r.email),l(2),p(r.mobileNumber),l(2),p(r.loginId),l(2),p(r.role)}}function he(a,s){if(a&1){let r=w();t(0,"form")(1,"div",18)(2,"div",19)(3,"div",20)(4,"label",21),o(5,"Full Name"),i(),t(6,"input",22),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedUser.fullName,e)||(n.selectedUser.fullName=e),f(e)}),i()(),t(7,"div",20)(8,"label",23),o(9,"Surname"),i(),t(10,"input",24),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedUser.surname,e)||(n.selectedUser.surname=e),f(e)}),i()(),t(11,"div",20)(12,"label",25),o(13,"Date of Birth"),i(),t(14,"input",26),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedUser.dateOfBirth,e)||(n.selectedUser.dateOfBirth=e),f(e)}),i()(),t(15,"div",20)(16,"label",27),o(17,"Email"),i(),t(18,"input",28),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedUser.email,e)||(n.selectedUser.email=e),f(e)}),i()()(),t(19,"div",19)(20,"div",20)(21,"label",29),o(22,"Mobile Number"),i(),t(23,"input",30),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedUser.mobileNumber,e)||(n.selectedUser.mobileNumber=e),f(e)}),i()(),t(24,"div",20)(25,"label",31),o(26,"Login ID"),i(),t(27,"input",32),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedUser.loginId,e)||(n.selectedUser.loginId=e),f(e)}),i()(),t(28,"div",20)(29,"label",33),o(30,"Role"),i(),t(31,"input",34),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedUser.role,e)||(n.selectedUser.role=e),f(e)}),i()()()()()}if(a&2){let r=d();l(6),g("ngModel",r.selectedUser.fullName),l(4),g("ngModel",r.selectedUser.surname),l(4),g("ngModel",r.selectedUser.dateOfBirth),l(4),g("ngModel",r.selectedUser.email),l(5),g("ngModel",r.selectedUser.mobileNumber),l(4),g("ngModel",r.selectedUser.loginId),l(4),g("ngModel",r.selectedUser.role)}}var le=(()=>{let s=class s{constructor(m){this.userService=m,this.userList=[],this.isEditModalVisible=!1,this.selectedUser=null,this.InItComponent=()=>this.userService.GetAllUser().pipe(ie(e=>e.filter(n=>n.role!==oe.Admin))).subscribe(e=>{this.userList=e}),this.HandleEdit=e=>{this.userService.getUserById(e).subscribe(n=>{this.selectedUser=n,this.isEditModalVisible=!0})},this.HandleSave=()=>{this.selectedUser&&this.userService.editUser(this.selectedUser.id,this.selectedUser).subscribe(e=>{this.ShowAlert(e,"User updated successfully","success"),this.isEditModalVisible=!1,this.InItComponent()})},this.HandleDelete=e=>{e!==null&&$.default.fire({title:"Are you sure",text:"You want to delete user",icon:"info",showCancelButton:!0,confirmButtonText:"Delete"}).then(n=>{n.isConfirmed&&this.userService.deleteUser(e).subscribe(c=>{this.ShowAlert(c,"User Deleted successfully","success")})})},this.ShowAlert=(e,n,c)=>{$.default.fire({title:c==="success"?"Success":"Error",text:n,icon:c}).then(()=>{c==="success"&&this.InItComponent()})}}ngOnInit(){this.InItComponent()}};s.\u0275fac=function(e){return new(e||s)(P(N))},s.\u0275cmp=y({type:s,selectors:[["app-user-list"]],standalone:!0,features:[V([N]),v],decls:35,vars:8,consts:[[1,"mt-2","text-success"],[1,"table","table-hover","mt-5"],[4,"ngFor","ngForOf"],["tabindex","-1",1,"modal",3,"ngClass","ngStyle"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"btn","btn-warning","me-2",3,"click"],[1,"bi","bi-pencil"],[1,"btn","btn-danger",3,"click"],[1,"bi","bi-trash"],[1,"row"],[1,"col-lg-6"],[1,"mb-3"],["for","fullName",1,"form-label"],["type","text","id","fullName","name","fullName",1,"form-control",3,"ngModelChange","ngModel"],["for","surname",1,"form-label"],["type","text","id","surname","name","surname",1,"form-control",3,"ngModelChange","ngModel"],["for","dateOfBirth",1,"form-label"],["type","date","id","dateOfBirth","name","dateOfBirth",1,"form-control",3,"ngModelChange","ngModel"],["for","email",1,"form-label"],["type","email","id","email","name","email",1,"form-control",3,"ngModelChange","ngModel"],["for","mobileNumber",1,"form-label"],["type","text","id","mobileNumber","name","mobileNumber",1,"form-control",3,"ngModelChange","ngModel"],["for","loginId",1,"form-label"],["type","text","id","loginId","name","loginId","ngModal","","disabled","",1,"form-control",3,"ngModelChange","ngModel"],["for","role",1,"form-label"],["type","text","id","role","name","role","ngModal","","disabled","",1,"form-control",3,"ngModelChange","ngModel"]],template:function(e,n){e&1&&(t(0,"h2",0),o(1,"User List"),i(),t(2,"table",1)(3,"thead")(4,"tr")(5,"th"),o(6,"Full Name"),i(),t(7,"th"),o(8,"Date of Birth"),i(),t(9,"th"),o(10,"Email"),i(),t(11,"th"),o(12,"Mobile Number"),i(),t(13,"th"),o(14,"LoginId"),i(),t(15,"th"),o(16,"Role"),i(),t(17,"th"),o(18,"Actions"),i()()(),t(19,"tbody"),C(20,be,18,6,"tr",2),i()(),t(21,"div",3)(22,"div",4)(23,"div",5)(24,"div",6)(25,"h5",7),o(26,"Edit User"),i(),t(27,"button",8),h("click",function(){return n.isEditModalVisible=!1}),i()(),t(28,"div",9),C(29,he,32,7,"form",10),i(),t(30,"div",11)(31,"button",12),h("click",function(){return n.isEditModalVisible=!1}),o(32,"Close"),i(),t(33,"button",13),h("click",function(){return n.HandleSave()}),o(34,"Save changes"),i()()()()()),e&2&&(l(20),b("ngForOf",n.userList),l(),b("ngClass",E(4,_e,n.isEditModalVisible))("ngStyle",E(6,Se,n.isEditModalVisible?"block":"none")),l(8),b("ngIf",n.selectedUser))},dependencies:[M,k,I,F,L,D,J,U,T,Y,W,z]});let a=s;return a})();function Ce(a,s){if(a&1&&(t(0,"tr")(1,"td"),o(2),i(),t(3,"td"),o(4),i(),t(5,"td"),o(6),i(),t(7,"td"),o(8),i()()),a&2){let r=s.$implicit,m=s.index;l(2),p(m+1),l(2),p(r.name),l(2),p(r.email),l(2),p(r.feedback)}}var me=(()=>{let s=class s{constructor(m){this.userService=m,this.feedbackList=[],this.InItComponent=()=>{this.userService.GetUserFeedback().subscribe(e=>{this.feedbackList=e})},this.HandleEdit=()=>{},this.HandleDelete=()=>{}}ngOnInit(){this.InItComponent()}};s.\u0275fac=function(e){return new(e||s)(P(N))},s.\u0275cmp=y({type:s,selectors:[["app-user-feedback"]],standalone:!0,features:[V([N]),v],decls:15,vars:1,consts:[[1,"mt-2","text-success"],[1,"table","table-hover","mt-5"],[4,"ngFor","ngForOf"]],template:function(e,n){e&1&&(t(0,"h2",0),o(1,"User Feedback"),i(),t(2,"table",1)(3,"thead")(4,"tr")(5,"th"),o(6,"Sr.No"),i(),t(7,"th"),o(8,"Full Name"),i(),t(9,"th"),o(10,"Email"),i(),t(11,"th"),o(12,"Feedback"),i()()(),t(13,"tbody"),C(14,Ce,9,4,"tr",2),i()()),e&2&&(l(14),b("ngForOf",n.feedbackList))},dependencies:[M,I]});let a=s;return a})();var te=j(K());var xe=a=>({show:a}),ye=a=>({display:a});function we(a,s){if(a&1){let r=w();t(0,"tr")(1,"td"),o(2),i(),t(3,"td"),o(4),i(),t(5,"td"),o(6),i(),t(7,"td"),o(8),i(),t(9,"td"),o(10),i(),t(11,"td")(12,"button",14),h("click",function(){let e=u(r).$implicit,n=d();return f(n.HandleEdit(e.id))}),x(13,"i",15),i(),t(14,"button",16),h("click",function(){let e=u(r).$implicit,n=d();return f(n.HandleDelete(e.id))}),x(15,"i",17),i()()()}if(a&2){let r=s.$implicit,m=s.index;l(2),p(m+1),l(2),p(r.name),l(2),p(r.email),l(2),p(r.feedback),l(2),p(r.feedbackStatus)}}function ve(a,s){if(a&1&&(t(0,"option",28),o(1),i()),a&2){let r=s.$implicit;b("value",r),l(),p(r)}}function Ee(a,s){if(a&1){let r=w();t(0,"form")(1,"div",18)(2,"label",19),o(3,"Full Name"),i(),t(4,"input",20),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedComplaint.name,e)||(n.selectedComplaint.name=e),f(e)}),i()(),t(5,"div",18)(6,"label",21),o(7,"Email"),i(),t(8,"input",22),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedComplaint.email,e)||(n.selectedComplaint.email=e),f(e)}),i()(),t(9,"div",18)(10,"label",23),o(11,"Complaint"),i(),t(12,"textarea",24),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedComplaint.feedback,e)||(n.selectedComplaint.feedback=e),f(e)}),i()(),t(13,"div",18)(14,"label",25),o(15,"Complaint Status"),i(),t(16,"select",26),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedComplaint.feedbackStatus,e)||(n.selectedComplaint.feedbackStatus=e),f(e)}),C(17,ve,2,2,"option",27),i()()()}if(a&2){let r=d();l(4),g("ngModel",r.selectedComplaint.name),l(4),g("ngModel",r.selectedComplaint.email),l(4),g("ngModel",r.selectedComplaint.feedback),l(4),g("ngModel",r.selectedComplaint.feedbackStatus),l(),b("ngForOf",r.feedbackStatus)}}var de=(()=>{let s=class s{constructor(m){this.userService=m,this.complaintList=[],this.selectedComplaint=null,this.isEditModalVisible=!1,this.feedbackStatus=[],this.InItComponent=()=>{this.userService.GetUserComplaints().subscribe(e=>{this.complaintList=e})},this.HandleEdit=e=>{this.userService.getComplentById(e).subscribe(n=>{this.selectedComplaint=n,this.isEditModalVisible=!0})},this.HandleSave=()=>{this.selectedComplaint&&this.userService.updateComplaintStatus(this.selectedComplaint.id,this.selectedComplaint).subscribe(e=>{this.ShowAlert(e,"User updated successfully","success"),this.isEditModalVisible=!1,this.InItComponent()})},this.HandleDelete=e=>{e!==null&&te.default.fire({title:"Are you sure",text:"You want to delete user",icon:"info",showCancelButton:!0,confirmButtonText:"Delete"}).then(n=>{n.isConfirmed&&this.userService.deleteComplaintById(e).subscribe(c=>{this.ShowAlert(c,"User Deleted successfully","success")})})},this.ShowAlert=(e,n,c)=>{te.default.fire({title:c==="success"?"Success":"Error",text:n,icon:c}).then(()=>{c==="success"&&this.InItComponent()})}}ngOnInit(){this.InItComponent(),this.feedbackStatus=Object.values(re)}};s.\u0275fac=function(e){return new(e||s)(P(N))},s.\u0275cmp=y({type:s,selectors:[["app-user-complaints"]],standalone:!0,features:[V([N]),v],decls:33,vars:8,consts:[[1,"mt-2","text-success"],[1,"table","table-hover","mt-5"],[4,"ngFor","ngForOf"],["tabindex","-1",1,"modal",3,"ngClass","ngStyle"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"btn","btn-warning","me-2",3,"click"],[1,"bi","bi-pencil"],[1,"btn","btn-danger",3,"click"],[1,"bi","bi-trash"],[1,"mb-3"],["for","name",1,"form-label"],["type","text","id","name","name","name",1,"form-control",3,"ngModelChange","ngModel"],["for","email",1,"form-label"],["type","email","id","email","name","email",1,"form-control",3,"ngModelChange","ngModel"],["for","feedback",1,"form-label"],["id","feedback","name","feedback",1,"form-control",3,"ngModelChange","ngModel"],["for","feedbackStatus",1,"form-label"],["id","feedbackStatus","name","feedbackStatus",1,"form-control",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,n){e&1&&(t(0,"h2",0),o(1,"User Complaints"),i(),t(2,"table",1)(3,"thead")(4,"tr")(5,"th"),o(6,"Sr.No"),i(),t(7,"th"),o(8,"Full Name"),i(),t(9,"th"),o(10,"Email"),i(),t(11,"th"),o(12,"Complaint"),i(),t(13,"th"),o(14,"Complaint Status"),i(),t(15,"th"),o(16,"Actions"),i()()(),t(17,"tbody"),C(18,we,16,5,"tr",2),i()(),t(19,"div",3)(20,"div",4)(21,"div",5)(22,"div",6)(23,"h5",7),o(24,"Edit Complaint"),i(),t(25,"button",8),h("click",function(){return n.isEditModalVisible=!1}),i()(),t(26,"div",9),C(27,Ee,18,5,"form",10),i(),t(28,"div",11)(29,"button",12),h("click",function(){return n.isEditModalVisible=!1}),o(30,"Close"),i(),t(31,"button",13),h("click",function(){return n.HandleSave()}),o(32,"Save changes"),i()()()()()),e&2&&(l(18),b("ngForOf",n.complaintList),l(),b("ngClass",E(4,xe,n.isEditModalVisible))("ngStyle",E(6,ye,n.isEditModalVisible?"block":"none")),l(8),b("ngIf",n.selectedComplaint))},dependencies:[M,k,I,F,L,D,J,A,R,U,B,T,Y,W,z]});let a=s;return a})();var pe=j(K());var Ne=a=>({show:a}),Pe=a=>({display:a});function Ie(a,s){if(a&1&&(t(0,"option",27),o(1),i()),a&2){let r=s.$implicit;b("value",r),l(),p(r)}}function Ve(a,s){if(a&1){let r=w();t(0,"div")(1,"div",14)(2,"div",15)(3,"div",16)(4,"label",17),o(5,"Full Name"),i(),t(6,"input",18),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedPassport.applicantForm.applicantName,e)||(n.selectedPassport.applicantForm.applicantName=e),f(e)}),i()(),t(7,"div",16)(8,"label",19),o(9,"Passport Number"),i(),t(10,"input",20),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedPassport.passportNumber,e)||(n.selectedPassport.passportNumber=e),f(e)}),i()(),t(11,"div",16)(12,"label",21),o(13,"Passport Type"),i(),t(14,"input",22),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedPassport.serviceRequestForm.applicationType,e)||(n.selectedPassport.serviceRequestForm.applicationType=e),f(e)}),i()()(),t(15,"div",15)(16,"select",23),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedPassport.passportStatus,e)||(n.selectedPassport.passportStatus=e),f(e)}),C(17,Ie,2,2,"option",24),i(),t(18,"div",16)(19,"label",25),o(20,"Payment Status"),i(),t(21,"input",26),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedPassport.paymentStatus,e)||(n.selectedPassport.paymentStatus=e),f(e)}),i()()()()()}if(a&2){let r=d();l(6),g("ngModel",r.selectedPassport.applicantForm.applicantName),l(4),g("ngModel",r.selectedPassport.passportNumber),l(4),g("ngModel",r.selectedPassport.serviceRequestForm.applicationType),l(2),g("ngModel",r.selectedPassport.passportStatus),l(),b("ngForOf",r.passportStatus),l(4),g("ngModel",r.selectedPassport.paymentStatus)}}function ke(a,s){if(a&1){let r=w();t(0,"tr")(1,"td"),o(2),i(),t(3,"td"),o(4),i(),t(5,"td"),o(6),i(),t(7,"td"),o(8),i(),t(9,"td"),o(10),i(),t(11,"td"),o(12),i(),t(13,"td")(14,"button",28),h("click",function(){let e=u(r).$implicit,n=d();return f(n.HandleEdit(e.id))}),x(15,"i",29),i()()()}if(a&2){let r=s.$implicit,m=s.index;l(2),p(m+1),l(2),p(r.applicantForm.applicantName+" "+r.applicantForm.applicantSurName),l(2),p(r.passportNumber),l(2),p(r.serviceRequestForm.applicationType),l(2),p(r.passportStatus),l(2),p(r.paymentStatus)}}var ce=(()=>{let s=class s{constructor(m){this.service=m,this.newPassportList=[],this.isDetailsModalVisible=!1,this.selectedPassport=void 0,this.passportStatus=[],this.InItComponent=()=>{this.service.GetAllNewPassportData().subscribe(e=>{this.newPassportList=e})},this.HandleEdit=e=>{this.service.getNewPassportById(e).subscribe(n=>{this.selectedPassport=n,this.isDetailsModalVisible=!0})},this.HandleSave=()=>{this.selectedPassport&&this.service.editNewPassportData(this.selectedPassport.id,this.selectedPassport).subscribe(e=>{this.ShowAlert(e,"Passport updated successfully","success"),this.isDetailsModalVisible=!1,this.InItComponent()})},this.ShowAlert=(e,n,c)=>{pe.default.fire({title:c==="success"?"Success":"Error",text:n,icon:c}).then(()=>{c==="success"&&this.InItComponent()})}}ngOnInit(){this.InItComponent(),this.passportStatus=Object.values(Q)}};s.\u0275fac=function(e){return new(e||s)(P(H))},s.\u0275cmp=y({type:s,selectors:[["app-new-passport-list"]],standalone:!0,features:[V([H]),v],decls:35,vars:8,consts:[["tabindex","-1",1,"modal",3,"ngClass","ngStyle"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"mt-2","text-success"],[1,"table","table-hover","mt-5"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-lg-6"],[1,"mb-3"],["for","fullName",1,"form-label"],["type","text","id","fullName","name","fullName",1,"form-control",3,"ngModelChange","ngModel"],["for","passportNumber",1,"form-label"],["type","text","id","passportNumber","name","passportNumber","disabled","",1,"form-control",3,"ngModelChange","ngModel"],["for","passportType",1,"form-label"],["type","text","id","passportType","name","passportType","disabled","",1,"form-control",3,"ngModelChange","ngModel"],["id","passportStatus","name","passportStatus",1,"form-select",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["for","paymentStatus",1,"form-label"],["type","text","id","paymentStatus","name","paymentStatus","disabled","",1,"form-control",3,"ngModelChange","ngModel"],[3,"value"],[1,"btn","btn-warning","me-2",3,"click"],[1,"bi","bi-pencil"]],template:function(e,n){e&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),o(5,"Passport Details"),i(),t(6,"button",5),h("click",function(){return n.isDetailsModalVisible=!1}),i()(),t(7,"div",6),C(8,Ve,22,6,"div",7),i(),t(9,"div",8)(10,"button",9),h("click",function(){return n.isDetailsModalVisible=!1}),o(11,"Close"),i(),t(12,"button",10),h("click",function(){return n.HandleSave()}),o(13,"Save changes"),i()()()()(),t(14,"h2",11),o(15,"New Passport List"),i(),t(16,"table",12)(17,"thead")(18,"tr")(19,"th"),o(20,"Sr.No"),i(),t(21,"th"),o(22,"Full Name"),i(),t(23,"th"),o(24,"Passport Number"),i(),t(25,"th"),o(26,"Passport Type"),i(),t(27,"th"),o(28,"Passport Status"),i(),t(29,"th"),o(30,"Payment Status"),i(),t(31,"th"),o(32,"Actions"),i()()(),t(33,"tbody"),C(34,ke,16,6,"tr",13),i()()),e&2&&(b("ngClass",E(4,Ne,n.isDetailsModalVisible))("ngStyle",E(6,Pe,n.isDetailsModalVisible?"block":"none")),l(8),b("ngIf",n.selectedPassport),l(26),b("ngForOf",n.newPassportList))},dependencies:[M,k,I,F,L,D,A,R,U,B,T,W]});let a=s;return a})();var ue=j(K());var Fe=a=>({show:a}),Le=a=>({display:a});function Ue(a,s){if(a&1&&(t(0,"option",27),o(1),i()),a&2){let r=s.$implicit;b("value",r),l(),p(r)}}function Te(a,s){if(a&1){let r=w();t(0,"div")(1,"div",14)(2,"div",15)(3,"div",16)(4,"label",17),o(5,"Full Name"),i(),t(6,"input",18),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedPassport.applicantForm.applicantName,e)||(n.selectedPassport.applicantForm.applicantName=e),f(e)}),i()(),t(7,"div",16)(8,"label",19),o(9,"Passport Number"),i(),t(10,"input",20),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedPassport.passportNumber,e)||(n.selectedPassport.passportNumber=e),f(e)}),i()(),t(11,"div",16)(12,"label",21),o(13,"Passport Type"),i(),t(14,"input",22),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedPassport.serviceRequestForm.applicationType,e)||(n.selectedPassport.serviceRequestForm.applicationType=e),f(e)}),i()()(),t(15,"div",15)(16,"select",23),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedPassport.passportStatus,e)||(n.selectedPassport.passportStatus=e),f(e)}),C(17,Ue,2,2,"option",24),i(),t(18,"div",16)(19,"label",25),o(20,"Payment Status"),i(),t(21,"input",26),S("ngModelChange",function(e){u(r);let n=d();return _(n.selectedPassport.paymentStatus,e)||(n.selectedPassport.paymentStatus=e),f(e)}),i()()()()()}if(a&2){let r=d();l(6),g("ngModel",r.selectedPassport.applicantForm.applicantName),l(4),g("ngModel",r.selectedPassport.passportNumber),l(4),g("ngModel",r.selectedPassport.serviceRequestForm.applicationType),l(2),g("ngModel",r.selectedPassport.passportStatus),l(),b("ngForOf",r.passportStatus),l(4),g("ngModel",r.selectedPassport.paymentStatus)}}function We(a,s){if(a&1){let r=w();t(0,"tr")(1,"td"),o(2),i(),t(3,"td"),o(4),i(),t(5,"td"),o(6),i(),t(7,"td"),o(8),i(),t(9,"td"),o(10),i(),t(11,"td"),o(12),i(),t(13,"td")(14,"button",28),h("click",function(){let e=u(r).$implicit,n=d();return f(n.HandleEdit(e.id))}),x(15,"i",29),i()()()}if(a&2){let r=s.$implicit,m=s.index;l(2),p(m+1),l(2),p(r.applicantForm.applicantName+" "+r.applicantForm.applicantSurName),l(2),p(r.passportNumber),l(2),p(r.serviceRequestForm.applicationType),l(2),p(r.passportStatus),l(2),p(r.paymentStatus)}}var fe=(()=>{let s=class s{constructor(m){this.service=m,this.newPassportList=[],this.isDetailsModalVisible=!1,this.selectedPassport=null,this.passportStatus=[],this.InItComponent=()=>{this.service.GetAllReNewPassportData().subscribe(e=>{this.newPassportList=e})},this.HandleEdit=e=>{this.service.getReNewPassportById(e).subscribe(n=>{this.selectedPassport=n,this.isDetailsModalVisible=!0})},this.HandleSave=()=>{this.selectedPassport&&this.service.editReNewPassportData(this.selectedPassport.id,this.selectedPassport).subscribe(e=>{this.ShowAlert(e,"Passport updated successfully","success"),this.isDetailsModalVisible=!1,this.InItComponent()})},this.ShowAlert=(e,n,c)=>{ue.default.fire({title:c==="success"?"Success":"Error",text:n,icon:c}).then(()=>{c==="success"&&this.InItComponent()})}}ngOnInit(){this.InItComponent(),this.passportStatus=Object.values(Q)}};s.\u0275fac=function(e){return new(e||s)(P(H))},s.\u0275cmp=y({type:s,selectors:[["app-re-new-passport-list"]],standalone:!0,features:[v],decls:35,vars:8,consts:[["tabindex","-1",1,"modal",3,"ngClass","ngStyle"],[1,"modal-dialog"],[1,"modal-content"],[1,"modal-header"],[1,"modal-title"],["type","button","aria-label","Close",1,"btn-close",3,"click"],[1,"modal-body"],[4,"ngIf"],[1,"modal-footer"],["type","button",1,"btn","btn-secondary",3,"click"],["type","button",1,"btn","btn-primary",3,"click"],[1,"mt-2","text-success"],[1,"table","table-hover","mt-5"],[4,"ngFor","ngForOf"],[1,"row"],[1,"col-lg-6"],[1,"mb-3"],["for","fullName",1,"form-label"],["type","text","id","fullName","name","fullName",1,"form-control",3,"ngModelChange","ngModel"],["for","passportNumber",1,"form-label"],["type","text","id","passportNumber","name","passportNumber","disabled","",1,"form-control",3,"ngModelChange","ngModel"],["for","passportType",1,"form-label"],["type","text","id","passportType","name","passportType","disabled","",1,"form-control",3,"ngModelChange","ngModel"],["id","passportStatus","name","passportStatus",1,"form-select",3,"ngModelChange","ngModel"],[3,"value",4,"ngFor","ngForOf"],["for","paymentStatus",1,"form-label"],["type","text","id","paymentStatus","name","paymentStatus","disabled","",1,"form-control",3,"ngModelChange","ngModel"],[3,"value"],[1,"btn","btn-warning","me-2",3,"click"],[1,"bi","bi-pencil"]],template:function(e,n){e&1&&(t(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h5",4),o(5,"Passport Details"),i(),t(6,"button",5),h("click",function(){return n.isDetailsModalVisible=!1}),i()(),t(7,"div",6),C(8,Te,22,6,"div",7),i(),t(9,"div",8)(10,"button",9),h("click",function(){return n.isDetailsModalVisible=!1}),o(11,"Close"),i(),t(12,"button",10),h("click",function(){return n.HandleSave()}),o(13,"Save changes"),i()()()()(),t(14,"h2",11),o(15,"Re-New Passport List"),i(),t(16,"table",12)(17,"thead")(18,"tr")(19,"th"),o(20,"Sr.No"),i(),t(21,"th"),o(22,"Full Name"),i(),t(23,"th"),o(24,"Passport Number"),i(),t(25,"th"),o(26,"Passport Type"),i(),t(27,"th"),o(28,"Passport Status"),i(),t(29,"th"),o(30,"Payment Status"),i(),t(31,"th"),o(32,"Actions"),i()()(),t(33,"tbody"),C(34,We,16,6,"tr",13),i()()),e&2&&(b("ngClass",E(4,Fe,n.isDetailsModalVisible))("ngStyle",E(6,Le,n.isDetailsModalVisible?"block":"none")),l(8),b("ngIf",n.selectedPassport),l(26),b("ngForOf",n.newPassportList))},dependencies:[M,k,I,F,L,D,A,R,U,B,T,W]});let a=s;return a})();var De=[{path:"",component:ae},{path:"user-list",component:le},{path:"user-feedback",component:me},{path:"new-pass-list",component:ce},{path:"re-newpass-list",component:fe},{path:"user-complaints",component:de}],ge=(()=>{let s=class s{};s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=G({type:s}),s.\u0275inj=q({imports:[Z.forChild(De),Z]});let a=s;return a})();var ht=(()=>{let s=class s{};s.\u0275fac=function(e){return new(e||s)},s.\u0275mod=G({type:s}),s.\u0275inj=q({imports:[M,ge]});let a=s;return a})();export{ht as AdminModule};
