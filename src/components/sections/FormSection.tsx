import ContactForm from '../ContactForm';
import Section from '../Section';
import SectionHeading from '../SectionHeading';

const FormSection = () => {
    return (
        <Section>
            <div>
            <SectionHeading>Contact Me</SectionHeading>
            <ContactForm/>
            </div>
        </Section>

    );
};  

export default FormSection;