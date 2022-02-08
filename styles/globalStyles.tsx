import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
  /* set defaults */

/* colors */
:root {
  --green: #18a763;
  
  --linear-gradient-green: linear-gradient(
    0deg,
    var(--light-green) 0%,
    var(--green) 77%
  );
  --light-green: #28a745;
  --greentransluscent: #00683744;
  --gray: #cccccc;
  --linegray: #bfbfbf88;

  --lightblue: #2aabe4;
  --primary: #0579c2;
  --linear-gradient: linear-gradient(
    0deg,
    var(--lightblue) 0%,
    var(--primary) 77%
  );
  --linear-gradient-red: linear-gradient(
    0deg,
    var(--light-red) 0%,
    var(--red) 77%
  );
  --linear-gradient-khaki: linear-gradient(
    0deg,
    var(--light-khaki) 0%,
    var(--khaki) 77%
  );
  --light-khaki: #fffcf1;
  --khaki: #fff2cc;
  --red: #a52727;
  --light-red:#dc3545;

  --linear-gradient-reversed: linear-gradient(
    180deg,
    var(--lightblue) 0%,
    var(--primary) 77%
  );
  --warning: #ff8300 !important;
}

.layout {
  min-height:100vh;
  width: 100%;
}
body {
  font-family: "Poppins", sans-serif;
-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
  color: black;
}
dl,
ol,
ul {
  list-style: none;
  margin: 0 !important;
  padding: 0 !important;
}
.btn-primary {
  background: var(--linear-gradient-reversed) !important;
  font-size: 10px !important;
  padding: 6px 17px;
}
.btn-primary:focus,
.btn-primary:hover {
  filter: brightness(120%) saturate(120%);
}
.sidebar-nav li {
  background: #ffffff01;
}
.sidebar-nav li:focus,
.sidebar-nav li:hover {
  background: #ffffff11;
}
.btn-tab {
  background: var(--gray);
  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
  font-size: 12px;
  min-width: 109px;
  min-height: 28px;
  padding: 0 !important;
  margin: 0 !important;
}
.btn-tab-active {
  background: var(--green);
  color: white;
}
.btn-tab:focus,
.btn-tab:hover {
  color: white;
}
/* website starts */

.layout {
  position: relative;
  z-index: 0;
}
.layout-modal-mode {
  box-shadow: 2px 2px 12px rgba(0, 0, 0);
}
/* header elements*/
header {
  border-bottom: #bfbfbf solid 2px;
  display: grid;
  grid-area: header;
  grid-template-areas: "logo nav";
  padding: 0 1rem;
  background: white;
  position:relative;
  z-index: 10;
}
.logo-area {
  display: grid;
  grid-area: logo;
  height: 100%;
}
.logo-area .logo,
.login-area .logo {
  font-size: 29px;
  font-weight: 700;
  margin: auto 0;
}
.logo-area a {
  text-decoration: none;
}
.nav-area {
  grid-area: nav;
  display: flex;
  flex-direction: row-reverse;
}
.nav-area .header-nav {
  display: flex;
  justify-content: end;
  min-height: 100%;
}
.nav-area .header-nav .active {
  -webkit-box-shadow: 0px 7px 0px 0px var(--green),
    2px 3px 0px 3px rgba(0, 0, 0, 0);
  box-shadow: 0px 7px 0px 0px var(--green), 2px 3px 0px 3px rgba(0, 0, 0, 0);
}
.nav-area .header-nav li {
  display: flex;
  margin: auto;
}
.nav-area .header-nav li a {
  font-size: 14px;
  text-decoration: none;
  text-transform: uppercase;
  padding: 32px 0.5rem;
}
.nav-area .header-nav li {
  color: var(--green);
}
.nav-area .header-nav li a:hover {
  color: var(--green);
  -webkit-box-shadow: 0px 7px 0px 0px var(--green),
    2px 3px 0px 3px rgba(0, 0, 0, 0);
  box-shadow: 0px 7px 0px 0px var(--green), 2px 3px 0px 3px rgba(0, 0, 0, 0);
}
.nav-area .header-nav li a:active {
  color: var(--green);
}
/* header ends */
/* sidebar */
.sidebar-area {
 
  position: relative;
  bottom: 0;
  top: 14.5%;
  width: 20vw;
} 
.sidebar-area > div > nav {
  min-height: 100vh;
}
.sidebar-area .sidebar-nav li:nth-child(n + 2) {
  border-top: 2px solid #ffffff24;
}
.sidebar-area .sidebar-nav li {
 
  cursor: pointer;
}
.sidebar-area img {
  width: 15px;
  height: 15px;
  margin-right: 10px;
}
.sidebar-area a {
  color: white;
  font-size: 14px;
}
/* !TODO agregar icons al listado*/
/* main layout */
main {
  position: relative;
  z-index: 1;
  padding: 1.5rem;
}
.main-layout {
  display: flex;
  flex-wrap: wrap;
  grid-template-columns: 1fr auto;
  height: 100%;
}

.tabs-area {

  width: 100%;
}
.message-box {
  padding: 0.91rem 0 1rem 3rem;
  border: 1.5px solid black;
  border-radius: 10px;
  margin-bottom: 0.62rem;
  margin-left: 4px;
  position: relative;
  width: 40%;
  max-height: 150px;
}
.message-box::before {
  background: url(/bubble.png) no-repeat left top;
  content: "";
  position: absolute;
  left: 8px;
  top: 5px;
  width: 40px;
  height: 40px;
}
.message-box h5 {
  font-weight: 800;
  font-size: 14px;
  margin-bottom: 0.85rem;
}
.message-box h6 {
  font-style: italic;
  margin: 0 !important;
  font-size: 14px;
}
.calendar-area {
  position: absolute;
  top: 0;
  right: 0;
  width: 30%;
  display: grid;
  z-index: 5;
  grid-template-areas:
    "top"
    "bottom";
box-shadow: 16px 19px 13px 15px #0004;
}
.wrapper-before-calendar-wrapper{
  background: white;
}
.calendar-wrapper {
  grid-area: top;
  display: flex;
  gap: 4rem;
  margin: 0 auto;
}
.calendar-container {
  font-size: 10px;
}
.calendar-days {
  margin-top: 0.3rem;
  display: grid;
  grid-template-columns: repeat(7, 15px);
  grid-gap: 0.5rem;
  text-align: center;
}
.calendar-day.active {
  background: var(--primary);
  border-radius: 100%;
  color: white;
}
.day-schedule-area {
  grid-area: bottom;
}
.day-schedule-header {
  border-bottom: 1px solid var(--linegray);
  display: flex;
}
.day-schedule-header img {
  max-width: 75px;
}
.day-schedule-header-title {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
  border-left: 1px solid var(--linegray);
}
.day-schedule-header-title span:nth-child(1) {
  font-size: 12px;
}
.day-schedule-header-title span:nth-child(2) {
  font-size: 24px;
}
.day-schedule-hours {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
  max-height: 67.5vh;
}
.day-schedule-hour-and-event {
  display: flex;
  font-size: 10px;
  position: relative;
}
.ds-s-hour {
  text-align: right;
  padding: 15px 0;
  min-width: 60px;
  max-width: 60px;
  margin-right: 15px;
}
.ds-s-event {
  padding: 10px 15px;
  border-left: 1px solid var(--linegray);
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  z-index: 2;
}
.ds-s-event:before {
  border-bottom: 1px solid var(--linegray);
  width: 98%;
  content: "";
  position: absolute;
  left: -8px;
  top: 2.8vh;
  display: inline-block;
  z-index: 1;
}
.withevent {
  font-size: 12px;
  background: #b3e1f8;
  padding: 4px 5px;
  z-index: 2;
  margin-top: -12px;
  margin-left: -14.9px;
  margin-right: 25px;
  display: flex;
  flex-direction: column;
}
.tabs-list-crud-actions {
  text-align: right;
  margin-right: 1px;
}
.tab-actions-and-search {
  margin-top: 0.4rem;
  display: flex;
  border-bottom: 3px solid white;
  margin-left: 2px;
}
.tab-actions-and-search .tab-search {
  margin-left: auto;
}
.tab-actions-and-search .tab-search input {
  min-width: 294px;
}
.tab-search fieldset {
  display: inline-block;
  position: relative;
}
.tab-search fieldset:after {
  font-family: "FontAwesome";
  content: "\f002";
  position: absolute;
  right: 6px;
  top: 3px;
}
.login-area-form form {
  position: relative;
  display: inline-block;
}

.login-username {
  background: url(login-username.png) no-repeat left center;
  padding-left: 1.6rem;
  border-left: 1px solid var(--linegray);
}
.login-password {
  background: url(login-password.png) no-repeat left center;
  padding-left: 1.6rem;
  border-left: 1px solid var(--linegray);
}
.tab-search fieldset input {
  font-size: 12px;
  padding-left: 10px;
  height: 30px;
}
/* tab list */
.tab-list-pagination {
  display: flex;
  margin-top: 6px;
}
.tab-list-pagination a {
  color: #b4b4b4;
}
.tab-list-pagination .active {
  color: black;
}
.tab-list-pagination ul {
  display: flex;
  margin-left: auto !important;
  font-size: 13px;
}
.tab-list-pagination li:nth-child(n + 2):before {
  content: "-";
  color: #b4b4b4;
  margin: 0 3px;
}
/* tab list form */
.tab-list-form .form-check-input[type="checkbox"] {
  border-radius: 0 !important;
}
.tab-list-form {
  border-left: 1px solid var(--linegray);
  border-right: 1px solid var(--linegray);
  border-bottom: 1px solid var(--linegray);
  border-top: 0;
}
.tab-list-form .tab-list-form-heading {
  border-top: 1px solid var(--linegray);
  display: flex;
  background: var(--green);
  color: white;
  height: 36px;
  font-size: 12px;
}
.tab-list-form .tab-list-form-heading .tab-list-form-heading-column {
  border-right: 1px solid var(--linegray);
  margin: auto 0;
  padding: 8.5px;
  padding-left: 10.5px;
}
.tab-list-form .tab-list-form-row {
  display: flex;
  font-size: 14px;
  height: 49px;
  width: 100%;
}
.tab-list-form .tab-list-form-row:hover {
  background: var(--greentransluscent) !important;
}
.tab-list-form .tab-list-form-heading .tab-list-form-heading-column,
.tab-list-form .tab-list-form-row .tab-list-form-row-column {
  border-right: 1px solid var(--linegray);
  padding: 18px 0;
  padding-left: 10.5px;
  height: 100%;
}
.tab-list-form .tab-list-form-heading .tab-list-form-heading-column:nth-child(1),
.tab-list-form .tab-list-form-row .tab-list-form-row-column:nth-child(1){
  min-width: 5%;
}
.tab-list-form .tab-list-form-heading .tab-list-form-heading-column:nth-child(2),
.tab-list-form .tab-list-form-row .tab-list-form-row-column:nth-child(2){
  min-width: 25%;
}
.tab-list-form .tab-list-form-heading .tab-list-form-heading-column:nth-child(3),
.tab-list-form .tab-list-form-row .tab-list-form-row-column:nth-child(3){
  min-width: 25%;
}
.tab-list-form .tab-list-form-heading .tab-list-form-heading-column:nth-child(4),
.tab-list-form .tab-list-form-row .tab-list-form-row-column:nth-child(4){
  min-width: 21%;
}
.tab-list-form .tab-list-form-heading .tab-list-form-heading-column:nth-child(5),
.tab-list-form .tab-list-form-row .tab-list-form-row-column:nth-child(5){
  min-width: 20.3%;
}
.tab-list-form .tab-list-form-row:nth-child(odd) {
  background: #f2f2f2;
}
.tab-list-tt {
  margin-left: 5px;
}
.btn .btn-gplus {
  margin: 0 !important;
  padding: 0 !important;
}
/* sistema1 @media */

@media (min-width: 1367px) {
  .main-layout {
    grid-template-columns: 60% 40%;
  }
  .tab-list-form .tab-list-form-heading {
    grid-template-columns: 50px auto 150px 145px 80px 50px;
  }
  .tab-list-form .tab-list-form-row {
    grid-template-columns: 50px auto 150px 145px 80px 50px;
  }
}
/* fin sistema1 */
/* sistema2 */
.notifications-and-graphs {
  display: grid;
  grid-template-areas: "notif graphs";
  grid-template-columns: 50% 50%;
  padding: 1.205rem;
}
.notifications-and-graphs .message-box {
  grid-area: notif;
}
.graphs-area {
  grid-area: graphs;
  display: flex;
  position: relative;
}
.graphs-area .graph:nth-child(1) {
  position: absolute;
  left: -20%;
  top: -40%;
}
.graphs-area .graph:nth-child(2) {
  position: absolute;
  left: 10%;
  top: -40%;
}
.graphs-area .graph:nth-child(3) {
  position: absolute;
  left: 40%;
  top: -40%;
}
.main-layout-expanded-tabs .tabs-area {
  padding-right: 1.205rem;
}
.main-layout-expanded-tabs .tab-list-form .tab-list-form-heading {
  grid-template-columns: 1fr 4fr 5fr 3fr 1fr 1fr;
}
.main-layout-expanded-tabs .tab-list-form .tab-list-form-row {
  grid-template-columns: 1fr 4fr 5fr 3fr 1fr 1fr;
}
.tab-list-form-row-column-flex {
  border-right: 1px solid var(--linegray);
  padding: 11px 0;
  padding-left: 10.5px;
  height: 100%;
  display: flex;
}
.product-block {
  margin-left: auto;
  margin-top: 1px;
  margin-right: 8px;
}
.block-1 {
  background: #009345;
  display: inline-block;
  min-width: 15px;
  height: 15px;
  margin-right: -3px;
}
.block-2 {
  background: #3ab54a;
  display: inline-block;
  min-width: 15px;
  height: 15px;
  margin-right: -3px;
}
.block-3 {
  background: #8cc63e;
  display: inline-block;
  min-width: 15px;
  height: 15px;
  margin-right: -3px;
}
.block-4 {
  background: #d9e021;
  display: inline-block;
  min-width: 15px;
  height: 15px;
  margin-right: -3px;
}
.block-empty {
  display: inline-block;
  min-width: 15px;
  height: 15px;
  margin-right: -3px;
}
.task-status {
  display: inline-block;
  min-width: 8px;
  height: 8px;
  border-radius: 100%;
  margin-left: auto;
  margin-top: 5px;
  margin-right: 8px;
  border: 1px solid black;
}
.task-status-red {
  background: red;
}
.task-status-yellow {
  background: yellow;
}
/* sistema2 @media*/
@media (max-width: 1010px) {
  .graphs-area .graph:nth-child(1) {
    left: -30%;
  }
  .graphs-area .graph:nth-child(2) {
    left: 3%;
  }
  .graphs-area .graph:nth-child(3) {
    left: 35%;
  }
}
@media (min-width: 1562px) {
  .graphs-area .graph:nth-child(1) {
    left: -10%;
  }
  .graphs-area .graph:nth-child(2) {
    left: 15%;
  }
  .graphs-area .graph:nth-child(3) {
    left: 40%;
  }
}
/* sistema4.html */
.login-layout {
  min-height: 100vh;
}
.login-layout main {
  display: flex;
}
.image-area {
  width: 75%;
}
.image-area img {
  width: 100%;
  min-height: 100vh;
}
.login-area {
  width: 25%;
}
.login-area .logo {
  margin-top: 10vh;
  margin-bottom: 15vh;
  text-align: center;
}
.login-area-form {
  padding: 0 5rem;
  text-align: start;
}
.login-area-form input[type="text"],
.login-area-form input[type="password"] {
  margin: 0.71rem 0;
  min-height: 40px;
}
.login-area-form input[type="checkbox"] {
  margin: 0.5rem 0;
}
.login-area-form .login-username::placeholder,
.login-area-form .login-password::placeholder {
  padding-left: 1.5rem;
}
.btn-login {
  margin-top: 1rem;
  min-width: 100%;
  font-size: 16px !important;
  letter-spacing: 3px;
}
/* modal */
.modal-content {
  border: 0 !important;
  border-radius: 0;
}
.modal-dialog {
  max-width: 900px;
  margin: 0 auto;
}
.modal-header {
  margin: 0 1.5rem;
  border: 0;
  padding: 0;
}
.modal-title {
  background: var(--primary);
  color: white;
  font-size: 20px;
  margin: 0 !important;
  padding: 0.3rem 0.71rem !important;
  border: 1px solid var(--primary);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
}
.modal-tabs {
  display: flex;
  margin: 1rem auto 0 auto;
}
.btn-tab-primary {
  background-color: var(--primary);
  color: white;
  border-radius: 7px;
  padding: 4px 16px;

  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.btn-tab-secondary {
  background-color: var(--gray);
  color: white;
  border-radius: 7px;
  padding: 4px 16px;

  border-bottom-left-radius: 0 !important;
  border-bottom-right-radius: 0 !important;
}
.modal-tabs > * {
  margin-left: 1rem;
}
.modal-body {
  padding: 2.25rem;
  margin: -1px 1.45rem 0 1.45rem;
  border: 1px solid black;
  border-radius: 14px;
}
.modal-footer {
  border: 0;
}
.modal-footer .btn-primary {
  padding-left: 2rem;
  padding-right: 2rem;
}
.datepicker {
  display: flex;
}
.modal-body .row {
  padding: 1rem;
}
.modal-body .row:nth-child(n + 2) {
  border-top: 1px solid var(--linegray);
}

/* deletesoon */
/*
  START LOGIN PAGE
*/

.login-bg {
  background-image: url("/public/fondo-login.png");
  background-position: center;
  background-size: cover;
}

.login-page {
  height: 100vh;
}
@media (min-width: 768px) {
  .login-bg {
    height: 100%;
  }
}
.login-side {
  display: flex;
  flex-direction: column;
  place-items: center;
}
.login-side .form-control {
  margin-bottom: 1rem;
}
.login-logo-area {
  margin-top: 15vh;
}
/*
  END LOGIN PAGE
*/

.alertbox {
  position: absolute;
  top: 0;
  right: 0;
  z-index: 9999999;
}

#__next,
.app-container {
  height: 100%;
}

.app-container > div {
  display: flex;
}
.app-container .tooltip-wrapper {
  position: relative;
  width: 100%;
}

.app-container .sidebar-area{
  user-select: none;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
 width: auto;
}
.app-container .modal {
  user-select: none;
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  top: 20px;
  position: absolute;
}
.form-check-input {
  margin-top: 0 !important;
  margin-left: 0;
}
.layoutModal {
  position: absolute;
  z-index: 99999;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  overflow-y: scroll;
}
.layoutModal > div > div {
  box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.2);

}
.modal-mode {
  overflow-y: auto;
  position: fixed;
  inset: 0 0 0 0;
}

.modal-open {
  padding-top: 10vh;
  background-color: #00000044;
}
.tab-list-form-heading-column {
  padding-top: 9px!important;
}
.user-btn {
  display: inline-block;
font-weight: 400;
color: #212529;
text-align: center;
vertical-align: middle;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
background-color: transparent;
border: 1px solid transparent;
padding: .375rem .75rem;
font-size: 1rem;
line-height: 1.5;
border-radius: .25rem;
transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out;
  &:hover {
    text-decoration: underline!important;
  }
}
.solicitude-data {
  font-size: 12px;
}

.priority-icon {
  display: block;
  width: 25px;
  height: 25px;
  background: url(/priority-icon.jpg) no-repeat center;
  background-size: cover;
}

.priority-icon .priority-important{
filter: invert(85%) sepia(12%) saturate(6087%) hue-rotate(351deg) brightness(99%) contrast(103%);

}
.priority-icon .priority-normal {
  filter: invert(51%) sepia(75%) saturate(7020%) hue-rotate(200deg) brightness(103%) contrast(106%);
}
.sidebar-area > div > nav{
  display:flex !important;}
  .p-side{
    position: relative;
    display: inline-flex;
  }
  .txt-center{
    text-align:center;
  }
  .pt-20{
      padding-top: 20% !important;}
  .pt-auto{
      padding-top: 6%;}

  .sidebar-client{
    background: var(--linear-gradient);
  }
  .sidebar-broker{
    background: var(--linear-gradient-red);
  }
  .sidebar-insurance{
    background: var(--linear-gradient-green);
  }
  .select-product{
    margin-bottom:20px;
    height:40px;
  }
  .ml-10{
    margin-left:10px;
  }
  .info-card{
    margin-top:5vw;
  }
  .archive-card{
    margin-top:40px;
    margin-bottom:40px;
  }
  .card-check{
    text-align: start;
    margin-left: 10%;
  }
  .bg-grey{
    background-color:var(--linegray);
  }
  .notes-area{
    height: 15vw;
  }
  .txt-align-end{
    text-align:end;
  
  }
  .notes-n{
    background:var(--linear-gradient-khaki);
    border-radius:20px;
    border: 1px solid;
    margin: 20px 10px 20px 10px;
    width:100%;
    padding:10px
  
  }
  .notes-n p{
    margin: 20px 0px 20px 0px;

  }
  .notes-n h4{
    margin: 20px 0px 0px 20px;

  }
  .note-footer{
    text-align:end;
    margin-right:5px;
    font-weight: bold;

  }
  input[type="file"] {
    color: transparent;
    position:absolute;
   left:30px;
}
 .left{
   right:30px;
 }
 .archive-select{
   margin-left:15px;
   margin-right:15px;
   height:40px;
 }
 .archive-description{
  text-align:start;
  margin-right:5px;
 
 }
 .opacity-0{
  opacity:0;
 }
 .logo-insurance{

  margin-right:30px;
 }
 .logo-insurance img{
  width:150px;
  height:150px;
  border-radius: 100px;
   
 }
 .txt-align-ct{
   text-align:center;
 }
 .btn-archive{
  text-align: end;
  margin-left: 150px;
  margin-top: 50px;
 }
 .bg-khaki{
  background: var(--linear-gradient-khaki);
 }
`;

export default Styles;
