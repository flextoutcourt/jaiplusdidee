import { FormProvider, useForm } from "react-hook-form";
import TextInput from "../../core/design-system/form/TextInput";
import { Link } from "react-router-dom";
import Button from "../../core/design-system/Button";

export default function NewForm() {

    const methods = useForm();
    const {handleSubmit} = methods;

    const onSubmit = (data: any) => {
        console.log(data);
    }

  return (
    <>
      <div className="flex flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <FormProvider {...methods}>
                <TextInput name="password" label='New password' type='password' />
                <TextInput name="password_confirm" label='Password confirmation' type='password' />
            </FormProvider>

            <div>
              <Button>Submit</Button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Suddenly remember ?{' '}
            <Link to="/" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}
