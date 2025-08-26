import { cn } from "@/lib/utils";
import { FormControlType } from "@/types/enums/form";
import { IDynamicFormProps } from "@/types/interfaces/form";
import { forwardRef, Fragment, useMemo } from "react";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../../ui/form";
import InputPassword from "./input-password";

const DynamicForm = forwardRef<HTMLDivElement, IDynamicFormProps>((props, ref) => {
  const { formConfig: { form, formItems, onSubmit } } = props;
  const renderFormItem = useMemo(() => {
    return formItems.map((item, index) => {
      const key = `${index}-form-item`;

      switch (item.formControlType) {
        case FormControlType.TextField:
          return (
            <FormField
              key={key}
              control={form.control}
              name={item.key}
              render={({ field }) => (
                <FormItem className={cn("gap-0", item.formItemClass)}>
                  <FormLabel className={cn(item.formLabelClass)} required={item.required} >
                    {item.label}
                  </FormLabel>
                  <FormControl>
                    <InputPassword item={item} {...field} />
                  </FormControl>
                  <FormDescription className={item.formDescriptionClass}>
                    {item.description}
                  </FormDescription>
                  <FormMessage className={item.formMessageClass} />
                </FormItem>
              )}
            />
          );

        case FormControlType.Component:
          return <Fragment key={key}>{item.component}</Fragment>;

        default:
          return <Fragment key={key} />;
      }
    });
  }, [formItems, form.control]);

  return (
    <div ref={ref}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          {renderFormItem}
        </form>
      </Form>
    </div >
  );
});

DynamicForm.displayName = "DynamicForm";

export default DynamicForm;
