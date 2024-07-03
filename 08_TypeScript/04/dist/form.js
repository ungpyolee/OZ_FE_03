"use strict";
var FORM_QUESTION_TYPE;
(function (FORM_QUESTION_TYPE) {
    FORM_QUESTION_TYPE["TEXT"] = "text";
    FORM_QUESTION_TYPE["TEXTAREA"] = "textarea";
    FORM_QUESTION_TYPE["RADIO"] = "radio";
    FORM_QUESTION_TYPE["CHECKBOX"] = "checkbox";
})(FORM_QUESTION_TYPE || (FORM_QUESTION_TYPE = {}));
// interface BaseFormQuestion {
//     id: string;
//     order: number; // 순서를 파악하기 위함, order 기준으로 정렬과 렌더링 순서를 정한다
//     title: string;
//     required: boolean;
// }
// interface FormQuestionText extends BaseFormQuestion {
//     type: FORM_QUESTION_TYPE;
//     options: FormQuestionOption[];
// }
// interface FormQuestionText extends BaseFormQuestion {
//     type: FORM_QUESTION_TYPE;
//     options: FormQuestionOption[];
// }
// interface FormQuestionText extends BaseFormQuestion {
//     type: FORM_QUESTION_TYPE;
//     options: FormQuestionOption[];
// }
// interface FormQuestionText extends BaseFormQuestion {
//     type: FORM_QUESTION_TYPE;
//     options: FormQuestionOption[];
// }
// interface Form {
//     id: string;
//     title: string;
//     description: string;
//     questions: BaseFormQuestion[];
// }
