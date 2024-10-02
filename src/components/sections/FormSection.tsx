import ContactForm from '../ContactForm';
import Section from '../Section';
import SectionHeading from '../SectionHeading';

const FormSection = () => {
    return (
        <Section>
            <div className="flex flex-col gap-8">
            <SectionHeading>contact_me</SectionHeading>
            <ContactForm/>
            </div>
        </Section>

    );
};  

export default FormSection;