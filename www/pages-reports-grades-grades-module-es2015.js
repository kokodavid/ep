(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-reports-grades-grades-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reports/grades/grades.page.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reports/grades/grades.page.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\" style=\"font-size: 14px;\">\n      <ion-back-button text=\"\" icon=\"chevron-back\"></ion-back-button>REPORT CARDS\n    </ion-buttons>\n    <!-- <ion-title style=\"text-transform: uppercase\">Report Card</ion-title> -->\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div id=\"capture\">\n    <table width=\"100%\">\n      <tr>\n        <td width=\"100%\" height=\"70\">\n          <img src={{header1}} />\n        </td>\n      </tr>\n      <tr>\n        <td width=\"100%\">\n          <h4 style=\"text-align: center; font-size:12px;\">PROGRESS REPORT</h4>\n        </td>\n      </tr>\n      <!-- <tr><td width=\"100%\" colspan=\"3\">Name: {{student.first_name}} {{student.last_name}} </td></tr>\n      <tr><td width=\"50%\" colspan=\"1\">Class: <small>{{reportCard.class_name}}</small></td> <td width=\"50%\" colspan=\"2\">Class Teacher:<small> {{reportCard.teacher_name}}</small></td></tr>\n      <tr><td width=\"32.3%\" colspan=\"1\">Term: {{reportCard.term_name}} </td> <td width=\"33.3%\" colspan=\"1\">Year: {{reportCard.year}} </td><td width=\"33.3%\" colspan=\"1\">Date: {{this.formatDate(reportCard.date)}} </td></tr> -->\n    </table>\n    <ion-item *ngIf=\"fake === 0 && exam_marks.length === 0\">\n      <ion-spinner name=\"lines-small\" style=\"text-align: center; margin-left: 50%; margin-right: 50%;\" color=\"primary\">\n      </ion-spinner>\n    </ion-item>\n    <ion-item *ngIf=\"fake === 1 && exam_marks.length === 0\">\n      No report Card information\n    </ion-item>\n\n    <div *ngIf=\"exam_marks.length > 0\">\n      <div *ngIf=\"student.school !== 'lasalle'\">\n        <ion-row>\n          <ion-col col-12> Name: {{reportCards.student_name}}</ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6> Class: <small>{{reportCards.class_name}}</small></ion-col>\n          <ion-col col-6>Admission Number:<small> {{reportCards.admission_number}}</small></ion-col>\n        </ion-row>\n        <ion-row>\n          <ion-col col-6>Term: {{reportCards.term_name}} </ion-col>\n          <ion-col col-6>Year: {{reportCards.year}} </ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let p of positions\">\n          <ion-col col-6>Position : <small></small>{{p.this_term_position.position}} /\n            {{p.this_term_position.position_out_of}}</ion-col>\n          <ion-col col-6 *ngIf=\"p.last_term_position !== null\">Position Last\n            Term:<small>{{p.last_term_position.position}}\n              /\n              {{p.last_term_position.position_out_of}}</small></ion-col>\n        </ion-row>\n        <ion-row *ngFor=\"let ov of overall\">\n          <ion-col col-6>Last Term Marks: <small>{{ov.last_term_marks_and_grade[0].overall_mark}}</small>\n          </ion-col>\n          <ion-col col-6>Current Term Marks:<small>{{ov.this_term_marks_and_grade[0].overall_mark}}</small></ion-col>\n        </ion-row>\n\n\n        <div *ngIf=\"cbc ==='cbc'\">\n\n        </div>\n        <div *ngIf=\"cbc != 'cbc'\" class=\"table_wrapper\">\n          <table border=\"1\">\n            <tr>\n              <td width=\"4%\" rowspan=\"3\"> SUBJECT </td>\n              <td scope=\"col\" [attr.colspan]=colspan> MARKS </td>\n            </tr>\n            <tr>\n              <td *ngFor=\"let t of exam_type\">\n                {{t}}\n            <tr>\n              <td scope=\"col\">Mark %</td>\n              <td scope=\"col\">Grade</td>\n              <td scope=\"col\">OutOf</td>\n            </tr>\n            </td>\n            <td scope=\"col\">\n              Overall\n              <tr>\n                <td scope=\"col\">Avg</td>\n                <td scope=\"col\">Grade</td>\n              </tr>\n            </td>\n            </tr>\n            <tbody *ngFor=\"let r of sub;  let i = index\">\n              <tr style=\"text-align: center\">\n                <td style=\"text-align: start;  font-size:12px; font-weight:bold;\" *ngIf=\"r.parent_subject_id === null\"\n                  width=\"4%\">\n                  {{r.subject_name}}\n                </td>\n                <td style=\"font-size:12px;  margin-left: 5px !important;\" *ngIf=\"r.parent_subject_id !== null\"\n                  width=\"4%\">\n                  {{r.subject_name}}\n                </td>\n\n                <td style=\"font-size: 12px; text-align: center;\" scope=\"col\" *ngIf=\"cat1.length != 0\">\n              <tr *ngFor=\"let ca of cat1\" style=\"text-align: center;\">\n                <td *ngIf=\"r.subject_name === ca.subject_name && ca.mark !== null\" scope=\"col\">\n                  <div *ngIf=\"ca.mark !== null\">\n                    {{ca.mark}}\n                  </div>\n                </td>\n                <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.mark !== null\">\n                  <div *ngIf=\"ca.grade !== null\">\n                    {{ca.grade}}\n                  </div>\n                </td>\n                <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\">\n                  {{ca.out_of}}\n                </td>\n              </tr>\n              </td>\n              <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 1 && cat2.length != 0\">\n                <tr *ngFor=\"let ca of cat2\" style=\"text-align: center;\">\n                  <td *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\" scope=\"col\">\n                    {{ca.mark}}\n\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.grade != null\">\n                    {{ca.grade}}\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\">\n                    {{ca.out_of}}\n                  </td>\n                </tr>\n              </td>\n              <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 2 && cat3.length != 0\">\n                <tr *ngFor=\"let ca of cat3\" style=\"text-align: center;\">\n                  <td *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\" scope=\"col\">\n                    {{ca.mark}}\n\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.grade != null\">\n                    {{ca.grade}}\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\">\n                    {{ca.out_of}}\n                  </td>\n                </tr>\n              </td>\n              <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 3 && cat4.length != 0\">\n                <tr *ngFor=\"let ca of cat4\" style=\"text-align: center;\">\n                  <td *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\" scope=\"col\">\n                    {{ca.mark}}\n\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.grade != null\">\n                    {{ca.grade}}\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\">\n                    {{ca.out_of}}\n                  </td>\n                </tr>\n              </td>\n              <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 4 && cat5.length != 0\">\n                <tr *ngFor=\"let ca of cat5\" style=\"text-align: center;\">\n                  <td *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\" scope=\"col\">\n                    {{ca.mark}}\n\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.grade != null\">\n                    {{ca.grade}}\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\">\n                    {{ca.out_of}}\n                  </td>\n                </tr>\n              </td>\n              <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 5 && cat6.length != 0\">\n                <tr *ngFor=\"let ca of cat6\" style=\"text-align: center;\">\n                  <td *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\" scope=\"col\">\n                    {{ca.mark}}\n\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.grade != null\">\n                    {{ca.grade}}\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\">\n                    {{ca.out_of}}\n                  </td>\n                </tr>\n              </td>\n              <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 6 && cat7.length != 0\">\n                <tr *ngFor=\"let ca of cat7\" style=\"text-align: center;\">\n                  <td *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\" scope=\"col\">\n                    {{ca.mark}}\n\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.grade != null\">\n                    {{ca.grade}}\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.mark != null\">\n                    {{ca.out_of}}\n                  </td>\n                </tr>\n              </td>\n              <td scope=\"col\">\n                <tr *ngFor=\"let o of subjOvrl\" style=\"text-align: center\">\n                  <td scope=\"col\" *ngIf=\"o.subject_id === r.subject_id\">\n                    {{o.average}}%\n                  </td>\n                  <td scope=\"col\" *ngIf=\"o.subject_id === r.subject_id\">\n                    {{o.grade}}\n                  </td>\n                </tr>\n              </td>\n              </tr>\n            </tbody>\n            <tfoot>\n              <tr>\n                <td>TOTAL</td>\n                <td *ngFor=\"let t of total;  let i = index\" scope=\"col\">\n              <tr style=\"text-align: center\">\n                <td scope=\"col\" style=\"text-align: center\" *ngIf=\"t.total !== null\">{{t.total}}</td>\n                <td scope=\"col\" style=\"text-align: center\" *ngIf=\"t.grade !== null\">{{t.grade}}</td>\n                <td scope=\"col\" style=\"text-align: center\" *ngIf=\"t.grade !== null\">{{t.out_of}}</td>\n                <!-- <td scope=\"col\" style=\"text-align: center;\" *ngIf=\"t.total === null\">0</td> -->\n                <!-- <td scope=\"col\" style=\"text-align: center;\" *ngIf=\"t.grade === null\">0</td> -->\n              </tr>\n              </td>\n              <td scope=\"col\" style=\"text-align: center\" *ngFor=\"let ovg of avg\">\n                <tr style=\"text-align: center\">\n                  <td scope=\"col\" style=\"text-align: center;\" *ngIf=\"ovg.percentage !== null\">\n                    {{ovg.percentage}} %\n                  </td>\n                  <td scope=\"col\" style=\"text-align: center;\" *ngIf=\"ovg.overall_grade !== null\">\n                    {{ovg.overall_grade}}\n                  </td>\n                </tr>\n\n\n              </td>\n              </tr>\n\n            </tfoot>\n          </table>\n        </div>\n\n        <h1 style=\"font-size: 12px;\">REMARKS</h1>\n        <table width=\"100%\" border=\"1\">\n          <tr>\n            <td width=\"50%\" style=\"text-align:inherit; margin:1px;;\"><b>Class Teacher Name:</b>\n              {{comments.teacher_name}}\n            </td>\n            <td width=\"50%\" style=\"text-align:inherit; margin:1px;\"><b>Comments:</b> {{comments.teacher_comments}}</td>\n          </tr>\n          <tr>\n            <td width=\"50%\" style=\"text-align:start; margin:1px;;\"> <b>Head Teacher Name:</b>\n              {{comments.head_teacher_name}}\n\n            </td>\n            <td width=\"50%\" style=\"text-align:inherit; margin:1px;\"><b>Comments:</b> {{comments.principle_comments}}\n            </td>\n\n          </tr>\n          <tr>\n            <td width=\"100%\">Closing Date: <br>{{this.formatDate(closing_date)}}</td>\n            <td width=\"100%\" *ngIf=\"opening_date\">Next Terms Begins: <br>{{this.formatDate(opening_date)}}</td>\n          </tr>\n        </table>\n      </div>\n      <div *ngIf=\"student.school === 'lasalle'\">\n        <!-- kgs lasalle -->\n\n\n        <!-- grades lasalle -->\n        <!--LASALLE LOWER PRIMARY SCHOOL-->\n        <div *ngIf=\"student.class_cat_id === 5 || student.class_cat_id === 7 || student.class_cat_id === 9 ||student.class_cat_id === 6 || student.class_cat_id === 8 || student.class_cat_id === 21\n          || student.class_cat_id === 39\">\n\n          <ion-row>\n            <ion-col col-12> Name: {{reportCards.student_name}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Class: <small>{{reportCards.class_name}}</small></ion-col>\n            <ion-col col-6>Admission Number:<small> {{reportCards.admission_number}}</small></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Term: {{reportCards.term_name}} </ion-col>\n            <ion-col col-6>Year: {{reportCards.year}} </ion-col>\n          </ion-row>\n          <!-- <ion-row *ngFor=\"let p of positions\">\n            <ion-col col-6>Position : <small></small>{{p.this_term_position.position}} /\n              {{p.this_term_position.position_out_of}}</ion-col>\n            <ion-col col-6 *ngIf=\"p.last_term_position !== null\">Position Last\n              Term:<small>{{p.last_term_position.position}}\n                /\n                {{p.last_term_position.position_out_of}}</small></ion-col>\n          </ion-row> -->\n          <!-- <ion-row *ngFor=\"let ov of overall\">\n            <ion-col col-6>Last Term Marks: <small>{{ov.last_term_marks_and_grade[0].overall_mark}}</small>\n            </ion-col>\n            <ion-col col-6>Current Term Marks:<small>{{ov.this_term_marks_and_grade[0].overall_mark}}</small></ion-col>\n          </ion-row> -->\n          <div class=\"table_wrapper\">\n            <table border=\"1\">\n              <tr style=\"width:100%;\">\n                <td scope=\"col\" rowspan=\"2\"> LEARNING AREA</td>\n                <td scope=\"col\" colspan=\"4\">MARKS</td>\n                <td>Educator's init</td>\n              </tr>\n              <tr>\n                <!-- <td width=\"7%\" >\n              </td> -->\n                <td scope=\"col\" style=\" font-size:13px;\">\n                  EE\n              <tr>\n                <td style=\" font-size:13px;\" scope=\"col\">4</td>\n              </tr>\n              </td>\n              <td scope=\"col\" style=\" font-size:13px;\">\n                ME\n                <tr>\n                  <td style=\" font-size:13px;\" scope=\"col\">3</td>\n                </tr>\n              </td>\n              <td scope=\"col\" style=\" font-size:13px;\">\n                AE\n                <tr>\n                  <td style=\" font-size:13px;\" scope=\"col\">2</td>\n                </tr>\n              </td>\n              <td scope=\"col\" style=\" font-size:13px;\">\n                BE\n                <tr>\n                  <td style=\" font-size:13px;\">1</td>\n                </tr>\n              </td>\n              <td scope=\"col\">\n\n              </td>\n\n              <!-- <td scope=\"col\">\n                Overall\n                <tr>\n                  <td scope=\"col\">Mark %</td>\n                  <td scope=\"col\">Grade</td>\n                </tr>\n              </td> -->\n              </tr>\n              <tbody *ngFor=\"let r of  sub;  let i = index\">\n                <tr style=\"text-align: center\">\n                  <td style=\"text-align: start; font-size:12px; font-weight:bold\">\n                    {{r.subject_name}}\n                  </td>\n\n                  <td scope=\"col\">\n                    <tr>\n  \n                    </tr>\n                  </td>\n                <td scope=\"col\">\n                  <tr>\n\n                  </tr>\n                </td>\n                <td scope=\"col\">\n                 <tr>\n\n                 </tr>\n                </td>\n                <td scope=\"col\">\n                  <tr>\n\n                  </tr>\n                </td>\n                <td scope = \"col\">{{r.initials}}</td>\n                <!-- <td scope=\"col\">\n                  <tr *ngFor=\"let o of subjOvrl\" style=\"text-align: center\">\n                    <td scope=\"col\" *ngIf=\"o.subject_id === r.subject_id\">\n                      {{o.average}}%\n                    </td>\n                    <td scope=\"col\" *ngIf=\"o.subject_id === r.subject_id\">\n                      {{o.grade}}\n                    </td>\n                  </tr>\n                </td> -->\n                </tr>\n\n              </tbody>\n\n            </table>\n          </div>\n          <div><br></div>\n          <table width=\"100%\" border=\"1\">\n            <tr>\n              <td width=\"100%\" colspan=\"4\" style=\"text-align: center\"> KEY TABLE</td>\n            </tr>\n            <tr>\n              <td width=\"60%\" colspan=\"4\" style=\"text-align: center\">DETAILS</td>\n            </tr>\n            <tr *ngFor=\"let k of keys;  let i = index\">\n              <td width=\"10%\" style=\"text-align: start; font-size:12px\">{{k.kiswahili_comment}} </td>\n              <td style=\"text-align: start; font-size:12px\">{{k.comment}}</td>\n              <td style=\"text-align: center; font-size:12px\">{{k.grade2}}</td>\n              <td style=\"text-align: center; font-size:12px\">{{k.min_mark}}-{{k.max_mark}}</td>\n            </tr>\n\n          </table>\n\n\n          <!-- <div><br></div>\n          <table width=\"100%\" border=\"1\">\n            <tr>\n              <td colspan=\"3\" style=\"text-align: center\"> ACQUISITION OF COMPETENCIES</td>\n            </tr>\n            <tr>\n              <td style=\"text-align: start; font-size:12px\">Competency</td>\n              <td style=\"text-align: start; font-size:12px\">Performance Indicators (EE, ME, AE, BE)</td>\n              <td style=\"text-align: start; font-size:12px\">Teacher's Comment</td>\n            </tr>\n            <tr *ngIf=\"comments.cbc === undefined \">\n              <td style=\"text-align: start\"> Communication and collaboration</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr *ngIf=\"comments.cbc !== undefined \">\n              <td style=\"text-align: start\">Communication and collaboration</td>\n              <td> {{comments.cbc[0]}}</td>\n              <td *ngIf=\"comments.cbc_teacher !== undefined\">{{comments.cbc_teacher[0]}}</td>\n              <td *ngIf=\"comments.cbc_teacher === undefined\"></td>\n            </tr>\n            <tr *ngIf=\"comments.cbc === undefined\">\n              <td style=\"text-align: start\">Critical thinking and problem solving</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr *ngIf=\"comments.cbc !== undefined || comments.cbc_teacher !== undefined\">\n              <td style=\"text-align: start\">Critical thinking and problem solving</td>\n              <td>{{comments.cbc[1]}}</td>\n              <td *ngIf=\"comments.cbc_teacher !== undefined\">{{comments.cbc_teacher[1]}}</td>\n              <td *ngIf=\"comments.cbc_teacher === undefined\"></td>\n            </tr>\n            <tr *ngIf=\"comments.cbc === undefined\">\n              <td style=\"text-align: start\">Imagination and creativity</td>\n              <td></td>\n              <td></td>\n            </tr>\n\n            <tr *ngIf=\"comments.cbc !== undefined || comments.cbc_teacher !== undefined \">\n              <td style=\"text-align: start\">Imagination and creativity</td>\n              <td>{{comments.cbc[2]}}</td>\n              <td *ngIf=\"comments.cbc_teacher !== undefined\">{{comments.cbc_teacher[2]}}</td>\n              <td *ngIf=\"comments.cbc_teacher === undefined\"></td>\n            </tr>\n            <tr *ngIf=\"comments.cbc === undefined\">\n              <td style=\"text-align: start\">Learning to learn</td>\n              <td></td>\n              <td></td>\n            </tr>\n\n            <tr *ngIf=\"comments.cbc !== undefined\">\n              <td style=\"text-align: start\"> Learning to learn</td>\n              <td>{{comments.cbc[3]}}</td>\n              <td *ngIf=\"comments.cbc_teacher !== undefined\">{{comments.cbc_teacher[3]}}</td>\n              <td *ngIf=\"comments.cbc_teacher === undefined\"></td>\n            </tr>\n            <tr *ngIf=\"comments.cbc === undefined\">\n              <td style=\"text-align: start\">Digital literacy</td>\n              <td></td>\n              <td></td>\n            </tr>\n\n            <tr *ngIf=\"comments.cbc !== undefined || comments.cbc_teacher !== undefined\">\n              <td style=\"text-align: start\"> Digital literacy</td>\n              <td>{{comments.cbc[4]}}</td>\n              <td *ngIf=\"comments.cbc_teacher !== undefined\">{{comments.cbc_teacher[4]}}</td>\n              <td *ngIf=\"comments.cbc_teacher === undefined\"></td>\n            </tr>\n\n            <tr *ngIf=\"comments.cbc === undefined\">\n              <td style=\"text-align: start\">Self-effiency</td>\n              <td></td>\n              <td></td>\n            </tr>\n\n            <tr *ngIf=\"comments.cbc !== undefined || comments.cbc_teacher !== undefined\">\n              <td style=\"text-align: start\">Self-effiency</td>\n              <td>{{comments.cbc[5]}}</td>\n              <td *ngIf=\"comments.cbc_teacher !== undefined\">{{comments.cbc_teacher[5]}}</td>\n              <td *ngIf=\"comments.cbc_teacher === undefined\"></td>\n            </tr>\n            <tr *ngIf=\"comments.cbc === undefined\">\n              <td style=\"text-align: start\">Citizenship</td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr *ngIf=\"comments.cbc !== undefined || comments.cbc_teacher !== undefined\">\n              <td style=\"text-align: start\">Citizenship</td>\n              <td>{{comments.cbc[6]}}</td>\n              <td *ngIf=\"comments.cbc_teacher !== undefined\">{{comments.cbc_teacher[6]}}</td>\n              <td *ngIf=\"comments.cbc_teacher === undefined\"></td>\n            </tr>\n\n          </table> -->\n\n          <div><br></div>\n          <!-- <table width=\"100%\" border=\"1\">\n            <tr>\n              <td colspan=\"5\" style=\"text-align: center\"> GENERAL CONDUCT AND BEHAVIOUR</td>\n            </tr>\n            <tr>\n              <td style=\"text-align: start; font-size:12px\">Behaviour and Work Habits</td>\n              <td style=\"text-align: start; font-size:12px\">Excellent</td>\n              <td style=\"text-align: start; font-size:12px\">Good</td>\n              <td style=\"text-align: start; font-size:12px\">Satisfactory</td>\n              <td style=\"text-align: start; font-size:12px\">Cause For Concern</td>\n            </tr>\n            <tr *ngIf=\"comments.cbc_general === undefined\">\n              <td style=\"text-align: start; font-size:12px\">Punctuality</td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr *ngIf=\"comments.cbc_general !== undefined\">\n              <td style=\"text-align: start; font-size:12px\"> Punctuality</td>\n              <td *ngIf=\"comments.cbc_general[0] ==='Excellent'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[0] ==='Good'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[0] ==='Satisfactory'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[0] ==='Cause For Concern'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n            </tr>\n\n            <tr *ngIf=\"comments.cbc_general === undefined\">\n              <td style=\"text-align: start; font-size:12px\">Time Management</td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n            </tr>\n            <tr *ngIf=\"comments.cbc_general !== undefined\">\n              <td style=\"text-align: start; font-size:12px\">Time Management</td>\n              <td *ngIf=\"comments.cbc_general[1] ==='Excellent'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[1] ==='Good'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[1] ==='Satisfactory'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[1] ==='Cause For Concern'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n            </tr>\n\n\n            <tr *ngIf=\"comments.cbc_general === undefined\">\n              <td style=\"text-align: start; font-size:12px\">Following Instructions</td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n            </tr>\n\n            <tr *ngIf=\"comments.cbc_general !== undefined\">\n              <td style=\"text-align: start; font-size:12px\">Following Instructions</td>\n              <td *ngIf=\"comments.cbc_general[2] ==='Excellent'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[2] ==='Good'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[2] ==='Satisfactory'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[2] ==='Cause For Concern'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n            </tr>\n\n\n            <tr *ngIf=\"comments.cbc_general === undefined\">\n              <td style=\"text-align: start; font-size:12px\"> Respect For Others</td>\n              <td></td>\n              <td></td>\n              <td></td>\n              <td></td>\n            </tr>\n\n            <tr *ngIf=\"comments.cbc_general !== undefined\">\n              <td style=\"text-align: start; font-size:12px\"> Respect For Others</td>\n              <td *ngIf=\"comments.cbc_general[3] ==='Excellent'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[3] ==='Good'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[3] ==='Satisfactory'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n              <td *ngIf=\"comments.cbc_general[3] ==='Cause For Concern'\">\n                <ion-icon name=\"checkmark\"></ion-icon>\n              </td>\n            </tr>\n          </table> -->\n          <h1 style=\"font-size: 12px;\">REMARKS</h1>\n          <table width=\"100%\" border=\"1\">\n            <tr>\n              <td width=\"50%\" style=\"text-align:inherit; margin:1px;;\"><b>Class Teacher Name:</b>\n                {{comments.teacher_name}}\n              </td>\n              <td width=\"50%\" style=\"text-align:inherit; margin:1px;\"><b>Comments:</b> {{comments.teacher_comments}}\n              </td>\n            </tr>\n            <tr>\n              <td width=\"50%\" style=\"text-align:start; margin:1px;;\"> <b>Head Teacher Name:</b>\n                {{comments.head_teacher_name}}\n\n              </td>\n              <td width=\"50%\" style=\"text-align:inherit; margin:1px;\"><b>Comments:</b> {{comments.principle_comments}}\n              </td>\n\n            </tr>\n            <tr>\n              <td width=\"100%\">Closing Date: <br>{{this.formatDate(closing_date)}}</td>\n              <td width=\"100%\" *ngIf=\"opening_date\">Next Terms Begins: <br>{{this.formatDate(opening_date)}}</td>\n            </tr>\n          </table>\n        </div>\n        <!--LASALLE UPPER PRIMARY SCHOOL-->\n        <div\n          *ngIf=\" student.class_cat_id  !== 5 && student.class_cat_id  !== 7 && student.class_cat_id  !== 9 && student.class_cat_id  !== 6 && student.class_cat_id  !== 8 && student.class_cat_id  !== 21  \">\n          <ion-row>\n            <ion-col col-12> Name: {{reportCards.student_name}}</ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6> Class: <small>{{reportCards.class_name}}</small></ion-col>\n            <ion-col col-6>Admission Number:<small> {{reportCards.admission_number}}</small></ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col col-6>Term: {{reportCards.term_name}} </ion-col>\n            <ion-col col-6>Year: {{reportCards.year}} </ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let p of positions\">\n            <ion-col col-6>Position : <small></small>{{p.this_term_position.position}} /\n              {{p.this_term_position.position_out_of}}</ion-col>\n            <ion-col col-6 *ngIf=\"p.last_term_position !== null\">Position Last\n              Term:<small>{{p.last_term_position.position}}\n                /\n                {{p.last_term_position.position_out_of}}</small></ion-col>\n          </ion-row>\n          <ion-row *ngFor=\"let ov of overall\">\n            <ion-col col-6>Last Term Marks: <small>{{ov.last_term_marks_and_grade[0].overall_mark}}</small>\n            </ion-col>\n            <ion-col col-6>Current Term Marks: <small>{{ov.this_term_marks_and_grade[0].overall_mark}}</small></ion-col>\n          </ion-row>\n          <div class=\"table_wrapper\">\n            <table border=\"1\">\n              <!-- {{examTypes.length}} -->\n              <tr>\n                <td scope=\"col\" width=\"7%\" rowspan=\"2\">SUBJECT </td>\n                <td scope=\"col\" [attr.colspan]=colspan> MARKS </td>\n              </tr>\n              <tr>\n                <!-- <td width=\"7%\"></td> -->\n                <td *ngFor=\"let e of exam_type;  let i = index\" scope=\"col\"\n                  style=\"text-align: center; font-size:12px; font-weight:bold\">\n                  {{e}}\n              <tr>\n                <td scope=\"col\"> Mark % </td>\n                <td scope=\"col\"> Grade </td>\n                <td scope=\"col\">Out Of</td>\n              </tr>\n              </td>\n              <td style=\"text-align: center; font-size: 12px; font-weight: bold;\" scope=\"col\">\n                Overall\n                <tr>\n                  <td scope=\"col\"> Avg % </td>\n                  <td scope=\"col\"> Grade </td>\n                </tr>\n              </td>\n              </tr>\n              <tbody *ngFor=\"let r of sub;  let i = index\">\n                <tr style=\"text-align: center\">\n                  <!-- <td style=\"text-align: start; font-size:12px; font-weight:bold\" >\n                 {{r.subject_name}}\n                </td> -->\n                  <td style=\"text-align: start;  font-size:12px; font-weight:bold;\" *ngIf=\"r.parent_subject_id === null\"\n                    width=\"4%\">\n                    {{r.subject_name}}\n                  </td>\n                  <td style=\"font-size:12px;  margin-left: 5px !important;\" *ngIf=\"r.parent_subject_id !== null\"\n                    width=\"4%\">\n                    {{r.subject_name}}\n                  </td>\n                  <td *ngIf=\"cat1.length != 0\" scope=\"col\" style=\"text-align: center; font-size: 12px;\">\n                <tr *ngFor=\"let ca of cat1\" style=\"text-align: center;\">\n                  <td *ngIf=\"r.subject_name === ca.subject_name\" scope=\"col\">\n                    <div *ngIf=\"ca.mark !== null\">\n                      {{ca.mark}}\n                    </div>\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                    <div *ngIf=\"ca.grade !== null\">\n                      {{ca.grade}}\n                    </div>\n                  </td>\n                  <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name && ca.grade !== null\">\n                    {{ca.out_of}}\n                  </td>\n                </tr>\n                </td>\n                <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 1\">\n                  <tr *ngFor=\"let ca of cat2\" style=\"text-align: center;\">\n                    <td *ngIf=\"r.subject_name === ca.subject_name\" scope=\"col\">\n                      {{ca.mark}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.grade}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.out_of}}\n                    </td>\n                  </tr>\n                </td>\n                <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 2\">\n                  <tr *ngFor=\"let ca of cat3\" style=\"text-align: center;\">\n                    <td *ngIf=\"r.subject_name === ca.subject_name\" scope=\"col\">\n                      {{ca.mark}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.grade}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.out_of}}\n                    </td>\n                  </tr>\n                </td>\n                <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 3\">\n                  <tr *ngFor=\"let ca of cat4\" style=\"text-align: center;\">\n                    <td *ngIf=\"r.subject_name === ca.subject_name\" scope=\"col\">\n                      {{ca.mark}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.grade}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.out_of}}\n                    </td>\n                  </tr>\n                </td>\n                <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 4\">\n                  <tr *ngFor=\"let ca of cat5\" style=\"text-align: center;\">\n                    <td *ngIf=\"r.subject_name === ca.subject_name\" scope=\"col\">\n                      {{ca.mark}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.grade}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.out_of}}\n                    </td>\n                  </tr>\n                </td>\n                <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 5\">\n                  <tr *ngFor=\"let ca of cat6\" style=\"text-align: center;\">\n                    <td *ngIf=\"r.subject_name === ca.subject_name\" scope=\"col\">\n                      {{ca.mark}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.grade}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.out_of}}\n                    </td>\n                  </tr>\n                </td>\n                <td style=\"font-size: 12px;\" scope=\"col\" *ngIf=\"exam_marks.length > 6\">\n                  <tr *ngFor=\"let ca of cat7\" style=\"text-align: center;\">\n                    <td *ngIf=\"r.subject_name === ca.subject_name\" scope=\"col\">\n                      {{ca.mark}}\n                    </td>\n\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.grade}}\n                    </td>\n                    <td scope=\"col\" *ngIf=\"r.subject_name === ca.subject_name\">\n                      {{ca.out_of}}\n                    </td>\n                  </tr>\n                </td>\n                <td scope=\"col\">\n                  <tr *ngFor=\"let o of subjOvrl\" style=\"text-align: center\">\n                    <td scope=\"col\" *ngIf=\"o.subject_id === r.subject_id\">\n                      {{o.average}}%\n                    </td>\n                    <td scope=\"col\" *ngIf=\"o.subject_id === r.subject_id\">\n                      {{o.grade}}\n                    </td>\n                  </tr>\n                </td>\n                </tr>\n\n              </tbody>\n\n              <tfoot>\n                <tr>\n                  <td>TOTAL</td>\n                  <td *ngFor=\"let t of total;  let i = index\" scope=\"col\">\n                <tr style=\"text-align: center\">\n                  <td scope=\"col\" style=\"text-align: center\" *ngIf=\"t.grade !== null\">{{t.total}}</td>\n                  <td scope=\"col\" style=\"text-align: center\" *ngIf=\"t.grade !== null\">{{t.grade}}</td>\n                  <td scope=\"col\" style=\"text-align: center;\" *ngIf=\"t.grade !== null\">{{t.out_of}}</td>\n                </tr>\n                </td>\n                <td scope=\"col\" style=\"text-align: center\" *ngFor=\"let ovg of avg\">\n                  <tr style=\"text-align: center\">\n                    <td scope=\"col\" style=\"text-align: center;\" *ngIf=\"ovg.percentage !== null\">\n                      {{ovg.percentage}} %\n                    </td>\n                    <td scope=\"col\" style=\"text-align: center;\" *ngIf=\"ovg.overall_grade !== null\">\n                      {{ovg.overall_grade}}\n                    </td>\n                  </tr>\n\n\n                </td>\n                </tr>\n\n              </tfoot>\n            </table>\n          </div>\n          <h3 style=\"font-size: 12px;\">REMARKS</h3>\n          <table width=\"100%\" border=\"1\">\n            <tr>\n              <td width=\"50%\" style=\"text-align:inherit; margin:1px;;\"><b>Class Teacher Name:</b>\n                {{comments.teacher_name}}\n              </td>\n              <td width=\"50%\" style=\"text-align:inherit; margin:1px;\"><b>Comments:</b> {{comments.teacher_comments}}\n              </td>\n            </tr>\n            <tr>\n              <td width=\"50%\" style=\"text-align:start; margin:1px;;\"> <b>Head Teacher Name:</b>\n                {{comments.head_teacher_name}}\n\n              </td>\n              <td width=\"50%\" style=\"text-align:inherit; margin:1px;\"><b>Comments:</b> {{comments.principle_comments}}\n              </td>\n\n            </tr>\n            <tr>\n              <td width=\"100%\">Closing Date: <br>{{this.formatDate(closing_date)}}</td>\n              <td width=\"100%\" *ngIf=\"opening_date\">Next Terms Begins: <br>{{this.formatDate(opening_date)}}</td>\n            </tr>\n          </table>\n        </div>\n\n      </div>\n    </div>\n\n  </div>\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/reports/grades/grades.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/reports/grades/grades.module.ts ***!
  \*******************************************************/
/*! exports provided: GradesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesPageModule", function() { return GradesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _grades_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./grades.page */ "./src/app/pages/reports/grades/grades.page.ts");







const routes = [
    {
        path: '',
        component: _grades_page__WEBPACK_IMPORTED_MODULE_6__["GradesPage"]
    }
];
let GradesPageModule = class GradesPageModule {
};
GradesPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_grades_page__WEBPACK_IMPORTED_MODULE_6__["GradesPage"]]
    })
], GradesPageModule);



/***/ }),

/***/ "./src/app/pages/reports/grades/grades.page.scss":
/*!*******************************************************!*\
  !*** ./src/app/pages/reports/grades/grades.page.scss ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content ion-spinner > svg {\n  width: 80px !important;\n  height: 80px !important;\n}\nion-content .table_wrapper {\n  display: block;\n  overflow-x: auto;\n  white-space: nowrap;\n}\nion-content body {\n  background-color: white;\n}\nion-content table {\n  border-collapse: collapse !important;\n  width: 100%;\n  border: 1px solid black;\n}\nion-content td {\n  width: 42px !important;\n  height: 100%;\n  text-align: center;\n}\nion-content table tr:last-child td {\n  border: 1px solid #706d6d;\n}\nion-content ion-col {\n  font-size: 12px;\n  font-weight: 500;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9rb2tvZGF2aWQvRG93bmxvYWRzL2VwL3NyYy9hcHAvcGFnZXMvcmVwb3J0cy9ncmFkZXMvZ3JhZGVzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvcGFnZXMvcmVwb3J0cy9ncmFkZXMvZ3JhZGVzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHNCQUFBO0VBQ0EsdUJBQUE7QUNEUjtBRHNCSTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDcEJSO0FEOEJJO0VBQU0sdUJBQUE7QUMzQlY7QUQ0Qkk7RUFBTyxvQ0FBQTtFQUNDLFdBQUE7RUFDQSx1QkFBQTtBQ3pCWjtBRDBCSTtFQUFLLHNCQUFBO0VBQ08sWUFBQTtFQUNBLGtCQUFBO0FDdkJoQjtBRDRCSTtFQUF3Qix5QkFBQTtBQ3pCNUI7QUQwQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUN4QlIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9yZXBvcnRzL2dyYWRlcy9ncmFkZXMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pb24tY29udGVudHtcbiAgICBpb24tc3Bpbm5lciA+IHN2ZyB7XG4gICAgICAgIHdpZHRoOiA4MHB4ICFpbXBvcnRhbnQ7XG4gICAgICAgIGhlaWdodDogODBweCAhaW1wb3J0YW50O31cbiAgICAvLyBmb250LXNpemU6IDE0cHg7XG4gICAgLy8gZm9udC13ZWlnaHQ6IDUwMDtcblxuICAgIC8vIC5maXhlZF9oZWFkZXIgdGJvZHl7XG4gICAgLy8gICAgIGRpc3BsYXk6YmxvY2s7XG4gICAgLy8gICAgIG92ZXJmbG93OmF1dG87XG4gICAgLy8gICAgIGhlaWdodDoyMDBweDtcbiAgICAvLyAgICAgd2lkdGg6MTAwJTtcbiAgICAvLyAgIH1cbiAgICAgIFxuICAgIC8vICAgLmZpeGVkX2hlYWRlciB0aGVhZCB0cntcbiAgICAvLyAgICAgZGlzcGxheTpibG9jaztcbiAgICAvLyAgIH1cblxuXG4gICAgICBcbiAgICAvLyAuaGlkZXtcbiAgICAvLyAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgIC8vICAgICBkaXNwbGF5Om5vbmU7XG4gICAgLy8gICB9XG4gICAgLnRhYmxlX3dyYXBwZXJ7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIH1cblxuICAgIC8vIHRhYmxlIHtcbiAgICAvLyAgICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICAvLyB9XG4gICAgLy8gI29uZSB0ZCB7XG4gICAgLy8gICAgIGJvcmRlcjogMXB4IHNvbGlkICNmZjAwMDA7IFxuICAgIC8vIH1cblxuICAgIGJvZHkge2JhY2tncm91bmQtY29sb3I6IHdoaXRlO31cbiAgICB0YWJsZSB7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlICFpbXBvcnRhbnQ7IFxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBibGFja31cbiAgICB0ZCB7IHdpZHRoOiA0MnB4ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMDAlOyBcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgXG4gICAgfVxuICAgXG4gICAgLy90YWJsZSB0cjpmaXJzdC1jaGlsZCB0ZCB7Ym9yZGVyOiAuNXB4IHNvbGlkIHJnYigxMTIsIDEwOSwgMTA5KTsgfVxuICAgIHRhYmxlIHRyOmxhc3QtY2hpbGQgdGQge2JvcmRlcjogMXB4IHNvbGlkIHJnYigxMTIsIDEwOSwgMTA5KTsgfVxuICAgIGlvbi1jb2x7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgLy8gdGR7XG4gICAgLy8gICAgIHdpZHRoOiBhdXRvO1xuICAgIC8vIH1cbiAgICAvLyAgIC50YWJsZS1zY3JvbGwge1xuICAgIC8vICAgICAvL3RvcDoxMHB4O1xuICAgIC8vICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcbiAgICAvLyAgICAgb3ZlcmZsb3cteDogc2Nyb2xsOyBcbiAgICAvLyAgICAgb3ZlcmZsb3cteTpzY3JvbGw7XG4gICAgLy8gICAgIG1heC13aWR0aDo2MDBweCBhdXRvO1xuICAgIC8vICAgICBtYXJnaW46MHB4IGF1dG87XG4gICAgLy8gICAgIC8vb3ZlcmZsb3c6aGlkZGVuO1xuICAgIC8vICAgICBoZWlnaHQ6NTAwcHg7XG4gICAgLy8gICAgIG92ZXJmbG93OmF1dG87XG4gICAgLy8gICAgIGJvcmRlcjouNXB4IHNvbGlkIHJnYigxNjUsIDE1OCwgMTU4KTtcbiAgICAvLyB9XG4gICAgLy8gLnRhYmxlLXdyYXAge1xuICAgIC8vICAgICB3aWR0aDoxMDAlO1xuICAgIC8vICAgICAvL292ZXJmbG93OmF1dG87XG4gICAgLy8gfVxuICAgIC8vIC50YWJsZS1zY3JvbGwgdGFibGUge1xuICAgIC8vICAgICB3aWR0aDoxMDAlO1xuICAgIC8vICAgICBtYXJnaW46MHB4O1xuICAgIC8vICAgIC8vIGJvcmRlci1jb2xsYXBzZTpzZXBhcmF0ZTtcbiAgICAvLyAgICAgYm9yZGVyLXNwYWNpbmc6MDtcbiAgICAvLyB9XG4gICAgLy8gLnRhYmxlLXNjcm9sbCB0aCwgLnRhYmxlLXNjcm9sbCB0ZCB7XG4gICAgLy8gICAgIHBhZGRpbmc6NXB4IDEwcHg7XG4gICAgLy8gICAgIGJvcmRlcjowLjVweCBzb2xpZCByZ2IoODAsIDc3LCA3Nyk7XG4gICAgLy8gICAgIGJhY2tncm91bmQ6I2ZmZjtcbiAgICAvLyAgICAgd2hpdGUtc3BhY2U6bm93cmFwO1xuICAgIC8vICAgICB2ZXJ0aWNhbC1hbGlnbjp0b3A7XG4gICAgLy8gfVxuICAgIC8vIC50YWJsZS1zY3JvbGwgdGhlYWQsIC50YWJsZS1zY3JvbGwgdGZvb3Qge1xuICAgIC8vICAgICBiYWNrZ3JvdW5kOiNmOWY5Zjk7XG4gICAgLy8gfVxuICAgIC8vIC5jbG9uZSB7XG4gICAgLy8gICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIC8vICAgICB0b3A6MDtcbiAgICAvLyAgICAgbGVmdDowO1xuICAgIC8vICAgICBwb2ludGVyLWV2ZW50czpub25lO1xuICAgIC8vIH1cbiAgICAvLyAuY2xvbmUgdGgsIC5jbG9uZSB0ZCB7XG4gICAgLy8gICAgIHZpc2liaWxpdHk6aGlkZGVuXG4gICAgLy8gfVxuICAgIC8vIC5jbG9uZSB0ZCwgLmNsb25lIHRoIHtcbiAgICAvLyAgICAgYm9yZGVyLWNvbG9yOnRyYW5zcGFyZW50XG4gICAgLy8gfVxuICAgIC8vIC5jbG9uZSB0Ym9keSB0aCB7XG4gICAgLy8gICAgIHZpc2liaWxpdHk6dmlzaWJsZTtcbiAgICAvLyAgICAgY29sb3I6cmVkO1xuICAgIC8vIH1cbiAgICAvLyAuY2xvbmUgLmZpeGVkLXNpZGUge1xuICAgIC8vICAgICBib3JkZXI6LjVweCBzb2xpZCAjMDAwO1xuICAgIC8vICAgICBiYWNrZ3JvdW5kOiNlZWU7XG4gICAgLy8gICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgLy8gICAgIHZpc2liaWxpdHk6dmlzaWJsZTtcbiAgICAvLyB9XG4gICAgLy8gLmNsb25lIHRoZWFkLCAuY2xvbmUgdGZvb3R7YmFja2dyb3VuZDp0cmFuc3BhcmVudDtcbiAgICAvLyB9XG59XG5cbiIsImlvbi1jb250ZW50IGlvbi1zcGlubmVyID4gc3ZnIHtcbiAgd2lkdGg6IDgwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA4MHB4ICFpbXBvcnRhbnQ7XG59XG5pb24tY29udGVudCAudGFibGVfd3JhcHBlciB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBvdmVyZmxvdy14OiBhdXRvO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuaW9uLWNvbnRlbnQgYm9keSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuaW9uLWNvbnRlbnQgdGFibGUge1xuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbn1cbmlvbi1jb250ZW50IHRkIHtcbiAgd2lkdGg6IDQycHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5pb24tY29udGVudCB0YWJsZSB0cjpsYXN0LWNoaWxkIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgIzcwNmQ2ZDtcbn1cbmlvbi1jb250ZW50IGlvbi1jb2wge1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/pages/reports/grades/grades.page.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/reports/grades/grades.page.ts ***!
  \*****************************************************/
/*! exports provided: GradesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesPage", function() { return GradesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic-native/file-opener/ngx */ "./node_modules/@ionic-native/file-opener/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/session.service */ "./src/app/services/session.service.ts");







// import { mkdir } from 'fs';
let GradesPage = class GradesPage {
    constructor(route, router, authService, fileOpener, sessionService) {
        this.route = route;
        this.router = router;
        this.authService = authService;
        this.fileOpener = fileOpener;
        this.sessionService = sessionService;
        this.subjects = new Array();
        this.comments = new Object();
        this.types = new Array();
        this.marks = new Array();
        this.reportCards = new Array();
        this.examTypes = new Array();
        this.schoolInfo = new Array();
        this.type = new Array();
        this.lastterm = new Object();
        this.positions = new Object();
        this.totals = new Array();
        this.last_term = new Object();
        this.this_term = new Object();
        this.exam_marks = new Array();
        this.exam_type = new Array();
        this.grades = new Array();
        this.cat1 = new Array();
        this.cat2 = new Array();
        this.cat3 = new Array();
        this.cat4 = new Array();
        this.cat5 = new Array();
        this.cat6 = new Array();
        this.cat7 = new Array();
        this.overall = new Array();
        this.total = new Array();
        this.sub = new Array();
        this.avg = new Array();
        this.fake = 0;
        setTimeout(() => {
            this.fake = 1;
        }, 6000);
        this.subjOvrl = new Array();
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.student = this.router.getCurrentNavigation().extras.state.details;
                this.reportCards = this.router.getCurrentNavigation().extras.state.reports;
                this.type = this.router.getCurrentNavigation().extras.state.examTypes;
                this.term_id = this.router.getCurrentNavigation().extras.state.term_id;
                this.cbc = this.router.getCurrentNavigation().extras.state.type;
                this.class_id = this.router.getCurrentNavigation().extras.state.class_id;
                this.schoolInfo = this.router.getCurrentNavigation().extras.state.schoolInfo;
                this.assets = this.student.student_image === null ? 1 :
                    `https://${this.student.school}.eduweb.co.ke/assets/students/${this.student.student_image}`;
                this.sessionService.sessionTimeOut();
                this.col1 = this.examTypes.length;
                // get headers
                console.log(this.schoolInfo);
                const schoolDetails = {};
                this.schoolInfo.forEach(element => {
                    if (element.name === 'Letterhead') {
                        if (element.name === 'Letterhead'
                            || element.name === 'logo'
                            || element.name === 'School Name'
                            || element.name === 'Address 2'
                            || element.name === 'Address 1'
                            || element.name === 'Phone Number'
                            || element.name === 'Email Address'
                            || element.name === 'Phone Number 2') {
                            // console.log(element.name, element.value);
                            if (element.name === 'Letterhead') {
                                const Letterhead = element.value;
                                // if(Letterhead == undefined || Letterhead == null){
                                //   schoolDetails['head']= ``
                                // }
                                schoolDetails['head'] = Letterhead;
                            }
                            else if (element.name === 'logo') {
                                const Logo = element.value;
                                schoolDetails['Logo'] = Logo;
                                console.log(Logo);
                            }
                            else if (element.name === 'School Name') {
                                const schoolname = element.value;
                                schoolDetails['schoolname'] = schoolname;
                            }
                            else if (element.name === 'Address 2') {
                                schoolDetails['address2'] = element.value;
                            }
                            else if (element.name === 'Address 1') {
                                schoolDetails['address1'] = element.value;
                            }
                            else if (element.name === 'Phone Number') {
                                schoolDetails['phone'] = element.value;
                            }
                            else if (element.name === 'Phone Number 2') {
                                schoolDetails['phone2'] = element.value;
                            }
                            else if (element.name === 'Email Address') {
                                schoolDetails['email'] = element.value;
                            }
                        }
                        else {
                        }
                    }
                });
                this.schoolHeaders = schoolDetails;
                console.log(this.schoolHeaders);
                this.usehead = this.schoolHeaders.head ? 1 : 0;
                this.header = `https://${this.student.school}.eduweb.co.ke/assets/schools/${this.schoolHeaders.head}`;
                this.header1 = `https://${this.student.school}.eduweb.co.ke/assets/schools/${this.schoolHeaders.head}`;
                console.log(this.header, this.header1);
                console.log(this.reportCards.report_card_comments);
                this.comments = this.reportCards.report_card_comments;
                if (this.reportCards.exam_marks == null) {
                    this.exam_marks = [" "];
                }
                else {
                    this.exam_marks = this.reportCards.exam_marks === undefined ? [] : this.reportCards.exam_marks;
                }
                // SOLN
                //dates 
                this.opening_date = this.reportCards.next_term_begins;
                this.closing_date = this.reportCards.closing_date;
                // subjects
                this.sub = this.reportCards.subjects_column == undefined ? [] : this.reportCards.subjects_column;
                // exam types
                console.log(this.reportCards);
                var exam = [];
                // tslint:disable-next-line:prefer-for-of
                for (let a = 0; a < this.exam_marks.length; a++) {
                    // tslint:disable-next-line: prefer-for-of
                    for (let b = 0; b < this.exam_marks[a].exam_marks.length; b++) {
                        // console.log(this.exam_marks[a].exam_marks[b].mark);
                        if (this.exam_marks[a].exam_marks[b].mark !== null) {
                            exam.push(this.exam_marks[a].exam_type);
                            // this.exam_type['exam_type'] = this.exam_marks[a].exam_type;
                        }
                    }
                }
                this.exam_type = exam.filter(this.onlyUnique);
                // overall
                // tslint:disable-next-line: max-line-length
                this.subjOvrl = this.reportCards.subject_overalls_column[0].subject_overalls == undefined ? [] : this.reportCards.subject_overalls_column[0].subject_overalls;
                // exam grades
                if (this.exam_marks[0] !== undefined) {
                    this.cat1 = this.exam_marks[0].exam_marks === undefined ? [] : this.exam_marks[0].exam_marks;
                    var c = [];
                    this.cat1.filter((params) => {
                        c.push(params.mark);
                        return c != null;
                    });
                    console.log(c);
                    if (c.every(element => element === null)) {
                        this.cat1 = [];
                    }
                }
                if (this.exam_marks[1] !== undefined) {
                    this.cat2 = this.exam_marks[1].exam_marks === undefined ? [] : this.exam_marks[1].exam_marks;
                    var c = [];
                    this.cat2.filter((params) => {
                        c.push(params.mark);
                        return c != null;
                    });
                    console.log(c);
                    if (c.every(element => element === null)) {
                        this.cat2 = [];
                    }
                }
                if (this.exam_marks[2] !== undefined) {
                    this.cat3 = this.exam_marks[2].exam_marks === undefined ? [] : this.exam_marks[2].exam_marks;
                    var c = [];
                    this.cat3.filter((params) => {
                        c.push(params.mark);
                        return c != null;
                    });
                    console.log(c);
                    if (c.every(element => element === null)) {
                        this.cat3 = [];
                    }
                }
                if (this.exam_marks[3] !== undefined) {
                    this.cat4 = this.exam_marks[3].exam_marks === undefined ? [] : this.exam_marks[3].exam_marks;
                    var c = [];
                    this.cat4.filter((params) => {
                        c.push(params.mark);
                        return c != null;
                    });
                    console.log(c);
                    if (c.every(element => element === null)) {
                        this.cat4 = [];
                    }
                }
                if (this.exam_marks[4] !== undefined) {
                    this.cat5 = this.exam_marks[4].exam_marks === undefined ? [] : this.exam_marks[4].exam_marks;
                    var c = [];
                    this.cat5.filter((params) => {
                        c.push(params.mark);
                        return c != null;
                    });
                    console.log(c);
                    if (c.every(element => element === null)) {
                        this.cat5 = [];
                    }
                }
                if (this.exam_marks[5] !== undefined) {
                    this.cat6 = this.exam_marks[5].exam_marks === undefined ? [] : this.exam_marks[5].exam_marks;
                }
                if (this.exam_marks[6] !== undefined) {
                    this.cat7 = this.exam_marks[6].exam_marks === undefined ? [] : this.exam_marks[6].exam_marks;
                }
                //totals
                this.total = this.reportCards.totals[0].total_marks === undefined ? [] : this.reportCards.totals[0].total_marks;
                this.total = this.total.filter(params => {
                    return params.total !== null;
                });
                //comments
                //positions
                if (this.reportCards.calculation_mode === "Last Exam") {
                    // this.this_term = this.reportCards.totals[0].total_marks[this.total.length - 1];
                    //overall
                    this.overall = this.reportCards.overall_marks_and_grade_by_last_exam;
                    //position
                    this.positions = this.reportCards.positions_by_last_exam;
                }
                else {
                    this.positions = this.reportCards.positions;
                    this.overall = this.reportCards.overall_marks_and_grade;
                }
                // set marks according to computation methods
                if (this.reportCards.total_marks == null) {
                    this.this_term = [];
                }
                else {
                }
                //overage
                this.avg = this.reportCards.overall_marks_and_grade[0].this_term_marks_and_grade;
                // colSpan
                this.colspan = 3 * (this.exam_type.length) + 2;
                this.comments = this.reportCards.report_card_comments;
            }
        });
    }
    ngOnInit() {
    }
    ionViewWillEnter() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.authService.keys(this.student.school).subscribe(k => {
                //console.log(k);
                this.data = k;
                this.keys = this.data.data;
            });
        });
    }
    getMIMEtype(extn) {
        let ext = extn.toLowerCase();
        let MIMETypes = {
            'txt': 'text/plain',
            'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
            'doc': 'application/msword',
            'pdf': 'application/pdf',
            'jpg': 'image/jpeg',
            'bmp': 'image/bmp',
            'png': 'image/png',
            'xls': 'application/vnd.ms-excel',
            'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
            'rtf': 'application/rtf',
            'ppt': 'application/vnd.ms-powerpoint',
            'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
        };
        return MIMETypes[ext];
    }
    open(file) {
        const fileExtn = file.split('.').reverse()[0];
        const fileMIMEType = this.getMIMEtype(fileExtn);
        // console.log(fileExtn, fileMIMEType, file);
        this.fileOpener.showOpenWithDialog(file, fileMIMEType)
            .then(() => console.log('File is opened'))
            .catch(e => console.log('Error openening file', e));
    }
    formatDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_4__(date).format('Do MMM YYYY');
    }
    onlyUnique(value, index, self) {
        return self.indexOf(value) === index;
    }
    format(value) {
        // console.log(value);
        // console.log(value.grade);
    }
};
GradesPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] },
    { type: _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"] },
    { type: src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"] }
];
GradesPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-grades',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grades.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/reports/grades/grades.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./grades.page.scss */ "./src/app/pages/reports/grades/grades.page.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
        _ionic_native_file_opener_ngx__WEBPACK_IMPORTED_MODULE_5__["FileOpener"],
        src_app_services_session_service__WEBPACK_IMPORTED_MODULE_6__["SessionService"]])
], GradesPage);



/***/ })

}]);
//# sourceMappingURL=pages-reports-grades-grades-module-es2015.js.map