enum FORM_QUESTION_TYPE {
    TEXT = 'text',
    TEXTAREA = 'textarea',
    RADIO = 'radio',
    CHECKBOX = 'checkbox',
}

interface FormQuestionOption {
    id: string;
    label: string;
    selected: boolean;
}

type FormTextQuestion = {
    id: string;
    order: number; // 순서를 파악하기 위함, order 기준으로 정렬과 렌더링 순서를 정한다
    title: string;
    required: boolean;
    type: FORM_QUESTION_TYPE.TEXT;
};

type FormTextareaQuestion = {
    id: string;
    order: number; // 순서를 파악하기 위함, order 기준으로 정렬과 렌더링 순서를 정한다
    title: string;
    required: boolean;
    type: FORM_QUESTION_TYPE.TEXTAREA;
};

type FormRadioQuestion = {
    id: string;
    order: number; // 순서를 파악하기 위함, order 기준으로 정렬과 렌더링 순서를 정한다
    title: string;
    required: boolean;
    type: FORM_QUESTION_TYPE.RADIO;
    option: FormQuestionOption[];
};

type FormCheckboxQuestion = {
    id: string;
    order: number; // 순서를 파악하기 위함, order 기준으로 정렬과 렌더링 순서를 정한다
    title: string;
    required: boolean;
    type: FORM_QUESTION_TYPE.CHECKBOX;
    option: FormQuestionOption[];
};

type FormQuestion = FormTextQuestion | FormTextareaQuestion | FormRadioQuestion | FormCheckboxQuestion;

interface Form {
    id: string;
    title: string;
    description: string;
    questions: FormQuestion[];
}

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
