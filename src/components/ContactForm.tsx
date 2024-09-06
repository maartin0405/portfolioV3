import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import FormInput from './FormInput';

export const FormSection = () => {
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if(form.current){
        emailjs
        .sendForm('service_wrj0foc', 'template_x0q837l', form.current, {
          publicKey: 'TlTK2WuZFOWytacMn',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };
    }

  return (
        <form className="flex flex-col gap-4" ref={form} onSubmit={sendEmail}>
            <div className="flex w-[100%] gap-4">
                <FormInput type="text" name="from_name" placeholder="Name" />
                <FormInput type="text" name="subject" placeholder="Subject" />
            </div>
            <FormInput type="email" name="email" placeholder="Email" />
            <FormInput type="text" name="message" placeholder="Message" />
            <button value="Send" className="px-4 py-2 border border-primary border-solid font-medium hover:bg-primary hover:bg-opacity-10 w-max outline-none focus:border-white" type="submit">
                Send </button>
        </form>
  );
};

export default FormSection;