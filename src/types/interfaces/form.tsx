import { UseFormReturn } from "react-hook-form"
import { FormControlType } from "../enums/form";
import React from "react";

export interface IDynamicFormProps {
  formConfig: IFormConfig;
}

export interface IFormConfig {
  form: UseFormReturn<any>;
  formItems: IFormItem[];
  onSubmit: (data?: any) => void;
}

export interface IFormItem {
  key: string;
  label?: string;
  formControlType: FormControlType;
  placeholder?: string;
  description?: string;
  required?: boolean;
  type?: "text" | "password";
  component?: React.ReactElement;
  showStrength?: boolean;
  formItemClass?: string;
  formLabelClass?: string;
  formDescriptionClass?: string;
  formMessageClass?: string;
  formControlClass?: string;
}

